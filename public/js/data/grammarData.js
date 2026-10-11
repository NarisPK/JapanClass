const grammarData = {
    "1": {
        "title": "第 1 課 ไวยากรณ์",
        "sub": "คำช่วย は, も, の (การแนะนำตัวและหัวข้อ)",
        "emoji": "🌸",
        "questions": [
            {
                "fullSentence": "お名前は何ですか。",
                "sentence": "お名前 [ ___ ] 何ですか。",
                "blankParticle": "は",
                "thaiHint": "ชื่อของคุณคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักที่กำลังพูดถึง คือ 'お名前'",
                "choices": [
                    "へ",
                    "で",
                    "は",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ニックネームは何ですか。",
                "sentence": "ニックネーム [ ___ ] 何ですか。",
                "blankParticle": "は",
                "thaiHint": "ชื่อเล่นคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อของประโยค",
                "choices": [
                    "に",
                    "は",
                    "を",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは何人ですか。",
                "sentence": "あなた [ ___ ] 何人ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณเป็นคนสัญชาติอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้ประธาน/หัวข้อ 'あなた'",
                "choices": [
                    "を",
                    "も",
                    "と",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは校長先生ですか。",
                "sentence": "あなた [ ___ ] 校長先生ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณคือครูใหญ่ใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'あなた'",
                "choices": [
                    "は",
                    "に",
                    "まで",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたはタイ人ですか。",
                "sentence": "あなた [ ___ ] タイ人ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณเป็นคนไทยใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'あなた'",
                "choices": [
                    "は",
                    "が",
                    "も",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "校長先生もタイ人ですか。",
                "sentence": "校長先生 [ ___ ] タイ人ですか。",
                "blankParticle": "も",
                "thaiHint": "ครูใหญ่ก็เป็นคนไทยด้วยใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'も' (mo) แปลว่า 'ก็...ด้วยเหมือนกัน'",
                "choices": [
                    "が",
                    "まで",
                    "の",
                    "も"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは医者ですか。",
                "sentence": "あなた [ ___ ] 医者ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณเป็นหมอใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'คุณ'",
                "choices": [
                    "へ",
                    "より",
                    "は",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたは会社員ですか。",
                "sentence": "あなた [ ___ ] 会社員ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณเป็นพนักงานบริษัทใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'คุณ'",
                "choices": [
                    "は",
                    "を",
                    "が",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "先生は何人ですか。",
                "sentence": "先生 [ ___ ] 何人ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณครูเป็นคนสัญชาติอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ '先生'",
                "choices": [
                    "に",
                    "へ",
                    "も",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは学生ですか。",
                "sentence": "あなた [ ___ ] 学生ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณเป็นนักเรียนใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อประธาน",
                "choices": [
                    "は",
                    "まで",
                    "へ",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あの人はあなたの友達ですか。",
                "sentence": "あの人はあなた [ ___ ] 友達ですか。",
                "blankParticle": "の",
                "thaiHint": "คนนั้นเป็นเพื่อนของคุณใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'の' (no) แสดงความเป็นเจ้าของ เชื่อมคำนาม (เพื่อนของคุณ)",
                "choices": [
                    "の",
                    "と",
                    "から",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あの人はあなたの友達ですか。",
                "sentence": "あの人 [ ___ ] あなたの友達ですか。",
                "blankParticle": "は",
                "thaiHint": "คนนั้นเป็นเพื่อนของคุณใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้ประธาน 'あの人'",
                "choices": [
                    "より",
                    "は",
                    "に",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あの人は医者ですか。",
                "sentence": "あの人 [ ___ ] 医者ですか。",
                "blankParticle": "は",
                "thaiHint": "คนนั้นเป็นหมอใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้ประธาน 'あの人'",
                "choices": [
                    "は",
                    "へ",
                    "まで",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたはどこの実習生ですか。",
                "sentence": "あなた [ ___ ] どこの実習生ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณเป็นเด็กฝึกงานของที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'คุณ'",
                "choices": [
                    "も",
                    "の",
                    "は",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたはどこの実習生ですか。",
                "sentence": "あなたはどこ [ ___ ] 実習生ですか。",
                "blankParticle": "の",
                "thaiHint": "คุณเป็นเด็กฝึกงานของที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'の' เชื่อมสถานที่กับคำนาม (เด็กฝึกงานของที่ไหน)",
                "choices": [
                    "の",
                    "は",
                    "で",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたの先生は誰ですか。",
                "sentence": "あなた [ ___ ] 先生は誰ですか。",
                "blankParticle": "の",
                "thaiHint": "คุณครูของคุณคือใครครับ/ค่ะ",
                "explanation": "ใช้ 'の' แสดงความเป็นเจ้าของ (คุณครูของคุณ)",
                "choices": [
                    "から",
                    "を",
                    "の",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたの先生は誰ですか。",
                "sentence": "あなたの先生 [ ___ ] 誰ですか。",
                "blankParticle": "は",
                "thaiHint": "คุณครูของคุณคือใครครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'あなたの先生'",
                "choices": [
                    "は",
                    "の",
                    "へ",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あの人の名前は何ですか。",
                "sentence": "あの人 [ ___ ] 名前は何ですか。",
                "blankParticle": "の",
                "thaiHint": "ชื่อของคนนั้นคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'の' แสดงความเป็นเจ้าของ (ชื่อของคนนั้น)",
                "choices": [
                    "の",
                    "と",
                    "まで",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あの人の名前は何ですか。",
                "sentence": "あの人の名前 [ ___ ] 何ですか。",
                "blankParticle": "は",
                "thaiHint": "ชื่อของคนนั้นคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'あの人の名前'",
                "choices": [
                    "は",
                    "で",
                    "まで",
                    "から"
                ],
                "correct": 0
            }
        ]
    },
    "2": {
        "title": "第 2 課 ไวยากรณ์",
        "sub": "คำช่วย は, の (สิ่งของ ความเป็นเจ้าของ และประเภท)",
        "emoji": "📖",
        "questions": [
            {
                "fullSentence": "この辞書はあなたのですか。",
                "sentence": "この辞書 [ ___ ] あなたのですか。",
                "blankParticle": "は",
                "thaiHint": "พจนานุกรมเล่มนี้เป็นของคุณใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'この辞書'",
                "choices": [
                    "の",
                    "も",
                    "と",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "この辞書はあなたのですか。",
                "sentence": "この辞書はあなた [ ___ ] ですか。",
                "blankParticle": "の",
                "thaiHint": "พจนานุกรมเล่มนี้เป็นของคุณใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'の' แสดงความเป็นเจ้าของ (ของคุณ)",
                "choices": [
                    "より",
                    "の",
                    "へ",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたの電話はどこのですか。",
                "sentence": "あなた [ ___ ] 電話はどこのですか。",
                "blankParticle": "の",
                "thaiHint": "โทรศัพท์ของคุณผลิตจากที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'の' แสดงความเป็นเจ้าของ 'โทรศัพท์ของคุณ'",
                "choices": [
                    "の",
                    "で",
                    "と",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたの電話はどこのですか。",
                "sentence": "あなたの電話 [ ___ ] どこのですか。",
                "blankParticle": "は",
                "thaiHint": "โทรศัพท์ของคุณผลิตจากที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'あなたの電話'",
                "choices": [
                    "を",
                    "まで",
                    "で",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたの電話はどこのですか。",
                "sentence": "あなたの電話はどこ [ ___ ] ですか。",
                "blankParticle": "の",
                "thaiHint": "โทรศัพท์ของคุณผลิตจากที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'の' แทนคำนาม 'どこの (โทรศัพท์ของที่ไหน)'",
                "choices": [
                    "へ",
                    "まで",
                    "の",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "トヨタは何の会社ですか。",
                "sentence": "トヨタ [ ___ ] 何の会社ですか。",
                "blankParticle": "は",
                "thaiHint": "โตโยต้าเป็นบริษัทเกี่ยวกับอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'トヨタ'",
                "choices": [
                    "で",
                    "が",
                    "の",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "トヨタは何の会社ですか。",
                "sentence": "トヨタは何 [ ___ ] 会社ですか。",
                "blankParticle": "の",
                "thaiHint": "โตโยต้าเป็นบริษัทเกี่ยวกับอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'の' ขยายคำนามบอกประเภท '何の会社 (บริษัทอะไร)'",
                "choices": [
                    "と",
                    "が",
                    "へ",
                    "の"
                ],
                "correct": 3
            },
            {
                "fullSentence": "それは何ですか。",
                "sentence": "それ [ ___ ] 何ですか。",
                "blankParticle": "は",
                "thaiHint": "นั่นคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'それ'",
                "choices": [
                    "も",
                    "は",
                    "へ",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "これは何ですか。",
                "sentence": "これ [ ___ ] 何ですか。",
                "blankParticle": "は",
                "thaiHint": "นี่คืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'これ'",
                "choices": [
                    "が",
                    "から",
                    "へ",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたの会社の名前は何ですか。",
                "sentence": "あなたの会社 [ ___ ] 名前は何ですか。",
                "blankParticle": "の",
                "thaiHint": "ชื่อบริษัทของคุณคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'の' เชื่อมคำนาม '名前ของ会社'",
                "choices": [
                    "に",
                    "へ",
                    "の",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたの会社の名前は何ですか。",
                "sentence": "あなたの会社の名前 [ ___ ] 何ですか。",
                "blankParticle": "は",
                "thaiHint": "ชื่อบริษัทของคุณคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ",
                "choices": [
                    "から",
                    "が",
                    "まで",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "その携帯はだれのですか。",
                "sentence": "その携帯 [ ___ ] だれのですか。",
                "blankParticle": "は",
                "thaiHint": "โทรศัพท์เครื่องนั้นเป็นของใครครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'その携帯'",
                "choices": [
                    "を",
                    "の",
                    "は",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "その携帯はだれのですか。",
                "sentence": "その携帯はだれ [ ___ ] ですか。",
                "blankParticle": "の",
                "thaiHint": "โทรศัพท์เครื่องนั้นเป็นของใครครับ/ค่ะ",
                "explanation": "ใช้ 'の' แสดงความเป็นเจ้าของ 'だれの (ของใคร)'",
                "choices": [
                    "から",
                    "に",
                    "を",
                    "の"
                ],
                "correct": 3
            },
            {
                "fullSentence": "これはだれの本ですか。",
                "sentence": "これ [ ___ ] だれの本ですか。",
                "blankParticle": "は",
                "thaiHint": "นี่คือหนังสือของใครครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้ประธาน 'これ'",
                "choices": [
                    "まで",
                    "より",
                    "を",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "これはだれの本ですか。",
                "sentence": "これはだれ [ ___ ] 本ですか。",
                "blankParticle": "の",
                "thaiHint": "นี่คือหนังสือของใครครับ/ค่ะ",
                "explanation": "ใช้ 'の' แสดงความเป็นเจ้าของ (หนังสือของใคร)",
                "choices": [
                    "の",
                    "へ",
                    "に",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "このペンは誰のですか。",
                "sentence": "このペン [ ___ ] 誰のですか。",
                "blankParticle": "は",
                "thaiHint": "ปากกาด้ามนี้เป็นของใครครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'このペン'",
                "choices": [
                    "まで",
                    "は",
                    "も",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あのノートはあなたのノートですか。",
                "sentence": "あのノート [ ___ ] あなたのノートですか。",
                "blankParticle": "は",
                "thaiHint": "สมุดเล่มนั้นเป็นสมุดของคุณใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'あのノート'",
                "choices": [
                    "の",
                    "まで",
                    "は",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あのノートはあなたのノートですか。",
                "sentence": "あのノートはあなた [ ___ ] ノートですか。",
                "blankParticle": "の",
                "thaiHint": "สมุดเล่มนั้นเป็นสมุดของคุณใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'の' แสดงความเป็นเจ้าของ 'สมุดของคุณ'",
                "choices": [
                    "に",
                    "は",
                    "の",
                    "も"
                ],
                "correct": 2
            }
        ]
    },
    "3": {
        "title": "第 3 課 ไวยากรณ์",
        "sub": "คำช่วย は, の (สถานที่และแหล่งผลิต)",
        "emoji": "🏢",
        "questions": [
            {
                "fullSentence": "ここは教室ですか。",
                "sentence": "ここ [ ___ ] 教室ですか。",
                "blankParticle": "は",
                "thaiHint": "ที่นี่คือห้องเรียนใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อสถานที่ 'ここ'",
                "choices": [
                    "も",
                    "へ",
                    "は",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "そこは大学ですか。",
                "sentence": "そこ [ ___ ] 大学ですか。",
                "blankParticle": "は",
                "thaiHint": "ที่นั่นคือมหาวิทยาลัยใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อสถานที่ 'そこ'",
                "choices": [
                    "を",
                    "の",
                    "は",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あそこは事務所ですか。",
                "sentence": "あそこ [ ___ ] 事務所ですか。",
                "blankParticle": "は",
                "thaiHint": "ที่โน่นคือสำนักงานใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อสถานที่ 'あそこ'",
                "choices": [
                    "も",
                    "で",
                    "は",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "トイレはどこですか。",
                "sentence": "トイレ [ ___ ] どこですか。",
                "blankParticle": "は",
                "thaiHint": "ห้องน้ำอยู่ที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้สถานที่ที่ต้องการถามตำแหน่ง",
                "choices": [
                    "の",
                    "が",
                    "まで",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "教室はどこですか。",
                "sentence": "教室 [ ___ ] どこですか。",
                "blankParticle": "は",
                "thaiHint": "ห้องเรียนอยู่ที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ '教室'",
                "choices": [
                    "で",
                    "まで",
                    "の",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "食堂はどこですか。",
                "sentence": "食堂 [ ___ ] どこですか。",
                "blankParticle": "は",
                "thaiHint": "โรงอาหารอยู่ที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ '食堂'",
                "choices": [
                    "を",
                    "から",
                    "は",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "事務所はどちらですか。",
                "sentence": "事務所 [ ___ ] どちらですか。",
                "blankParticle": "は",
                "thaiHint": "สำนักงานอยู่ทางไหนครับ/ค่ะ (สุภาพ)",
                "explanation": "ใช้ 'は' ชี้สถานที่",
                "choices": [
                    "へ",
                    "は",
                    "を",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "お国はどちらですか。",
                "sentence": "お国 [ ___ ] どちらですか。",
                "blankParticle": "は",
                "thaiHint": "ประเทศของคุณคือประเทศไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'お国'",
                "choices": [
                    "も",
                    "に",
                    "より",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "会社はどちらですか。",
                "sentence": "会社 [ ___ ] どちらですか。",
                "blankParticle": "は",
                "thaiHint": "บริษัทของคุณคือที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ '会社'",
                "choices": [
                    "は",
                    "から",
                    "で",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "それはどこの電話ですか。",
                "sentence": "それ [ ___ ] どこの電話ですか。",
                "blankParticle": "は",
                "thaiHint": "นั่นเป็นโทรศัพท์ของที่ไหน/ยี่ห้อไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้ประธาน 'それ'",
                "choices": [
                    "は",
                    "を",
                    "へ",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "それはどこの電話ですか。",
                "sentence": "それはどこ [ ___ ] 電話ですか。",
                "blankParticle": "の",
                "thaiHint": "นั่นเป็นโทรศัพท์ของที่ไหน/ยี่ห้อไหนครับ/ค่ะ",
                "explanation": "ใช้ 'の' เชื่อมสถานที่/ประเทศกับสิ่งของ (โทรศัพท์ผลิตจากที่ไหน)",
                "choices": [
                    "が",
                    "も",
                    "の",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "それはどこのカメラですか。",
                "sentence": "それはどこ [ ___ ] カメラですか。",
                "blankParticle": "の",
                "thaiHint": "นั่นเป็นกล้องถ่ายรูปของประเทศไหนครับ/ค่ะ",
                "explanation": "ใช้ 'の' บอกแหล่งผลิตของสิ่งของ",
                "choices": [
                    "の",
                    "より",
                    "が",
                    "を"
                ],
                "correct": 0
            }
        ]
    },
    "4": {
        "title": "第 4 課 ไวยากรณ์",
        "sub": "คำช่วย から, まで, に, も (เวลาและการกระทำ)",
        "emoji": "⏰",
        "questions": [
            {
                "fullSentence": "休みは何日から何日までですか。",
                "sentence": "休みは何日 [ ___ ] 何日までですか。",
                "blankParticle": "から",
                "thaiHint": "วันหยุดตั้งแต่วันไหนถึงวันไหนครับ/ค่ะ",
                "explanation": "ใช้ 'から' (kara) แปลว่า 'ตั้งแต่ / จาก (จุดเริ่มต้นของเวลา)'",
                "choices": [
                    "を",
                    "から",
                    "まで",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "休みは何日から何日までですか。",
                "sentence": "休みは何日から何日 [ ___ ] ですか。",
                "blankParticle": "まで",
                "thaiHint": "วันหยุดตั้งแต่วันไหนถึงวันไหนครับ/ค่ะ",
                "explanation": "ใช้ 'まで' (made) แปลว่า 'ถึง / จนถึง (จุดสิ้นสุดของเวลา)'",
                "choices": [
                    "も",
                    "の",
                    "に",
                    "まで"
                ],
                "correct": 3
            },
            {
                "fullSentence": "郵便局は何時から何時までですか。",
                "sentence": "郵便局は何時 [ ___ ] 何時までですか。",
                "blankParticle": "から",
                "thaiHint": "ที่ทำการไปรษณีย์เปิดกี่โมงถึงกี่โมงครับ/ค่ะ",
                "explanation": "ใช้ 'から' ชี้เวลาเริ่มต้น",
                "choices": [
                    "の",
                    "から",
                    "へ",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "郵便局は何時から何時までですか。",
                "sentence": "郵便局は何時から何時 [ ___ ] ですか。",
                "blankParticle": "まで",
                "thaiHint": "ที่ทำการไปรษณีย์เปิดกี่โมงถึงกี่โมงครับ/ค่ะ",
                "explanation": "ใช้ 'まで' ชี้เวลาสิ้นสุด",
                "choices": [
                    "を",
                    "から",
                    "に",
                    "まで"
                ],
                "correct": 3
            },
            {
                "fullSentence": "何時から何時まで働きますか。",
                "sentence": "何時 [ ___ ] 何時まで働きますか。",
                "blankParticle": "から",
                "thaiHint": "ทำงานตั้งแต่กี่โมงถึงกี่โมงครับ/ค่ะ",
                "explanation": "ใช้ 'から' ชี้เวลาเริ่มต้นทำงาน",
                "choices": [
                    "は",
                    "と",
                    "の",
                    "から"
                ],
                "correct": 3
            },
            {
                "fullSentence": "何時から何時まで働きますか。",
                "sentence": "何時から何時 [ ___ ] 働きますか。",
                "blankParticle": "まで",
                "thaiHint": "ทำงานตั้งแต่กี่โมงถึงกี่โมงครับ/ค่ะ",
                "explanation": "ใช้ 'まで' ชี้เวลาสิ้นสุดการทำงาน",
                "choices": [
                    "と",
                    "まで",
                    "の",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "朝６時に起きますか。",
                "sentence": "朝６時 [ ___ ] 起きますか。",
                "blankParticle": "に",
                "thaiHint": "ตื่นนอนตอน 6 โมงเช้าใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'に' (ni) ชี้เวลาที่เกิดการกระทำที่แน่นอน (มีตัวเลขเวลา)",
                "choices": [
                    "まで",
                    "で",
                    "に",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今朝何時に起きましたか。",
                "sentence": "今朝何時 [ ___ ] 起きましたか。",
                "blankParticle": "に",
                "thaiHint": "เมื่อเช้านี้ตื่นนอนตอนกี่โมงครับ/ค่ะ",
                "explanation": "ใช้ 'に' ต่อท้ายคำถามเวลา '何時に'",
                "choices": [
                    "の",
                    "に",
                    "と",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "土曜日も勉強しますか。",
                "sentence": "土曜日 [ ___ ] 勉強しますか。",
                "blankParticle": "も",
                "thaiHint": "วันเสาร์ก็เรียนด้วยใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'も' แปลว่า 'ก็...ด้วยเหมือนกัน'",
                "choices": [
                    "より",
                    "も",
                    "を",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "タイの銀行は何時から何時までですか。",
                "sentence": "タイ [ ___ ] 銀行は何時から何時までですか。",
                "blankParticle": "の",
                "thaiHint": "ธนาคารของไทยเปิดตั้งแต่กี่โมงถึงกี่โมงครับ/ค่ะ",
                "explanation": "ใช้ 'の' เชื่อมคำนาม 'ธนาคารของไทย'",
                "choices": [
                    "の",
                    "まで",
                    "へ",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "勉強は何曜日から何曜日までですか。",
                "sentence": "勉強は何曜日 [ ___ ] 何曜日までですか。",
                "blankParticle": "から",
                "thaiHint": "เรียนตั้งแต่วันอะไรถึงวันอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'から' ชี้วันเริ่มต้น",
                "choices": [
                    "から",
                    "まで",
                    "に",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "勉強は何曜日から何曜日までですか。",
                "sentence": "勉強は何曜日から何曜日 [ ___ ] ですか。",
                "blankParticle": "まで",
                "thaiHint": "เรียนตั้งแต่วันอะไรถึงวันอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'まで' ชี้วันสิ้นสุด",
                "choices": [
                    "は",
                    "で",
                    "まで",
                    "が"
                ],
                "correct": 2
            }
        ]
    },
    "5": {
        "title": "第 5 課 ไวยากรณ์",
        "sub": "คำช่วย へ, で, と (การเดินทาง ยานพาหนะ และผู้ร่วมทาง)",
        "emoji": "🚅",
        "questions": [
            {
                "fullSentence": "明日どこへ行きますか。",
                "sentence": "明日どこ [ ___ ] 行きますか。",
                "blankParticle": "へ",
                "thaiHint": "พรุ่งนี้จะไปที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายปลายทางของการเดินทาง",
                "choices": [
                    "から",
                    "も",
                    "より",
                    "へ"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日学校へ行きますか。",
                "sentence": "明日学校 [ ___ ] 行きますか。",
                "blankParticle": "へ",
                "thaiHint": "พรุ่งนี้จะไปโรงเรียนใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายปลายทาง '学校へ行きます'",
                "choices": [
                    "まで",
                    "より",
                    "へ",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "明日家へ帰りますか。",
                "sentence": "明日家 [ ___ ] 帰りますか。",
                "blankParticle": "へ",
                "thaiHint": "พรุ่งนี้จะกลับบ้านใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายการกลับบ้าน '家へ帰ります'",
                "choices": [
                    "へ",
                    "は",
                    "より",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日とうきょうへ行きましたか。",
                "sentence": "昨日とうきょう [ ___ ] 行きましたか。",
                "blankParticle": "へ",
                "thaiHint": "เมื่อวานนี้ได้ไปโตเกียวมาใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายปลายทาง",
                "choices": [
                    "の",
                    "へ",
                    "まで",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "明日会社へ来ますか。",
                "sentence": "明日会社 [ ___ ] 来ますか。",
                "blankParticle": "へ",
                "thaiHint": "พรุ่งนี้จะมาที่บริษัทใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายปลายทางของการมา '会社へ来ます'",
                "choices": [
                    "へ",
                    "で",
                    "と",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "なにで会社へ行きますか。",
                "sentence": "なに [ ___ ] 会社へ行きますか。",
                "blankParticle": "で",
                "thaiHint": "เดินทางไปบริษัทด้วยอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'で' (de) ชี้วิธีการหรือยานพาหนะในการเดินทาง",
                "choices": [
                    "の",
                    "より",
                    "が",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日なにで日本へ行きますか。",
                "sentence": "明日なに [ ___ ] 日本へ行きますか。",
                "blankParticle": "で",
                "thaiHint": "พรุ่งนี้จะไปประเทศญี่ปุ่นด้วยพาหนะอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ยานพาหนะ",
                "choices": [
                    "で",
                    "が",
                    "は",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "明日なにで日本へ行きますか。",
                "sentence": "明日なにで日本 [ ___ ] 行きますか。",
                "blankParticle": "へ",
                "thaiHint": "พรุ่งนี้จะไปประเทศญี่ปุ่นด้วยพาหนะอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายปลายทาง '日本へ'",
                "choices": [
                    "へ",
                    "を",
                    "に",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "先週なにでベトナムへ行きましたか。",
                "sentence": "先週なにでベトナム [ ___ ] 行きましたか。",
                "blankParticle": "へ",
                "thaiHint": "สัปดาห์ที่แล้วไปเวียดนามด้วยพาหนะอะไรครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายปลายทาง",
                "choices": [
                    "が",
                    "と",
                    "より",
                    "へ"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日誰と学校へ行きますか。",
                "sentence": "明日誰 [ ___ ] 学校へ行きますか。",
                "blankParticle": "と",
                "thaiHint": "พรุ่งนี้จะไปโรงเรียนกับใครครับ/ค่ะ",
                "explanation": "ใช้ 'と' (to) ชี้บุคคลที่ร่วมเดินทางด้วย 'กับใคร'",
                "choices": [
                    "と",
                    "の",
                    "も",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "誰とスーパーへ行きますか。",
                "sentence": "誰 [ ___ ] スーパーへ行きますか。",
                "blankParticle": "と",
                "thaiHint": "จะไปซูเปอร์มาร์เก็ตกับใครครับ/ค่ะ",
                "explanation": "ใช้ 'と' ชี้ผู้ร่วมเดินทาง",
                "choices": [
                    "まで",
                    "を",
                    "から",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "家族と日本へ来ましたか。",
                "sentence": "家族 [ ___ ] 日本へ来ましたか。",
                "blankParticle": "と",
                "thaiHint": "มาประเทศญี่ปุ่นกับครอบครัวใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'と' แปลว่า 'กับ (ครอบครัว)'",
                "choices": [
                    "に",
                    "と",
                    "も",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "犬と公園をさんぽしますか。",
                "sentence": "犬 [ ___ ] 公園をさんぽしますか。",
                "blankParticle": "と",
                "thaiHint": "เดินเล่นที่สวนสาธารณะกับสุนัขใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'と' แปลว่า 'กับ (สุนัข)'",
                "choices": [
                    "と",
                    "で",
                    "へ",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "友達とおおさかへ行きましたか。",
                "sentence": "友達 [ ___ ] おおさかへ行きましたか。",
                "blankParticle": "と",
                "thaiHint": "ไปโอซาก้ากับเพื่อนใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'と' ชี้เพื่อนร่วมทาง '友達と'",
                "choices": [
                    "と",
                    "へ",
                    "で",
                    "より"
                ],
                "correct": 0
            }
        ]
    },
    "6": {
        "title": "第 6 課 ไวยากรณ์",
        "sub": "คำช่วย を, で, に (กรรมตรง สถานที่ทำกิจกรรม และการพบปะ)",
        "emoji": "🍱",
        "questions": [
            {
                "fullSentence": "昨日の晩だれと宿題をしましたか。",
                "sentence": "昨日の晩だれと宿題 [ ___ ] しましたか。",
                "blankParticle": "を",
                "thaiHint": "เมื่อคืนนี้ทำการบ้านกับใครครับ/ค่ะ",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ '宿題をします'",
                "choices": [
                    "を",
                    "で",
                    "まで",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日曜日だれに会いますか。",
                "sentence": "日曜日だれ [ ___ ] 会いますか。",
                "blankParticle": "に",
                "thaiHint": "วันอาทิตย์จะไปพบใครครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้บุคคลที่เราไปพบ '会います (พบกับ...)'",
                "choices": [
                    "に",
                    "まで",
                    "は",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "明日いっしょに映画を見ませんか。",
                "sentence": "明日いっしょに映画 [ ___ ] 見ませんか。",
                "blankParticle": "を",
                "thaiHint": "พรุ่งนี้ไปดูภาพยนตร์ด้วยกันไหมครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรงของการดู '映画を見ます'",
                "choices": [
                    "は",
                    "から",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今晩いっしょにビールを飲みませんか。",
                "sentence": "今晩いっしょにビール [ ___ ] 飲みませんか。",
                "blankParticle": "を",
                "thaiHint": "คืนนี้ไปดื่มเบียร์ด้วยกันไหมครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรงของการดื่ม 'ビールを飲みます'",
                "choices": [
                    "は",
                    "から",
                    "を",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "明日サッカーをしませんか。",
                "sentence": "明日サッカー [ ___ ] しませんか。",
                "blankParticle": "を",
                "thaiHint": "พรุ่งนี้เล่นฟุตบอลด้วยกันไหมครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กิจกรรมที่เล่น 'サッカーをします'",
                "choices": [
                    "を",
                    "で",
                    "は",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "いっしょに晩ごはんを食べませんか。",
                "sentence": "いっしょに晩ごはん [ ___ ] 食べませんか。",
                "blankParticle": "を",
                "thaiHint": "ทานอาหารเย็นด้วยกันไหมครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรงของอาหาร '晩ごはんを食べます'",
                "choices": [
                    "から",
                    "と",
                    "を",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "いつもテレビで日本語を勉強しますか。",
                "sentence": "いつもテレビ [ ___ ] 日本語を勉強しますか。",
                "blankParticle": "で",
                "thaiHint": "เรียนภาษาญี่ปุ่นผ่านทางโทรทัศน์เป็นประจำใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้สื่อ/เครื่องมือ 'テレビで (ผ่านทางทีวี)'",
                "choices": [
                    "で",
                    "は",
                    "に",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "いつもテレビで日本語を勉強しますか。",
                "sentence": "いつもテレビで日本語 [ ___ ] 勉強しますか。",
                "blankParticle": "を",
                "thaiHint": "เรียนภาษาญี่ปุ่นผ่านทางโทรทัศน์เป็นประจำใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรง '日本語を勉強します'",
                "choices": [
                    "へ",
                    "を",
                    "の",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "どこで昼ごはんを買いますか。",
                "sentence": "どこ [ ___ ] 昼ごはんを買いますか。",
                "blankParticle": "で",
                "thaiHint": "ซื้ออาหารกลางวันจากที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้สถานที่ทำกิจกรรมการซื้อ",
                "choices": [
                    "から",
                    "が",
                    "まで",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "どこで昼ごはんを買いますか。",
                "sentence": "どこで昼ごはん [ ___ ] 買いますか。",
                "blankParticle": "を",
                "thaiHint": "ซื้ออาหารกลางวันจากที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรง '昼ごはんを買います'",
                "choices": [
                    "も",
                    "を",
                    "に",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "毎日本を読みますか。",
                "sentence": "毎日本 [ ___ ] 読みますか。",
                "blankParticle": "を",
                "thaiHint": "อ่านหนังสือทุกวันใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรง '本を読みます'",
                "choices": [
                    "を",
                    "の",
                    "へ",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "どこでコーヒーを飲みますか。",
                "sentence": "どこ [ ___ ] コーヒーを飲みますか。",
                "blankParticle": "で",
                "thaiHint": "ดื่มกาแฟที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้สถานที่ทำกิจกรรมการดื่มกาแฟ",
                "choices": [
                    "で",
                    "の",
                    "より",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今朝誰にレポートを出しましたか。",
                "sentence": "今朝誰 [ ___ ] レポートを出しましたか。",
                "blankParticle": "に",
                "thaiHint": "เมื่อเช้านี้ส่งรายงานให้ใครครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้บุคคลผู้รับรายงาน '誰に出しましたか'",
                "choices": [
                    "へ",
                    "に",
                    "の",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今朝誰にレポートを出しましたか。",
                "sentence": "今朝誰にレポート [ ___ ] 出しましたか。",
                "blankParticle": "を",
                "thaiHint": "เมื่อเช้านี้ส่งรายงานให้ใครครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรงของสิ่งที่ส่ง 'レポートを出します'",
                "choices": [
                    "に",
                    "を",
                    "の",
                    "は"
                ],
                "correct": 1
            }
        ]
    },
    "7": {
        "title": "第 7 課 ไวยากรณ์",
        "sub": "คำช่วย で, に, を, は (อุปกรณ์ ภาษา การให้และการรับ)",
        "emoji": "🎁",
        "questions": [
            {
                "fullSentence": "タイ人はなにでごはんをたべますか。",
                "sentence": "タイ人はなに [ ___ ] ごはんをたべますか。",
                "blankParticle": "で",
                "thaiHint": "คนไทยรับประทานข้าวด้วยอุปกรณ์อะไรครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้เครื่องมือหรืออุปกรณ์ในการรับประทาน",
                "choices": [
                    "に",
                    "より",
                    "で",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "はしでラーメンをたべますか。",
                "sentence": "はし [ ___ ] ラーメンをたべますか。",
                "blankParticle": "で",
                "thaiHint": "รับประทานราเมงด้วยตะเกียบใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้อุปกรณ์ 'はしで (ด้วยตะเกียบ)'",
                "choices": [
                    "は",
                    "で",
                    "から",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "はしでラーメンをたべますか。",
                "sentence": "はしでラーメン [ ___ ] たべますか。",
                "blankParticle": "を",
                "thaiHint": "รับประทานราเมงด้วยตะเกียบใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรง 'ラーメンをたべます'",
                "choices": [
                    "を",
                    "も",
                    "に",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "「しんよう」はタイごでなんですか。",
                "sentence": "「しんよう」はタイご [ ___ ] なんですか。",
                "blankParticle": "で",
                "thaiHint": "คำว่า 'ชินโย' ในภาษาไทยคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ภาษาที่ใช้สื่อสาร 'タイごで (เป็นภาษาไทย)'",
                "choices": [
                    "が",
                    "へ",
                    "で",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "「ขอบคุณ」はにほんごでなんですか。",
                "sentence": "「ขอบคุณ」はにほんご [ ___ ] なんですか。",
                "blankParticle": "で",
                "thaiHint": "คำว่า 'ขอบคุณ' ในภาษาญี่ปุ่นคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ภาษา 'にほんごで (เป็นภาษาญี่ปุ่น)'",
                "choices": [
                    "は",
                    "まで",
                    "から",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "昨日の晩せんぱいに何を習いましたか。",
                "sentence": "昨日の晩せんぱい [ ___ ] 何を習いましたか。",
                "blankParticle": "に",
                "thaiHint": "เมื่อคืนนี้ได้เรียนรู้อะไรจากรุ่นพี่ครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้บุคคลที่เราเรียนรู้ด้วย 'せんぱいに習います'",
                "choices": [
                    "から",
                    "に",
                    "の",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "おかあさんのたんじょうびになにをあげますか。",
                "sentence": "おかあさんのたんじょうび [ ___ ] なにをあげますか。",
                "blankParticle": "に",
                "thaiHint": "ในวันเกิดของคุณแม่จะให้อะไรเป็นของขวัญครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้เวลา/โอกาสที่เกิดการให้",
                "choices": [
                    "から",
                    "も",
                    "に",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "去年の誕生日、だれにプレゼントをもらいましたか。",
                "sentence": "去年の誕生日、だれ [ ___ ] プレゼントをもらいましたか。",
                "blankParticle": "に",
                "thaiHint": "วันเกิดปีที่แล้วได้รับของขวัญจากใครครับ/ค่ะ",
                "explanation": "ใช้ 'に' (หรือ から) ชี้บุคคลที่เราได้รับสิ่งของมา 'だれにもらいましたか'",
                "choices": [
                    "まで",
                    "も",
                    "に",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "昨日かぞくにでんわをかけましたか。",
                "sentence": "昨日かぞく [ ___ ] でんわをかけましたか。",
                "blankParticle": "に",
                "thaiHint": "เมื่อวานนี้โทรศัพท์หาครอบครัวใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ผู้รับสายโทรศัพท์ 'かぞくにでんわをかけます'",
                "choices": [
                    "より",
                    "の",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "先生に何を借りましたか。",
                "sentence": "先生 [ ___ ] 何を借りましたか。",
                "blankParticle": "に",
                "thaiHint": "ขอยืมอะไรจากคุณครูครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้บุคคลที่เราขอยืมมา '先生に借ります'",
                "choices": [
                    "が",
                    "に",
                    "まで",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今朝、誰に花をあげましたか。",
                "sentence": "今朝、誰 [ ___ ] 花をあげましたか。",
                "blankParticle": "に",
                "thaiHint": "เมื่อเช้านี้มอบดอกไม้ให้ใครครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ผู้รับสิ่งของ '誰にあげます'",
                "choices": [
                    "に",
                    "へ",
                    "まで",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日せんぱいに何を貸しましたか。",
                "sentence": "昨日せんぱい [ ___ ] 何を貸しましたか。",
                "blankParticle": "に",
                "thaiHint": "เมื่อวานนี้ให้รุ่นพี่ยืมอะไรไปครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ผู้ที่ยืมของไปจากเรา 'せんぱいに貸します'",
                "choices": [
                    "へ",
                    "に",
                    "は",
                    "が"
                ],
                "correct": 1
            }
        ]
    },
    "8": {
        "title": "第 8 課 ไวยากรณ์",
        "sub": "คำช่วย で, は, の (คุณศัพท์ ขอบเขต และลักษณะ)",
        "emoji": "🏔️",
        "questions": [
            {
                "fullSentence": "ブリラムで有名な所はどこですか。",
                "sentence": "ブリラム [ ___ ] 有名な所はどこですか。",
                "blankParticle": "で",
                "thaiHint": "สถานที่ที่มีชื่อเสียงในบุรีรัมย์คือที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ขอบเขตของสถานที่ 'ブリラムで (ในบุรีรัมย์)'",
                "choices": [
                    "と",
                    "で",
                    "より",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "バンコクはどんな町ですか。",
                "sentence": "バンコク [ ___ ] どんな町ですか。",
                "blankParticle": "は",
                "thaiHint": "กรุงเทพฯ เป็นเมืองแบบไหนครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'バンコク'",
                "choices": [
                    "は",
                    "より",
                    "で",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日の晩どこでご飯を食べましたか。",
                "sentence": "昨日の晩どこ [ ___ ] ご飯を食べましたか。",
                "blankParticle": "で",
                "thaiHint": "เมื่อคืนนี้รับประทานอาหารที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้สถานที่ทำกิจกรรมรับประทานอาหาร",
                "choices": [
                    "を",
                    "で",
                    "も",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "この教室に新しい学生がいますか。",
                "sentence": "この教室 [ ___ ] 新しい学生がいますか。",
                "blankParticle": "に",
                "thaiHint": "ในห้องเรียนนี้มีนักเรียนใหม่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้สถานที่ที่มีคนอยู่ '教室にいます'",
                "choices": [
                    "に",
                    "へ",
                    "も",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "この教室に新しい学生がいますか。",
                "sentence": "この教室に新しい学生 [ ___ ] いますか。",
                "blankParticle": "が",
                "thaiHint": "ในห้องเรียนนี้มีนักเรียนใหม่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งมีชีวิตที่มีอยู่ '学生がいます'",
                "choices": [
                    "で",
                    "が",
                    "より",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたの学校は新しいですか。",
                "sentence": "あなたの学校 [ ___ ] 新しいですか。",
                "blankParticle": "は",
                "thaiHint": "โรงเรียนของคุณใหม่ใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'あなたの学校'",
                "choices": [
                    "が",
                    "まで",
                    "と",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "タイの食べ物は辛いですか。",
                "sentence": "タイ [ ___ ] 食べ物は辛いですか。",
                "blankParticle": "の",
                "thaiHint": "อาหารไทยมีรสชาติเผ็ดใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'の' เชื่อมคำนาม 'อาหารของไทย'",
                "choices": [
                    "と",
                    "は",
                    "を",
                    "の"
                ],
                "correct": 3
            },
            {
                "fullSentence": "タイの食べ物は辛いですか。",
                "sentence": "タイの食べ物 [ ___ ] 辛いですか。",
                "blankParticle": "は",
                "thaiHint": "อาหารไทยมีรสชาติเผ็ดใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อ 'タイの食べ物'",
                "choices": [
                    "に",
                    "まで",
                    "も",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語の勉強はどうですか。",
                "sentence": "日本語 [ ___ ] 勉強はどうですか。",
                "blankParticle": "の",
                "thaiHint": "การเรียนภาษาญี่ปุ่นเป็นอย่างไรบ้างครับ/ค่ะ",
                "explanation": "ใช้ 'の' เชื่อมคำนาม 'การเรียนภาษาญี่ปุ่น'",
                "choices": [
                    "まで",
                    "も",
                    "の",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "寮の生活はどうですか。",
                "sentence": "寮 [ ___ ] 生活はどうですか。",
                "blankParticle": "の",
                "thaiHint": "ชีวิตในหอพักเป็นอย่างไรบ้างครับ/ค่ะ",
                "explanation": "ใช้ 'の' เชื่อมคำนาม '寮の生活'",
                "choices": [
                    "も",
                    "が",
                    "の",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この教室でだれが一番きれいですか。",
                "sentence": "この教室 [ ___ ] だれが一番きれいですか。",
                "blankParticle": "で",
                "thaiHint": "ในห้องเรียนนี้ใครสวยที่สุดครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ขอบเขตของการเปรียบเทียบ '教室で (ในห้องเรียนนี้)'",
                "choices": [
                    "へ",
                    "で",
                    "まで",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "この教室でだれが一番きれいですか。",
                "sentence": "この教室でだれ [ ___ ] 一番きれいですか。",
                "blankParticle": "が",
                "thaiHint": "ในห้องเรียนนี้ใครสวยที่สุดครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้คำแสดงคำถาม 'だれが' ในประโยคเปรียบเทียบ",
                "choices": [
                    "に",
                    "が",
                    "と",
                    "を"
                ],
                "correct": 1
            }
        ]
    },
    "9": {
        "title": "第 9 課 ไวยากรณ์",
        "sub": "คำช่วย が, は (ความชอบ ความถนัด และการมีสิ่งของ)",
        "emoji": "🎨",
        "questions": [
            {
                "fullSentence": "どんなスポーツが好きですか。",
                "sentence": "どんなスポーツ [ ___ ] 好きですか。",
                "blankParticle": "が",
                "thaiHint": "ชอบกีฬาประเภทไหนครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งที่ชอบ '好き (ชอบ)'",
                "choices": [
                    "の",
                    "より",
                    "と",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "英語がよく分かりますか。",
                "sentence": "英語 [ ___ ] よく分かりますか。",
                "blankParticle": "が",
                "thaiHint": "เข้าใจภาษาอังกฤษเป็นอย่างดีใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้เป้าหมายที่เข้าใจ '分かります (เข้าใจ)'",
                "choices": [
                    "と",
                    "が",
                    "は",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは車がありますか。",
                "sentence": "あなた [ ___ ] 車がありますか。",
                "blankParticle": "は",
                "thaiHint": "คุณมีรถยนต์ใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้หัวข้อของบุคคล",
                "choices": [
                    "で",
                    "へ",
                    "から",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは車がありますか。",
                "sentence": "あなたは車 [ ___ ] ありますか。",
                "blankParticle": "が",
                "thaiHint": "คุณมีรถยนต์ใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งของที่ครอบครองหรือมีอยู่ '車があります'",
                "choices": [
                    "の",
                    "に",
                    "を",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは犬が好きですか。",
                "sentence": "あなたは犬 [ ___ ] 好きですか。",
                "blankParticle": "が",
                "thaiHint": "คุณชอบสุนัขใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งที่ชอบ '犬が好き'",
                "choices": [
                    "で",
                    "が",
                    "と",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたはねこが嫌いですか。",
                "sentence": "あなたはねこ [ ___ ] 嫌いですか。",
                "blankParticle": "が",
                "thaiHint": "คุณเกลียดแมวใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งที่ไม่ชอบ '嫌い (เกลียด)'",
                "choices": [
                    "を",
                    "に",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ギターが上手ですか。",
                "sentence": "ギター [ ___ ] 上手ですか。",
                "blankParticle": "が",
                "thaiHint": "เล่นกีตาร์เก่งใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้ทักษะความถนัด '上手 (เก่ง)'",
                "choices": [
                    "も",
                    "が",
                    "より",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "料理が上手ですか。",
                "sentence": "料理 [ ___ ] 上手ですか。",
                "blankParticle": "が",
                "thaiHint": "ทำอาหารเก่งใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้ความสามารถ '上手 (เก่ง)'",
                "choices": [
                    "を",
                    "が",
                    "へ",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本語がだいたい分かりますか。",
                "sentence": "日本語 [ ___ ] だいたい分かりますか。",
                "blankParticle": "が",
                "thaiHint": "เข้าใจภาษาญี่ปุ่นพอประมาณใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้เป้าหมายที่เข้าใจ '分かります'",
                "choices": [
                    "へ",
                    "から",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "どうしてこの学校で勉強しますか。",
                "sentence": "どうしてこの学校 [ ___ ] 勉強しますか。",
                "blankParticle": "で",
                "thaiHint": "ทำไมถึงเรียนที่โรงเรียนแห่งนี้ครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้สถานที่ทำกิจกรรมการเรียน",
                "choices": [
                    "より",
                    "が",
                    "は",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "どうして日本へ行きますか。",
                "sentence": "どうして日本 [ ___ ] 行きますか。",
                "blankParticle": "へ",
                "thaiHint": "ทำไมถึงจะไปประเทศญี่ปุ่นครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายปลายทาง",
                "choices": [
                    "と",
                    "より",
                    "まで",
                    "へ"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたはお金がありますか。",
                "sentence": "あなたはお金 [ ___ ] ありますか。",
                "blankParticle": "が",
                "thaiHint": "คุณมีเงินใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งของที่มีอยู่ 'お金があります'",
                "choices": [
                    "も",
                    "に",
                    "の",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今晩ようじがありますか。",
                "sentence": "今晩ようじ [ ___ ] ありますか。",
                "blankParticle": "が",
                "thaiHint": "คืนนี้มีธุระใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งที่มี 'ようじがあります'",
                "choices": [
                    "へ",
                    "が",
                    "を",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは歌が上手ですか。",
                "sentence": "あなたは歌 [ ___ ] 上手ですか。",
                "blankParticle": "が",
                "thaiHint": "คุณร้องเพลงเก่งใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้ความถนัด '上手'",
                "choices": [
                    "へ",
                    "で",
                    "まで",
                    "が"
                ],
                "correct": 3
            }
        ]
    },
    "10": {
        "title": "第 10 課 ไวยากรณ์",
        "sub": "คำช่วย に, が (ตำแหน่งและการมีอยู่ของคน/สัตว์/สิ่งของ)",
        "emoji": "🐈",
        "questions": [
            {
                "fullSentence": "あなたの家に犬がいますか。",
                "sentence": "あなたの家 [ ___ ] 犬がいますか。",
                "blankParticle": "に",
                "thaiHint": "ที่บ้านของคุณมีสุนัขไหมครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้สถานที่ที่มีสิ่งมีชีวิตอาศัยอยู่ '家にいます'",
                "choices": [
                    "から",
                    "まで",
                    "に",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたの家に犬がいますか。",
                "sentence": "あなたの家に犬 [ ___ ] いますか。",
                "blankParticle": "が",
                "thaiHint": "ที่บ้านของคุณมีสุนัขไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งมีชีวิตที่มีอยู่ '犬がいます'",
                "choices": [
                    "は",
                    "が",
                    "を",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたの部屋に机がありますか。",
                "sentence": "あなたの部屋 [ ___ ] 机がありますか。",
                "blankParticle": "に",
                "thaiHint": "ในห้องของคุณมีโต๊ะไหมครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้สถานที่ที่มีสิ่งของตั้งอยู่ '部屋にあります'",
                "choices": [
                    "に",
                    "へ",
                    "まで",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたの部屋に机がありますか。",
                "sentence": "あなたの部屋に机 [ ___ ] ありますか。",
                "blankParticle": "が",
                "thaiHint": "ในห้องของคุณมีโต๊ะไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งของที่ไม่มีชีวิตที่มีอยู่ '机があります'",
                "choices": [
                    "が",
                    "まで",
                    "より",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "教室の中に学生が何人いますか。",
                "sentence": "教室の中 [ ___ ] 学生が何人いますか。",
                "blankParticle": "に",
                "thaiHint": "ในห้องเรียนมีนักเรียนอยู่กี่คนครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ตำแหน่งสถานที่ '教室の中に'",
                "choices": [
                    "から",
                    "より",
                    "が",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "教室の中に学生が何人いますか。",
                "sentence": "教室の中に学生 [ ___ ] 何人いますか。",
                "blankParticle": "が",
                "thaiHint": "ในห้องเรียนมีนักเรียนอยู่กี่คนครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้คนที่มีอยู่ '学生がいます'",
                "choices": [
                    "に",
                    "から",
                    "が",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "机の上に何がありますか。",
                "sentence": "机の上 [ ___ ] 何がありますか。",
                "blankParticle": "に",
                "thaiHint": "บนโต๊ะมีอะไรอยู่ครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ตำแหน่ง '机の上に'",
                "choices": [
                    "から",
                    "を",
                    "まで",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "机の上に何がありますか。",
                "sentence": "机の上に何 [ ___ ] ありますか。",
                "blankParticle": "が",
                "thaiHint": "บนโต๊ะมีอะไรอยู่ครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งที่มีอยู่ '何がありますか'",
                "choices": [
                    "から",
                    "へ",
                    "が",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "机の下に何がありますか。",
                "sentence": "机の下 [ ___ ] 何がありますか。",
                "blankParticle": "に",
                "thaiHint": "ใต้โต๊ะมีอะไรอยู่ครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ตำแหน่งใต้โต๊ะ '机の下に'",
                "choices": [
                    "に",
                    "から",
                    "も",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたの前に誰がいますか。",
                "sentence": "あなたの前 [ ___ ] 誰がいますか。",
                "blankParticle": "に",
                "thaiHint": "ข้างหน้าของคุณมีใครอยู่ครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ตำแหน่งทิศทาง '前に'",
                "choices": [
                    "も",
                    "の",
                    "に",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたの前に誰がいますか。",
                "sentence": "あなたの前に誰 [ ___ ] いますか。",
                "blankParticle": "が",
                "thaiHint": "ข้างหน้าของคุณมีใครอยู่ครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้คำแสดงคำถาม '誰がいますか'",
                "choices": [
                    "の",
                    "から",
                    "まで",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今、Ａさんはどこにいますか。",
                "sentence": "今、Ａさんはどこ [ ___ ] いますか。",
                "blankParticle": "に",
                "thaiHint": "ตอนนี้คุณเออยู่ที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ตำแหน่งที่บุคคลอยู่ 'どこにいますか'",
                "choices": [
                    "で",
                    "より",
                    "に",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "トイレはどこにありますか。",
                "sentence": "トイレはどこ [ ___ ] ありますか。",
                "blankParticle": "に",
                "thaiHint": "ห้องน้ำตั้งอยู่ที่ไหนครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ตำแหน่งที่สิ่งก่อสร้างตั้งอยู่ 'どこにありますか'",
                "choices": [
                    "は",
                    "を",
                    "に",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ブリラム県に公園がありますか。",
                "sentence": "ブリラム県 [ ___ ] 公園がありますか。",
                "blankParticle": "に",
                "thaiHint": "ที่จังหวัดบุรีรัมย์มีสวนสาธารณะไหมครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้สถานที่ที่มีอยู่",
                "choices": [
                    "を",
                    "に",
                    "まで",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ブリラム県に公園がありますか。",
                "sentence": "ブリラム県に公園 [ ___ ] ありますか。",
                "blankParticle": "が",
                "thaiHint": "ที่จังหวัดบุรีรัมย์มีสวนสาธารณะไหมครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้สิ่งของหรือสถานที่ที่มีอยู่ '公園があります'",
                "choices": [
                    "が",
                    "まで",
                    "へ",
                    "で"
                ],
                "correct": 0
            }
        ]
    },
    "11": {
        "title": "第 11 課 ไวยากรณ์",
        "sub": "คำช่วย に, が, を, から, まで (การนับจำนวน ลักษณนาม และระยะเวลา)",
        "emoji": "📮",
        "questions": [
            {
                "fullSentence": "この教室に学生が何人いますか。",
                "sentence": "この教室 [ ___ ] 学生が何人いますか。",
                "blankParticle": "に",
                "thaiHint": "ในห้องเรียนนี้มีนักเรียนกี่คนครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้สถานที่ที่มีคนอยู่",
                "choices": [
                    "へ",
                    "まで",
                    "から",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "この教室に学生が何人いますか。",
                "sentence": "この教室に学生 [ ___ ] 何人いますか。",
                "blankParticle": "が",
                "thaiHint": "ในห้องเรียนนี้มีนักเรียนกี่คนครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้คำนาม '学生' ก่อนบอกลักษณนาม",
                "choices": [
                    "で",
                    "より",
                    "から",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "毎日何時間日本語を勉強しますか。",
                "sentence": "毎日何時間日本語 [ ___ ] 勉強しますか。",
                "blankParticle": "を",
                "thaiHint": "เรียนภาษาญี่ปุ่นวันละกี่ชั่วโมงครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรง '日本語を勉強します'",
                "choices": [
                    "を",
                    "で",
                    "まで",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "タイから日本までどのくらいかかりますか。",
                "sentence": "タイ [ ___ ] 日本までどのくらいかかりますか。",
                "blankParticle": "から",
                "thaiHint": "จากไทยถึงญี่ปุ่นใช้เวลาประมาณเท่าไรครับ/ค่ะ",
                "explanation": "ใช้ 'から' ชี้จุดเริ่มต้น 'タイから (จากไทย)'",
                "choices": [
                    "の",
                    "に",
                    "と",
                    "から"
                ],
                "correct": 3
            },
            {
                "fullSentence": "タイから日本までどのくらいかかりますか。",
                "sentence": "タイから日本 [ ___ ] どのくらいかかりますか。",
                "blankParticle": "まで",
                "thaiHint": "จากไทยถึงญี่ปุ่นใช้เวลาประมาณเท่าไรครับ/ค่ะ",
                "explanation": "ใช้ 'まで' ชี้จุดสิ้นสุด '日本まで (ถึงญี่ปุ่น)'",
                "choices": [
                    "より",
                    "が",
                    "まで",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "1日に何回シャワーを浴びますか。",
                "sentence": "1日 [ ___ ] 何回シャワーを浴びますか。",
                "blankParticle": "に",
                "thaiHint": "ในหนึ่งวันอาบน้ำกี่ครั้งครับ/ค่ะ",
                "explanation": "ใช้ 'に' ต่อท้ายหน่วยเวลาบอกความถี่ '1日に (ใน 1 วัน)'",
                "choices": [
                    "が",
                    "を",
                    "に",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "1日に何回シャワーを浴びますか。",
                "sentence": "1日に何回シャワー [ ___ ] 浴びますか。",
                "blankParticle": "を",
                "thaiHint": "ในหนึ่งวันอาบน้ำกี่ครั้งครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรมตรง 'シャワーを浴びます'",
                "choices": [
                    "と",
                    "を",
                    "より",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "1ヶ月に何回映画を見ますか。",
                "sentence": "1ヶ月 [ ___ ] 何回映画を見ますか。",
                "blankParticle": "に",
                "thaiHint": "ใน 1 เดือนดูหนังประมาณกี่ครั้งครับ/ค่ะ",
                "explanation": "ใช้ 'に' บอกความถี่ต่อหน่วยเวลา '1ヶ月に (ต่อหนึ่งเดือน)'",
                "choices": [
                    "で",
                    "の",
                    "と",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "1ヶ月に何回映画を見ますか。",
                "sentence": "1ヶ月に何回映画 [ ___ ] 見ますか。",
                "blankParticle": "を",
                "thaiHint": "ใน 1 เดือนดูหนังประมาณกี่ครั้งครับ/ค่ะ",
                "explanation": "ใช้ 'を' ชี้กรรม '映画を見ます'",
                "choices": [
                    "も",
                    "の",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "1週間に何回セブンイレブンへ行きますか。",
                "sentence": "1週間 [ ___ ] 何回セブンイレブンへ行きますか。",
                "blankParticle": "に",
                "thaiHint": "ใน 1 สัปดาห์ไปเซเว่นอีเลฟเว่นกี่ครั้งครับ/ค่ะ",
                "explanation": "ใช้ 'に' กำหนดอัตราส่วนความถี่ '1週間に'",
                "choices": [
                    "に",
                    "も",
                    "まで",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "1週間に何回セブンイレブンへ行きますか。",
                "sentence": "1週間に何回セブンイレブン [ ___ ] 行きますか。",
                "blankParticle": "へ",
                "thaiHint": "ใน 1 สัปดาห์ไปเซเว่นอีเลฟเว่นกี่ครั้งครับ/ค่ะ",
                "explanation": "ใช้ 'へ' ชี้จุดหมายปลายทาง",
                "choices": [
                    "は",
                    "を",
                    "へ",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この服はいくらくらいで買いましたか。",
                "sentence": "この服はいくらくらい [ ___ ] 買いましたか。",
                "blankParticle": "で",
                "thaiHint": "ซื้อเสื้อตัวนี้มาในราคาประมาณเท่าไรครับ/ค่ะ",
                "explanation": "ใช้ 'で' บอกขอบเขตจำนวนเงินหรือราคาที่ซื้อมา",
                "choices": [
                    "で",
                    "と",
                    "が",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "1日に何回恋人に電話をかけますか。",
                "sentence": "1日に何回恋人 [ ___ ] 電話をかけますか。",
                "blankParticle": "に",
                "thaiHint": "โทรหาคนรักวันละกี่ครั้งครับ/ค่ะ",
                "explanation": "ใช้ 'に' ชี้ผู้รับสายโทรศัพท์ '恋人に電話をかけます'",
                "choices": [
                    "に",
                    "まで",
                    "より",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本で何年働きますか。",
                "sentence": "日本 [ ___ ] 何年働きますか。",
                "blankParticle": "で",
                "thaiHint": "จะทำงานที่ประเทศญี่ปุ่นกี่ปีครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้สถานที่ทำกิจกรรมการทำงาน '日本で働きます'",
                "choices": [
                    "で",
                    "から",
                    "を",
                    "へ"
                ],
                "correct": 0
            }
        ]
    },
    "12": {
        "title": "第 12 課 ไวยากรณ์",
        "sub": "คำช่วย は, より, で, と (การเปรียบเทียบขั้นกว่าและขั้นสุด)",
        "emoji": "⚖️",
        "questions": [
            {
                "fullSentence": "飛行機は船より早いですか。",
                "sentence": "飛行機 [ ___ ] 船より早いですか。",
                "blankParticle": "は",
                "thaiHint": "เครื่องบินเร็วกว่าเรือใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'は' ชี้ประธานหลักที่นำมาเปรียบเทียบ",
                "choices": [
                    "は",
                    "から",
                    "を",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "飛行機は船より早いですか。",
                "sentence": "飛行機は船 [ ___ ] 早いですか。",
                "blankParticle": "より",
                "thaiHint": "เครื่องบินเร็วกว่าเรือใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'より' (yori) แปลว่า 'กว่า' (เปรียบเทียบขั้นกว่า)",
                "choices": [
                    "は",
                    "を",
                    "の",
                    "より"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたの家から学校まで遠いですか。",
                "sentence": "あなたの家 [ ___ ] 学校まで遠いですか。",
                "blankParticle": "から",
                "thaiHint": "จากบ้านของคุณถึงโรงเรียนไกลไหมครับ/ค่ะ",
                "explanation": "ใช้ 'から' ชี้จุดเริ่มต้น '家から'",
                "choices": [
                    "が",
                    "で",
                    "から",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたの家から学校まで遠いですか。",
                "sentence": "あなたの家から学校 [ ___ ] 遠いですか。",
                "blankParticle": "まで",
                "thaiHint": "จากบ้านของคุณถึงโรงเรียนไกลไหมครับ/ค่ะ",
                "explanation": "ใช้ 'まで' ชี้จุดสิ้นสุด '学校まで'",
                "choices": [
                    "へ",
                    "まで",
                    "の",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "この教室の中でだれが一番背が高いですか。",
                "sentence": "この教室の中 [ ___ ] だれが一番背が高いですか。",
                "blankParticle": "で",
                "thaiHint": "ในบรรดาคนในห้องเรียนนี้ใครตัวสูงที่สุดครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ขอบเขตการเปรียบเทียบขั้นสุด '教室の中で (ในบรรดา...)'",
                "choices": [
                    "で",
                    "まで",
                    "が",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "この教室の中でだれが一番背が高いですか。",
                "sentence": "この教室の中でだれ [ ___ ] 一番背が高いですか。",
                "blankParticle": "が",
                "thaiHint": "ในบรรดาคนในห้องเรียนนี้ใครตัวสูงที่สุดครับ/ค่ะ",
                "explanation": "ใช้ 'が' ชี้คำแสดงคำถาม 'だれが' ในประโยคเปรียบเทียบ",
                "choices": [
                    "から",
                    "まで",
                    "が",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "スポーツでなにが一番好きですか。",
                "sentence": "スポーツ [ ___ ] なにが一番好きですか。",
                "blankParticle": "で",
                "thaiHint": "ในบรรดากีฬาทั้งหมดชอบอะไรมากที่สุดครับ/ค่ะ",
                "explanation": "ใช้ 'で' กำหนดขอบเขตกลุ่มประเภท 'スポーツで'",
                "choices": [
                    "へ",
                    "で",
                    "が",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "犬とねことどちらが好きですか。",
                "sentence": "犬 [ ___ ] ねことどちらが好きですか。",
                "blankParticle": "と",
                "thaiHint": "ระหว่างสุนัขกับแมวชอบอย่างไหนมากกว่ากันครับ/ค่ะ",
                "explanation": "ใช้ 'と' เชื่อมคำนามที่นำมาเปรียบเทียบ 'AとBとどちら'",
                "choices": [
                    "は",
                    "に",
                    "の",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "犬とねことどちらが好きですか。",
                "sentence": "犬とねこ [ ___ ] どちらが好きですか。",
                "blankParticle": "と",
                "thaiHint": "ระหว่างสุนัขกับแมวชอบอย่างไหนมากกว่ากันครับ/ค่ะ",
                "explanation": "ใช้ 'と' ต่อท้ายตัวเลือกที่สอง 'ねことどちら'",
                "choices": [
                    "から",
                    "へ",
                    "と",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "犬とねことどちらが好きですか。",
                "sentence": "犬とねことどちら [ ___ ] 好きですか。",
                "blankParticle": "が",
                "thaiHint": "ระหว่างสุนัขกับแมวชอบอย่างไหนมากกว่ากันครับ/ค่ะ",
                "explanation": "ใช้ 'が' หน้าคำว่า '好き'",
                "choices": [
                    "が",
                    "に",
                    "まで",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "タイでいつが一番暑いですか。",
                "sentence": "タイ [ ___ ] いつが一番暑いですか。",
                "blankParticle": "で",
                "thaiHint": "ที่ประเทศไทยช่วงเวลาไหนร้อนที่สุดครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ขอบเขตสถานที่ 'タイで (ในไทย)'",
                "choices": [
                    "へ",
                    "が",
                    "より",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "家族でだれが一番元気ですか。",
                "sentence": "家族 [ ___ ] だれが一番元気ですか。",
                "blankParticle": "で",
                "thaiHint": "ในครอบครัวใครแข็งแรงร่าเริงที่สุดครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ขอบเขตกลุ่มคน '家族で (ในครอบครัว)'",
                "choices": [
                    "を",
                    "で",
                    "へ",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "せんぷうきはエアコンより涼しいですか。",
                "sentence": "せんぷうきはエアコン [ ___ ] 涼しいですか。",
                "blankParticle": "より",
                "thaiHint": "พัดลมเย็นกว่าเครื่องปรับอากาศไหมครับ/ค่ะ",
                "explanation": "ใช้ 'より' แปลว่า 'กว่า' ในการเปรียบเทียบ",
                "choices": [
                    "に",
                    "の",
                    "まで",
                    "より"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本で一番高い山はなんですか。",
                "sentence": "日本 [ ___ ] 一番高い山はなんですか。",
                "blankParticle": "で",
                "thaiHint": "ภูเขาที่สูงที่สุดในประเทศญี่ปุ่นคืออะไรครับ/ค่ะ",
                "explanation": "ใช้ 'で' ชี้ขอบเขตประเทศ '日本で (ในญี่ปุ่น)'",
                "choices": [
                    "は",
                    "まで",
                    "で",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "レモンはトマトよりすっぱいですか。",
                "sentence": "レモンはトマト [ ___ ] すっぱいですか。",
                "blankParticle": "より",
                "thaiHint": "มะนาวเปรี้ยวกว่ามะเขือเทศใช่ไหมครับ/ค่ะ",
                "explanation": "ใช้ 'より' แปลว่า 'กว่า' (เปรียบเทียบ)",
                "choices": [
                    "より",
                    "と",
                    "に",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "豚肉ととり肉とどっちがおいしいですか。",
                "sentence": "豚肉 [ ___ ] とり肉とどっちがおいしいですか。",
                "blankParticle": "と",
                "thaiHint": "ระหว่างเนื้อหมูกับเนื้อไก่อันไหนอร่อยกว่ากันครับ/ค่ะ",
                "explanation": "ใช้ 'と' เชื่อมการเปรียบเทียบตัวเลือก 'AとBと'",
                "choices": [
                    "が",
                    "を",
                    "と",
                    "まで"
                ],
                "correct": 2
            }
        ]
    },
    "13": {
        "title": "第 13 課 ไวยากรณ์",
        "sub": "欲しい, ～たい, に行きます (ความต้องการและเป้าหมาย)",
        "emoji": "🍱",
        "questions": [
            {
                "fullSentence": "あなたは友達が欲しいですか。",
                "sentence": "あなたは友達 [ ___ ] 欲しいですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: あなたは友達が欲しいですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "へ",
                    "が",
                    "に",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今、何が一番欲しいですか。",
                "sentence": "今、何 [ ___ ] 一番欲しいですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今、何が一番欲しいですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "が",
                    "から",
                    "に",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今週の日曜日は何をしたいですか。",
                "sentence": "今週の日曜日は何 [ ___ ] したいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今週の日曜日は何をしたいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "へ",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本で何を買いたいですか。",
                "sentence": "日本で何 [ ___ ] 買いたいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本で何を買いたいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "より",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "来週の土曜日、映画を見に行きませんか。",
                "sentence": "来週の土曜日、映画を見 [ ___ ] 行きませんか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 来週の土曜日、映画を見に行きませんか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "から",
                    "に",
                    "も",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今晩、どこへご飯を食べに行きたいですか。",
                "sentence": "今晩、どこへご飯 [ ___ ] 食べに行きたいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今晩、どこへご飯を食べに行きたいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "も",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "休みの日はどこへ行きましたか。",
                "sentence": "休みの日はどこ [ ___ ] 行きましたか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 休みの日はどこへ行きましたか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "を",
                    "で",
                    "まで",
                    "へ"
                ],
                "correct": 3
            },
            {
                "fullSentence": "寂しい時はどこへ行きたいですか。",
                "sentence": "寂しい時はどこ [ ___ ] 行きたいですか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 寂しい時はどこへ行きたいですか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "は",
                    "から",
                    "へ",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "来月日本へ遊びに行きませんか。",
                "sentence": "来月日本へ遊び [ ___ ] 行きませんか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 来月日本へ遊びに行きませんか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "より",
                    "は",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本へ何を食べに行きたいですか。",
                "sentence": "日本へ何 [ ___ ] 食べに行きたいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本へ何を食べに行きたいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "へ",
                    "を",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本に着いたら誰が迎えに来ますか。",
                "sentence": "日本に着いたら誰が迎え [ ___ ] 来ますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本に着いたら誰が迎えに来ますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "を",
                    "の",
                    "に",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この教室は狭いですか。",
                "sentence": "この教室は狭い [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: この教室は狭いですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "を",
                    "で",
                    "の",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "連休はどこへ行きたいですか。",
                "sentence": "連休はどこ [ ___ ] 行きたいですか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 連休はどこへ行きたいですか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "へ",
                    "まで",
                    "を",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日、何を習いましたか。",
                "sentence": "昨日、何 [ ___ ] 習いましたか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 昨日、何を習いましたか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "と",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "どんな映画を見に行きたいですか。",
                "sentence": "どんな映画 [ ___ ] 見に行きたいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: どんな映画を見に行きたいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "と",
                    "を",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今、誰に会いに行きたいですか。",
                "sentence": "今、誰に会い [ ___ ] 行きたいですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 今、誰に会いに行きたいですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "は",
                    "の",
                    "に",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "週末は何をしますか。",
                "sentence": "週末は何 [ ___ ] しますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 週末は何をしますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "で",
                    "の",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "お金があったら新しい車が欲しいですか。",
                "sentence": "お金 [ ___ ] あったら新しい車が欲しいですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: お金があったら新しい車が欲しいですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "が",
                    "で",
                    "まで",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ホテルのプールへ泳ぎに行きたいですか。",
                "sentence": "ホテルのプールへ泳ぎ [ ___ ] 行きたいですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ホテルのプールへ泳ぎに行きたいですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "と",
                    "に",
                    "まで",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "いつ日本へ働きに行きますか。",
                "sentence": "いつ日本へ働き [ ___ ] 行きますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: いつ日本へ働きに行きますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "へ",
                    "まで",
                    "に",
                    "も"
                ],
                "correct": 2
            }
        ]
    },
    "14": {
        "title": "第 14 課 ไวยากรณ์",
        "sub": "て-form, ～てください, ～ています (การขอร้องและกำลังกระทำ)",
        "emoji": "🌧️",
        "questions": [
            {
                "fullSentence": "毎日、シャワーを浴びていますか。",
                "sentence": "毎日、シャワー [ ___ ] 浴びていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日、シャワーを浴びていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "まで",
                    "から",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "自分の名前を教えてください。",
                "sentence": "自分の名前 [ ___ ] 教えてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 自分の名前を教えてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "の",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "電気をつけてください。",
                "sentence": "電気 [ ___ ] つけてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 電気をつけてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "を",
                    "に",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "エアコンを消してください。",
                "sentence": "エアコン [ ___ ] 消してください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: エアコンを消してください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "を",
                    "から",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "Ａさんを呼んでください。",
                "sentence": "Ａさん [ ___ ] 呼んでください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: Ａさんを呼んでください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "が",
                    "を",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "毎日日本語を勉強していますか。",
                "sentence": "毎日日本語 [ ___ ] 勉強していますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日日本語を勉強していますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "へ",
                    "を",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今、雨が降っていますか。",
                "sentence": "今、雨 [ ___ ] 降っていますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今、雨が降っていますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "に",
                    "から",
                    "まで",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今、何をしていますか。",
                "sentence": "今、何 [ ___ ] していますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今、何をしていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "の",
                    "で",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "この漢字の読みかたを教えてください。",
                "sentence": "この漢字の読みかた [ ___ ] 教えてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: この漢字の読みかたを教えてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "の",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ボールペンで名前を書いてください。",
                "sentence": "ボールペンで名前 [ ___ ] 書いてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ボールペンで名前を書いてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "を",
                    "へ",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ここに歩いて来てください。",
                "sentence": "ここ [ ___ ] 歩いて来てください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ここに歩いて来てください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "も",
                    "は",
                    "を",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "窓を開けてください。",
                "sentence": "窓 [ ___ ] 開けてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 窓を開けてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "に",
                    "も",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "窓をちゃんと閉めてください。",
                "sentence": "窓 [ ___ ] ちゃんと閉めてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 窓をちゃんと閉めてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "が",
                    "は",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "そのノートを取ってください。",
                "sentence": "そのノート [ ___ ] 取ってください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: そのノートを取ってください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "も",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたの手を見せてください。",
                "sentence": "あなたの手 [ ___ ] 見せてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたの手を見せてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "の",
                    "に",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今、お金を持っていますか。",
                "sentence": "今、お金 [ ___ ] 持っていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今、お金を持っていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "に",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今、座っていますか。",
                "sentence": "今、座っていますか [ ___ ] 今、座っていますか。",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 今、座っていますか。",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "へ",
                    "は",
                    "が",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "毎日、お母さんに電話をかけていますか。",
                "sentence": "毎日、お母さん [ ___ ] 電話をかけていますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 毎日、お母さんに電話をかけていますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "から",
                    "に",
                    "を",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたの住所を教えてください。",
                "sentence": "あなたの住所 [ ___ ] 教えてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたの住所を教えてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "で",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "セブンイレブンの行き方を教えてください。",
                "sentence": "セブンイレブンの行き方 [ ___ ] 教えてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: セブンイレブンの行き方を教えてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "に",
                    "へ",
                    "から"
                ],
                "correct": 0
            }
        ]
    },
    "15": {
        "title": "第 15 課 ไวยากรณ์",
        "sub": "～てもいいですか, ～てはいけません (การขออนุญาตและข้อห้าม)",
        "emoji": "🚭",
        "questions": [
            {
                "fullSentence": "このノートを机に置いてもいいですか。",
                "sentence": "このノートを机 [ ___ ] 置いてもいいですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: このノートを机に置いてもいいですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "で",
                    "に",
                    "まで",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "部屋の中で料理を作ってもいいですか。",
                "sentence": "部屋の中 [ ___ ] 料理を作ってもいいですか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 部屋の中で料理を作ってもいいですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "も",
                    "が",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "部屋の中でたばこを吸ってはいけませんか。",
                "sentence": "部屋の中 [ ___ ] たばこを吸ってはいけませんか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 部屋の中でたばこを吸ってはいけませんか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "から",
                    "へ",
                    "の",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今、結婚していますか。",
                "sentence": "今、結婚していますか [ ___ ] 今、結婚していますか。",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 今、結婚していますか。",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "が",
                    "は",
                    "へ",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "机の上に座ってもいいですか。",
                "sentence": "机の上 [ ___ ] 座ってもいいですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 机の上に座ってもいいですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "は",
                    "へ",
                    "が",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "寮の中でビールを飲んでもいいですか。",
                "sentence": "寮の中 [ ___ ] ビールを飲んでもいいですか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 寮の中でビールを飲んでもいいですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "が",
                    "で",
                    "の",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "学校の前に自分の荷物を置いてもいいですか。",
                "sentence": "学校の前に自分の荷物 [ ___ ] 置いてもいいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 学校の前に自分の荷物を置いてもいいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "の",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "Ａさんを知っていますか。",
                "sentence": "Ａさん [ ___ ] 知っていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: Ａさんを知っていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "に",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ホワイトボードにニックネームを書いてください。",
                "sentence": "ホワイトボード [ ___ ] ニックネームを書いてください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ホワイトボードにニックネームを書いてください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "まで",
                    "に",
                    "より",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたはカメラを持っていますか。",
                "sentence": "あなたはカメラ [ ___ ] 持っていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたはカメラを持っていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "に",
                    "と",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "パイサン先生はどこで教えていますか。",
                "sentence": "パイサン先生はどこ [ ___ ] 教えていますか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: パイサン先生はどこで教えていますか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "を",
                    "から",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "みなさんは何を勉強していますか。",
                "sentence": "みなさんは何 [ ___ ] 勉強していますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: みなさんは何を勉強していますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "より",
                    "を",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "みなさんさんはどこで習っていますか。",
                "sentence": "みなさんさんはどこ [ ___ ] 習っていますか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: みなさんさんはどこで習っていますか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "を",
                    "の",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今、独身ですか。",
                "sentence": "今、独身 [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今、独身ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "は",
                    "に",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "そのえんぴつを借りてもいいですか。",
                "sentence": "そのえんぴつ [ ___ ] 借りてもいいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: そのえんぴつを借りてもいいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "から",
                    "で",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたの写真を撮ってもいいですか。",
                "sentence": "あなたの写真 [ ___ ] 撮ってもいいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたの写真を撮ってもいいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "から",
                    "を",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "喫茶店は何を売っていますか。",
                "sentence": "喫茶店は何 [ ___ ] 売っていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 喫茶店は何を売っていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "を",
                    "は",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "トヨタは何を作っていますか。",
                "sentence": "トヨタは何 [ ___ ] 作っていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: トヨタは何を作っていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "を",
                    "へ",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "いい歯医者を知っていますか。",
                "sentence": "いい歯医者 [ ___ ] 知っていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: いい歯医者を知っていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "を",
                    "に",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "教室にかばんを持って入ってもいいですか。",
                "sentence": "教室 [ ___ ] かばんを持って入ってもいいですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 教室にかばんを持って入ってもいいですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "と",
                    "が",
                    "は"
                ],
                "correct": 0
            }
        ]
    },
    "16": {
        "title": "第 16 課 ไวยากรณ์",
        "sub": "て-เชื่อมประโยค, ～てから, どうやって (ลำดับและการเดินทาง)",
        "emoji": "🚶",
        "questions": [
            {
                "fullSentence": "どうやって家へ帰りますか。",
                "sentence": "どうやって家 [ ___ ] 帰りますか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: どうやって家へ帰りますか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "に",
                    "も",
                    "へ",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたのかばんはどれですか。",
                "sentence": "あなたのかばんはどれ [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたのかばんはどれですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "と",
                    "から",
                    "を",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "その本は誰のですか。",
                "sentence": "そ [ ___ ] 本は誰のですか。",
                "blankParticle": "の",
                "thaiHint": "ประโยค: その本は誰のですか。",
                "explanation": "ใช้ 'の' (no) แสดงความเป็นเจ้าของ เชื่อมคำนาม หรือบอกสถานที่/เวลา",
                "choices": [
                    "まで",
                    "と",
                    "の",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "家へ帰ってから何をしたいですか。",
                "sentence": "家 [ ___ ] 帰ってから何をしたいですか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 家へ帰ってから何をしたいですか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "へ",
                    "より",
                    "と",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "Ａさんは目が大きいですか。",
                "sentence": "Ａさんは目 [ ___ ] 大きいですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: Ａさんは目が大きいですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "で",
                    "を",
                    "に",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "Ａさんは髪が短いですか。",
                "sentence": "Ａさんは髪 [ ___ ] 短いですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: Ａさんは髪が短いですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "まで",
                    "が",
                    "を",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "勉強が終わってからどこか行きますか。",
                "sentence": "勉強が終わって [ ___ ] どこか行きますか。",
                "blankParticle": "から",
                "thaiHint": "ประโยค: 勉強が終わってからどこか行きますか。",
                "explanation": "ใช้ 'から' (kara) บอกจุดเริ่มต้น 'จาก/ตั้งแต่' หรือ '～てから (หลังจาก...)'",
                "choices": [
                    "から",
                    "へ",
                    "を",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "タイは何が有名ですか。",
                "sentence": "タイは何 [ ___ ] 有名ですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: タイは何が有名ですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "へ",
                    "と",
                    "も",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "たくさんお金を下ろしてから何を買いたいですか。",
                "sentence": "たくさんお金を下ろして [ ___ ] 何を買いたいですか。",
                "blankParticle": "から",
                "thaiHint": "ประโยค: たくさんお金を下ろしてから何を買いたいですか。",
                "explanation": "ใช้ 'から' (kara) บอกจุดเริ่มต้น 'จาก/ตั้งแต่' หรือ '～てから (หลังจาก...)'",
                "choices": [
                    "から",
                    "で",
                    "と",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "学校までどうやって行きますか。",
                "sentence": "学校 [ ___ ] どうやって行きますか。",
                "blankParticle": "まで",
                "thaiHint": "ประโยค: 学校までどうやって行きますか。",
                "explanation": "ใช้ 'まで' (made) บอกจุดสิ้นสุด 'ถึง/จนถึง'",
                "choices": [
                    "は",
                    "に",
                    "まで",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "Ａさんはどの人ですか。",
                "sentence": "Ａさんはどの人 [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: Ａさんはどの人ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "は",
                    "を",
                    "まで",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "勉強が終わってから、何をしたいですか。",
                "sentence": "勉強が終わって [ ___ ] 、何をしたいですか。",
                "blankParticle": "から",
                "thaiHint": "ประโยค: 勉強が終わってから、何をしたいですか。",
                "explanation": "ใช้ 'から' (kara) บอกจุดเริ่มต้น 'จาก/ตั้งแต่' หรือ '～てから (หลังจาก...)'",
                "choices": [
                    "から",
                    "が",
                    "へ",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "このボタンを押してから、どうなりますか。",
                "sentence": "このボタンを押して [ ___ ] 、どうなりますか。",
                "blankParticle": "から",
                "thaiHint": "ประโยค: このボタンを押してから、どうなりますか。",
                "explanation": "ใช้ 'から' (kara) บอกจุดเริ่มต้น 'จาก/ตั้งแต่' หรือ '～てから (หลังจาก...)'",
                "choices": [
                    "まで",
                    "から",
                    "より",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "Ａさんのボールペンはどれですか。",
                "sentence": "Ａさん [ ___ ] ボールペンはどれですか。",
                "blankParticle": "の",
                "thaiHint": "ประโยค: Ａさんのボールペンはどれですか。",
                "explanation": "ใช้ 'の' (no) แสดงความเป็นเจ้าของ เชื่อมคำนาม หรือบอกสถานที่/เวลา",
                "choices": [
                    "の",
                    "まで",
                    "より",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "どうやってセブンイレブンへ行きますか。",
                "sentence": "どうやってセブンイレブン [ ___ ] 行きますか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: どうやってセブンイレブンへ行きますか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "まで",
                    "が",
                    "へ",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "Ａさんはハンサムで親切な人ですか。",
                "sentence": "Ａさんはハンサム [ ___ ] 親切な人ですか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: Ａさんはハンサムで親切な人ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "から",
                    "は",
                    "も",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "寮の部屋はどうですか。",
                "sentence": "寮の部屋はどう [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 寮の部屋はどうですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "も",
                    "へ",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "Ａさんはどんな人ですか。",
                "sentence": "Ａさんはどんな人 [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: Ａさんはどんな人ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "で",
                    "と",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたのかばんはどんなかばんですか。",
                "sentence": "あなたのかばんはどんなかばん [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたのかばんはどんなかばんですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "から",
                    "より",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたの携帯電話はどれですか。",
                "sentence": "あなたの携帯電話はどれ [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたの携帯電話はどれですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "も",
                    "まで",
                    "に",
                    "で"
                ],
                "correct": 3
            }
        ]
    },
    "17": {
        "title": "第 17 課 ไวยากรณ์",
        "sub": "ない-form, ～ないでください, ～なければなりません (ข้อบังคับ)",
        "emoji": "💊",
        "questions": [
            {
                "fullSentence": "一緒にご飯を食べに行かない？",
                "sentence": "一緒にご飯 [ ___ ] 食べに行かない？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 一緒にご飯を食べに行かない？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "を",
                    "も",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "自分の会社の名前を覚えなくてもいいですか？",
                "sentence": "自分の会社の名前 [ ___ ] 覚えなくてもいいですか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 自分の会社の名前を覚えなくてもいいですか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "に",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本語を勉強しなければなりませんか？",
                "sentence": "日本語 [ ___ ] 勉強しなければなりませんか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本語を勉強しなければなりませんか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "を",
                    "へ",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本へ行ってから何をしなければなりませんか？",
                "sentence": "日本 [ ___ ] 行ってから何をしなければなりませんか？",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 日本へ行ってから何をしなければなりませんか？",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "で",
                    "へ",
                    "に",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "月曜日は勉強しなくてもいいですか？",
                "sentence": "月曜日は勉強しなくてもいい [ ___ ] すか？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 月曜日は勉強しなくてもいいですか？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "を",
                    "より",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "土曜日と日曜日も日本語を習わなければなりませんか？",
                "sentence": "土曜日 [ ___ ] 日曜日も日本語を習わなければなりませんか？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 土曜日と日曜日も日本語を習わなければなりませんか？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "と",
                    "より",
                    "に",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "教室に入る前に靴を脱がなくてもいいですか？",
                "sentence": "教室に入る前に靴 [ ___ ] 脱がなくてもいいですか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 教室に入る前に靴を脱がなくてもいいですか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "へ",
                    "の",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "勉強は何時までに終わりますか？",
                "sentence": "勉強は何時まで [ ___ ] 終わりますか？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 勉強は何時までに終わりますか？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "で",
                    "を",
                    "に",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "病気の時は薬を飲まなければなりませんか？",
                "sentence": "病気の時は薬 [ ___ ] 飲まなければなりませんか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 病気の時は薬を飲まなければなりませんか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "は",
                    "まで",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "買い物にお金を持って行かなくてもいいですか？",
                "sentence": "買い物 [ ___ ] お金を持って行かなくてもいいですか？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 買い物にお金を持って行かなくてもいいですか？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "より",
                    "が",
                    "で",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "大切なことは覚えなくてもいいですか？",
                "sentence": "大切なことは覚えなくてもいい [ ___ ] すか？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 大切なことは覚えなくてもいいですか？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "から",
                    "と",
                    "で",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "禁煙のところでたばこを吸ってもいいですか？",
                "sentence": "禁煙のところでたばこ [ ___ ] 吸ってもいいですか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 禁煙のところでたばこを吸ってもいいですか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "まで",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "毎日ご飯を食べなければなりませんか？",
                "sentence": "毎日ご飯 [ ___ ] 食べなければなりませんか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日ご飯を食べなければなりませんか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "から",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "危ないですから、そこへ行かない方がいいですか？",
                "sentence": "危ないですから、そこへ行かない方 [ ___ ] いいですか？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 危ないですから、そこへ行かない方がいいですか？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "に",
                    "は",
                    "が",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "大切な資料をなくしてもいいですか？",
                "sentence": "大切な資料 [ ___ ] なくしてもいいですか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 大切な資料をなくしてもいいですか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "へ",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "何時までに寮へ帰らなければなりませんか？",
                "sentence": "何時まで [ ___ ] 寮へ帰らなければなりませんか？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 何時までに寮へ帰らなければなりませんか？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "は",
                    "に",
                    "と",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "毎日シャワーを浴びなくてもいいですか？",
                "sentence": "毎日シャワー [ ___ ] 浴びなくてもいいですか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日シャワーを浴びなくてもいいですか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "の",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "何曜日までに宿題を出さなければなりませんか？",
                "sentence": "何曜日まで [ ___ ] 宿題を出さなければなりませんか？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 何曜日までに宿題を出さなければなりませんか？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "より",
                    "へ",
                    "に",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "わからない時、先生に聞かなくてもいいですか？",
                "sentence": "わからない時、先生 [ ___ ] 聞かなくてもいいですか？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: わからない時、先生に聞かなくてもいいですか？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "で",
                    "が",
                    "も",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "仕事が終わってから、掃除しなくてもいいですか？",
                "sentence": "仕事 [ ___ ] 終わってから、掃除しなくてもいいですか？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 仕事が終わってから、掃除しなくてもいいですか？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "は",
                    "へ",
                    "が",
                    "から"
                ],
                "correct": 2
            }
        ]
    },
    "18": {
        "title": "第 18 課 ไวยากรณ์",
        "sub": "辞書形, ことができる, ～前に (ความสามารถและเวลาก่อนหน้า)",
        "emoji": "📖",
        "questions": [
            {
                "fullSentence": "あなたは漢字を読むことができますか。",
                "sentence": "あなたは漢字 [ ___ ] 読むことができますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたは漢字を読むことができますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "と",
                    "に",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ドイツ語ができますか。",
                "sentence": "ドイツ語 [ ___ ] できますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ドイツ語ができますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "まで",
                    "へ",
                    "が",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたの趣味は何ですか。",
                "sentence": "あなたの趣味 [ ___ ] 何ですか。",
                "blankParticle": "は",
                "thaiHint": "ประโยค: あなたの趣味は何ですか。",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "も",
                    "の",
                    "は",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本へ行く前に、日本語を勉強しなければなりませんか？",
                "sentence": "日本 [ ___ ] 行く前に、日本語を勉強しなければなりませんか？",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 日本へ行く前に、日本語を勉強しなければなりませんか？",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "も",
                    "から",
                    "に",
                    "へ"
                ],
                "correct": 3
            },
            {
                "fullSentence": "毎晩、寝る前に本を読んでいますか。",
                "sentence": "毎晩、寝る前 [ ___ ] 本を読んでいますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 毎晩、寝る前に本を読んでいますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "の",
                    "で",
                    "まで",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ご飯を食べる前に、手を洗わなければなりませんか。",
                "sentence": "ご飯を食べる前 [ ___ ] 、手を洗わなければなりませんか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ご飯を食べる前に、手を洗わなければなりませんか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "で",
                    "から",
                    "の",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ピアノを弾くことができますか。",
                "sentence": "ピアノ [ ___ ] 弾くことができますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ピアノを弾くことができますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "を",
                    "に",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "セブンイレブンで、現金で払うことができますか。",
                "sentence": "セブンイレブンで、現金で払うこと [ ___ ] できますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: セブンイレブンで、現金で払うことができますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "も",
                    "が",
                    "より",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "毎日、日記を書いている？",
                "sentence": "毎日、日記 [ ___ ] 書いている？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日、日記を書いている？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "まで",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寝る前にお祈りをしていますか。",
                "sentence": "寝る前 [ ___ ] お祈りをしていますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 寝る前にお祈りをしていますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "の",
                    "で",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "馬に乗ることができますか。",
                "sentence": "馬に乗ること [ ___ ] できますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 馬に乗ることができますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "より",
                    "は",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "寮でインターネットを使うことができますか。",
                "sentence": "寮でインターネット [ ___ ] 使うことができますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 寮でインターネットを使うことができますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "へ",
                    "に",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ペットボトルを捨てる前にラベルを取らなくてもいいですか。",
                "sentence": "ペットボトルを捨てる前 [ ___ ] ラベルを取らなくてもいいですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ペットボトルを捨てる前にラベルを取らなくてもいいですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "で",
                    "まで",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "車を運転することができますか。",
                "sentence": "車 [ ___ ] 運転することができますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 車を運転することができますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "まで",
                    "で",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "土曜日はホテルを予約することができますか。",
                "sentence": "土曜日はホテル [ ___ ] 予約することができますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 土曜日はホテルを予約することができますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "まで",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "英語を話すことができますか。",
                "sentence": "英語 [ ___ ] 話すことができますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 英語を話すことができますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "が",
                    "へ",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ご飯を食べ終わってから、何を言わなければなりませんか。",
                "sentence": "ご飯 [ ___ ] 食べ終わってから、何を言わなければなりませんか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ご飯を食べ終わってから、何を言わなければなりませんか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "が",
                    "と",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "教室に入る前に靴下を脱がなければならない？",
                "sentence": "教室 [ ___ ] 入る前に靴下を脱がなければならない？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 教室に入る前に靴下を脱がなければならない？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "まで",
                    "へ",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "休みたい時は、先生に連絡しなければなりませんか。",
                "sentence": "休みたい時は、先生 [ ___ ] 連絡しなければなりませんか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 休みたい時は、先生に連絡しなければなりませんか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "を",
                    "と",
                    "に",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "道を渡る前に、車に気を付けなればなりませんか。",
                "sentence": "道を渡る前 [ ___ ] 、車に気を付けなればなりませんか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 道を渡る前に、車に気を付けなればなりませんか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "で",
                    "に",
                    "が",
                    "へ"
                ],
                "correct": 1
            }
        ]
    },
    "19": {
        "title": "第 19 課 ไวยากรณ์",
        "sub": "た-form, ～たことがあります, ～たり～たり (ประสบการณ์)",
        "emoji": "🗻",
        "questions": [
            {
                "fullSentence": "山に登ったことがある？",
                "sentence": "山 [ ___ ] 登ったことがある？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 山に登ったことがある？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "で",
                    "に",
                    "も",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ホテルに泊まったことがありますか。",
                "sentence": "ホテル [ ___ ] 泊まったことがありますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ホテルに泊まったことがありますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "を",
                    "に",
                    "へ",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "先週の日曜日は、服を洗濯した？",
                "sentence": "先週の日曜日は、服 [ ___ ] 洗濯した？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 先週の日曜日は、服を洗濯した？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "に",
                    "から",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日何をしましたか。（Vたり、Vたりしました。）",
                "sentence": "昨日何 [ ___ ] しましたか。（Vたり、Vたりしました。）",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 昨日何をしましたか。（Vたり、Vたりしました。）",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "から",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "エアコンをつけてから、どうなりますか。",
                "sentence": "エアコン [ ___ ] つけてから、どうなりますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: エアコンをつけてから、どうなりますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "を",
                    "まで",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本料理を食べたことがありますか。",
                "sentence": "日本料理 [ ___ ] 食べたことがありますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本料理を食べたことがありますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "で",
                    "と",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ゴルフをしたことがありますか。",
                "sentence": "ゴルフ [ ___ ] したことがありますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ゴルフをしたことがありますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "へ",
                    "で",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本のお茶を飲んだことがありますか。",
                "sentence": "日本のお茶 [ ___ ] 飲んだことがありますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本のお茶を飲んだことがありますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "まで",
                    "を",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今日は調子がいいですか。",
                "sentence": "今日は調子 [ ___ ] いいですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今日は調子がいいですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "まで",
                    "が",
                    "と",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ダイエットしてから、細くなりましたか。",
                "sentence": "ダイエットして [ ___ ] 、細くなりましたか。",
                "blankParticle": "から",
                "thaiHint": "ประโยค: ダイエットしてから、細くなりましたか。",
                "explanation": "ใช้ 'から' (kara) บอกจุดเริ่มต้น 'จาก/ตั้งแต่' หรือ '～てから (หลังจาก...)'",
                "choices": [
                    "から",
                    "と",
                    "より",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "アメリカへ行ったことがありますか。",
                "sentence": "アメリカ [ ___ ] 行ったことがありますか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: アメリカへ行ったことがありますか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "は",
                    "へ",
                    "から",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは25歳になりましたか。",
                "sentence": "あなたは25歳 [ ___ ] なりましたか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたは25歳になりましたか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "まで",
                    "から",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "休みの日は何をしますか。",
                "sentence": "休みの日は何 [ ___ ] しますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 休みの日は何をしますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "に",
                    "を",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本へ行く前に何をしなければなりませんか。",
                "sentence": "日本 [ ___ ] 行く前に何をしなければなりませんか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 日本へ行く前に何をしなければなりませんか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "が",
                    "へ",
                    "を",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "掃除をしてから、部屋はどうなりますか。",
                "sentence": "掃除をしてから、部屋はどうなりますか [ ___ ] 掃除をしてから、部屋はどうなりますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 掃除をしてから、部屋はどうなりますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "が",
                    "の",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "12月、天気はどうなりますか。",
                "sentence": "12月、天気 [ ___ ] どうなりますか。",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 12月、天気はどうなりますか。",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "の",
                    "で",
                    "と",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "公園へ遊びに行ったことがありますか。",
                "sentence": "公園 [ ___ ] 遊びに行ったことがありますか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 公園へ遊びに行ったことがありますか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "へ",
                    "は",
                    "に",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたは薬を飲んでから、眠くなりますか。",
                "sentence": "あなたは薬 [ ___ ] 飲んでから、眠くなりますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたは薬を飲んでから、眠くなりますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "を",
                    "が",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "毎日、運動したら元気になりますか。",
                "sentence": "毎日、運動したら元気 [ ___ ] なりますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 毎日、運動したら元気になりますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "が",
                    "から",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "映画館で映画を見たことがありますか。",
                "sentence": "映画館 [ ___ ] 映画を見たことがありますか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 映画館で映画を見たことがありますか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "は",
                    "で",
                    "の",
                    "を"
                ],
                "correct": 1
            }
        ]
    },
    "20": {
        "title": "第 20 課 ไวยากรณ์",
        "sub": "普通形 (ภาษารูปกันเอง/สนทนาเป็นกันเอง)",
        "emoji": "☕",
        "questions": [
            {
                "fullSentence": "日本へ行くとき、ビザが要る？",
                "sentence": "日本 [ ___ ] 行くとき、ビザが要る？",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 日本へ行くとき、ビザが要る？",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "から",
                    "に",
                    "が",
                    "へ"
                ],
                "correct": 3
            },
            {
                "fullSentence": "なにで言葉を調べる？",
                "sentence": "なに [ ___ ] 言葉を調べる？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: なにで言葉を調べる？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "で",
                    "と",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "機械を修理したことがある？",
                "sentence": "機械 [ ___ ] 修理したことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 機械を修理したことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "は",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "君の名前は何ですか？",
                "sentence": "君の名前は何 [ ___ ] すか？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 君の名前は何ですか？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "は",
                    "の",
                    "で",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今、Ａ君は何をしている？",
                "sentence": "今、Ａ君は何 [ ___ ] している？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今、Ａ君は何をしている？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "から",
                    "を",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "着物を着たことがある？",
                "sentence": "着物 [ ___ ] 着たことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 着物を着たことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "を",
                    "も",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ビザをもらったことがある？",
                "sentence": "ビザ [ ___ ] もらったことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ビザをもらったことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "で",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "一緒にご飯を食べない？",
                "sentence": "一緒にご飯 [ ___ ] 食べない？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 一緒にご飯を食べない？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "へ",
                    "の",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "お金、持っている？",
                "sentence": "お金、持っている [ ___ ] お金、持っている？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: お金、持っている？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "も",
                    "は",
                    "が",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "明日勉強しに来る？",
                "sentence": "明日勉強し [ ___ ] 来る？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 明日勉強しに来る？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "も",
                    "と",
                    "へ",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "自分で料理が作れる？",
                "sentence": "自分で料理 [ ___ ] 作れる？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 自分で料理が作れる？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "に",
                    "の",
                    "が",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "毎日、本を読んでいる？",
                "sentence": "毎日、本 [ ___ ] 読んでいる？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日、本を読んでいる？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "と",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "何時に勉強が終わる？",
                "sentence": "何時に勉強 [ ___ ] 終わる？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 何時に勉強が終わる？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "と",
                    "が",
                    "に",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "コーヒーとミルクとどっちが好き？",
                "sentence": "コーヒー [ ___ ] ミルクとどっちが好き？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: コーヒーとミルクとどっちが好き？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "を",
                    "まで",
                    "と",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "トイレはどっち？",
                "sentence": "トイレ [ ___ ] どっち？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: トイレはどっち？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "が",
                    "の",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "学校のエレベーターはどっち？",
                "sentence": "学校のエレベーター [ ___ ] どっち？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 学校のエレベーターはどっち？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "を",
                    "は",
                    "で",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "どうやって家へ帰る？",
                "sentence": "どうやって家 [ ___ ] 帰る？",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: どうやって家へ帰る？",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "へ",
                    "で",
                    "まで",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "着物が高いと思う？",
                "sentence": "着物 [ ___ ] 高いと思う？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 着物が高いと思う？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "へ",
                    "が",
                    "の",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "土曜日と日曜日は暇じゃない？",
                "sentence": "土曜日 [ ___ ] 日曜日は暇じゃない？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 土曜日と日曜日は暇じゃない？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "を",
                    "も",
                    "と",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "昨日、雨だった？",
                "sentence": "昨日、雨だった [ ___ ] 昨日、雨だった？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 昨日、雨だった？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "が",
                    "まで",
                    "は",
                    "も"
                ],
                "correct": 2
            }
        ]
    },
    "21": {
        "title": "第 21 課 ไวยากรณ์",
        "sub": "～と思います, ～と言いました (ความคิดเห็นและคำบอกเล่า)",
        "emoji": "💭",
        "questions": [
            {
                "fullSentence": "これはなんと言いますか。",
                "sentence": "これはなん[ ___ ] 言いますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: これはなんと言いますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "も",
                    "に",
                    "まで",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "英語と日本語どちらが難しいと思いますか。",
                "sentence": "英語と日本語どちらが難しい[ ___ ] 思いますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 英語と日本語どちらが難しいと思いますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "が",
                    "と",
                    "に",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寝る前に何と言いますか。",
                "sentence": "寝る前 [ ___ ] 何と言いますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 寝る前に何と言いますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "も",
                    "に",
                    "を",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本の物価が高いと思いますか。",
                "sentence": "日本の物価 [ ___ ] 高いと思いますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本の物価が高いと思いますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "で",
                    "が",
                    "も",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "昨日テストがありましたか。",
                "sentence": "昨日テスト [ ___ ] ありましたか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 昨日テストがありましたか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "で",
                    "が",
                    "も",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本へ行く前に、日本語を勉強しないとだめですか。",
                "sentence": "日本へ行く前に、日本語を勉強しない [ ___ ] だめですか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 日本へ行く前に、日本語を勉強しないとだめですか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "を",
                    "の",
                    "と",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この携帯は便利だと思いますか。",
                "sentence": "この携帯は便利だ[ ___ ] 思いますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: この携帯は便利だと思いますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "と",
                    "で",
                    "より",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "これは誰の本だと思う？",
                "sentence": "これは誰の本だ[ ___ ] 思う？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: これは誰の本だと思う？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "に",
                    "と",
                    "が",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "なにで紙が切れると思いますか。",
                "sentence": "なにで紙 [ ___ ] 切れると思いますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: なにで紙が切れると思いますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "が",
                    "で",
                    "に",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "道を渡る前に、なにに気をつけないとだめですか。",
                "sentence": "道を渡る前に、なにに気をつけない [ ___ ] だめですか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 道を渡る前に、なにに気をつけないとだめですか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "から",
                    "は",
                    "と",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "自動車を運転したことがありますか。",
                "sentence": "自動車 [ ___ ] 運転したことがありますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 自動車を運転したことがありますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "へ",
                    "を",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "空港で飛行機に乗ったことがありますか。",
                "sentence": "空港で飛行機 [ ___ ] 乗ったことがありますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 空港で飛行機に乗ったことがありますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "は",
                    "の",
                    "に",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "タイの物価と日本の物価とどちらが安いと思いますか。",
                "sentence": "タイの物価と日本の物価とどちらが安い[ ___ ] 思いますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: タイの物価と日本の物価とどちらが安いと思いますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "を",
                    "が",
                    "と",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ご飯を食べる前に何と言いますか。",
                "sentence": "ご飯 [ ___ ] 食べる前に何と言いますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ご飯を食べる前に何と言いますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "から",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ご飯を食べてから何と言いますか。",
                "sentence": "ご飯 [ ___ ] 食べてから何と言いますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ご飯を食べてから何と言いますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "は",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "私について何を知っていますか。",
                "sentence": "私 [ ___ ] ついて何を知っていますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 私について何を知っていますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "から",
                    "の",
                    "より",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "この学校について何を知っていますか。",
                "sentence": "この学校 [ ___ ] ついて何を知っていますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: この学校について何を知っていますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "まで",
                    "の",
                    "に",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本について何を知っていますか。",
                "sentence": "日本 [ ___ ] ついて何を知っていますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本について何を知っていますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "で",
                    "より",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "最近、よく漢字を読んでいますか。",
                "sentence": "最近、よく漢字 [ ___ ] 読んでいますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 最近、よく漢字を読んでいますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "が",
                    "で",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたの夢はなんですか。",
                "sentence": "あなたの夢はなん [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたの夢はなんですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "が",
                    "の",
                    "で",
                    "より"
                ],
                "correct": 2
            }
        ]
    },
    "22": {
        "title": "第 22 課 ไวยากรณ์",
        "sub": "ประโยคขยายคำนาม (Noun Modification by Clause)",
        "emoji": "👔",
        "questions": [
            {
                "fullSentence": "日本に行く人は誰ですか。",
                "sentence": "日本 [ ___ ] 行く人は誰ですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本に行く人は誰ですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "で",
                    "へ",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本語が上手だと思う人は誰ですか。",
                "sentence": "日本語 [ ___ ] 上手だと思う人は誰ですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本語が上手だと思う人は誰ですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "と",
                    "が",
                    "へ",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今朝、食べた料理はどうでしたか。",
                "sentence": "今朝、食べた料理はどう [ ___ ] したか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今朝、食べた料理はどうでしたか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "の",
                    "で",
                    "を",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寒い国が好きですか。",
                "sentence": "寒い国 [ ___ ] 好きですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 寒い国が好きですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "が",
                    "の",
                    "より",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "母が作った料理は美味しいと思いますか。",
                "sentence": "母 [ ___ ] 作った料理は美味しいと思いますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 母が作った料理は美味しいと思いますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "に",
                    "で",
                    "へ",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "休みの日は友達と映画を見る約束がありますか。",
                "sentence": "休みの日は友達 [ ___ ] 映画を見る約束がありますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 休みの日は友達と映画を見る約束がありますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "の",
                    "を",
                    "と",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "甘いお菓子が好きですか。",
                "sentence": "甘いお菓子 [ ___ ] 好きですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 甘いお菓子が好きですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "から",
                    "に",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "立っている人は誰ですか。",
                "sentence": "立っている人は誰 [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 立っている人は誰ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "に",
                    "より",
                    "が",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "勉強する時間は何時から何時までですか。",
                "sentence": "勉強する時間は何時 [ ___ ] 何時までですか。",
                "blankParticle": "から",
                "thaiHint": "ประโยค: 勉強する時間は何時から何時までですか。",
                "explanation": "ใช้ 'から' (kara) บอกจุดเริ่มต้น 'จาก/ตั้งแต่' หรือ '～てから (หลังจาก...)'",
                "choices": [
                    "も",
                    "より",
                    "に",
                    "から"
                ],
                "correct": 3
            },
            {
                "fullSentence": "Ａさんが住んでいる部屋は何番ですか。",
                "sentence": "Ａさん [ ___ ] 住んでいる部屋は何番ですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: Ａさんが住んでいる部屋は何番ですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "も",
                    "に",
                    "を",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語が一番上手な人は誰だと思いますか。",
                "sentence": "日本語 [ ___ ] 一番上手な人は誰だと思いますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本語が一番上手な人は誰だと思いますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "が",
                    "へ",
                    "まで",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "飲みたい飲み物は何ですか。",
                "sentence": "飲みたい飲み物は何 [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 飲みたい飲み物は何ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "に",
                    "の",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語を復習する時間がたくさんありますか。",
                "sentence": "日本語 [ ___ ] 復習する時間がたくさんありますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本語を復習する時間がたくさんありますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "から",
                    "が",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今着ている服はいくらで買いましたか。",
                "sentence": "今着ている服はいくら [ ___ ] 買いましたか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今着ている服はいくらで買いましたか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "に",
                    "の",
                    "で",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたの前にある物は何ですか。",
                "sentence": "あなたの前 [ ___ ] ある物は何ですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたの前にある物は何ですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "の",
                    "と",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "行きたい所はどこですか。",
                "sentence": "行きたい所はどこ [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 行きたい所はどこですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "も",
                    "と",
                    "で",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "隣にいる人は誰ですか。",
                "sentence": "隣 [ ___ ] いる人は誰ですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 隣にいる人は誰ですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "を",
                    "と",
                    "へ",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "お正月に撮った写真を見せて下さい。",
                "sentence": "お正月に撮った写真 [ ___ ] 見せて下さい。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お正月に撮った写真を見せて下さい。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "を",
                    "は",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "使っているペンはどこで買いましたか。",
                "sentence": "使っているペンはどこ [ ___ ] 買いましたか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 使っているペンはどこで買いましたか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "は",
                    "で",
                    "が",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "昨日覚えた漢字を教えて下さい。",
                "sentence": "昨日覚えた漢字 [ ___ ] 教えて下さい。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 昨日覚えた漢字を教えて下さい。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "まで",
                    "から",
                    "を"
                ],
                "correct": 3
            }
        ]
    },
    "23": {
        "title": "第 23 課 ไวยากรณ์",
        "sub": "～とき, ～と (เวลาเมื่อทำสิ่งใด และเงื่อนไข ถ้า...จะ...)",
        "emoji": "🚦",
        "questions": [
            {
                "fullSentence": "なにか分からない時、誰に聞きますか。",
                "sentence": "な [ ___ ] か分からない時、誰に聞きますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: なにか分からない時、誰に聞きますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "が",
                    "に",
                    "より",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "子供の時、夢はなんですか。",
                "sentence": "子供の時、夢はなん [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 子供の時、夢はなんですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "へ",
                    "まで",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "病気の時、仕事を休みますか。",
                "sentence": "病気の時、仕事 [ ___ ] 休みますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 病気の時、仕事を休みますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "へ",
                    "の",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "寂しい時、何をしますか。",
                "sentence": "寂しい時、何 [ ___ ] しますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 寂しい時、何をしますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "まで",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ミルクを飲むと体にいいと思う？。",
                "sentence": "ミルクを飲むと体 [ ___ ] いいと思う？。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ミルクを飲むと体にいいと思う？。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "も",
                    "が",
                    "に",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "疲れた時、何をしますか。",
                "sentence": "疲れた時、何 [ ___ ] しますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 疲れた時、何をしますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "まで",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "暑い時、エアコンを付けますか。",
                "sentence": "暑い時、エアコン [ ___ ] 付けますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 暑い時、エアコンを付けますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "と",
                    "まで",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "この学校は大きいですか。",
                "sentence": "この学校は大きい [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: この学校は大きいですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "が",
                    "と",
                    "の",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ビ-ルを飲むと体に悪いと思いますか。",
                "sentence": "ビ-ルを飲むと体 [ ___ ] 悪いと思いますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ビ-ルを飲むと体に悪いと思いますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "を",
                    "まで",
                    "で",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "毎日日本語を復習すると上手になりますか。",
                "sentence": "毎日日本語を復習する [ ___ ] 上手になりますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 毎日日本語を復習すると上手になりますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "から",
                    "を",
                    "は",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "仕事をするとお金がなくなりますか。",
                "sentence": "仕事をする [ ___ ] お金がなくなりますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 仕事をするとお金がなくなりますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "へ",
                    "と",
                    "で",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "道を渡る時左右を見ますか。",
                "sentence": "道 [ ___ ] 渡る時左右を見ますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 道を渡る時左右を見ますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "を",
                    "に",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "眠い時コ-ヒ-を飲みますか。",
                "sentence": "眠い時コ-ヒ- [ ___ ] 飲みますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 眠い時コ-ヒ-を飲みますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "で",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "本を読む時メガネをかけますか。",
                "sentence": "本 [ ___ ] 読む時メガネをかけますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 本を読む時メガネをかけますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "から",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "学校に来る時どうやって来ますか。",
                "sentence": "学校 [ ___ ] 来る時どうやって来ますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 学校に来る時どうやって来ますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "まで",
                    "に",
                    "も",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "暇な時いつも何をしますか。",
                "sentence": "暇な時いつも何 [ ___ ] しますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 暇な時いつも何をしますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "で",
                    "に",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "シャワーを浴びる時歌を歌いますか。",
                "sentence": "シャワー [ ___ ] 浴びる時歌を歌いますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: シャワーを浴びる時歌を歌いますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "まで",
                    "を",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "いつも運動をすると元気になりますか。",
                "sentence": "いつも運動をする [ ___ ] 元気になりますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: いつも運動をすると元気になりますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "と",
                    "も",
                    "まで",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "恋人と公園を散歩したことがありますか。",
                "sentence": "恋人と公園 [ ___ ] 散歩したことがありますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 恋人と公園を散歩したことがありますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "で",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "雪が降ると寒くなりますか。",
                "sentence": "雪が降る [ ___ ] 寒くなりますか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 雪が降ると寒くなりますか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "まで",
                    "へ",
                    "を",
                    "と"
                ],
                "correct": 3
            }
        ]
    },
    "24": {
        "title": "第 24 課 ไวยากรณ์",
        "sub": "あげます, もらいます, くれます (การให้และการรับน้ำใจ)",
        "emoji": "🎁",
        "questions": [
            {
                "fullSentence": "友達の誕生日に何をあげますか。",
                "sentence": "友達の誕生日 [ ___ ] 何をあげますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 友達の誕生日に何をあげますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "も",
                    "へ",
                    "に",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたは誕生日に恋人に何をもらいますか。",
                "sentence": "あなたは誕生日 [ ___ ] 恋人に何をもらいますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたは誕生日に恋人に何をもらいますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "まで",
                    "より",
                    "に",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "お正月は誰にプレゼントを買ってあげますか。",
                "sentence": "お正月は誰にプレゼント [ ___ ] 買ってあげますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お正月は誰にプレゼントを買ってあげますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "から",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "バレンタインは恋人に何を買ってあげますか。",
                "sentence": "バレンタインは恋人 [ ___ ] 何を買ってあげますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: バレンタインは恋人に何を買ってあげますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "より",
                    "まで",
                    "から",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "友達に日本語を教えてあげたことがありますか。",
                "sentence": "友達 [ ___ ] 日本語を教えてあげたことがありますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 友達に日本語を教えてあげたことがありますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "より",
                    "へ",
                    "まで",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "友達にお金を貸してあげたことありますか。",
                "sentence": "友達 [ ___ ] お金を貸してあげたことありますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 友達にお金を貸してあげたことありますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "で",
                    "が",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "สนามช้าง へ友達を連れて行ってあげたことがありますか。",
                "sentence": "สนามช้าง へ友達 [ ___ ] 連れて行ってあげたことがありますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: สนามช้าง へ友達を連れて行ってあげたことがありますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "から",
                    "も",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "いつも母の仕事を手伝ってあげていますか。",
                "sentence": "いつも母の仕事 [ ___ ] 手伝ってあげていますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: いつも母の仕事を手伝ってあげていますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "も",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "暇な時、後輩に日本語を教えてあげていますか。",
                "sentence": "暇な時、後輩 [ ___ ] 日本語を教えてあげていますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 暇な時、後輩に日本語を教えてあげていますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "と",
                    "の",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "いつも両親に料理を作ってあげていますか。",
                "sentence": "いつも両親 [ ___ ] 料理を作ってあげていますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: いつも両親に料理を作ってあげていますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "は",
                    "が",
                    "の",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "お母さんの誕生日はどんなプレゼントをあげたいと思う？",
                "sentence": "お母さんの誕生日はどんなプレゼント [ ___ ] あげたいと思う？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お母さんの誕生日はどんなプレゼントをあげたいと思う？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "も",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたの誕生日はどんなプレゼントをもらいたい？",
                "sentence": "あなたの誕生日はどんなプレゼント [ ___ ] もらいたい？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたの誕生日はどんなプレゼントをもらいたい？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "へ",
                    "を",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "初めて日本語を教えてくれた人は誰ですか。",
                "sentence": "初めて日本語 [ ___ ] 教えてくれた人は誰ですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 初めて日本語を教えてくれた人は誰ですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "で",
                    "を",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "初めてお父さんにあげた物は何ですか。",
                "sentence": "初めてお父さん [ ___ ] あげた物は何ですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 初めてお父さんにあげた物は何ですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "と",
                    "で",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今晩、料理を作ってあげましょうか。",
                "sentence": "今晩、料理 [ ___ ] 作ってあげましょうか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今晩、料理を作ってあげましょうか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "へ",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "お正月はお父さんに何をもらいましたか。",
                "sentence": "お正月はお父さん [ ___ ] 何をもらいましたか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: お正月はお父さんに何をもらいましたか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "は",
                    "に",
                    "より",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "バレンタインは誰に花を買ってあげたいですか。",
                "sentence": "バレンタインは誰に花 [ ___ ] 買ってあげたいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: バレンタインは誰に花を買ってあげたいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "と",
                    "へ",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "コンビニへ行きますから、お菓子を買ってあげましょうか。",
                "sentence": "コンビニ [ ___ ] 行きますから、お菓子を買ってあげましょうか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: コンビニへ行きますから、お菓子を買ってあげましょうか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "で",
                    "まで",
                    "へ",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今月、両親はもうお金を送ってくれましたか。",
                "sentence": "今月、両親はもうお金 [ ___ ] 送ってくれましたか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今月、両親はもうお金を送ってくれましたか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "と",
                    "で",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "恋人の誕生日はどんな料理を作ってあげますか 。",
                "sentence": "恋人の誕生日はどんな料理 [ ___ ] 作ってあげますか 。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 恋人の誕生日はどんな料理を作ってあげますか 。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "から",
                    "を",
                    "が"
                ],
                "correct": 2
            }
        ]
    },
    "25": {
        "title": "第 25 課 ไวยากรณ์",
        "sub": "～たら, ～ても (เงื่อนไข สมมติถ้า... และ ถึงแม้ว่า...)",
        "emoji": "☀️",
        "questions": [
            {
                "fullSentence": "たくさんお金があったら何をしたいですか。",
                "sentence": "たくさんお金 [ ___ ] あったら何をしたいですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: たくさんお金があったら何をしたいですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "が",
                    "から",
                    "と",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "いい天気だったら遊びに行きましょうか。",
                "sentence": "いい天気だったら遊び [ ___ ] 行きましょうか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: いい天気だったら遊びに行きましょうか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "より",
                    "が",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "時間があったら何をしたいですか。",
                "sentence": "時間があったら何 [ ___ ] したいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 時間があったら何をしたいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "へ",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本へ行ったら遊びに行きませんか。",
                "sentence": "日本 [ ___ ] 行ったら遊びに行きませんか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 日本へ行ったら遊びに行きませんか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "へ",
                    "に",
                    "は",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "熱があったら仕事を休みます。",
                "sentence": "熱があったら仕事 [ ___ ] 休みます。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 熱があったら仕事を休みます。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "は",
                    "まで",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "分からなかったら何と言わなければなりませんか。",
                "sentence": "分からなかったら何 [ ___ ] 言わなければなりませんか。",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 分からなかったら何と言わなければなりませんか。",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด (と思います / と言います)",
                "choices": [
                    "に",
                    "と",
                    "も",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本から帰ったら何をしますか。",
                "sentence": "日本 [ ___ ] 帰ったら何をしますか。",
                "blankParticle": "から",
                "thaiHint": "ประโยค: 日本から帰ったら何をしますか。",
                "explanation": "ใช้ 'から' (kara) บอกจุดเริ่มต้น 'จาก/ตั้งแต่' หรือ '～てから (หลังจาก...)'",
                "choices": [
                    "の",
                    "は",
                    "から",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "寒くても冷たい水を飲みますか。",
                "sentence": "寒くても冷たい水 [ ___ ] 飲みますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 寒くても冷たい水を飲みますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "を",
                    "から",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "宿題がなくてもいつも復習しますか。",
                "sentence": "宿題 [ ___ ] なくてもいつも復習しますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 宿題がなくてもいつも復習しますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "に",
                    "が",
                    "は",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "もし1億バーツがあったら友達にお金をあげますか。",
                "sentence": "もし1億バーツがあったら友達 [ ___ ] お金をあげますか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: もし1億バーツがあったら友達にお金をあげますか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "が",
                    "は",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "安くても嫌いなものは何ですか。",
                "sentence": "安くても嫌いなものは何 [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 安くても嫌いなものは何ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, หรือขอบเขต",
                "choices": [
                    "で",
                    "を",
                    "は",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "もし友達がお金がなくなったら、お金を貸しますか。",
                "sentence": "もし友達 [ ___ ] お金がなくなったら、お金を貸しますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: もし友達がお金がなくなったら、お金を貸しますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "の",
                    "が",
                    "へ",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "もし日本へ行ったら、日本人にタイ語を教えると思いますか。",
                "sentence": "もし日本 [ ___ ] 行ったら、日本人にタイ語を教えると思いますか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: もし日本へ行ったら、日本人にタイ語を教えると思いますか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "が",
                    "へ",
                    "まで",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "恋人がいなくてもさびしくないですか。",
                "sentence": "恋人 [ ___ ] いなくてもさびしくないですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 恋人がいなくてもさびしくないですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "まで",
                    "も",
                    "が",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "たくさんお酒を飲んだら体にいいと思う？",
                "sentence": "たくさんお酒を飲んだら体 [ ___ ] いいと思う？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: たくさんお酒を飲んだら体にいいと思う？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้รับการกระทำ, หรือเป้าหมายของกริยา (V-stem + に行く)",
                "choices": [
                    "に",
                    "を",
                    "より",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "お金がなかったらどうしますか。",
                "sentence": "お金 [ ___ ] なかったらどうしますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: お金がなかったらどうしますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "まで",
                    "より",
                    "が",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "雨が降っても、ジョキングしますか。",
                "sentence": "雨 [ ___ ] 降っても、ジョキングしますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 雨が降っても、ジョキングしますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง หรือกรรมของคำแสดงความรู้สึก/ความต้องการ (欲しい, 好き, できます, あります)",
                "choices": [
                    "の",
                    "が",
                    "に",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本へ行ったら、どこに一番行きたいですか。",
                "sentence": "日本 [ ___ ] 行ったら、どこに一番行きたいですか。",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 日本へ行ったら、どこに一番行きたいですか。",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "と",
                    "まで",
                    "へ",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "晩ご飯を食べてから、映画を見に行きませんか。",
                "sentence": "晩ご飯 [ ___ ] 食べてから、映画を見に行きませんか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 晩ご飯を食べてから、映画を見に行きませんか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "が",
                    "から",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "寒くてもエアコンをつけますか。",
                "sentence": "寒くてもエアコン [ ___ ] つけますか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 寒くてもエアコンをつけますか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "を",
                    "は",
                    "から"
                ],
                "correct": 1
            }
        ]
    },
    "26": {
        "title": "第 26 課 ไวยากรณ์",
        "sub": "～んです (การเน้นย้ำ อธิบายเหตุผล)",
        "emoji": "💬",
        "questions": [
            {
                "fullSentence": "あなたの携帯電話はどこで買ったんですか。",
                "sentence": "あなたの携帯電話はどこ [ ___ ] 買ったんですか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたの携帯電話はどこで買ったんですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "で",
                    "と",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今朝何時に起きたんですか。",
                "sentence": "今朝何時 [ ___ ] 起きたんですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 今朝何時に起きたんですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "に",
                    "が",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "どんな猫が好きなんですか。",
                "sentence": "どんな猫 [ ___ ] 好きなんですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: どんな猫が好きなんですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "は",
                    "を",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今、雨が降っているんですか。",
                "sentence": "今、雨 [ ___ ] 降っているんですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今、雨が降っているんですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "の",
                    "で",
                    "が",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "土曜日にどこへ行くんですか。",
                "sentence": "土曜日 [ ___ ] どこへ行くんですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 土曜日にどこへ行くんですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "まで",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "朝ご飯を作っていただけませんか。",
                "sentence": "朝ご飯 [ ___ ] 作っていただけませんか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 朝ご飯を作っていただけませんか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "は",
                    "も",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "お金を貸していただけませんか。",
                "sentence": "お金 [ ___ ] 貸していただけませんか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お金を貸していただけませんか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "が",
                    "の",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ペンを持って来ていただけませんか。",
                "sentence": "ペン [ ___ ] 持って来ていただけませんか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ペンを持って来ていただけませんか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "も",
                    "に",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "分からない時どうしたらいいですか。",
                "sentence": "分からない時どうしたらいい [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 分からない時どうしたらいいですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "から",
                    "が",
                    "へ",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "どこで買い物したらいいですか。",
                "sentence": "どこ [ ___ ] 買い物したらいいですか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: どこで買い物したらいいですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "から",
                    "が",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "間に合わないですから、どうしたらいいですか。",
                "sentence": "間 [ ___ ] 合わないですから、どうしたらいいですか。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 間に合わないですから、どうしたらいいですか。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "に",
                    "も",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寮でお湯が出ないですから、誰に連絡したらいいですか。",
                "sentence": "寮でお湯 [ ___ ] 出ないですから、誰に連絡したらいいですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 寮でお湯が出ないですから、誰に連絡したらいいですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "で",
                    "が",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "歌は上手ですか。",
                "sentence": "歌は上手 [ ___ ] すか。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 歌は上手ですか。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "に",
                    "で",
                    "より",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "犬が好きですか。",
                "sentence": "犬 [ ___ ] 好きですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 犬が好きですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "へ",
                    "と",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "英語が上手ですか。",
                "sentence": "英語 [ ___ ] 上手ですか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 英語が上手ですか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "が",
                    "より",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寒いですから、エアコンを消したらいいですか。",
                "sentence": "寒いですから、エアコン [ ___ ] 消したらいいですか。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 寒いですから、エアコンを消したらいいですか。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "まで",
                    "に",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "疲れたから、休憩したらいいですか",
                "sentence": "疲れたから、休憩したらいい [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 疲れたから、休憩したらいいですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "まで",
                    "を",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "暇だったら遊びに行ったらいいですか",
                "sentence": "暇だったら遊び [ ___ ] 行ったらいいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 暇だったら遊びに行ったらいいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "まで",
                    "の",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "その人を知りたいんですから、どうしたらいいですか",
                "sentence": "その人 [ ___ ] 知りたいんですから、どうしたらいいですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: その人を知りたいんですから、どうしたらいいですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "に",
                    "が",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "美味しい料理を紹介していただけませんか",
                "sentence": "美味しい料理 [ ___ ] 紹介していただけませんか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 美味しい料理を紹介していただけませんか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "で",
                    "と",
                    "を"
                ],
                "correct": 3
            }
        ]
    },
    "27": {
        "title": "第 27 課 ไวยากรณ์",
        "sub": "可能形 (รูปสามารถ - ができます/読めます)",
        "emoji": "💪",
        "questions": [
            {
                "fullSentence": "日本料理が作れませんか",
                "sentence": "日本料理 [ ___ ] 作れませんか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本料理が作れませんか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "が",
                    "より",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "英語が話せますか",
                "sentence": "英語 [ ___ ] 話せますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 英語が話せますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "が",
                    "を",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "漢字が読めますか",
                "sentence": "漢字 [ ___ ] 読めますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 漢字が読めますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "まで",
                    "へ",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "この銀行でタイのお金が両替できる？",
                "sentence": "この銀行でタイのお金 [ ___ ] 両替できる？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: この銀行でタイのお金が両替できる？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "も",
                    "が",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "辛い料理が食べられますか",
                "sentence": "辛い料理 [ ___ ] 食べられますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 辛い料理が食べられますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "を",
                    "へ",
                    "より",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ここから 富士山が見えます",
                "sentence": "ここから 富士山 [ ___ ] 見えます",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ここから 富士山が見えます",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "は",
                    "より",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "飛行機の音が聞こえたことがありますか",
                "sentence": "飛行機の音 [ ___ ] 聞こえたことがありますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 飛行機の音が聞こえたことがありますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "が",
                    "より",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "暗い所で字が見えますか",
                "sentence": "暗い所で字 [ ___ ] 見えますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 暗い所で字が見えますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "に",
                    "から",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本人の話すことができますか",
                "sentence": "日本人の話すこと [ ___ ] できますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本人の話すことができますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "から",
                    "も",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ひらがなしかかけませんか",
                "sentence": "ひら [ ___ ] なしかかけませんか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ひらがなしかかけませんか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "より",
                    "に",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本では どこが行きたいですか",
                "sentence": "日本では どこ [ ___ ] 行きたいですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本では どこが行きたいですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "を",
                    "も",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "休みの日には 何をしますか",
                "sentence": "休みの日 [ ___ ] は 何をしますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 休みの日には 何をしますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "と",
                    "に",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本語がよく話せますか",
                "sentence": "日本語 [ ___ ] よく話せますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本語がよく話せますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "まで",
                    "も",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "お酒やビールが飲めますか",
                "sentence": "お酒やビール [ ___ ] 飲めますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: お酒やビールが飲めますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "へ",
                    "が",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この寮ではペットが飼えますか",
                "sentence": "この寮ではペット [ ___ ] 飼えますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: この寮ではペットが飼えますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "へ",
                    "が",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本では運転ができますか",
                "sentence": "日本では運転 [ ___ ] できますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本では運転ができますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "が",
                    "も",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本のアニメを見たら 理解できる？",
                "sentence": "日本のアニメを見たら 理解 [ ___ ] きる？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 日本のアニメを見たら 理解できる？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "から",
                    "に",
                    "へ",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "コンピュータの修理ができますか",
                "sentence": "コンピュータの修理 [ ___ ] できますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: コンピュータの修理ができますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "は",
                    "に",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "刺身が食べられますか",
                "sentence": "刺身 [ ___ ] 食べられますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 刺身が食べられますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "は",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本では一人で遊びに行けますか",
                "sentence": "日本 [ ___ ] は一人で遊びに行けますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 日本では一人で遊びに行けますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "に",
                    "と",
                    "で",
                    "の"
                ],
                "correct": 2
            }
        ]
    },
    "28": {
        "title": "第 28 課 ไวยากรณ์",
        "sub": "～ながら, ～し、～し (ทำพร้อมกัน และยัง...)",
        "emoji": "🎵",
        "questions": [
            {
                "fullSentence": "料理を作りながら ダンスしたことがありますか",
                "sentence": "料理 [ ___ ] 作りながら ダンスしたことがありますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 料理を作りながら ダンスしたことがありますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "は",
                    "も",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "働きながら日本語が勉強できます",
                "sentence": "働きながら日本語が勉強 [ ___ ] きます",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 働きながら日本語が勉強できます",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "で",
                    "も",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ご飯を食べながら 歌が歌えますか",
                "sentence": "ご飯 [ ___ ] 食べながら 歌が歌えますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ご飯を食べながら 歌が歌えますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "は",
                    "が",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "運転しながら 電話がかけられますか",
                "sentence": "運転しな [ ___ ] ら 電話がかけられますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 運転しながら 電話がかけられますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "が",
                    "で",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "暇な時何をしていますか",
                "sentence": "暇な時何 [ ___ ] していますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 暇な時何をしていますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "も",
                    "を",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "毎晩 本を読んでいますか",
                "sentence": "毎晩 本を読ん [ ___ ] いますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 毎晩 本を読んでいますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "と",
                    "の",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "いつも 何で学校に通っていますか",
                "sentence": "いつも 何 [ ___ ] 学校に通っていますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: いつも 何で学校に通っていますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "へ",
                    "まで",
                    "は",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "音楽を聞きながら本を読めますか",
                "sentence": "音楽 [ ___ ] 聞きながら本を読めますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 音楽を聞きながら本を読めますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "は",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "疲れた時や寂しい時 に誰の顔を思い出しますか",
                "sentence": "疲れた時や寂しい時  [ ___ ] 誰の顔を思い出しますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 疲れた時や寂しい時 に誰の顔を思い出しますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "から",
                    "に",
                    "と",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは日本語を勉強しながら 仕事ができますか",
                "sentence": "あなたは日本語を勉強しながら 仕事が [ ___ ] きますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたは日本語を勉強しながら 仕事ができますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "も",
                    "で",
                    "まで",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは歌を歌えるしダンスもできますか",
                "sentence": "あなたは歌 [ ___ ] 歌えるしダンスもできますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたは歌を歌えるしダンスもできますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "まで",
                    "で",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "毎朝 運動していますか",
                "sentence": "毎朝 運動していますか [ ___ ]",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎朝 運動していますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "の",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "勉強するときは 友達と話せますか",
                "sentence": "勉強する [ ___ ] きは 友達と話せますか",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 勉強するときは 友達と話せますか",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "に",
                    "から",
                    "へ",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "どうして タイ料理が好きなんですか",
                "sentence": "どうして タイ料理が好きなん [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: どうして タイ料理が好きなんですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "から",
                    "と",
                    "で",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本へ行ったら 経験があるしそれで 日本語が上手だと思う？",
                "sentence": "日本へ行ったら 経験があるしそれ [ ___ ]  日本語が上手だと思う？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 日本へ行ったら 経験があるしそれで 日本語が上手だと思う？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "に",
                    "へ",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "寝る前に何と言っています",
                "sentence": "寝る前 [ ___ ] 何と言っています",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 寝る前に何と言っています",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "を",
                    "は",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "休みの日には友達とジュースを飲みながらゲームをしますか",
                "sentence": "休みの日 [ ___ ] は友達とジュースを飲みながらゲームをしますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 休みの日には友達とジュースを飲みながらゲームをしますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "で",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "シャワーを浴びながら 歌を歌ったことがありますか",
                "sentence": "シャワー [ ___ ] 浴びながら 歌を歌ったことがありますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: シャワーを浴びながら 歌を歌ったことがありますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "へ",
                    "を",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この教室は暗いし 狭いですね",
                "sentence": "この教室は暗いし 狭い [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: この教室は暗いし 狭いですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "まで",
                    "へ",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "どんな人が好きですか",
                "sentence": "どんな人が好き [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: どんな人が好きですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "から",
                    "は",
                    "の",
                    "で"
                ],
                "correct": 3
            }
        ]
    },
    "29": {
        "title": "第 29 課 ไวยากรณ์",
        "sub": "自動詞 (อกรรมกริยา - สภาพที่เกิดขึ้น ～ています)",
        "emoji": "🚪",
        "questions": [
            {
                "fullSentence": "エアコンがついている？",
                "sentence": "エアコン [ ___ ] ついている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: エアコンがついている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "から",
                    "と",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "窓が割れている？",
                "sentence": "窓 [ ___ ] 割れている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 窓が割れている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "と",
                    "が",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "車が空いている？",
                "sentence": "車 [ ___ ] 空いている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 車が空いている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "を",
                    "が",
                    "は",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ガラスが割れている？",
                "sentence": "ガラス [ ___ ] 割れている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ガラスが割れている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "は",
                    "から",
                    "と",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あの木が折れている？",
                "sentence": "あの木 [ ___ ] 折れている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: あの木が折れている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "と",
                    "は",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今晩までに宿題を書いてしまいますか",
                "sentence": "今晩まで [ ___ ] 宿題を書いてしまいますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 今晩までに宿題を書いてしまいますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "で",
                    "まで",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日曜日までに資料を作ってしまいますか",
                "sentence": "日曜日まで [ ___ ] 資料を作ってしまいますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日曜日までに資料を作ってしまいますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "は",
                    "と",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "その傘はおれている？",
                "sentence": "その傘 [ ___ ] おれている？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: その傘はおれている？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "の",
                    "を",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ボタンが外れている？",
                "sentence": "ボタン [ ___ ] 外れている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ボタンが外れている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "が",
                    "に",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたの服がぬれている？",
                "sentence": "あなたの服 [ ___ ] ぬれている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: あなたの服がぬれている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "まで",
                    "に",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ものさしが曲がっている？",
                "sentence": "ものさし [ ___ ] 曲がっている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ものさしが曲がっている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "と",
                    "も",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今ドアが開いている？",
                "sentence": "今ドア [ ___ ] 開いている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今ドアが開いている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "は",
                    "から",
                    "が",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "電気がついている？",
                "sentence": "電気 [ ___ ] ついている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 電気がついている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "の",
                    "が",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "いま窓が閉まっている？",
                "sentence": "いま窓 [ ___ ] 閉まっている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: いま窓が閉まっている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "が",
                    "の",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "コップが割れている？",
                "sentence": "コップ [ ___ ] 割れている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: コップが割れている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "へ",
                    "が",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "いま紙が破れている？",
                "sentence": "いま紙 [ ___ ] 破れている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: いま紙が破れている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "が",
                    "から",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "鍵が掛かっている？",
                "sentence": "鍵 [ ___ ] 掛かっている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 鍵が掛かっている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "へ",
                    "も",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたは駅員ですか",
                "sentence": "あなたは駅員 [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたは駅員ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "に",
                    "を",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "服が汚れている？",
                "sentence": "服 [ ___ ] 汚れている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 服が汚れている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "から",
                    "も",
                    "を",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "コップがかけている？",
                "sentence": "コップ [ ___ ] かけている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: コップがかけている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "が",
                    "は",
                    "と"
                ],
                "correct": 1
            }
        ]
    },
    "30": {
        "title": "第 30 課 ไวยากรณ์",
        "sub": "他動詞 + てあります (สภาพเตรียมการไว้)",
        "emoji": "📌",
        "questions": [
            {
                "fullSentence": "机の上に何が置いてありますか",
                "sentence": "机の上 [ ___ ] 何が置いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 机の上に何が置いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "まで",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "椅子の下に何が置いてありますか",
                "sentence": "椅子の下 [ ___ ] 何が置いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 椅子の下に何が置いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "が",
                    "を",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "このノ-トに何が書いてありますか",
                "sentence": "このノ-ト [ ___ ] 何が書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: このノ-トに何が書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "の",
                    "と",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "壁に何が掛けてありますか",
                "sentence": "壁 [ ___ ] 何が掛けてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 壁に何が掛けてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "より",
                    "を",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "花瓶に何が飾ってありますか",
                "sentence": "花瓶 [ ___ ] 何が飾ってありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 花瓶に何が飾ってありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "から",
                    "まで",
                    "は",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "床に何が並べてありますか",
                "sentence": "床 [ ___ ] 何が並べてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 床に何が並べてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "から",
                    "より",
                    "に",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "教室の中に何が置いてありますか",
                "sentence": "教室の中 [ ___ ] 何が置いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 教室の中に何が置いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "と",
                    "は",
                    "も",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本に行く前に何をしておかないとだめですか",
                "sentence": "日本 [ ___ ] 行く前に何をしておかないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本に行く前に何をしておかないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "は",
                    "の",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "会議前に何をしておかないとだめですか",
                "sentence": "会議前 [ ___ ] 何をしておかないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 会議前に何をしておかないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "の",
                    "と",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "まだ雨が降っていますか",
                "sentence": "まだ雨 [ ___ ] 降っていますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: まだ雨が降っていますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "より",
                    "で",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "まだ雪が降っていますか",
                "sentence": "まだ雪 [ ___ ] 降っていますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: まだ雪が降っていますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "は",
                    "が",
                    "も",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "壁に絵が掛けてありますか",
                "sentence": "壁 [ ___ ] 絵が掛けてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 壁に絵が掛けてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "より",
                    "が",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "勉強する前に何を準備しておかないとだめですか",
                "sentence": "勉強する前 [ ___ ] 何を準備しておかないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 勉強する前に何を準備しておかないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "から",
                    "は",
                    "に",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "本棚の上に何が飾ってありますか",
                "sentence": "本棚の上 [ ___ ] 何が飾ってありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 本棚の上に何が飾ってありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "に",
                    "まで",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "学校の前に向日葵がうえてありますか",
                "sentence": "学校の前 [ ___ ] 向日葵がうえてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 学校の前に向日葵がうえてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "へ",
                    "は",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "授業の前によしゅうしておかないとだめですか",
                "sentence": "授業の前 [ ___ ] よしゅうしておかないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 授業の前によしゅうしておかないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "で",
                    "を",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "この本に何が書いてありますか",
                "sentence": "この本 [ ___ ] 何が書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: この本に何が書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "まで",
                    "に",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ポスターに何が書いてありますか",
                "sentence": "ポスター [ ___ ] 何が書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ポスターに何が書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "と",
                    "を",
                    "に",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ゴミ箱に何とかいてありますか",
                "sentence": "ゴミ箱 [ ___ ] 何とかいてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ゴミ箱に何とかいてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "と",
                    "も",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "かんばんに何と書いてありますか",
                "sentence": "かんばん [ ___ ] 何と書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: かんばんに何と書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "は",
                    "から"
                ],
                "correct": 1
            }
        ]
    },
    "31": {
        "title": "第 31 課 ไวยากรณ์",
        "sub": "意向形 (รูปตั้งใจ - ～ようと思います)",
        "emoji": "🎯",
        "questions": [
            {
                "fullSentence": "今晩ゲームをしようか",
                "sentence": "今晩ゲーム [ ___ ] しようか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今晩ゲームをしようか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "より",
                    "へ",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "勉強が終わってから何をしようと思いますか",
                "sentence": "勉強が終わってから何 [ ___ ] しようと思いますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 勉強が終わってから何をしようと思いますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "と",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "休みの日何をしようと思いますか",
                "sentence": "休みの日何 [ ___ ] しようと思いますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 休みの日何をしようと思いますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "へ",
                    "を",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本に行ったら日本語を勉強し続けるつもりですか",
                "sentence": "日本に行ったら日本語 [ ___ ] 勉強し続けるつもりですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本に行ったら日本語を勉強し続けるつもりですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "を",
                    "より",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "休みの日どこに行こうと思いますか",
                "sentence": "休みの日どこ [ ___ ] 行こうと思いますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 休みの日どこに行こうと思いますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "と",
                    "も",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本に行く予定はいつですか",
                "sentence": "日本 [ ___ ] 行く予定はいつですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本に行く予定はいつですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "に",
                    "が",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "明日はどこに行く予定がありますか",
                "sentence": "明日はどこ [ ___ ] 行く予定がありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 明日はどこに行く予定がありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "を",
                    "で",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今晩買い物しに行くつもりですか",
                "sentence": "今晩買い物し [ ___ ] 行くつもりですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 今晩買い物しに行くつもりですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "は",
                    "で",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "外国で働こうと思っていますか",
                "sentence": "外国で働こう [ ___ ] 思っていますか",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 外国で働こうと思っていますか",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "に",
                    "より",
                    "が",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日は休みですからどこに行こうと思いますか",
                "sentence": "明日は休みですからどこ [ ___ ] 行こうと思いますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 明日は休みですからどこに行こうと思いますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "まで",
                    "に",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "旅行の予定がありますか",
                "sentence": "旅行の予定 [ ___ ] ありますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 旅行の予定がありますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "の",
                    "で",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語の勉強を続けるつもりですか",
                "sentence": "日本語の勉強 [ ___ ] 続けるつもりですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本語の勉強を続けるつもりですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "から",
                    "で",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたはずっと日本に住むつもりですか",
                "sentence": "あなたはずっと日本 [ ___ ] 住むつもりですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたはずっと日本に住むつもりですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "に",
                    "を",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "明日何の予定がありますか",
                "sentence": "明日何の予定 [ ___ ] ありますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 明日何の予定がありますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "から",
                    "より",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本へ行く予定はいつですか",
                "sentence": "日本 [ ___ ] 行く予定はいつですか",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 日本へ行く予定はいつですか",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "へ",
                    "から",
                    "より",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "雨だから傘をもっていこうか",
                "sentence": "雨だから傘 [ ___ ] もっていこうか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 雨だから傘をもっていこうか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "に",
                    "の",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "週末はどこへ遊びに行こうと思っていますか",
                "sentence": "週末はどこへ遊び [ ___ ] 行こうと思っていますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 週末はどこへ遊びに行こうと思っていますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "より",
                    "まで",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "時間があればどこへ行きたいですか",
                "sentence": "時間 [ ___ ] あればどこへ行きたいですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 時間があればどこへ行きたいですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "が",
                    "で",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今晩 公園へ行こう",
                "sentence": "今晩 公園 [ ___ ] 行こう",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 今晩 公園へ行こう",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "より",
                    "へ",
                    "から",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "一緒に運動しようか",
                "sentence": "一緒 [ ___ ] 運動しようか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 一緒に運動しようか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "を",
                    "も"
                ],
                "correct": 1
            }
        ]
    },
    "32": {
        "title": "第 32 課 ไวยากรณ์",
        "sub": "～ほうがいいです, ～でしょう, ～かもしれません",
        "emoji": "🌂",
        "questions": [
            {
                "fullSentence": "あなたの故郷まで何時間で行けますか",
                "sentence": "あなたの故郷ま [ ___ ] 何時間で行けますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたの故郷まで何時間で行けますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "まで",
                    "も",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ここから寮まで何分でかえれますか",
                "sentence": "ここから寮ま [ ___ ] 何分でかえれますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: ここから寮まで何分でかえれますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "へ",
                    "で",
                    "と",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今晩ほしが見えるでしょうか",
                "sentence": "今晩ほしが見える [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今晩ほしが見えるでしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "へ",
                    "の",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "明日は雨が降るでしょうか",
                "sentence": "明日は雨 [ ___ ] 降るでしょうか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 明日は雨が降るでしょうか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "も",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "N3を合格するでしょうか",
                "sentence": "N3を合格する [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: N3を合格するでしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "へ",
                    "を",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "コーヒーを飲みたいんですが どこかいい喫茶店ありますか",
                "sentence": "コーヒーを飲みたいん [ ___ ] すが どこかいい喫茶店ありますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: コーヒーを飲みたいんですが どこかいい喫茶店ありますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "へ",
                    "で",
                    "は",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "何か心配なことがあるんですか",
                "sentence": "何か心配なことがあるん [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 何か心配なことがあるんですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "で",
                    "は",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ショッピングしたいですから いいデパートがありますか",
                "sentence": "ショッピングしたい [ ___ ] すから いいデパートがありますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: ショッピングしたいですから いいデパートがありますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "は",
                    "から",
                    "で",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "1万パーツであたらしいiPhoneXが買えますか",
                "sentence": "1万パーツ [ ___ ] あたらしいiPhoneXが買えますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 1万パーツであたらしいiPhoneXが買えますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "は",
                    "に",
                    "を",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語がわからなかったら先生に聞いたほうがいいですか",
                "sentence": "日本語がわからなかったら先生に聞いたほうがいい [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 日本語がわからなかったら先生に聞いたほうがいいですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "は",
                    "に",
                    "を",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "病気になったらどこへ行ったほうがいいですか",
                "sentence": "病気になったらどこへ行ったほうがいい [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 病気になったらどこへ行ったほうがいいですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "より",
                    "を",
                    "で",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ここからあなたのしゅっしんまで何時間でかかりますか",
                "sentence": "ここからあなたのしゅっしんま [ ___ ] 何時間でかかりますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: ここからあなたのしゅっしんまで何時間でかかりますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "と",
                    "まで",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今あまり元気じゃないですからどうしたほうがいいですか",
                "sentence": "今あまり元気じゃない [ ___ ] すからどうしたほうがいいですか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今あまり元気じゃないですからどうしたほうがいいですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "から",
                    "と",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "バンコクまで ２時間で 行けますか",
                "sentence": "バンコクま [ ___ ]  ２時間で 行けますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: バンコクまで ２時間で 行けますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "が",
                    "も",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "30課の漢字を覚えているでしょうか",
                "sentence": "30課の漢字を覚えている [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 30課の漢字を覚えているでしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "の",
                    "を",
                    "と",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "50パーツでコンサートのチケットが買えますか",
                "sentence": "50パーツ [ ___ ] コンサートのチケットが買えますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 50パーツでコンサートのチケットが買えますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "も",
                    "から",
                    "で",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "明日雨が降るかもしれないと思いますか",
                "sentence": "明日雨 [ ___ ] 降るかもしれないと思いますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 明日雨が降るかもしれないと思いますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "まで",
                    "から",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ビールを飲んだら 仕事が出来ないと思いますか",
                "sentence": "ビール [ ___ ] 飲んだら 仕事が出来ないと思いますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ビールを飲んだら 仕事が出来ないと思いますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "も",
                    "へ",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "上手になりたかったら 毎日本を読んだほうがいいでしょうか",
                "sentence": "上手になりたかったら 毎日本を読んだほうがいい [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 上手になりたかったら 毎日本を読んだほうがいいでしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "と",
                    "は",
                    "で",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "10分で漢字をどのくらい覚えられますか",
                "sentence": "10分 [ ___ ] 漢字をどのくらい覚えられますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 10分で漢字をどのくらい覚えられますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "と",
                    "で",
                    "が"
                ],
                "correct": 2
            }
        ]
    },
    "33": {
        "title": "第 33 課 ไวยากรณ์",
        "sub": "命令形・禁止形 (รูปคำสั่งและรูปห้าม)",
        "emoji": "⛔",
        "questions": [
            {
                "fullSentence": "あの漢字は何と書いてありますか",
                "sentence": "あの漢字は何 [ ___ ] 書いてありますか",
                "blankParticle": "と",
                "thaiHint": "ประโยค: あの漢字は何と書いてありますか",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "と",
                    "は",
                    "が",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "この漢字は何と読みますか",
                "sentence": "この漢字は何 [ ___ ] 読みますか",
                "blankParticle": "と",
                "thaiHint": "ประโยค: この漢字は何と読みますか",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "に",
                    "の",
                    "も",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "かんばんに何と書いてありますか",
                "sentence": "かんばん [ ___ ] 何と書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: かんばんに何と書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "の",
                    "が",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ドアに何と書いてありますか",
                "sentence": "ドア [ ___ ] 何と書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ドアに何と書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "が",
                    "に",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "Aさんの顔はBさんの顔と同じですか",
                "sentence": "Aさんの顔はBさんの顔と同じ [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: Aさんの顔はBさんの顔と同じですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "から",
                    "の",
                    "は",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "立ち入り禁止はどう言う意味ですか",
                "sentence": "立ち入り禁止はどう言う意味 [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 立ち入り禁止はどう言う意味ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "より",
                    "を",
                    "で",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "そのマ-クはどう言う意味ですか",
                "sentence": "そのマ-クはどう言う意味 [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: そのマ-クはどう言う意味ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "を",
                    "も",
                    "が",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "禁煙はどう言う意味ですか",
                "sentence": "禁煙はどう言う意味 [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 禁煙はどう言う意味ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "と",
                    "で",
                    "に",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "喫煙はどう言う意味ですか",
                "sentence": "喫煙はどう言う意味 [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 喫煙はどう言う意味ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "より",
                    "に",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "そのノ-トに何と書いてありますか",
                "sentence": "そのノ-ト [ ___ ] 何と書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: そのノ-トに何と書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "より",
                    "も",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "鞄を早く持って行け！",
                "sentence": "鞄 [ ___ ] 早く持って行け！",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 鞄を早く持って行け！",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "まで",
                    "を",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本語が分からないから毎日勉強しろ！",
                "sentence": "日本語 [ ___ ] 分からないから毎日勉強しろ！",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本語が分からないから毎日勉強しろ！",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "は",
                    "に",
                    "が",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あれはどういう意味ですか",
                "sentence": "あれはどういう意味 [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あれはどういう意味ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "へ",
                    "は",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ここで電話をするな！",
                "sentence": "ここで電話 [ ___ ] するな！",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ここで電話をするな！",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "が",
                    "の",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "教室の中に座るな！",
                "sentence": "教室の中 [ ___ ] 座るな！",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 教室の中に座るな！",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "へ",
                    "は",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "出口はどこに書いてありますか",
                "sentence": "出口はどこ [ ___ ] 書いてありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 出口はどこに書いてありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "に",
                    "より",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "無料はどう言う意味ですか",
                "sentence": "無料はどう言う意味 [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 無料はどう言う意味ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "も",
                    "で",
                    "を",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "教室の中でお酒を飲むな!",
                "sentence": "教室の中でお酒 [ ___ ] 飲むな!",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 教室の中でお酒を飲むな!",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "は",
                    "で",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "これは何と読みますか",
                "sentence": "これは何 [ ___ ] 読みますか",
                "blankParticle": "と",
                "thaiHint": "ประโยค: これは何と読みますか",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "と",
                    "は",
                    "を",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "それは何と書きますか",
                "sentence": "それは何 [ ___ ] 書きますか",
                "blankParticle": "と",
                "thaiHint": "ประโยค: それは何と書きますか",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "へ",
                    "で",
                    "と",
                    "に"
                ],
                "correct": 2
            }
        ]
    },
    "34": {
        "title": "第 34 課 ไวยากรณ์",
        "sub": "～とおりに, ～あとで (ตามที่... และ หลังจาก...)",
        "emoji": "👣",
        "questions": [
            {
                "fullSentence": "先生が言ったとおりにひらがなで書いて下さい",
                "sentence": "先生が言ったとおり [ ___ ] ひらがなで書いて下さい",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 先生が言ったとおりにひらがなで書いて下さい",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "を",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "先生がやったとおりにやって下さい",
                "sentence": "先生がやったとおり [ ___ ] やって下さい",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 先生がやったとおりにやって下さい",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "に",
                    "まで",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "このマークのとおりに 意味を教えて下さい",
                "sentence": "このマークのとおり [ ___ ]  意味を教えて下さい",
                "blankParticle": "に",
                "thaiHint": "ประโยค: このマークのとおりに 意味を教えて下さい",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "まで",
                    "で",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "勉強した後で一緒に市場へ行きませんか",
                "sentence": "勉強した後で一緒 [ ___ ] 市場へ行きませんか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 勉強した後で一緒に市場へ行きませんか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "まで",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ご飯を食べた後で何と言いますか",
                "sentence": "ご飯 [ ___ ] 食べた後で何と言いますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ご飯を食べた後で何と言いますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "を",
                    "に",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "掃除の後で綺麗になりますか",
                "sentence": "掃除の後で綺麗 [ ___ ] なりますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 掃除の後で綺麗になりますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "の",
                    "へ",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "手で使わないでご飯を食べられますか",
                "sentence": "手で使わないでご飯 [ ___ ] 食べられますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 手で使わないでご飯を食べられますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "と",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "私が言ったとおりにして下さい",
                "sentence": "私が言ったとおり [ ___ ] して下さい",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 私が言ったとおりにして下さい",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "が",
                    "は",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "スポーツの後でシャワーを浴びますか",
                "sentence": "スポーツの後でシャワー [ ___ ] 浴びますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: スポーツの後でシャワーを浴びますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "へ",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "食事の後で歯を磨きますか",
                "sentence": "食事の後で歯 [ ___ ] 磨きますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 食事の後で歯を磨きますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "より",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ビデオで見たとおりに踊って下さい",
                "sentence": "ビデオで見たとおり [ ___ ] 踊って下さい",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ビデオで見たとおりに踊って下さい",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "に",
                    "を",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "きょかしないで休むことができますか？",
                "sentence": "きょかしないで休むこと [ ___ ] できますか？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: きょかしないで休むことができますか？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "から",
                    "と",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "シャワーを浴びないで寝たことがあります",
                "sentence": "シャワー [ ___ ] 浴びないで寝たことがあります",
                "blankParticle": "を",
                "thaiHint": "ประโยค: シャワーを浴びないで寝たことがあります",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "の",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "シャワーを浴びた後で すぐ服を着ますか",
                "sentence": "シャワー [ ___ ] 浴びた後で すぐ服を着ますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: シャワーを浴びた後で すぐ服を着ますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "も",
                    "を",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "独身の漢字を見ないで書けますか",
                "sentence": "独身の漢字 [ ___ ] 見ないで書けますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 独身の漢字を見ないで書けますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "の",
                    "から",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ビザがないで日本へ行けますか",
                "sentence": "ビザ [ ___ ] ないで日本へ行けますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ビザがないで日本へ行けますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "の",
                    "と",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "さっき先生が文法を説明した後で短い文章を作って下さい",
                "sentence": "さっき先生が文法 [ ___ ] 説明した後で短い文章を作って下さい",
                "blankParticle": "を",
                "thaiHint": "ประโยค: さっき先生が文法を説明した後で短い文章を作って下さい",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "は",
                    "を",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "分からない時 誰にも聞かないで仕事が出来ますか",
                "sentence": "分からない時 誰にも聞かないで仕事 [ ___ ] 出来ますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 分からない時 誰にも聞かないで仕事が出来ますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "が",
                    "の",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本へ帰った後で何をすると思いますか",
                "sentence": "日本へ帰った後で何 [ ___ ] すると思いますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本へ帰った後で何をすると思いますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "も",
                    "で",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "毎日起きた後で何をしていますか",
                "sentence": "毎日起きた後で何 [ ___ ] していますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日起きた後で何をしていますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "の",
                    "を",
                    "も"
                ],
                "correct": 2
            }
        ]
    },
    "35": {
        "title": "第 35 課 ไวยากรณ์",
        "sub": "条件形 (รูปเงื่อนไข - ～ば)",
        "emoji": "🍀",
        "questions": [
            {
                "fullSentence": "どうすれば日本語が上手になりますか",
                "sentence": "どうすれば日本語 [ ___ ] 上手になりますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: どうすれば日本語が上手になりますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "と",
                    "から",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "毎日漢字を練習すれば覚えられますか",
                "sentence": "毎日漢字 [ ___ ] 練習すれば覚えられますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日漢字を練習すれば覚えられますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "に",
                    "まで",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "このボタンを押せばどうなりますか",
                "sentence": "このボタン [ ___ ] 押せばどうなりますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: このボタンを押せばどうなりますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "より",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "明日いい天気なら出かけますか",
                "sentence": "明日いい天気なら出かけますか [ ___ ]",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 明日いい天気なら出かけますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "と",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ここを押すとドアが開きますか",
                "sentence": "ここ [ ___ ] 押すとドアが開きますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ここを押すとドアが開きますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "を",
                    "の",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "どうすれば言葉をおぼえられますか",
                "sentence": "どうすれば言葉 [ ___ ] おぼえられますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: どうすれば言葉をおぼえられますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "へ",
                    "を",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "雨が降ればすずしくなりますか",
                "sentence": "雨 [ ___ ] 降ればすずしくなりますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 雨が降ればすずしくなりますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "で",
                    "を",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "いい天気なら山登りに行きたいですか",
                "sentence": "いい天気なら山登り [ ___ ] 行きたいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: いい天気なら山登りに行きたいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "の",
                    "まで",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "あなたの故郷へ遊びに行きたいんですがどうすればいいですか",
                "sentence": "あなたの故郷へ遊び [ ___ ] 行きたいんですがどうすればいいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたの故郷へ遊びに行きたいんですがどうすればいいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "へ",
                    "に",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "毎日日本語で話せばもっと上手になりますか",
                "sentence": "毎日日本語で話せばもっと上手 [ ___ ] なりますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 毎日日本語で話せばもっと上手になりますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "が",
                    "で",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "漢字がわかればべんりですか",
                "sentence": "漢字 [ ___ ] わかればべんりですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 漢字がわかればべんりですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "に",
                    "の",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "機会が、あればどこへ行きたいですか",
                "sentence": "機会 [ ___ ] 、あればどこへ行きたいですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 機会が、あればどこへ行きたいですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "へ",
                    "が",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "時間があれば何をしたいですか",
                "sentence": "時間があれば何 [ ___ ] したいですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 時間があれば何をしたいですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "で",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "言葉がわからなければどうしますか",
                "sentence": "言葉 [ ___ ] わからなければどうしますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 言葉がわからなければどうしますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "で",
                    "も",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "暑ければエアコンをつけてもいいですか",
                "sentence": "暑ければエアコン [ ___ ] つけてもいいですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 暑ければエアコンをつけてもいいですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "を",
                    "も",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "明日休みなら海に行きませんか",
                "sentence": "明日休みなら海 [ ___ ] 行きませんか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 明日休みなら海に行きませんか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "と",
                    "は",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語がわからなければ先生に聞きますか",
                "sentence": "日本語 [ ___ ] わからなければ先生に聞きますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本語がわからなければ先生に聞きますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "から",
                    "の",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "問題があればどうしますか",
                "sentence": "問題 [ ___ ] あればどうしますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 問題があればどうしますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "より",
                    "も",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "どうすればN3が合格しますか",
                "sentence": "どうすればN3 [ ___ ] 合格しますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: どうすればN3が合格しますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "と",
                    "に",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "毎日運動すれば細くなりますか",
                "sentence": "毎日運動すれば細くなりますか [ ___ ]",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 毎日運動すれば細くなりますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "より",
                    "に",
                    "の"
                ],
                "correct": 0
            }
        ]
    },
    "36": {
        "title": "第 36 課 ไวยากรณ์",
        "sub": "～ように (เพื่อให้...), ～ようになります (เริ่มทำได้)",
        "emoji": "🎯",
        "questions": [
            {
                "fullSentence": "日本語が上手になるように毎日日本人と話していますか",
                "sentence": "日本語が上手 [ ___ ] なるように毎日日本人と話していますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本語が上手になるように毎日日本人と話していますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "に",
                    "まで",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "漢字を忘れないように毎日復習していますか",
                "sentence": "漢字を忘れないよう [ ___ ] 毎日復習していますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 漢字を忘れないように毎日復習していますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "より",
                    "が",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "先生の話を忘れないようにメモしてください。",
                "sentence": "先生の話を忘れないよう [ ___ ] メモしてください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 先生の話を忘れないようにメモしてください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "より",
                    "に",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "元気になるように毎日運動していますか",
                "sentence": "元気 [ ___ ] なるように毎日運動していますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 元気になるように毎日運動していますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "は",
                    "の",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "電気代が高くならないように家を出る前に電気をけしてください。",
                "sentence": "電気代が高くならないよう [ ___ ] 家を出る前に電気をけしてください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 電気代が高くならないように家を出る前に電気をけしてください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "が",
                    "まで",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ほとんど漢字がかけるようになりましたか",
                "sentence": "ほとんど漢字がかけるよう [ ___ ] なりましたか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ほとんど漢字がかけるようになりましたか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "に",
                    "へ",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "辛い物が食べられるようになりましたか",
                "sentence": "辛い物が食べられるよう [ ___ ] なりましたか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 辛い物が食べられるようになりましたか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "に",
                    "より",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本語が話せるようになりたいですか",
                "sentence": "日本語が話せるよう [ ___ ] なりたいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本語が話せるようになりたいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "まで",
                    "で",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "漢字がいくつ読めようになりましたか",
                "sentence": "漢字がいくつ読めよう [ ___ ] なりましたか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 漢字がいくつ読めようになりましたか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "が",
                    "に",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "刺身がたべられるようになりましたか",
                "sentence": "刺身がたべられるよう [ ___ ] なりましたか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 刺身がたべられるようになりましたか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "は",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "喉が痛いから温い水を飲むようにしていますか",
                "sentence": "喉が痛いから温い水を飲むよう [ ___ ] していますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 喉が痛いから温い水を飲むようにしていますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "まで",
                    "へ",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "体に悪いですからたばこを吸わないようにしていますか",
                "sentence": "体 [ ___ ] 悪いですからたばこを吸わないようにしていますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 体に悪いですからたばこを吸わないようにしていますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "へ",
                    "から",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "体に悪いですからお酒を飲まないようにしてください。",
                "sentence": "体 [ ___ ] 悪いですからお酒を飲まないようにしてください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 体に悪いですからお酒を飲まないようにしてください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "で",
                    "の",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "在留カードを失くさないようにしてください。",
                "sentence": "在留カードを失くさないよう [ ___ ] してください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 在留カードを失くさないようにしてください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "は",
                    "に",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "大切ですから忘れないようにしてください。",
                "sentence": "大切ですから忘れないよう [ ___ ] してください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 大切ですから忘れないようにしてください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "と",
                    "が",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "自動車が運転できるようになりたいですか",
                "sentence": "自動車が運転できるよう [ ___ ] なりたいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 自動車が運転できるようになりたいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "に",
                    "を",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "早く漢字が書けるようになりたいですか",
                "sentence": "早く漢字が書けるよう [ ___ ] なりたいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 早く漢字が書けるようになりたいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "へ",
                    "で",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "早く上手に日本語が話せるようになりたいでか",
                "sentence": "早く上手 [ ___ ] 日本語が話せるようになりたいでか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 早く上手に日本語が話せるようになりたいでか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "に",
                    "へ",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "早く上手に仕事ができるようになりたいですか",
                "sentence": "早く上手 [ ___ ] 仕事ができるようになりたいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 早く上手に仕事ができるようになりたいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "が",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "約束を守るようにしてくださいね。",
                "sentence": "約束を守るよう [ ___ ] してくださいね。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 約束を守るようにしてくださいね。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "から",
                    "が",
                    "に"
                ],
                "correct": 3
            }
        ]
    },
    "37": {
        "title": "第 37 課 ไวยากรณ์",
        "sub": "受身形 (รูปถูกกระทำ / Passive - に...られます)",
        "emoji": "🐱",
        "questions": [
            {
                "fullSentence": "私は母に褒められたことがある？",
                "sentence": "私は母 [ ___ ] 褒められたことがある？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 私は母に褒められたことがある？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "は",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "弟は私に苛められたことがある？",
                "sentence": "弟は私に苛められたこと [ ___ ] ある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 弟は私に苛められたことがある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "が",
                    "も",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは先生に宿題をされましたか",
                "sentence": "あなたは先生 [ ___ ] 宿題をされましたか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたは先生に宿題をされましたか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "へ",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "私は妹にお菓子をたべられましたか",
                "sentence": "私は妹にお菓子 [ ___ ] たべられましたか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 私は妹にお菓子をたべられましたか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "を",
                    "も",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "犬に噛まれたことがありますか",
                "sentence": "犬 [ ___ ] 噛まれたことがありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 犬に噛まれたことがありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "と",
                    "へ",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "母に怒られたことがありますか",
                "sentence": "母 [ ___ ] 怒られたことがありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 母に怒られたことがありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "も",
                    "まで",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "社長にアホと言われたことがある？",
                "sentence": "社長にアホと言われたこと [ ___ ] ある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 社長にアホと言われたことがある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "も",
                    "へ",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは先輩にビールを買われたことがある？",
                "sentence": "あなたは先輩にビール [ ___ ] 買われたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: あなたは先輩にビールを買われたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "の",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは犬に足を噛まれたことがある？",
                "sentence": "あなたは犬 [ ___ ] 足を噛まれたことがある？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたは犬に足を噛まれたことがある？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "の",
                    "と",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "あなたは泥棒にかばんをとられたことがありますか",
                "sentence": "あなたは泥棒 [ ___ ] かばんをとられたことがありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: あなたは泥棒にかばんをとられたことがありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "に",
                    "まで",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "私は弟にカメラを壊されたことがある？",
                "sentence": "私は弟にカメラ [ ___ ] 壊されたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 私は弟にカメラを壊されたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "も",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "私は友達にお金を失くされて たいへんだったね？",
                "sentence": "私は友達 [ ___ ] お金を失くされて たいへんだったね？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 私は友達にお金を失くされて たいへんだったね？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "と",
                    "まで",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "今日、車に足を踏まれて いたかった？",
                "sentence": "今日、車に足 [ ___ ] 踏まれて いたかった？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今日、車に足を踏まれて いたかった？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "に",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "毎年、名古屋と大阪タイフェスティバルが開かれていますよ、知っている？",
                "sentence": "毎年、名古屋と大阪タイフェスティバル [ ___ ] 開かれていますよ、知っている？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 毎年、名古屋と大阪タイフェスティバルが開かれていますよ、知っている？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "を",
                    "に",
                    "が",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この車は世界中で売られていますよ、知っている？",
                "sentence": "この車は世界中 [ ___ ] 売られていますよ、知っている？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: この車は世界中で売られていますよ、知っている？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "の",
                    "も",
                    "で",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "お酒は米から造られるでしょう？",
                "sentence": "お酒は米から造られる [ ___ ] しょう？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: お酒は米から造られるでしょう？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "が",
                    "に",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "紙が木から造られるのを知っている？",
                "sentence": "紙が木から造られるの [ ___ ] 知っている？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 紙が木から造られるのを知っている？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "を",
                    "へ",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "この上に置けますか",
                "sentence": "この上 [ ___ ] 置けますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: この上に置けますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "より",
                    "を",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "その下に靴が置けますか",
                "sentence": "その下に靴 [ ___ ] 置けますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: その下に靴が置けますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "から",
                    "が",
                    "と",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あの隣に車が止められますか",
                "sentence": "あの隣に車 [ ___ ] 止められますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: あの隣に車が止められますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "が",
                    "は",
                    "を"
                ],
                "correct": 1
            }
        ]
    },
    "38": {
        "title": "第 38 課 ไวยากรณ์",
        "sub": "คำนามกริยา ～のは / ～のを / ～のが (การทำสิ่งต่างๆ)",
        "emoji": "⚽",
        "questions": [
            {
                "fullSentence": "サッカーをするのは楽しいと思う？",
                "sentence": "サッカーをするの [ ___ ] 楽しいと思う？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: サッカーをするのは楽しいと思う？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "が",
                    "から",
                    "は",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "サッカーを見るのは面白いと思う？",
                "sentence": "サッカーを見るの [ ___ ] 面白いと思う？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: サッカーを見るのは面白いと思う？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "へ",
                    "は",
                    "で",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "このゲームをするのは易しいと思う？",
                "sentence": "このゲームをするの [ ___ ] 易しいと思う？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: このゲームをするのは易しいと思う？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "から",
                    "は",
                    "で",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本語を勉強するのは難しいと思う？",
                "sentence": "日本語を勉強するの [ ___ ] 難しいと思う？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 日本語を勉強するのは難しいと思う？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "と",
                    "も",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "仕事をするのはたいへんですよ、大丈夫の？",
                "sentence": "仕事をするの [ ___ ] たいへんですよ、大丈夫の？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 仕事をするのはたいへんですよ、大丈夫の？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "で",
                    "に",
                    "は",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたはサッカーをするのが好きですか",
                "sentence": "あなたはサッカーをするの [ ___ ] 好きですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: あなたはサッカーをするのが好きですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "から",
                    "が",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたは料理を作るのが嫌いの？",
                "sentence": "あなたは料理を作るの [ ___ ] 嫌いの？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: あなたは料理を作るのが嫌いの？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "へ",
                    "が",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "私は野球をするのが上手ですか",
                "sentence": "私は野球をするの [ ___ ] 上手ですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 私は野球をするのが上手ですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "から",
                    "まで",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "馬は走るのが速いですよ、乗ったことがある？",
                "sentence": "馬は走るの [ ___ ] 速いですよ、乗ったことがある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 馬は走るのが速いですよ、乗ったことがある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "で",
                    "を",
                    "より",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "亀は歩くのが遅いですか",
                "sentence": "亀は歩くの [ ___ ] 遅いですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 亀は歩くのが遅いですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "も",
                    "を",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ドアを閉めるのを忘れないようにしてね",
                "sentence": "ドア [ ___ ] 閉めるのを忘れないようにしてね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ドアを閉めるのを忘れないようにしてね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "も",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "その教室の電気をけすのを忘れないようにしてね",
                "sentence": "その教室の電気 [ ___ ] けすのを忘れないようにしてね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: その教室の電気をけすのを忘れないようにしてね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "に",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "切符を買うのを忘れないでください。",
                "sentence": "切符 [ ___ ] 買うのを忘れないでください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 切符を買うのを忘れないでください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "も",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "教科書をもっていくのを忘れないでください。",
                "sentence": "教科書 [ ___ ] もっていくのを忘れないでください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 教科書をもっていくのを忘れないでください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "も",
                    "の",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "名前を書くのを忘れたか",
                "sentence": "名前 [ ___ ] 書くのを忘れたか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 名前を書くのを忘れたか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "が",
                    "の",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日、先生が学校に来ないのを知っていますか",
                "sentence": "明日、先生が学校に来ないの [ ___ ] 知っていますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 明日、先生が学校に来ないのを知っていますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "より",
                    "まで",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "来月、先生が日本へ行くのを知っていますか",
                "sentence": "来月、先生が日本へ行くの [ ___ ] 知っていますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 来月、先生が日本へ行くのを知っていますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "で",
                    "に",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "初めて来たのはいつですか",
                "sentence": "初めて来たの [ ___ ] いつですか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 初めて来たのはいつですか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "も",
                    "は",
                    "から",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今、大切なのは母ですか",
                "sentence": "今、大切なの [ ___ ] 母ですか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 今、大切なのは母ですか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "へ",
                    "は",
                    "まで",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "私が欲しいのは携帯電話です。",
                "sentence": "私が欲しいの [ ___ ] 携帯電話です。",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 私が欲しいのは携帯電話です。",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "も",
                    "が",
                    "を",
                    "は"
                ],
                "correct": 3
            }
        ]
    },
    "39": {
        "title": "第 39 課 ไวยากรณ์",
        "sub": "～て / ～で (เหตุและผล - สาเหตุที่ทำให้เกิดความรู้สึก)",
        "emoji": "😭",
        "questions": [
            {
                "fullSentence": "今日は事故が  あって、びっくりしましたよ。",
                "sentence": "今日は事故 [ ___ ]   あって、びっくりしましたよ。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今日は事故が  あって、びっくりしましたよ。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "の",
                    "が",
                    "より",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "恋人にあえて、とてもうれしかったですよ。",
                "sentence": "恋人 [ ___ ] あえて、とてもうれしかったですよ。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 恋人にあえて、とてもうれしかったですよ。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "から",
                    "で",
                    "に",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "昨日は調子が良くなくて、いけませんでしたよ。",
                "sentence": "昨日は調子 [ ___ ] 良くなくて、いけませんでしたよ。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 昨日は調子が良くなくて、いけませんでしたよ。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "から",
                    "に",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日 犬が死んで   とても悲しかったなぁ。",
                "sentence": "昨日 犬 [ ___ ] 死んで   とても悲しかったなぁ。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 昨日 犬が死んで   とても悲しかったなぁ。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "で",
                    "を",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "津波で人がたくさん死んだのをしっていますか。",
                "sentence": "津波で人 [ ___ ] たくさん死んだのをしっていますか。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 津波で人がたくさん死んだのをしっていますか。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "は",
                    "まで",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "昨日、地震のニュースを見て 悲しかったです。",
                "sentence": "昨日、地震のニュース [ ___ ] 見て 悲しかったです。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 昨日、地震のニュースを見て 悲しかったです。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "と",
                    "を",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今日、調子が悪くてご飯も食べたくなくなりましたよ。",
                "sentence": "今日、調子 [ ___ ] 悪くてご飯も食べたくなくなりましたよ。",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今日、調子が悪くてご飯も食べたくなくなりましたよ。",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "も",
                    "から",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "出張でパーテイーに行けないと思う、大丈夫の",
                "sentence": "出張でパーテイー [ ___ ] 行けないと思う、大丈夫の",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 出張でパーテイーに行けないと思う、大丈夫の",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "から",
                    "と",
                    "に",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "事故で道が混んだね。",
                "sentence": "事故 [ ___ ] 道が混んだね。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 事故で道が混んだね。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "に",
                    "で",
                    "の",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "漢字が 読めないので かたがなで書いてもらいませんか",
                "sentence": "漢字 [ ___ ]  読めないので かたがなで書いてもらいませんか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 漢字が 読めないので かたがなで書いてもらいませんか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "で",
                    "が",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "車がないので、迎えに来てもらいませんか",
                "sentence": "車 [ ___ ] ないので、迎えに来てもらいませんか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 車がないので、迎えに来てもらいませんか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "から",
                    "に",
                    "が",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "雨が降っているので 出かけなくてもいいですか",
                "sentence": "雨 [ ___ ] 降っているので 出かけなくてもいいですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 雨が降っているので 出かけなくてもいいですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "まで",
                    "が",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "サイズが合わないので 新しいやっつがありますか",
                "sentence": "サイズ [ ___ ] 合わないので 新しいやっつがありますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: サイズが合わないので 新しいやっつがありますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "が",
                    "は",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "問題があるので 相談してもいいですか",
                "sentence": "問題 [ ___ ] あるので 相談してもいいですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 問題があるので 相談してもいいですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "から",
                    "まで",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "必要な物なので 持って来てください",
                "sentence": "必要な物なの [ ___ ]  持って来てください",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 必要な物なので 持って来てください",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "と",
                    "より",
                    "で",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この製品は作っている途中で ちょっと待ってね。",
                "sentence": "この製品は作っている途中 [ ___ ]  ちょっと待ってね。",
                "blankParticle": "で",
                "thaiHint": "ประโยค: この製品は作っている途中で ちょっと待ってね。",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "は",
                    "より",
                    "で",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "出かける途中で雨が降って来たら誰に傘を借りてもらえますか",
                "sentence": "出かける途中で雨 [ ___ ] 降って来たら誰に傘を借りてもらえますか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 出かける途中で雨が降って来たら誰に傘を借りてもらえますか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "まで",
                    "も",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "勉強の途中でお腹がいたくなったら何を飲まないとだめなのか",
                "sentence": "勉強の途中でお腹 [ ___ ] いたくなったら何を飲まないとだめなのか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 勉強の途中でお腹がいたくなったら何を飲まないとだめなのか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "の",
                    "より",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "食事の途中で携帯電話を使ってはいけないよ、分かる？",
                "sentence": "食事の途中で携帯電話 [ ___ ] 使ってはいけないよ、分かる？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 食事の途中で携帯電話を使ってはいけないよ、分かる？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "は",
                    "で",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日、寝る途中で夢を見たことがある？",
                "sentence": "昨日、寝る途中で夢を見たこと [ ___ ] ある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 昨日、寝る途中で夢を見たことがある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "は",
                    "も",
                    "まで"
                ],
                "correct": 0
            }
        ]
    },
    "40": {
        "title": "第 40 課 ไวยากรณ์",
        "sub": "疑問詞 + か, ～かどうか (คำถามซ้อนในประโยค)",
        "emoji": "❓",
        "questions": [
            {
                "fullSentence": "何時に行くか、まだ 分からなかったら、先輩に聞いて",
                "sentence": "何時 [ ___ ] 行くか、まだ 分からなかったら、先輩に聞いて",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 何時に行くか、まだ 分からなかったら、先輩に聞いて",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "と",
                    "より",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "学校に入ったのはいつか、忘れたら、先生に聞いてください。",
                "sentence": "学校 [ ___ ] 入ったのはいつか、忘れたら、先生に聞いてください。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 学校に入ったのはいつか、忘れたら、先生に聞いてください。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "に",
                    "が",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "このお菓子は美味しいか 食べてください。",
                "sentence": "このお菓子 [ ___ ] 美味しいか 食べてください。",
                "blankParticle": "は",
                "thaiHint": "ประโยค: このお菓子は美味しいか 食べてください。",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "が",
                    "の",
                    "は",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "友達が日本に行くか 知っていますか",
                "sentence": "友達が日本 [ ___ ] 行くか 知っていますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 友達が日本に行くか 知っていますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "は",
                    "が",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "明日、勉強に行けるかどうかまだ分かりません，また教えてね",
                "sentence": "明日、勉強 [ ___ ] 行けるかどうかまだ分かりません，また教えてね",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 明日、勉強に行けるかどうかまだ分かりません，また教えてね",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "で",
                    "に",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "明日パーテイーにいけるかどうかまだ分からないので",
                "sentence": "明日パーテイー [ ___ ] いけるかどうかまだ分からないので",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 明日パーテイーにいけるかどうかまだ分からないので",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "と",
                    "に",
                    "が",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "じゃ また後で教えてね",
                "sentence": "じゃ また後 [ ___ ] 教えてね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: じゃ また後で教えてね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "も",
                    "へ",
                    "に",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "雨が降るかどうか天気予報を見て",
                "sentence": "雨が降るかどうか天気予報 [ ___ ] 見て",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 雨が降るかどうか天気予報を見て",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "は",
                    "より",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "マラソン大会に 参加するかどうか明日までに教えてください",
                "sentence": "マラソン大会 [ ___ ]  参加するかどうか明日までに教えてください",
                "blankParticle": "に",
                "thaiHint": "ประโยค: マラソン大会に 参加するかどうか明日までに教えてください",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "を",
                    "に",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "発表会に参加するかどうかまだわかりませんタイ語で何ですか",
                "sentence": "発表会 [ ___ ] 参加するかどうかまだわかりませんタイ語で何ですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 発表会に参加するかどうかまだわかりませんタイ語で何ですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "から",
                    "に",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "もう一度馬にのってみたいなぁ",
                "sentence": "もう一度馬 [ ___ ] のってみたいなぁ",
                "blankParticle": "に",
                "thaiHint": "ประโยค: もう一度馬にのってみたいなぁ",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "も",
                    "の",
                    "を",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "料理を作ってみたいですか",
                "sentence": "料理 [ ___ ] 作ってみたいですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 料理を作ってみたいですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "は",
                    "を",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "もし 日本へ行ったら 寿司を食べてみたい？",
                "sentence": "もし 日本へ行ったら 寿司 [ ___ ] 食べてみたい？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: もし 日本へ行ったら 寿司を食べてみたい？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "が",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "大阪へ行ってみたい？",
                "sentence": "大阪 [ ___ ] 行ってみたい？",
                "blankParticle": "へ",
                "thaiHint": "ประโยค: 大阪へ行ってみたい？",
                "explanation": "ใช้ 'へ' (e) ชี้ทิศทางหรือจุดหมายการเคลื่อนที่ (行きます, 来ます, 帰ります)",
                "choices": [
                    "から",
                    "へ",
                    "まで",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "富士山に登りに行ってみたいですか",
                "sentence": "富士山 [ ___ ] 登りに行ってみたいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 富士山に登りに行ってみたいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "も",
                    "から",
                    "に",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本へ行ったら スキーをしてみたいですか",
                "sentence": "日本へ行ったら スキー [ ___ ] してみたいですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本へ行ったら スキーをしてみたいですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "に",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語を勉強してみますか？",
                "sentence": "日本語 [ ___ ] 勉強してみますか？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本語を勉強してみますか？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "より",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "この長さを測ってみてください。",
                "sentence": "この長さ [ ___ ] 測ってみてください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: この長さを測ってみてください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "より",
                    "と",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "鉄の長さを測ってください。",
                "sentence": "鉄の長さ [ ___ ] 測ってください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 鉄の長さを測ってください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "より",
                    "に",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "富士山の高さが3776メートルをしっていますか？          20箱の長さと高さを測ってください。",
                "sentence": "富士山の高さが3776メートル [ ___ ] しっていますか？          20箱の長さと高さを測ってください。",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 富士山の高さが3776メートルをしっていますか？          20箱の長さと高さを測ってください。",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "まで",
                    "を",
                    "から"
                ],
                "correct": 2
            }
        ]
    },
    "41": {
        "title": "第 41 課 ไวยากรณ์",
        "sub": "やります, いただきます, くださいます (การให้-รับอย่างสุภาพ)",
        "emoji": "🎁",
        "questions": [
            {
                "fullSentence": "わたしは先生にプレゼントをいただいて 嬉しかった？",
                "sentence": "わたしは先生 [ ___ ] プレゼントをいただいて 嬉しかった？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: わたしは先生にプレゼントをいただいて 嬉しかった？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "と",
                    "から",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "もし、部長にお土産をいただいたら、ありがとうございますといってね",
                "sentence": "もし、部長にお土産 [ ___ ] いただいたら、ありがとうございますといってね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: もし、部長にお土産をいただいたら、ありがとうございますといってね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "も",
                    "を",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "わたしは友達にお菓子をもらったよ、美味しかった？",
                "sentence": "わたしは友達にお菓子 [ ___ ] もらったよ、美味しかった？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: わたしは友達にお菓子をもらったよ、美味しかった？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "まで",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "このお菓子は友達にいただきましたか",
                "sentence": "このお菓子は友達 [ ___ ] いただきましたか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: このお菓子は友達にいただきましたか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "が",
                    "と",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "社長がわたしにお土産をくださいました、よかったなぁ",
                "sentence": "社長がわたしにお土産 [ ___ ] くださいました、よかったなぁ",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 社長がわたしにお土産をくださいました、よかったなぁ",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "を",
                    "より",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "犬にえさをやったことがありますか",
                "sentence": "犬 [ ___ ] えさをやったことがありますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 犬にえさをやったことがありますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "から",
                    "が",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "校長先生があなたにAIUの5Sを教えてくださましたか",
                "sentence": "校長先生があなたにAIUの5S [ ___ ] 教えてくださましたか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 校長先生があなたにAIUの5Sを教えてくださましたか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "と",
                    "まで",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "毎日、花に水をやっている？",
                "sentence": "毎日、花 [ ___ ] 水をやっている？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 毎日、花に水をやっている？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "は",
                    "まで",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "昨日さるにえさをやりましたか",
                "sentence": "昨日さるにえさ [ ___ ] やりましたか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 昨日さるにえさをやりましたか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "の",
                    "まで",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "私は先生に宿題に間違いを直していただきましたよ。",
                "sentence": "私は先生 [ ___ ] 宿題に間違いを直していただきましたよ。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 私は先生に宿題に間違いを直していただきましたよ。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "まで",
                    "へ",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日、父が駅まで送ってくださいましたか",
                "sentence": "昨日、父 [ ___ ] 駅まで送ってくださいましたか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 昨日、父が駅まで送ってくださいましたか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "で",
                    "が",
                    "に",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "昨日、母が私に料理をつくってくださいました美味しかった？",
                "sentence": "昨日、母が私に料理 [ ___ ] つくってくださいました美味しかった？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 昨日、母が私に料理をつくってくださいました美味しかった？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "は",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "友達が私に仕事を手伝ってくださいました，優しいね",
                "sentence": "友達が私に仕事 [ ___ ] 手伝ってくださいました，優しいね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 友達が私に仕事を手伝ってくださいました，優しいね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "の",
                    "を",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "妹にケーキを作ってやったことがある？",
                "sentence": "妹にケーキ [ ___ ] 作ってやったことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 妹にケーキを作ってやったことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "を",
                    "が",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "馬を散歩に連れて行ってやったことがある?",
                "sentence": "馬 [ ___ ] 散歩に連れて行ってやったことがある?",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 馬を散歩に連れて行ってやったことがある?",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "へ",
                    "の",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "大阪の行き方を教えてくださいませんか",
                "sentence": "大阪の行き方 [ ___ ] 教えてくださいませんか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 大阪の行き方を教えてくださいませんか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "が",
                    "と",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "漢字の書き方を教えてくださいませんか",
                "sentence": "漢字の書き方 [ ___ ] 教えてくださいませんか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 漢字の書き方を教えてくださいませんか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "と",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "仕事を教えてくださいませんか",
                "sentence": "仕事 [ ___ ] 教えてくださいませんか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 仕事を教えてくださいませんか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "を",
                    "と",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "いつも だれがお仕事を教えてくださっていますか",
                "sentence": "いつも だれがお仕事 [ ___ ] 教えてくださっていますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: いつも だれがお仕事を教えてくださっていますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "で",
                    "まで",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昨日、誰が迎えにきてえてくださった？",
                "sentence": "昨日、誰 [ ___ ] 迎えにきてえてくださった？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 昨日、誰が迎えにきてえてくださった？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "に",
                    "で",
                    "が"
                ],
                "correct": 3
            }
        ]
    },
    "42": {
        "title": "第 42 課 ไวยากรณ์",
        "sub": "～ために, ～に使います (เพื่อวัตถุประสงค์ / ใช้สำหรับ)",
        "emoji": "💼",
        "questions": [
            {
                "fullSentence": "何のために日本へ行きますか",
                "sentence": "何のため [ ___ ] 日本へ行きますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 何のために日本へ行きますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "に",
                    "は",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "体が良くなるためになにを食べなければなりませんか",
                "sentence": "体が良くなるため [ ___ ] なにを食べなければなりませんか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 体が良くなるためになにを食べなければなりませんか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "に",
                    "も",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "バンコクへ行けるためになにを買わないとだめですか",
                "sentence": "バンコクへ行けるため [ ___ ] なにを買わないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: バンコクへ行けるためになにを買わないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "も",
                    "に",
                    "まで",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "何のためにお金をためますか",
                "sentence": "何のため [ ___ ] お金をためますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 何のためにお金をためますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "と",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本語が上手になるためになにをしないといけませんか",
                "sentence": "日本語が上手 [ ___ ] なるためになにをしないといけませんか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本語が上手になるためになにをしないといけませんか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "に",
                    "より",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寮が綺麗になるために毎日掃除してください",
                "sentence": "寮が綺麗 [ ___ ] なるために毎日掃除してください",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 寮が綺麗になるために毎日掃除してください",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "に",
                    "より",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "このかばんは大きくて 旅行に不便だとおもう？",
                "sentence": "このかばんは大きくて 旅行 [ ___ ] 不便だとおもう？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: このかばんは大きくて 旅行に不便だとおもう？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "に",
                    "と",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寮から 学校に通うのに 便利ですね。",
                "sentence": "寮から 学校 [ ___ ] 通うのに 便利ですね。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 寮から 学校に通うのに 便利ですね。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "を",
                    "に",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "箸🥢はラ-メンを食べるのに 使えますか",
                "sentence": "箸🥢はラ-メン [ ___ ] 食べるのに 使えますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 箸🥢はラ-メンを食べるのに 使えますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "を",
                    "に",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ビ-ルをたくさん飲めば 体にいいですか",
                "sentence": "ビ-ル [ ___ ] たくさん飲めば 体にいいですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ビ-ルをたくさん飲めば 体にいいですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "で",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "世界を守るために なにをしないとだめですか",
                "sentence": "世界を守るため [ ___ ]  なにをしないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 世界を守るために なにをしないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "から",
                    "で",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "学校を建てるのに 何か 必要ですか",
                "sentence": "学校 [ ___ ] 建てるのに 何か 必要ですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 学校を建てるのに 何か 必要ですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "が",
                    "を",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本で仕事をするために何をしないとだめですか",
                "sentence": "日本で仕事をするため [ ___ ] 何をしないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本で仕事をするために何をしないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "は",
                    "まで",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ここからバンコクへ行くのに 何時間 かかるとおもう？",
                "sentence": "ここからバンコクへ行くの [ ___ ]  何時間 かかるとおもう？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ここからバンコクへ行くのに 何時間 かかるとおもう？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "と",
                    "は",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "AIUの5Sが校長先生によって はつめいされるのをしっている？",
                "sentence": "AIUの5Sが校長先生によって はつめいされるの [ ___ ] しっている？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: AIUの5Sが校長先生によって はつめいされるのをしっている？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "を",
                    "から",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "理論と反射と実践と言う原則は校長先生によって 発明されましたとしっている？",
                "sentence": "理論と反射と実践と言う原則は校長先生 [ ___ ] よって 発明されましたとしっている？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 理論と反射と実践と言う原則は校長先生によって 発明されましたとしっている？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "に",
                    "は",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "自分のために日本語を勉強しますか",
                "sentence": "自分のため [ ___ ] 日本語を勉強しますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 自分のために日本語を勉強しますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "に",
                    "と",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "自分の車が持つために貯金するようにしていますか",
                "sentence": "自分の車が持つため [ ___ ] 貯金するようにしていますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 自分の車が持つために貯金するようにしていますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "に",
                    "で",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "先生たちの希望のために私が一生懸命頑張りますか",
                "sentence": "先生たちの希望のため [ ___ ] 私が一生懸命頑張りますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 先生たちの希望のために私が一生懸命頑張りますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "に",
                    "と",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "私の学生のためにいくら大変でも 諦めないと思いますよ。",
                "sentence": "私の学生のため [ ___ ] いくら大変でも 諦めないと思いますよ。",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 私の学生のためにいくら大変でも 諦めないと思いますよ。",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "も",
                    "を",
                    "に",
                    "まで"
                ],
                "correct": 2
            }
        ]
    },
    "43": {
        "title": "第 43 課 ไวยากรณ์",
        "sub": "～そうです (ดูท่าทางเหมือนจะ...), ～てきます",
        "emoji": "👀",
        "questions": [
            {
                "fullSentence": "今雨が降りそうだね",
                "sentence": "今雨 [ ___ ] 降りそうだね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今雨が降りそうだね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "を",
                    "の",
                    "より",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本語が上手になりそうだね",
                "sentence": "日本語が上手 [ ___ ] なりそうだね",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本語が上手になりそうだね",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "まで",
                    "に",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "タイは暑そうだね",
                "sentence": "タイ [ ___ ] 暑そうだね",
                "blankParticle": "は",
                "thaiHint": "ประโยค: タイは暑そうだね",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "で",
                    "まで",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "これから日本は寒そうですか",
                "sentence": "これから日本は寒そう [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: これから日本は寒そうですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "を",
                    "で",
                    "も",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本は八月に暑そうですか",
                "sentence": "日本は八月 [ ___ ] 暑そうですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本は八月に暑そうですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "より",
                    "が",
                    "に",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "彼女は頭がよさそうだね",
                "sentence": "彼女は頭 [ ___ ] よさそうだね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 彼女は頭がよさそうだね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "と",
                    "が",
                    "へ",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本はもうすぐ桜はさきそうだね",
                "sentence": "日本は [ ___ ] うすぐ桜はさきそうだね",
                "blankParticle": "も",
                "thaiHint": "ประโยค: 日本はもうすぐ桜はさきそうだね",
                "explanation": "ใช้ 'も' (mo) แปลว่า 'ก็...ด้วย/เหมือนกัน'",
                "choices": [
                    "と",
                    "も",
                    "へ",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "かれはうれしそうだね",
                "sentence": "かれ [ ___ ] うれしそうだね",
                "blankParticle": "は",
                "thaiHint": "ประโยค: かれはうれしそうだね",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "も",
                    "より",
                    "は",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "先生は優しそうだね",
                "sentence": "先生 [ ___ ] 優しそうだね",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 先生は優しそうだね",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "に",
                    "から",
                    "は",
                    "で"
                ],
                "correct": 2
            },
            {
                "fullSentence": "あなたは勉強したくなさそうだね",
                "sentence": "あなた [ ___ ] 勉強したくなさそうだね",
                "blankParticle": "は",
                "thaiHint": "ประโยค: あなたは勉強したくなさそうだね",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "で",
                    "は",
                    "と",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたのズボンは何処から買ってきたの？",
                "sentence": "あなたのズボン [ ___ ] 何処から買ってきたの？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: あなたのズボンは何処から買ってきたの？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "まで",
                    "は",
                    "から",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "ペンを持ってきてくれる？",
                "sentence": "ペン [ ___ ] 持ってきてくれる？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ペンを持ってきてくれる？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "も",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "牛乳を買ってきてもらえる?",
                "sentence": "牛乳 [ ___ ] 買ってきてもらえる?",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 牛乳を買ってきてもらえる?",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "より",
                    "は",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本人は出掛ける前になんと言うの？",
                "sentence": "日本人は出掛ける前 [ ___ ] なんと言うの？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 日本人は出掛ける前になんと言うの？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "と",
                    "より",
                    "も",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ね、ちょっと電気を消してくれ",
                "sentence": "ね、ちょっと電気 [ ___ ] 消してくれ",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ね、ちょっと電気を消してくれ",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "より",
                    "まで",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ドアを開けてきて頂けませんか",
                "sentence": "ドア [ ___ ] 開けてきて頂けませんか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ドアを開けてきて頂けませんか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "は",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "それを取ってきて",
                "sentence": "それ [ ___ ] 取ってきて",
                "blankParticle": "を",
                "thaiHint": "ประโยค: それを取ってきて",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "へ",
                    "から",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "倉庫からダンボールを持ってきてくれ",
                "sentence": "倉庫からダンボール [ ___ ] 持ってきてくれ",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 倉庫からダンボールを持ってきてくれ",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "まで",
                    "を",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ノートを取ってきていただけませんか",
                "sentence": "ノート [ ___ ] 取ってきていただけませんか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ノートを取ってきていただけませんか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "まで",
                    "を",
                    "に"
                ],
                "correct": 2
            }
        ]
    },
    "44": {
        "title": "第 44 課 ไวยากรณ์",
        "sub": "～すぎます (เกินไป), ～やすい, ～にくい (ง่าย/ยากที่จะทำ)",
        "emoji": "🌶️",
        "questions": [
            {
                "fullSentence": "夕べお酒を飲みすぎたの？",
                "sentence": "夕べお酒 [ ___ ] 飲みすぎたの？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 夕べお酒を飲みすぎたの？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "が",
                    "まで",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "貴方の服はちょうど良いですかきつ過ぎますか",
                "sentence": "貴方の服はちょうど良い [ ___ ] すかきつ過ぎますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 貴方の服はちょうど良いですかきつ過ぎますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "まで",
                    "を",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本語は簡単すぎる？",
                "sentence": "日本語 [ ___ ] 簡単すぎる？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 日本語は簡単すぎる？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "より",
                    "は",
                    "も",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "飲み過ぎると太くなるよ分かる？",
                "sentence": "飲み過ぎる [ ___ ] 太くなるよ分かる？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 飲み過ぎると太くなるよ分かる？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "へ",
                    "と",
                    "で",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "平かなは簡単すぎると思う？",
                "sentence": "平かなは簡単すぎる [ ___ ] 思う？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 平かなは簡単すぎると思う？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "も",
                    "に",
                    "と",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "パソコンと携帯はどちらか使いやすいの？",
                "sentence": "パソコン [ ___ ] 携帯はどちらか使いやすいの？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: パソコンと携帯はどちらか使いやすいの？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "と",
                    "から",
                    "へ",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "白い服と黒い服はどちらか汚れやすいの？",
                "sentence": "白い服 [ ___ ] 黒い服はどちらか汚れやすいの？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 白い服と黒い服はどちらか汚れやすいの？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "が",
                    "と",
                    "は",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "寮は住みにくいですか",
                "sentence": "寮は住み [ ___ ] くいですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 寮は住みにくいですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "の",
                    "で",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "自動販売機は使いやすいと思う？",
                "sentence": "自動販売機は使いやすい [ ___ ] 思う？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 自動販売機は使いやすいと思う？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "より",
                    "と",
                    "を",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "お酒に酔っ払いにくいです",
                "sentence": "お酒 [ ___ ] 酔っ払いにくいです",
                "blankParticle": "に",
                "thaiHint": "ประโยค: お酒に酔っ払いにくいです",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "と",
                    "から",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "部屋を綺麗にしてくれる？",
                "sentence": "部屋 [ ___ ] 綺麗にしてくれる？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 部屋を綺麗にしてくれる？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "を",
                    "で",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "もっと声を大きくしてくれ？",
                "sentence": "もっと声 [ ___ ] 大きくしてくれ？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: もっと声を大きくしてくれ？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "と",
                    "から",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ペンと鉛筆は何にする？",
                "sentence": "ペンと鉛筆は何 [ ___ ] する？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ペンと鉛筆は何にする？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "に",
                    "で",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "サッカーにしましょうか",
                "sentence": "サッカー [ ___ ] しましょうか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: サッカーにしましょうか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "を",
                    "に",
                    "へ",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "土曜日に家に帰ることにする？",
                "sentence": "土曜日 [ ___ ] 家に帰ることにする？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 土曜日に家に帰ることにする？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "と",
                    "に",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "この紙をもらえる？",
                "sentence": "この紙 [ ___ ] もらえる？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: この紙をもらえる？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "へ",
                    "と",
                    "は"
                ],
                "correct": 0
            },
            {
                "fullSentence": "このペンを大切に使ってね",
                "sentence": "このペン [ ___ ] 大切に使ってね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: このペンを大切に使ってね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "より",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "この鉄、丁寧に消すってね",
                "sentence": "この鉄、丁寧 [ ___ ] 消すってね",
                "blankParticle": "に",
                "thaiHint": "ประโยค: この鉄、丁寧に消すってね",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "で",
                    "に",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ね、こっちに早く来て",
                "sentence": "ね、こっち [ ___ ] 早く来て",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ね、こっちに早く来て",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "より",
                    "まで",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昼ごはんは美味しく食べられた？",
                "sentence": "昼ご [ ___ ] んは美味しく食べられた？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 昼ごはんは美味しく食べられた？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "へ",
                    "より",
                    "は",
                    "に"
                ],
                "correct": 2
            }
        ]
    },
    "45": {
        "title": "第 45 課 ไวยากรณ์",
        "sub": "～場合は (ในกรณีที่...)",
        "emoji": "🚨",
        "questions": [
            {
                "fullSentence": "仕事に間に合わない場合は誰に相談しないと、？",
                "sentence": "仕事に間に合わない場合 [ ___ ] 誰に相談しないと、？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 仕事に間に合わない場合は誰に相談しないと、？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "より",
                    "も",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "よく時間に遅れた場合は首になるよ",
                "sentence": "よく時間に遅れた場合 [ ___ ] 首になるよ",
                "blankParticle": "は",
                "thaiHint": "ประโยค: よく時間に遅れた場合は首になるよ",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "へ",
                    "を",
                    "が"
                ],
                "correct": 0
            },
            {
                "fullSentence": "のどが渇いた場合はどうしたらいいの？",
                "sentence": "のどが渇いた場合 [ ___ ] どうしたらいいの？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: のどが渇いた場合はどうしたらいいの？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "が",
                    "を",
                    "は",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本で財布をなくした場合はどうしたらいい？",
                "sentence": "日本で財布をなくした場合 [ ___ ] どうしたらいい？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 日本で財布をなくした場合はどうしたらいい？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "を",
                    "へ",
                    "は",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "地震や火事の場合はエレベターを使っても良い？",
                "sentence": "地震や火事の場合 [ ___ ] エレベターを使っても良い？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 地震や火事の場合はエレベターを使っても良い？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "を",
                    "で",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "お金がない場合は誰に貸す？",
                "sentence": "お金がない場合 [ ___ ] 誰に貸す？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: お金がない場合は誰に貸す？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "も",
                    "が",
                    "に",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "雨が降る場合は学校を休んでも良い？",
                "sentence": "雨が降る場合 [ ___ ] 学校を休んでも良い？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 雨が降る場合は学校を休んでも良い？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "が",
                    "から",
                    "も",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本でひどい病気の場合は誰に相談しないといけないの？",
                "sentence": "日本でひどい病気の場合 [ ___ ] 誰に相談しないといけないの？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 日本でひどい病気の場合は誰に相談しないといけないの？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "から",
                    "も",
                    "まで",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "休暇をとりたい場合は誰に連絡しないといけないの？",
                "sentence": "休暇をとりたい場合 [ ___ ] 誰に連絡しないといけないの？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 休暇をとりたい場合は誰に連絡しないといけないの？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "に",
                    "が",
                    "は",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "体の調子が悪い場合はどうしたらいいの？",
                "sentence": "体の調子が悪い場合 [ ___ ] どうしたらいいの？",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 体の調子が悪い場合はどうしたらいいの？",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "の",
                    "を",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "日本語を真面目に勉強したのにまだ上手じゃないね",
                "sentence": "日本語 [ ___ ] 真面目に勉強したのにまだ上手じゃないね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本語を真面目に勉強したのにまだ上手じゃないね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "の",
                    "を",
                    "へ"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本に行く予定があるのに日本語を勉強しない人についてどう思う?",
                "sentence": "日本に行く予定 [ ___ ] あるのに日本語を勉強しない人についてどう思う?",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本に行く予定があるのに日本語を勉強しない人についてどう思う?",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "より",
                    "で",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "貯金したのにお金がない、どうしたらいいの？",
                "sentence": "貯金したのにお金 [ ___ ] ない、どうしたらいいの？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 貯金したのにお金がない、どうしたらいいの？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "が",
                    "より",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "漢字を覚えたのに忘れてしまった、どうしたらいいの？",
                "sentence": "漢字 [ ___ ] 覚えたのに忘れてしまった、どうしたらいいの？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 漢字を覚えたのに忘れてしまった、どうしたらいいの？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "を",
                    "まで",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "独身なのに恋人がないどうしたらいいの？",
                "sentence": "独身なのに恋人 [ ___ ] ないどうしたらいいの？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 独身なのに恋人がないどうしたらいいの？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "より",
                    "へ",
                    "が",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "ね、たくさん食べるのに太くないね、何か良い方法ある",
                "sentence": "ね、たくさん食べるの [ ___ ] 太くないね、何か良い方法ある",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ね、たくさん食べるのに太くないね、何か良い方法ある",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "から",
                    "が",
                    "も"
                ],
                "correct": 0
            },
            {
                "fullSentence": "土曜日なのに勉強しないとだめですか",
                "sentence": "土曜日なの [ ___ ] 勉強しないとだめですか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 土曜日なのに勉強しないとだめですか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "で",
                    "に",
                    "は",
                    "を"
                ],
                "correct": 1
            },
            {
                "fullSentence": "試験があるのに本を読まないの？",
                "sentence": "試験 [ ___ ] あるのに本を読まないの？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 試験があるのに本を読まないの？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "で",
                    "を",
                    "は",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日仕事なのにお酒を飲んでいるの？",
                "sentence": "明日仕事なのにお酒 [ ___ ] 飲んでいるの？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 明日仕事なのにお酒を飲んでいるの？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "に",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "残業したのにお金をもらわないどうしたら良いの？",
                "sentence": "残業したのにお金 [ ___ ] もらわないどうしたら良いの？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 残業したのにお金をもらわないどうしたら良いの？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "は",
                    "を",
                    "が"
                ],
                "correct": 2
            }
        ]
    },
    "46": {
        "title": "第 46 課 ไวยากรณ์",
        "sub": "～ところです (กำลังจะ/เพิ่งจะ), ～はずです (น่าจะ...)",
        "emoji": "⏱️",
        "questions": [
            {
                "fullSentence": "今から勉強するところです、静かにしてね",
                "sentence": "今から勉強するところです、静か [ ___ ] してね",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 今から勉強するところです、静かにしてね",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "へ",
                    "に",
                    "より",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "話すところじゃないですからちゃんと聞いて",
                "sentence": "話すところじゃない [ ___ ] すからちゃんと聞いて",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 話すところじゃないですからちゃんと聞いて",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "へ",
                    "に",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今何をしているところですか",
                "sentence": "今何 [ ___ ] しているところですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今何をしているところですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "で",
                    "も",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "勉強するところは何時なの？",
                "sentence": "勉強する [ ___ ] ころは何時なの？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 勉強するところは何時なの？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "へ",
                    "まで",
                    "に",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "家へ帰るところはいつですか",
                "sentence": "家へ帰るところはいつ [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 家へ帰るところはいつですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "と",
                    "を",
                    "から",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今勉強しているところですね",
                "sentence": "今勉強しているところ [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今勉強しているところですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "と",
                    "に",
                    "も",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今食事しているところですか",
                "sentence": "今食事しているところ [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今食事しているところですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "と",
                    "も",
                    "で",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今寝ているところですか",
                "sentence": "今寝ているところ [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今寝ているところですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "は",
                    "と",
                    "を",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今漢字を書いているところですね",
                "sentence": "今漢字 [ ___ ] 書いているところですね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今漢字を書いているところですね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "は",
                    "まで",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今携帯電話をしているところですか",
                "sentence": "今携帯電話 [ ___ ] しているところですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 今携帯電話をしているところですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "で",
                    "から",
                    "も",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "休憩し終わったところですね",
                "sentence": "休憩し終わったところ [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 休憩し終わったところですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "へ",
                    "は",
                    "を",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "n4合格したところですね",
                "sentence": "n4合格したところ [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: n4合格したところですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "から",
                    "より",
                    "の",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "家へ帰ってきたところですね",
                "sentence": "家へ帰ってきたところ [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 家へ帰ってきたところですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "と",
                    "で",
                    "より",
                    "まで"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本語を勉強したばかりですか",
                "sentence": "日本語 [ ___ ] 勉強したばかりですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本語を勉強したばかりですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "と",
                    "へ",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ね、あなたは起きたばかりですか",
                "sentence": "ね、あなたは起きたばかり [ ___ ] すか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: ね、あなたは起きたばかりですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "に",
                    "で",
                    "も",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "昼ごはんを食べたばかりですね",
                "sentence": "昼ごはん [ ___ ] 食べたばかりですね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 昼ごはんを食べたばかりですね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "と",
                    "を",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "高専を卒業したばかりですね",
                "sentence": "高専 [ ___ ] 卒業したばかりですね",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 高専を卒業したばかりですね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "は",
                    "から",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "大学を卒業したばかりですか",
                "sentence": "大学 [ ___ ] 卒業したばかりですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 大学を卒業したばかりですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "まで",
                    "も",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日雨が降るはずだ、そう思わない？",
                "sentence": "明日雨 [ ___ ] 降るはずだ、そう思わない？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 明日雨が降るはずだ、そう思わない？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "を",
                    "より",
                    "は",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "先生はお酒を飲まないはずだと思わない？",
                "sentence": "先生はお酒 [ ___ ] 飲まないはずだと思わない？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 先生はお酒を飲まないはずだと思わない？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "より",
                    "を",
                    "へ"
                ],
                "correct": 2
            }
        ]
    },
    "47": {
        "title": "第 47 課 ไวยากรณ์",
        "sub": "～そうです (ได้ยินมาว่า...), ～ようです (ดูเหมือนว่า)",
        "emoji": "📰",
        "questions": [
            {
                "fullSentence": "天気予報によると明日雨が降るそうですよ",
                "sentence": "天気予報によると明日雨 [ ___ ] 降るそうですよ",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 天気予報によると明日雨が降るそうですよ",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "も",
                    "へ",
                    "と"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ｎ３に合格したそうですね？",
                "sentence": "ｎ３ [ ___ ] 合格したそうですね？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: ｎ３に合格したそうですね？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "に",
                    "は",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "子供がで来たそうですか",
                "sentence": "子供 [ ___ ] で来たそうですか",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 子供がで来たそうですか",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "より",
                    "と",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "貴方は三月日本へ行くそうですね？",
                "sentence": "貴方は三月日本へ行くそう [ ___ ] すね？",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 貴方は三月日本へ行くそうですね？",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "より",
                    "が",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "貴方は面接が出来たそうですね？",
                "sentence": "貴方は面接 [ ___ ] 出来たそうですね？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 貴方は面接が出来たそうですね？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "が",
                    "に",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "貴方が作った料理はおいしいそうですね？",
                "sentence": "貴方 [ ___ ] 作った料理はおいしいそうですね？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 貴方が作った料理はおいしいそうですね？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "より",
                    "は",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "おかねをたくさん持っているそうですか",
                "sentence": "おかね [ ___ ] たくさん持っているそうですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: おかねをたくさん持っているそうですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "を",
                    "の",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "土曜日に勉強するそうですね？",
                "sentence": "土曜日 [ ___ ] 勉強するそうですね？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 土曜日に勉強するそうですね？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "に",
                    "が",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "貴方が行く県は愛知県だそうですね",
                "sentence": "貴方 [ ___ ] 行く県は愛知県だそうですね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 貴方が行く県は愛知県だそうですね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "が",
                    "から",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "お父さんは農業だそうですね",
                "sentence": "お父さんは農業だそう [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: お父さんは農業だそうですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "に",
                    "が",
                    "で",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "貴方が行く会社は忙しいようですが頑張ってね",
                "sentence": "貴方 [ ___ ] 行く会社は忙しいようですが頑張ってね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 貴方が行く会社は忙しいようですが頑張ってね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "は",
                    "が",
                    "へ",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "日本の物価が高いようですが頑張ってね",
                "sentence": "日本の物価 [ ___ ] 高いようですが頑張ってね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 日本の物価が高いようですが頑張ってね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "の",
                    "が",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "太いようですねダイエットしてね",
                "sentence": "太いよう [ ___ ] すねダイエットしてね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 太いようですねダイエットしてね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "から",
                    "へ",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "今日雨が降るようですね",
                "sentence": "今日雨 [ ___ ] 降るようですね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 今日雨が降るようですね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "も",
                    "が",
                    "から",
                    "は"
                ],
                "correct": 1
            },
            {
                "fullSentence": "あなたは歌手のようですね",
                "sentence": "あなたは歌手のよう [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: あなたは歌手のようですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "より",
                    "で",
                    "まで",
                    "に"
                ],
                "correct": 1
            },
            {
                "fullSentence": "貴方はお父さんのようですね",
                "sentence": "貴方はお父さんのよう [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 貴方はお父さんのようですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "も",
                    "で",
                    "に",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "その人は誰のようだと思う？",
                "sentence": "その人は誰のようだ [ ___ ] 思う？",
                "blankParticle": "と",
                "thaiHint": "ประโยค: その人は誰のようだと思う？",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "と",
                    "の",
                    "へ",
                    "を"
                ],
                "correct": 0
            },
            {
                "fullSentence": "ええ！！何か変な音かしますね",
                "sentence": "ええ！！何か変な音かしますね [ ___ ]",
                "blankParticle": "を",
                "thaiHint": "ประโยค: ええ！！何か変な音かしますね",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "に",
                    "が",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ええ！！変な声がしますね",
                "sentence": "ええ！！変な声 [ ___ ] しますね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ええ！！変な声がしますね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "より",
                    "へ",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ええ！！変なにおいがしますね",
                "sentence": "ええ！！変なにおい [ ___ ] しますね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: ええ！！変なにおいがしますね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "まで",
                    "で",
                    "は"
                ],
                "correct": 0
            }
        ]
    },
    "48": {
        "title": "第 48 課 ไวยากรณ์",
        "sub": "使役形 (รูปให้กระทำ / Causative - させます)",
        "emoji": "👨‍🏫",
        "questions": [
            {
                "fullSentence": "お母さんは貴方に行かせないことがある？",
                "sentence": "お母さんは貴方に行かせないこと [ ___ ] ある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: お母さんは貴方に行かせないことがある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "から",
                    "の",
                    "を",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "先生は学生に教室で遊ばせても良いの？",
                "sentence": "先生は学生 [ ___ ] 教室で遊ばせても良いの？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 先生は学生に教室で遊ばせても良いの？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "より",
                    "へ",
                    "の"
                ],
                "correct": 0
            },
            {
                "fullSentence": "貴方はお母さんを心配させたことがある？",
                "sentence": "貴方はお母さん [ ___ ] 心配させたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 貴方はお母さんを心配させたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "まで",
                    "から",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "先生は学生たちに自由に意見を言わせたことがある？",
                "sentence": "先生は学生たちに自由に意見 [ ___ ] 言わせたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 先生は学生たちに自由に意見を言わせたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "より",
                    "が",
                    "で",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "お母さんは貴方に料理を作らせたことがある？",
                "sentence": "お母さんは貴方に料理 [ ___ ] 作らせたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お母さんは貴方に料理を作らせたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "と",
                    "を",
                    "に"
                ],
                "correct": 2
            },
            {
                "fullSentence": "お父さんは貴方に仕事をさせたことがある？",
                "sentence": "お父さんは貴方に仕事 [ ___ ] させたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お父さんは貴方に仕事をさせたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "を",
                    "へ",
                    "が"
                ],
                "correct": 1
            },
            {
                "fullSentence": "仕事が分からない時に誰に教えさせる？",
                "sentence": "仕事 [ ___ ] 分からない時に誰に教えさせる？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 仕事が分からない時に誰に教えさせる？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "まで",
                    "が",
                    "と",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "気分が悪かったら早退させてくださいと言ってくださいね",
                "sentence": "気分 [ ___ ] 悪かったら早退させてくださいと言ってくださいね",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 気分が悪かったら早退させてくださいと言ってくださいね",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "の",
                    "は",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "先生を心配させたことがある？",
                "sentence": "先生 [ ___ ] 心配させたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 先生を心配させたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "は",
                    "に",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "お母さんにお金を送らせたことがある？",
                "sentence": "お母さんにお金 [ ___ ] 送らせたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お母さんにお金を送らせたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "へ",
                    "と",
                    "を",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "先生は土曜日に勉強させる？",
                "sentence": "先生は土曜日 [ ___ ] 勉強させる？",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 先生は土曜日に勉強させる？",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "の",
                    "に",
                    "を",
                    "より"
                ],
                "correct": 1
            },
            {
                "fullSentence": "恋人は寂しくさせた事がある？",
                "sentence": "恋人は寂しくさせた事 [ ___ ] ある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 恋人は寂しくさせた事がある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "へ",
                    "と",
                    "に",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "友達に嫌がらせたことがある？",
                "sentence": "友達に嫌 [ ___ ] らせたことがある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 友達に嫌がらせたことがある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "と",
                    "から",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "もし子供が出来たらどんな専門を勉強させたいの？",
                "sentence": "もし子供が出来たらどんな専門 [ ___ ] 勉強させたいの？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: もし子供が出来たらどんな専門を勉強させたいの？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "で",
                    "と",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "仕事中でトレイに行きたい時に係長にトレイに行って頂けませんかと言ってね",
                "sentence": "仕事中でトレイ [ ___ ] 行きたい時に係長にトレイに行って頂けませんかと言ってね",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 仕事中でトレイに行きたい時に係長にトレイに行って頂けませんかと言ってね",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "の",
                    "に",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "お母さんをがっかりさせた事がある？",
                "sentence": "お母さん [ ___ ] がっかりさせた事がある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お母さんをがっかりさせた事がある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "が",
                    "を",
                    "へ",
                    "で"
                ],
                "correct": 1
            },
            {
                "fullSentence": "分からない時にもう一度班長に説明していただけませんかと言って１８お母さんは貴方にお金を送らせたことがある？",
                "sentence": "分からない時にもう一度班長に説明していただけませんかと言って１８お母さんは貴方にお金 [ ___ ] 送らせたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 分からない時にもう一度班長に説明していただけませんかと言って１８お母さんは貴方にお金を送らせたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "は",
                    "を",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "先生は貴方に厳しく勉強させた事がある？",
                "sentence": "先生は貴方に厳しく勉強させた事 [ ___ ] ある？",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 先生は貴方に厳しく勉強させた事がある？",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "が",
                    "も",
                    "に",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "先生は貴方を家に帰らせたことがある？",
                "sentence": "先生は貴方 [ ___ ] 家に帰らせたことがある？",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 先生は貴方を家に帰らせたことがある？",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "まで",
                    "を",
                    "の"
                ],
                "correct": 2
            }
        ]
    },
    "49": {
        "title": "第 49 課 ไวยากรณ์",
        "sub": "尊敬語 (ภาษายกย่อง - คุณครู/ลูกค้ากระทำ)",
        "emoji": "👑",
        "questions": [
            {
                "fullSentence": "お父さんはお酒をお飲みになりますか",
                "sentence": "お父さんはお酒 [ ___ ] お飲みになりますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お父さんはお酒をお飲みになりますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "を",
                    "と",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "校長先生は教室にいらっしゃいますか",
                "sentence": "校長先生 [ ___ ] 教室にいらっしゃいますか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 校長先生は教室にいらっしゃいますか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "より",
                    "へ",
                    "の",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "。。先生はお帰りになりましたか",
                "sentence": "。。先生 [ ___ ] お帰りになりましたか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 。。先生はお帰りになりましたか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "の",
                    "より",
                    "は",
                    "から"
                ],
                "correct": 2
            },
            {
                "fullSentence": "お国はどちらでしょうか",
                "sentence": "お国はどちら [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: お国はどちらでしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "の",
                    "と",
                    "を",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "校長先生は何処にいらっしゃいますか",
                "sentence": "校長先生 [ ___ ] 何処にいらっしゃいますか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 校長先生は何処にいらっしゃいますか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "も",
                    "は",
                    "と",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "お名前は何でしょうか",
                "sentence": "お名前は何 [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: お名前は何でしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "の",
                    "に",
                    "より",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "ご家族は何人でしょうか",
                "sentence": "ご家族は何人 [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: ご家族は何人でしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "は",
                    "から",
                    "で",
                    "を"
                ],
                "correct": 2
            },
            {
                "fullSentence": "日本語はお上手ですね",
                "sentence": "日本語はお上手 [ ___ ] すね",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 日本語はお上手ですね",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "は",
                    "から",
                    "へ"
                ],
                "correct": 0
            },
            {
                "fullSentence": "昼に一緒に召し上がりください",
                "sentence": "昼 [ ___ ] 一緒に召し上がりください",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 昼に一緒に召し上がりください",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "まで",
                    "より",
                    "に",
                    "は"
                ],
                "correct": 2
            },
            {
                "fullSentence": "お父さんは煙草を吸えれますか",
                "sentence": "お父さんは煙草 [ ___ ] 吸えれますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お父さんは煙草を吸えれますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "の",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "お名前をここにお書きください",
                "sentence": "お名前 [ ___ ] ここにお書きください",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お名前をここにお書きください",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "も",
                    "に",
                    "から"
                ],
                "correct": 0
            },
            {
                "fullSentence": "仕事は何をなさっていますか",
                "sentence": "仕事は何 [ ___ ] なさっていますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 仕事は何をなさっていますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "に",
                    "を",
                    "より",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "山田さんをご存知ですか",
                "sentence": "山田さん [ ___ ] ご存知ですか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 山田さんをご存知ですか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "も",
                    "は",
                    "を",
                    "より"
                ],
                "correct": 2
            },
            {
                "fullSentence": "いつも何時に寮へお帰りになりますか",
                "sentence": "いつも何時 [ ___ ] 寮へお帰りになりますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: いつも何時に寮へお帰りになりますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "は",
                    "より",
                    "に",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "今晩はお忙しいでしょうか",
                "sentence": "今晩はお忙しい [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今晩はお忙しいでしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "が",
                    "を",
                    "の",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "お元気でしょうか",
                "sentence": "お元気 [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: お元気でしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "を",
                    "で",
                    "の",
                    "と"
                ],
                "correct": 1
            },
            {
                "fullSentence": "今晩はお暇でしょうか",
                "sentence": "今晩はお暇 [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 今晩はお暇でしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "で",
                    "まで",
                    "は",
                    "に"
                ],
                "correct": 0
            },
            {
                "fullSentence": "。。先生は何時に来られますか",
                "sentence": "。。先生 [ ___ ] 何時に来られますか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 。。先生は何時に来られますか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "より",
                    "で",
                    "まで",
                    "は"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日はご一緒ご飯をお食べください",
                "sentence": "明日はご一緒ご飯 [ ___ ] お食べください",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 明日はご一緒ご飯をお食べください",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "へ",
                    "より",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "校長先生はどこに住まれますか",
                "sentence": "校長先生 [ ___ ] どこに住まれますか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 校長先生はどこに住まれますか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "より",
                    "は",
                    "が",
                    "も"
                ],
                "correct": 1
            }
        ]
    },
    "50": {
        "title": "第 50 課 ไวยากรณ์",
        "sub": "謙譲語 (ภาษาถ่อมตน - ตนเองกระทำอย่างนอบน้อม)",
        "emoji": "🙇",
        "questions": [
            {
                "fullSentence": "重いですからお持ちしましょうか",
                "sentence": "重い [ ___ ] すからお持ちしましょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 重いですからお持ちしましょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "まで",
                    "で",
                    "に",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "。。先生をそんじしておりますか",
                "sentence": "。。先生 [ ___ ] そんじしておりますか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 。。先生をそんじしておりますか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "の",
                    "に",
                    "より",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "私は。。。と申しますよろしくお願いいたします",
                "sentence": "私は。。。 [ ___ ] 申しますよろしくお願いいたします",
                "blankParticle": "と",
                "thaiHint": "ประโยค: 私は。。。と申しますよろしくお願いいたします",
                "explanation": "ใช้ 'と' (to) เชื่อมคำนาม 'และ', ทำกิจกรรม 'กับ', หรือชี้เนื้อหาความคิด/คำพูด",
                "choices": [
                    "が",
                    "まで",
                    "へ",
                    "と"
                ],
                "correct": 3
            },
            {
                "fullSentence": "すみません伺いたい事がおります",
                "sentence": "すみません伺いたい事 [ ___ ] おります",
                "blankParticle": "が",
                "thaiHint": "ประโยค: すみません伺いたい事がおります",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "の",
                    "に",
                    "は",
                    "が"
                ],
                "correct": 3
            },
            {
                "fullSentence": "明日はおめにかかりますか",
                "sentence": "明日はおめ [ ___ ] かかりますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 明日はおめにかかりますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "に",
                    "で",
                    "と",
                    "まで"
                ],
                "correct": 0
            },
            {
                "fullSentence": "水を頂いても宜しいでしょうか",
                "sentence": "水 [ ___ ] 頂いても宜しいでしょうか",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 水を頂いても宜しいでしょうか",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "と",
                    "まで",
                    "を",
                    "の"
                ],
                "correct": 2
            },
            {
                "fullSentence": "お話ししたい事がありますからお聞きください",
                "sentence": "お話ししたい事 [ ___ ] ありますからお聞きください",
                "blankParticle": "が",
                "thaiHint": "ประโยค: お話ししたい事がありますからお聞きください",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "を",
                    "が",
                    "も"
                ],
                "correct": 2
            },
            {
                "fullSentence": "家はどこにございますか",
                "sentence": "家はどこ [ ___ ] ございますか",
                "blankParticle": "に",
                "thaiHint": "ประโยค: 家はどこにございますか",
                "explanation": "ใช้ 'に' (ni) ชี้จุดหมายปลายทาง, เวลาที่แน่นอน, ผู้กระทำในรูปถูกกระทำ/ให้กระทำ (受身/使役), หรือผู้รับ",
                "choices": [
                    "が",
                    "から",
                    "も",
                    "に"
                ],
                "correct": 3
            },
            {
                "fullSentence": "私の会社はATAという会社でございますご存知ですか",
                "sentence": "私の会社はATAという会社 [ ___ ] ございますご存知ですか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 私の会社はATAという会社でございますご存知ですか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "より",
                    "で",
                    "に",
                    "も"
                ],
                "correct": 1
            },
            {
                "fullSentence": "事務所はどこでございますか",
                "sentence": "事務所はどこ [ ___ ] ございますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 事務所はどこでございますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "から",
                    "より",
                    "で",
                    "まで"
                ],
                "correct": 2
            },
            {
                "fullSentence": "私はタイから参りましたよろしくお願いいたします",
                "sentence": "私 [ ___ ] タイから参りましたよろしくお願いいたします",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 私はタイから参りましたよろしくお願いいたします",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "は",
                    "から",
                    "に",
                    "で"
                ],
                "correct": 0
            },
            {
                "fullSentence": "お名前をご紹介ください",
                "sentence": "お名前 [ ___ ] ご紹介ください",
                "blankParticle": "を",
                "thaiHint": "ประโยค: お名前をご紹介ください",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "と",
                    "へ"
                ],
                "correct": 1
            },
            {
                "fullSentence": "。。さんをお呼びください",
                "sentence": "。。さん [ ___ ] お呼びください",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 。。さんをお呼びください",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "まで",
                    "を",
                    "が"
                ],
                "correct": 2
            },
            {
                "fullSentence": "仕事が分からないとき班長にご相談ください",
                "sentence": "仕事 [ ___ ] 分からないとき班長にご相談ください",
                "blankParticle": "が",
                "thaiHint": "ประโยค: 仕事が分からないとき班長にご相談ください",
                "explanation": "ใช้ 'が' (ga) ชี้ประธานเฉพาะเจาะจง, คำกริยารูปสามารถ (可能形), อกรรมกริยา (自動詞), หรือสภาพที่สังเกตเห็น",
                "choices": [
                    "に",
                    "の",
                    "が",
                    "と"
                ],
                "correct": 2
            },
            {
                "fullSentence": "これを拝見してください",
                "sentence": "これ [ ___ ] 拝見してください",
                "blankParticle": "を",
                "thaiHint": "ประโยค: これを拝見してください",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "を",
                    "は",
                    "まで",
                    "より"
                ],
                "correct": 0
            },
            {
                "fullSentence": "手をお見せください",
                "sentence": "手 [ ___ ] お見せください",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 手をお見せください",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "から",
                    "を",
                    "は",
                    "の"
                ],
                "correct": 1
            },
            {
                "fullSentence": "お元気でいらっしゃいますか",
                "sentence": "お元気 [ ___ ] いらっしゃいますか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: お元気でいらっしゃいますか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "より",
                    "で",
                    "へ",
                    "から"
                ],
                "correct": 1
            },
            {
                "fullSentence": "一言宜しいでしょうか",
                "sentence": "一言宜しい [ ___ ] しょうか",
                "blankParticle": "で",
                "thaiHint": "ประโยค: 一言宜しいでしょうか",
                "explanation": "ใช้ 'で' (de) ชี้สถานที่เกิดการกระทำ, ยานพาหนะ, เครื่องมือ, สาเหตุ, หรือขอบเขต",
                "choices": [
                    "が",
                    "の",
                    "も",
                    "で"
                ],
                "correct": 3
            },
            {
                "fullSentence": "日本料理を召し上がったことがある",
                "sentence": "日本料理 [ ___ ] 召し上がったことがある",
                "blankParticle": "を",
                "thaiHint": "ประโยค: 日本料理を召し上がったことがある",
                "explanation": "ใช้ 'を' (o) ชี้กรรมตรงของการกระทำ (สิ่งที่ถูกกระทำโดยกริยา)",
                "choices": [
                    "まで",
                    "は",
                    "に",
                    "を"
                ],
                "correct": 3
            },
            {
                "fullSentence": "。。先生はいらっしゃいますか",
                "sentence": "。。先生 [ ___ ] いらっしゃいますか",
                "blankParticle": "は",
                "thaiHint": "ประโยค: 。。先生はいらっしゃいますか",
                "explanation": "ใช้ 'は' (wa) ชี้หัวข้อหลักหรือประธานของประโยค",
                "choices": [
                    "を",
                    "は",
                    "と",
                    "が"
                ],
                "correct": 1
            }
        ]
    }
};
