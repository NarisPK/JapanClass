const fourData = {
    // บทที่ 4
    title: " 4 課 ",
    sub: " 4 課 ",
    emoji: " 📖 ",
    colorClass: "from-pink-100 to-rose-200/40 border-pink-200 text-pink-700 hover:border-pink-300 hover:from-pink-200/50 hover:to-rose-200/60",
    questions: [
        {
            kanji: "起きます",
            character: "起きます",
            hint: "ตื่นนอน",
            choices: ["ごぜん", "おきます", "ひる", "きんようび"],
            correct: 1,
            japaneseText: "おきます",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=起きます"
        },
        {
            kanji: "寝ます",
            character: "寝ます",
            hint: "เข้านอน",
            choices: ["ばん", "ねます", "きんようび", "しけん"],
            correct: 1,
            japaneseText: "ねます",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=寝ます"
        },
        {
            kanji: "働きます",
            character: "働きます",
            hint: "ทำงาน",
            choices: ["なんじ", "ゆうびんきょく", "はたらきます", "〜ふん"],
            correct: 2,
            japaneseText: "はたらきます",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=働きます"
        },
        {
            kanji: "勉強します",
            character: "勉強します",
            hint: "เรียนหนังสือ",
            choices: ["けさ", "としょかん", "べんきょうします", "ごご"],
            correct: 2,
            japaneseText: "べんきょうします",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=勉強します"
        },
        {
            kanji: "終わります",
            character: "終わります",
            hint: "เสร็จสิ้น, เลิก",
            choices: ["びじゅつかん", "おわります", "ぎんこう", "なんばん"],
            correct: 1,
            japaneseText: "おわります",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=終わります"
        },
        {
            kanji: "銀行",
            character: "銀行",
            hint: "ธนาคาร",
            choices: ["にちようび", "びじゅつかん", "よる", "ぎんこう"],
            correct: 3,
            japaneseText: "ぎんこう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=銀行"
        },
        {
            kanji: "郵便局",
            character: "郵便局",
            hint: "ที่ทำการไปรษณีย์",
            choices: ["なんばん", "〜じ", "いま", "ゆうびんきょく"],
            correct: 3,
            japaneseText: "ゆうびんきょく",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=郵便局"
        },
        {
            kanji: "図書館",
            character: "図書館",
            hint: "ห้องสมุด",
            choices: ["はたらきます", "としょかん", "ひる", "おきます"],
            correct: 1,
            japaneseText: "としょかん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=図書館"
        },
        {
            kanji: "美術館",
            character: "美術館",
            hint: "พิพิธภัณฑ์ศิลปะ, หอศิลป์",
            choices: ["かいぎ", "びじゅつかん", "あした", "いま"],
            correct: 1,
            japaneseText: "びじゅつかん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=美術館"
        },
        {
            kanji: "今",
            character: "今",
            hint: "ตอนนี้, ขณะนี้",
            choices: ["にちようび", "いま", "ひる", "ごぜん"],
            correct: 1,
            japaneseText: "いま",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=今"
        },
        {
            kanji: "〜時",
            character: "〜時",
            hint: "...โมง, ...นาฬิกา",
            choices: ["たいへん", "〜じ", "はん", "なんぷん"],
            correct: 1,
            japaneseText: "じ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜時"
        },
        {
            kanji: "〜分",
            character: "〜分",
            hint: "...นาที",
            choices: ["おととい", "としょかん", "なんじ", "〜ふん"],
            correct: 3,
            japaneseText: "ふん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=〜分"
        },
        {
            kanji: "半",
            character: "半",
            hint: "ครึ่ง",
            choices: ["どようび", "はん", "なんぷん", "なんばん"],
            correct: 1,
            japaneseText: "はん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=半"
        },
        {
            kanji: "何時",
            character: "何時",
            hint: "กี่โมง",
            choices: ["いま", "ねます", "なんじ", "やすみ"],
            correct: 2,
            japaneseText: "なんじ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何時"
        },
        {
            kanji: "何分",
            character: "何分",
            hint: "กี่นาที",
            choices: ["どようび", "やすみ", "なんばん", "なんぷん"],
            correct: 3,
            japaneseText: "なんぷん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何分"
        },
        {
            kanji: "午前",
            character: "午前",
            hint: "ช่วงเช้า (a.m.)",
            choices: ["はん", "ごぜん", "べんきょうします", "ぎんこう"],
            correct: 1,
            japaneseText: "ごぜん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=午前"
        },
        {
            kanji: "午後",
            character: "午後",
            hint: "ช่วงบ่าย (p.m.)",
            choices: ["なんぷん", "かいぎ", "ごご", "ばん"],
            correct: 2,
            japaneseText: "ごご",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=午後"
        },
        {
            kanji: "朝",
            character: "朝",
            hint: "ตอนเช้า",
            choices: ["はん", "やすみ", "あさ", "かいぎ"],
            correct: 2,
            japaneseText: "あさ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=朝"
        },
        {
            kanji: "昼",
            character: "昼",
            hint: "กลางวัน",
            choices: ["ひる", "かいぎ", "ねます", "としょかん"],
            correct: 0,
            japaneseText: "昼",
            japaneseText: "ひる",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=昼"
        },
        {
            kanji: "晩",
            character: "晩",
            hint: "ตอนเย็น, ค่ำ",
            choices: ["きょう", "やすみ", "ばん", "おわります"],
            correct: 2,
            japaneseText: "ばん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=晩"
        },
        {
            kanji: "夜",
            character: "夜",
            hint: "กลางคืน",
            choices: ["きょう", "よる", "はん", "おわります"],
            correct: 1,
            japaneseText: "よる",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=夜"
        },
        {
            kanji: "一昨日",
            character: "一昨日",
            hint: "เมื่อวานซืน",
            choices: ["なんばん", "きんようび", "かいぎ", "おととい"],
            correct: 3,
            japaneseText: "おととい",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=一昨日"
        },
        {
            kanji: "昨日",
            character: "昨日",
            hint: "เมื่อวานนี้",
            choices: ["いま", "ごぜん", "かいぎ", "きのう"],
            correct: 3,
            japaneseText: "きのう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=昨日"
        },
        {
            kanji: "今日",
            character: "今日",
            hint: "วันนี้",
            choices: ["はん", "はたらきます", "きょう", "おきます"],
            correct: 2,
            japaneseText: "きょう",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=今日"
        },
        {
            kanji: "明日",
            character: "明日",
            hint: "พรุ่งนี้",
            choices: ["ひる", "あした", "ひるやすみ", "あさ"],
            correct: 1,
            japaneseText: "あした",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=明日"
        },
        {
            kanji: "明後日",
            character: "明後日",
            hint: "มะรืนนี้",
            choices: ["なんようび", "あさって", "〜ふん", "おきます"],
            correct: 1,
            japaneseText: "あさって",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=明後日"
        },
        {
            kanji: "今朝",
            character: "今朝",
            hint: "เช้าวันนี้",
            choices: ["やすみ", "けさ", "おととい", "きんようび"],
            correct: 1,
            japaneseText: "けさ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=今朝"
        },
        {
            kanji: "休み",
            character: "休み",
            hint: "วันหยุด, การพักผ่อน",
            choices: ["あした", "〜じ", "やすみ", "ぎんこう"],
            correct: 2,
            japaneseText: "やすみ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=休み"
        },
        {
            kanji: "昼休み",
            character: "昼休み",
            hint: "พักกลางวัน",
            choices: ["きのう", "びじゅつかん", "ぎんこう", "ひるやすみ"],
            correct: 3,
            japaneseText: "ひるやすみ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=昼休み"
        },
        {
            kanji: "試験",
            character: "試験",
            hint: "การสอบ, ข้อสอบ",
            choices: ["なんぷん", "しけん", "ひる", "よる"],
            correct: 1,
            japaneseText: "しけん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=試験"
        },
        {
            kanji: "会議",
            character: "会議",
            hint: "การประชุม",
            choices: ["はたらきます", "〜ふん", "おととい", "かいぎ"],
            correct: 3,
            japaneseText: "かいぎ",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=会議"
        },
        {
            kanji: "金曜日",
            character: "金曜日",
            hint: "วันศุกร์",
            choices: ["ばん", "きんようび", "しけん", "おととい"],
            correct: 1,
            japaneseText: "きんようび",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=金曜日"
        },
        {
            kanji: "土曜日",
            character: "土曜日",
            hint: "วันเสาร์",
            choices: ["どようび", "ゆうびんきょく", "おきます", "あした"],
            correct: 0,
            japaneseText: "どようび",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=土曜日"
        },
        {
            kanji: "日曜日",
            character: "日曜日",
            hint: "วันอาทิตย์",
            choices: ["なんばん", "にちようび", "ごご", "おきます"],
            correct: 1,
            japaneseText: "にちようび",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=日曜日"
        },
        {
            kanji: "何曜日",
            character: "何曜日",
            hint: "วันอะไร (ในสัปดาห์)",
            choices: ["なんじ", "たいへん", "ばん", "なんようび"],
            correct: 3,
            japaneseText: "なんようび",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何曜日"
        },
        {
            kanji: "大変",
            character: "大変",
            hint: "เหนื่อย, ลำบาก, แย่",
            choices: ["いま", "たいへん", "どようび", "あさって"],
            correct: 1,
            japaneseText: "たいへん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=大変"
        },
        {
            kanji: "何番",
            character: "何番",
            hint: "หมายเลขอะไร, เบอร์อะไร",
            choices: ["かいぎ", "いま", "よる", "なんばん"],
            correct: 3,
            japaneseText: "なんばん",
            img: "https://placehold.co/600x600/ffe4e6/be123c?text=何番"
        }
    ]
};
