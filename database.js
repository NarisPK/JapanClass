/**
 * 🗄️ Database Management Module for Word Suggestions
 * รองรับการทำงานด้วย SQLite สำหรับ Node.js (High Performance & ACID Compliant)
 */

const path = require('path');
const fs = require('fs');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = path.join(DATA_DIR, 'suggestions.db');
const JSON_BACKUP_PATH = path.join(DATA_DIR, 'word_suggestions.json');

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
    console.warn('⚠️ SQLite native driver not available, falling back to JSON storage:', err.message);
    useSQLite = false;
}

// ระบบ Migrate ข้อมูลเดิมจาก word_suggestions.json เข้าสู่ SQLite Database อัตโนมัติ
function migrateFromJsonIfNeeded() {
    if (!useSQLite) return;
    try {
        if (fs.existsSync(JSON_BACKUP_PATH)) {
            const raw = fs.readFileSync(JSON_BACKUP_PATH, 'utf-8');
            const items = JSON.parse(raw || '[]');
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
        const query = db.prepare(`SELECT * FROM suggestions ORDER BY createdAt DESC`);
        return query.all();
    } else {
        try {
            if (!fs.existsSync(JSON_BACKUP_PATH)) return [];
            const data = fs.readFileSync(JSON_BACKUP_PATH, 'utf-8');
            return JSON.parse(data || '[]');
        } catch (e) {
            return [];
        }
    }
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
    }

    // ซิงค์สำรองไฟล์ JSON ไว้อีกชั้นหนึ่งเพื่อความปลอดภัยสูงสุด
    syncToJsonBackup();

    return newRecord;
}

/**
 * ลบคำศัพท์ตาม ID ออกจากฐานข้อมูล
 */
function deleteSuggestion(id) {
    if (useSQLite) {
        const stmt = db.prepare(`DELETE FROM suggestions WHERE id = ?`);
        stmt.run(id);
    }
    syncToJsonBackup();
    return true;
}

/**
 * อัปเดตสถานะคำศัพท์ (เช่น 'approved' หรือ 'rejected')
 */
function updateSuggestionStatus(id, newStatus) {
    if (useSQLite) {
        const stmt = db.prepare(`UPDATE suggestions SET status = ? WHERE id = ?`);
        stmt.run(newStatus, id);
    }
    syncToJsonBackup();
    return true;
}

/**
 * บันทึกสำรองลง JSON File
 */
function syncToJsonBackup() {
    try {
        if (useSQLite) {
            const all = getAllSuggestions();
            fs.writeFileSync(JSON_BACKUP_PATH, JSON.stringify(all, null, 2), 'utf-8');
        }
    } catch (e) {
        console.error('Backup sync error:', e);
    }
}

module.exports = {
    getAllSuggestions,
    addSuggestion,
    deleteSuggestion,
    updateSuggestionStatus,
    DB_PATH
};
