const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// ให้ Express สามารถแกะอ่านข้อมูลแบบ JSON จากหน้าบ้านได้
app.use(express.json());

// บอกให้เซิร์ฟเวอร์รู้ว่าไฟล์หน้าบ้าน (HTML/CSS) จะอยู่ในโฟลเดอร์ชื่อ public
app.use(express.static(path.join(__dirname, 'public')));

// เมื่อเปิดหน้าแรก (/) จะทำการดึงไฟล์ index.html ขึ้นมาส่งให้ผู้ใช้งาน
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// เส้นทางสำหรับตรวจคะแนน/คำตอบที่หน้าบ้านพูดส่งเข้ามา
app.post('/check-answer', (req, res) => {
    const { userAnswer } = req.body;
    const correctAnswer = "cat"; // กำหนดคำตอบที่ถูกต้องที่ต้องการตรวจ (เช่น แมว)

    // ตรวจคำตอบ หากตรงกันเป๊ะให้ส่งสถานะถูกกลับไป
    if (userAnswer === correctAnswer) {
        res.json({ isCorrect: true });
    } else {
        res.json({ isCorrect: false });
    }
});

// Proxy เส้นทางรูปภาพจาก Google Drive เพื่อแก้ปัญหาเบราว์เซอร์บล็อครูปภาพ (CORS / Third-party cookies)
app.get('/proxy-image', async (req, res) => {
    const fileId = req.query.id;
    if (!fileId) {
        return res.status(400).send('Missing file id');
    }
    try {
        const response = await fetch(`https://lh3.googleusercontent.com/d/${fileId}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        if (!response.ok) {
            return res.status(response.status).send(`Failed to fetch from Google Drive: ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType) {
            res.setHeader('Content-Type', contentType);
        }
        // Cache the images for 1 year so they load instantly after the first fetch
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.send(buffer);
    } catch (error) {
        console.error('Proxy image error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// ===== 🗄️ ระบบฐานข้อมูลคำศัพท์ที่ผู้ใช้แจ้งเพิ่ม (Word Suggestion Database) =====
const db = require('./database');

// เส้นทางบันทึกคำศัพท์แจ้งเพิ่ม (POST)
app.post('/api/suggest-word', (req, res) => {
    const { kanji, reading, lesson, meaning, note } = req.body;
    if (!kanji || !reading || !lesson) {
        return res.status(400).json({ error: 'กรุณากรอกคันจิ คำอ่าน และบทที่ต้องการแจ้งให้ครบถ้วน' });
    }
    try {
        const newEntry = db.addSuggestion({ kanji, reading, lesson, meaning, note });
        res.json({ success: true, item: newEntry });
    } catch (err) {
        console.error('Error adding suggestion to database:', err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูลลงฐานข้อมูล' });
    }
});

// เส้นทางดึงรายการคำศัพท์ที่แจ้งเพิ่มทั้งหมด (GET)
app.get('/api/suggest-words', (req, res) => {
    try {
        const list = db.getAllSuggestions();
        res.json(list);
    } catch (err) {
        console.error('Error fetching suggestions from database:', err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูลจากฐานข้อมูล' });
    }
});

// เส้นทางลบรายการคำศัพท์ที่แจ้งเพิ่ม (DELETE)
app.delete('/api/suggest-word/:id', (req, res) => {
    const { id } = req.params;
    try {
        db.deleteSuggestion(id);
        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting suggestion from database:', err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการลบข้อมูลจากฐานข้อมูล' });
    }
});

// สั่งให้ Server ทำงานและเปิดช่องทางการรับส่งข้อมูลที่พอร์ต 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});