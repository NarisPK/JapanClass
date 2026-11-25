// listeningModeHelper.js - จัดการระบบเสียง เครื่องเล่นเสียง และการประมวลผลข้อสอบพาร์ทการฟัง JLPT N4
(function() {
    let listeningAudio = null;
    let listeningTimer = null;
    let isListeningPlaying = false;
    let listeningScoreBreakdown = { 1: { correct: 0, total: 0 }, 2: { correct: 0, total: 0 }, 3: { correct: 0, total: 0 }, 4: { correct: 0, total: 0 } };

    function getListeningAudio() {
        if (!listeningAudio) {
            listeningAudio = new Audio();
            listeningAudio.preload = 'auto';
            
            listeningAudio.addEventListener('timeupdate', onAudioTimeUpdate);
            listeningAudio.addEventListener('ended', onAudioEnded);
            listeningAudio.addEventListener('pause', () => {
                isListeningPlaying = false;
                updateAudioControlsUI(false);
            });
            listeningAudio.addEventListener('play', () => {
                isListeningPlaying = true;
                updateAudioControlsUI(true);
            });
        }
        return listeningAudio;
    }

    function resetListeningScoreBreakdown() {
        listeningScoreBreakdown = {
            1: { correct: 0, total: 0 },
            2: { correct: 0, total: 0 },
            3: { correct: 0, total: 0 },
            4: { correct: 0, total: 0 }
        };
    }

    function recordListeningScore(mondaiNum, isCorrect) {
        if (!listeningScoreBreakdown[mondaiNum]) {
            listeningScoreBreakdown[mondaiNum] = { correct: 0, total: 0 };
        }
        listeningScoreBreakdown[mondaiNum].total++;
        if (isCorrect) {
            listeningScoreBreakdown[mondaiNum].correct++;
        }
    }

    function stopListeningAudio() {
        if (listeningAudio) {
            try {
                listeningAudio.pause();
            } catch(e) {}
            isListeningPlaying = false;
            updateAudioControlsUI(false);
        }
    }

    function onAudioTimeUpdate() {
        if (!listeningAudio) return;
        const activeMode = typeof allQuizModes !== 'undefined' ? allQuizModes[currentModeKey] : null;
        if (!activeMode || !activeMode.isListening) return;
        const currentData = activeMode.questions[currentQuestion];
        if (!currentData) return;

        const start = currentData.audioStart || 0;
        const end = currentData.audioEnd || (start + 60);
        const cur = listeningAudio.currentTime;

        // Auto pause when clip ends
        if (cur >= end) {
            listeningAudio.pause();
            listeningAudio.currentTime = start;
            isListeningPlaying = false;
            updateAudioControlsUI(false);
            return;
        }

        const elapsed = Math.max(0, cur - start);
        const total = Math.max(1, end - start);
        const pct = Math.min(100, (elapsed / total) * 100);

        const progressBar = document.getElementById('listening-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${pct}%`;
        }

        const timeDisplay = document.getElementById('listening-time-display');
        if (timeDisplay) {
            timeDisplay.innerText = `${formatTime(elapsed)} / ${formatTime(total)}`;
        }
    }

    function onAudioEnded() {
        isListeningPlaying = false;
        updateAudioControlsUI(false);
    }

    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function updateAudioControlsUI(isPlaying) {
        const icon = document.getElementById('listening-play-icon');
        if (icon) {
            icon.className = isPlaying ? "fa-solid fa-pause text-indigo-600" : "fa-solid fa-play ml-0.5 text-indigo-600";
        }
    }

    function toggleListeningAudio() {
        const audio = getListeningAudio();
        const activeMode = allQuizModes[currentModeKey];
        if (!activeMode || !activeMode.isListening) return;
        const currentData = activeMode.questions[currentQuestion];
        if (!currentData) return;

        if (isListeningPlaying) {
            audio.pause();
        } else {
            const currentSrc = audio.getAttribute('src');
            if (currentSrc !== currentData.audioSrc) {
                audio.src = currentData.audioSrc;
            }
            const start = currentData.audioStart || 0;
            const end = currentData.audioEnd || (start + 60);

            if (audio.currentTime < start || audio.currentTime >= end) {
                audio.currentTime = start;
            }

            audio.play().then(() => {
                isListeningPlaying = true;
                updateAudioControlsUI(true);
            }).catch(e => {
                console.log("Audio autoplay prevented, user click required:", e);
            });
        }
    }

    function replayListeningAudio() {
        const audio = getListeningAudio();
        const activeMode = allQuizModes[currentModeKey];
        if (!activeMode || !activeMode.isListening) return;
        const currentData = activeMode.questions[currentQuestion];
        if (!currentData) return;

        if (audio.getAttribute('src') !== currentData.audioSrc) {
            audio.src = currentData.audioSrc;
        }
        audio.currentTime = currentData.audioStart || 0;
        audio.play().then(() => {
            isListeningPlaying = true;
            updateAudioControlsUI(true);
        }).catch(e => {});
    }

    function seekListeningAudio(e) {
        const audio = getListeningAudio();
        const activeMode = allQuizModes[currentModeKey];
        if (!activeMode || !activeMode.isListening) return;
        const currentData = activeMode.questions[currentQuestion];
        if (!currentData) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));

        const start = currentData.audioStart || 0;
        const end = currentData.audioEnd || (start + 60);
        const targetTime = start + (pct * (end - start));

        audio.currentTime = targetTime;
        const progressBar = document.getElementById('listening-progress-bar');
        if (progressBar) progressBar.style.width = `${pct * 100}%`;
    }

    function toggleListeningScript() {
        const scriptBox = document.getElementById('listening-script-box');
        const icon = document.getElementById('toggle-script-icon');
        const text = document.getElementById('toggle-script-text');
        if (!scriptBox) return;

        if (scriptBox.classList.contains('hidden')) {
            scriptBox.classList.remove('hidden');
            if (icon) icon.className = "fa-solid fa-chevron-up";
            if (text) text.innerText = "ซ่อนบทสนทนา (Script)";
        } else {
            scriptBox.classList.add('hidden');
            if (icon) icon.className = "fa-solid fa-chevron-down";
            if (text) text.innerText = "ดูบทสนทนา (Script) & คำแปลภาษาไทย";
        }
    }

    // Expose to window
    window.listeningManager = {
        getAudio: getListeningAudio,
        stopAudio: stopListeningAudio,
        toggleAudio: toggleListeningAudio,
        replayAudio: replayListeningAudio,
        seekAudio: seekListeningAudio,
        toggleScript: toggleListeningScript,
        recordScore: recordListeningScore,
        resetScores: resetListeningScoreBreakdown,
        getScores: () => listeningScoreBreakdown
    };

    window.toggleListeningAudio = toggleListeningAudio;
    window.replayListeningAudio = replayListeningAudio;
    window.seekListeningAudio = seekListeningAudio;
    window.toggleListeningScript = toggleListeningScript;
})();
