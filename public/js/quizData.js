const defaultQuizModes = {
    // ===== เล่ม 1 (みんなの日本語 1 - บทที่ 1-12) =====
    "カタカナ": { ...katakanaData, book: 1, lessonNum: 0 },
    "ひらかな": { ...hiraganaData, book: 1, lessonNum: 0 },
    "one": { ...oneData, book: 1, lessonNum: 1 },
    "two": { ...twoData, book: 1, lessonNum: 2 },
    "three": { ...threeData, book: 1, lessonNum: 3 },
    "four": { ...fourData, book: 1, lessonNum: 4 },
    "five": { ...fiveData, book: 1, lessonNum: 5 },
    "six": { ...sixData, book: 1, lessonNum: 6 },
    "seven": { ...sevenData, book: 1, lessonNum: 7 },
    "eight": { ...eightData, book: 1, lessonNum: 8 },
    "nine": { ...nineData, book: 1, lessonNum: 9 },
    "ten": { ...tenData, book: 1, lessonNum: 10 },
    "eleven": { ...elevenData, book: 1, lessonNum: 11 },
    "twelve": { ...twelveData, book: 1, lessonNum: 12 },

    // ===== เล่ม 2 (みんなの日本語 2 - บทที่ 13-25) =====
    "thirteen": {
        title: "第 13 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 13)",
        emoji: "🍱",
        book: 2,
        lessonNum: 13,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "fourteen": {
        title: "第 14 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 14)",
        emoji: "🌧️",
        book: 2,
        lessonNum: 14,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "fifteen": {
        title: "第 15 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 15)",
        emoji: "🚭",
        book: 2,
        lessonNum: 15,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "sixteen": {
        title: "第 16 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 16)",
        emoji: "🚶",
        book: 2,
        lessonNum: 16,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "seventeen": {
        title: "第 17 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 17)",
        emoji: "💊",
        book: 2,
        lessonNum: 17,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "eighteen": {
        title: "第 18 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 18)",
        emoji: "📖",
        book: 2,
        lessonNum: 18,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "nineteen": {
        title: "第 19 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 19)",
        emoji: "🗻",
        book: 2,
        lessonNum: 19,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "twenty": {
        title: "第 20 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 20)",
        emoji: "☕",
        book: 2,
        lessonNum: 20,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "twentyone": {
        title: "第 21 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 21)",
        emoji: "💭",
        book: 2,
        lessonNum: 21,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "twentytwo": {
        title: "第 22 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 22)",
        emoji: "👔",
        book: 2,
        lessonNum: 22,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "twentythree": {
        title: "第 23 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 23)",
        emoji: "🚦",
        book: 2,
        lessonNum: 23,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "twentyfour": {
        title: "第 24 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 24)",
        emoji: "🎁",
        book: 2,
        lessonNum: 24,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },
    "twentyfive": {
        title: "第 25 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 2 (บทที่ 25)",
        emoji: "☀️",
        book: 2,
        lessonNum: 25,
        colorClass: "from-indigo-100 to-blue-200/50 border-indigo-200 text-indigo-800 hover:border-indigo-300 hover:from-indigo-200/60 hover:to-blue-200/70",
        questions: []
    },

    // ===== เล่ม 3 (みんなの日本語 3 - บทที่ 26-38) =====
    "lesson_26": {
        title: "第 26 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 26)",
        emoji: "💬",
        book: 3,
        lessonNum: 26,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_27": {
        title: "第 27 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 27)",
        emoji: "💪",
        book: 3,
        lessonNum: 27,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_28": {
        title: "第 28 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 28)",
        emoji: "🎵",
        book: 3,
        lessonNum: 28,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_29": {
        title: "第 29 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 29)",
        emoji: "🚪",
        book: 3,
        lessonNum: 29,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_30": {
        title: "第 30 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 30)",
        emoji: "📌",
        book: 3,
        lessonNum: 30,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_31": {
        title: "第 31 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 31)",
        emoji: "🎯",
        book: 3,
        lessonNum: 31,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_32": {
        title: "第 32 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 32)",
        emoji: "🌂",
        book: 3,
        lessonNum: 32,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_33": {
        title: "第 33 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 33)",
        emoji: "⛔",
        book: 3,
        lessonNum: 33,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_34": {
        title: "第 34 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 34)",
        emoji: "👣",
        book: 3,
        lessonNum: 34,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_35": {
        title: "第 35 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 35)",
        emoji: "🍀",
        book: 3,
        lessonNum: 35,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_36": {
        title: "第 36 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 36)",
        emoji: "🎯",
        book: 3,
        lessonNum: 36,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_37": {
        title: "第 37 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 37)",
        emoji: "🐱",
        book: 3,
        lessonNum: 37,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },
    "lesson_38": {
        title: "第 38 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 3 (บทที่ 38)",
        emoji: "⚽",
        book: 3,
        lessonNum: 38,
        colorClass: "from-emerald-100 to-teal-200/50 border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:from-emerald-200/60 hover:to-teal-200/70",
        questions: []
    },

    // ===== เล่ม 4 (みんなの日本語 4 - บทที่ 39-50) =====
    "lesson_39": {
        title: "第 39 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 39)",
        emoji: "😭",
        book: 4,
        lessonNum: 39,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_40": {
        title: "第 40 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 40)",
        emoji: "❓",
        book: 4,
        lessonNum: 40,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_41": {
        title: "第 41 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 41)",
        emoji: "🎁",
        book: 4,
        lessonNum: 41,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_42": {
        title: "第 42 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 42)",
        emoji: "💼",
        book: 4,
        lessonNum: 42,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_43": {
        title: "第 43 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 43)",
        emoji: "👀",
        book: 4,
        lessonNum: 43,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_44": {
        title: "第 44 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 44)",
        emoji: "🌶️",
        book: 4,
        lessonNum: 44,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_45": {
        title: "第 45 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 45)",
        emoji: "🚨",
        book: 4,
        lessonNum: 45,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_46": {
        title: "第 46 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 46)",
        emoji: "⏱️",
        book: 4,
        lessonNum: 46,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_47": {
        title: "第 47 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 47)",
        emoji: "📰",
        book: 4,
        lessonNum: 47,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_48": {
        title: "第 48 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 48)",
        emoji: "👨‍🏫",
        book: 4,
        lessonNum: 48,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_49": {
        title: "第 49 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 49)",
        emoji: "👑",
        book: 4,
        lessonNum: 49,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
    "lesson_50": {
        title: "第 50 課 คำศัพท์",
        sub: "มินนะ โนะ นิฮงโกะ เล่ม 4 (บทที่ 50)",
        emoji: "🙇",
        book: 4,
        lessonNum: 50,
        colorClass: "from-amber-100 to-orange-200/50 border-amber-200 text-amber-800 hover:border-amber-300 hover:from-amber-200/60 hover:to-orange-200/70",
        questions: []
    },
};

// ผนวกข้อมูลคำศัพท์คันจิสำหรับ เล่ม 2 (บทที่ 13-25)
if (typeof vocabBook2Data !== 'undefined') {
    const allVocab2 = [];
    Object.keys(vocabBook2Data).forEach(k => {
        if (defaultQuizModes[k] && vocabBook2Data[k].questions) {
            defaultQuizModes[k].questions = vocabBook2Data[k].questions;
            allVocab2.push(...vocabBook2Data[k].questions);
        }
    });
    // โหมดสุ่มคำศัพท์รวมบท เล่ม 2
    defaultQuizModes['vocab_all_2'] = {
        title: "คำศัพท์ สุ่มรวมบท 13-25",
        sub: `รวมคำศัพท์คันจิทุกบทในเล่ม 2 (${allVocab2.length} ข้อ)`,
        emoji: "🎲",
        book: 2,
        colorClass: "from-indigo-200 to-blue-200 border-indigo-300 text-indigo-900 hover:border-indigo-400 hover:from-indigo-200/80 hover:to-blue-200/90",
        questions: allVocab2
    };
}

// ผนวกข้อมูลคำศัพท์คันจิสำหรับ เล่ม 3 (บทที่ 26-38)
if (typeof vocabBook3Data !== 'undefined') {
    const allVocab3 = [];
    Object.keys(vocabBook3Data).forEach(k => {
        if (defaultQuizModes[k] && vocabBook3Data[k].questions) {
            defaultQuizModes[k].questions = vocabBook3Data[k].questions;
            allVocab3.push(...vocabBook3Data[k].questions);
        }
    });
    // โหมดสุ่มคำศัพท์รวมบท เล่ม 3
    defaultQuizModes['vocab_all_3'] = {
        title: "คำศัพท์ สุ่มรวมบท 26-38",
        sub: `รวมคำศัพท์คันจิทุกบทในเล่ม 3 (${allVocab3.length} ข้อ)`,
        emoji: "🎲",
        book: 3,
        colorClass: "from-emerald-200 to-teal-200 border-emerald-300 text-emerald-900 hover:border-emerald-400 hover:from-emerald-200/80 hover:to-teal-200/90",
        questions: allVocab3
    };
}

// ผนวกข้อมูลคำศัพท์คันจิสำหรับ เล่ม 4 (บทที่ 39-50)
if (typeof vocabBook4Data !== 'undefined') {
    const allVocab4 = [];
    Object.keys(vocabBook4Data).forEach(k => {
        if (defaultQuizModes[k] && vocabBook4Data[k].questions) {
            defaultQuizModes[k].questions = vocabBook4Data[k].questions;
            allVocab4.push(...vocabBook4Data[k].questions);
        }
    });
    // โหมดสุ่มคำศัพท์รวมบท เล่ม 4
    defaultQuizModes['vocab_all_4'] = {
        title: "คำศัพท์ สุ่มรวมบท 39-50",
        sub: `รวมคำศัพท์คันจิทุกบทในเล่ม 4 (${allVocab4.length} ข้อ)`,
        emoji: "🎲",
        book: 4,
        colorClass: "from-amber-200 to-orange-200 border-amber-300 text-amber-900 hover:border-amber-400 hover:from-amber-200/80 hover:to-orange-200/90",
        questions: allVocab4
    };
}

// โหมดสุ่มคำศัพท์รวมบท เล่ม 1 (บทที่ 1-12)
try {
    const allVocab1 = [
        ...(typeof oneData !== 'undefined' ? oneData.questions || [] : []),
        ...(typeof twoData !== 'undefined' ? twoData.questions || [] : []),
        ...(typeof threeData !== 'undefined' ? threeData.questions || [] : []),
        ...(typeof fourData !== 'undefined' ? fourData.questions || [] : []),
        ...(typeof fiveData !== 'undefined' ? fiveData.questions || [] : []),
        ...(typeof sixData !== 'undefined' ? sixData.questions || [] : []),
        ...(typeof sevenData !== 'undefined' ? sevenData.questions || [] : []),
        ...(typeof eightData !== 'undefined' ? eightData.questions || [] : []),
        ...(typeof nineData !== 'undefined' ? nineData.questions || [] : []),
        ...(typeof tenData !== 'undefined' ? tenData.questions || [] : []),
        ...(typeof elevenData !== 'undefined' ? elevenData.questions || [] : []),
        ...(typeof twelveData !== 'undefined' ? twelveData.questions || [] : [])
    ];
    defaultQuizModes['vocab_all_1'] = {
        title: "คำศัพท์ สุ่มรวมบท 1-12",
        sub: `รวมคำศัพท์คันจิทุกบทในเล่ม 1 (${allVocab1.length} ข้อ)`,
        emoji: "🎲",
        book: 1,
        colorClass: "from-pink-200 to-rose-200 border-pink-300 text-pink-900 hover:border-pink-400 hover:from-pink-200/80 hover:to-rose-200/90",
        questions: allVocab1
    };
} catch(e) { console.error(e); }



