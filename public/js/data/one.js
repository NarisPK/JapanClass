const oneData = {
    // บทที่ 1
    title: " 1 課 ",
    sub: " 1 課 ",
    emoji: " 📖 ",
    colorClass: "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60",
    questions: [
        {
            kanji: "私",
            character: "私",
            hint: "ฉัน, ตัวฉัน",
            choices: ["わたし", "あなた", "いぬ", "ねこ"],
            correct: 0,
            japaneseText: "わたし",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=私"
        },
        {
            kanji: "あの人",
            character: "あの人",
            hint: "คนนั้น, ผู้นั้น",
            choices: ["あのわたし", "あのはたり", "あのひと", "あのあなた"],
            correct: 2,
            japaneseText: "あのひと",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=あの人"
        },
        {
            kanji: "日本",
            character: "日本",
            hint: "ประเทศญี่ปุ่น",
            choices: ["にほん", "ちゅうごく", "じゅこく", "かんこく"],
            correct: 0,
            japaneseText: "にほん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=日本"
        },
        {
            kanji: "韓国",
            character: "韓国",
            hint: "ประเทศเกาหลีใต้",
            choices: ["たいこく", "ちゅうごく", "じゅこく", "かんこく"],
            correct: 3,
            japaneseText: "かんこく",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=韓国"
        },
        {
            kanji: "中国",
            character: "中国",
            hint: "ประเทศจีน",
            choices: ["たいこく", "ちゅうごく", "じゅこく", "かんこく"],
            correct: 1,
            japaneseText: "ちゅうごく",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=中国"
        },
        {
            kanji: "誰",
            character: "誰",
            hint: "ใคร",
            choices: ["あのう", "わたし", "あなた", "だれ"],
            correct: 3,
            japaneseText: "だれ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=誰"
        },
        {
            kanji: "何歳",
            character: "何歳",
            hint: "อายุเท่าไร",
            choices: ["なんさい", "さい", "なにさい", "なっさい"],
            correct: 0,
            japaneseText: "なんさい",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何歳"
        },
        {
            kanji: "病院",
            character: "病院",
            hint: "โรงพยาบาล",
            choices: ["がっこう", "へや", "びょういん", "かいだん"],
            correct: 2,
            japaneseText: "びょういん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=病院"
        },
        {
            kanji: "〜歳",
            character: "〜歳",
            hint: "อายุ...ปี / ขวบ",
            choices: ["なんさい", "ちゃん", "さん", "さい"],
            correct: 3,
            japaneseText: "さい",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜歳"
        },
        {
            kanji: "大学",
            character: "大学",
            hint: "มหาวิทยาลัย",
            choices: ["がっこう", "だいがく", "がくせい", "びょういん"],
            correct: 1,
            japaneseText: "だいがく",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=大学"
        },
        {
            kanji: "研究者",
            character: "研究者",
            hint: "นักวิจัย",
            choices: ["けんきゅうしゃ", "しゃいん", "いしゃ", "かいしゃいん"],
            correct: 0,
            japaneseText: "けんきゅうしゃ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=研究者"
        },
        {
            kanji: "医者",
            character: "医者",
            hint: "หมอ, แพทย์",
            choices: ["しゃいん", "びょういん", "けんきゅうしゃ", "いしゃ"],
            correct: 3,
            japaneseText: "いしゃ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=医者"
        },
        {
            kanji: "銀行",
            character: "銀行",
            hint: "ธนาคาร",
            choices: ["わたし", "ちゃん", "ぎんこう", "ぎんこういん"],
            correct: 2,
            japaneseText: "ぎんこう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=銀行"
        },
        {
            kanji: "社員",
            character: "社員",
            hint: "พนักงานบริษัท (ของบริษัท...)",
            choices: ["ぎんこういん", "いしゃ", "かいしゃいん", "しゃいん"],
            correct: 3,
            japaneseText: "しゃいん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=社員"
        },
        {
            kanji: "会社員",
            character: "会社員",
            hint: "พนักงานบริษัท",
            choices: ["だいがく", "かいしゃいん", "けんきゅうしゃ", "きょうし"],
            correct: 1,
            japaneseText: "かいしゃいん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=会社員"
        },
        {
            kanji: "学生",
            character: "学生",
            hint: "นักเรียน, นักศึกษา",
            choices: ["なんじ", "せんせい", "だいがく", "がくせい"],
            correct: 3,
            japaneseText: "がくせい",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=学生"
        },
        {
            kanji: "教師",
            character: "教師",
            hint: "ครู, อาจารย์",
            choices: ["きょうち", "かいしゃいん", "きょうし", "いしゃ"],
            correct: 2,
            japaneseText: "きょうし",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=教師"
        },
        {
            kanji: "〜人",
            character: "〜人",
            hint: "ชาว... (สัญชาติ)",
            choices: ["じん", "ひと", "かた", "さん"],
            correct: 0,
            japaneseText: "じん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜人"
        }
    ]
};
