const twoData = {
    // บทที่ 2
    title: " 2 課 ",
    sub: " 2 課 ",
    emoji: " 📖 ",
    colorClass: "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60",
    questions: [
        {
            kanji: "辞書",
            character: "辞書",
            hint: "พจนานุกรม",
            choices: ["じしょ", "しんぶん", "てちょう", "めいし"],
            correct: 0,
            japaneseText: "じしょ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=辞書"
        },
        {
            kanji: "雑誌",
            character: "雑誌",
            hint: "นิตยสาร",
            choices: ["じしょ", "ざっし", "しんぶん", "えんぴつ"],
            correct: 1,
            japaneseText: "ざっし",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=雑誌"
        },
        {
            kanji: "新聞",
            character: "新聞",
            hint: "หนังสือพิมพ์",
            choices: ["てちょう", "めいし", "しんぶん", "かばん"],
            correct: 2,
            japaneseText: "しんぶん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=新聞"
        },
        {
            kanji: "手帳",
            character: "手帳",
            hint: "สมุดบันทึก",
            choices: ["てちょう", "じしょ", "いす", "つくえ"],
            correct: 0,
            japaneseText: "てちょう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=手帳"
        },
        {
            kanji: "名刺",
            character: "名刺",
            hint: "นามบัตร",
            choices: ["おみやげ", "えんぴつ", "かぎ", "めいし"],
            correct: 3,
            japaneseText: "めいし",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=名刺"
        },
        {
            kanji: "鉛筆",
            character: "鉛筆",
            hint: "ดินสอ",
            choices: ["えんぴつ", "とけい", "かさ", "じどうしゃ"],
            correct: 0,
            japaneseText: "えんぴつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=鉛筆"
        },
        {
            kanji: "鍵",
            character: "鍵",
            hint: "กุญแจ",
            choices: ["かさ", "かぎ", "かばん", "いす"],
            correct: 1,
            japaneseText: "かぎ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=鍵"
        },
        {
            kanji: "時計",
            character: "時計",
            hint: "นาฬิกา",
            choices: ["つくえ", "いす", "とけい", "おみやげ"],
            correct: 2,
            japaneseText: "とけい",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=時計"
        },
        {
            kanji: "傘",
            character: "傘",
            hint: "ร่ม",
            choices: ["かさ", "かばん", "じどうしゃ", "えいご"],
            correct: 0,
            japaneseText: "かさ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=傘"
        },
        {
            kanji: "鞄",
            character: "鞄",
            hint: "กระเป๋า",
            choices: ["にほんご", "なん", "ちがいます", "かばん"],
            correct: 3,
            japaneseText: "かばん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=鞄"
        },
        {
            kanji: "車",
            character: "車",
            hint: "รถยนต์",
            choices: ["くるま", "おみやげ", "えいご", "にほんご"],
            correct: 0,
            japaneseText: "くるま",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=車"
        },
        {
            kanji: "机",
            character: "机",
            hint: "โต๊ะ",
            choices: ["いす", "つくえ", "おみやげ", "えいご"],
            correct: 1,
            japaneseText: "つくえ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=机"
        },
        {
            kanji: "椅子",
            character: "椅子",
            hint: "เก้าอี้",
            choices: ["にほんご", "〜ご", "いす", "なん"],
            correct: 2,
            japaneseText: "いす",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=椅子"
        },
        {
            kanji: "お土産",
            character: "お土産",
            hint: "ของฝาก, ของที่ระลึก",
            choices: ["ちがいます", "じしょ", "ざっし", "おみやげ"],
            correct: 3,
            japaneseText: "おみやげ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=お土産"
        },
        {
            kanji: "英語",
            character: "英語",
            hint: "ภาษาอังกฤษ",
            choices: ["えいご", "にほんご", "〜ご", "しんぶん"],
            correct: 0,
            japaneseText: "えいご",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=英語"
        },
        {
            kanji: "日本語",
            character: "日本語",
            hint: "ภาษาญี่ปุ่น",
            choices: ["てちょう", "にほんご", "めいし", "えんぴつ"],
            correct: 1,
            japaneseText: "にほんご",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=日本語"
        },
        {
            kanji: "〜語",
            character: "〜語",
            hint: "ภาษา...",
            choices: ["かぎ", "とけい", "〜ご", "かさ"],
            correct: 2,
            japaneseText: "ご",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜語"
        },
        {
            kanji: "何",
            character: "何",
            hint: "อะไร",
            choices: ["なん", "かばん", "じどうしゃ", "つくえ"],
            correct: 0,
            japaneseText: "なん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何"
        },
        {
            kanji: "違います",
            character: "違います",
            hint: "ไม่ใช่, แตกต่าง",
            choices: ["いす", "ちがいます", "おみやげ", "えいご"],
            correct: 1,
            japaneseText: "ちがいます",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=違います"
        }
    ]
};
