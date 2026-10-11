const threeData = {
    // บทที่ 3
    title: " 3 課 ",
    sub: " 3 課 ",
    emoji: " 📖 ",
    colorClass: "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60",
    questions: [
        {
            kanji: "食堂",
            character: "食堂",
            hint: "โรงอาหาร",
            choices: ["しょくどう", "かいしゃ", "なんがい", "かいぎしつ"],
            correct: 0,
            japaneseText: "しょくどう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=食堂"
        },
        {
            kanji: "事務所",
            character: "事務所",
            hint: "สำนักงาน, ออฟฟิศ",
            choices: ["じむしょ", "でんわ", "かいしゃ", "〜かい"],
            correct: 0,
            japaneseText: "じむしょ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=事務所"
        },
        {
            kanji: "会議室",
            character: "会議室",
            hint: "ห้องประชุม",
            choices: ["くに", "かいぎしつ", "うりば", "まん"],
            correct: 1,
            japaneseText: "かいぎしつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=会議室"
        },
        {
            kanji: "受付",
            character: "受付",
            hint: "แผนกต้อนรับ",
            choices: ["〜かい", "うけつけ", "くに", "じむしょ"],
            correct: 1,
            japaneseText: "うけつけ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=受付"
        },
        {
            kanji: "階段",
            character: "階段",
            hint: "บันได",
            choices: ["うりば", "しょくどう", "かいだん", "じむしょ"],
            correct: 2,
            japaneseText: "かいだん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=階段"
        },
        {
            kanji: "自動販売機",
            character: "自動販売機",
            hint: "ตู้ขายของอัตโนมัติ",
            choices: ["まん", "じどうはんばいき", "かいだん", "〜かい"],
            correct: 1,
            japaneseText: "じどうはんばいき",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=自動販売機"
        },
        {
            kanji: "電話",
            character: "電話",
            hint: "โทรศัพท์",
            choices: ["〜えん", "でんわ", "じどうはんばいき", "かいだん"],
            correct: 1,
            japaneseText: "สำหรับโทรศัพท์",
            japaneseText: "でんわ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=電話"
        },
        {
            kanji: "国",
            character: "国",
            hint: "ประเทศ",
            choices: ["くつ", "かいぎしつ", "ひゃく", "くに"],
            correct: 3,
            japaneseText: "くに",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=国"
        },
        {
            kanji: "会社",
            character: "会社",
            hint: "บริษัท",
            choices: ["かいしゃ", "ちか", "「〜を」みせてください", "なんがい"],
            correct: 0,
            japaneseText: "かいしゃ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=会社"
        },
        {
            kanji: "靴",
            character: "靴",
            hint: "รองเท้า",
            choices: ["〜かい", "まん", "でんわ", "くつ"],
            correct: 3,
            japaneseText: "くつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=靴"
        },
        {
            kanji: "売り場",
            character: "売り場",
            hint: "แผนกขายสินค้า",
            choices: ["じむしょ", "でんわ", "〜かい", "うりば"],
            correct: 3,
            japaneseText: "うりば",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=売り場"
        },
        {
            kanji: "地下",
            character: "地下",
            hint: "ใต้ดิน",
            choices: ["くに", "なんがい", "じむしょ", "ちか"],
            correct: 3,
            japaneseText: "ちか",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=地下"
        },
        {
            kanji: "〜階",
            character: "〜階",
            hint: "ชั้น...",
            choices: ["なんがい", "ひゃく", "〜かい", "じどうはんばいき"],
            correct: 2,
            japaneseText: "かい",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜階"
        },
        {
            kanji: "何階",
            character: "何階",
            hint: "ชั้นอะไร",
            choices: ["ちか", "かいしゃ", "なんがい", "うけつけ"],
            correct: 2,
            japaneseText: "なんがい",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何階"
        },
        {
            kanji: "〜円",
            character: "〜円",
            hint: "...เยน",
            choices: ["〜かい", "じどうはんばいき", "くつ", "〜えん"],
            correct: 3,
            japaneseText: "えん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜円"
        },
        {
            kanji: "百",
            character: "百",
            hint: "ร้อย (100)",
            choices: ["ひゃく", "でんわ", "しょくどう", "くに"],
            correct: 0,
            japaneseText: "ひゃく",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=百"
        },
        {
            kanji: "万",
            character: "万",
            hint: "หมื่น (10,000)",
            choices: ["まん", "うけつけ", "かいぎしつ", "くつ"],
            correct: 0,
            japaneseText: "まん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=万"
        },
        {
            kanji: "見せてください",
            character: "見せてください",
            hint: "ขอดู...หน่อยครับ/ค่ะ",
            choices: ["じむしょ", "〜えん", "かいだん", "「〜を」みせてください"],
            correct: 3,
            japaneseText: "みせてください",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=見せてください"
        }
    ]
};
