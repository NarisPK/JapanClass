const fiveData = {
    // บทที่ 5
    title: " 5 課 ",
    sub: " 5 課 ",
    emoji: " 📖 ",
    colorClass: "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60",
    questions: [
        {
            kanji: "行きます",
            character: "行きます",
            hint: "ไป",
            choices: [
                "らいしゅう",
                "かえります",
                "いきます",
                "ちかてつ"
            ],
            correct: 2,
            japaneseText: "いきます",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=行きます"
        },
        {
            kanji: "来ます",
            character: "来ます",
            hint: "มา",
            choices: [
                "でんしゃ",
                "ふつう",
                "きます",
                "ふね"
            ],
            correct: 2,
            japaneseText: "きます",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=来ます"
        },
        {
            kanji: "帰ります",
            character: "帰ります",
            hint: "กลับ (บ้าน, ประเทศ)",
            choices: [
                "ふね",
                "かぞく",
                "かのじょ",
                "かえります"
            ],
            correct: 3,
            japaneseText: "かえります",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=帰ります"
        },
        {
            kanji: "学校",
            character: "学校",
            hint: "โรงเรียน",
            choices: [
                "がっこう",
                "ふつう",
                "ついたち",
                "かぞく"
            ],
            correct: 0,
            japaneseText: "がっこう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=学校"
        },
        {
            kanji: "駅",
            character: "駅",
            hint: "สถานีรถไฟ",
            choices: [
                "ふつか",
                "えき",
                "いきます",
                "あるいて"
            ],
            correct: 1,
            japaneseText: "えき",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=駅"
        },
        {
            kanji: "飛行機",
            character: "飛行機",
            hint: "เครื่องบิน",
            choices: [
                "きょねん",
                "でんしゃ",
                "かのじょ",
                "ひこうき"
            ],
            correct: 3,
            japaneseText: "ひこうき",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=飛行機"
        },
        {
            kanji: "船",
            character: "船",
            hint: "เรือ",
            choices: [
                "ことし",
                "ふね",
                "こんしゅう",
                "かえります"
            ],
            correct: 1,
            japaneseText: "ふね",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=船"
        },
        {
            kanji: "電車",
            character: "電車",
            hint: "รถไฟ, รถไฟฟ้า",
            choices: [
                "でんしゃ",
                "〜ねん",
                "きゅうこう",
                "ひこうき"
            ],
            correct: 0,
            japaneseText: "でんしゃ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=電車"
        },
        {
            kanji: "地下鉄",
            character: "地下鉄",
            hint: "รถไฟใต้ดิน",
            choices: [
                "とっきゅう",
                "えき",
                "かれ",
                "ちかてつ"
            ],
            correct: 3,
            japaneseText: "ちかてつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=地下鉄"
        },
        {
            kanji: "新幹線",
            character: "新幹線",
            hint: "รถไฟชินคันเซ็น",
            choices: [
                "かぞく",
                "ひこうき",
                "せんげつ",
                "しんかんせん"
            ],
            correct: 3,
            japaneseText: "しんかんせん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=新幹線"
        },
        {
            kanji: "自転車",
            character: "自転車",
            hint: "รถจักรยาน",
            choices: [
                "あるいて",
                "じてんしゃ",
                "なんにち",
                "らいねん"
            ],
            correct: 1,
            japaneseText: "じてんしゃ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=自転車"
        },
        {
            kanji: "歩いて",
            character: "歩いて",
            hint: "เดิน (ด้วยเท้า)",
            choices: [
                "えき",
                "じてんしゃ",
                "あるいて",
                "らいしゅう"
            ],
            correct: 2,
            japaneseText: "あるいて",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=歩いて"
        },
        {
            kanji: "友達",
            character: "友達",
            hint: "เพื่อน",
            choices: [
                "ともだち",
                "きゅうこう",
                "らいしゅう",
                "〜ねん"
            ],
            correct: 0,
            japaneseText: "ともだち",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=友達"
        },
        {
            kanji: "彼",
            character: "彼",
            hint: "เขา (ผู้ชาย), แฟนหนุ่ม",
            choices: [
                "かれ",
                "かえります",
                "がっこう",
                "かぞく"
            ],
            correct: 0,
            japaneseText: "かれ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=彼"
        },
        {
            kanji: "彼女",
            character: "彼女",
            hint: "เธอ (ผู้หญิง), แฟนสาว",
            choices: [
                "とっきゅう",
                "えき",
                "かのじょ",
                "かれ"
            ],
            correct: 2,
            japaneseText: "かのじょ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=彼女"
        },
        {
            kanji: "家族",
            character: "家族",
            hint: "ครอบครัว",
            choices: [
                "なんねん",
                "しんかんせん",
                "かぞく",
                "なんにち"
            ],
            correct: 2,
            japaneseText: "かぞく",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=家族"
        },
        {
            kanji: "先週",
            character: "先週",
            hint: "สัปดาห์ที่แล้ว",
            choices: [
                "せんしゅう",
                "きゅうこう",
                "ふつう",
                "こんしゅう"
            ],
            correct: 0,
            japaneseText: "せんしゅう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=先週"
        },
        {
            kanji: "今週",
            character: "今週",
            hint: "สัปดาห์นี้",
            choices: [
                "らいねん",
                "かのじょ",
                "こんしゅう",
                "ちかてつ"
            ],
            correct: 2,
            japaneseText: "こんしゅう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=今週"
        },
        {
            kanji: "来週",
            character: "来週",
            hint: "สัปดาห์หน้า",
            choices: [
                "でんしゃ",
                "らいしゅう",
                "しんかんせん",
                "じてんしゃ"
            ],
            correct: 1,
            japaneseText: "らいしゅう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=来週"
        },
        {
            kanji: "先月",
            character: "先月",
            hint: "เดือนที่แล้ว",
            choices: [
                "〜ねん",
                "せんげつ",
                "どういたしまして",
                "なんにち"
            ],
            correct: 1,
            japaneseText: "せんげつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=先月"
        },
        {
            kanji: "今月",
            character: "今月",
            hint: "เดือนนี้",
            choices: [
                "こんしゅう",
                "でんしゃ",
                "こんげつ",
                "ふつう"
            ],
            correct: 2,
            japaneseText: "こんげつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=今月"
        },
        {
            kanji: "来月",
            character: "来月",
            hint: "เดือนหน้า",
            choices: [
                "なんにち",
                "ふつか",
                "じてんしゃ",
                "らいげつ"
            ],
            correct: 3,
            japaneseText: "らいげつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=来月"
        },
        {
            kanji: "去年",
            character: "去年",
            hint: "ปีที่แล้ว",
            choices: [
                "つぎの",
                "きょねん",
                "ふね",
                "あるいて"
            ],
            correct: 1,
            japaneseText: "きょねん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=去年"
        },
        {
            kanji: "今年",
            character: "今年",
            hint: "ปีนี้",
            choices: [
                "じてんしゃ",
                "しんかんせん",
                "らいねん",
                "ことし"
            ],
            correct: 3,
            japaneseText: "ことし",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=今年"
        },
        {
            kanji: "来年",
            character: "来年",
            hint: "ปีหน้า",
            choices: [
                "でんしゃ",
                "らいねん",
                "たんじょうび",
                "きます"
            ],
            correct: 1,
            japaneseText: "らいねん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=来年"
        },
        {
            kanji: "〜年",
            character: "〜年",
            hint: "ปี...",
            choices: [
                "かぞく",
                "がっこう",
                "とっきゅう",
                "〜ねん"
            ],
            correct: 3,
            japaneseText: "ねん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜年"
        },
        {
            kanji: "何年",
            character: "何年",
            hint: "ปีอะไร",
            choices: [
                "なんねん",
                "ちかてつ",
                "ふつう",
                "えき"
            ],
            correct: 0,
            japaneseText: "なんねん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何年"
        },
        {
            kanji: "1日 (一日)",
            character: "1日 (一日)",
            hint: "วันที่ 1",
            choices: [
                "きゅうこう",
                "じてんしゃ",
                "ついたち",
                "せんしゅう"
            ],
            correct: 2,
            japaneseText: "ついたち",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=1日"
        },
        {
            kanji: "2日 (二日)",
            character: "2日 (二日)",
            hint: "วันที่ 2",
            choices: [
                "ふつか",
                "せんげつ",
                "〜ねん",
                "ことし"
            ],
            correct: 0,
            japaneseText: "ふつか",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=2日"
        },
        {
            kanji: "〜日",
            character: "〜日",
            hint: "วันที่...",
            choices: [
                "かぞく",
                "かのじょ",
                "でんしゃ",
                "〜にち"
            ],
            correct: 3,
            japaneseText: "にち",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜日"
        },
        {
            kanji: "何日",
            character: "何日",
            hint: "วันที่เท่าไร, กี่วัน",
            choices: [
                "きゅうこう",
                "いきます",
                "かのじょ",
                "なんにち"
            ],
            correct: 3,
            japaneseText: "なんにち",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何日"
        },
        {
            kanji: "いつ (何時)",
            character: "いつ",
            hint: "เมื่อไร",
            choices: [
                "かのじょ",
                "かえります",
                "いつ",
                "えき"
            ],
            correct: 2,
            japaneseText: "いつ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=いつ"
        },
        {
            kanji: "誕生日",
            character: "誕生日",
            hint: "วันเกิด",
            choices: [
                "たんじょうび",
                "かれ",
                "いつ",
                "こんしゅう"
            ],
            correct: 0,
            japaneseText: "たんじょうび",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=誕生日"
        },
        {
            kanji: "次の",
            character: "次の",
            hint: "ถัดไป, ต่อไป",
            choices: [
                "なんねん",
                "なんにち",
                "つぎの",
                "かぞく"
            ],
            correct: 2,
            japaneseText: "つぎの",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=次の"
        },
        {
            kanji: "どういたしまして",
            character: "どういたしまして",
            hint: "ไม่เป็นไร (ตอบรับขอบคุณ)",
            choices: [
                "ついたち",
                "どういたしまして",
                "きょねん",
                "なんねん"
            ],
            correct: 1,
            japaneseText: "どういたしまして",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=どういたしまして"
        },
        {
            kanji: "普通",
            character: "普通",
            hint: "รถไฟธรรมดา",
            choices: [
                "ふね",
                "〜ねん",
                "ふつう",
                "がっこう"
            ],
            correct: 2,
            japaneseText: "ふつう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=普通"
        },
        {
            kanji: "急行",
            character: "急行",
            hint: "รถไฟด่วน",
            choices: [
                "どういたしまして",
                "きゅうこう",
                "ふつか",
                "ともだち"
            ],
            correct: 1,
            japaneseText: "きゅうこう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=急行"
        },
        {
            kanji: "特急",
            character: "特急",
            hint: "รถไฟด่วนพิเศษ",
            choices: [
                "〜にち",
                "かぞく",
                "こんしゅう",
                "とっきゅう"
            ],
            correct: 3,
            japaneseText: "とっきゅう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=特急"
        }
    ]
};
