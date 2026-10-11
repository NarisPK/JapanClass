/**
 * 🗄️ Database Management Module for Word Suggestions
 * รองรับการทำงานทั้ง Node.js SQLite (DatabaseSync) และ Local JSON File Storage
 * ทนทานต่อ Serverless (Vercel / Read-only environments) พร้อมระบบ Auto-recovery
 */

const path = require('path');
const fs = require('fs');
const os = require('os');

// ค้นหาโฟลเดอร์สำหรับเขียนไฟล์ที่สามารถเขียนได้จริง (รองรับสภาพแวดล้อม Read-only บน Vercel/Cloud)
let DATA_DIR = path.join(__dirname, 'data');
try {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const testFile = path.join(DATA_DIR, '.writable_test');
    fs.writeFileSync(testFile, 'ok');
    fs.unlinkSync(testFile);
} catch (e) {
    // หากติดสิทธิ์ Read-Only ให้สลับไปใช้ Temporary Directory ของระบบทันที
    DATA_DIR = path.join(os.tmpdir(), 'japanclass_data');
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
}

const DB_PATH = path.join(DATA_DIR, 'suggestions.db');
const JSON_BACKUP_PATH = path.join(DATA_DIR, 'word_suggestions.json');

// ถ้าในโฟลเดอร์มีไฟล์เดิมจาก workspace ให้คัดลอกมาเพื่อรักษาประวัติข้อมูล
const SEED_JSON_PATH = path.join(__dirname, 'data', 'word_suggestions.json');
if (!fs.existsSync(JSON_BACKUP_PATH) && fs.existsSync(SEED_JSON_PATH)) {
    try {
        fs.copyFileSync(SEED_JSON_PATH, JSON_BACKUP_PATH);
    } catch (_) {}
}

let db = null;
let useSQLite = false;

// พยายามเชื่อมต่อ Node.js Native SQLite (มีใน Node.js 22.5+ และ 24+)
try {
    const { DatabaseSync } = require('node:sqlite');
    db = new DatabaseSync(DB_PATH);
    useSQLite = true;

    // สร้างตาราง suggestions และ Index สำหรับค้นหาได้อย่างรวดเร็ว
    db.exec(`
        CREATE TABLE IF NOT EXISTS suggestions (
            id TEXT PRIMARY KEY,
            kanji TEXT NOT NULL,
            reading TEXT NOT NULL,
            lesson INTEGER NOT NULL,
            meaning TEXT,
            note TEXT,
            status TEXT DEFAULT 'pending',
            createdAt TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_lesson ON suggestions(lesson);
        CREATE INDEX IF NOT EXISTS idx_createdAt ON suggestions(createdAt DESC);
    `);
    console.log('📦 Connected to SQLite Database:', DB_PATH);
} catch (err) {
    console.warn('⚠️ SQLite native driver not available, running on JSON file storage:', err.message);
    useSQLite = false;
}

// ฟังก์ชันอ่านข้อมูลจาก JSON File
function readJsonList() {
    try {
        if (!fs.existsSync(JSON_BACKUP_PATH)) {
            // ถ้ายังไม่มีไฟล์ ให้ลองดูไฟล์ seed เดิม
            if (fs.existsSync(SEED_JSON_PATH)) {
                const seedRaw = fs.readFileSync(SEED_JSON_PATH, 'utf-8');
                return JSON.parse(seedRaw || '[]');
            }
            return [];
        }
        const data = fs.readFileSync(JSON_BACKUP_PATH, 'utf-8');
        return JSON.parse(data || '[]');
    } catch (e) {
        console.error('Error reading JSON suggestions:', e.message);
        return [];
    }
}

// ฟังก์ชันเขียนข้อมูลลง JSON File
function writeJsonList(items) {
    try {
        fs.writeFileSync(JSON_BACKUP_PATH, JSON.stringify(items || [], null, 2), 'utf-8');
        // ซิงค์กลับไปยัง seed JSON ใน workspace ด้วยหากทำได้
        if (SEED_JSON_PATH !== JSON_BACKUP_PATH) {
            try {
                fs.writeFileSync(SEED_JSON_PATH, JSON.stringify(items || [], null, 2), 'utf-8');
            } catch (_) {}
        }
    } catch (e) {
        console.error('Error writing JSON suggestions:', e.message);
    }
}

// ระบบ Migrate ข้อมูลเดิมจาก JSON เข้าสู่ SQLite Database อัตโนมัติ (หากเปิดใช้ SQLite)
function migrateFromJsonIfNeeded() {
    if (!useSQLite) return;
    try {
        const items = readJsonList();
        if (Array.isArray(items) && items.length > 0) {
            const insertStmt = db.prepare(`
                INSERT OR IGNORE INTO suggestions (id, kanji, reading, lesson, meaning, note, status, createdAt)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `);
            for (const item of items) {
                if (item.id && item.kanji && item.reading) {
                    insertStmt.run(
                        item.id,
                        item.kanji,
                        item.reading,
                        parseInt(item.lesson, 10) || 1,
                        item.meaning || '',
                        item.note || '',
                        item.status || 'pending',
                        item.createdAt || new Date().toISOString()
                    );
                }
            }
            console.log(`✅ Migrated ${items.length} suggestions from JSON to SQLite database.`);
        }
    } catch (e) {
        console.error('Migration notice:', e.message);
    }
}

migrateFromJsonIfNeeded();

/**
 * ดึงรายการคำศัพท์ที่แจ้งเพิ่มทั้งหมด (เรียงจากใหม่สุดไปเก่าสุด)
 */
function getAllSuggestions() {
    if (useSQLite) {
        try {
            const query = db.prepare(`SELECT * FROM suggestions ORDER BY createdAt DESC`);
            const rows = query.all();
            if (rows && rows.length > 0) return rows;
        } catch (e) {
            console.error('SQLite query error, falling back to JSON:', e.message);
        }
    }
    const list = readJsonList();
    return list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
}

/**
 * เพิ่มคำศัพท์ใหม่ลงในฐานข้อมูล
 */
function addSuggestion({ kanji, reading, lesson, meaning, note }) {
    const id = 'sug_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const createdAt = new Date().toISOString();
    const cleanLesson = parseInt(lesson, 10) || 1;
    const cleanMeaning = (meaning || '').trim();
    const cleanNote = (note || '').trim();
    const status = 'pending';

    const newRecord = {
        id,
        kanji: kanji.trim(),
        reading: reading.trim(),
        lesson: cleanLesson,
        meaning: cleanMeaning,
        note: cleanNote,
        status,
        createdAt
    };

    if (useSQLite) {
        try {
            const stmt = db.prepare(`
                INSERT INTO suggestions (id, kanji, reading, lesson, meaning, note, status, createdAt)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `);
            stmt.run(
                newRecord.id,
                newRecord.kanji,
                newRecord.reading,
                newRecord.lesson,
                newRecord.meaning,
                newRecord.note,
                newRecord.status,
                newRecord.createdAt
            );
        } catch (e) {
            console.error('SQLite insert error:', e.message);
        }
    }

    // เขียนลงไฟล์ JSON เสมอเพื่อให้ทั้ง SQLite และ JSON ทำงานสอดคล้องกัน
    const list = readJsonList();
    list.unshift(newRecord);
    writeJsonList(list);

    return newRecord;
}

/**
 * ลบคำศัพท์ตาม ID ออกจากฐานข้อมูล
 */
function deleteSuggestion(id) {
    if (useSQLite) {
        try {
            const stmt = db.prepare(`DELETE FROM suggestions WHERE id = ?`);
            stmt.run(id);
        } catch (e) {
            console.error('SQLite delete error:', e.message);
        }
    }
    const list = readJsonList();
    const updated = list.filter(item => item.id !== id);
    writeJsonList(updated);
    return true;
}

/**
 * อัปเดตสถานะคำศัพท์ (เช่น 'approved' หรือ 'rejected')
 */
function updateSuggestionStatus(id, newStatus) {
    if (useSQLite) {
        try {
            const stmt = db.prepare(`UPDATE suggestions SET status = ? WHERE id = ?`);
            stmt.run(newStatus, id);
        } catch (e) {
            console.error('SQLite update status error:', e.message);
        }
    }
    const list = readJsonList();
    const target = list.find(item => item.id === id);
    if (target) {
        target.status = newStatus;
        writeJsonList(list);
    }
    return true;
}

/**
 * ดึงรายการคำศัพท์ที่ได้รับอนุมัติแล้วทั้งหมด (สำหรับผู้เรียนทุกคน)
 */
function getApprovedSuggestions() {
    if (useSQLite) {
        try {
            const query = db.prepare(`SELECT * FROM suggestions WHERE status = 'approved' ORDER BY createdAt ASC`);
            const rows = query.all();
            if (rows && rows.length > 0) return rows;
        } catch (e) {
            console.error('SQLite approved query error:', e.message);
        }
    }
    const all = getAllSuggestions();
    return all.filter(item => item.status === 'approved');
}

/**
 * ดึงรายการคำศัพท์ที่รอการตรวจสอบอนุมัติ (สำหรับ Admin)
 */
function getPendingSuggestions() {
    if (useSQLite) {
        try {
            const query = db.prepare(`SELECT * FROM suggestions WHERE status = 'pending' ORDER BY createdAt DESC`);
            const rows = query.all();
            if (rows && rows.length > 0) return rows;
        } catch (e) {
            console.error('SQLite pending query error:', e.message);
        }
    }
    const all = getAllSuggestions();
    return all.filter(item => item.status !== 'approved');
}

/**
 * แอดมินอนุมัติคำศัพท์
 */
function approveSuggestion(id) {
    if (useSQLite) {
        try {
            const stmt = db.prepare(`UPDATE suggestions SET status = 'approved' WHERE id = ?`);
            stmt.run(id);
            const getStmt = db.prepare(`SELECT * FROM suggestions WHERE id = ?`);
            const item = getStmt.get(id);
            if (item) {
                // ซิงค์ลง JSON ด้วย
                const list = readJsonList();
                const jsonTarget = list.find(x => x.id === id);
                if (jsonTarget) jsonTarget.status = 'approved';
                writeJsonList(list);
                return item;
            }
        } catch (e) {
            console.error('SQLite approve error:', e.message);
        }
    }
    updateSuggestionStatus(id, 'approved');
    const all = getAllSuggestions();
    return all.find(item => item.id === id);
}

module.exports = {
    getAllSuggestions,
    getApprovedSuggestions,
    getPendingSuggestions,
    approveSuggestion,
    addSuggestion,
    deleteSuggestion,
    updateSuggestionStatus,
    DB_PATH
};
