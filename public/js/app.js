let allQuizModes = {};
let currentModeKey = 'food';

// ฟังก์ชันสำหรับแปลง URL รูปภาพ Google Drive ให้ผ่าน Proxy ของเซิร์ฟเวอร์
function getProxyUrl(url) {
    if (!url) return '';
    const match = url.match(/googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/) ||
        url.match(/drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/) ||
        url.match(/drive\.google\.com\/open\?.*id=([a-zA-Z0-9_-]+)/) ||
        url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
        return `/proxy-image?id=${match[1]}`;
    }
    return url;
}

let currentQuestion = 0;
let score = 0;
let answerSelected = false;

// RPG Bond Mechanics
let comboStreak = 0;
let playerEXP = 0;
let bondLevel = 1;

// ดึง Elements ที่เกี่ยวข้อง
const companionSidebar = document.getElementById('companion-sidebar');
const gameTerminalCol = document.getElementById('game-terminal-col');

const modeSelectionScreen = document.getElementById('mode-selection-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultArea = document.getElementById('result-area');
const adminScreen = document.getElementById('admin-screen');

const levelIndicator = document.getElementById('level-indicator');
const currentModeBadge = document.getElementById('current-mode-badge');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar');
const questionImg = document.getElementById('question-image');
const questionHint = document.getElementById('question-hint');
const choicesContainer = document.getElementById('choices-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const pronounceBtn = document.getElementById('pronounce-btn');

const finalScore = document.getElementById('final-score');
const gradeMessage = document.getElementById('grade-message');
const restartBtn = document.getElementById('restart-btn');

// จัดการเสียง Web Audio API
let audioCtx;
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playCorrectSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, now); // E5
        osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.25); // E6
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
    } catch (e) { console.log(e); }
}

function playIncorrectSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(196.00, now); // G3
        osc.frequency.linearRampToValueAtTime(98.00, now + 0.3); // G2
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
    } catch (e) { console.log(e); }
}

function playUnlockSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.3); // C6
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
    } catch (e) { console.log(e); }
}

function playCuteClickSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.06);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
    } catch (e) { console.log(e); }
}

// เอฟเฟกต์ดอกซากุระร่วงหล่นบนฉากหลัง
function createSakuraPetals() {
    const container = document.getElementById('sakura-container');
    if (!container) return;
    container.innerHTML = "";
    const count = 30;
    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.className = 'sakura';
        const size = Math.random() * 8 + 6;
        const left = Math.random() * 100;
        const animDuration = Math.random() * 9 + 7;
        const animDelay = Math.random() * 8;

        petal.style.width = `${size}px`;
        petal.style.height = `${size * 0.85}px`;
        petal.style.left = `${left}vw`;
        petal.style.animationDuration = `${animDuration}s`;
        petal.style.animationDelay = `-${animDelay}s`;
        container.appendChild(petal);
    }
}

const bookConfigs = {
    1: {
        num: 1,
        title: "Mina no niongo 1 みんなの日本語 1",
        rangeText: "บท 1-12",
        vocabLabel: "🌸 คลังคำศัพท์ (บท 1-12)",
        grammarLabel: "⛩️ ไวยากรณ์ เติมคำช่วย (บท 1-12)",
        themeGrad: "from-pink-400 to-rose-400",
        themeShadow: "shadow-pink-300/30",
        activeClass: "py-2.5 px-3 rounded-xl font-black text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-pink-300/30",
        inactiveClass: "py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 text-pink-700 hover:bg-pink-50",
        btnLabel: "🌸 เล่ม 1 (1-12)",
        headerBg: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-pink-300/30",
        cardBgVocab: "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60",
        cardBgGrammar: "from-rose-50 to-pink-100/70 border-rose-200 text-rose-800 hover:border-pink-300 hover:from-pink-100 hover:to-rose-100",
        borderClass: "border-pink-100",
        textTitle: "text-rose-950",
        textSub: "text-pink-600/70",
        badgeColor: "text-pink-500",
        badgeIcon: "fa-play",
        mascotMsg: "ยินดีต้อนรับสู่ มินนะ โนะ นิฮงโกะ เล่ม 1 (บทที่ 1-12) ค๊า! 🌸 พร้อมลุยคำศัพท์และไวยากรณ์แล้ว!"
    },
    2: {
        num: 2,
        title: "Mina no niongo 2 みんなの日本語 2",
        rangeText: "บท 13-25",
        vocabLabel: "📘 คลังคำศัพท์ (บท 13-25)",
        grammarLabel: "⛩️ ไวยากรณ์ เติมคำช่วย (บท 13-25)",
        themeGrad: "from-indigo-500 to-blue-600",
        themeShadow: "shadow-indigo-300/30",
        activeClass: "py-2.5 px-3 rounded-xl font-black text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-indigo-300/30",
        inactiveClass: "py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 text-indigo-700 hover:bg-indigo-50",
        btnLabel: "📘 เล่ม 2 (13-25)",
        headerBg: "from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-indigo-300/30",
        cardBgVocab: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        cardBgGrammar: "from-indigo-50 to-blue-100/70 border-indigo-200 text-indigo-900 hover:border-indigo-300 hover:from-indigo-100 hover:to-blue-100",
        borderClass: "border-indigo-100",
        textTitle: "text-indigo-950",
        textSub: "text-indigo-600/80",
        badgeColor: "text-indigo-500",
        badgeIcon: "fa-book-open",
        mascotMsg: "ยินดีต้อนรับสู่ มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 13-25) ค๊า! 📘✨ ลองฝึกไวยากรณ์เติมคำช่วยบท 13-25 ได้เลยนะคะ!"
    },
    3: {
        num: 3,
        title: "Mina no niongo 3 みんなの日本語 3",
        rangeText: "บท 26-38",
        vocabLabel: "📗 คลังคำศัพท์ (บท 26-38)",
        grammarLabel: "⛩️ ไวยากรณ์ เติมคำช่วย (บท 26-38)",
        themeGrad: "from-emerald-500 to-teal-600",
        themeShadow: "shadow-emerald-300/30",
        activeClass: "py-2.5 px-3 rounded-xl font-black text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-300/30",
        inactiveClass: "py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 text-emerald-700 hover:bg-emerald-50",
        btnLabel: "📗 เล่ม 3 (26-38)",
        headerBg: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-emerald-300/30",
        cardBgVocab: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        cardBgGrammar: "from-emerald-50 to-teal-100/70 border-emerald-200 text-emerald-900 hover:border-emerald-300 hover:from-emerald-100 hover:to-teal-100",
        borderClass: "border-emerald-100",
        textTitle: "text-emerald-950",
        textSub: "text-emerald-600/80",
        badgeColor: "text-emerald-500",
        badgeIcon: "fa-book-bookmark",
        mascotMsg: "ยินดีต้อนรับสู่ มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 26-38) ค๊า! 📗🎌 มาฝึกภาษาญี่ปุ่นระดับกลางไปด้วยกันนะคะ!"
    },
    4: {
        num: 4,
        title: "Mina no niongo 4 みんなの日本語 4",
        rangeText: "บท 39-50",
        vocabLabel: "📙 คลังคำศัพท์ (บท 39-50)",
        grammarLabel: "⛩️ ไวยากรณ์ เติมคำช่วย (บท 39-50)",
        themeGrad: "from-amber-500 to-orange-600",
        themeShadow: "shadow-amber-300/30",
        activeClass: "py-2.5 px-3 rounded-xl font-black text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-300/30",
        inactiveClass: "py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 text-amber-700 hover:bg-amber-50",
        btnLabel: "📙 เล่ม 4 (39-50)",
        headerBg: "from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-amber-300/30",
        cardBgVocab: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        cardBgGrammar: "from-amber-50 to-orange-100/70 border-amber-200 text-amber-900 hover:border-amber-300 hover:from-amber-100 hover:to-orange-100",
        borderClass: "border-amber-100",
        textTitle: "text-amber-950",
        textSub: "text-amber-600/80",
        badgeColor: "text-amber-500",
        badgeIcon: "fa-graduation-cap",
        mascotMsg: "ยินดีต้อนรับสู่ มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 39-50) ค๊า! 📙🔥 เล่มสุดท้ายครบ 50 บท พิชิตข้อสอบ N4 ได้แน่นอนค๊า!"
    }
};

function loadQuizDatabase() {
    // โหลดข้อมูลล่าสุดจากโค้ดตรง ๆ เสมอ (ไม่มีการแคชเก็บข้อมูลลง Local Storage)
    console.log("quizData config: defaultQuizModes is:", typeof defaultQuizModes !== 'undefined' ? defaultQuizModes : 'undefined');
    allQuizModes = JSON.parse(JSON.stringify(defaultQuizModes));

    // กำหนดค่าเริ่มต้น book = 1 ให้กับโหมดคำศัพท์ที่ยังไม่ได้ระบุ
    Object.keys(allQuizModes).forEach(k => {
        if (!allQuizModes[k].book) {
            allQuizModes[k].book = 1;
        }
    });

    // ผนวกข้อมูลแบบฝึกหัดไวยากรณ์ เติมคำช่วย (บท 1-50 จากเอกสาร Google Docs)
    if (typeof grammarData !== 'undefined') {
        const allGrammarQuestions1 = [];
        const allGrammarQuestions2 = [];
        const allGrammarQuestions3 = [];
        const allGrammarQuestions4 = [];

        Object.keys(grammarData).forEach(k => {
            const g = grammarData[k];
            const lessonNum = parseInt(k, 10);
            let bookNum = 1;
            if (lessonNum >= 39) bookNum = 4;
            else if (lessonNum >= 26) bookNum = 3;
            else if (lessonNum >= 13) bookNum = 2;

            const bCfg = bookConfigs[bookNum] || bookConfigs[1];

            allQuizModes[`grammar_${k}`] = {
                title: g.title,
                sub: g.sub,
                emoji: g.emoji || (bookNum === 4 ? "📙" : (bookNum === 3 ? "📗" : (bookNum === 2 ? "📘" : "⛩️"))),
                isGrammar: true,
                book: bookNum,
                lessonNum: lessonNum,
                colorClass: bCfg.cardBgGrammar,
                questions: JSON.parse(JSON.stringify(g.questions))
            };

            if (bookNum === 1) allGrammarQuestions1.push(...g.questions);
            else if (bookNum === 2) allGrammarQuestions2.push(...g.questions);
            else if (bookNum === 3) allGrammarQuestions3.push(...g.questions);
            else if (bookNum === 4) allGrammarQuestions4.push(...g.questions);
        });

        // สุ่มรวมบท เล่ม 1 (บท 1-12)
        allQuizModes['grammar_all_1'] = {
            title: "ไวยากรณ์ สุ่มรวมบท 1-12",
            sub: "รวมแบบฝึกหัดเติมคำช่วยทุกบทในเล่ม 1 (172 ข้อ)",
            emoji: "🎲",
            isGrammar: true,
            book: 1,
            colorClass: "from-purple-50 to-pink-100/70 border-purple-200 text-purple-900 hover:border-purple-300 hover:from-purple-100 hover:to-pink-100",
            questions: JSON.parse(JSON.stringify(allGrammarQuestions1))
        };

        // สุ่มรวมบท เล่ม 2 (บท 13-25)
        allQuizModes['grammar_all_2'] = {
            title: "ไวยากรณ์ สุ่มรวมบท 13-25",
            sub: "รวมแบบฝึกหัดเติมคำช่วยทุกบทในเล่ม 2 (260 ข้อ)",
            emoji: "🎲",
            isGrammar: true,
            book: 2,
            colorClass: "from-indigo-50 to-purple-100/70 border-indigo-200 text-indigo-900 hover:border-indigo-300 hover:from-indigo-100 hover:to-purple-100",
            questions: JSON.parse(JSON.stringify(allGrammarQuestions2))
        };

        // สุ่มรวมบท เล่ม 3 (บท 26-38)
        allQuizModes['grammar_all_3'] = {
            title: "ไวยากรณ์ สุ่มรวมบท 26-38",
            sub: "รวมแบบฝึกหัดเติมคำช่วยทุกบทในเล่ม 3 (260 ข้อ)",
            emoji: "🎲",
            isGrammar: true,
            book: 3,
            colorClass: "from-emerald-50 to-teal-100/70 border-emerald-200 text-emerald-900 hover:border-emerald-300 hover:from-emerald-100 hover:to-teal-100",
            questions: JSON.parse(JSON.stringify(allGrammarQuestions3))
        };

        // สุ่มรวมบท เล่ม 4 (บท 39-50)
        allQuizModes['grammar_all_4'] = {
            title: "ไวยากรณ์ สุ่มรวมบท 39-50",
            sub: "รวมแบบฝึกหัดเติมคำช่วยทุกบทในเล่ม 4 (238 ข้อ)",
            emoji: "🎲",
            isGrammar: true,
            book: 4,
            colorClass: "from-amber-50 to-orange-100/70 border-amber-200 text-amber-900 hover:border-amber-300 hover:from-amber-100 hover:to-orange-100",
            questions: JSON.parse(JSON.stringify(allGrammarQuestions4))
        };
    }
    console.log("loadQuizDatabase: allQuizModes is:", allQuizModes);

    // รีเซ็ต EXP และค่าเลเวลจำลองสำหรับการรันเซสชันสดแบบ In-Memory
    playerEXP = 0;
    calculateRPGBond();
}

function saveQuizDatabase() {
    // ถอดระบบ Local Storage ออกแล้ว เพื่อให้อ่านค่าจากโค้ดได้สมบูรณ์แบบเรียลไทม์
}

function savePlayerRPGData() {
    // บันทึกค่าระดับสมาธิเฉพาะใน Memory ของเว็บเท่านั้น (รีเฟรชแล้วรีเซ็ต)
}

// คำนวณเลเวลความสนิทและความคุ้นเคย (Bond Level)
function calculateRPGBond() {
    bondLevel = Math.floor(playerEXP / 100) + 1;
    const currentExpInLevel = playerEXP % 100;

    const bondLevelNum = document.getElementById('bond-level-num');
    const bondExpText = document.getElementById('bond-exp-text');
    const bondExpBar = document.getElementById('bond-exp-bar');

    if (bondLevelNum) bondLevelNum.innerText = bondLevel;
    if (bondExpText) bondExpText.innerText = `${currentExpInLevel} / 100 EXP`;
    if (bondExpBar) bondExpBar.style.width = `${currentExpInLevel}%`;

    let rank = "Nihongo Novice 🐾";
    if (bondLevel >= 12) rank = "Nihongo Sensei 👑";
    else if (bondLevel >= 8) rank = "Anime Scholar 🎓";
    else if (bondLevel >= 5) rank = "Word Shinobi 🗡️";
    else if (bondLevel >= 3) rank = "Hiragana Knight 🌸";
    else if (bondLevel >= 2) rank = "Apprentice Otaku 🎋";

    const playerRankTitle = document.getElementById('player-rank-title');
    if (playerRankTitle) playerRankTitle.innerText = rank;
}

function resetDefaultQuiz() {
    showCustomMessage("คุณแน่ใจไหมคะ? เควสต์ทั้งหมดที่เขียนใหม่จะถูกรีเซ็ตเพื่อกลับคืนสู่ข้อมูลตั้งต้นดั้งเดิม", "⚠️ ยืนยันการรีเซ็ต", true, () => {
        allQuizModes = JSON.parse(JSON.stringify(defaultQuizModes));

        playerEXP = 0;
        calculateRPGBond();

        initHomepage();
        renderQuestionList();
        showCustomMessage("🌸 เคลียร์ระบบเวทมนตร์และดึงชุดข้อมูลเริ่มต้นเรียบร้อยแล้วค่ะ!", "รีเซ็ตสำเร็จ");
    });
}

// ให้มาสคอตอนิเมะยูกิจังพูดคุยและแสดงอารมณ์
function mascotTalk(text, faceState = 'idle') {
    const speechEl = document.getElementById('mascot-speech');
    if (speechEl) speechEl.innerText = text;

    const moodBadge = document.getElementById('mascot-mood-badge');
    const avatarWrapper = document.getElementById('mascot-avatar-wrapper');

    if (avatarWrapper) {
        avatarWrapper.classList.remove('mascot-bounce-happy', 'mascot-wobble-sad');
        // trigger animation reflow
        void avatarWrapper.offsetWidth;
    }

    if (faceState === 'happy') {
        if (moodBadge) moodBadge.innerText = '🥰';
        if (avatarWrapper) avatarWrapper.classList.add('mascot-bounce-happy');
    } else if (faceState === 'sad') {
        if (moodBadge) moodBadge.innerText = '🥺';
        if (avatarWrapper) avatarWrapper.classList.add('mascot-wobble-sad');
    } else {
        if (moodBadge) moodBadge.innerText = '🌸';
    }
}

// ระบบคลิกคุยกับยูกิจังเพื่อความน่ารักและสร้างกำลังใจ
const yukiQuotes = [
    { jp: "がんばってね！", th: "สู้ๆ นะคะคนเก่ง! ยูกิจังเป็นกำลังใจให้อยู่ตรงนี้น้า! ✨", mood: "happy" },
    { jp: "すごい！", th: "สุดยอดไปเลย! เก่งขึ้นทุกวันแบบนี้ พิชิตภาษาญี่ปุ่นได้แน่นอน! 💖", mood: "happy" },
    { jp: "よろしくね！", th: "ยินดีที่ได้เรียนภาษาญี่ปุ่นด้วยกันนะคะ วันนี้มาสนุกกันให้เต็มที่เลย! 🌸", mood: "idle" },
    { jp: "いっしょにべんきょうしましょう！", th: "มาเรียนด้วยกันเรื่อยๆ น้า! ยูกิจังชอบเวลาที่คุณตั้งใจเรียนมากๆ เลย! 🥰", mood: "happy" },
    { jp: "だいじょうぶだよ！", th: "ไม่ต้องกลัวตอบผิดนะคะ ความผิดพลาดคือบันไดสู่ความสำเร็จค่ะ! 💪", mood: "idle" },
    { jp: "えらいね！", th: "ขยันแบบนี้น่ารักที่สุดเลย! อยากแจกคะแนนพิเศษให้เลยค๊า! ⭐✨", mood: "happy" }
];
let lastQuoteIdx = -1;

function onMascotClick() {
    let nextIdx;
    do {
        nextIdx = Math.floor(Math.random() * yukiQuotes.length);
    } while (nextIdx === lastQuoteIdx && yukiQuotes.length > 1);
    lastQuoteIdx = nextIdx;

    const quote = yukiQuotes[nextIdx];
    mascotTalk(`「${quote.jp}」\n${quote.th}`, quote.mood);
    speakJapanese(quote.jp);
}
window.onMascotClick = onMascotClick;

function speakJapanese(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        if (text) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.85;
            window.speechSynthesis.speak(utterance);
        }
    }
}

if (pronounceBtn) {
    pronounceBtn.addEventListener('click', () => {
        const activeMode = allQuizModes[currentModeKey];
        const currentData = activeMode ? activeMode.questions[currentQuestion] : null;
        if (currentData) {
            if (activeMode.isGrammar) {
                speakJapanese(currentData.fullSentence);
            } else {
                speakJapanese(currentData.japaneseText || currentData.character || (currentData.choices && currentData.choices[currentData.correct]));
            }
        }
    });
}

let currentBook = 1;
let currentCategoryTab = 'vocab';

function switchBook(bookNum) {
    const num = Math.max(1, Math.min(4, parseInt(bookNum, 10) || 1));
    currentBook = num;
    try {
        window.location.hash = `book${currentBook}`;
    } catch (e) { }

    const cfg = bookConfigs[currentBook] || bookConfigs[1];

    // ปรับเปลี่ยนชื่อหัวข้อและคำอธิบายใต้หัวข้อหลัก
    const subtitleEl = document.getElementById('main-book-subtitle');
    if (subtitleEl) subtitleEl.innerText = `${cfg.title} (${cfg.rangeText})`;

    // ปรับเปลี่ยนสถานะปุ่มกดเลือกเล่มทั้ง 4 ปุ่ม
    for (let b = 1; b <= 4; b++) {
        const btn = document.getElementById(`book-${b}-btn`);
        if (btn) {
            const bCfg = bookConfigs[b];
            if (b === currentBook) {
                btn.className = bCfg.activeClass;
            } else {
                btn.className = bCfg.inactiveClass;
            }
        }
    }

    // ปรับเปลี่ยนปุ่มลัดด้านบน Header
    const headerToggleBtn = document.getElementById('book-toggle-header-btn');
    const headerToggleText = document.getElementById('book-toggle-header-text');
    if (headerToggleBtn) {
        headerToggleBtn.className = `bg-gradient-to-r ${cfg.headerBg} text-white font-extrabold text-[10px] md:text-xs py-2 px-3 rounded-xl transition duration-150 flex items-center gap-1.5 active:scale-95 shadow-md`;
    }
    if (headerToggleText) {
        const nextBook = (currentBook % 4) + 1;
        headerToggleText.innerHTML = `สลับไป เล่ม ${nextBook} ➔`;
    }

    // ปรับเปลี่ยนข้อความปุ่มแจ้งเพิ่มคำศัพท์ในหน้านี้
    const suggestInBookText = document.getElementById('btn-suggest-in-book-text');
    if (suggestInBookText) {
        suggestInBookText.innerText = `➕ แจ้งเพิ่มคลังคำศัพท์ (เล่ม ${currentBook})`;
    }

    mascotTalk(cfg.mascotMsg, 'happy');
    switchCategoryTab(currentCategoryTab);
}

function cycleBook() {
    const next = (currentBook % 4) + 1;
    switchBook(next);
}

function toggleBook() {
    cycleBook();
}

function switchCategoryTab(tab) {
    currentCategoryTab = tab;
    const tabVocabBtn = document.getElementById('tab-vocab-btn');
    const tabGrammarBtn = document.getElementById('tab-grammar-btn');
    const cfg = bookConfigs[currentBook] || bookConfigs[1];

    if (tab === 'vocab') {
        if (tabVocabBtn) {
            tabVocabBtn.className = `flex-1 py-2.5 px-3 rounded-xl font-black text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm bg-gradient-to-r ${cfg.themeGrad} text-white ${cfg.themeShadow}`;
            tabVocabBtn.innerHTML = cfg.vocabLabel;
        }
        if (tabGrammarBtn) {
            tabGrammarBtn.className = "flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 text-slate-700 hover:bg-slate-100";
            tabGrammarBtn.innerHTML = cfg.grammarLabel;
        }
    } else {
        if (tabVocabBtn) {
            tabVocabBtn.className = "flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 text-slate-700 hover:bg-slate-100";
            tabVocabBtn.innerHTML = cfg.vocabLabel;
        }
        if (tabGrammarBtn) {
            tabGrammarBtn.className = `flex-1 py-2.5 px-3 rounded-xl font-black text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm bg-gradient-to-r ${cfg.themeGrad} text-white ${cfg.themeShadow}`;
            tabGrammarBtn.innerHTML = cfg.grammarLabel;
        }
    }
    renderModesList();
}

function initHomepage() {
    if (companionSidebar) companionSidebar.classList.remove('hidden');
    if (gameTerminalCol) {
        gameTerminalCol.classList.remove('md:col-span-12');
        gameTerminalCol.classList.add('md:col-span-9');
    }

    if (window.location.hash) {
        const match = window.location.hash.match(/book(\d)/);
        if (match && match[1]) {
            const b = parseInt(match[1], 10);
            if (b >= 1 && b <= 4) {
                currentBook = b;
            }
        }
    }

    const tips = [
        "คำช่วย 'は' (wa) ชี้หัวข้อหลักของประโยคค่ะ!",
        "คำช่วย 'を' (o) ชี้กรรมตรงของการกระทำค่ะ 🐾",
        "คำช่วย 'へ' (e) ชี้ทิศทางหรือจุดหมายปลายทางค่ะ 🚅",
        "คำช่วย 'で' (de) ชี้สถานที่เกิดการกระทำหรือยานพาหนะค่ะ ✨",
        "คำช่วย 'に' (ni) ชี้เวลาที่แน่นอนหรือจุดหมายค่ะ ⏰",
        "รูปสามารถ (可能形): ใช้คำช่วย 'が' ชี้สิ่งที่ทำได้ค่ะ 💪",
        "รูปถูกกระทำ (受身): ใช้คำช่วย 'に' ชี้ผู้กระทำค่ะ 🐱",
        "รูปให้กระทำ (使役): มักใช้ 'を' หรือ 'に' ชี้ผู้ถูกสั่ง/อนุญาตให้ทำค่ะ 👨‍🏫"
    ];
    const dailyFactEl = document.getElementById('daily-fact');
    if (dailyFactEl) {
        dailyFactEl.innerText = tips[Math.floor(Math.random() * tips.length)];
    }

    switchBook(currentBook || 1);
}

function renderModesList() {
    const container = document.getElementById('modes-container');
    if (!container) return;
    container.innerHTML = "";

    const cfg = bookConfigs[currentBook] || bookConfigs[1];

    const keys = Object.keys(allQuizModes).filter(key => {
        const mode = allQuizModes[key];
        const modeBook = mode.book || 1;
        if (modeBook !== currentBook) return false;

        if (currentCategoryTab === 'grammar') {
            return !!mode.isGrammar;
        } else {
            return !mode.isGrammar;
        }
    });

    console.log(`renderModesList (Book ${currentBook}, ${currentCategoryTab}):`, keys);
    keys.forEach(key => {
        const mode = allQuizModes[key];
        const button = document.createElement('button');
        const qLength = mode.questions ? mode.questions.length : 0;

        let colorClass = mode.colorClass;
        if (!colorClass) {
            colorClass = mode.isGrammar ? cfg.cardBgGrammar : cfg.cardBgVocab;
        }

        button.className = `w-full flex items-center justify-between p-4 bg-gradient-to-r ${colorClass} border-2 rounded-2xl text-left transition-all duration-300 group shadow-sm relative overflow-hidden arcade-btn-glow`;
        button.onclick = () => selectMode(key);

        const badgeIcon = mode.isGrammar ? 'fa-scroll' : cfg.badgeIcon;
        const badgeColor = cfg.badgeColor;

        button.innerHTML = `
            <div class="absolute -right-5 -bottom-5 text-5xl opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-300">${mode.emoji || '🌸'}</div>
            <div class="flex items-center gap-3 relative z-10">
                <span class="text-2xl bg-white/75 p-2 rounded-xl border ${cfg.borderClass} shadow-inner">${mode.emoji || '🌸'}</span>
                <div>
                    <span class="font-extrabold ${cfg.textTitle} text-xs md:text-sm block tracking-wide">${mode.title}</span>
                    <span class="text-[9px] ${cfg.textSub} font-extrabold block mt-0.5">${mode.sub || ''} (${qLength} เควสต์)</span>
                </div>
            </div>
            <span class="font-bold ${badgeColor} group-hover:translate-x-1 transition-transform relative z-10"><i class="fa-solid ${badgeIcon} text-xs"></i></span>
        `;
        container.appendChild(button);
    });

    // เพิ่มการ์ดแจ้งเพิ่มคำศัพท์ลงในคลังเล่มนี้
    if (currentCategoryTab === 'vocab') {
        const addCard = document.createElement('button');
        addCard.className = `w-full flex items-center justify-between p-4 bg-white/85 hover:bg-pink-50/90 border-2 border-dashed border-pink-300 hover:border-pink-400 rounded-2xl text-left transition-all duration-300 group shadow-sm relative overflow-hidden`;
        addCard.onclick = () => openSuggestModal();
        addCard.innerHTML = `
            <div class="flex items-center gap-3 relative z-10">
                <span class="text-2xl bg-gradient-to-tr from-amber-100 to-pink-100 p-2 rounded-xl border border-pink-200 group-hover:scale-110 transition-transform shadow-inner">➕</span>
                <div>
                    <span class="font-extrabold text-rose-950 text-xs md:text-sm block tracking-wide">แจ้งเพิ่มคำศัพท์ลงคลัง (เล่ม ${currentBook})</span>
                    <span class="text-[9px] text-pink-600 font-extrabold block mt-0.5">พบคันจิหรือคำศัพท์ตกหล่น? ส่งคำศัพท์เข้าคลังเล่มนี้ได้เลย ✨</span>
                </div>
            </div>
            <span class="font-bold text-pink-500 group-hover:translate-x-1 transition-transform relative z-10"><i class="fa-solid fa-arrow-right text-xs"></i></span>
        `;
        container.appendChild(addCard);
    }
}

// เริ่มเข้าสู่แบบทดสอบทายคำศัพท์หรือไวยากรณ์
function selectMode(modeKey) {
    const selectedMode = allQuizModes[modeKey];
    if (!selectedMode || !selectedMode.questions || selectedMode.questions.length === 0) {
        playIncorrectSound();
        const lessonNum = selectedMode ? selectedMode.lessonNum : null;
        const matchingGrammarKey = (lessonNum && allQuizModes[`grammar_${lessonNum}`]) ? `grammar_${lessonNum}` : null;

        mascotTalk(`บทนี้ (${selectedMode?.title || modeKey}) ยังไม่มีคำศัพท์ในระบบค่ะ! สามารถเพิ่มคำศัพท์ในเมนูผู้ดูแล หรือเริ่มฝึกโหมดไวยากรณ์เติมคำช่วยได้เลยนะคะ 🌸`, 'happy');

        if (matchingGrammarKey) {
            showCustomMessage(
                `ขณะนี้ชุดคำศัพท์ของ "${selectedMode?.title || 'บทนี้'}" ยังไม่ได้นำเข้าสู่ระบบค่ะ 📘\n\n💡 แต่แบบฝึกหัด "ไวยากรณ์เติมคำช่วย" ของบทนี้พร้อมให้เล่นแล้วค่ะ! กดปุ่มด้านล่างเพื่อเริ่มทำได้ทันทีเลยนะคะ ✨`,
                "คำแนะนำจากยูกิจัง 🌸",
                false,
                null,
                () => selectMode(matchingGrammarKey),
                "⛩️ ไปฝึกไวยากรณ์บทนี้เลย!"
            );
        } else {
            showCustomMessage("ขออภัยนะคะนักเดินทาง หมวดหมู่นี้ยังไม่มีชุดคำถาม สามารถเพิ่มคำศัพท์ได้ที่โหมดผู้ดูแลระบบค่ะ", "ด่านว่างเปล่า!");
        }
        return;
    }

    currentModeKey = modeKey;

    // สุ่มสลับคำถามก่อนเริ่มเล่นทุกครั้ง
    const questions = allQuizModes[modeKey].questions;
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    currentQuestion = 0;
    score = 0;
    if (scoreDisplay) scoreDisplay.innerText = score;
    comboStreak = 0;
    updateComboUI();

    if (companionSidebar) companionSidebar.classList.add('hidden');
    if (gameTerminalCol) {
        gameTerminalCol.classList.remove('md:col-span-9');
        gameTerminalCol.classList.add('md:col-span-12');
    }

    if (modeSelectionScreen) modeSelectionScreen.classList.add('hidden');
    if (resultArea) resultArea.classList.add('hidden');
    if (quizScreen) quizScreen.classList.remove('hidden');

    loadQuestion();
}

function updateComboUI() {
    const comboBadge = document.getElementById('combo-tracker-badge');
    const comboCount = document.getElementById('combo-count');

    if (!comboBadge || !comboCount) return;

    if (comboStreak >= 2) {
        comboCount.innerText = comboStreak;
        comboBadge.classList.remove('hidden');
    } else {
        comboBadge.classList.add('hidden');
    }
}

// โหลดข้อมูลเควสต์คำศัพท์หรือไวยากรณ์ทีละข้อ
function loadQuestion() {
    answerSelected = false;
    if (nextBtn) {
        nextBtn.classList.add('hidden');
        nextBtn.classList.remove('flex');
    }
    if (feedbackText) feedbackText.innerText = "";

    const activeMode = allQuizModes[currentModeKey];
    const currentData = activeMode.questions[currentQuestion];

    const mediaCardContainer = document.getElementById('media-card-container');
    const grammarSentenceCard = document.getElementById('grammar-sentence-card');
    const grammarSentenceDisplay = document.getElementById('grammar-sentence-display');
    const grammarExpBox = document.getElementById('grammar-explanation-box');
    const grammarTypeInput = document.getElementById('grammar-type-input');

    if (levelIndicator) {
        levelIndicator.innerHTML = `<i class="fa-solid fa-scroll text-pink-500 mr-1 animate-pulse"></i> ข้อทดสอบที่ ${currentQuestion + 1} / ${activeMode.questions.length}`;
    }
    if (currentModeBadge) {
        currentModeBadge.innerHTML = `${activeMode.emoji || '🌸'} ${activeMode.title}`;
    }

    if (activeMode.isGrammar) {
        // --- โหมดไวยากรณ์ เติมคำช่วย (Grammar Particle Mode) ---
        if (mediaCardContainer) mediaCardContainer.classList.add('hidden');
        if (grammarSentenceCard) grammarSentenceCard.classList.remove('hidden');
        if (grammarExpBox) grammarExpBox.classList.add('hidden');

        mascotTalk(`แบบฝึกหัดข้อที่ ${currentQuestion + 1}! ลองเลือกหรือพิมพ์คำช่วยที่ถูกต้องเติมลงในช่องว่างดูนะคะ ✨`, 'idle');

        if (grammarSentenceDisplay) {
            const blankHtml = `<span id="current-grammar-blank" class="grammar-blank-slot">[ ___ ]</span>`;
            grammarSentenceDisplay.innerHTML = currentData.sentence.replace('[ ___ ]', blankHtml);
        }

        if (grammarTypeInput) {
            grammarTypeInput.value = '';
            grammarTypeInput.disabled = false;
        }

        if (questionHint) {
            questionHint.innerText = `คำแปล: ${currentData.thaiHint || ''}`;
        }
    } else {
        // --- โหมดคำศัพท์ปกติ (Vocabulary Mode) ---
        if (mediaCardContainer) mediaCardContainer.classList.remove('hidden');
        if (grammarSentenceCard) grammarSentenceCard.classList.add('hidden');
        if (grammarExpBox) grammarExpBox.classList.add('hidden');

        mascotTalk(`คำถามข้อที่ ${currentQuestion + 1}! ทายซิว่ารูปนี้คือภาษาญี่ปุ่นคำไหนเอ่ย? ✨`, 'idle');

        if (questionHint) {
            questionHint.innerText = `คำใบ้: ${currentData.hint || ''}`;
        }
        if (questionImg) {
            questionImg.src = getProxyUrl(currentData.img) || 'https://placehold.co/600x600/ffe4e6/be123c?text=🌸+Nihongo';
        }

        const questionTextOverlay = document.getElementById('question-text-overlay');
        const isCharMode = currentModeKey === 'カタカナ' || currentModeKey === 'ひらかな' || !!(currentData.character || currentData.kanji);
        if (isCharMode && questionTextOverlay) {
            const displayText = currentData.kanji || currentData.character || '';
            questionTextOverlay.innerText = displayText;
            questionTextOverlay.classList.remove('hidden');
            if (questionImg) questionImg.classList.add('hidden');

            let fontClass = 'text-7xl sm:text-8xl md:text-9xl';
            if (displayText.length >= 7) {
                fontClass = 'text-2xl sm:text-3xl md:text-4xl';
            } else if (displayText.length >= 4) {
                fontClass = 'text-3xl sm:text-4xl md:text-5xl';
            } else if (displayText.length === 3) {
                fontClass = 'text-4xl sm:text-5xl md:text-6xl';
            } else if (displayText.length === 2) {
                fontClass = 'text-5xl sm:text-6xl md:text-7xl';
            }
            questionTextOverlay.className = `w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tr from-pink-50 to-rose-100/50 rounded-2xl flex items-center justify-center font-black text-rose-700 shadow-inner select-none font-kawaii notranslate text-center px-4 leading-tight break-words ${fontClass}`;
        } else {
            if (questionTextOverlay) questionTextOverlay.classList.add('hidden');
            if (questionImg) questionImg.classList.remove('hidden');
        }
    }

    // ซ่อนปุ่มฟังเสียงไว้ก่อนจนกว่าจะตอบคำถาม เพื่อไม่ให้เสียงเฉลยออกมาก่อนตอบ
    if (pronounceBtn) {
        pronounceBtn.classList.add('hidden');
    }

    // หยุดเสียงที่อาจค้างอยู่ และยังไม่เปล่งเสียงจนกว่าผู้เรียนจะกดตอบ
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    const progressPercent = ((currentQuestion + 1) / activeMode.questions.length) * 100;
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }

    if (choicesContainer) {
        choicesContainer.innerHTML = "";
        currentData.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.setAttribute('translate', 'no');
            if (activeMode.isGrammar) {
                button.className = "w-full text-center py-4 px-6 rounded-2xl border-2 border-rose-100/60 bg-white hover:bg-pink-50 hover:border-pink-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 arcade-btn-glow notranslate flex items-center justify-center gap-3";
                button.innerHTML = `<span class="bg-pink-100 px-2.5 py-1 rounded-xl text-xs font-black text-pink-600 font-kawaii">${index + 1}</span> <span class="font-kawaii text-2xl font-black text-rose-850">${choice}</span>`;
            } else {
                button.className = "w-full text-left py-3.5 px-5 rounded-2xl border-2 border-rose-100/50 bg-white hover:bg-pink-50/75 hover:border-pink-300 text-xs font-bold text-rose-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 arcade-btn-glow notranslate";
                button.innerHTML = `<span class="bg-pink-100 px-1.5 py-0.5 rounded text-[9px] font-black text-pink-600 border border-pink-200 mr-1.5 font-kawaii">${index + 1}</span> ${choice}`;
            }
            button.setAttribute('data-no-click-sound', 'true');
            button.addEventListener('click', () => selectAnswer(index, button));
            choicesContainer.appendChild(button);
        });
    }
}

function selectAnswer(selectedIndex, clickedButton) {
    if (answerSelected) return;

    const activeMode = allQuizModes[currentModeKey];
    const currentData = activeMode.questions[currentQuestion];
    answerSelected = true;

    const allButtons = choicesContainer.querySelectorAll('button');

    if (activeMode.isGrammar) {
        // --- ประมวลผลผลลัพธ์โหมดไวยากรณ์ (Grammar Mode) ---
        const blankSlot = document.getElementById('current-grammar-blank');
        const expBox = document.getElementById('grammar-explanation-box');
        const typeInput = document.getElementById('grammar-type-input');
        if (typeInput) typeInput.disabled = true;

        if (selectedIndex === currentData.correct) {
            playCorrectSound();
            if (clickedButton) clickedButton.className = "w-full text-center py-4 px-6 rounded-2xl border-2 border-emerald-400 bg-emerald-50 text-emerald-700 font-black shadow-[0_0_15px_rgba(52,211,153,0.2)] flex items-center justify-center gap-3";
            if (feedbackText) {
                feedbackText.innerText = "🌸 正解 (เติมคำช่วยถูกต้องยอดเยี่ยมค๊า!)";
                feedbackText.className = "text-emerald-500 text-sm font-black animate-pulse";
            }
            if (blankSlot) {
                blankSlot.innerText = currentData.blankParticle;
                blankSlot.className = "grammar-blank-slot filled";
            }
            score++;
            if (scoreDisplay) scoreDisplay.innerText = score;
            comboStreak++;
            playerEXP += 25 + (comboStreak * 5);
            calculateRPGBond();
            updateComboUI();

            mascotTalk(`เก่งมากๆ เลยค๊าาา! ประโยคที่สมบูรณ์คือ『${currentData.fullSentence}』ค่ะ! คอมโบสะสม x${comboStreak} แล้วน้า! 🎉`, 'happy');
        } else {
            playIncorrectSound();
            if (clickedButton) clickedButton.className = "w-full text-center py-4 px-6 rounded-2xl border-2 border-rose-400 bg-rose-50 text-rose-600 font-black shadow-[0_0_15px_rgba(244,63,94,0.2)] flex items-center justify-center gap-3";
            if (feedbackText) {
                feedbackText.innerText = "❌ 残念 (คำช่วยยังไม่ถูกต้องน้าค๊า)";
                feedbackText.className = "text-rose-500 text-sm font-black";
            }
            if (blankSlot) {
                blankSlot.innerText = currentData.blankParticle;
                blankSlot.className = "grammar-blank-slot error";
            }
            comboStreak = 0;
            updateComboUI();
            if (allButtons[currentData.correct]) {
                allButtons[currentData.correct].className = "w-full text-center py-4 px-6 rounded-2xl border-2 border-emerald-400 bg-emerald-50 text-emerald-700 font-black flex items-center justify-center gap-3";
            }
            mascotTalk(`โถ่... คำช่วยที่ถูกต้องคือ『${currentData.blankParticle}』จ้า ประโยคที่สมบูรณ์คือ『${currentData.fullSentence}』💪`, 'sad');
        }

        if (expBox && currentData.explanation) {
            expBox.innerHTML = `💡 <b>หลักไวยากรณ์:</b> ${currentData.explanation}`;
            expBox.classList.remove('hidden');
        }

        setTimeout(() => {
            speakJapanese(currentData.fullSentence);
        }, 200);

        if (pronounceBtn) {
            pronounceBtn.classList.remove('hidden');
        }

        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.classList.add('flex');
        }
        return;
    }

    // --- ประมวลผลผลลัพธ์โหมดคำศัพท์ปกติ (Vocabulary Mode) ---
    if (selectedIndex === currentData.correct) {
        playCorrectSound();
        clickedButton.className = "w-full text-left py-3.5 px-5 rounded-2xl border-2 border-emerald-400 bg-emerald-50 text-emerald-600 font-extrabold shadow-[0_0_15px_rgba(52,211,153,0.2)] transition-all";
        if (feedbackText) {
            feedbackText.innerText = "🌸 正解 (ถูกต้องยอดเยี่ยมค๊า!)";
            feedbackText.className = "text-emerald-500 text-sm font-black animate-pulse";
        }

        score++;
        if (scoreDisplay) scoreDisplay.innerText = score;

        comboStreak++;
        playerEXP += 20 + (comboStreak * 5);
        calculateRPGBond();
        updateComboUI();

        const answerReading = currentData.japaneseText || currentData.character || (currentData.choices && currentData.choices[currentData.correct]);
        const displayWord = (currentData.character && currentData.choices) ? `${currentData.character} (${currentData.choices[currentData.correct]})` : (currentData.japaneseText || (currentData.choices && currentData.choices[currentData.correct]) || 'คำนี้');
        mascotTalk(`เก่งมากๆ เลยค๊าาา! ตอบถูกเผงเลย คำนี้อ่านว่า『${displayWord}』นะคะ! คอมโบสะสม x${comboStreak} แล้วน้า! 🎉`, 'happy');
    } else {
        playIncorrectSound();
        clickedButton.className = "w-full text-left py-3.5 px-5 rounded-2xl border-2 border-rose-400 bg-rose-50 text-rose-500 font-extrabold shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-all";
        if (feedbackText) {
            feedbackText.innerText = "❌ 残念 (ยังไม่ถูกน้าค๊า)";
            feedbackText.className = "text-rose-500 text-sm font-black";
        }

        comboStreak = 0;
        updateComboUI();

        const answerReading = currentData.japaneseText || currentData.character || (currentData.choices && currentData.choices[currentData.correct]);
        const displayWord = (currentData.character && currentData.choices) ? `${currentData.character} (${currentData.choices[currentData.correct]})` : (currentData.japaneseText || (currentData.choices && currentData.choices[currentData.correct]) || 'เฉลย');
        mascotTalk(`โถ่... อย่าเพิ่งถอดใจนะค๊า! คำตอบที่ถูกต้องคือ『${displayWord}』จ้า ข้อต่อไปสู้ๆ น้าค๊า! 💪`, 'sad');
        if (allButtons[currentData.correct]) {
            allButtons[currentData.correct].className = "w-full text-left py-3.5 px-5 rounded-2xl border-2 border-emerald-400 bg-emerald-50 text-emerald-700 font-extrabold shadow-sm";
        }
    }

    const voiceToSpeak = currentData.japaneseText || currentData.character || (currentData.choices && currentData.choices[currentData.correct]);
    setTimeout(() => {
        speakJapanese(voiceToSpeak);
    }, 200);

    if (pronounceBtn && voiceToSpeak) {
        pronounceBtn.classList.remove('hidden');
    }

    if (nextBtn) {
        nextBtn.classList.remove('hidden');
        nextBtn.classList.add('flex');
    }
}

// ฟังก์ชันตรวจคำตอบจากการพิมพ์เติมคำช่วยด้วยตนเอง
function submitGrammarTypedAnswer() {
    if (answerSelected) return;
    const typeInput = document.getElementById('grammar-type-input');
    if (!typeInput) return;
    const val = typeInput.value.trim();
    if (!val) return;

    const activeMode = allQuizModes[currentModeKey];
    if (!activeMode || !activeMode.isGrammar) return;
    const currentData = activeMode.questions[currentQuestion];
    const allButtons = choicesContainer.querySelectorAll('button');

    const matchedIdx = currentData.choices.indexOf(val);
    if (matchedIdx !== -1) {
        selectAnswer(matchedIdx, allButtons[matchedIdx]);
    } else if (val === currentData.blankParticle) {
        selectAnswer(currentData.correct, allButtons[currentData.correct]);
    } else {
        const wrongIdx = currentData.correct === 0 ? 1 : 0;
        selectAnswer(wrongIdx, allButtons[wrongIdx]);
    }
}

// ผูกเหตุการณ์กดปุ่ม Enter ในช่องพิมพ์คำช่วย
document.addEventListener('DOMContentLoaded', () => {
    const typeInput = document.getElementById('grammar-type-input');
    if (typeInput) {
        typeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                submitGrammarTypedAnswer();
            }
        });
    }
});

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentQuestion++;
        const activeMode = allQuizModes[currentModeKey];

        if (currentQuestion < activeMode.questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });
}

// นำเสนอผลลัพธ์ด่านเมื่อทายคำครบทุกข้อ
function showResults() {
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultArea) resultArea.classList.remove('hidden');
    if (finalScore) finalScore.innerText = score;

    // คืนค่า Layout แผงซ้ายกลับมาเพื่อให้ยูกิจังประเมินเกรด
    if (companionSidebar) companionSidebar.classList.remove('hidden');
    if (gameTerminalCol) {
        gameTerminalCol.classList.remove('md:col-span-12');
        gameTerminalCol.classList.add('md:col-span-9');
    }

    const totalQs = allQuizModes[currentModeKey].questions.length;
    const currentTotalScoreEl = document.getElementById('current-total-score');
    if (currentTotalScoreEl) {
        currentTotalScoreEl.innerText = ` / ${totalQs} เควสต์`;
    }

    const percentage = (score / totalQs) * 100;
    const incompleteContainer = document.getElementById('incomplete-score-image-container');
    const fullContainer = document.getElementById('full-score-image-container');

    if (percentage === 100) {
        if (incompleteContainer) incompleteContainer.classList.add('hidden');
        if (fullContainer) fullContainer.classList.remove('hidden');
        mascotTalk("ยินดีด้วยค๊าาา! ได้คะแนนเต็มด้วย ยูกิจังภูมิใจในตัวคุณสุดๆ ไปเลยค๊า! 🌸🏆", 'happy');
        if (gradeMessage) {
            gradeMessage.innerHTML = "<i class='fa-solid fa-medal text-lg text-yellow-500 mr-1 animate-bounce'></i> <strong>素晴らしい (วิเศษที่สุด!)</strong> กวาดคะแนนเต็มสิบแบบนี้ รับค่าประสบการณ์ความสนิทสูงสุดไปเลยจ้า!";
        }
    } else {
        if (incompleteContainer) incompleteContainer.classList.remove('hidden');
        if (fullContainer) fullContainer.classList.add('hidden');
        if (percentage >= 60) {
            mascotTalk("ยินดีด้วยที่ผ่านด่านค๊า! เก่งมากๆ เลยนะเนี่ย พัฒนาไปด้วยกันอีกเรื่อยๆ น้า! 👍✨", 'happy');
            if (gradeMessage) {
                gradeMessage.innerHTML = "<i class='fa-solid fa-star text-md text-yellow-500 mr-1'></i> <strong>よくできました (ทำได้ดีมาก!)</strong> ทักษะความจำคลังคำศัพท์ภาษาญี่ปุ่นของคุณยอดเยี่ยมแล้วค่ะ!";
            }
        } else {
            mascotTalk("เหนื่อยหน่อยนะค๊า! แต่ถ้าฝึกบ่อยๆ จะเก่งขึ้นแน่นอน ลองสู้ใหม่อีกสักรอบนะค๊า! 💪", 'sad');
            if (gradeMessage) {
                gradeMessage.innerHTML = "<i class='fa-solid fa-heart-pulse text-md text-rose-400 mr-1'></i> <strong>がんばって (พยายามเข้านะ!)</strong> กลับมาร่วมท้าทายทำเควสต์ซ้ำเพื่อสะสมความแม่นยำและเพิ่มเลเวล EXP กันใหม่ได้ตลอดเวลานะค๊า";
            }
        }
    }
}

function goHome() {
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultArea) resultArea.classList.add('hidden');
    if (adminScreen) adminScreen.classList.add('hidden');

    const passwordModal = document.getElementById('password-gate-modal');
    if (passwordModal) passwordModal.classList.add('hidden');

    if (modeSelectionScreen) modeSelectionScreen.classList.remove('hidden');
    window.speechSynthesis.cancel();
    initHomepage();
}

if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        selectMode(currentModeKey);
    });
}

function openPasswordGate() {
    const passwordInput = document.getElementById('admin-password-input');
    const errorText = document.getElementById('password-error-msg');
    if (passwordInput) passwordInput.value = "";
    if (errorText) errorText.innerText = "";

    // ซ่อนโฮมเพจชั่วคราว
    if (modeSelectionScreen) modeSelectionScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultArea) resultArea.classList.add('hidden');
    if (adminScreen) adminScreen.classList.add('hidden');

    const passwordModal = document.getElementById('password-gate-modal');
    if (passwordModal) passwordModal.classList.remove('hidden');

    mascotTalk("รบกวนป้อนรหัสผ่านลับผู้ดูแลระบบ เพื่อปลดล็อคแผงควบคุมเวทมนตร์นะค๊าาา 🗝️", 'idle');

    if (passwordInput) {
        setTimeout(() => passwordInput.focus(), 120);
    }
}

function closePasswordGate() {
    const passwordModal = document.getElementById('password-gate-modal');
    if (passwordModal) passwordModal.classList.add('hidden');
    if (modeSelectionScreen) modeSelectionScreen.classList.remove('hidden');
    initHomepage();
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('admin-password-input');
    const eyeIcon = document.getElementById('password-eye-icon');
    if (!passwordInput || !eyeIcon) return;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.className = "fa-solid fa-eye";
    } else {
        passwordInput.type = "password";
        eyeIcon.className = "fa-solid fa-eye-slash";
    }
}

const passInputEl = document.getElementById('admin-password-input');
if (passInputEl) {
    passInputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            submitAdminPassword();
        }
    });
}

function submitAdminPassword() {
    const passwordInput = document.getElementById('admin-password-input');
    const errorText = document.getElementById('password-error-msg');
    const gateBox = document.getElementById('password-gate-box');

    if (!passwordInput || !errorText || !gateBox) return;

    if (passwordInput.value === 'adminzfsz') {
        playUnlockSound();
        const passwordModal = document.getElementById('password-gate-modal');
        if (passwordModal) passwordModal.classList.add('hidden');
        enterAdmin();
    } else {
        playIncorrectSound();
        errorText.innerText = "❌ รหัสผ่านลับเข้าค่ายจัดการข้อมูลไม่ถูกต้องค่ะ";
        mascotTalk("อุ๊ย... รหัสผ่านไม่ถูกต้องนะคะ ลองเช็คและพิมพ์ใหม่อีกสักรอบน้าค๊า💦", 'sad');

        gateBox.classList.add('shake-anime');
        setTimeout(() => {
            gateBox.classList.remove('shake-anime');
        }, 400);
    }
}

function enterAdmin() {
    if (adminScreen) adminScreen.classList.remove('hidden');
    mascotTalk("ยินดีต้อนรับท่านผู้ดูแลระบบค๊า! เพิ่ม ดึง หรือปรับเปลี่ยนศิลาข้อสอบได้ตามสบายเลยนะค๊า⚙️", 'happy');

    populateAdminDropdowns();
    renderQuestionList();
    switchAdminTab('add');
}

function exitAdmin() {
    if (adminScreen) adminScreen.classList.add('hidden');
    if (modeSelectionScreen) modeSelectionScreen.classList.remove('hidden');
    initHomepage();
}

function switchAdminTab(tabName) {
    const addTab = document.getElementById('admin-add-tab');
    const manageTab = document.getElementById('admin-manage-tab');
    const suggestTab = document.getElementById('admin-suggest-tab');
    const googleTab = document.getElementById('admin-google-tab');

    const tabAddBtn = document.getElementById('tab-add-btn');
    const tabManageBtn = document.getElementById('tab-manage-btn');
    const tabSuggestBtn = document.getElementById('tab-suggest-btn');
    const tabGoogleBtn = document.getElementById('tab-google-btn');

    if (addTab) addTab.classList.add('hidden');
    if (manageTab) manageTab.classList.add('hidden');
    if (suggestTab) suggestTab.classList.add('hidden');
    if (googleTab) googleTab.classList.add('hidden');

    const defaultBtnClass = "py-2 rounded-lg text-center transition-all text-pink-400/70 hover:text-pink-500 flex items-center justify-center gap-1";
    const activeBtnClass = "py-2 rounded-lg text-center transition-all bg-pink-400 text-white shadow-sm flex items-center justify-center gap-1";

    if (tabAddBtn) tabAddBtn.className = defaultBtnClass;
    if (tabManageBtn) tabManageBtn.className = defaultBtnClass;
    if (tabSuggestBtn) tabSuggestBtn.className = defaultBtnClass;
    if (tabGoogleBtn) tabGoogleBtn.className = defaultBtnClass;

    if (tabName === 'add') {
        if (addTab) addTab.classList.remove('hidden');
        if (tabAddBtn) tabAddBtn.className = activeBtnClass;
    } else if (tabName === 'manage') {
        if (manageTab) manageTab.classList.remove('hidden');
        if (tabManageBtn) tabManageBtn.className = activeBtnClass;
        renderQuestionList();
    } else if (tabName === 'suggest') {
        if (suggestTab) suggestTab.classList.remove('hidden');
        if (tabSuggestBtn) tabSuggestBtn.className = activeBtnClass;
        loadWordSuggestions();
    } else if (tabName === 'google') {
        if (googleTab) googleTab.classList.remove('hidden');
        if (tabGoogleBtn) tabGoogleBtn.className = activeBtnClass;
    }
}

// ===== ระบบแจ้งเพิ่มคำศัพท์ (Word Suggestions System) =====
let cachedSuggestions = [];

function populateSuggestLessonSelect(defaultLesson = null) {
    const select = document.getElementById('suggest-lesson-select');
    if (!select) return;

    if (select.children.length === 0) {
        select.innerHTML = "";

        // 4 กลุ่มเล่ม: เล่ม 1 (1-12), เล่ม 2 (13-25), เล่ม 3 (26-38), เล่ม 4 (39-50)
        const bookRanges = [
            { book: 1, name: "🌸 เล่ม 1 (บทที่ 1 - 12)", start: 1, end: 12 },
            { book: 2, name: "📘 เล่ม 2 (บทที่ 13 - 25)", start: 13, end: 25 },
            { book: 3, name: "📗 เล่ม 3 (บทที่ 26 - 38)", start: 26, end: 38 },
            { book: 4, name: "📙 เล่ม 4 (บทที่ 39 - 50)", start: 39, end: 50 },
        ];

        bookRanges.forEach(b => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = b.name;
            for (let i = b.start; i <= b.end; i++) {
                const opt = document.createElement('option');
                opt.value = i;
                opt.innerText = `第 ${i} 課 (บทที่ ${i})`;
                optgroup.appendChild(opt);
            }
            select.appendChild(optgroup);
        });
    }

    // เลือกบทเริ่มต้นตามที่ระบุ หรือตามเล่มปัจจุบันที่เปิดอยู่
    if (defaultLesson) {
        select.value = defaultLesson;
    } else if (typeof currentBook !== 'undefined') {
        if (currentBook === 2) select.value = 13;
        else if (currentBook === 3) select.value = 26;
        else if (currentBook === 4) select.value = 39;
        else select.value = 1;
    }
}

function openSuggestModal(initialLesson = null) {
    const modal = document.getElementById('suggest-word-modal');
    if (!modal) return;

    populateSuggestLessonSelect(initialLesson);

    // รีเซ็ตฟิลด์หรือตั้งค่าเริ่มต้น
    const kanjiInput = document.getElementById('suggest-kanji-input');
    const readingInput = document.getElementById('suggest-reading-input');
    const meaningInput = document.getElementById('suggest-meaning-input');
    const noteInput = document.getElementById('suggest-note-input');
    const errorMsg = document.getElementById('suggest-error-msg');

    if (errorMsg) errorMsg.innerText = "";
    if (kanjiInput) kanjiInput.value = "";
    if (readingInput) readingInput.value = "";
    if (meaningInput) meaningInput.value = "";
    if (noteInput) noteInput.value = "";

    onSuggestInputChange();
    switchSuggestTab('form');
    loadWordSuggestions();

    modal.classList.remove('hidden');
    const bookNum = (typeof currentBook !== 'undefined') ? currentBook : 1;
    mascotTalk(`อยากให้ยูกิจังเพิ่มคำศัพท์คำไหนลงในคลังเล่ม ${bookNum} บอกได้เลยน้าค๊า! 🌸📝`, 'happy');

    if (kanjiInput) {
        setTimeout(() => kanjiInput.focus(), 150);
    }
}

function closeSuggestModal() {
    const modal = document.getElementById('suggest-word-modal');
    if (modal) modal.classList.add('hidden');
}

function onSuggestInputChange() {
    const kanjiInput = document.getElementById('suggest-kanji-input');
    const readingInput = document.getElementById('suggest-reading-input');
    const meaningInput = document.getElementById('suggest-meaning-input');
    const lessonSelect = document.getElementById('suggest-lesson-select');
    const badgeCheck = document.getElementById('kanji-check-badge');

    const previewKanji = document.getElementById('preview-kanji');
    const previewReading = document.getElementById('preview-reading');
    const previewMeaning = document.getElementById('preview-meaning');
    const previewBadge = document.getElementById('preview-lesson-badge');

    const kanjiVal = kanjiInput ? kanjiInput.value.trim() : '';
    const readingVal = readingInput ? readingInput.value.trim() : '';
    const meaningVal = meaningInput ? meaningInput.value.trim() : '';
    const lessonVal = lessonSelect ? lessonSelect.value : '1';

    // เช็คว่ามีคันจิหรือไม่
    const hasKanji = /[\u4e00-\u9faf]/.test(kanjiVal);
    if (badgeCheck) {
        if (hasKanji) {
            badgeCheck.classList.remove('hidden');
        } else {
            badgeCheck.classList.add('hidden');
        }
    }

    if (previewKanji) previewKanji.innerText = kanjiVal || "遊びます";
    if (previewReading) previewReading.innerText = readingVal || "あそびます";
    if (previewMeaning) previewMeaning.innerText = meaningVal || "เล่น, เที่ยวเล่น";
    if (previewBadge) previewBadge.innerText = `第 ${lessonVal} 課`;
}

function testSuggestAudio() {
    const readingInput = document.getElementById('suggest-reading-input');
    const kanjiInput = document.getElementById('suggest-kanji-input');
    const textToSpeak = (readingInput && readingInput.value.trim()) || (kanjiInput && kanjiInput.value.trim()) || "こんにちは";
    speakJapanese(textToSpeak);
}

function switchSuggestTab(tab) {
    const formView = document.getElementById('suggest-form-view');
    const historyView = document.getElementById('suggest-history-view');
    const formBtn = document.getElementById('tab-suggest-form-btn');
    const historyBtn = document.getElementById('tab-suggest-history-btn');

    if (tab === 'form') {
        if (formView) formView.classList.remove('hidden');
        if (historyView) historyView.classList.add('hidden');
        if (formBtn) formBtn.className = "py-2 rounded-lg text-center transition-all bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm flex items-center justify-center gap-1.5";
        if (historyBtn) historyBtn.className = "py-2 rounded-lg text-center transition-all text-pink-600 hover:text-pink-700 flex items-center justify-center gap-1.5";
    } else {
        if (formView) formView.classList.add('hidden');
        if (historyView) historyView.classList.remove('hidden');
        if (formBtn) formBtn.className = "py-2 rounded-lg text-center transition-all text-pink-600 hover:text-pink-700 flex items-center justify-center gap-1.5";
        if (historyBtn) historyBtn.className = "py-2 rounded-lg text-center transition-all bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm flex items-center justify-center gap-1.5";
        renderUserSuggestionsList();
    }
}

async function submitWordSuggestion() {
    const kanjiInput = document.getElementById('suggest-kanji-input');
    const readingInput = document.getElementById('suggest-reading-input');
    const meaningInput = document.getElementById('suggest-meaning-input');
    const noteInput = document.getElementById('suggest-note-input');
    const lessonSelect = document.getElementById('suggest-lesson-select');
    const errorMsg = document.getElementById('suggest-error-msg');

    if (!kanjiInput || !readingInput || !lessonSelect) return;

    const kanji = kanjiInput.value.trim();
    const reading = readingInput.value.trim();
    const meaning = meaningInput ? meaningInput.value.trim() : '';
    const note = noteInput ? noteInput.value.trim() : '';
    const lesson = parseInt(lessonSelect.value, 10) || 1;

    if (!kanji) {
        if (errorMsg) errorMsg.innerText = "❌ กรุณากรอกตัวอักษรคันจิ (Kanji)";
        kanjiInput.focus();
        return;
    }
    if (!reading) {
        if (errorMsg) errorMsg.innerText = "❌ กรุณากรอกคำอ่านฮิรางานะ (Reading)";
        readingInput.focus();
        return;
    }

    if (errorMsg) errorMsg.innerText = "";

    const payload = { kanji, reading, lesson, meaning, note };

    let savedItem = null;
    try {
        const res = await fetch('/api/suggest-word', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (res.ok) {
            const result = await res.json();
            savedItem = result.item;
        }
    } catch (netErr) {
        console.warn('Network API unavailable, persisting locally:', netErr);
    }

    if (!savedItem) {
        savedItem = {
            ...payload,
            id: 'sug_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
            createdAt: new Date().toISOString(),
            status: 'pending'
        };
    }

    // บันทึกสำรองลง Local Storage สำหรับผู้ใช้
    const localList = JSON.parse(localStorage.getItem('user_word_suggestions') || '[]');
    localList.unshift(savedItem);
    localStorage.setItem('user_word_suggestions', JSON.stringify(localList));

    // นำคำศัพท์เข้าสู่คลังคำถามของบทนั้นทันทีในเซสชันปัจจุบันเพื่อให้ผู้เรียนเล่นได้เลย!
    const keyMap = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
        7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve",
        13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
        18: "eighteen", 19: "nineteen", 20: "twenty", 21: "twentyone", 22: "twentytwo",
        23: "twentythree", 24: "twentyfour", 25: "twentyfive"
    };
    const targetKey = keyMap[lesson] || `lesson_${lesson}`;
    if (allQuizModes[targetKey] && Array.isArray(allQuizModes[targetKey].questions)) {
        const qList = allQuizModes[targetKey].questions;
        const otherReadings = qList.map(q => q.choices ? q.choices[q.correct] : q.japaneseText).filter(r => r && r !== reading);
        const fallbackPool = ["いきます", "たべます", "みます", "ききます", "あそびます", "べんきょう", "せんせい", "がっこう"];
        const pool = [...new Set([...otherReadings, ...fallbackPool])].filter(r => r !== reading);
        pool.sort(() => Math.random() - 0.5);
        const distractors = pool.slice(0, 3);
        const choices = [reading, ...distractors].sort(() => Math.random() - 0.5);
        const correctIdx = choices.indexOf(reading);

        qList.push({
            kanji: kanji,
            character: kanji,
            hint: meaning || "คำศัพท์แจ้งเพิ่ม",
            choices: choices,
            correct: correctIdx,
            japaneseText: reading,
            img: `https://placehold.co/600x600/ffe4e6/be123c?text=${encodeURIComponent(kanji)}`
        });
        if (defaultQuizModes && defaultQuizModes[targetKey]) {
            defaultQuizModes[targetKey].questions.push(qList[qList.length - 1]);
        }
        renderModesList();
    }

    playUnlockSound();
    mascotTalk(`ยูกิจังบันทึกคำศัพท์ "${kanji}" (${reading}) บทที่ ${lesson} เข้าสู่คลังเรียบร้อยแล้วค่ะ! ขอบคุณมากนะค๊า! 🎉🌸`, 'happy');
    showCustomMessage(`🌸 แจ้งเพิ่มคำศัพท์ "${kanji}" (${reading}) สำหรับบทที่ ${lesson} สำเร็จและพร้อมใช้งานในคลังแล้วค่ะ!`, "ส่งข้อมูลสำเร็จ ✨");

    // เคลียร์ฟอร์ม
    kanjiInput.value = "";
    readingInput.value = "";
    if (meaningInput) meaningInput.value = "";
    if (noteInput) noteInput.value = "";
    onSuggestInputChange();

    await loadWordSuggestions();
    switchSuggestTab('history');
}

async function loadWordSuggestions() {
    try {
        const res = await fetch('/api/suggest-words');
        if (res.ok) {
            cachedSuggestions = await res.json();
        } else {
            cachedSuggestions = JSON.parse(localStorage.getItem('user_word_suggestions') || '[]');
        }
    } catch (e) {
        cachedSuggestions = JSON.parse(localStorage.getItem('user_word_suggestions') || '[]');
    }

    // อัปเดตตัวเลขเคาน์เตอร์
    const userCountEl = document.getElementById('user-suggest-count');
    const adminCountEl = document.getElementById('admin-suggest-count');
    if (userCountEl) userCountEl.innerText = cachedSuggestions.length;
    if (adminCountEl) adminCountEl.innerText = cachedSuggestions.length;

    renderUserSuggestionsList();
    renderAdminSuggestionsList();
}

function renderUserSuggestionsList() {
    const listContainer = document.getElementById('suggest-history-list');
    if (!listContainer) return;

    if (!cachedSuggestions || cachedSuggestions.length === 0) {
        listContainer.innerHTML = `
            <div class="text-center py-8 text-slate-400 space-y-2">
                <div class="text-3xl">📭</div>
                <p class="text-xs font-bold">ยังไม่มีรายการแจ้งเพิ่มคำศัพท์</p>
                <p class="text-[10px]">คุณสามารถแจ้งคำคันจิและคำอ่านใหม่ ๆ ได้ที่แท็บ "แจ้งคำใหม่" ด้านบนค่ะ</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = cachedSuggestions.map((item) => {
        const dateStr = item.createdAt ? new Date(item.createdAt).toLocaleDateString('th-TH', { hour: '2-digit', minute: '2-digit' }) : '';
        return `
            <div class="p-3 bg-white rounded-2xl border border-pink-100 shadow-sm flex items-center justify-between gap-3 hover:border-pink-300 transition">
                <div class="space-y-0.5">
                    <div class="flex items-center gap-2">
                        <span class="text-base font-black text-rose-950">${item.kanji}</span>
                        <span class="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-lg border border-pink-200/50">${item.reading}</span>
                        <span class="text-[9px] bg-purple-100 text-purple-700 font-extrabold px-1.5 py-0.5 rounded">第 ${item.lesson} 課</span>
                    </div>
                    ${item.meaning ? `<div class="text-[11px] text-slate-600 font-medium">แปลว่า: ${item.meaning}</div>` : ''}
                    ${item.note ? `<div class="text-[9px] text-slate-400">หมายเหตุ: ${item.note}</div>` : ''}
                    <div class="text-[8px] text-slate-400">${dateStr}</div>
                </div>
                <button type="button" onclick="speakJapanese('${item.reading || item.kanji}')"
                    class="w-8 h-8 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 flex items-center justify-center transition shadow-sm shrink-0">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                </button>
            </div>
        `;
    }).join('');
}

function renderAdminSuggestionsList() {
    const adminListContainer = document.getElementById('admin-suggest-list');
    if (!adminListContainer) return;

    if (!cachedSuggestions || cachedSuggestions.length === 0) {
        adminListContainer.innerHTML = `
            <div class="text-center py-8 bg-white/70 rounded-xl border border-rose-100 text-slate-400 space-y-1">
                <div class="text-3xl">📭</div>
                <p class="text-xs font-bold">ยังไม่มีคำศัพท์ที่ผู้เรียนส่งเข้ามาแจ้งเพิ่ม</p>
            </div>
        `;
        return;
    }

    adminListContainer.innerHTML = cachedSuggestions.map(item => {
        const dateStr = item.createdAt ? new Date(item.createdAt).toLocaleDateString('th-TH', { hour: '2-digit', minute: '2-digit' }) : '';
        return `
            <div class="p-3 bg-white rounded-xl border border-rose-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2.5 hover:border-pink-300 transition">
                <div class="space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-base font-black text-rose-950">${item.kanji}</span>
                        <span class="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded border border-pink-200/50">${item.reading}</span>
                        <span class="text-[10px] bg-indigo-100 text-indigo-700 font-extrabold px-2 py-0.5 rounded-full">第 ${item.lesson} 課</span>
                        <button type="button" onclick="speakJapanese('${item.reading || item.kanji}')" class="text-pink-600 hover:text-pink-700 text-xs">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </div>
                    ${item.meaning ? `<div class="text-[11px] text-slate-700 font-medium">ความหมาย: <span class="font-bold text-slate-900">${item.meaning}</span></div>` : ''}
                    ${item.note ? `<div class="text-[9px] text-slate-400 italic">ข้อความจากผู้แจ้ง: ${item.note}</div>` : ''}
                    <div class="text-[8px] text-slate-400">ส่งเมื่อ: ${dateStr}</div>
                </div>

                <div class="flex items-center gap-1.5 shrink-0">
                    <button onclick="approveAndAddSuggestion('${item.id}')"
                        class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-[10px] px-3 py-1.5 rounded-lg shadow-sm transition active:scale-95 flex items-center gap-1">
                        <i class="fa-solid fa-check"></i> อนุมัติ & เพิ่มทันที
                    </button>
                    <button onclick="deleteSuggestion('${item.id}')"
                        class="bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-[10px] px-2.5 py-1.5 rounded-lg border border-rose-200 transition active:scale-95">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// อนุมัติและเพิ่มคำที่แจ้งเข้าสู่โจทย์ของบทนั้นทันที!
async function approveAndAddSuggestion(id) {
    const item = cachedSuggestions.find(s => s.id === id);
    if (!item) return;

    // หา key ของบทนั้น
    const lessonNum = parseInt(item.lesson, 10);
    const keyMap = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
        7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve",
        13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
        18: "eighteen", 19: "nineteen", 20: "twenty", 21: "twentyone", 22: "twentytwo",
        23: "twentythree", 24: "twentyfour", 25: "twentyfive"
    };
    const targetKey = keyMap[lessonNum] || `lesson_${lessonNum}`;

    if (!allQuizModes[targetKey]) {
        showCustomMessage(`ไม่พบโหมดบทที่ ${lessonNum} ในระบบค่ะ`, "ข้อผิดพลาด");
        return;
    }

    const currentModeQuestions = allQuizModes[targetKey].questions || [];

    // สร้างตัวลวง 3 ตัว
    const otherReadings = currentModeQuestions.map(q => q.choices ? q.choices[q.correct] : q.japaneseText).filter(r => r && r !== item.reading);
    const fallbackPool = ["いきます", "たべます", "みます", "ききます", "あそびます", "べんきょう", "せんせい", "がっこう"];
    const combinedPool = [...new Set([...otherReadings, ...fallbackPool])].filter(r => r !== item.reading);
    combinedPool.sort(() => Math.random() - 0.5);
    const distractors = combinedPool.slice(0, 3);

    const choices = [item.reading, ...distractors].sort(() => Math.random() - 0.5);
    const correctIdx = choices.indexOf(item.reading);

    const newQuestion = {
        kanji: item.kanji,
        character: item.kanji,
        hint: item.meaning || "คำศัพท์แจ้งเพิ่ม",
        choices: choices,
        correct: correctIdx,
        japaneseText: item.reading,
        img: `https://placehold.co/600x600/ffe4e6/be123c?text=${encodeURIComponent(item.kanji)}`
    };

    allQuizModes[targetKey].questions.push(newQuestion);
    if (defaultQuizModes[targetKey]) {
        defaultQuizModes[targetKey].questions.push(newQuestion);
    }

    playUnlockSound();
    showCustomMessage(`เพิ่มคำศัพท์ "${item.kanji}" (${item.reading}) เข้าสู่ 第 ${lessonNum} 課 เรียบร้อยแล้วค่ะ! (ตอนนี้มี ${allQuizModes[targetKey].questions.length} ข้อ)`, "อนุมัติสำเร็จ 🎉");

    // ลบออกจากรายการแจ้งเมื่ออนุมัติแล้ว
    await deleteSuggestion(id, false);
    renderQuestionList();
}

async function deleteSuggestion(id, showAlert = true) {
    try {
        await fetch(`/api/suggest-word/${id}`, { method: 'DELETE' });
    } catch (e) {
        console.error(e);
    }
    // อัปเดต local cache
    cachedSuggestions = cachedSuggestions.filter(s => s.id !== id);
    localStorage.setItem('user_word_suggestions', JSON.stringify(cachedSuggestions));
    loadWordSuggestions();

    if (showAlert) {
        showCustomMessage("ลบรายการแจ้งคำศัพท์เรียบร้อยแล้วค่ะ", "สำเร็จ");
    }
}

function populateAdminDropdowns() {
    const selectQCat = document.getElementById('select-cat-for-question');
    const selectListCat = document.getElementById('select-cat-for-list');

    if (!selectQCat || !selectListCat) return;

    selectQCat.innerHTML = "";
    selectListCat.innerHTML = "";

    Object.keys(allQuizModes).forEach(key => {
        const mode = allQuizModes[key];
        const b = mode.book || 1;
        const bookTag = `[เล่ม ${b}] `;

        const opt1 = document.createElement('option');
        opt1.value = key;
        opt1.innerText = `${bookTag}${mode.emoji || '🌸'} ${mode.title}`;
        selectQCat.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = key;
        opt2.innerText = `${bookTag}${mode.emoji || '🌸'} ${mode.title}`;
        selectListCat.appendChild(opt2);
    });
}

function addNewCategory() {
    const newCatKeyEl = document.getElementById('new-cat-key');
    const newCatTitleEl = document.getElementById('new-cat-title');
    const newCatEmojiEl = document.getElementById('new-cat-emoji');
    const newCatSubEl = document.getElementById('new-cat-sub');
    const newCatColorEl = document.getElementById('new-cat-color');

    if (!newCatKeyEl || !newCatTitleEl) return;

    const keyInput = newCatKeyEl.value.trim().toLowerCase();
    const titleInput = newCatTitleEl.value.trim();
    const emojiInput = newCatEmojiEl ? newCatEmojiEl.value.trim() : '🌸';
    const subInput = newCatSubEl ? newCatSubEl.value.trim() : '';
    const colorSelect = newCatColorEl ? newCatColorEl.value : 'pink';

    if (!keyInput || !titleInput) {
        showCustomMessage("กรุณากรอกรหัสหมวด (ENG) และชื่อหมวดภาษาไทยให้ครบถ้วนก่อนบันทึกเควสต์ค่ะ", "ข้อมูลไม่สมบูรณ์!");
        return;
    }

    if (allQuizModes[keyInput]) {
        showCustomMessage("รหัสหมวดหมู่นี้ถูกสร้างในระบบไปแล้วค่ะ ลองตั้งเป็นรหัสอื่นนะคะ", "รหัสระบบซ้ำซ้อน!");
        return;
    }

    let colorClass = "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60";
    if (colorSelect === 'pink') {
        colorClass = "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60";
    } else if (colorSelect === 'teal') {
        colorClass = "from-teal-100 to-emerald-200/40 border-emerald-200 text-emerald-700 hover:border-emerald-300 hover:from-teal-200/50 hover:to-emerald-200/60";
    } else if (colorSelect === 'sky') {
        colorClass = "from-sky-100 to-blue-200/40 border-blue-200 text-blue-700 hover:border-blue-300 hover:from-sky-200/50 hover:to-blue-200/60";
    } else if (colorSelect === 'purple') {
        colorClass = "from-purple-100 to-fuchsia-200/40 border-fuchsia-200 text-fuchsia-700 hover:border-fuchsia-300 hover:from-purple-200/50 hover:to-fuchsia-200/60";
    }

    allQuizModes[keyInput] = {
        title: titleInput,
        sub: subInput,
        emoji: emojiInput || '🌸',
        colorClass: colorClass,
        questions: []
    };

    populateAdminDropdowns();

    newCatKeyEl.value = "";
    newCatTitleEl.value = "";
    if (newCatEmojiEl) newCatEmojiEl.value = "";
    if (newCatSubEl) newCatSubEl.value = "";

    showCustomMessage("✨ สลักและบรรจุหมวดหมู่เควสต์ภาษาญี่ปุ่นใหม่ลงศิลาสำเร็จแล้ว!", "สำเร็จ!");
}

function addNewQuestion() {
    const selectCatEl = document.getElementById('select-cat-for-question');
    const newQImgEl = document.getElementById('new-q-img');
    const newQHintEl = document.getElementById('new-q-hint');
    const newQJpTextEl = document.getElementById('new-q-jptext');
    const newQC1El = document.getElementById('new-q-c1');
    const newQC2El = document.getElementById('new-q-c2');
    const newQC3El = document.getElementById('new-q-c3');
    const newQC4El = document.getElementById('new-q-c4');
    const newQCorrectEl = document.getElementById('new-q-correct');

    if (!selectCatEl || !newQHintEl || !newQJpTextEl || !newQC1El || !newQC2El || !newQC3El || !newQC4El || !newQCorrectEl) return;

    const catKey = selectCatEl.value;
    const imgUrl = newQImgEl ? newQImgEl.value.trim() : '';
    const hint = newQHintEl.value.trim();
    const jpText = newQJpTextEl.value.trim();
    const c1 = newQC1El.value.trim();
    const c2 = newQC2El.value.trim();
    const c3 = newQC3El.value.trim();
    const c4 = newQC4El.value.trim();
    const correctIndex = parseInt(newQCorrectEl.value);

    if (!hint || !jpText || !c1 || !c2 || !c3 || !c4) {
        showCustomMessage("กรุณากรอกข้อมูลตัวเลือกและระบุคำใบ้ให้ครบทุกช่องก่อนบันทึกนะคะ", "ข้อมูลว่างเปล่า!");
        return;
    }

    const newQuestionObj = {
        img: imgUrl || 'https://placehold.co/600x600/ffe4e6/be123c?text=🌸+Nihongo',
        hint: hint,
        choices: [c1, c2, c3, c4],
        correct: correctIndex,
        japaneseText: jpText
    };

    allQuizModes[catKey].questions.push(newQuestionObj);

    if (newQImgEl) newQImgEl.value = "";
    newQHintEl.value = "";
    newQJpTextEl.value = "";
    newQC1El.value = "";
    newQC2El.value = "";
    newQC3El.value = "";
    newQC4El.value = "";
    updateAdminImagePreview();

    showCustomMessage("📝 เพิ่มศิลาข้อสอบข้อทดสอบใหม่สำเร็จเรียบร้อยแล้วค่ะ!", "เพิ่มเควสต์สำเร็จ");
}

// แสดงผลตารางจัดการลบและดูแลรักษาข้อสอบ
function renderQuestionList() {
    const selectListCat = document.getElementById('select-cat-for-list');
    if (!selectListCat) return;

    const catKey = selectListCat.value;
    const container = document.getElementById('question-list-container');
    if (!container) return;
    container.innerHTML = "";

    if (!catKey || !allQuizModes[catKey]) {
        container.innerHTML = `<p class="text-[10px] text-slate-400 text-center py-4">ไม่พบข้อมูลด่านค่ะ</p>`;
        return;
    }

    const mode = allQuizModes[catKey];
    const questions = mode.questions || [];

    if (questions.length === 0) {
        container.innerHTML = `<p class="text-[10px] text-slate-400 text-center py-6">หมวดหมู่นี้ยังไม่มีแบบทดสอบย่อยถูกสร้างค่ะ</p>`;
        return;
    }

    questions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = "flex items-center justify-between p-2.5 bg-pink-50/45 rounded-xl border border-pink-100/50 shadow-sm gap-2";

        item.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0">
                <img src="${(q.kanji || q.character) ? `https://placehold.co/400x400/ffe4e6/be123c?text=${encodeURIComponent(q.kanji || q.character)}` : getProxyUrl(q.img)}" referrerpolicy="no-referrer" onerror="this.src='https://placehold.co/400x400/ffe4e6/be123c?text=🌸'" class="w-8 h-8 object-cover rounded-lg shrink-0 border border-pink-200">
                <div class="min-w-0 text-[10px]">
                    <span class="font-black text-rose-950 block truncate">ด่านย่อย ${index + 1}: ${q.kanji || q.character || ''} (${q.japaneseText || (q.choices && q.choices[q.correct]) || ''})</span>
                    <span class="text-pink-600/70 block truncate text-[9px]">${q.hint || ''}</span>
                </div>
            </div>
            <button onclick="deleteQuestion('${catKey}', ${index})" class="text-[9px] font-bold bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 px-2 py-1.5 rounded-lg shrink-0 transition">
                ลบออก
            </button>
        `;
        container.appendChild(item);
    });
}

function deleteQuestion(catKey, index) {
    showCustomMessage(`คุณต้องการนำเควสต์ข้อที่ ${index + 1} ออกจากโลกประมวลคำศัพท์หมวดนี้ใช่หรือไม่คะ?`, "🗑️ ยืนยันการลบ", true, () => {
        allQuizModes[catKey].questions.splice(index, 1);
        renderQuestionList();
        showCustomMessage("🗑️ นำคำถามดังกล่าวออกจากระบบสำเร็จแล้วค่ะ", "ลบสำเร็จ");
    });
}

// กล่องแสดงข้อความโมดอลอนิมิตพรีเมียม (Custom Dialog Alert)
function showCustomMessage(msg, title = "แจ้งเตือนวิเศษ ✨", hasAction = false, callback = null, extraActionCallback = null, extraActionText = null) {
    const overlay = document.createElement('div');
    overlay.className = "fixed inset-0 bg-rose-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300";

    const modal = document.createElement('div');
    modal.className = "bg-white border-2 border-pink-300 rounded-3xl p-5 max-w-xs w-full shadow-xl text-center transform scale-90 opacity-0 transition-all duration-300 anime-glow-box";

    modal.innerHTML = `
        <div class="text-3xl mb-1.5 animate-bounce">🌸🎈</div>
        <h3 class="text-sm font-black text-pink-600 mb-1.5 uppercase tracking-wide">${title}</h3>
        <p class="text-[11px] text-rose-950 leading-relaxed mb-5 font-bold">${msg}</p>
        <div class="flex gap-2 justify-center flex-wrap" id="modal-actions-container"></div>
    `;

    const actionContainer = modal.querySelector('#modal-actions-container');

    if (hasAction) {
        const yesBtn = document.createElement('button');
        yesBtn.className = "bg-pink-400 hover:bg-pink-500 text-white text-[10px] font-bold px-4 py-2 rounded-xl transition shadow-sm";
        yesBtn.innerText = "ตกลงค่ะ ✅";
        yesBtn.onclick = () => {
            closeModal();
            if (callback) callback();
        };

        const noBtn = document.createElement('button');
        noBtn.className = "bg-rose-50/55 hover:bg-rose-100 text-rose-700 text-[10px] font-bold px-4 py-2 rounded-xl border border-rose-200 transition";
        noBtn.innerText = "ยกเลิก ❌";
        noBtn.onclick = () => {
            closeModal();
        };

        actionContainer.appendChild(yesBtn);
        actionContainer.appendChild(noBtn);
    } else {
        if (extraActionCallback && extraActionText) {
            const extraBtn = document.createElement('button');
            extraBtn.className = "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-[10px] font-bold px-3 py-2 rounded-xl transition shadow-sm active:scale-95 flex items-center gap-1";
            extraBtn.innerHTML = extraActionText;
            extraBtn.onclick = () => {
                closeModal();
                extraActionCallback();
            };
            actionContainer.appendChild(extraBtn);
        }

        const okBtn = document.createElement('button');
        okBtn.className = "bg-gradient-to-r from-pink-400 to-rose-400 text-white text-[10px] font-bold px-5 py-2 rounded-xl transition shadow-sm";
        okBtn.innerText = "รับทราบค่ะ 🌸";
        okBtn.onclick = () => {
            closeModal();
        };
        actionContainer.appendChild(okBtn);
    }

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    setTimeout(() => {
        modal.classList.remove('scale-90', 'opacity-0');
        modal.classList.add('scale-100', 'opacity-100');
    }, 50);

    function closeModal() {
        modal.classList.remove('scale-100', 'opacity-100');
        modal.classList.add('scale-90', 'opacity-0');
        setTimeout(() => {
            overlay.remove();
        }, 200);
    }
}

// ฟังก์ชันอัปเดตพรีวิวรูปภาพในหน้าผู้ดูแลระบบแบบเรียลไทม์
function updateAdminImagePreview() {
    const imgUrlInput = document.getElementById('new-q-img');
    const imgPreview = document.getElementById('admin-img-preview');
    if (imgUrlInput && imgPreview) {
        const url = imgUrlInput.value.trim();
        imgPreview.src = getProxyUrl(url) || 'https://placehold.co/100x100/ffe4e6/be123c?text=Preview';
    }
}

// คัดลอกโค้ดสำหรับนำไปวางใน Google Apps Script
function copyAppsScriptCode() {
    try {
        const codeBlock = document.getElementById('apps-script-code-block');
        if (codeBlock) {
            codeBlock.select();
            document.execCommand('copy');
            showCustomMessage("คัดลอกโค้ดสคริปต์ Google Apps Script สำเร็จเรียบร้อยแล้วค่ะ! นำไปวางในโครงการของคุณได้เลยค๊าา 📋✨", "คัดลอกแล้ว!");
        }
    } catch (err) {
        showCustomMessage("ไม่สามารถประมวลผลการคัดลอกข้อมูลได้ค่ะ 💦", "ข้อผิดพลาด");
    }
}

// ฟังก์ชันช่วยสำหรับส่งเสียงสถานะและแสดงผลการอัปโหลดซิงค์ข้อมูลกูเกิลไดรฟ์
function showProgressOverlay(message) {
    const overlay = document.createElement('div');
    overlay.id = "sync-progress-overlay";
    overlay.className = "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-all duration-300";
    overlay.innerHTML = `
        <div class="bg-white border-2 border-emerald-400 rounded-3xl p-6 max-w-xs w-full shadow-2xl text-center space-y-4">
            <div class="text-4xl animate-spin" style="animation-duration: 2.5s">☁️</div>
            <p class="text-xs font-bold text-slate-700 leading-relaxed">${message}</p>
            <div class="flex justify-center gap-1.5">
                <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
                <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
                <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

function removeProgressOverlay() {
    const overlay = document.getElementById('sync-progress-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// 1. บันทึกข้อมูลไปยัง Google Drive (Save to Drive)
async function saveToGoogleDrive() {
    const urlInput = document.getElementById('google-api-url');
    const scriptUrl = urlInput ? urlInput.value.trim() : '';
    if (!scriptUrl) {
        showCustomMessage("กรุณากรอก Google Apps Script Web App URL ในช่องสีเขียวก่อนบันทึกนะคะ 💦", "ไม่พบลิงก์ซิงค์");
        return;
    }

    showProgressOverlay("กำลังส่งคำขอ และบันทึกศิลาข้อสอบข้อสอบขึ้นสู่ระบบ Google Drive ของคุณ...");

    try {
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                action: "save",
                data: allQuizModes
            })
        });

        removeProgressOverlay();

        if (response.ok) {
            const result = await response.json();
            if (result.status === "success") {
                showCustomMessage(`💾 บันทึกและสำรองข้อมูลด่านทั้งหมดไปยัง Google Drive ส่วนตัวของคุณเรียบร้อยแล้วค่ะ! ไฟล์ข้อมูลมีชื่อว่า "nihongo_quiz_master_backup.json" นะคะ ☁️`, "บันทึกสำเร็จ!");
            } else {
                showCustomMessage(`เกิดข้อผิดพลาดในการเขียนทับไฟล์: ${result.message}`, "ล้มเหลว");
            }
        } else {
            showCustomMessage("ไม่สามารถติดต่อเซิร์ฟเวอร์ Google Apps Script ได้ กรุณาตรวจสอบว่าลิงก์และสิทธิ์การเข้าถึงของคุณเปิดเป็น 'Everyone' หรือยังนะคะ", "ติดต่อล้มเหลว");
        }
    } catch (error) {
        removeProgressOverlay();
        showCustomMessage("เกิดปัญหาข้อผิดพลาดขณะส่งคำขอ: " + error.message, "ข้อผิดพลาด");
    }
}

// 2. ดึงข้อมูลจาก Google Drive (Load from Drive)
async function loadFromGoogleDrive() {
    const urlInput = document.getElementById('google-api-url');
    const scriptUrl = urlInput ? urlInput.value.trim() : '';
    if (!scriptUrl) {
        showCustomMessage("กรุณากรอก Google Apps Script Web App URL ในช่องสีเขียวก่อนทำคำขอดึงข้อมูลนะคะ 💦", "ไม่พบลิงก์ซิงค์");
        return;
    }

    showProgressOverlay("กำลังติดต่อ Google Drive เพื่อดึงข้อมูลเควสต์สำรองล่าสุด...");

    try {
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                action: "load"
            })
        });

        removeProgressOverlay();

        if (response.ok) {
            const result = await response.json();
            if (result.status === "success") {
                showCustomMessage("พบไฟล์สำรองบนคลาวด์! คุณแน่ใจไหมคะว่าจะนำชุดข้อมูลนี้มาเขียนทับข้อมูลในเครื่องปัจจุบันทั้งหมด?", "📥 ตรวจพบไฟล์สำรอง", true, () => {
                    allQuizModes = result.data;

                    // รีเฟรช UI
                    populateAdminDropdowns();
                    renderQuestionList();
                    initHomepage();

                    showCustomMessage("📥 ดึงข้อมูลด่านทั้งหมดมาจาก Google Drive และซิงค์เขียนทับเบราว์เซอร์เครื่องนี้สำเร็จเรียบร้อยแล้วค่ะ!", "ซิงค์เสร็จสิ้น ✨");
                });
            } else {
                showCustomMessage(`ไม่พบข้อมูลเก่า: ${result.message} (กรุณากด 'บันทึกข้อมูล' จากเครื่องหลักเพื่อสร้างไฟล์ไว้บน Drive ก่อนนะคะ)`, "ไม่พบข้อมูลสำรอง");
            }
        } else {
            showCustomMessage("ไม่สามารถดาวน์โหลดไฟล์จาก Google Apps Script ได้ กรุณาตรวจสอบความถูกต้องของลิงก์แอปเว็บและการเปิดสิทธิ์ให้ 'ทุกคน (Anyone)' สามารถเข้าถึงได้นะคะ", "ดาวน์โหลดล้มเหลว");
        }
    } catch (error) {
        removeProgressOverlay();
        showCustomMessage("เกิดข้อผิดพลาดขณะโหลดข้อมูล: " + error.message, "ข้อผิดพลาด");
    }
}

// ผูกฟังก์ชันเข้ากับ window เพื่อให้ inline HTML onclick ทำงานได้
window.openPasswordGate = openPasswordGate;
window.closePasswordGate = closePasswordGate;
window.playCuteClickSound = playCuteClickSound;
window.submitAdminPassword = submitAdminPassword;
window.togglePasswordVisibility = togglePasswordVisibility;
window.goHome = goHome;
window.selectMode = selectMode;
window.addNewCategory = addNewCategory;
window.addNewQuestion = addNewQuestion;
window.deleteQuestion = deleteQuestion;
window.exitAdmin = exitAdmin;
window.switchAdminTab = switchAdminTab;
window.resetDefaultQuiz = resetDefaultQuiz;
window.renderQuestionList = renderQuestionList;
window.updateAdminImagePreview = updateAdminImagePreview;
window.saveToGoogleDrive = saveToGoogleDrive;
window.loadFromGoogleDrive = loadFromGoogleDrive;
window.copyAppsScriptCode = copyAppsScriptCode;
window.switchBook = switchBook;
window.cycleBook = cycleBook;
window.toggleBook = toggleBook;

// ผูกฟังก์ชันระบบแจ้งเพิ่มคำศัพท์เข้ากับ window
window.openSuggestModal = openSuggestModal;
window.closeSuggestModal = closeSuggestModal;
window.onSuggestInputChange = onSuggestInputChange;
window.testSuggestAudio = testSuggestAudio;
window.switchSuggestTab = switchSuggestTab;
window.submitWordSuggestion = submitWordSuggestion;
window.loadWordSuggestions = loadWordSuggestions;
window.approveAndAddSuggestion = approveAndAddSuggestion;
window.deleteSuggestion = deleteSuggestion;

// เริ่มต้นการทำงานทั้งหมดเมื่อหน้าต่างถูกโหลดสำเร็จ
window.onload = function () {
    createSakuraPetals();
    loadQuizDatabase();
    initHomepage();
    updateAdminImagePreview();
    loadWordSuggestions();

    // บันทึกเสียงคลิกน่ารักๆ บนปุ่มทั้งหมดบนหน้าเว็บ
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('button');
        if (btn) {
            if (btn.getAttribute('data-no-click-sound') === 'true') {
                return;
            }
            playCuteClickSound();
        }
    });
};
