// kanjiExamHelper.js - ระบบวิเคราะห์ตัวเลือกและแสดงผลเฉลยแบบละเอียดสำหรับพาร์ทคันจิ JLPT N4
(function() {
    // พจนานุกรมความหมายและคำอธิบายคำศัพท์ในข้อสอบคันจิ JLPT N4
    const kanjiVocabDict = {
        // ==========================================
        // もんだい 1: การอ่านคันจิ (漢字読み)
        // ==========================================
        "ふべん": { meaning: "ไม่สะดวก, ไม่สะดวกสบาย", correctFor: ["不便"] },
        "ぶべん": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "ふへん": { meaning: "สากล/ไม่เปลี่ยนแปลง (普遍/不変) ไม่ใช่ 不便" },
        "ぶへん": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "こうじ": { meaning: "งานก่อสร้าง (工事)", correctFor: ["工事"] },
        "こうごと": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "こじ": { meaning: "เด็กกำพร้า (孤児) หรือ อ้างอิงประวัติศาสตร์ (故事)" },
        "こごと": { meaning: "การบ่นว่า, การดุด่า (小言)" },

        "はって": { meaning: "มาจาก 貼る (แปะ/ติด) หรือ 張る (ขึง/กาง)" },
        "かぶって": { meaning: "มาจาก 被る (สวมใส่บนศีรษะ เช่น หมวก)" },
        "もって": { meaning: "มาจาก 持つ (ถือ, พกพา)", correctFor: ["持って", "持つ"] },
        "ひろって": { meaning: "มาจาก 拾う (เก็บขึ้นมา)" },
        "とって": { meaning: "มาจาก 取る (หยิบ, ถือเอา)" },

        "からだ": { meaning: "ร่างกาย (体)", correctFor: ["体"] },
        "かお": { meaning: "ใบหน้า (顔)" },
        "あたま": { meaning: "ศีรษะ, หัว (頭)" },
        "かみ": { meaning: "เส้นผม (髪) หรือ กระดาษ (紙)" },
        "こころ": { meaning: "จิตใจ, หัวใจ (心)" },

        "りゅうえん": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "りゅういん": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "にゅうえん": { meaning: "การเข้าเรียนในโรงเรียนอนุบาล (入園)" },
        "にゅういん": { meaning: "การเข้าพักรักษาตัวในโรงพยาบาล (入院)", correctFor: ["入院", "入院する"] },
        "びょういん": { meaning: "โรงพยาบาล (病院)" },
        "だいいん": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "たいいん": { meaning: "การออกจากโรงพยาบาล (退院)" },

        "ちかい": { meaning: "ใกล้ (近い)" },
        "せまい": { meaning: "แคบ (狭い)" },
        "ひろい": { meaning: "กว้าง, กว้างขวาง (広い)", correctFor: ["広い"] },
        "とおい": { meaning: "ไกล (遠い)" },
        "あおい": { meaning: "สีฟ้า, สีน้ำเงิน (青い)" },
        "ちいさい": { meaning: "เล็ก (小さい)" },
        "すくない": { meaning: "น้อย (少ない)" },

        "かんがえました": { meaning: "คิด, พิจารณาแล้ว (考える -> 考えました)", correctFor: ["考えました", "考える"] },
        "おぼえました": { meaning: "จดจำได้แล้ว (覚える -> 覚えました)" },
        "こたえました": { meaning: "ตอบแล้ว (答える -> 答えました)" },
        "おしえました": { meaning: "สอน, บอกแล้ว (教える -> 教えました)" },

        "おやゆび": { meaning: "นิ้วหัวแม่มือ, นิ้วโป้ง (親指)", correctFor: ["親指"] },
        "ひとさしゆび": { meaning: "นิ้วชี้ (人差し指)" },
        "くすりゆび": { meaning: "นิ้วนาง (薬指)" },
        "こゆび": { meaning: "นิ้วก้อย (小指)" },

        "きって": { meaning: "มาจาก 切る (หั่น, ตัด)", correctFor: ["切って", "切る"] },
        "すって": { meaning: "มาจาก 吸う (สูด/ดูด) หรือ 擦る (ถูก/ขูด)" },
        "うって": { meaning: "มาจาก 打つ (ตี/เคาะ) หรือ 売る (ขาย)" },
        "まって": { meaning: "มาจาก 待つ (รอ)" },

        "はこぶ": { meaning: "ขนย้าย, แบกหาม (運ぶ)", correctFor: ["運ぶ"] },
        "ならぶ": { meaning: "เรียงแถว, เข้าคิว (並ぶ)" },
        "えらぶ": { meaning: "เลือก (選ぶ)" },
        "よろこぶ": { meaning: "ดีใจ, ยินดี (喜ぶ)" },

        "こたえる": { meaning: "ตอบคำถาม (答える)", correctFor: ["答える"] },
        "つたえる": { meaning: "ถ่ายทอด, ส่งสาร (伝える)" },
        "おしえる": { meaning: "สอน, บอก (教える)" },
        "きこえる": { meaning: "ได้ยิน (聞こえる)" },

        "つよい": { meaning: "แข็งแกร่ง, แข็งแรง (強い)", correctFor: ["強い"] },
        "よわい": { meaning: "อ่อนแอ (弱い)" },
        "おもい": { meaning: "หนัก (重い)" },
        "かるい": { meaning: "เบา (軽い)" },

        "うんてん": { meaning: "การขับรถ, การควบคุมเครื่องจักร (運転)", correctFor: ["運転"] },
        "うんどう": { meaning: "การออกกำลังกาย (運動)" },
        "あんぜん": { meaning: "ความปลอดภัย (安全)" },
        "うんてい": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        // ==========================================
        // もんだい 2: การเขียนคันจิ (漢字表記)
        // ==========================================
        "冬い": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "暑い": { meaning: "ร้อน (สภาพอากาศ)", reading: "あつい" },
        "夏い": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "寒い": { meaning: "หนาว (สภาพอากาศ)", reading: "さむい" },

        "夕": { meaning: "ตอนเย็น, ค่ำ (夕方)", reading: "ゆう" },
        "朝": { meaning: "ตอนเช้า", reading: "あさ" },
        "昼": { meaning: "กลางวัน", reading: "ひる" },
        "夜": { meaning: "กลางคืน, ตอนค่ำ", reading: "よる" },

        "設名": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "説名": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "設明": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "説明": { meaning: "การอธิบาย, คำอธิบาย", reading: "せつめい" },
        "訳明": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "記明": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "空港": { meaning: "สนามบิน", reading: "くうこう" },
        "銀行": { meaning: "ธนาคาร", reading: "ぎんこう" },
        "空行": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "銀港": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "徒って": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "歩って": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ผันผิด ต้องเป็น 歩いて)" },
        "走って": { meaning: "มาจาก 走る (วิ่ง)", reading: "はしって" },
        "捗って": { meaning: "มาจาก 捗る (ก้าวหน้า, คืบหน้า)", reading: "はかどって" },

        "映語": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "英語": { meaning: "ภาษาอังกฤษ", reading: "えいご" },
        "英画": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "映画": { meaning: "ภาพยนตร์, หนัง", reading: "えいが" },

        "送って": { meaning: "มาจาก 送る (ส่ง)", reading: "おくって" },
        "使って": { meaning: "มาจาก 使う (ใช้)", reading: "つかって" },
        "作って": { meaning: "มาจาก 作る (ทำ, สร้าง)", reading: "つくって" },
        "売って": { meaning: "มาจาก 売る (ขาย)", reading: "うって" },

        "連動": { meaning: "การเคลื่อนไหวตามกัน, การประสานกัน", reading: "れんどう" },
        "運働": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "連働": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "寺": { meaning: "วัด (พุทธ)", reading: "てら" },
        "船": { meaning: "เรือ", reading: "ふね" },
        "鳥": { meaning: "นก", reading: "とり" },
        "雲": { meaning: "เมฆ", reading: "くも" },

        "晩": { meaning: "ตอนเย็น, ค่ำ (今晩)", reading: "ばん" },
        "掩": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่นระดับนี้ (คันจิตัวหลอก)" },
        "液": { meaning: "ของเหลว, น้ำ", reading: "えき" },

        "赤い": { meaning: "สีแดง", reading: "あかい" },
        "青い": { meaning: "สีฟ้า, สีน้ำเงิน", reading: "あおい" },
        "黒い": { meaning: "สีดำ", reading: "くろい" },
        "白い": { meaning: "สีขาว", reading: "しろい" },

        "食室": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "飯堂": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "食堂": { meaning: "โรงอาหาร", reading: "しょくどう" },
        "飯室": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "開めて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ผันผิด ต้องเป็น 開けて)" },
        "閉めて": { meaning: "มาจาก 閉める (ปิดประตู/หน้าต่าง)", reading: "しめて" },
        "間めて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "門めて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "親切": { meaning: "ใจดี, มีน้ำใจ", reading: "しんせつ" },
        "新切": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "親功": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "新功": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "計書": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "訂画": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "計画": { meaning: "แผนการ, โปรเจกต์", reading: "けいかく" },
        "訂書": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "匠員": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "医員": { meaning: "เจ้าหน้าที่การแพทย์ (ในโรงพยาบาล)", reading: "いいん" },
        "匠者": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "医者": { meaning: "คุณหมอ, แพทย์", reading: "いしゃ" },

        "貨して": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "資して": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "貸して": { meaning: "มาจาก 貸す (ให้ยืม)", reading: "かして" },
        "質して": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่นระดับนี้ (คันจิตัวหลอก)" },

        "誡会": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "誡合": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "試会": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "試合": { meaning: "การแข่งขันกีฬา, แมตช์", reading: "しあい" },

        "揚斤": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "場斤": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "揚所": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "場所": { meaning: "สถานที่", reading: "ばしょ" },

        "走いて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ผันผิด ต้องเป็น 走って)" },
        "奔いて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "歩いて": { meaning: "มาจาก 歩く (เดิน)", reading: "あるいて" },
        "涉いて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "便利": { meaning: "สะดวกสบาย", reading: "べんり" },
        "便理": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "更利": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "更理": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "眠むかった": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (สะกดโอกุริงะนะผิด)" },
        "眼かった": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "眠んかった": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "眠かった": { meaning: "มาจาก 眠い (ง่วงนอน)", reading: "ねむかった" },

        "雪": { meaning: "หิมะ", reading: "ゆき" },
        "電": { meaning: "ไฟฟ้า (電気/電車)", reading: "でん" },
        "雷": { meaning: "ฟ้าร้อง, ฟ้าผ่า", reading: "かみなり" },

        "映面": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "央画": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "央面": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "海いで": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "泳いで": { meaning: "มาจาก 泳ぐ (ว่ายน้ำ)", reading: "およいで" },
        "港いで": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "注いで": { meaning: "มาจาก 注ぐ (ริน/เทน้ำ)", reading: "そそいで" },

        "売り場": { meaning: "แผนกขาย, จุดขายสินค้า", reading: "うりば" },
        "売り所": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "完り場": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "完り所": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "閑わります": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "始わります": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ผันผิด ต้องเป็น 始まります)" },
        "閉わります": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ผันผิด ต้องเป็น 閉まります)" },
        "終わります": { meaning: "มาจาก 終わる (จบ, เสร็จสิ้น)", reading: "おわります" },

        "本室": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "本店": { meaning: "สำนักงานใหญ่, ร้านหลัก", reading: "ほんてん" },
        "本屋": { meaning: "ร้านขายหนังสือ", reading: "ほんや" },
        "本家": { meaning: "ตระกูลต้นสาย, เจ้าตำรับ", reading: "ほんけ" },

        "糸り": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "係り": { meaning: "ผู้รับผิดชอบ, เจ้าหน้าที่ประจำจุด", reading: "かかり" },
        "員り": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "損り": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "反対": { meaning: "ตรงกันข้าม, คัดค้าน", reading: "はんたい" },
        "半対": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "反体": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "半体": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "閑いて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "閉いて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ผันผิด ต้องเป็น 閉じて)" },
        "閃いて": { meaning: "มาจาก 閃く (ปิ๊งไอเดีย, ประกายวับ)", reading: "ひらめいて" },
        "開いて": { meaning: "มาจาก 開く (เปิดหน้าต่าง/เปิดหนังสือ)", reading: "ひらいて" },

        "足って": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "是って": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "定って": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "暗い": { meaning: "มืด, มืดมิด", reading: "くらい" },
        "明い": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (สะกดผิด ต้องเป็น 明るい)" },

        "理薬": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "野菜": { meaning: "ผัก", reading: "やさい" },
        "理菜": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "野薬": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "也菜": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "家菜": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "果": { meaning: "ผลไม้, ผลลัพธ์ (果物/結果)", reading: "くだ/か" },
        "楽": { meaning: "สบาย, สนุกสนาน (音楽/楽しい)", reading: "らく/たの" },
        "薬": { meaning: "ยา, ยารักษาโรค", reading: "くすり" },
        "栗": { meaning: "เกาลัด", reading: "くり" },

        "赴きました": { meaning: "มาจาก 赴く (มุ่งหน้าไป)", reading: "おもむきました" },
        "題きました": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "起きました": { meaning: "มาจาก 起きる (ตื่นนอน)", reading: "おきました" },
        "匙きました": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "男姓": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ใช้ตัว 姓 [นามสกุล] ผิด)" },
        "女性": { meaning: "ผู้หญิง, สตรี", reading: "じょせい" },
        "男性": { meaning: "ผู้ชาย, บุรุษ", reading: "だんせい" },
        "女姓": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "伸せば": { meaning: "มาจาก 伸ばす/伸びる (ถ้ายืดออก)", reading: "のばせば" },
        "挿せば": { meaning: "มาจาก 挿す (ถ้าเสียบเข้าไป)", reading: "させば" },
        "押せば": { meaning: "มาจาก 押す (ถ้ากดปุ่ม/ผลัก)", reading: "おせば" },
        "坤せば": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "込りました": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "返りました": { meaning: "มาจาก 返る (กลับคืนมา)", reading: "かえりました" },
        "速りました": { meaning: "มาจาก 速る (ใจร้อน, รีบร้อน)", reading: "はやりました" },
        "送りました": { meaning: "มาจาก 送る (ส่งจดหมาย/พัสดุแล้ว)", reading: "おくりました" },

        "運軽": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "動転": { meaning: "การตกใจจนทำอะไรไม่ถูก", reading: "どうてん" },
        "動軽": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "置きます": { meaning: "มาจาก 置く (วาง, ตั้งไว้)", reading: "おきます" },
        "措きます": { meaning: "มาจาก 措く (ละไว้, ยกเว้นไว้)", reading: "おきます" },
        "押きます": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (ผันผิด ต้องเป็น 押します)" },

        "違い": { meaning: "ความแตกต่าง, แตกต่าง", reading: "ちがい" },
        "通い": { meaning: "การเดินทางไปกลับประจำ", reading: "かよい" },

        "賭じて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "開じて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "閉じて": { meaning: "มาจาก 閉じる (ปิดหนังสือ/หลับตา)", reading: "とじて" },
        "関じて": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },

        "宮業": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" },
        "営業": { meaning: "การดำเนินกิจการ, เปิดทำการ", reading: "えいぎょう" },
        "宮事": { meaning: "ราชการในพระราชวัง", reading: "ぐうじ" },
        "営事": { isInvalid: true, meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น" }
    };

    // ฟังก์ชันสกัดข้อมูลหลัก: คำคันจิ คำอ่านฮิรางานะ และคำแปลไทย
    function extractMainData(currentData) {
        const uMatch = (currentData.character || '').match(/<u>([^<]+)<\/u>/);
        const underlined = uMatch ? uMatch[1].trim() : '';

        const questionType = currentData.questionType || '';
        let kanjiWord = currentData.kanji || '';
        let correctReading = '';
        let mainMeaning = '';

        // 1. สกัดคำแปลหลักจาก explanation ก่อน
        if (currentData.explanation) {
            const m = currentData.explanation.match(/(?:แปลว่า|หมายถึง)\s*(.+?)(?=\s*ตรงกับ|$)/);
            if (m) mainMeaning = m[1].trim();
        }

        // 2. ถ้าไม่มีใน explanation ให้ดึงจาก hint
        if (!mainMeaning && currentData.hint) {
            const m = currentData.hint.match(/=\s*([^)]+)/);
            if (m && !m[1].includes(kanjiWord)) {
                mainMeaning = m[1].trim();
            } else {
                mainMeaning = currentData.hint.replace(/\([^)]+\)/g, '').trim();
            }
        }

        // 3. จัดการ Kanij Word และ Reading ตามประเภทข้อสอบ
        if (questionType.includes('もんだい1') || questionType.includes('漢字読み')) {
            kanjiWord = currentData.kanji || '';
            correctReading = currentData.choices[currentData.correct];
        } else if (questionType.includes('もんだい2') || questionType.includes('漢字表記')) {
            kanjiWord = currentData.choices[currentData.correct];
            correctReading = underlined || currentData.japaneseText || '';
        } else {
            kanjiWord = currentData.choices[currentData.correct];
            correctReading = currentData.japaneseText || '';
        }

        return { kanjiWord, correctReading, mainMeaning };
    }

    // ฟังก์ชันสร้างความหมายของตัวเลือกแต่ละตัว (Choices Breakdown)
    function generateChoiceBreakdown(currentData) {
        if (!currentData || !currentData.choices) return [];

        const correctIdx = currentData.correct;
        const questionType = currentData.questionType || '';
        const { kanjiWord, correctReading, mainMeaning } = extractMainData(currentData);

        return currentData.choices.map((choice, idx) => {
            const isCorrect = (idx === correctIdx);
            const choiceClean = choice.replace(/<[^>]+>/g, '').trim();

            // 1. ตรวจสอบในพจนานุกรมคำศัพท์
            if (kanjiVocabDict[choiceClean]) {
                const info = kanjiVocabDict[choiceClean];
                if (isCorrect) {
                    return {
                        choice: choiceClean,
                        isCorrect: true,
                        text: `${choiceClean} = ${mainMeaning || info.meaning}`
                    };
                } else if (info.isInvalid) {
                    return {
                        choice: choiceClean,
                        isCorrect: false,
                        text: `${choiceClean} <span class="text-rose-500 font-bold">ไม่มีคำนี้ในภาษาญี่ปุ่น</span>`
                    };
                } else {
                    const extra = info.reading ? ` (${info.reading})` : '';
                    return {
                        choice: choiceClean,
                        isCorrect: false,
                        text: `${choiceClean}${extra} = ${info.meaning}`
                    };
                }
            }

            // 2. ตัวเลือกที่ถูกต้อง
            if (isCorrect) {
                return {
                    choice: choiceClean,
                    isCorrect: true,
                    text: `${choiceClean} = ${mainMeaning || 'คำตอบที่ถูกต้องตามโจทย์'}`
                };
            }

            // 3. ตัวเลือกที่ผิด: ตรวจสอบตามประเภทข้อสอบ
            if (questionType.includes('もんだい1') || questionType.includes('漢字読み')) {
                // คำอ่านผิดใน もんだい 1 มักเป็นเสียงหลอกที่ไม่มีคำนี้จริง
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-rose-500 font-bold">ไม่มีคำนี้ในภาษาญี่ปุ่น</span>`
                };
            } else if (questionType.includes('もんだい2') || questionType.includes('漢字表記')) {
                // ช้อยส์คันจิที่ไม่ได้อยู่ในพจนานุกรมใน もんだい 2 เป็นคันจิตัวหลอกที่ประสมขึ้นมาเอง
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-rose-500 font-bold">ไม่มีคำนี้ในภาษาญี่ปุ่น</span>`
                };
            } else if (questionType.includes('もんだい4') || questionType.includes('類義')) {
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-slate-400 font-normal">(ความหมายไม่ใกล้เคียงกับโจทย์)</span>`
                };
            } else {
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-slate-400 font-normal">(ความหมายไม่เข้ากับบริบทประโยค)</span>`
                };
            }
        });
    }

    // ฟังก์ชันแสดงแผงผลลัพธ์เฉลยของพาร์ทคันจิ (ตรงตามภาพตัวอย่าง)
    function renderKanjiExamResultUI(isCorrect, currentData) {
        const panel = document.getElementById('kanji-exam-result-panel');
        if (!panel) return;

        const statusCard = document.getElementById('kanji-exam-status-card');
        const iconBox = document.getElementById('kanji-exam-status-icon-box');
        const statusTitle = document.getElementById('kanji-exam-status-title');
        const statusWord = document.getElementById('kanji-exam-status-word');
        const choicesList = document.getElementById('kanji-exam-choices-list');

        panel.classList.remove('hidden');

        const { kanjiWord, correctReading, mainMeaning } = extractMainData(currentData);
        const readingDisplay = correctReading && correctReading !== kanjiWord ? `(${correctReading})` : '';

        if (isCorrect) {
            // ถูกต้อง (กรอบสีเขียว วงแหวนคู่ 2 ชั้น ◎ ตรงตามภาพตัวอย่าง)
            statusCard.className = "p-3.5 sm:p-4 rounded-2xl border-l-4 border-l-emerald-500 border border-emerald-500/30 bg-[#16202c]/90 dark:bg-[#16202c]/95 text-slate-100 flex items-center gap-3.5 shadow-sm transition-all";
            
            iconBox.className = "w-11 h-11 rounded-full border-2 border-emerald-400/90 flex items-center justify-center shrink-0";
            iconBox.innerHTML = '<div class="w-5 h-5 rounded-full border-2 border-emerald-400/90"></div>';
            
            statusTitle.innerText = "ถูกต้อง";
            statusTitle.className = "text-base font-bold text-white tracking-wide";
            statusWord.innerHTML = `<span class="font-bold text-slate-200">${kanjiWord}</span><span class="text-slate-400">${readingDisplay}</span> = <span class="font-normal text-slate-300">${mainMeaning}</span>`;
        } else {
            // ยังไม่ถูกต้อง (กรอบสีแดง กากบาท ✕)
            statusCard.className = "p-3.5 sm:p-4 rounded-2xl border-l-4 border-l-rose-500 border border-rose-500/30 bg-[#24171d]/90 dark:bg-[#24171d]/95 text-slate-100 flex items-center gap-3.5 shadow-sm transition-all";
            
            iconBox.className = "w-11 h-11 rounded-full border-2 border-rose-400/90 flex items-center justify-center shrink-0";
            iconBox.innerHTML = '<i class="fa-solid fa-xmark text-rose-400 text-lg font-black"></i>';
            
            statusTitle.innerText = "ยังไม่ถูกต้อง";
            statusTitle.className = "text-base font-bold text-rose-400 tracking-wide";
            statusWord.innerHTML = `<span class="text-slate-400 text-xs mr-1">เฉลย:</span> <span class="font-bold text-slate-200">${kanjiWord}</span><span class="text-slate-400">${readingDisplay}</span> = <span class="font-normal text-slate-300">${mainMeaning}</span>`;
        }

        // แสดงแจกแจงความหมายของแต่ละตัวเลือก 1-4
        if (choicesList) {
            const breakdown = generateChoiceBreakdown(currentData);
            choicesList.innerHTML = breakdown.map((item, idx) => {
                const num = idx + 1;
                if (item.isCorrect) {
                    return `
                        <div class="flex items-start gap-2 text-emerald-400 font-medium">
                            <span class="font-mono font-bold">${num}.</span>
                            <div>${item.text}</div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="flex items-start gap-2 text-slate-200 dark:text-slate-200 font-normal">
                            <span class="font-mono text-slate-400">${num}.</span>
                            <div>${item.text}</div>
                        </div>
                    `;
                }
            }).join('');
        }
    }

    function hideKanjiExamResultUI() {
        const panel = document.getElementById('kanji-exam-result-panel');
        if (panel) panel.classList.add('hidden');
    }

    window.kanjiExamHelper = {
        renderResult: renderKanjiExamResultUI,
        hideResult: hideKanjiExamResultUI,
        generateChoiceBreakdown: generateChoiceBreakdown,
        extractMainData: extractMainData
    };
})();
