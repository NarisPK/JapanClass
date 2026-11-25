// kanjiExamHelper.js - ระบบวิเคราะห์ตัวเลือกและแสดงผลเฉลยแบบละเอียดสำหรับพาร์ทคันจิ JLPT N4
(function() {
    // พจนานุกรมความหมายและคำอธิบายคำศัพท์ในข้อสอบคันจิ JLPT N4
    const kanjiVocabDict = {
        // --- ตัวอย่างคำจากภาพตัวอย่าง (不便) ---
        "ふべん": { meaning: "ไม่สะดวก, ไม่สะดวกสบาย", correctFor: ["不便"] },
        "ぶべん": { meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น", isInvalid: true },
        "ふへん": { meaning: "สากล/ไม่เปลี่ยนแปลง (普遍/不変) ไม่ใช่ 不便", note: "ไม่ตรงกับคันจิ 不便" },
        "ぶへん": { meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น", isInvalid: true },

        // --- 工事 ---
        "こうじ": { meaning: "งานก่อสร้าง (工事)", correctFor: ["工事"] },
        "こうごと": { meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น", isInvalid: true },
        "こじ": { meaning: "เด็กกำพร้า (孤児) หรือ อ้างอิงประวัติศาสตร์ (故事)", note: "อ่านเสียงสั้นผิดหลัก" },
        "こごと": { meaning: "การบ่นว่า, การดุด่า (小言)", note: "ไม่ใช่ความหมายของ 工事" },

        // --- 持って ---
        "はって": { meaning: "มาจาก 貼る (แปะ/ติด) หรือ 張る (ขึง/กาง)", note: "ไม่ใช่ 持つ" },
        "かぶって": { meaning: "มาจาก 被る (สวมใส่บนศีรษะ เช่น หมวก)", note: "ไม่ใช่ 持つ" },
        "もって": { meaning: "มาจาก 持つ (ถือ, พกพา)", correctFor: ["持って", "持つ"] },
        "ひろって": { meaning: "มาจาก 拾う (เก็บขึ้นมา)", note: "คนละกริยากับ 持つ" },
        "とって": { meaning: "มาจาก 取る (หยิบ, ถือเอา)", note: "คนละความหมายกับ 持つ" },

        // --- 体 ---
        "からだ": { meaning: "ร่างกาย (体)", correctFor: ["体"] },
        "かお": { meaning: "ใบหน้า (顔)", note: "คันจิตัว 顔 ไม่ใช่ 体" },
        "あたま": { meaning: "ศีรษะ, หัว (頭)", note: "คันจิตัว 頭 ไม่ใช่ 体" },
        "かみ": { meaning: "เส้นผม (髪) หรือ กระดาษ (紙)", note: "ไม่ใช่ 体" },
        "こころ": { meaning: "จิตใจ, หัวใจ (心)", note: "ไม่ใช่ 体" },

        // --- 入院 ---
        "りゅうえん": { meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น", isInvalid: true },
        "りゅういん": { meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น (อ่านตัว 入 ว่า りゅう ผิดหลัก)", isInvalid: true },
        "にゅうえん": { meaning: "การเข้าเรียนในโรงเรียนอนุบาล (入園)", note: "ไม่ใช่ 入院" },
        "にゅういん": { meaning: "การเข้าพักรักษาตัวในโรงพยาบาล (入院)", correctFor: ["入院", "入院する"] },
        "びょういん": { meaning: "โรงพยาบาล (病院)", note: "คันจิตัว 病院" },
        "だいいん": { meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น", isInvalid: true },
        "たいいん": { meaning: "การออกจากโรงพยาบาล (退院)", note: "ความหมายตรงข้ามกับ 入院" },

        // --- 広い ---
        "ちかい": { meaning: "ใกล้ (近い)", note: "ไม่ใช่ 広い" },
        "せまい": { meaning: "แคบ (狭い)", note: "ความหมายตรงข้ามกับ 広い" },
        "ひろい": { meaning: "กว้าง, กว้างขวาง (広い)", correctFor: ["広い"] },
        "とおい": { meaning: "ไกล (遠い)", note: "ไม่ใช่ 広い" },
        "あおい": { meaning: "สีฟ้า, สีน้ำเงิน (青い)", note: "ไม่ใช่ 広い" },
        "ちいさい": { meaning: "เล็ก (小さい)", note: "ไม่ใช่ 広い" },
        "すくない": { meaning: "น้อย (少ない)", note: "ไม่ใช่ 広い" },

        // --- 考えました ---
        "かんがえました": { meaning: "คิด, พิจารณาแล้ว (考える -> 考えました)", correctFor: ["考えました", "考える"] },
        "おぼえました": { meaning: "จดจำได้แล้ว (覚える -> 覚えました)", note: "คันจิตัว 覚えました" },
        "こたえました": { meaning: "ตอบแล้ว (答える -> 答えました)", note: "คันจิตัว 答えました" },
        "おしえました": { meaning: "สอน, บอกแล้ว (教える -> 教えました)", note: "คันจิตัว 教えました" },

        // --- 親指 ---
        "おやゆび": { meaning: "นิ้วหัวแม่มือ, นิ้วโป้ง (親指)", correctFor: ["親指"] },
        "ひとさしゆび": { meaning: "นิ้วชี้ (人差し指)", note: "คนละนิ้วกับ 親指" },
        "くすりゆび": { meaning: "นิ้วนาง (薬指)", note: "คนละนิ้วกับ 親指" },
        "こゆび": { meaning: "นิ้วก้อย (小指)", note: "คนละนิ้วกับ 親指" },

        // --- 切る / 切って ---
        "きって": { meaning: "มาจาก 切る (หั่น, ตัด)", correctFor: ["切って", "切る"] },
        "すって": { meaning: "มาจาก 吸う (สูด/ดูด) หรือ 擦る (ถูก/ขูด)", note: "ไม่ใช่ 切る" },
        "うって": { meaning: "มาจาก 打つ (ตี/เคาะ) หรือ 売る (ขาย)", note: "ไม่ใช่ 切る" },
        "まって": { meaning: "มาจาก 待つ (รอ)", note: "ไม่ใช่ 切る" },

        // --- 運ぶ ---
        "はこぶ": { meaning: "ขนย้าย, แบกหาม (運ぶ)", correctFor: ["運ぶ"] },
        "ならぶ": { meaning: "เรียงแถว, เข้าคิว (並ぶ)", note: "ไม่ใช่ 運ぶ" },
        "えらぶ": { meaning: "เลือก (選ぶ)", note: "ไม่ใช่ 運ぶ" },
        "よろこぶ": { meaning: "ดีใจ, ยินดี (喜ぶ)", note: "ไม่ใช่ 運ぶ" },

        // --- 答える ---
        "こたえる": { meaning: "ตอบคำถาม (答える)", correctFor: ["答える"] },
        "つたえる": { meaning: "ถ่ายทอด, ส่งสาร (伝える)", note: "ไม่ใช่ 答える" },
        "おしえる": { meaning: "สอน, บอก (教える)", note: "ไม่ใช่ 答える" },
        "きこえる": { meaning: "ได้ยิน (聞こえる)", note: "ไม่ใช่ 答える" },

        // --- 強い ---
        "つよい": { meaning: "แข็งแกร่ง, แข็งแรง (強い)", correctFor: ["強い"] },
        "よわい": { meaning: "อ่อนแอ (弱い)", note: "ความหมายตรงข้ามกับ 強い" },
        "おもい": { meaning: "หนัก (重い)", note: "ไม่ใช่ 強い" },
        "かるい": { meaning: "เบา (軽い)", note: "ไม่ใช่ 強い" },

        // --- 運転 ---
        "うんてん": { meaning: "การขับรถ, การควบคุมเครื่องจักร (運転)", correctFor: ["運転"] },
        "うんどう": { meaning: "การออกกำลังกาย (運動)", note: "ไม่ใช่ 運転" },
        "あんぜん": { meaning: "ความปลอดภัย (安全)", note: "ไม่ใช่ 運転" },
        "うんてい": { meaning: "ไม่มีคำนี้ในภาษาญี่ปุ่น", isInvalid: true }
    };

    // ฟังก์ชันสร้างความหมายของตัวเลือกแต่ละตัว (Choices Breakdown)
    function generateChoiceBreakdown(currentData) {
        if (!currentData || !currentData.choices) return [];

        const correctIdx = currentData.correct;
        const kanjiWord = currentData.kanji || '';
        const questionType = currentData.questionType || '';

        // สกัดคำแปลหลักจาก hint หรือ explanation
        let correctMeaning = "";
        if (currentData.hint) {
            const m = currentData.hint.match(/=\s*([^)]+)/);
            if (m) correctMeaning = m[1].trim();
            else correctMeaning = currentData.hint;
        }
        if (!correctMeaning && currentData.explanation) {
            const expMatch = currentData.explanation.match(/แปลว่า\s*([^\sตรงกับ]+)/);
            if (expMatch) correctMeaning = expMatch[1].trim();
        }

        return currentData.choices.map((choice, idx) => {
            const isCorrect = (idx === correctIdx);
            const choiceClean = choice.replace(/<[^>]+>/g, '').trim();

            // 1. ดึงจากพจนานุกรมถ้ามีบันทึกไว้ตรงตัว
            if (kanjiVocabDict[choiceClean]) {
                const info = kanjiVocabDict[choiceClean];
                if (isCorrect) {
                    return {
                        choice: choiceClean,
                        isCorrect: true,
                        text: `${choiceClean} = ${info.meaning}`
                    };
                } else if (info.isInvalid) {
                    return {
                        choice: choiceClean,
                        isCorrect: false,
                        text: `${choiceClean} <span class="text-rose-500 font-bold">ไม่มีคำนี้ในภาษาญี่ปุ่น</span>`
                    };
                } else {
                    return {
                        choice: choiceClean,
                        isCorrect: false,
                        text: `${choiceClean} = ${info.meaning}`
                    };
                }
            }

            // 2. ตัวเลือกที่ถูกต้องแต่ไม่ได้ลงทะเบียนใน dict
            if (isCorrect) {
                return {
                    choice: choiceClean,
                    isCorrect: true,
                    text: `${choiceClean} = ${correctMeaning || 'คำตอบที่ถูกต้องตามโจทย์'}`
                };
            }

            // 3. ตัวเลือกที่ผิด: สร้างคำอธิบายแยกตามประเภทข้อสอบ (もんだい 1-5)
            if (questionType.includes('もんだい1') || questionType.includes('漢字読み')) {
                // สำหรับการอ่านคันจิ: เช็คว่าสะกดคล้ายคำหลอก
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-rose-500 font-medium">ไม่มีคำนี้ในภาษาญี่ปุ่น</span>`
                };
            } else if (questionType.includes('もんだい2') || questionType.includes('漢字表記')) {
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-slate-400 dark:text-slate-400 font-normal">(คันจิตัวอื่น / ไม่ตรงกับคำว่า 「${kanjiWord}」)</span>`
                };
            } else if (questionType.includes('もんだい4') || questionType.includes('類義')) {
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-slate-400 dark:text-slate-400 font-normal">(ความหมายไม่ใกล้เคียงกับโจทย์)</span>`
                };
            } else {
                return {
                    choice: choiceClean,
                    isCorrect: false,
                    text: `${choiceClean} <span class="text-slate-400 dark:text-slate-400 font-normal">(ความหมายไม่เข้ากับบริบทประโยค)</span>`
                };
            }
        });
    }

    // ฟังก์ชันแสดงแผงผลลัพธ์เฉลยของพาร์ทคันจิ (จำลองรูปแบบตรงตามภาพตัวอย่าง)
    function renderKanjiExamResultUI(isCorrect, currentData) {
        const panel = document.getElementById('kanji-exam-result-panel');
        if (!panel) return;

        const statusCard = document.getElementById('kanji-exam-status-card');
        const iconBox = document.getElementById('kanji-exam-status-icon-box');
        const statusTitle = document.getElementById('kanji-exam-status-title');
        const statusWord = document.getElementById('kanji-exam-status-word');
        const choicesList = document.getElementById('kanji-exam-choices-list');

        panel.classList.remove('hidden');

        // สกัดคำแปลหลักจาก hint หรือ explanation
        let mainMeaning = "";
        if (currentData.hint) {
            const m = currentData.hint.match(/=\s*([^)]+)/);
            if (m) mainMeaning = m[1].trim();
            else mainMeaning = currentData.hint;
        }
        if (!mainMeaning && currentData.explanation) {
            const expMatch = currentData.explanation.match(/แปลว่า\s*([^\sตรงกับ]+)/);
            if (expMatch) mainMeaning = expMatch[1].trim();
        }

        const kanjiWord = currentData.kanji || currentData.character || '';
        const correctReading = currentData.japaneseText || (currentData.choices && currentData.choices[currentData.correct]) || '';

        if (isCorrect) {
            // ถูกต้อง (กรอบและแถบสีเขียว วงแหวนคู่ 2 ชั้น ◎ ตรงตามภาพตัวอย่าง)
            statusCard.className = "p-3.5 sm:p-4 rounded-2xl border-l-4 border-l-emerald-500 border border-emerald-500/30 bg-[#16202c]/90 dark:bg-[#16202c]/95 text-slate-100 flex items-center gap-3.5 shadow-sm transition-all";
            
            // สร้างวงกลมซ้อน 2 ชั้น ◎
            iconBox.className = "w-11 h-11 rounded-full border-2 border-emerald-400/90 flex items-center justify-center shrink-0";
            iconBox.innerHTML = '<div class="w-5 h-5 rounded-full border-2 border-emerald-400/90"></div>';
            
            statusTitle.innerText = "ถูกต้อง";
            statusTitle.className = "text-base font-bold text-white tracking-wide";
            statusWord.innerHTML = `<span class="font-bold text-slate-200">${kanjiWord}</span><span class="text-slate-400">(${correctReading})</span> = <span class="font-normal text-slate-300">${mainMeaning}</span>`;
        } else {
            // ยังไม่ถูกต้อง (กรอบและแถบสีแดง กากบาท ✕)
            statusCard.className = "p-3.5 sm:p-4 rounded-2xl border-l-4 border-l-rose-500 border border-rose-500/30 bg-[#24171d]/90 dark:bg-[#24171d]/95 text-slate-100 flex items-center gap-3.5 shadow-sm transition-all";
            
            iconBox.className = "w-11 h-11 rounded-full border-2 border-rose-400/90 flex items-center justify-center shrink-0";
            iconBox.innerHTML = '<i class="fa-solid fa-xmark text-rose-400 text-lg font-black"></i>';
            
            statusTitle.innerText = "ยังไม่ถูกต้อง";
            statusTitle.className = "text-base font-bold text-rose-400 tracking-wide";
            statusWord.innerHTML = `<span class="text-slate-400 text-xs mr-1">เฉลย:</span> <span class="font-bold text-slate-200">${kanjiWord}</span><span class="text-slate-400">(${correctReading})</span> = <span class="font-normal text-slate-300">${mainMeaning}</span>`;
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
        hideResult: hideKanjiExamResultUI
    };
})();
