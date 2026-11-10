// ข้อมูลคำศัพท์เพิ่มเติมเฉพาะสำหรับโหมดบัตรคำศัพท์ (Flashcard Mode)
// อ้างอิงจากคลังบัตรคำศัพท์ PDF Minna no Nihongo (1課 - 50課)
const flashcardExtraData = {
  "1": [
    {
      "kanji": "あなた",
      "character": "あなた",
      "japaneseText": "あなた",
      "romaji": "anata",
      "hint": "คุณ, เธอ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～さん",
      "character": "～さん",
      "japaneseText": "～さん",
      "romaji": "~san",
      "hint": "คุณ... (คำต่อท้ายชื่อแสดงความสุภาพ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～ちゃん",
      "character": "～ちゃん",
      "japaneseText": "～ちゃん",
      "romaji": "~chan",
      "hint": "หนู..., น้อง... (คำต่อท้ายชื่อเด็ก/สัตว์เลี้ยง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どなた",
      "character": "どなた",
      "japaneseText": "どなた",
      "romaji": "donata",
      "hint": "ใคร, ท่านไหน (รูปสุภาพของ だれ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "はい",
      "character": "はい",
      "japaneseText": "はい",
      "romaji": "hai",
      "hint": "ใช่, ครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いいえ",
      "character": "いいえ",
      "japaneseText": "いいえ",
      "romaji": "iie",
      "hint": "ไม่ใช่, เปล่า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "初めまして",
      "character": "初めまして",
      "japaneseText": "はじめまして",
      "romaji": "hajimemashite",
      "hint": "ยินดีที่ได้รู้จัก (ทักทายเมื่อพบกันครั้งแรก)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～から来ました",
      "character": "～から来ました",
      "japaneseText": "～から きました",
      "romaji": "~kara kimashita",
      "hint": "มาจาก... (ประเทศ/บ้านเกิด)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "失礼ですが",
      "character": "失礼ですが",
      "japaneseText": "しつれいですが",
      "romaji": "shitsureidesuga",
      "hint": "ขอประทานโทษครับ/ค่ะ (ใช้เกริ่นก่อนถามเรื่องส่วนตัว)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "こちらは～さんです",
      "character": "こちらは～さんです",
      "japaneseText": "こちらは ～さんです",
      "romaji": "kochira wa ~san desu",
      "hint": "นี่คือคุณ... (ใช้แนะนำบุคคลอื่น)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "アメリカ",
      "character": "アメリカ",
      "japaneseText": "アメリカ",
      "romaji": "amerika",
      "hint": "ประเทศสหรัฐอเมริกา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "イギリス",
      "character": "イギリス",
      "japaneseText": "イギリス",
      "romaji": "igirisu",
      "hint": "ประเทศอังกฤษ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "インド",
      "character": "インド",
      "japaneseText": "インド",
      "romaji": "indo",
      "hint": "ประเทศอินเดีย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ドイツ",
      "character": "ドイツ",
      "japaneseText": "ドイツ",
      "romaji": "doitsu",
      "hint": "ประเทศเยอรมนี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "タイ",
      "character": "タイ",
      "japaneseText": "タイ",
      "romaji": "tai",
      "hint": "ประเทศไทย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ブラジル",
      "character": "ブラジル",
      "japaneseText": "ブラジル",
      "romaji": "burajiru",
      "hint": "ประเทศบราซิล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "インドネシア",
      "character": "インドネシア",
      "japaneseText": "インドネシア",
      "romaji": "indoneshia",
      "hint": "ประเทศอินโดนีเซีย",
      "isExtraFlashcard": true
    }
  ],
  "2": [
    {
      "kanji": "これ",
      "character": "これ",
      "japaneseText": "これ",
      "romaji": "kore",
      "hint": "นี้, สิ่งนี้ (อยู่ใกล้ผู้พูด)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それ",
      "character": "それ",
      "japaneseText": "それ",
      "romaji": "sore",
      "hint": "นั้น, สิ่งนั้น (อยู่ใกล้ผู้ฟัง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あれ",
      "character": "あれ",
      "japaneseText": "あれ",
      "romaji": "are",
      "hint": "โน้น, สิ่งโน้น (อยู่ไกลทั้งคู่)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "この～",
      "character": "この～",
      "japaneseText": "この～",
      "romaji": "kono~",
      "hint": "...นี้ (ต้องมีคำนามตามหลัง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "その～",
      "character": "その～",
      "japaneseText": "その～",
      "romaji": "sono~",
      "hint": "...นั้น (ต้องมีคำนามตามหลัง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あの～",
      "character": "あの～",
      "japaneseText": "あの～",
      "romaji": "ano~",
      "hint": "...โน้น (ต้องมีคำนามตามหลัง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "本",
      "character": "本",
      "japaneseText": "ほん",
      "romaji": "hon",
      "hint": "หนังสือ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ノート",
      "character": "ノート",
      "japaneseText": "ノート",
      "romaji": "nooto",
      "hint": "สมุดบันทึก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カード",
      "character": "カード",
      "japaneseText": "カード",
      "romaji": "kaado",
      "hint": "การ์ด, บัตร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ボールペン",
      "character": "ボールペン",
      "japaneseText": "ボールペン",
      "romaji": "boorupen",
      "hint": "ปากกาลูกลื่น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "シャープペンシル",
      "character": "シャープペンシル",
      "japaneseText": "シャープペンシル",
      "romaji": "shaapupenshiru",
      "hint": "ดินสอกด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "CD",
      "character": "CD",
      "japaneseText": "シーディー",
      "romaji": "shiidii",
      "hint": "แผ่นซีดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "テレビ",
      "character": "テレビ",
      "japaneseText": "テレビ",
      "romaji": "terebi",
      "hint": "โทรทัศน์, ทีวี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ラジオ",
      "character": "ラジオ",
      "japaneseText": "ラジオ",
      "romaji": "rajio",
      "hint": "วิทยุ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カメラ",
      "character": "カメラ",
      "japaneseText": "カメラ",
      "romaji": "kamera",
      "hint": "กล้องถ่ายรูป",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コンピューター",
      "character": "コンピューター",
      "japaneseText": "コンピューター",
      "romaji": "konpyuutaa",
      "hint": "คอมพิวเตอร์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "チョコレート",
      "character": "チョコレート",
      "japaneseText": "チョコレート",
      "romaji": "chokoreeto",
      "hint": "ช็อกโกแลต",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コーヒー",
      "character": "コーヒー",
      "japaneseText": "コーヒー",
      "romaji": "koohii",
      "hint": "กาแฟ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あのう",
      "character": "あのう",
      "japaneseText": "あのう",
      "romaji": "anou",
      "hint": "เอ่อ... (ใช้เกริ่นอย่างเกรงใจ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どうぞ",
      "character": "どうぞ",
      "japaneseText": "どうぞ",
      "romaji": "douzo",
      "hint": "เชิญครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ありがとう",
      "character": "ありがとう",
      "japaneseText": "ありがとう",
      "romaji": "arigatou",
      "hint": "ขอบคุณ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ございます",
      "character": "ございます",
      "japaneseText": "ございます",
      "romaji": "gozaimasu",
      "hint": "มีอยู่ (คำสุภาพ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そうですか",
      "character": "そうですか",
      "japaneseText": "そうですか",
      "romaji": "soudesuka",
      "hint": "อย่างนั้นหรือครับ/ค่ะ",
      "isExtraFlashcard": true
    }
  ],
  "3": [
    {
      "kanji": "ここ",
      "character": "ここ",
      "japaneseText": "ここ",
      "romaji": "koko",
      "hint": "ที่นี่, ตรงนี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そこ",
      "character": "そこ",
      "japaneseText": "そこ",
      "romaji": "soko",
      "hint": "ที่นั้น, ตรงนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あそこ",
      "character": "あそこ",
      "japaneseText": "あそこ",
      "romaji": "asoko",
      "hint": "ที่โน่น, ตรงโน้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どこ",
      "character": "どこ",
      "japaneseText": "どこ",
      "romaji": "doko",
      "hint": "ที่ไหน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "こちら",
      "character": "こちら",
      "japaneseText": "こちら",
      "romaji": "kochira",
      "hint": "ทางนี้, ที่นี่ (สุภาพของ ここ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そちら",
      "character": "そちら",
      "japaneseText": "そちら",
      "romaji": "sochira",
      "hint": "ทางนั้น, ที่นั้น (สุภาพของ そこ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あちら",
      "character": "あちら",
      "japaneseText": "あちら",
      "romaji": "achira",
      "hint": "ทางโน้น, ที่โน่น (สุภาพของ あそこ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どちら",
      "character": "どちら",
      "japaneseText": "どちら",
      "romaji": "dochira",
      "hint": "อันไหน, ด้านไหน (ใน 2 สิ่ง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "教室",
      "character": "教室",
      "japaneseText": "きょうしつ",
      "romaji": "kyoushitsu",
      "hint": "ห้องเรียน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コピー",
      "character": "コピー",
      "japaneseText": "コピー",
      "romaji": "kopii",
      "hint": "การถ่ายเอกสาร, สำเนา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "部屋",
      "character": "部屋",
      "japaneseText": "へや",
      "romaji": "heya",
      "hint": "ห้อง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "トイレ",
      "character": "トイレ",
      "japaneseText": "トイレ",
      "romaji": "toire",
      "hint": "ห้องน้ำ, สุขา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "エレベーター",
      "character": "エレベーター",
      "japaneseText": "エレベーター",
      "romaji": "erebeetaa",
      "hint": "ลิฟต์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "エスカレーター",
      "character": "エスカレーター",
      "japaneseText": "エスカレーター",
      "romaji": "esukareetaa",
      "hint": "บันไดเลื่อน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "うち",
      "character": "うち",
      "japaneseText": "うち",
      "romaji": "uchi",
      "hint": "บ้าน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ネクタイ",
      "character": "ネクタイ",
      "japaneseText": "ネクタイ",
      "romaji": "nekutai",
      "hint": "เนกไท",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ワイン",
      "character": "ワイン",
      "japaneseText": "ワイン",
      "romaji": "wain",
      "hint": "ไวน์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いくら",
      "character": "いくら",
      "japaneseText": "いくら",
      "romaji": "ikura",
      "hint": "ราคาเท่าไหร่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "千",
      "character": "千",
      "japaneseText": "せん",
      "romaji": "sen",
      "hint": "หนึ่งพัน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "すみません",
      "character": "すみません",
      "japaneseText": "すみません",
      "romaji": "sumimasen",
      "hint": "ขอโทษครับ/ค่ะ, ขออภัย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "「～を」見せてください",
      "character": "「～を」見せてください",
      "japaneseText": "「～を」みせて ください",
      "romaji": "[~o] misete kudasai",
      "hint": "ขอดู...หน่อยครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "「～を」ください",
      "character": "「～を」ください",
      "japaneseText": "「～を」ください",
      "romaji": "[~o] kudasai",
      "hint": "ขอ...ครับ/ค่ะ (ใช้ซื้อของ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "イタリア",
      "character": "イタリア",
      "japaneseText": "イタリア",
      "romaji": "itaria",
      "hint": "ประเทศอิตาลี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スイス",
      "character": "スイス",
      "japaneseText": "スイス",
      "romaji": "suisu",
      "hint": "ประเทศสวิตเซอร์แลนด์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "フランス",
      "character": "フランス",
      "japaneseText": "フランス",
      "romaji": "furansu",
      "hint": "ประเทศฝรั่งเศส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ジャカルタ",
      "character": "ジャカルタ",
      "japaneseText": "ジャカルタ",
      "romaji": "jakaruta",
      "hint": "กรุงจาการ์ตา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "バンコク",
      "character": "バンコク",
      "japaneseText": "バンコク",
      "romaji": "bankoku",
      "hint": "กรุงเทพมหานคร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ベルリン",
      "character": "ベルリン",
      "japaneseText": "ベルリン",
      "romaji": "berurin",
      "hint": "กรุงเบอร์ลิน",
      "isExtraFlashcard": true
    }
  ],
  "4": [
    {
      "kanji": "デパート",
      "character": "デパート",
      "japaneseText": "デパート",
      "romaji": "depaato",
      "hint": "ห้างสรรพสินค้า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "英語",
      "character": "英語",
      "japaneseText": "えいご",
      "romaji": "eigo",
      "hint": "ภาษาอังกฤษ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "毎朝",
      "character": "毎朝",
      "japaneseText": "まいあさ",
      "romaji": "maiasa",
      "hint": "ทุกเช้า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "毎晩",
      "character": "毎晩",
      "japaneseText": "まいばん",
      "romaji": "maiban",
      "hint": "ทุกเย็น, ทุกคืน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "毎日",
      "character": "毎日",
      "japaneseText": "まいにち",
      "romaji": "mainichi",
      "hint": "ทุกวัน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "月曜日",
      "character": "月曜日",
      "japaneseText": "げつようび",
      "romaji": "getsuyoubi",
      "hint": "วันจันทร์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "火曜日",
      "character": "火曜日",
      "japaneseText": "かようび",
      "romaji": "kayoubi",
      "hint": "วันอังคาร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "水曜日",
      "character": "水曜日",
      "japaneseText": "すいようび",
      "romaji": "suiyoubi",
      "hint": "วันพุธ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "木曜日",
      "character": "木曜日",
      "japaneseText": "もくようび",
      "romaji": "mokuyoubi",
      "hint": "วันพฤหัสบดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～から",
      "character": "～から",
      "japaneseText": "～から",
      "romaji": "~kara",
      "hint": "จาก..., ตั้งแต่...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～まで",
      "character": "～まで",
      "japaneseText": "～まで",
      "romaji": "~made",
      "hint": "ถึง..., จนถึง...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～と～",
      "character": "～と～",
      "japaneseText": "～と～",
      "romaji": "~to~",
      "hint": "...กับ..., ...และ...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そちら",
      "character": "そちら",
      "japaneseText": "そちら",
      "romaji": "sochira",
      "hint": "ทางนั้น, ที่นั้น (สุภาพของ そこ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ニューヨーク",
      "character": "ニューヨーク",
      "japaneseText": "ニューヨーク",
      "romaji": "nyuuyooku",
      "hint": "มหานครนิวยอร์ก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ペキン",
      "character": "ペキン",
      "japaneseText": "ペキン",
      "romaji": "pekin",
      "hint": "กรุงปักกิ่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ロサンゼルス",
      "character": "ロサンゼルス",
      "japaneseText": "ロサンゼルス",
      "romaji": "rosanzerusu",
      "hint": "ลอสแอนเจลิส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ロンドン",
      "character": "ロンドン",
      "japaneseText": "ロンドン",
      "romaji": "rondon",
      "hint": "กรุงลอนดอน",
      "isExtraFlashcard": true
    }
  ],
  "5": [
    {
      "kanji": "スーパー",
      "character": "スーパー",
      "japaneseText": "スーパー",
      "romaji": "suupaa",
      "hint": "ซูเปอร์มาร์เก็ต",
      "isExtraFlashcard": true
    },
    {
      "kanji": "バス",
      "character": "バス",
      "japaneseText": "バス",
      "romaji": "basu",
      "hint": "รถประจำทาง, รถบัส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "タクシー",
      "character": "タクシー",
      "japaneseText": "タクシー",
      "romaji": "takushii",
      "hint": "แท็กซี่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "人",
      "character": "人",
      "japaneseText": "ひと",
      "romaji": "hito",
      "hint": "คน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "一人で",
      "character": "一人で",
      "japaneseText": "ひとりで",
      "romaji": "hitoride",
      "hint": "คนเดียว, ตามลำพัง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～月",
      "character": "～月",
      "japaneseText": "～がつ",
      "romaji": "~gatsu",
      "hint": "เดือน... (ชื่อเดือน)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "何月",
      "character": "何月",
      "japaneseText": "なんがつ",
      "romaji": "nangatsu",
      "hint": "เดือนอะไร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "1日",
      "character": "1日",
      "japaneseText": "ついたち",
      "romaji": "tsuitachi",
      "hint": "วันที่ 1",
      "isExtraFlashcard": true
    },
    {
      "kanji": "2日",
      "character": "2日",
      "japaneseText": "ふつか",
      "romaji": "futsuka",
      "hint": "วันที่ 2",
      "isExtraFlashcard": true
    },
    {
      "kanji": "3日",
      "character": "3日",
      "japaneseText": "みっか",
      "romaji": "mikka",
      "hint": "วันที่ 3",
      "isExtraFlashcard": true
    },
    {
      "kanji": "4日",
      "character": "4日",
      "japaneseText": "よっか",
      "romaji": "yokka",
      "hint": "วันที่ 4",
      "isExtraFlashcard": true
    },
    {
      "kanji": "5日",
      "character": "5日",
      "japaneseText": "いつか",
      "romaji": "itsuka",
      "hint": "วันที่ 5",
      "isExtraFlashcard": true
    },
    {
      "kanji": "6日",
      "character": "6日",
      "japaneseText": "むいか",
      "romaji": "muika",
      "hint": "วันที่ 6",
      "isExtraFlashcard": true
    },
    {
      "kanji": "7日",
      "character": "7日",
      "japaneseText": "なのか",
      "romaji": "nanoka",
      "hint": "วันที่ 7",
      "isExtraFlashcard": true
    },
    {
      "kanji": "8日",
      "character": "8日",
      "japaneseText": "ようか",
      "romaji": "youka",
      "hint": "วันที่ 8",
      "isExtraFlashcard": true
    },
    {
      "kanji": "9日",
      "character": "9日",
      "japaneseText": "ここのか",
      "romaji": "kokonoka",
      "hint": "วันที่ 9",
      "isExtraFlashcard": true
    },
    {
      "kanji": "10日",
      "character": "10日",
      "japaneseText": "とおか",
      "romaji": "tooka",
      "hint": "วันที่ 10",
      "isExtraFlashcard": true
    },
    {
      "kanji": "14日",
      "character": "14日",
      "japaneseText": "じゅうよっか",
      "romaji": "juuyokka",
      "hint": "วันที่ 14",
      "isExtraFlashcard": true
    },
    {
      "kanji": "24日",
      "character": "24日",
      "japaneseText": "にじゅうよっか",
      "romaji": "nijuuyokka",
      "hint": "วันที่ 24",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そうですね",
      "character": "そうですね",
      "japaneseText": "そうですね",
      "romaji": "soudesune",
      "hint": "นั่นสินะครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～番線",
      "character": "～番線",
      "japaneseText": "～ばんせん",
      "romaji": "~bansen",
      "hint": "ชานชาลาหมายเลข...",
      "isExtraFlashcard": true
    }
  ],
  "6": [
    {
      "kanji": "します",
      "character": "します",
      "japaneseText": "します",
      "romaji": "shimasu",
      "hint": "ทำ, เล่น (กีฬา)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パン",
      "character": "パン",
      "japaneseText": "パン",
      "romaji": "pan",
      "hint": "ขนมปัง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ジュース",
      "character": "ジュース",
      "japaneseText": "ジュース",
      "romaji": "juusu",
      "hint": "น้ำผลไม้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ビール",
      "character": "ビール",
      "japaneseText": "ビール",
      "romaji": "biiru",
      "hint": "เบียร์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "煙草",
      "character": "煙草",
      "japaneseText": "たばこ",
      "romaji": "tabako",
      "hint": "บุหรี่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "レポート",
      "character": "レポート",
      "japaneseText": "レポート",
      "romaji": "repooto",
      "hint": "รายงาน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ビデオ",
      "character": "ビデオ",
      "japaneseText": "ビデオ",
      "romaji": "bideo",
      "hint": "วิดีโอ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "テニス",
      "character": "テニス",
      "japaneseText": "テニス",
      "romaji": "tenisu",
      "hint": "เทนนิส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "サッカー",
      "character": "サッカー",
      "japaneseText": "サッカー",
      "romaji": "sakkaa",
      "hint": "ฟุตบอล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "花見",
      "character": "花見",
      "japaneseText": "はなみ",
      "romaji": "hanami",
      "hint": "การชมดอกซากุระ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それから",
      "character": "それから",
      "japaneseText": "それから",
      "romaji": "sorekara",
      "hint": "หลังจากนั้น, ต่อจากนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いいですね",
      "character": "いいですね",
      "japaneseText": "いいですね",
      "romaji": "iidesune",
      "hint": "ดีจังเลยนะ, เข้าท่าดีนะ",
      "isExtraFlashcard": true
    }
  ],
  "7": [
    {
      "kanji": "あげます",
      "character": "あげます",
      "japaneseText": "あげます",
      "romaji": "agemasu",
      "hint": "ให้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もらいます",
      "character": "もらいます",
      "japaneseText": "もらいます",
      "romaji": "moraimasu",
      "hint": "ได้รับ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "かけます",
      "character": "かけます",
      "japaneseText": "かけます",
      "romaji": "kakemasu",
      "hint": "โทร (โทรศัพท์)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スプーン",
      "character": "スプーン",
      "japaneseText": "スプーン",
      "romaji": "supuun",
      "hint": "ช้อน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ナイフ",
      "character": "ナイフ",
      "japaneseText": "ナイフ",
      "romaji": "naifu",
      "hint": "มีด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "フォーク",
      "character": "フォーク",
      "japaneseText": "フォーク",
      "romaji": "fooku",
      "hint": "ส้อม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "メール",
      "character": "メール",
      "japaneseText": "メール",
      "romaji": "meeru",
      "hint": "อีเมล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パンチ",
      "character": "パンチ",
      "japaneseText": "パンチ",
      "romaji": "panchi",
      "hint": "ที่เจาะกระดาษ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ホッチキス",
      "character": "ホッチキス",
      "japaneseText": "ホッチキス",
      "romaji": "hotchikisu",
      "hint": "ที่เย็บกระดาษ, แม็ก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "セロテープ",
      "character": "セロテープ",
      "japaneseText": "セロテープ",
      "romaji": "seroteepu",
      "hint": "เทปใส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "シャツ",
      "character": "シャツ",
      "japaneseText": "シャツ",
      "romaji": "shatsu",
      "hint": "เสื้อเชิ้ต",
      "isExtraFlashcard": true
    },
    {
      "kanji": "プレゼント",
      "character": "プレゼント",
      "japaneseText": "プレゼント",
      "romaji": "purezento",
      "hint": "ของขวัญ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "クリスマス",
      "character": "クリスマス",
      "japaneseText": "クリスマス",
      "romaji": "kurisumasu",
      "hint": "คริสต์มาส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もう",
      "character": "もう",
      "japaneseText": "もう",
      "romaji": "mou",
      "hint": "...แล้ว (ทำเสร็จแล้ว)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "まだ",
      "character": "まだ",
      "japaneseText": "まだ",
      "romaji": "mada",
      "hint": "ยัง (ยังไม่ได้ทำ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "これから",
      "character": "これから",
      "japaneseText": "これから",
      "romaji": "korekara",
      "hint": "จากนี้ไป, หลังจากนี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "素敵",
      "character": "素敵",
      "japaneseText": "すてき",
      "romaji": "suteki",
      "hint": "ยอดเยี่ยม, สวยงาม, ดูดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "「は」いかがですか",
      "character": "「は」いかがですか",
      "japaneseText": "「は」いかがですか",
      "romaji": "[~wa] ikagadesuka",
      "hint": "รับ...สักหน่อยไหมครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いただきます",
      "character": "いただきます",
      "japaneseText": "いただきます",
      "romaji": "itadakimasu",
      "hint": "จะทานแล้วนะครับ/ค่ะ (พูดก่อนทานอาหาร)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ごちそうさま 「でした」",
      "character": "ごちそうさま 「でした」",
      "japaneseText": "ごちそうさま 「でした」",
      "romaji": "gochisousama [deshita]",
      "hint": "ขอบคุณสำหรับอาหาร (พูดหลังทานอาหาร)",
      "isExtraFlashcard": true
    }
  ],
  "8": [
    {
      "kanji": "ハンサム",
      "character": "ハンサム",
      "japaneseText": "ハンサム",
      "romaji": "hansamu",
      "hint": "หล่อ, ดูดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "きれい",
      "character": "きれい",
      "japaneseText": "きれい",
      "romaji": "kirei",
      "hint": "สวย, สะอาด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いい",
      "character": "いい",
      "japaneseText": "いい",
      "romaji": "ii",
      "hint": "ดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "熱い",
      "character": "熱い",
      "japaneseText": "あつい",
      "romaji": "atsui",
      "hint": "ร้อน (สิ่งของ/เครื่องดื่ม)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "寮",
      "character": "寮",
      "japaneseText": "りょう",
      "romaji": "ryou",
      "hint": "หอพัก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "レストラン",
      "character": "レストラン",
      "japaneseText": "レストラン",
      "romaji": "resutoran",
      "hint": "ร้านอาหาร, ภัตตาคาร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どう",
      "character": "どう",
      "japaneseText": "どう",
      "romaji": "dou",
      "hint": "เป็นอย่างไร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どんな～",
      "character": "どんな～",
      "japaneseText": "どんな～",
      "romaji": "donna~",
      "hint": "...แบบไหน, ...ลักษณะใด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "とても",
      "character": "とても",
      "japaneseText": "とても",
      "romaji": "totemo",
      "hint": "มาก, เป็นอย่างยิ่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あまり",
      "character": "あまり",
      "japaneseText": "あまり",
      "romaji": "amari",
      "hint": "ไม่ค่อย... (ใช้กับรูปปฏิเสธ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そして",
      "character": "そして",
      "japaneseText": "そして",
      "romaji": "soshite",
      "hint": "และ, แล้วก็",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もう一杯いかがですか",
      "character": "もう一杯いかがですか",
      "japaneseText": "もういっぱい いかがですか",
      "romaji": "mou ippai ikagadesuka",
      "hint": "รับอีกสักแก้วไหมครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いいえ、けっこうです",
      "character": "いいえ、けっこうです",
      "japaneseText": "いいえ、 けっこうです",
      "romaji": "iie, kekkoudesu",
      "hint": "ไม่เป็นไรครับ/ค่ะ (พอแล้ว)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そろそろ失礼します",
      "character": "そろそろ失礼します",
      "japaneseText": "そろそろ しつれいします",
      "romaji": "sorosoro shitsureishimasu",
      "hint": "เห็นทีต้องขอตัวกลับก่อนแล้วครับ/ค่ะ",
      "isExtraFlashcard": true
    }
  ],
  "9": [
    {
      "kanji": "あります",
      "character": "あります",
      "japaneseText": "あります",
      "romaji": "arimasu",
      "hint": "มี, อยู่ (สิ่งของไม่มีชีวิต)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スポーツ",
      "character": "スポーツ",
      "japaneseText": "スポーツ",
      "romaji": "supootsu",
      "hint": "กีฬา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ダンス",
      "character": "ダンス",
      "japaneseText": "ダンス",
      "romaji": "dansu",
      "hint": "การเต้นรำ, การเต้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "クラシック",
      "character": "クラシック",
      "japaneseText": "クラシック",
      "romaji": "kurashikku",
      "hint": "ดนตรีคลาสสิก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ジャズ",
      "character": "ジャズ",
      "japaneseText": "ジャズ",
      "romaji": "jazu",
      "hint": "ดนตรีแจ๊ส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コンサート",
      "character": "コンサート",
      "japaneseText": "コンサート",
      "romaji": "konsaato",
      "hint": "คอนเสิร์ต",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カラオケ",
      "character": "カラオケ",
      "japaneseText": "カラオケ",
      "romaji": "karaoke",
      "hint": "คาราโอเกะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ひらがな",
      "character": "ひらがな",
      "japaneseText": "ひらがな",
      "romaji": "hiragana",
      "hint": "อักษรฮิราคานะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カタカナ",
      "character": "カタカナ",
      "japaneseText": "カタカナ",
      "romaji": "katakana",
      "hint": "อักษรคาตาคานะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "チケット",
      "character": "チケット",
      "japaneseText": "チケット",
      "romaji": "chiketto",
      "hint": "ตั๋ว, บัตรผ่าน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "アルバイト",
      "character": "アルバイト",
      "japaneseText": "アルバイト",
      "romaji": "arubaito",
      "hint": "งานพิเศษ, งานพาร์ทไทม์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "よく",
      "character": "よく",
      "japaneseText": "よく",
      "romaji": "yoku",
      "hint": "บ่อยๆ, เป็นอย่างดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "だいたい",
      "character": "だいたい",
      "japaneseText": "だいたい",
      "romaji": "daitai",
      "hint": "โดยส่วนใหญ่, โดยประมาณ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "たくさん",
      "character": "たくさん",
      "japaneseText": "たくさん",
      "romaji": "takusan",
      "hint": "จำนวนมาก, เยอะมาก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～から",
      "character": "～から",
      "japaneseText": "～から",
      "romaji": "~kara",
      "hint": "จาก..., ตั้งแต่...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どうして",
      "character": "どうして",
      "japaneseText": "どうして",
      "romaji": "doushite",
      "hint": "ทำไม, เพราะอะไร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～を貸してください",
      "character": "～を貸してください",
      "japaneseText": "～をかして ください",
      "romaji": "[~o] kashite kudasai",
      "hint": "ขอยืม...หน่อยครับ/ค่ะ",
      "isExtraFlashcard": true
    }
  ],
  "10": [
    {
      "kanji": "あります",
      "character": "あります",
      "japaneseText": "あります",
      "romaji": "arimasu",
      "hint": "มี, อยู่ (สิ่งของไม่มีชีวิต)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "います",
      "character": "います",
      "japaneseText": "います",
      "romaji": "imasu",
      "hint": "มี, อยู่ (คนหรือสัตว์มีชีวิต)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パンダ",
      "character": "パンダ",
      "japaneseText": "パンダ",
      "romaji": "panda",
      "hint": "แพนด้า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "象",
      "character": "象",
      "japaneseText": "ぞう",
      "romaji": "zou",
      "hint": "ช้าง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スイッチ",
      "character": "スイッチ",
      "japaneseText": "スイッチ",
      "romaji": "suicchi",
      "hint": "สวิตช์ไฟ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "テーブル",
      "character": "テーブル",
      "japaneseText": "テーブル",
      "romaji": "teeburu",
      "hint": "โต๊ะกินข้าว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ベッド",
      "character": "ベッド",
      "japaneseText": "ベッド",
      "romaji": "beddo",
      "hint": "เตียงนอน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ドア",
      "character": "ドア",
      "japaneseText": "ドア",
      "romaji": "doa",
      "hint": "ประตู",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ポスト",
      "character": "ポスト",
      "japaneseText": "ポスト",
      "romaji": "posuto",
      "hint": "ตู้ไปรษณีย์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ビル",
      "character": "ビル",
      "japaneseText": "ビル",
      "romaji": "biru",
      "hint": "ตึก, อาคาร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ATM",
      "character": "ATM",
      "japaneseText": "エーティーエム",
      "romaji": "eetiiemu",
      "hint": "ตู้เบิกเงินสด ATM",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コンビニ",
      "character": "コンビニ",
      "japaneseText": "コンビニ",
      "romaji": "konbini",
      "hint": "ร้านสะดวกซื้อ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～や～など",
      "character": "～や～など",
      "japaneseText": "～や～など",
      "romaji": "~ya~nado",
      "hint": "...และ...เป็นต้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ナンプラー",
      "character": "ナンプラー",
      "japaneseText": "ナンプラー",
      "romaji": "nanpuraa",
      "hint": "น้ำปลา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コーナー",
      "character": "コーナー",
      "japaneseText": "コーナー",
      "romaji": "koonaa",
      "hint": "มุม, แผนกในห้าง",
      "isExtraFlashcard": true
    }
  ],
  "11": [
    {
      "kanji": "います",
      "character": "います",
      "japaneseText": "います",
      "romaji": "imasu",
      "hint": "มี, อยู่ (คนหรือสัตว์มีชีวิต)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "かかります",
      "character": "かかります",
      "japaneseText": "かかります",
      "romaji": "kakarimasu",
      "hint": "ใช้เวลา, เสียค่าใช้จ่าย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "林檎",
      "character": "林檎",
      "japaneseText": "りんご",
      "romaji": "ringo",
      "hint": "แอปเปิ้ล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "蜜柑",
      "character": "蜜柑",
      "japaneseText": "みかん",
      "romaji": "mikan",
      "hint": "ส้ม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "サンドイッチ",
      "character": "サンドイッチ",
      "japaneseText": "サンドイッチ",
      "romaji": "sandoicchi",
      "hint": "แซนด์วิช",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カレーライス",
      "character": "カレーライス",
      "japaneseText": "カレーライス",
      "romaji": "kareeraisu",
      "hint": "ข้าวแกงกะหรี่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "アイスクリーム",
      "character": "アイスクリーム",
      "japaneseText": "アイスクリーム",
      "romaji": "aisukuriimu",
      "hint": "ไอศกรีม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "葉書",
      "character": "葉書",
      "japaneseText": "はがき",
      "romaji": "hagaki",
      "hint": "ไปรษณียบัตร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "兄弟",
      "character": "兄弟",
      "japaneseText": "きょうだい",
      "romaji": "kyoudai",
      "hint": "พี่น้อง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "お兄さん",
      "character": "お兄さん",
      "japaneseText": "おにいさん",
      "romaji": "oniisan",
      "hint": "พี่ชาย (ของผู้อื่น)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "クラス",
      "character": "クラス",
      "japaneseText": "クラス",
      "romaji": "kurasu",
      "hint": "ชั้นเรียน, ห้องเรียน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どのくらい",
      "character": "どのくらい",
      "japaneseText": "どのくらい",
      "romaji": "donokurai",
      "hint": "นานแค่ไหน, ประมาณเท่าไหร่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～だけ",
      "character": "～だけ",
      "japaneseText": "～だけ",
      "romaji": "~dake",
      "hint": "เพียงแค่..., เท่านั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "船便",
      "character": "船便",
      "japaneseText": "ふなびん",
      "romaji": "funabin",
      "hint": "การส่งทางเรือ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "航空便",
      "character": "航空便",
      "japaneseText": "こうくうびん",
      "romaji": "koukuubin",
      "hint": "การส่งทางอากาศ (แอร์เมล์)",
      "isExtraFlashcard": true
    }
  ],
  "12": [
    {
      "kanji": "ホテル",
      "character": "ホテル",
      "japaneseText": "ホテル",
      "romaji": "hoteru",
      "hint": "โรงแรม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パーティー",
      "character": "パーティー",
      "japaneseText": "パーティー",
      "romaji": "paatii",
      "hint": "งานเลี้ยง, ปาร์ตี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "レモン",
      "character": "レモン",
      "japaneseText": "レモン",
      "romaji": "remon",
      "hint": "มะนาว, เลมอน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どちら",
      "character": "どちら",
      "japaneseText": "どちら",
      "romaji": "dochira",
      "hint": "อันไหน, ด้านไหน (ใน 2 สิ่ง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どちらも",
      "character": "どちらも",
      "japaneseText": "どちらも",
      "romaji": "dochiramo",
      "hint": "ทั้งสองอัน, ทั้งคู่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ずっと",
      "character": "ずっと",
      "japaneseText": "ずっと",
      "romaji": "zutto",
      "hint": "...กว่ามาก, ตลอดเวลา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ただいま",
      "character": "ただいま",
      "japaneseText": "ただいま",
      "romaji": "tadaima",
      "hint": "กลับมาแล้วครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "お帰りなさい",
      "character": "お帰りなさい",
      "japaneseText": "おかえりなさい",
      "romaji": "okaerinasai",
      "hint": "ยินดีต้อนรับกลับบ้านครับ/ค่ะ",
      "isExtraFlashcard": true
    }
  ],
  "13": [
    {
      "kanji": "結婚します",
      "character": "結婚します",
      "japaneseText": "けっこんします",
      "romaji": "kekkonshimasu",
      "hint": "แต่งงาน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "プール",
      "character": "プール",
      "japaneseText": "プール",
      "romaji": "puuru",
      "hint": "สระว่ายน้ำ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スキー",
      "character": "スキー",
      "japaneseText": "スキー",
      "romaji": "sukii",
      "hint": "สกี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～ごろ",
      "character": "～ごろ",
      "japaneseText": "～ごろ",
      "romaji": "~goro",
      "hint": "ราวๆ..., ประมาณ... (เวลา)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どこか",
      "character": "どこか",
      "japaneseText": "どこか",
      "romaji": "dokoka",
      "hint": "ที่ไหนสักแห่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "誰か",
      "character": "誰か",
      "japaneseText": "だれか",
      "romaji": "dareka",
      "hint": "ใครสักคน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "喉が渇きます",
      "character": "喉が渇きます",
      "japaneseText": "のどがかわきます",
      "romaji": "nodo ga kawakimasu",
      "hint": "คอแห้ง, หิวน้ำ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "お腹が空きます",
      "character": "お腹が空きます",
      "japaneseText": "おなかがすきます",
      "romaji": "onaka ga sukimasu",
      "hint": "ท้องว่าง, หิวข้าว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "注文します",
      "character": "注文します",
      "japaneseText": "ちゅうもんします",
      "romaji": "chuumonshimasu",
      "hint": "สั่ง (อาหาร/สินค้า)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～でございます",
      "character": "～でございます",
      "japaneseText": "～でございます",
      "romaji": "~de gozaimasu",
      "hint": "เป็น/คือ... (รูปสุภาพยกย่องของ です)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "別に",
      "character": "別に",
      "japaneseText": "べつに",
      "romaji": "betsuni",
      "hint": "ต่างหาก, พิเศษ, ไม่ได้มีอะไรเป็นพิเศษ",
      "isExtraFlashcard": true
    }
  ],
  "14": [
    {
      "kanji": "つけます",
      "character": "つけます",
      "japaneseText": "つけます",
      "romaji": "tsukemasu",
      "hint": "เปิด (ไฟ/เครื่องใช้ไฟฟ้า)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コピーします",
      "character": "コピーします",
      "japaneseText": "コピーします",
      "romaji": "kopiishimasu",
      "hint": "ถ่ายเอกสาร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "エアコン",
      "character": "エアコン",
      "japaneseText": "エアコン",
      "romaji": "eakon",
      "hint": "เครื่องปรับอากาศ, แอร์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パスポート",
      "character": "パスポート",
      "japaneseText": "pasupooto",
      "romaji": "",
      "hint": "หนังสือเดินทาง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "砂糖",
      "character": "砂糖",
      "japaneseText": "さとう",
      "romaji": "satou",
      "hint": "น้ำตาล (หรือ นามสกุลซาโต้)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "まっすぐ",
      "character": "まっすぐ",
      "japaneseText": "まっすぐ",
      "romaji": "massugu",
      "hint": "ตรงไป",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ゆっくり",
      "character": "ゆっくり",
      "japaneseText": "ゆっくり",
      "romaji": "yukkuri",
      "hint": "ช้าๆ, สบายๆ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "すぐ",
      "character": "すぐ",
      "japaneseText": "すぐ",
      "romaji": "sugu",
      "hint": "ทันที",
      "isExtraFlashcard": true
    },
    {
      "kanji": "また",
      "character": "また",
      "japaneseText": "また",
      "romaji": "mata",
      "hint": "อีกครั้ง, ใหม่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "後で",
      "character": "後で",
      "japaneseText": "あとで",
      "romaji": "atode",
      "hint": "ทีหลัง, ภายหลัง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もう～",
      "character": "もう～",
      "japaneseText": "もう～",
      "romaji": "mou~",
      "hint": "อีก... (เช่น อีกนิด, อีกคน)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "信号",
      "character": "信号",
      "japaneseText": "しんごう",
      "romaji": "shingou",
      "hint": "สัญญาณไฟจราจร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "曲がります",
      "character": "曲がります",
      "japaneseText": "まがります",
      "romaji": "magarimasu",
      "hint": "เลี้ยว (ซ้าย/ขวา)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "お釣り",
      "character": "お釣り",
      "japaneseText": "おつり",
      "romaji": "otsuri",
      "hint": "เงินทอน",
      "isExtraFlashcard": true
    }
  ],
  "15": [
    {
      "kanji": "研究します",
      "character": "研究します",
      "japaneseText": "けんきゅうします",
      "romaji": "kenkyuushimasu",
      "hint": "วิจัย, ค้นคว้า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カタログ",
      "character": "カタログ",
      "japaneseText": "katarogu",
      "romaji": "",
      "hint": "แคตตาล็อก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ソフト",
      "character": "ソフト",
      "japaneseText": "sofuto",
      "romaji": "",
      "hint": "ซอฟต์แวร์, โปรแกรม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "すみません",
      "character": "すみません",
      "japaneseText": "すみません",
      "romaji": "sumimasen",
      "hint": "ขอโทษครับ/ค่ะ, ขออภัย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "思い出します",
      "character": "思い出します",
      "japaneseText": "おもいだします",
      "romaji": "omoidashimasu",
      "hint": "นึกออก, ระลึกถึง",
      "isExtraFlashcard": true
    }
  ],
  "16": [
    {
      "kanji": "背",
      "character": "背",
      "japaneseText": "せ",
      "romaji": "se",
      "hint": "ส่วนสูง, หลัง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "サービス",
      "character": "サービス",
      "japaneseText": "saabisu",
      "romaji": "",
      "hint": "บริการ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ジョギング",
      "character": "ジョギング",
      "japaneseText": "jogingu",
      "romaji": "",
      "hint": "การวิ่งจ็อกกิ้ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "シャワー",
      "character": "シャワー",
      "japaneseText": "shawaa",
      "romaji": "",
      "hint": "ฝักบัวอาบน้ำ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どうやって",
      "character": "どうやって",
      "japaneseText": "douyatte",
      "romaji": "",
      "hint": "ทำอย่างไร, เดินทางอย่างไร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どの～",
      "character": "どの～",
      "japaneseText": "dono~",
      "romaji": "",
      "hint": "...อันไหน (ใน 3 สิ่งขึ้นไป)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どれ",
      "character": "どれ",
      "japaneseText": "dore",
      "romaji": "",
      "hint": "อันไหน (ใน 3 สิ่งขึ้นไป)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "凄い",
      "character": "凄い",
      "japaneseText": "すごい",
      "romaji": "sugoi",
      "hint": "สุดยอด, ยอดเยี่ยม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "まだまだ",
      "character": "まだまだ",
      "japaneseText": "madamada",
      "romaji": "",
      "hint": "ยังไม่ถึงขนาดนั้น (พูดถ่อมตัว)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "まず",
      "character": "まず",
      "japaneseText": "mazu",
      "romaji": "",
      "hint": "ก่อนอื่น, อันดับแรก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "キャッシュカード",
      "character": "キャッシュカード",
      "japaneseText": "kyasshukaado",
      "romaji": "",
      "hint": "บัตรเอทีเอ็ม, บัตรกดเงินสด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ボタン",
      "character": "ボタン",
      "japaneseText": "botan",
      "romaji": "",
      "hint": "ปุ่มกด",
      "isExtraFlashcard": true
    }
  ],
  "17": [
    {
      "kanji": "失くします",
      "character": "失くします",
      "japaneseText": "なくします",
      "romaji": "nakushimasu",
      "hint": "ทำหาย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "持って行きます",
      "character": "持って行きます",
      "japaneseText": "もっていきます",
      "romaji": "motteikimasu",
      "hint": "นำไป, พกไป",
      "isExtraFlashcard": true
    },
    {
      "kanji": "持って来ます",
      "character": "持って来ます",
      "japaneseText": "もってきます",
      "romaji": "mottekimasu",
      "hint": "นำมา, พกมา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "2,3～",
      "character": "2,3～",
      "japaneseText": "に、さん～",
      "romaji": "ni, san~",
      "hint": "สองสาม...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～までに",
      "character": "～までに",
      "japaneseText": "～までに",
      "romaji": "~madeni",
      "hint": "ภายใน... (เวลา/วัน)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ですから",
      "character": "ですから",
      "japaneseText": "desukara",
      "romaji": "desukara",
      "hint": "เพราะฉะนั้น, ดังนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どうしましたか",
      "character": "どうしましたか",
      "japaneseText": "どうしましたか",
      "romaji": "doushimashitaka",
      "hint": "เป็นอะไรไปหรือครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それから",
      "character": "それから",
      "japaneseText": "それから",
      "romaji": "sorekara",
      "hint": "หลังจากนั้น, ต่อจากนั้น",
      "isExtraFlashcard": true
    }
  ],
  "18": [
    {
      "kanji": "ピアノ",
      "character": "ピアノ",
      "japaneseText": "piano",
      "romaji": "",
      "hint": "เปียโน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～メートル",
      "character": "～メートル",
      "japaneseText": "～メートル",
      "romaji": "~meetoru",
      "hint": "...เมตร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "インターネット",
      "character": "インターネット",
      "japaneseText": "intaanetto",
      "romaji": "",
      "hint": "อินเทอร์เน็ต",
      "isExtraFlashcard": true
    },
    {
      "kanji": "なかなか",
      "character": "なかなか",
      "japaneseText": "なかなか",
      "romaji": "nakanaka",
      "hint": "ไม่ค่อยจะ... (ใช้กับปฏิเสธ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ぜひ",
      "character": "ぜひ",
      "japaneseText": "ぜひ",
      "romaji": "zehi",
      "hint": "ให้ได้เลยนะ (แสดงความปรารถนาอย่างยิ่ง)",
      "isExtraFlashcard": true
    }
  ],
  "19": [
    {
      "kanji": "なります",
      "character": "なります",
      "japaneseText": "なります",
      "romaji": "narimasu",
      "hint": "กลายเป็น, เปลี่ยนเป็น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ゴルフ",
      "character": "ゴルフ",
      "japaneseText": "gorufu",
      "romaji": "",
      "hint": "กอล์ฟ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "だんだん",
      "character": "だんだん",
      "japaneseText": "dandan",
      "romaji": "",
      "hint": "ค่อยๆ, ทีละน้อย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もうすぐ",
      "character": "もうすぐ",
      "japaneseText": "mousugu",
      "romaji": "",
      "hint": "อีกไม่ช้า, เร็วๆ นี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "でも",
      "character": "でも",
      "japaneseText": "demo",
      "romaji": "",
      "hint": "แต่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ダイエット",
      "character": "ダイエット",
      "japaneseText": "daietto",
      "romaji": "",
      "hint": "การลดน้ำหนัก, ไดเอท",
      "isExtraFlashcard": true
    }
  ],
  "20": [
    {
      "kanji": "うん",
      "character": "うん",
      "japaneseText": "うん",
      "romaji": "un",
      "hint": "อื้ม (ภาษาพูดกันเองของ はい)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ううん",
      "character": "ううん",
      "japaneseText": "ううん",
      "romaji": "uun",
      "hint": "ไม่อ่ะ (ภาษาพูดกันเองของ いいえ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ビザ",
      "character": "ビザ",
      "japaneseText": "ビザ",
      "romaji": "biza",
      "hint": "วีซ่า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "こっち",
      "character": "こっち",
      "japaneseText": "こっち",
      "romaji": "kocchi",
      "hint": "ทางนี้ (ภาษาพูดกันเองของ こちら)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そっち",
      "character": "そっち",
      "japaneseText": "そっち",
      "romaji": "socchi",
      "hint": "ทางนั้น (ภาษาพูดกันเองของ そちら)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あっち",
      "character": "あっち",
      "japaneseText": "あっち",
      "romaji": "acchi",
      "hint": "ทางโน้น (ภาษาพูดกันเองของ あちら)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どっち",
      "character": "どっち",
      "japaneseText": "どっち",
      "romaji": "docchi",
      "hint": "ทางไหน (ภาษาพูดกันเองของ どちら)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "皆で",
      "character": "皆で",
      "japaneseText": "みんなで",
      "romaji": "minnade",
      "hint": "ด้วยกันทุกคน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～けど",
      "character": "～けど",
      "japaneseText": "～けど",
      "romaji": "~kedo",
      "hint": "...แต่ (ภาษาพูดกันเองของ が)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いっぱい",
      "character": "いっぱい",
      "japaneseText": "いっぱい",
      "romaji": "ippai",
      "hint": "เต็ม, เยอะแยะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "よかったら",
      "character": "よかったら",
      "japaneseText": "よかったら",
      "romaji": "yokattara",
      "hint": "ถ้าไม่รังเกียจ, ถ้าสะดวก",
      "isExtraFlashcard": true
    }
  ],
  "21": [
    {
      "kanji": "あります",
      "character": "あります",
      "japaneseText": "あります",
      "romaji": "arimasu",
      "hint": "มี, อยู่ (สิ่งของไม่มีชีวิต)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "凄い",
      "character": "凄い",
      "japaneseText": "すごい",
      "romaji": "sugoi",
      "hint": "สุดยอด, ยอดเยี่ยม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "自動車",
      "character": "自動車",
      "japaneseText": "じどうしゃ",
      "romaji": "jidousha",
      "hint": "รถยนต์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "車",
      "character": "車",
      "japaneseText": "くるま",
      "romaji": "kuruma",
      "hint": "รถยนต์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ニュース",
      "character": "ニュース",
      "japaneseText": "nyuusu",
      "romaji": "",
      "hint": "ข่าว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "アニメ",
      "character": "アニメ",
      "japaneseText": "anime",
      "romaji": "",
      "hint": "อนิเมะ, การ์ตูนญี่ปุ่น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "マンガ",
      "character": "マンガ",
      "japaneseText": "manga",
      "romaji": "",
      "hint": "มังงะ, หนังสือการ์ตูน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "デザイン",
      "character": "デザイン",
      "japaneseText": "dezain",
      "romaji": "",
      "hint": "การออกแบบ, ดีไซน์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "多分",
      "character": "多分",
      "japaneseText": "たぶん",
      "romaji": "tabun",
      "hint": "บางที, อาจจะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "きっと",
      "character": "きっと",
      "japaneseText": "きっと",
      "romaji": "kitto",
      "hint": "อย่างแน่นอน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そんなに",
      "character": "そんなに",
      "japaneseText": "そんなに",
      "romaji": "sonnani",
      "hint": "ไม่ขนาดนั้น (ใช้กับรูปปฏิเสธ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～について",
      "character": "～について",
      "japaneseText": "～について",
      "romaji": "~nitsuite",
      "hint": "เกี่ยวกับ...",
      "isExtraFlashcard": true
    }
  ],
  "22": [
    {
      "kanji": "かぶります",
      "character": "かぶります",
      "japaneseText": "かぶります",
      "romaji": "kaburimasu",
      "hint": "สวม (หมวก)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "かけます",
      "character": "かけます",
      "japaneseText": "かけます",
      "romaji": "kakemasu",
      "hint": "โทร (โทรศัพท์)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "します",
      "character": "します",
      "japaneseText": "します",
      "romaji": "shimasu",
      "hint": "ทำ, เล่น (กีฬา)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コート",
      "character": "コート",
      "japaneseText": "kooto",
      "romaji": "",
      "hint": "เสื้อโค้ต",
      "isExtraFlashcard": true
    },
    {
      "kanji": "セーター",
      "character": "セーター",
      "japaneseText": "seetaa",
      "romaji": "",
      "hint": "เสื้อสเวตเตอร์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ケーキ",
      "character": "ケーキ",
      "japaneseText": "keeki",
      "romaji": "",
      "hint": "เค้ก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ロボット",
      "character": "ロボット",
      "japaneseText": "robotto",
      "romaji": "",
      "hint": "หุ่นยนต์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ユーモア",
      "character": "ユーモア",
      "japaneseText": "yuumoa",
      "romaji": "",
      "hint": "อารมณ์ขัน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "よく",
      "character": "よく",
      "japaneseText": "よく",
      "romaji": "yoku",
      "hint": "บ่อยๆ, เป็นอย่างดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "おめでとうございます",
      "character": "おめでとうございます",
      "japaneseText": "おめでとう ございます",
      "romaji": "omedetou gozaimasu",
      "hint": "ขอแสดงความยินดีด้วยครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "では",
      "character": "では",
      "japaneseText": "では",
      "romaji": "dewa",
      "hint": "ถ้าเช่นนั้น, งั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "こちら",
      "character": "こちら",
      "japaneseText": "こちら",
      "romaji": "kochira",
      "hint": "ทางนี้, ที่นี่ (สุภาพของ ここ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ダイニングキッチン",
      "character": "ダイニングキッチン",
      "japaneseText": "ダイニング キッチン",
      "romaji": "dainingu kicchin",
      "hint": "ห้องครัวพร้อมโต๊ะรับประทานอาหาร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "押し入れ",
      "character": "押し入れ",
      "japaneseText": "おしいれ",
      "romaji": "oshiire",
      "hint": "ตู้เก็บที่นอนแบบญี่ปุ่น",
      "isExtraFlashcard": true
    }
  ],
  "23": [
    {
      "kanji": "サイズ",
      "character": "サイズ",
      "japaneseText": "saizu",
      "romaji": "",
      "hint": "ขนาด, ไซส์",
      "isExtraFlashcard": true
    }
  ],
  "24": [
    {
      "kanji": "くれます",
      "character": "くれます",
      "japaneseText": "くれます",
      "romaji": "kuremasu",
      "hint": "ให้ (แก่ฉันหรือคนในครอบครัว)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "おじいさん",
      "character": "おじいさん",
      "japaneseText": "おじいさん",
      "romaji": "ojiisan",
      "hint": "คุณปู่, คุณตา (ของผู้อื่น)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "おばあさん",
      "character": "おばあさん",
      "japaneseText": "おばあさん",
      "romaji": "obaasan",
      "hint": "คุณย่า, คุณยาย (ของผู้อื่น)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ホームステイ",
      "character": "ホームステイ",
      "japaneseText": "hoomusutei",
      "romaji": "",
      "hint": "โฮมสเตย์",
      "isExtraFlashcard": true
    }
  ],
  "25": [
    {
      "kanji": "チャンス",
      "character": "チャンス",
      "japaneseText": "chansu",
      "romaji": "",
      "hint": "โอกาส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もし",
      "character": "もし",
      "japaneseText": "もし",
      "romaji": "moshi",
      "hint": "ถ้าหาก, สมมติว่า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もしもし",
      "character": "もしもし",
      "japaneseText": "moshimoshi",
      "romaji": "",
      "hint": "ฮัลโหล (พูดเวลาคุยโทรศัพท์)",
      "isExtraFlashcard": true
    }
  ],
  "26": [
    {
      "kanji": "やります",
      "character": "やります",
      "japaneseText": "やります",
      "romaji": "yarimasu",
      "hint": "ให้ (แก่ผู้น้อย/สัตว์/พืช)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "フリーマーケット",
      "character": "フリーマーケット",
      "japaneseText": "フリー マーケット",
      "romaji": "furii maaketto",
      "hint": "ตลาดนัดมือสอง, ฟลีมาร์เก็ต",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ボランティア",
      "character": "ボランティア",
      "japaneseText": "borantia",
      "romaji": "",
      "hint": "อาสาสมัคร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "財布",
      "character": "財布",
      "japaneseText": "さいふ",
      "romaji": "saifu",
      "hint": "กระเป๋าสตางค์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ごみ",
      "character": "ごみ",
      "japaneseText": "ごみ",
      "romaji": "gomi",
      "hint": "ขยะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いつでも",
      "character": "いつでも",
      "japaneseText": "いつでも",
      "romaji": "itsudemo",
      "hint": "เมื่อไหร่ก็ได้, ทุกเมื่อ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どこでも",
      "character": "どこでも",
      "japaneseText": "どこでも",
      "romaji": "dokodemo",
      "hint": "ที่ไหนก็ได้, ทุกหนทุกแห่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "だれでも",
      "character": "だれでも",
      "japaneseText": "だれでも",
      "romaji": "daredemo",
      "hint": "ใครก็ได้, ทุกคน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "なんでも",
      "character": "なんでも",
      "japaneseText": "なんでも",
      "romaji": "nandemo",
      "hint": "อะไรก็ได้, ทุกสิ่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "こんな～",
      "character": "こんな～",
      "japaneseText": "こんな～",
      "romaji": "konna~",
      "hint": "...แบบนี้, ...เช่นนี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そんな～",
      "character": "そんな～",
      "japaneseText": "そんな～",
      "romaji": "sonna~",
      "hint": "...แบบนั้น, ...เช่นนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あんな～",
      "character": "あんな～",
      "japaneseText": "あんな～",
      "romaji": "anna~",
      "hint": "...แบบโน้น, ...เช่นโน้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ガス",
      "character": "ガス",
      "japaneseText": "gasu",
      "romaji": "",
      "hint": "แก๊ส",
      "isExtraFlashcard": true
    }
  ],
  "27": [
    {
      "kanji": "ペット",
      "character": "ペット",
      "japaneseText": "petto",
      "romaji": "",
      "hint": "สัตว์เลี้ยง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "クリーニング",
      "character": "クリーニング",
      "japaneseText": "kuriiningu",
      "romaji": "",
      "hint": "การซักแห้ง, ซักรีด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "マンション",
      "character": "マンション",
      "japaneseText": "manshon",
      "romaji": "",
      "hint": "แมนชั่น, คอนโดมิเนียม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "キッチン",
      "character": "キッチン",
      "japaneseText": "kicchin",
      "romaji": "",
      "hint": "ห้องครัว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パーティールーム",
      "character": "パーティールーム",
      "japaneseText": "paatiiruumu",
      "romaji": "",
      "hint": "ห้องจัดเลี้ยง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～しか",
      "character": "～しか",
      "japaneseText": "～しか",
      "romaji": "~shika",
      "hint": "เพียงแค่...เท่านั้น (ตามด้วยรูปปฏิเสธ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "はっきり",
      "character": "はっきり",
      "japaneseText": "はっきり",
      "romaji": "hakkiri",
      "hint": "อย่างชัดเจน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いつか",
      "character": "いつか",
      "japaneseText": "いつか",
      "romaji": "itsuka",
      "hint": "สักวันหนึ่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ポケット",
      "character": "ポケット",
      "japaneseText": "poketto",
      "romaji": "",
      "hint": "กระเป๋าเสื้อ/กางเกง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ドラえもん",
      "character": "ドラえもん",
      "japaneseText": "ドラえもん",
      "romaji": "doraemon",
      "hint": "โดราเอมอน",
      "isExtraFlashcard": true
    }
  ],
  "28": [
    {
      "kanji": "メモします",
      "character": "メモします",
      "japaneseText": "メモします",
      "romaji": "memoshimasu",
      "hint": "จดบันทึก, เมโม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ちょうどいい",
      "character": "ちょうどいい",
      "japaneseText": "ちょうどいい",
      "romaji": "choudoyii",
      "hint": "พอดี, เหมาะเจาะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ボーナス",
      "character": "ボーナス",
      "japaneseText": "boonasu",
      "romaji": "",
      "hint": "เงินโบนัส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ゲーム",
      "character": "ゲーム",
      "japaneseText": "ゲーム",
      "romaji": "geemu",
      "hint": "เกม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ドラマ",
      "character": "ドラマ",
      "japaneseText": "dorama",
      "romaji": "",
      "hint": "ละครซีรีส์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "しばらく",
      "character": "しばらく",
      "japaneseText": "しばらく",
      "romaji": "shibaraku",
      "hint": "สักพักหนึ่ง, ชั่วคราว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "たいてい",
      "character": "たいてい",
      "japaneseText": "たいてい",
      "romaji": "taitei",
      "hint": "โดยส่วนใหญ่, โดยปกติ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それに",
      "character": "それに",
      "japaneseText": "それに",
      "romaji": "soreni",
      "hint": "ยิ่งไปกว่านั้น, นอกจากนี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それで",
      "character": "それで",
      "japaneseText": "それで",
      "romaji": "sorede",
      "hint": "ดังนั้น, เพราะฉะนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "イベント",
      "character": "イベント",
      "japaneseText": "ibento",
      "romaji": "",
      "hint": "กิจกรรม, อีเวนต์",
      "isExtraFlashcard": true
    }
  ],
  "29": [
    {
      "kanji": "拭きます",
      "character": "拭きます",
      "japaneseText": "ふきます",
      "romaji": "fukimasu",
      "hint": "เช็ด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コップ",
      "character": "コップ",
      "japaneseText": "koppu",
      "romaji": "",
      "hint": "แก้วน้ำ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ガラス",
      "character": "ガラス",
      "japaneseText": "garasu",
      "romaji": "",
      "hint": "กระจก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スピーチ",
      "character": "スピーチ",
      "japaneseText": "supiichi",
      "romaji": "",
      "hint": "สุนทรพจน์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "このくらい",
      "character": "このくらい",
      "japaneseText": "このくらい",
      "romaji": "konokurai",
      "hint": "ประมาณเท่านี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ポケット",
      "character": "ポケット",
      "japaneseText": "poketto",
      "romaji": "",
      "hint": "กระเป๋าเสื้อ/กางเกง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～のほう",
      "character": "～のほう",
      "japaneseText": "～のほう",
      "romaji": "~nohou",
      "hint": "ทางด้าน..., ฝั่ง...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "レポーター",
      "character": "レポーター",
      "japaneseText": "repootaa",
      "romaji": "",
      "hint": "ผู้สื่อข่าว, ผู้รายงานข่าว",
      "isExtraFlashcard": true
    }
  ],
  "30": [
    {
      "kanji": "まとめます",
      "character": "まとめます",
      "japaneseText": "まとめます",
      "romaji": "matomemasu",
      "hint": "รวบรวม, สรุปให้เป็นระเบียบ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "しまいます",
      "character": "しまいます",
      "japaneseText": "しまいます",
      "romaji": "shimaimasu",
      "hint": "เก็บเข้าที่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そのままにします",
      "character": "そのままにします",
      "japaneseText": "そのままに します",
      "romaji": "sonomamani shimasu",
      "hint": "ปล่อยทิ้งไว้อย่างนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ミーティング",
      "character": "ミーティング",
      "japaneseText": "miitingu",
      "romaji": "",
      "hint": "การประชุม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ガイドブック",
      "character": "ガイドブック",
      "japaneseText": "gaidobukku",
      "romaji": "",
      "hint": "หนังสือนำเที่ยว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カレンダー",
      "character": "カレンダー",
      "japaneseText": "karendaa",
      "romaji": "",
      "hint": "ปฏิทิน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ポスター",
      "character": "ポスター",
      "japaneseText": "posutaa",
      "romaji": "",
      "hint": "โปสเตอร์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "まだ",
      "character": "まだ",
      "japaneseText": "まだ",
      "romaji": "mada",
      "hint": "ยัง (ยังไม่ได้ทำ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "リュック",
      "character": "リュック",
      "japaneseText": "ryukku",
      "romaji": "",
      "hint": "กระเป๋าเป้สะพายหลัง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ある～",
      "character": "ある～",
      "japaneseText": "ある～",
      "romaji": "aru~",
      "hint": "...หนึ่ง, ...บางอย่าง (เช่น ある日 วันหนึ่ง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "すると",
      "character": "すると",
      "japaneseText": "すると",
      "romaji": "suruto",
      "hint": "ทันใดนั้น, และแล้ว",
      "isExtraFlashcard": true
    }
  ],
  "31": [
    {
      "kanji": "～のほう",
      "character": "～のほう",
      "japaneseText": "～のほう",
      "romaji": "~nohou",
      "hint": "ทางด้าน..., ฝั่ง...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ずっと",
      "character": "ずっと",
      "japaneseText": "ずっと",
      "romaji": "zutto",
      "hint": "...กว่ามาก, ตลอดเวลา",
      "isExtraFlashcard": true
    }
  ],
  "32": [
    {
      "kanji": "やみます",
      "character": "やみます",
      "japaneseText": "やみます",
      "romaji": "yamimasu",
      "hint": "หยุดตก (ฝน/หิมะ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "引きます",
      "character": "引きます",
      "japaneseText": "ひきます",
      "romaji": "hikimasu",
      "hint": "เป็น (หวัด: 風邪をひく)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "おかしい",
      "character": "おかしい",
      "japaneseText": "おかしい",
      "romaji": "okashii",
      "hint": "แปลก, พิลึก, ตลก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "うるさい",
      "character": "うるさい",
      "japaneseText": "うるさい",
      "romaji": "urusai",
      "hint": "หนวกหู, เสียงดังรบกวน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "怪我",
      "character": "怪我",
      "japaneseText": "けが",
      "romaji": "kega",
      "hint": "บาดแผล, การบาดเจ็บ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "咳",
      "character": "咳",
      "japaneseText": "せき",
      "romaji": "seki",
      "hint": "อาการไอ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "インフルエンザ",
      "character": "インフルエンザ",
      "japaneseText": "infuruenza",
      "romaji": "",
      "hint": "ไข้หวัดใหญ่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "エンジン",
      "character": "エンジン",
      "japaneseText": "enjin",
      "romaji": "",
      "hint": "เครื่องยนต์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "チーム",
      "character": "チーム",
      "japaneseText": "chiimu",
      "romaji": "",
      "hint": "ทีม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "こんなに",
      "character": "こんなに",
      "japaneseText": "こんなに",
      "romaji": "konnani",
      "hint": "ขนาดนี้, มากถึงเพียงนี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "そんなに",
      "character": "そんなに",
      "japaneseText": "そんなに",
      "romaji": "sonnani",
      "hint": "ไม่ขนาดนั้น (ใช้กับรูปปฏิเสธ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "あんなに",
      "character": "あんなに",
      "japaneseText": "あんなに",
      "romaji": "annani",
      "hint": "ขนาดโน้น, มากถึงเพียงโน้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ストレス",
      "character": "ストレス",
      "japaneseText": "sutoresu",
      "romaji": "",
      "hint": "ความเครียด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "宝くじ",
      "character": "宝くじ",
      "japaneseText": "たからくじ",
      "romaji": "takarakuji",
      "hint": "ลอตเตอรี่, สลากกินแบ่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ラッキーアイテム",
      "character": "ラッキーアイテム",
      "japaneseText": "ラッキー アイテム",
      "romaji": "rakkii aitemu",
      "hint": "สิ่งของนำโชค",
      "isExtraFlashcard": true
    }
  ],
  "33": [
    {
      "kanji": "あります",
      "character": "あります",
      "japaneseText": "あります",
      "romaji": "arimasu",
      "hint": "มี, อยู่ (สิ่งของไม่มีชีวิต)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "リサイクルします",
      "character": "リサイクルします",
      "japaneseText": "リサイクルします",
      "romaji": "risaikurushimasu",
      "hint": "นำกลับมาใช้ใหม่, รีไซเคิล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ボール",
      "character": "ボール",
      "japaneseText": "booru",
      "romaji": "",
      "hint": "ลูกบอล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どういう～",
      "character": "どういう～",
      "japaneseText": "どういう～",
      "romaji": "douiu~",
      "hint": "...อย่างไร, ...แบบไหน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もう",
      "character": "もう",
      "japaneseText": "もう",
      "romaji": "mou",
      "hint": "...แล้ว (ทำเสร็จแล้ว)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～ほど",
      "character": "～ほど",
      "japaneseText": "～ほど",
      "romaji": "~hodo",
      "hint": "ราวๆ..., ประมาณ...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もともと",
      "character": "もともと",
      "japaneseText": "もともと",
      "romaji": "motomoto",
      "hint": "แต่เดิม, ตั้งแต่แรก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もっと",
      "character": "もっと",
      "japaneseText": "もっと",
      "romaji": "motto",
      "hint": "ยิ่งขึ้น, มากขึ้น",
      "isExtraFlashcard": true
    }
  ],
  "34": [
    {
      "kanji": "つけます",
      "character": "つけます",
      "japaneseText": "つけます",
      "romaji": "tsukemasu",
      "hint": "เปิด (ไฟ/เครื่องใช้ไฟฟ้า)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "さします",
      "character": "さします",
      "japaneseText": "さします",
      "romaji": "sashimasu",
      "hint": "กาง (ร่ม)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スポーツクラブ",
      "character": "スポーツクラブ",
      "japaneseText": "supootsukurabu",
      "romaji": "",
      "hint": "สปอร์ตคลับ, สโมสรกีฬา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ソース",
      "character": "ソース",
      "japaneseText": "soosu",
      "romaji": "",
      "hint": "ซอส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～か、～",
      "character": "～か、～",
      "japaneseText": "～か、～",
      "romaji": "~ka, ~",
      "hint": "...หรือ...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "さっき",
      "character": "さっき",
      "japaneseText": "さっき",
      "romaji": "sakki",
      "hint": "เมื่อสักครู่, เมื่อกี้นี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "立てます",
      "character": "立てます",
      "japaneseText": "たてます",
      "romaji": "tatemasu",
      "hint": "ตั้งขึ้น, ปัก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～グラム",
      "character": "～グラム",
      "japaneseText": "～グラム",
      "romaji": "~guramu",
      "hint": "...กรัม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "たちます",
      "character": "たちます",
      "japaneseText": "たちます",
      "romaji": "tachimasu",
      "hint": "ผ่านไป (เวลา)",
      "isExtraFlashcard": true
    }
  ],
  "35": [
    {
      "kanji": "クリックします",
      "character": "クリックします",
      "japaneseText": "kurikkushimasu",
      "romaji": "",
      "hint": "คลิก (เมาส์)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "振り仮名",
      "character": "振り仮名",
      "japaneseText": "ふりがな",
      "romaji": "furigana",
      "hint": "ฟุริงะนะ, ตัวอักษรช่วยอ่านคันจิ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "レバー",
      "character": "レバー",
      "japaneseText": "rebaa",
      "romaji": "",
      "hint": "คันโยก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "キー",
      "character": "キー",
      "japaneseText": "kii",
      "romaji": "",
      "hint": "ปุ่มคีย์บอร์ด, กุญแจ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カーテン",
      "character": "カーテン",
      "japaneseText": "kaaten",
      "romaji": "",
      "hint": "ผ้าม่าน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "紐",
      "character": "紐",
      "japaneseText": "ひも",
      "romaji": "himo",
      "hint": "เชือก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "もっと",
      "character": "もっと",
      "japaneseText": "もっと",
      "romaji": "motto",
      "hint": "ยิ่งขึ้น, มากขึ้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それなら",
      "character": "それなら",
      "japaneseText": "それなら",
      "romaji": "sorenara",
      "hint": "ถ้าเช่นนั้น, ถ้าอย่างนั้น",
      "isExtraFlashcard": true
    }
  ],
  "36": [
    {
      "kanji": "遭います",
      "character": "遭います",
      "japaneseText": "あいます",
      "romaji": "aimasu",
      "hint": "ประสบ, พบเจอ (อุบัติเหตุ: 事故に遭う)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ラッシュ",
      "character": "ラッシュ",
      "japaneseText": "rasshu",
      "romaji": "",
      "hint": "ชั่วโมงเร่งด่วน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "やっと",
      "character": "やっと",
      "japaneseText": "やっと",
      "romaji": "yatto",
      "hint": "ในที่สุดก็...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "かなり",
      "character": "かなり",
      "japaneseText": "かなり",
      "romaji": "kanari",
      "hint": "ค่อนข้าง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "できるだけ",
      "character": "できるだけ",
      "japaneseText": "できるだけ",
      "romaji": "dekirudake",
      "hint": "เท่าที่จะทำได้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ほとんど",
      "character": "ほとんど",
      "japaneseText": "ほとんど",
      "romaji": "hotondo",
      "hint": "เกือบทั้งหมด, แทบจะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "チャレンジします",
      "character": "チャレンジします",
      "japaneseText": "チャレンジ します",
      "romaji": "charenjishimasu",
      "hint": "ท้าทาย, ทดลองทำ",
      "isExtraFlashcard": true
    }
  ],
  "37": [
    {
      "kanji": "盗ります",
      "character": "盗ります",
      "japaneseText": "とります",
      "romaji": "torimasu",
      "hint": "ขโมย, ลักขโมย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "インスタントラーメン",
      "character": "インスタントラーメン",
      "japaneseText": "インスタント ラーメン",
      "romaji": "insutanto raamen",
      "hint": "บะหมี่กึ่งสำเร็จรูป",
      "isExtraFlashcard": true
    },
    {
      "kanji": "デート",
      "character": "デート",
      "japaneseText": "deeto",
      "romaji": "",
      "hint": "การไปเดท",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～キロ",
      "character": "～キロ",
      "japaneseText": "～キロ",
      "romaji": "~kiro",
      "hint": "...กิโลเมตร / กิโลกรัม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "しかし",
      "character": "しかし",
      "japaneseText": "しかし",
      "romaji": "shikashi",
      "hint": "อย่างไรก็ตาม, แต่ทว่า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "その後",
      "character": "その後",
      "japaneseText": "そのあと",
      "romaji": "sonoato",
      "hint": "หลังจากนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "鼠",
      "character": "鼠",
      "japaneseText": "ねずみ",
      "romaji": "nezumi",
      "hint": "หนู",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いません",
      "character": "いません",
      "japaneseText": "いません",
      "romaji": "imasen",
      "hint": "ไม่อยู่, ไม่มี (สิ่งมีชีวิต)",
      "isExtraFlashcard": true
    }
  ],
  "38": [
    {
      "kanji": "つきます",
      "character": "つきます",
      "japaneseText": "つきます",
      "romaji": "tsukimasu",
      "hint": "โกหก (嘘をつく)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "一昨年",
      "character": "一昨年",
      "japaneseText": "おととし",
      "romaji": "ototoshi",
      "hint": "สองปีก่อน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "年",
      "character": "年",
      "japaneseText": "とし",
      "romaji": "toshi",
      "hint": "ปี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "きちんと",
      "character": "きちんと",
      "japaneseText": "きちんと",
      "romaji": "kichinto",
      "hint": "อย่างเรียบร้อย, เป็นระเบียบ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～という",
      "character": "～という",
      "japaneseText": "～という",
      "romaji": "~toiu",
      "hint": "ที่เรียกว่า...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "判子",
      "character": "判子",
      "japaneseText": "はんこ",
      "romaji": "hanko",
      "hint": "ตราประทับ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "大人しい",
      "character": "大人しい",
      "japaneseText": "おとなしい",
      "romaji": "otonashii",
      "hint": "เรียบร้อย, ว่านอนสอนง่าย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "たちます",
      "character": "たちます",
      "japaneseText": "たちます",
      "romaji": "tachimasu",
      "hint": "ผ่านไป (เวลา)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "仕方",
      "character": "仕方",
      "japaneseText": "しかた",
      "romaji": "shikata",
      "hint": "วิธีทำ, หนทาง",
      "isExtraFlashcard": true
    }
  ],
  "39": [
    {
      "kanji": "びっくりします",
      "character": "びっくりします",
      "japaneseText": "びっくり します",
      "romaji": "bikkurishimasu",
      "hint": "ตกใจ, ประหลาดใจ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "がっかりします",
      "character": "がっかりします",
      "japaneseText": "がっかり します",
      "romaji": "gakkarishimasu",
      "hint": "ผิดหวัง, ท้อแท้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "痩せます",
      "character": "痩せます",
      "japaneseText": "やせます",
      "romaji": "yasemasu",
      "hint": "ผอมลง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ハイキング",
      "character": "ハイキング",
      "japaneseText": "haikingu",
      "romaji": "",
      "hint": "การเดินป่าไฮกิ้ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "フロント",
      "character": "フロント",
      "japaneseText": "フロント",
      "romaji": "furonto",
      "hint": "แผนกต้อนรับ, ฟรอนต์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "タオル",
      "character": "タオル",
      "japaneseText": "taoru",
      "romaji": "",
      "hint": "ผ้าขนหนู",
      "isExtraFlashcard": true
    },
    {
      "kanji": "石鹸",
      "character": "石鹸",
      "japaneseText": "せっけん",
      "romaji": "sekken",
      "hint": "สบู่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "トラック",
      "character": "トラック",
      "japaneseText": "torakku",
      "romaji": "",
      "hint": "รถบรรทุก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ぶつかります",
      "character": "ぶつかります",
      "japaneseText": "ぶつかります",
      "romaji": "butsukarimasu",
      "hint": "ชน, ปะทะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "しかし",
      "character": "しかし",
      "japaneseText": "しかし",
      "romaji": "shikashi",
      "hint": "อย่างไรก็ตาม, แต่ทว่า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "また",
      "character": "また",
      "japaneseText": "また",
      "romaji": "mata",
      "hint": "อีกครั้ง, ใหม่",
      "isExtraFlashcard": true
    }
  ],
  "40": [
    {
      "kanji": "上手くいきます",
      "character": "上手くいきます",
      "japaneseText": "うまくいきます",
      "romaji": "umakuikimasu",
      "hint": "ดำเนินไปด้วยดี, ราบรื่น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "マラソン",
      "character": "マラソン",
      "japaneseText": "marason",
      "romaji": "",
      "hint": "การวิ่งมาราธอน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コンテスト",
      "character": "コンテスト",
      "japaneseText": "kontesuto",
      "romaji": "",
      "hint": "การประกวด, การแข่งขัน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ズボン",
      "character": "ズボン",
      "japaneseText": "zubon",
      "romaji": "",
      "hint": "กางเกงขายาว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～センチ",
      "character": "～センチ",
      "japaneseText": "～センチ",
      "romaji": "~senchi",
      "hint": "...เซนติเมตร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～ミリ",
      "character": "～ミリ",
      "japaneseText": "～ミリ",
      "romaji": "~miri",
      "hint": "...มิลลิเมตร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～グラム",
      "character": "～グラム",
      "japaneseText": "～グラム",
      "romaji": "~guramu",
      "hint": "...กรัม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "テスト",
      "character": "テスト",
      "japaneseText": "tesuto",
      "romaji": "",
      "hint": "การสอบ, แบบทดสอบ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ところで",
      "character": "ところで",
      "japaneseText": "ところで",
      "romaji": "tokorode",
      "hint": "ว่าแต่ว่า... (ใช้เปลี่ยนเรื่องคุย)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "オートバイ",
      "character": "オートバイ",
      "japaneseText": "ootobai",
      "romaji": "",
      "hint": "รถจักรยานยนต์, มอเตอร์ไซค์",
      "isExtraFlashcard": true
    }
  ],
  "41": [
    {
      "kanji": "いただきます",
      "character": "いただきます",
      "japaneseText": "いただきます",
      "romaji": "itadakimasu",
      "hint": "จะทานแล้วนะครับ/ค่ะ (พูดก่อนทานอาหาร)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "くださいます",
      "character": "くださいます",
      "japaneseText": "くださいます",
      "romaji": "kudasaimasu",
      "hint": "ให้ (รูปยกย่องของ くれます)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "やります",
      "character": "やります",
      "japaneseText": "やります",
      "romaji": "yarimasu",
      "hint": "ให้ (แก่ผู้น้อย/สัตว์/พืช)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "餌",
      "character": "餌",
      "japaneseText": "えさ",
      "romaji": "esa",
      "hint": "อาหารสัตว์, เหยื่อ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "玩具",
      "character": "玩具",
      "japaneseText": "おもちゃ",
      "romaji": "omocha",
      "hint": "ของเล่น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ドライバー",
      "character": "ドライバー",
      "japaneseText": "doraibaa",
      "romaji": "",
      "hint": "ไขควง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ハンカチ",
      "character": "ハンカチ",
      "japaneseText": "hankachi",
      "romaji": "",
      "hint": "ผ้าเช็ดหน้า",
      "isExtraFlashcard": true
    },
    {
      "kanji": "伯父/叔父",
      "character": "伯父/叔父",
      "japaneseText": "おじ",
      "romaji": "oji",
      "hint": "ลุง, น้าชาย, อาชาย (ของตนเอง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "おじさん",
      "character": "おじさん",
      "japaneseText": "おじさん",
      "romaji": "ojisan",
      "hint": "คุณลุง, คุณน้า, คุณอา (ของผู้อื่น)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "伯母/叔母",
      "character": "伯母/叔母",
      "japaneseText": "おば",
      "romaji": "oba",
      "hint": "ป้า, น้าหญิง, อาหญิง (ของตนเอง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "おばさん",
      "character": "おばさん",
      "japaneseText": "おばさん",
      "romaji": "obasan",
      "hint": "คุณป้า, คุณน้า, คุณอาผู้หญิง (ของผู้อื่น)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "一言",
      "character": "一言",
      "japaneseText": "ひとこと",
      "romaji": "hitokoto",
      "hint": "คำพูดสั้นๆ, สักสองสามคำ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～ずつ",
      "character": "～ずつ",
      "japaneseText": "～ずつ",
      "romaji": "~zutsu",
      "hint": "ทีละ...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ある～",
      "character": "ある～",
      "japaneseText": "ある～",
      "romaji": "aru~",
      "hint": "...หนึ่ง, ...บางอย่าง (เช่น ある日 วันหนึ่ง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "苛めます",
      "character": "苛めます",
      "japaneseText": "いじめます",
      "romaji": "ijimemasu",
      "hint": "แกล้ง, รังแก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "すると",
      "character": "すると",
      "japaneseText": "すると",
      "romaji": "suruto",
      "hint": "ทันใดนั้น, และแล้ว",
      "isExtraFlashcard": true
    }
  ],
  "42": [
    {
      "kanji": "アパート",
      "character": "アパート",
      "japaneseText": "apaato",
      "romaji": "",
      "hint": "อพาร์ตเมนต์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ミキサー",
      "character": "ミキサー",
      "japaneseText": "mikisaa",
      "romaji": "",
      "hint": "เครื่องปั่นอาหาร",
      "isExtraFlashcard": true
    },
    {
      "kanji": "算盤",
      "character": "算盤",
      "japaneseText": "そろばん",
      "romaji": "soroban",
      "hint": "ลูกคิด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ある～",
      "character": "ある～",
      "japaneseText": "ある～",
      "romaji": "aru~",
      "hint": "...หนึ่ง, ...บางอย่าง (เช่น ある日 วันหนึ่ง)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "何故",
      "character": "何故",
      "japaneseText": "なぜ",
      "romaji": "naze",
      "hint": "ทำไม, เพราะเหตุใด",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ローン",
      "character": "ローン",
      "japaneseText": "roon",
      "romaji": "",
      "hint": "เงินกู้, เงินผ่อน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カップ麺",
      "character": "カップ麺",
      "japaneseText": "カップメン",
      "romaji": "kappumen",
      "hint": "บะหมี่ถ้วยสำเร็จรูป",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～によって",
      "character": "～によって",
      "japaneseText": "～によって",
      "romaji": "~niyotte",
      "hint": "ขึ้นอยู่กับ..., โดย...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "麺",
      "character": "麺",
      "japaneseText": "めん",
      "romaji": "men",
      "hint": "เส้นบะหมี่, ก๋วยเตี๋ยว",
      "isExtraFlashcard": true
    }
  ],
  "43": [
    {
      "kanji": "取れます",
      "character": "取れます",
      "japaneseText": "とれます",
      "romaji": "toremasu",
      "hint": "หลุดออก (กระดุมหลุด)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "無くなります",
      "character": "無くなります",
      "japaneseText": "なくなります",
      "romaji": "nakunarimasu",
      "hint": "หมดไป, หายไป",
      "isExtraFlashcard": true
    },
    {
      "kanji": "旨い",
      "character": "旨い",
      "japaneseText": "うまい",
      "romaji": "umai",
      "hint": "อร่อย, เก่ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "つまらない",
      "character": "つまらない",
      "japaneseText": "つまらない",
      "romaji": "tsumaranai",
      "hint": "น่าเบื่อ, ไร้สาระ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ガソリン",
      "character": "ガソリン",
      "japaneseText": "gasorin",
      "romaji": "",
      "hint": "น้ำมันเบนซิน",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パンフレット",
      "character": "パンフレット",
      "japaneseText": "panfuretto",
      "romaji": "",
      "hint": "แผ่นพับ, โบรชัวร์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "薔薇",
      "character": "薔薇",
      "japaneseText": "ばら",
      "romaji": "bara",
      "hint": "ดอกกุหลาบ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ドライブ",
      "character": "ドライブ",
      "japaneseText": "doraibu",
      "romaji": "",
      "hint": "การขับรถเล่น",
      "isExtraFlashcard": true
    }
  ],
  "44": [
    {
      "kanji": "濡れます",
      "character": "濡れます",
      "japaneseText": "ぬれます",
      "romaji": "nuremasu",
      "hint": "เปียก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "お菜",
      "character": "お菜",
      "japaneseText": "おかず",
      "romaji": "okazu",
      "hint": "กับข้าว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "シングル",
      "character": "シングル",
      "japaneseText": "shinguru",
      "romaji": "",
      "hint": "ห้องพักเดี่ยว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ツイン",
      "character": "ツイン",
      "japaneseText": "tsuin",
      "romaji": "",
      "hint": "ห้องพักคู่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "DVD",
      "character": "DVD",
      "japaneseText": "ディーブイディー",
      "romaji": "diibuidii",
      "hint": "แผ่นดีวีดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "カット",
      "character": "カット",
      "japaneseText": "katto",
      "romaji": "",
      "hint": "การตัดผม",
      "isExtraFlashcard": true
    },
    {
      "kanji": "シャンプー",
      "character": "シャンプー",
      "japaneseText": "shanpuu",
      "romaji": "",
      "hint": "การสระผม, แชมพู",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どういうふうになさいますか",
      "character": "どういうふうになさいますか",
      "japaneseText": "どういうふうに なさいますか",
      "romaji": "douiufuuni nasaimasuka",
      "hint": "ต้องการให้ทำ/ตัดแบบไหนดีครับ/ค่ะ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ショート",
      "character": "ショート",
      "japaneseText": "ショート",
      "romaji": "shooto",
      "hint": "ผมสั้น (ショートヘア)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～みたい",
      "character": "～みたい",
      "japaneseText": "～みたい",
      "romaji": "~mitai",
      "hint": "ดูเหมือนว่า..., คล้ายกับ...",
      "isExtraFlashcard": true
    },
    {
      "kanji": "これら",
      "character": "これら",
      "japaneseText": "これら",
      "romaji": "korera",
      "hint": "สิ่งเหล่านี้, พวกนี้",
      "isExtraFlashcard": true
    },
    {
      "kanji": "縁起が悪い",
      "character": "縁起が悪い",
      "japaneseText": "えんぎがわるい",
      "romaji": "engigawarui",
      "hint": "ลางไม่ดี, อัปมงคล",
      "isExtraFlashcard": true
    }
  ],
  "45": [
    {
      "kanji": "キャンセルします",
      "character": "キャンセルします",
      "japaneseText": "kyanserushimasu",
      "romaji": "",
      "hint": "ยกเลิก",
      "isExtraFlashcard": true
    },
    {
      "kanji": "キャンプ",
      "character": "キャンプ",
      "japaneseText": "kyanpu",
      "romaji": "",
      "hint": "การตั้งแคมป์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "しています",
      "character": "しています",
      "japaneseText": "しています",
      "romaji": "shiteimasu",
      "hint": "กำลังทำ, สวมใส่อยู่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "コース",
      "character": "コース",
      "japaneseText": "koosu",
      "romaji": "",
      "hint": "เส้นทาง, คอร์ส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スタート",
      "character": "スタート",
      "japaneseText": "sutaato",
      "romaji": "",
      "hint": "การเริ่มต้น, การออกตัว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "セットします",
      "character": "セットします",
      "japaneseText": "settoshimasu",
      "romaji": "",
      "hint": "ตั้งค่า, เซ็ตเวลา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それでも",
      "character": "それでも",
      "japaneseText": "soredemo",
      "romaji": "soredemo",
      "hint": "ถึงกระนั้นก็ตาม, อย่างไรก็ตาม",
      "isExtraFlashcard": true
    }
  ],
  "46": [
    {
      "kanji": "こちら",
      "character": "こちら",
      "japaneseText": "こちら",
      "romaji": "kochira",
      "hint": "ทางนี้, ที่นี่ (สุภาพของ ここ)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ちょうど",
      "character": "ちょうど",
      "japaneseText": "ちょうど",
      "romaji": "choudo",
      "hint": "พอดี",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ガスサービスセンター",
      "character": "ガスサービスセンター",
      "japaneseText": "ガスサービスセンター",
      "romaji": "gasusaabisusentaa",
      "hint": "ศูนย์บริการแก๊ส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ガスレンジ",
      "character": "ガスレンジ",
      "japaneseText": "gasurenji",
      "romaji": "",
      "hint": "เตาแก๊ส",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ついています",
      "character": "ついています",
      "japaneseText": "ついています",
      "romaji": "tsuiteimasu",
      "hint": "ติดอยู่, เปิดสว่างอยู่",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ベル",
      "character": "ベル",
      "japaneseText": "beru",
      "romaji": "",
      "hint": "กริ่ง, กระดิ่ง",
      "isExtraFlashcard": true
    }
  ],
  "47": [
    {
      "kanji": "します",
      "character": "します",
      "japaneseText": "します",
      "romaji": "shimasu",
      "hint": "ทำ, เล่น (กีฬา)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "酷い",
      "character": "酷い",
      "japaneseText": "ひどい",
      "romaji": "hidoi",
      "hint": "รุนแรง, ร้ายกาจ, ใจร้าย",
      "isExtraFlashcard": true
    },
    {
      "kanji": "データ",
      "character": "データ",
      "japaneseText": "deeta",
      "romaji": "",
      "hint": "ข้อมูล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "パトカー",
      "character": "パトカー",
      "japaneseText": "patokaa",
      "romaji": "",
      "hint": "รถตำรวจ, รถตรวจการณ์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～によると",
      "character": "～によると",
      "japaneseText": "～によると",
      "romaji": "~niyoruto",
      "hint": "ตามที่... (รายงาน/กล่าวไว้)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どうも",
      "character": "どうも",
      "japaneseText": "どうも",
      "romaji": "doumo",
      "hint": "รู้สึกเหมือนกับว่า...",
      "isExtraFlashcard": true
    }
  ],
  "48": [
    {
      "kanji": "ファイル",
      "character": "ファイル",
      "japaneseText": "fairu",
      "romaji": "",
      "hint": "แฟ้มเอกสาร, ไฟล์",
      "isExtraFlashcard": true
    },
    {
      "kanji": "それまでに",
      "character": "それまでに",
      "japaneseText": "それまでに",
      "romaji": "soremadeni",
      "hint": "ภายในเวลานั้น, ก่อนถึงตอนนั้น",
      "isExtraFlashcard": true
    },
    {
      "kanji": "構いません",
      "character": "構いません",
      "japaneseText": "かまいません",
      "romaji": "kamaimasen",
      "hint": "ไม่เป็นไร, ไม่ขัดข้อง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "～パーセント",
      "character": "～パーセント",
      "japaneseText": "～パーセント",
      "romaji": "~paasento",
      "hint": "...เปอร์เซ็นต์",
      "isExtraFlashcard": true
    }
  ],
  "49": [
    {
      "kanji": "おっしゃいます",
      "character": "おっしゃいます",
      "japaneseText": "おっしゃいます",
      "romaji": "osshaimasu",
      "hint": "พูด (รูปยกย่องของ いいます)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "なさいます",
      "character": "なさいます",
      "japaneseText": "なさいます",
      "romaji": "nasaimasu",
      "hint": "ทำ (รูปยกย่องของ します)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "偶に",
      "character": "偶に",
      "japaneseText": "たまに",
      "romaji": "tamani",
      "hint": "นานๆ ครั้ง, เป็นบางครั้ง",
      "isExtraFlashcard": true
    },
    {
      "kanji": "どなたでも",
      "character": "どなたでも",
      "japaneseText": "どなたでも",
      "romaji": "donatademo",
      "hint": "ใครก็ได้ (รูปสุภาพของ だれでも)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "マウス",
      "character": "マウス",
      "japaneseText": "mausu",
      "romaji": "",
      "hint": "เมาส์คอมพิวเตอร์",
      "isExtraFlashcard": true
    }
  ],
  "50": [
    {
      "kanji": "いただきます",
      "character": "いただきます",
      "japaneseText": "いただきます",
      "romaji": "itadakimasu",
      "hint": "จะทานแล้วนะครับ/ค่ะ (พูดก่อนทานอาหาร)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "いたします",
      "character": "いたします",
      "japaneseText": "いたします",
      "romaji": "itashimasu",
      "hint": "ทำ (รูปถ่อมตัวของ します)",
      "isExtraFlashcard": true
    },
    {
      "kanji": "ガイド",
      "character": "ガイド",
      "japaneseText": "gaido",
      "romaji": "",
      "hint": "มัคคุเทศก์, ผู้นำเที่ยว",
      "isExtraFlashcard": true
    },
    {
      "kanji": "メールアドレス",
      "character": "メールアドレス",
      "japaneseText": "meeruadoresu",
      "romaji": "",
      "hint": "ที่อยู่อีเมล",
      "isExtraFlashcard": true
    },
    {
      "kanji": "スケジュール",
      "character": "スケジュール",
      "japaneseText": "sukejuuru",
      "romaji": "",
      "hint": "กำหนดการ, ตารางเวลา",
      "isExtraFlashcard": true
    },
    {
      "kanji": "麒麟",
      "character": "麒麟",
      "japaneseText": "きりん",
      "romaji": "kirin",
      "hint": "ยีราฟ",
      "isExtraFlashcard": true
    },
    {
      "kanji": "叶います",
      "character": "叶います",
      "japaneseText": "かないます",
      "romaji": "kanaimasu",
      "hint": "สมหวัง, เป็นจริง (ความฝัน)",
      "isExtraFlashcard": true
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = flashcardExtraData;
}
if (typeof window !== 'undefined') {
    window.flashcardExtraData = flashcardExtraData;
}
