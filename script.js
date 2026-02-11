// State Management
let currentUser = JSON.parse(localStorage.getItem('codingApp_user')) || null;
// Ensure achievements array exists in user object if old data
// Ensure achievements array exists in user object if old data
if (currentUser && !currentUser.achievements) currentUser.achievements = [];
if (currentUser && !currentUser.completedExams) currentUser.completedExams = [];

let currentTheme = localStorage.getItem('codingApp_theme') || 'theme-default';
let completedLessons = JSON.parse(localStorage.getItem('codingApp_progress')) || [];
let lockEnabled = localStorage.getItem('codingApp_lockEnabled') !== 'false'; // Default true
let streakCount = parseInt(localStorage.getItem('codingApp_streak')) || 0;
let lastLogin = localStorage.getItem('codingApp_lastLogin') || '';

// Current active active lesson
let activeLesson = null;
let usedHintsCount = 0;
let currentScorePenalty = 0;

// Sounds
const soundSuccess = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg'); // Placeholder URL, replacing with base64 for reliability below
// Actually, let's use Base64 to ensure it works offline/locally without CORS issues for a demo
const audioSuccess = new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"); // Short placeholder
const audioError = new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"); // Short placeholder

// Better Base64 (Short Beep for Success, Low Beep for Error)
// Since I cannot easily generate long base64 strings here, I will use a simple trick: 
// In a real app, I'd use real files. For now, let's assume valid paths or use empty catch to prevent errors.
// Let's try to use a real online fallback if possible, or just mock it.
// Mocking for now to prevent console errors if offline.
const playSound = (type) => {
    // In a real implementation we would have actual sound files.
    // console.log(`Playing sound: ${type}`);
    // If user provided files, we'd play them. 
    // audioSuccess.play().catch(e => {}); 
};

// DOM Elements
const appInterface = document.getElementById('app-interface');
const loginScreen = document.getElementById('login-screen');
const usernameInput = document.getElementById('username');
const startBtn = document.getElementById('start-btn');
const avatarSelection = document.getElementById('avatar-selection');
const themeSelector = document.getElementById('theme-selector');
const curriculumAccordion = document.getElementById('curriculumAccordion');
const lessonContainer = document.getElementById('lesson-container');
// Dashboard elements
const dashboardHome = document.getElementById('dashboard-home');

// Toast
const toastElement = document.getElementById('liveToast');
const toast = new bootstrap.Toast(toastElement);

let selectedAvatar = '👨‍💻';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);

    if (currentUser) {
        showApp();
    } else {
        showLogin();
    }

    // Ensure lessonData is loaded
    if (typeof lessonData === 'undefined') {
        alert('Veri dosyası yüklenemedi! Lütfen sayfayı yenileyin.');
        return;
    }

    renderCurriculum();

    // Streak Logic
    checkStreak();

    // Gamification Init
    generateDailyQuests();
    renderDailyQuests();
    renderBadges();

    // Leaderboard Init
    initLeaderboard();

    // Settings Logic
    const lockToggle = document.getElementById('lock-toggle');
    if (lockToggle) {
        lockToggle.checked = lockEnabled;
        lockToggle.addEventListener('change', (e) => {
            lockEnabled = e.target.checked;
            localStorage.setItem('codingApp_lockEnabled', lockEnabled);
            renderCurriculum();
        });
    }
});

// ================= STREAK SYSTEM =================
function checkStreak() {
    const today = new Date().toDateString();

    if (lastLogin !== today) {
        if (lastLogin) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastLogin === yesterday.toDateString()) {
                streakCount++;
            } else {
                streakCount = 1; // Broken streak
            }
        } else {
            streakCount = 1; // First Login
        }

        localStorage.setItem('codingApp_lastLogin', today);
        localStorage.setItem('codingApp_streak', streakCount);
    }

    // Update UI
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = streakCount;
}

// ================= THEME SYSTEM =================
// Old selector removed, new function specific for circles
function selectTheme(themeName) {
    applyTheme(themeName);
    localStorage.setItem('codingApp_theme', themeName);
}

function applyTheme(themeName) {
    document.body.className = themeName;
    currentTheme = themeName;

    // Update active state in modal
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(i => {
        // Reset style
        i.style.transform = "scale(1)";
        i.style.boxShadow = "none";

        // Highlight active
        // Use onclick attribute to match since classList parsing is complex with sub-classes
        if (i.getAttribute('onclick').includes(themeName)) {
            i.style.transform = "scale(1.3)";
            i.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        }
    });
}

// ================= FONT SIZE SYSTEM =================
let currentFontSize = 16;
function changeFontSize(delta) {
    currentFontSize = Math.max(12, Math.min(24, currentFontSize + delta));
    document.body.style.fontSize = `${currentFontSize}px`;
    // Update editors if needed, though they usually have fixed fonts. 
    // Let's scale some elements specifically if needed.
}

// ================= USER SYSTEM =================
avatarSelection.querySelectorAll('.avatar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all avatar buttons (including upload button if needed)
        avatarSelection.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('upload-avatar-btn').classList.remove('active');

        btn.classList.add('active');
        selectedAvatar = btn.dataset.avatar;
    });
});

// Custom Avatar Upload
const uploadBtn = document.getElementById('upload-avatar-btn');
const fileInput = document.getElementById('custom-avatar-input');

if (uploadBtn && fileInput) {
    uploadBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check size (max 500KB)
            if (file.size > 500000) {
                alert("Dosya boyutu çok büyük! (Max 500KB)");
                return;
            }

            const reader = new FileReader();
            reader.onload = function (evt) {
                const base64Info = evt.target.result;
                selectedAvatar = base64Info;

                // Visual feedback
                avatarSelection.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('active'));
                uploadBtn.classList.add('active');
                uploadBtn.innerHTML = `<img src="${base64Info}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            };
            reader.readAsDataURL(file);
        }
    });
}

startBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (!name) {
        showToast('Lütfen adını gir!', 'danger');
        return;
    }

    currentUser = {
        name: name,
        avatar: selectedAvatar,
        points: 0
    };

    localStorage.setItem('codingApp_user', JSON.stringify(currentUser));
    showApp();
});

document.getElementById('logout-btn').addEventListener('click', () => {
    if (confirm('Çıkış yapmak istediğine emin misin?')) {
        localStorage.removeItem('codingApp_user');
        // localStorage.removeItem('codingApp_progress'); // Keep progress?
        location.reload();
    }
});

// ================= GAMIFICATION & TOOLS =================

// --- POMODORO ---
let pomodoroInterval;
let pomodoroTime = 25 * 60;
let isPomodoroRunning = false;

// --- FOCUS RADIO ---
let isRadioPlaying = false;
const radioAudio = document.getElementById('focus-audio');
if (radioAudio) radioAudio.volume = 0.3; // Low volume default

function toggleRadio() {
    const statusEl = document.getElementById('radio-status');
    const iconEl = document.getElementById('radio-icon');

    if (isRadioPlaying) {
        radioAudio.pause();
        statusEl.textContent = 'OFF';
        statusEl.classList.remove('text-success');
        iconEl.classList.remove('fa-spin');
    } else {
        radioAudio.play().catch(e => console.log("Audio play failed (interaction needed):", e));
        statusEl.textContent = 'ON';
        statusEl.classList.add('text-success');
        iconEl.classList.add('fa-spin');
    }
    isRadioPlaying = !isRadioPlaying;
}

function togglePomodoro() {
    const display = document.getElementById('pomodoro-display');

    if (isPomodoroRunning) {
        clearInterval(pomodoroInterval);
        isPomodoroRunning = false;
        display.classList.remove('text-success');
    } else {
        isPomodoroRunning = true;
        display.classList.add('text-success');
        pomodoroInterval = setInterval(() => {
            pomodoroTime--;
            if (pomodoroTime <= 0) {
                clearInterval(pomodoroInterval);
                isPomodoroRunning = false;
                playSound('success');
                showToast('Pomodoro Tamamlandı! Ara ver.', 'success');
                pomodoroTime = 25 * 60;
            }

            const m = Math.floor(pomodoroTime / 60).toString().padStart(2, '0');
            const s = (pomodoroTime % 60).toString().padStart(2, '0');
            display.textContent = `${m}:${s}`;
        }, 1000);
    }
}

// --- TTS ---
function speakTheory() {
    const text = document.getElementById('lesson-theory').innerText; // Get clean text
    if (!text) return;

    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        window.speechSynthesis.speak(utterance);
    }
}

// --- LAYOUT ---
function openPlayground() {
    const modal = new bootstrap.Modal(document.getElementById('playgroundModal'));
    loadRandomExample(); // Auto-load an example
    modal.show();
}
// --- BADGES ---
const badgesData = [
    { id: 'first_win', title: 'İlk Adım', icon: '🏃', desc: 'İlk dersini tamamla.' },
    { id: 'quiz_master', title: 'Bilgi Küpü', icon: '🧠', desc: '5 ders tamamla.' },
    { id: 'night_owl', title: 'Gece Kuşu', icon: '🦉', desc: 'Gece çalışması yap.' },
    { id: 'streak_3', title: 'İstikrar', icon: '🔥', desc: '3 gün üst üste giriş yap.' },
    { id: 'coder_pro', title: 'Kod Ustası', icon: '💻', desc: '1000 Puan topla.' }
];

function checkAchievements() {
    if (!currentUser) return;
    const newBadges = [];

    // Rule: First Win
    if (completedLessons.length >= 1 && !hasBadge('first_win')) newBadges.push('first_win');

    // Rule: Quiz Master
    if (completedLessons.length >= 5 && !hasBadge('quiz_master')) newBadges.push('quiz_master');

    // Rule: Night Owl (22:00 - 05:00)
    const hour = new Date().getHours();
    if ((hour >= 22 || hour < 5) && !hasBadge('night_owl')) newBadges.push('night_owl');

    // Rule: Streak
    if (streakCount >= 3 && !hasBadge('streak_3')) newBadges.push('streak_3');

    // Rule: Points
    if (currentUser.points >= 1000 && !hasBadge('coder_pro')) newBadges.push('coder_pro');

    if (newBadges.length > 0) {
        currentUser.achievements.push(...newBadges);
        saveUser();
        renderBadges();
        newBadges.forEach(bid => {
            const b = badgesData.find(x => x.id === bid);
            showToast(`Yeni Rozet: ${b.icon} ${b.title}`, 'success');
            playSound('success');
        });
    }
}

function hasBadge(id) {
    return currentUser.achievements && currentUser.achievements.includes(id);
}

function renderBadges() {
    const container = document.getElementById('badges-container');
    if (!container) return;
    container.innerHTML = '';

    badgesData.forEach(b => {
        const unlocked = hasBadge(b.id);
        const el = document.createElement('div');
        el.className = `badge-item p-2 border rounded ${unlocked ? 'bg-warning bg-opacity-10 border-warning' : 'bg-light text-muted'}`;
        el.style.width = '80px';
        el.style.cursor = 'help';
        el.title = b.desc;
        el.innerHTML = `
            <div class="fs-4 mb-1" style="${unlocked ? '' : 'filter: grayscale(100%); opacity: 0.5;'}">${b.icon}</div>
            <div style="font-size: 0.65rem; line-height: 1.1;">${b.title}</div>
        `;
        container.appendChild(el);
    });
}

// --- DAILY QUESTS ---
let dailyQuests = JSON.parse(localStorage.getItem('codingApp_quests')) || null;
const questTemplates = [
    { id: 'q1', text: '1 Ders Tamamla', target: 1, type: 'lesson' },
    { id: 'q2', text: '50 Puan Kazan', target: 50, type: 'points' },
    { id: 'q3', text: 'İpucu Kullanma', target: 1, type: 'nohint' },
    { id: 'q4', text: 'Hata Düzeltme Çöz', target: 1, type: 'fix' },
];

function generateDailyQuests() {
    const today = new Date().toDateString();
    const lastQDate = localStorage.getItem('codingApp_questDate');

    if (lastQDate !== today || !dailyQuests) {
        dailyQuests = [
            { ...questTemplates[0], progress: 0, completed: false }, // Always include lesson quest
            { ...questTemplates[1], progress: 0, completed: false },
            { ...questTemplates[Math.floor(Math.random() * (questTemplates.length - 2)) + 2], progress: 0, completed: false } // Random 3rd
        ];
        localStorage.setItem('codingApp_questDate', today);
        saveQuests();
    }
}

function updateQuestProgress(type, amount) {
    let updated = false;
    dailyQuests.forEach(q => {
        if (!q.completed && q.type === type) {
            q.progress += amount;
            if (q.progress >= q.target) {
                q.completed = true;
                showToast(`Görev Tamamlandı: ${q.text}`, 'success');
                playSound('success');
                // Bonus points for quest
                currentUser.points += 20;
                saveUser();
                updateUserProfile();
                updated = true;
            }
            updated = true; // data changed check
        }
    });
    if (updated) {
        saveQuests();
        renderDailyQuests();
    }
}

function saveQuests() {
    localStorage.setItem('codingApp_quests', JSON.stringify(dailyQuests));
}

function renderDailyQuests() {
    const list = document.getElementById('daily-quests-list');
    if (!list) return;
    list.innerHTML = '';

    dailyQuests.forEach(q => {
        list.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <i class="${q.completed ? 'fas fa-check-square text-success' : 'far fa-square text-secondary'} me-2"></i>
                    <span class="${q.completed ? 'text-decoration-line-through text-muted' : ''}">${q.text}</span>
                </div>
                <span class="badge ${q.completed ? 'bg-success' : 'bg-white text-muted border'}">${q.progress}/${q.target}</span>
            </li>
        `;
    });
}

// --- LEADERBOARD ---
function initLeaderboard() {
    const list = document.getElementById('leaderboard-body');
    const myRankEl = document.getElementById('user-rank');
    if (!list) return;

    // Fake users
    const fakeUsers = [
        { name: 'KodCanavarı', points: 2500 },
        { name: 'PythonGuru', points: 1800 },
        { name: 'WebMaster99', points: 1200 },
        { name: 'BugHunter', points: 950 },
        { name: 'AcemiCoder', points: 300 }
    ];

    // Add current user
    const allUsers = [...fakeUsers, { name: currentUser.name + " (Sen)", points: currentUser.points, isMe: true }];

    // Sort
    allUsers.sort((a, b) => b.points - a.points);

    // Render
    list.innerHTML = '';
    let myRank = '-';

    allUsers.forEach((u, index) => {
        const rank = index + 1;
        if (u.isMe) myRank = rank;

        const rowClass = u.isMe ? 'table-warning fw-bold' : '';
        const icon = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;

        list.innerHTML += `
            <tr class="${rowClass}">
                <th scope="row">${icon}</th>
                <td>${u.name}</td>
                <td class="text-end">${u.points}</td>
            </tr>
        `;
    });

    if (myRankEl) myRankEl.textContent = `#${myRank}`;
}

// --- PROFILE EDIT SYSTEM ---
let tempAvatar = ''; // Store avatar changes temporarily

function openEditProfile() {
    const modal = new bootstrap.Modal(document.getElementById('editProfileModal'));
    document.getElementById('edit-username').value = currentUser.name;
    tempAvatar = currentUser.avatar;
    updateEditPreview();
    modal.show();
}

function setEditAvatar(val) {
    tempAvatar = val;
    updateEditPreview();
}

function updateEditPreview() {
    const preview = document.getElementById('edit-avatar-preview');
    if (tempAvatar.startsWith('data:image')) {
        preview.innerHTML = `<img src="${tempAvatar}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;">`;
    } else {
        preview.innerHTML = tempAvatar; // Emoji
        preview.style.fontSize = "3rem";
    }
}

// Edit File Input Listener
const editFileInput = document.getElementById('edit-avatar-input');
if (editFileInput) {
    editFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 500000) { alert("Max 500KB!"); return; }
            const reader = new FileReader();
            reader.onload = (evt) => {
                setEditAvatar(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

function saveProfileChanges() {
    const newName = document.getElementById('edit-username').value.trim();
    if (!newName) { alert("İsim boş olamaz!"); return; }

    currentUser.name = newName;
    currentUser.avatar = tempAvatar;

    saveUser();
    updateUserProfile();

    // Close modal
    const el = document.getElementById('editProfileModal');
    const modal = bootstrap.Modal.getInstance(el);
    modal.hide();

    showToast("Profil güncellendi!", "success");
}

// --- CERTIFICATE SYSTEM ---
function openCertificateForSubject(subject) {
    const titles = {
        'five': '5. Sınıf Bilişim',
        'six': '6. Sınıf Bilişim',
        'html': 'HTML Geliştirme',
        'css': 'CSS Tasarım',
        'javascript': 'JavaScript Programlama',
        'python': 'Python Programlama',
        'react': 'React Geliştirme',
        'git': 'Git Versiyon Kontrol'
    };
    const title = titles[subject] || 'Kodlama Dünyası';
    openCertificateModal(title);
}

function openCertificateModal(customTitle = null) {
    const modal = new bootstrap.Modal(document.getElementById('certificateModal'));
    drawCertificate(customTitle);
    modal.show();
}

function checkCertificateEligibility() {
    if (currentUser.points >= 500 || completedLessons.length >= 5) { // Lowered threshold for demo
        openCertificateModal();
    } else {
        alert("Sertifika için 500 puana ulaşmalı veya 5 ders bitirmelisin!");
    }
}

function drawCertificate(customTitle = null) {
    const canvas = document.getElementById('certificate-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#0d6efd"; // Bootstrap Primary
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ffc107"; // Warning Yellow
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Text Config
    ctx.textAlign = "center";

    // Header
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#212529";
    ctx.fillText("BAŞARI SERTİFİKASI", canvas.width / 2, 140);

    ctx.font = "30px Arial";
    ctx.fillStyle = "#6c757d";
    ctx.fillText("Bu sertifika, başarıyla tamamlayan", canvas.width / 2, 220);

    // Name
    ctx.font = "bold italic 60px 'Times New Roman'";
    ctx.fillStyle = "#0d6efd";
    ctx.fillText(currentUser.name, canvas.width / 2, 300);

    // Context
    ctx.font = "24px Arial";
    ctx.fillStyle = "#212529";

    // Custom Title Logic
    const programName = customTitle ? `${customTitle} Eğitimi'ni` : "Kodlama Dünyası Temel Eğitim Programı'nı";
    ctx.fillText(programName, canvas.width / 2, 380);

    ctx.fillText("üstün başarıyla bitirdiğini belgeler.", canvas.width / 2, 420);

    // Date & Signature
    const date = new Date().toLocaleDateString('tr-TR');
    ctx.font = "20px Arial";
    ctx.fillText(`Tarih: ${date}`, 200, 500);

    ctx.font = "bold 20px Arial";
    ctx.fillText("Kodlama Dünyası", 600, 500);
    ctx.font = "italic 16px Arial";
    ctx.fillText("(Onaylandı)", 600, 530);

    // Icon (Simple circle)
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 500, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffc107";
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "40px Arial";
    ctx.fillText("★", canvas.width / 2, 515);
}

function downloadCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    const link = document.createElement('a');
    link.download = `Sertifika_${currentUser.name}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

// --- PLAYGROUND ---
let currentPlaygroundLang = 'html';

function changePlaygroundLanguage() {
    currentPlaygroundLang = document.getElementById('playground-lang-select').value;
    loadRandomExample();
}

function loadRandomExample() {
    const lang = document.getElementById('playground-lang-select').value;
    const examples = codingExamples[lang] || codingExamples['html'];
    const randomExample = examples[Math.floor(Math.random() * examples.length)];

    document.getElementById('playground-code').value = randomExample.code;

    // Auto-run if web, else show info
    if (['html', 'css', 'javascript'].includes(lang)) {
        runPlayground();
    } else {
        const preview = document.getElementById('playground-preview');
        const doc = preview.contentDocument || preview.contentWindow.document;
        doc.open();
        doc.write(`
            <body style="background:#1e1e1e; color:#0f0; font-family:monospace; padding:20px;">
                <h3>>_ SİMÜLASYON MODU (${lang.toUpperCase()})</h3>
                <hr style="border-color:#333;">
                <pre>${randomExample.output || 'Bu kodun çıktısı burada görünecek...'}</pre>
                <br>
                <div style="color:#aaa; font-size:12px;">* Not: ${lang.toUpperCase()} kodu tarayıcıda doğrudan çalışmaz. Bu bir önizlemedir.</div>
            </body>
        `);
        doc.close();
    }
}

function runPlayground() {
    const code = document.getElementById('playground-code').value;
    const lang = document.getElementById('playground-lang-select').value;
    const preview = document.getElementById('playground-preview');
    const doc = preview.contentDocument || preview.contentWindow.document;

    if (['html', 'css', 'javascript'].includes(lang)) {
        doc.open();
        doc.write(code);
        doc.close();
    } else {
        // Re-render simulation view if user clicks run manually on non-web langs
        const examples = codingExamples[lang] || [];
        // Try to find if current code matches an example to show its output, else generic
        const matched = examples.find(ex => ex.code.trim() === code.trim());

        doc.open();
        doc.write(`
            <body style="background:#1e1e1e; color:#0f0; font-family:monospace; padding:20px;">
                <h3>>_ ÇALIŞTIRILIYOR...</h3>
                <hr style="border-color:#333;">
                <pre>${matched ? matched.output : 'Kod derlendi. (Simülasyon)'}</pre>
            </body>
        `);
        doc.close();
    }
}

function savePlaygroundProject() {
    const code = document.getElementById('playground-code').value;
    const name = prompt("Projeye bir isim ver:", "Yeni Proje " + new Date().toLocaleTimeString());
    if (!name) return;

    const projects = JSON.parse(localStorage.getItem('codingApp_projects') || '[]');
    projects.push({ id: Date.now(), name: name, code: code, date: new Date().toLocaleDateString() });
    localStorage.setItem('codingApp_projects', JSON.stringify(projects));

    alert("Proje Kaydedildi! 💾");
}

function openProjectsModal() {
    const modal = new bootstrap.Modal(document.getElementById('projectsModal'));
    const list = document.getElementById('saved-projects-list');
    const projects = JSON.parse(localStorage.getItem('codingApp_projects') || '[]');

    list.innerHTML = '';
    if (projects.length === 0) list.innerHTML = '<div class="text-center p-3">Henüz kaydedilmiş bir projen yok.</div>';

    projects.forEach(p => {
        const item = document.createElement('div');
        item.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
        item.innerHTML = `
            <div>
                <h6 class="mb-0">${p.name}</h6>
                <small class="text-muted">${p.date}</small>
            </div>
            <div>
                <button class="btn btn-sm btn-primary me-2" onclick="loadProject(${p.id})">Aç</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProject(${p.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        list.appendChild(item);
    });

    modal.show();
}

function loadProject(id) {
    const projects = JSON.parse(localStorage.getItem('codingApp_projects') || '[]');
    const p = projects.find(x => x.id === id);
    if (p) {
        document.getElementById('playground-code').value = p.code;
        bootstrap.Modal.getInstance(document.getElementById('projectsModal')).hide();
        runPlayground(); // Auto run
    }
}

function deleteProject(id) {
    if (!confirm("Bu projeyi silmek istediğine emin misin?")) return;
    let projects = JSON.parse(localStorage.getItem('codingApp_projects') || '[]');
    projects = projects.filter(x => x.id !== id);
    localStorage.setItem('codingApp_projects', JSON.stringify(projects));
    openProjectsModal(); // Refresh list
}

// --- MENTOR AI ---
const mentorKnowledge = {
    'merhaba': "Selam! Kodlama yolculuğunda sana nasıl yardım edebilirim?",
    'nasılsın': "Ben bir robotum, yani harika hissediyorum! 🤖 Sen nasılsın?",
    'html': "HTML, web sayfalarının iskeletidir. Etiketler (tags) kullanarak başlık, paragraf ve resimler eklersin.",
    'css': "CSS, sayfalarını güzelleştirir. Renkler, boyutlar ve düzenlemeler buradan yapılır.",
    'js': "JavaScript sayfana can verir! Tıklamalar, animasyonlar ve mantık işlemleri ondan sorulur.",
    'değişken': "Değişkenler, veri saklayan kutulardır. `let` veya `const` ile tanımlanır.",
    'döngü': "Döngüler (Loop), bir işi tekrar tekrar yapmanı sağlar. Örneğin 1'den 100'e kadar saymak gibi.",
    'hata': "Hata yapmak öğrenmenin en iyi yoludur! Konsolu (F12) kontrol etmeyi unutma.",
    'default': "Bunu tam anlayamadım ama kodlama harika bir şey! Başka bir şekilde sorabilir misin?"
};

function askMentor() {
    const inputEl = document.getElementById('mentor-input');
    const msg = inputEl.value.trim().toLowerCase();
    if (!msg) return;

    // User Msg
    addMentorMsg(msg, 'user');
    inputEl.value = '';

    // AI Response (Simple keyword matching)
    setTimeout(() => {
        let reply = mentorKnowledge['default'];
        for (const key in mentorKnowledge) {
            if (msg.includes(key)) {
                reply = mentorKnowledge[key];
                break;
            }
        }
        addMentorMsg(reply, 'ai');
        playSound('success'); // Subtle notification sound
    }, 600);
}

function addMentorMsg(text, sender) {
    const area = document.getElementById('mentor-chat-area');
    const align = sender === 'user' ? 'justify-content-end' : 'justify-content-start';
    const bg = sender === 'user' ? 'bg-primary text-white' : 'bg-light border';

    area.innerHTML += `
        <div class="d-flex mb-3 ${align}">
            <div class="${bg} p-2 rounded" style="max-width: 80%;">
                ${text}
            </div>
        </div>
    `;
    area.scrollTop = area.scrollHeight;
}

// Allow Enter key in mentor chat
document.getElementById('mentor-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') askMentor();
});

// --- GLOSSARY ---
const glossaryTerms = [
    { t: 'Algorithm (Algoritma)', d: 'Bir sorunu çözmek için izlenen adım adım yol.' },
    { t: 'Array (Dizi)', d: 'Birden fazla veriyi tek bir değişkende saklayan liste yapısı.' },
    { t: 'API', d: 'Uygulamaların birbirleriyle konuşmasını sağlayan arayüz.' },
    { t: 'Boolean', d: 'Sadece Doğru (True) veya Yanlış (False) değeri alan veri tipi.' },
    { t: 'Bug (Hata)', d: 'Yazılımda istenmeyen sonuçlara yol açan kusur.' },
    { t: 'CSS', d: 'Web sayfalarının stilini ve görünümünü düzenleyen dil.' },
    { t: 'Debug', d: 'Hataları bulup düzeltme işlemi.' },
    { t: 'Function (Fonksiyon)', d: 'Belirli bir işi yapan kod bloğu.' },
    { t: 'HTML', d: 'Web sayfalarının iskeletini oluşturan işaretleme dili.' },
    { t: 'Loop (Döngü)', d: 'Bir işlemi koşul sağlanana kadar tekrar etme yapısı.' },
    { t: 'Variable (Değişken)', d: 'Veri saklamak için kullanılan isimlendirilmiş alan.' }
];

document.getElementById('glossaryModal').addEventListener('shown.bs.modal', () => {
    renderGlossary();
    document.getElementById('glossary-search').focus();
});

document.getElementById('glossary-search').addEventListener('input', (e) => {
    renderGlossary(e.target.value);
});

function renderGlossary(filter = '') {
    const list = document.getElementById('glossary-list');
    list.innerHTML = '';

    const filtered = glossaryTerms.filter(item =>
        item.t.toLowerCase().includes(filter.toLowerCase()) ||
        item.d.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(item => {
        list.innerHTML += `
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1 fw-bold text-primary">${item.t}</h6>
                </div>
                <p class="mb-1 small">${item.d}</p>
            </a>
        `;
    });
}

// --- HACKER TYPER GAME ---
let gameInterval;
let gameTimerInterval;
let gameScore = 0;
let gameTime = 60;
let gameWords = [];
const wordList = ['function', 'return', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'div', 'span', 'background', 'color', 'border', 'padding', 'margin', 'alert', 'console', 'document', 'window'];

function startGame() {
    document.getElementById('game-start-overlay').classList.add('d-none');
    const input = document.getElementById('game-input');
    input.value = '';
    input.focus();
    gameScore = 0;
    gameTime = 60;
    document.getElementById('game-score').textContent = 0;
    document.getElementById('game-timer').textContent = '60s';
    document.getElementById('game-words-container').innerHTML = '';
    gameWords = [];

    // Game Loop
    gameInterval = setInterval(() => {
        spawnWord();
        moveWords();
    }, 1000); // New word every second

    // Timer
    gameTimerInterval = setInterval(() => {
        gameTime--;
        document.getElementById('game-timer').textContent = gameTime + 's';
        if (gameTime <= 0) endGame();
    }, 1000);

    input.oninput = checkGameInput;
}

function spawnWord() {
    const container = document.getElementById('game-words-container');
    const wordText = wordList[Math.floor(Math.random() * wordList.length)];
    const el = document.createElement('div');
    el.textContent = wordText;
    el.className = 'position-absolute text-success font-monospace fw-bold';
    el.style.top = '0px';
    el.style.left = Math.floor(Math.random() * 80) + 10 + '%'; // Random X
    container.appendChild(el);

    gameWords.push({ el: el, text: wordText, top: 0 });
}

function moveWords() {
    const container = document.getElementById('game-area');
    const h = container.offsetHeight;

    gameWords.forEach((w, i) => {
        w.top += 20; // Falling speed
        w.el.style.top = w.top + 'px';

        if (w.top > h - 40) { // Hit bottom
            w.el.remove();
            gameWords.splice(i, 1);
            // Penalty?
            gameScore = Math.max(0, gameScore - 5);
            document.getElementById('game-score').textContent = gameScore;
        }
    });
}

function checkGameInput(e) {
    const val = e.target.value.trim();
    const matchIndex = gameWords.findIndex(w => w.text === val);

    if (matchIndex !== -1) {
        // Hit!
        const w = gameWords[matchIndex];
        w.el.classList.add('text-white'); // Flash effect logic could go here
        w.el.remove();
        gameWords.splice(matchIndex, 1);

        gameScore += 10;
        document.getElementById('game-score').textContent = gameScore;
        e.target.value = ''; // Clear input
        playSound('success');
    }
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(gameTimerInterval);
    alert(`Oyun Bitti! Skorun: ${gameScore}`);
    document.getElementById('game-start-overlay').classList.remove('d-none');
}

// Reset game when modal closes
document.getElementById('gameModal').addEventListener('hidden.bs.modal', () => {
    clearInterval(gameInterval);
    clearInterval(gameTimerInterval);
    document.getElementById('game-start-overlay').classList.remove('d-none');
});

function saveUser() {
    localStorage.setItem('codingApp_user', JSON.stringify(currentUser));
}

function showLogin() {
    loginScreen.classList.remove('d-none');
    appInterface.classList.add('d-none');
}

function showApp() {
    loginScreen.classList.add('d-none');
    appInterface.classList.remove('d-none');
    updateUserProfile();
    updateDashboard(); // Initial dashboard update
}

function updateUserProfile() {
    document.getElementById('user-name').textContent = currentUser.name;

    // Check if avatar is image or emoji
    const avatarEl = document.getElementById('user-avatar');
    if (currentUser.avatar.startsWith('data:image')) {
        avatarEl.innerHTML = `<img src="${currentUser.avatar}" alt="user" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid white;">`;
        avatarEl.className = ""; // Remove default font size class if any
    } else {
        avatarEl.textContent = currentUser.avatar;
        avatarEl.className = "fs-4";
    }

    document.getElementById('user-points').textContent = currentUser.points;
}

// ================= DASHBOARD SYSTEM =================
function updateDashboard() {
    if (!currentUser) return;

    const nameEl = document.getElementById('dash-user-name');
    if (nameEl) nameEl.textContent = currentUser.name;

    ['five', 'six', 'html', 'css', 'javascript', 'python', 'react', 'git'].forEach(lang => {
        // Count total lessons
        const lessons = lessonData[lang] || [];
        let total = lessons.length;

        // Count completed
        let completed = 0;
        lessons.forEach(lesson => {
            if (completedLessons.includes(lesson.id)) completed++;
        });

        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        // Update UI
        const bar = document.getElementById(`prog-${lang}`);
        const text = document.getElementById(`text-${lang}`);

        if (bar) bar.style.width = `${percent}%`;
        if (text) text.textContent = completed;

        // --- NEW: Certificate Button Injection ---
        // If user passed the exam for this subject, show a button in the footer or near the progress
        // We need a stable place to inject it. The card usually has a 'card-body'.
        // Let's find the card element for this subject.
        // ID convention: 'card-[lang]' (we need to make sure this ID exists in HTML, or add a container).
        // Looking at HTML, there are no specific IDs for the card containers aside from layout.
        // However, the progress bars have IDs like 'prog-five'. We can traverse up.
        // A better way: assigned unique IDs to the action buttons or footer area in HTML?
        // Let's try to append to the card body if not exists.

        // Actually, let's look for a container with a specific ID pattern or add one.
        // Or simpler: The "Derse Başla" button area.

        if (currentUser.completedExams && currentUser.completedExams.includes(lang)) {
            // Find the specific card's footer or action area
            // Since we don't have unique IDs for buttons, let's use the progress bar's parent's parent...
            // Or better, let's just use `document.querySelector` with a specific attribute if possible.
            // Given the HTML structure isn't fully rigid with IDs, let's assume we can find the button container 
            // relative to the progress bar `prog-${lang}`.

            const progBar = document.getElementById(`prog-${lang}`);
            if (progBar) {
                // Move up to card-body, then look for the button container (mt-3)
                // Structure: card -> card-body -> (title, progress, description, button)
                const cardBody = progBar.closest('.card-body');
                if (cardBody) {
                    let certBtn = cardBody.querySelector(`.btn-certificate-${lang}`);
                    if (!certBtn) {
                        const btnContainer = document.createElement('div');
                        btnContainer.className = 'mt-2 d-grid';

                        certBtn = document.createElement('button');
                        certBtn.className = `btn btn-outline-warning btn-sm fw-bold btn-certificate-${lang}`;
                        certBtn.innerHTML = '<i class="fas fa-certificate me-1"></i> Sertifikayı Görüntüle';
                        certBtn.onclick = (e) => {
                            e.stopPropagation();
                            openCertificateForSubject(lang);
                        };

                        btnContainer.appendChild(certBtn);
                        // Append before the "Derse Başla" or "Devam Et" button if possible, or just at bottom
                        // The existing button is likely the last child or close to it.
                        // Let's just append updates.
                        cardBody.appendChild(btnContainer);
                    }
                }
            }
        }
    });
}

function openSubject(subject) {
    // Open the accordion item for this subject
    const collapseId = `collapse${subject}`;
    const collapseEl = document.getElementById(collapseId);
    if (collapseEl) {
        new bootstrap.Collapse(collapseEl, { show: true });

        // Find first unlocked lesson (optional logic could go here)
        // Scroll sidebar to view
        setTimeout(() => {
            document.getElementById('sidebar').scrollTop = 0;
        }, 100);
    }
}

// ================= CURRICULUM SYSTEM =================
function renderCurriculum() {
    curriculumAccordion.innerHTML = '';

    // Update dashboard whenever we render (re-renders happen on lesson complete)
    updateDashboard();

    const titles = { five: "5. Sınıf", six: "6. Sınıf", html: "HTML", css: "CSS", javascript: "JavaScript", python: "Python", react: "React", git: "Git & GitHub" };
    const icons = { five: "fas fa-graduation-cap", six: "fas fa-laptop-code", html: "fab fa-html5", css: "fab fa-css3-alt", javascript: "fab fa-js", python: "fab fa-python", react: "fab fa-react", git: "fab fa-git-alt" };
    const validSubjects = ['five', 'six', 'html', 'css', 'javascript', 'python', 'react', 'git'];

    validSubjects.forEach((key, index) => {
        if (!lessonData[key]) return;

        const lessons = lessonData[key];
        const collapseId = `collapse${key}`;

        let levelsHtml = '';

        lessons.forEach((lesson, i) => {
            const isCompleted = completedLessons.includes(lesson.id);

            // Simple Locking: Lock if previous not completed
            const prevLessonId = i > 0 ? lessons[i - 1].id : null;
            const isLocked = lockEnabled && prevLessonId && !completedLessons.includes(prevLessonId);

            let statusIcon = '<i class="far fa-circle text-muted"></i>';
            let currClass = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center p-2 small lesson-item';
            let clickAttr = `onclick="loadLesson('${key}', ${lesson.id})"`; // ID is number now

            if (isCompleted) {
                statusIcon = '<i class="fas fa-check-circle text-success"></i>';
            } else if (isLocked) {
                statusIcon = '<i class="fas fa-lock text-secondary"></i>';
                currClass += ' text-muted bg-light'; // Dimmed
                clickAttr = ''; // Unclickable
            }

            levelsHtml += `
                <div class="${currClass}" style="${isLocked ? 'cursor: not-allowed; opacity: 0.6;' : 'cursor: pointer;'}" ${clickAttr}>
                    <span>${statusIcon} ${lesson.title}</span>
                </div>
            `;
        });

        // Add Final Exam Item
        levelsHtml += `
            <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-2 small fw-bold text-danger border-top" 
                 style="cursor: pointer; background: #fff5f5;" 
                 onclick="openExam('${key}')">
                <span><i class="fas fa-trophy text-warning"></i> Final Sınavı (20 Soru)</span>
                <span class="badge bg-danger rounded-pill">Sınav</span>
            </div>
        `;

        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item border-0 mb-2 shadow-sm overflow-hidden';
        accordionItem.innerHTML = `
            <h2 class="accordion-header">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''} fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                    <i class="${icons[key]} me-2"></i> ${titles[key]}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body p-0">
                    <div class="list-group list-group-flush">
                        ${levelsHtml}
                    </div>
                </div>
            </div>
        `;
        curriculumAccordion.appendChild(accordionItem);
    });
}

function loadLesson(subjectKey, lessonId) {
    const lessons = lessonData[subjectKey];
    const foundLesson = lessons.find(l => l.id === lessonId);

    if (!foundLesson) return;

    activeLesson = foundLesson;
    usedHintsCount = 0;
    currentScorePenalty = 0;

    // UI Update
    lessonContainer.classList.remove('d-none');
    if (dashboardHome) dashboardHome.classList.add('d-none');

    document.getElementById('lesson-title').textContent = foundLesson.title;
    document.getElementById('lesson-theory').innerHTML = foundLesson.theory;
    document.getElementById('lesson-tip').textContent = foundLesson.tips || "";

    // Quiz Setup
    const editor = document.getElementById('code-editor');
    const instruction = document.getElementById('practice-instruction');
    const badge = document.getElementById('practice-type-badge');
    const feedback = document.getElementById('feedback-area');
    const hintBtn = document.getElementById('hint-btn');
    const solutionArea = document.getElementById('solution-area');
    const checkBtn = document.getElementById('check-btn');

    // Hide Editor, Show Quiz
    editor.classList.add('d-none'); // Hide editor
    feedback.innerHTML = '';
    solutionArea.classList.add('d-none');

    // Reuse instruction area for Question
    instruction.innerHTML = `
        <h5 class="fw-bold mb-3">❓ Soru:</h5>
        <p class="lead">${foundLesson.question}</p>
        <div class="mt-3">
            ${foundLesson.options.map((opt, i) => `
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="quizOption" id="opt${i}" value="${i}">
                    <label class="form-check-label" for="opt${i}" style="cursor:pointer; width:100%">${opt}</label>
                </div>
            `).join('')}
        </div>
    `;

    badge.textContent = "Test Zamanı";
    badge.className = "badge bg-info text-dark";

    // Configure buttons
    hintBtn.disabled = false;
    hintBtn.textContent = `💡 İpucu Al (-10 Puan) [0/3]`;

    checkBtn.onclick = () => checkAnswer(foundLesson);
    hintBtn.onclick = () => showHint(foundLesson);
}

// ================= HINT SYSTEM =================
function showHint(lesson) {
    const hintBtn = document.getElementById('hint-btn');
    const feedback = document.getElementById('feedback-area');

    if (usedHintsCount === 0) {
        // Show the Tip
        feedback.innerHTML = `<div class="alert alert-info border-0 shadow-sm"><i class="fas fa-lightbulb text-warning me-2"></i><strong>İpucu:</strong> ${lesson.tips || "Bu soru için ipucu yok."}</div>`;

        usedHintsCount++;
        currentScorePenalty += 10; // 10 points penalty
        hintBtn.textContent = "İpucu Görüntülendi (-10)";
        hintBtn.disabled = true;

        showToast("İpucu kullanıldı! -10 Puan", "info");
    }
}

// ================= CHECKING LOGIC =================
function checkAnswer(lesson) {
    const feedback = document.getElementById('feedback-area');

    // Quiz Check
    const selected = document.querySelector('input[name="quizOption"]:checked');

    if (!selected) {
        showToast("Lütfen bir şık seç!", "warning");
        return;
    }

    const userAns = parseInt(selected.value);

    if (userAns === lesson.answer) {
        playSound('success');
        const finalPoints = Math.max(0, 50 - currentScorePenalty);

        feedback.innerHTML = `<span class="text-success fw-bold"><i class="fas fa-check"></i> Doğru Cevap!</span>`;
        showToast(`Tebrikler! +${finalPoints} puan kazandın.`, 'success');

        completeLesson(lesson, finalPoints);

        // Gamification Triggers
        checkAchievements();
        updateQuestProgress('lesson', 1);
        if (finalPoints > 0) updateQuestProgress('points', finalPoints);
        if (usedHintsCount === 0) updateQuestProgress('nohint', 1);

        initLeaderboard();
    } else {
        playSound('error');
        feedback.innerHTML = `<span class="text-danger fw-bold"><i class="fas fa-times"></i> Yanlış cevap. Tekrar dene!</span>`;
    }
}

function completeLesson(lesson, pointsEarned) {
    if (!completedLessons.includes(lesson.id)) {
        completedLessons.push(lesson.id);
        currentUser.points += pointsEarned;

        // Save
        localStorage.setItem('codingApp_user', JSON.stringify(currentUser));
        localStorage.setItem('codingApp_progress', JSON.stringify(completedLessons));

        // Update UI
        updateUserProfile();
        renderCurriculum();
    }
}

// Helper
function showToast(msg, type) {
    document.getElementById('toast-message').textContent = msg;
    const titleEl = document.getElementById('toast-title');
    if (titleEl) titleEl.className = type === 'success' ? 'me-auto text-success' : 'me-auto text-danger';
    toast.show();
}

// ================= EXAM SYSTEM =================
let currentExam = [];
let currentExamSubject = '';
let examCurrentIndex = 0;
let examScore = 0;
let examTimerInterval;
let examTimeRemaining = 20 * 60; // 20 minutes
let examUserAnswers = []; // Store user answers for review
let examHintsUsed = 0; // Current question hints

function openExam(subject) {
    // Check if exam data exists
    if (!lessonData[subject + 'Exam']) {
        alert("Bu ders için sınav henüz hazırlanmadı!");
        return;
    }

    currentExamSubject = subject;
    currentExam = lessonData[subject + 'Exam'];
    examCurrentIndex = 0;
    examScore = 0;
    examUserAnswers = new Array(currentExam.length).fill(null);
    examTimeRemaining = 20 * 60;

    // Update UI Titles
    document.getElementById('exam-subject-title').textContent = subject.toUpperCase();

    // Show Modal
    const modal = new bootstrap.Modal(document.getElementById('examModal'));
    modal.show();

    // Start Timer
    startExamTimer();

    // Load First Question
    loadExamQuestion(0);
}

function startExamTimer() {
    clearInterval(examTimerInterval);
    const display = document.getElementById('exam-timer');

    examTimerInterval = setInterval(() => {
        examTimeRemaining--;
        const m = Math.floor(examTimeRemaining / 60).toString().padStart(2, '0');
        const s = (examTimeRemaining % 60).toString().padStart(2, '0');
        display.textContent = `Süre: ${m}:${s}`;

        if (examTimeRemaining <= 0) {
            clearInterval(examTimerInterval);
            finishExam(true); // Timeout
        }
    }, 1000);
}

function loadExamQuestion(index) {
    if (index >= currentExam.length) {
        finishExam();
        return;
    }

    examCurrentIndex = index;
    examHintsUsed = 0;
    const q = currentExam[index];

    // UI Updates
    document.getElementById('exam-q-num').textContent = index + 1;
    document.getElementById('exam-progress').style.width = `${((index) / currentExam.length) * 100}%`;

    document.getElementById('exam-q-title').textContent = q.title;
    document.getElementById('exam-q-text').innerHTML = q.text;

    // Reset Hints
    document.getElementById('exam-hint-btn').disabled = false;
    document.getElementById('exam-hint-area').classList.add('d-none');
    document.getElementById('exam-feedback').textContent = '';

    // Interaction Area Setup
    const workspace = document.getElementById('exam-workspace');
    const fixEditor = document.getElementById('exam-fix-editor');
    const fillArea = document.getElementById('exam-fill-area');
    const sortArea = document.getElementById('exam-sort-area');
    const badge = document.getElementById('exam-type-badge');

    // Hide all
    fixEditor.classList.add('d-none');
    fillArea.classList.add('d-none');
    sortArea.classList.add('d-none');

    if (q.type === 'fix') {
        badge.textContent = "HATA DÜZELTME";
        badge.className = "badge bg-danger";
        fixEditor.classList.remove('d-none');
        fixEditor.value = q.code; // Broken code
    }
    else if (q.type === 'fill') {
        badge.textContent = "BOŞLUK DOLDURMA";
        badge.className = "badge bg-primary";
        fillArea.classList.remove('d-none');
        // Replace templates like {{input}} with actual inputs
        fillArea.innerHTML = q.code.replace(/{{input}}/g, '<input type="text" class="exam-input form-control d-inline-block w-auto mx-1" style="min-width: 60px;">');
    }
    else if (q.type === 'sort') {
        badge.textContent = "SIRALAMA";
        badge.className = "badge bg-warning text-dark";
        sortArea.classList.remove('d-none');

        const source = document.getElementById('sort-source');
        const target = document.getElementById('sort-target');
        source.innerHTML = '';
        target.innerHTML = '';

        // Shuffle lines
        const shuffled = [...q.lines].sort(() => Math.random() - 0.5);

        shuffled.forEach(line => {
            const div = document.createElement('div');
            div.className = 'list-group-item list-group-item-action cursor-pointer';
            div.textContent = line.text;
            div.dataset.id = line.id;
            div.onclick = function () {
                // Move between source and target
                if (this.parentElement.id === 'sort-source') {
                    target.appendChild(this);
                } else {
                    source.appendChild(this);
                }
            };
            source.appendChild(div);
        });
    }
}

function useExamHint() {
    const q = currentExam[examCurrentIndex];
    const hintArea = document.getElementById('exam-hint-area');

    if (examHintsUsed < 2) {
        examHintsUsed++;
        let text = examHintsUsed === 1 ? q.hint1 : q.hint2;
        hintArea.textContent = `İpucu ${examHintsUsed}: ${text}`;
        hintArea.classList.remove('d-none');

        if (examHintsUsed === 2) {
            document.getElementById('exam-hint-btn').disabled = true;
        }
    }
}

function submitExamAnswer() {
    const q = currentExam[examCurrentIndex];
    let isCorrect = false;
    let userResponse = null;

    if (q.type === 'fix') {
        // Normalize strings (remove all spaces/newlines for comparison)
        const userCode = document.getElementById('exam-fix-editor').value;
        const normalizedUser = userCode.replace(/\s+/g, '').toLowerCase();
        const normalizedCorrect = q.correct.replace(/\s+/g, '').toLowerCase();
        isCorrect = normalizedUser === normalizedCorrect;
        userResponse = userCode;
    }
    else if (q.type === 'fill') {
        const inputs = document.querySelectorAll('.exam-input');
        let allCorrect = true;
        let diffs = [];
        inputs.forEach((input, i) => {
            const val = input.value.trim().toLowerCase();
            const correctVal = q.answers[i].toLowerCase();
            if (val !== correctVal) allCorrect = false;
            diffs.push(input.value);
        });
        isCorrect = allCorrect;
        userResponse = diffs;
    }
    else if (q.type === 'sort') {
        const target = document.getElementById('sort-target');
        const items = target.querySelectorAll('.list-group-item');
        // Check IDs order
        const userOrder = Array.from(items).map(i => i.dataset.id).join(',');
        const correctOrder = q.order.join(',');
        isCorrect = userOrder === correctOrder;
        userResponse = userOrder; // Simplified for storage
    }

    // Calculate Score for this question
    // Base: 20 pts. Hints: -10 each.
    let qScore = isCorrect ? Math.max(0, 20 - (examHintsUsed * 10)) : 0;
    examScore += qScore;

    // Save Result
    examUserAnswers[examCurrentIndex] = {
        questionId: q.id,
        isCorrect: isCorrect,
        score: qScore,
        userResponse: userResponse,
        correctResponse: q.correct || q.answers || q.order
    };

    // Feedback visual (Brief)
    const feedback = document.getElementById('exam-feedback');
    feedback.innerHTML = isCorrect ?
        '<span class="text-success"><i class="fas fa-check"></i> Doğru!</span>' :
        '<span class="text-danger"><i class="fas fa-times"></i> Yanlış.</span>';

    setTimeout(() => {
        loadExamQuestion(examCurrentIndex + 1);
    }, 1000);
}

function finishExam(timeout = false) {
    clearInterval(examTimerInterval);
    const modalEl = document.getElementById('examModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    // Show Result Modal
    const resultModal = new bootstrap.Modal(document.getElementById('examResultModal'));
    document.getElementById('result-score').textContent = examScore;

    // Pass/Fail
    const title = document.getElementById('result-score-title');
    const icon = document.getElementById('result-icon');

    if (examScore >= 300) { // 60% of 400 (20 * 20) = 240. Let's say 300 is awesome.
        title.textContent = "Muhteşem Başarı!";
        title.classList.add('text-success');
        icon.className = "fas fa-trophy fa-4x text-warning mb-3";
        playSound('success');

        // Save Subject Completion
        if (!currentUser.completedExams) currentUser.completedExams = [];
        if (!currentUser.completedExams.includes(currentExamSubject)) {
            currentUser.completedExams.push(currentExamSubject);
            localStorage.setItem('codingApp_user', JSON.stringify(currentUser));

            // Show confetti or something extra?
            // For now, simple alert or toast would be nice, but let's stick to the modal.
        }
    } else {
        title.textContent = "Biraz Daha Çalışmalısın";
        title.classList.add('text-danger');
        icon.className = "fas fa-book-reader fa-4x text-danger mb-3";
    }

    // Render Details
    const details = document.getElementById('result-details');
    details.innerHTML = '';

    examUserAnswers.forEach((ans, i) => {
        if (!ans) return; // skipped?
        const q = currentExam[i];
        details.innerHTML += `
            <div class="col-12 mb-2">
                <div class="p-3 border rounded ${ans.isCorrect ? 'bg-success bg-opacity-10 border-success' : 'bg-danger bg-opacity-10 border-danger'}">
                    <div class="d-flex justify-content-between">
                        <strong>Soru ${i + 1}: ${q.title}</strong>
                        <span class="badge ${ans.isCorrect ? 'bg-success' : 'bg-danger'}">${ans.score} Puan</span>
                    </div>
                    ${!ans.isCorrect ? `<div class="mt-2 small text-muted">Doğru Cevap: ${q.correct || q.answers || q.order}</div>` : ''}
                </div>
            </div>
        `;
    });

    resultModal.show();
}


// ================= CERTIFICATE STYLES =================
let currentCertStyle = 'classic';

function setCertStyle(style, btn) {
    currentCertStyle = style;
    // Update active button
    const container = btn.parentElement;
    container.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    drawCertificate();
}

function drawCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Styles Configuration
    let config = {
        bg: "#ffffff",
        border: "#0d6efd",
        innerBorder: "#ffc107",
        textColor: "#212529",
        accent: "#0d6efd",
        font: "Arial"
    };

    if (currentCertStyle === 'gold') {
        config.bg = "#fffcf0";
        config.border = "#DAA520";
        config.innerBorder = "#B8860B";
        config.textColor = "#5c4033";
        config.accent = "#DAA520";
        config.font = "Times New Roman";
    } else if (currentCertStyle === 'dark') {
        config.bg = "#212529";
        config.border = "#0dcaf0";
        config.innerBorder = "#6c757d";
        config.textColor = "#f8f9fa";
        config.accent = "#0dcaf0";
        config.font = "Courier New";
    }

    // Background
    ctx.fillStyle = config.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.lineWidth = 20;
    ctx.strokeStyle = config.border;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    ctx.lineWidth = 5;
    ctx.strokeStyle = config.innerBorder;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Text
    ctx.textAlign = "center";
    ctx.fillStyle = config.textColor;

    // Header
    ctx.font = `bold 50px ${config.font}`;
    ctx.fillText("BAŞARI SERTİFİKASI", canvas.width / 2, 140);

    ctx.font = `30px ${config.font}`;
    ctx.fillText("Bu sertifika, başarıyla tamamlayan", canvas.width / 2, 220);

    // Name
    ctx.font = `bold italic 60px ${config.font}`;
    ctx.fillStyle = config.accent;
    ctx.fillText(currentUser.name, canvas.width / 2, 300);

    // Context
    ctx.fillStyle = config.textColor;
    ctx.font = `24px ${config.font}`;
    ctx.fillText("Kodlama Dünyası Temel Eğitim Programı'nı", canvas.width / 2, 380);
    ctx.fillText("üstün başarıyla bitirdiğini belgeler.", canvas.width / 2, 420);

    // Date & Signature
    const date = new Date().toLocaleDateString('tr-TR');
    ctx.font = `20px ${config.font}`;
    ctx.fillText(`Tarih: ${date}`, 200, 500);

    ctx.font = `bold 20px ${config.font}`;
    ctx.fillText("Kodlama Dünyası", 600, 500);

    // Icon/Seal
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 520, 40, 0, 2 * Math.PI);
    ctx.fillStyle = config.innerBorder;
    ctx.fill();
    ctx.fillStyle = config.bg;
    ctx.font = "40px Arial";
    ctx.fillText("★", canvas.width / 2, 535);
}

// ================= VIRTUAL RACE SYSTEM =================
let isRaceMode = false;
let raceBotInterval;
let raceBotProgress = 0;
let raceBotSpeed = 1000; // ms per tick

function openRaceModal() {
    // Show a selection modal (reuse logic or create simple prompt)
    // For simplicity, we'll use a confirm/prompt flow or reuse the Exam modal directly with a flag.
    // Let's create a quick dynamic modal for setup if possible, or just ask via prompt.
    // Better: Reuse Exam Modal but trigger "Race Mode".

    const subject = prompt("Hangi konuda yarışmak istersin? (html, css, javascript, python, react, git)", "html");
    if (!subject || !lessonData[subject.toLowerCase()]) return;

    const diff = prompt("Zorluk Seviyesi Seç:\n1: Kolay (Yavaş Bot)\n2: Orta (Normal Bot)\n3: Zor (Hızlı Bot)", "2");
    let speed = 2000;
    if (diff === '1') speed = 3000; // Slow
    if (diff === '3') speed = 1000; // Fast

    startRace(subject.toLowerCase(), speed);
}

function startRace(subject, speed) {
    isRaceMode = true;
    raceBotSpeed = speed;
    raceBotProgress = 0;

    // Open Exam
    openExam(subject); // This resets state

    // Update UI for Race
    document.getElementById('examModalLabel').innerHTML = `<i class="fas fa-flag-checkered text-danger"></i> YARIŞ MODU: ${subject.toUpperCase()}`;
    document.getElementById('race-bot-container').classList.remove('d-none');
    document.getElementById('race-bot-progress').style.width = '0%';

    // Start Bot Logic (Runs alongside Exam Timer)
    clearInterval(raceBotInterval);
    raceBotInterval = setInterval(() => {
        // Bot advances based on speed
        // Let's say exam has N questions. Bot finishes in X time.
        // Simple Logic: Bot adds % based on total time approx.
        // Actually, let's make it question based. 
        // 20 Questions. Bot answers 1 every (speed) ms? That's too fast.
        // Speed = 2000ms -> 2 seconds per tick. 
        // Let's increment progress by 1% every tick.
        // Easy: 3s/1% -> 300s to finish (5 mins).
        // Hard: 1s/1% -> 100s to finish (1.5 mins).

        raceBotProgress += 1;
        document.getElementById('race-bot-progress').style.width = `${raceBotProgress}%`;

        if (raceBotProgress >= 100) {
            finishExam(false, true); // Bot Won
        }
    }, speed / 5); // Adjust for smoothness vs total time
}

// Hook into existing finishExam to handle Race result
// We need to modify finishExam in the next step to accept 'botWon' arg or check race state.
// Since I cannot modify finishExam here easily without context, I will override/re-define it below.

const originalFinishExam = finishExam;

finishExam = function (timeout = false, botWon = false) {
    clearInterval(raceBotInterval);
    document.getElementById('race-bot-container').classList.add('d-none');

    if (isRaceMode) {
        isRaceMode = false;
        const modalEl = document.getElementById('examModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();

        const resultModal = new bootstrap.Modal(document.getElementById('examResultModal'));
        document.getElementById('result-score').textContent = examScore;

        const title = document.getElementById('result-score-title');
        const icon = document.getElementById('result-icon');

        if (botWon) {
            title.textContent = "Bot Kazandı! 🤖";
            title.className = "text-danger fw-bold";
            icon.className = "fas fa-robot fa-4x text-danger mb-3";
            playSound('error');
        } else if (examScore >= 200) { // Win condition for user
            title.textContent = "Yarışı Kazandın! 🏁";
            title.className = "text-success fw-bold";
            icon.className = "fas fa-flag-checkered fa-4x text-success mb-3";
            playSound('success');
            // Bonus
            currentUser.points += 100;
            saveUser();
            updateUserProfile();
            showToast("Yarış bonusu: +100 Puan!", "success");
        } else {
            title.textContent = "Yarış Bitti (Düşük Puan)";
            title.className = "text-warning fw-bold";
            icon.className = "fas fa-exclamation-triangle fa-4x text-warning mb-3";
        }

        resultModal.show();
        // Reset Exam UI to normal just in case
        document.getElementById('examModalLabel').textContent = "FİNAL SINAVI";
    } else {
        originalFinishExam(timeout);
    }
};

function closeExam() {
    location.reload();
}

// ================= MARKET SYSTEM =================
const marketItems = {
    avatars: [
        { id: 'ninja', name: 'Ninja', icon: '🥷', price: 500 },
        { id: 'wizard', name: 'Büyücü', icon: '🧙‍♂️', price: 800 },
        { id: 'king', name: 'Kral', icon: '🤴', price: 1000 },
        { id: 'alien', name: 'Uzaylı', icon: '👽', price: 1200 },
        { id: 'cat', name: 'Kedi Kodcu', icon: '🐱', price: 1500 }
    ],
    titles: [
        { id: 't_fast', name: '🚀 Hızlı Kodcu', price: 300 },
        { id: 't_bug', name: '🐛 Böcek Avcısı', price: 400 },
        { id: 't_arch', name: '🏛️ Mimar', price: 600 },
        { id: 't_master', name: '🎓 Büyük Üstad', price: 2000 }
    ]
};

function openMarket() {
    const modal = new bootstrap.Modal(document.getElementById('marketModal'));
    document.getElementById('market-user-points').textContent = currentUser.points;
    renderMarket();
    modal.show();
}

function renderMarket() {
    // Ensure inventory exists
    if (!currentUser.inventory) currentUser.inventory = [];

    // Avatars
    const avatarList = document.getElementById('market-avatars-list');
    avatarList.innerHTML = '';
    marketItems.avatars.forEach(item => {
        const owned = currentUser.inventory.includes(item.id);
        const equipped = currentUser.avatar === item.icon; // Simple icon match for now

        avatarList.innerHTML += `
            <div class="col-md-4 col-6">
                <div class="card h-100 border-0 shadow-sm ${equipped ? 'border-primary border-2' : ''}">
                    <div class="card-body text-center">
                        <div class="fs-1 mb-2">${item.icon}</div>
                        <h6 class="fw-bold">${item.name}</h6>
                        <p class="text-warning fw-bold mb-2 small"><i class="fas fa-coins"></i> ${item.price}</p>
                        ${owned
                ? (equipped
                    ? '<button class="btn btn-sm btn-success w-100" disabled>Kullanılıyor</button>'
                    : `<button class="btn btn-sm btn-outline-primary w-100" onclick="equipAvatar('${item.icon}')">Kullan</button>`)
                : `<button class="btn btn-sm btn-warning w-100" onclick="buyItem('avatar', '${item.id}')">Satın Al</button>`
            }
                    </div>
                </div>
            </div>
        `;
    });

    // Titles
    const titleList = document.getElementById('market-titles-list');
    titleList.innerHTML = '';
    marketItems.titles.forEach(item => {
        const owned = currentUser.inventory.includes(item.id);
        titleList.innerHTML += `
            <div class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <span class="fw-bold text-primary">${item.name}</span>
                    <br><span class="text-muted small"><i class="fas fa-coins text-warning"></i> ${item.price}</span>
                </div>
                ${owned
                ? '<span class="badge bg-success">Sahipsin</span>'
                : `<button class="btn btn-sm btn-warning" onclick="buyItem('title', '${item.id}')">Satın Al</button>`
            }
            </div>
        `;
    });
}

function buyItem(type, itemId) {
    let item;
    if (type === 'avatar') item = marketItems.avatars.find(x => x.id === itemId);
    else item = marketItems.titles.find(x => x.id === itemId);

    if (!item) return;

    if (currentUser.points >= item.price) {
        currentUser.points -= item.price;
        currentUser.inventory.push(itemId);
        saveUser();
        updateUserProfile(); // Update points display
        document.getElementById('market-user-points').textContent = currentUser.points;
        renderMarket(); // Re-render buttons
        playSound('success');
        showToast(`${item.name} satın alındı!`, 'success');
    } else {
        showToast("Yetersiz Puan!", "danger");
        playSound('error');
    }
}

function equipAvatar(icon) {
    currentUser.avatar = icon;
    saveUser();
    updateUserProfile();
    renderMarket(); // Update buttons
    showToast("Avatarin güncellendi!", "success");
}

// ================= DAILY CHALLENGE SYSTEM =================
function openDailyChallenge() {
    const modal = new bootstrap.Modal(document.getElementById('challengeModal'));
    // Reset Views
    document.getElementById('challenge-start-view').classList.remove('d-none');
    document.getElementById('challenge-quiz-view').classList.add('d-none');
    document.getElementById('challenge-result-view').classList.add('d-none');
    modal.show();
}

function startDailyChallenge() {
    // 2. Render Question
    document.getElementById('challenge-start-view').classList.add('d-none');
    document.getElementById('challenge-quiz-view').classList.remove('d-none');

    const optionsDiv = document.getElementById('challenge-options');
    optionsDiv.innerHTML = '';

    // Hardcoded Challenge for Demo Reliability
    // In a real app, this would rotate daily based on date hash
    const dailyQ = {
        text: "JavaScript'te `0.1 + 0.2 === 0.3` ifadesi neden `false` döner?",
        options: ["Matematik motoru hatasıdır", "Floating point (kayan noktalı) hassasiyeti yüzünden", "JavaScript toplama yapamaz", "Bu ifade true döner, soru yanlış"],
        answer: 1
    };

    document.getElementById('challenge-question-text').textContent = dailyQ.text;
    dailyQ.options.forEach((opt, i) => {
        optionsDiv.innerHTML += `
            <button class="btn btn-outline-dark text-start p-3 mb-2" onclick="checkChallengeAnswer(${i}, ${dailyQ.answer})">
                <span class="fw-bold me-2">${String.fromCharCode(65 + i)})</span> ${opt}
            </button>
        `;
    });
}

function checkChallengeAnswer(selected, correct) {
    const view = document.getElementById('challenge-quiz-view');
    const resultView = document.getElementById('challenge-result-view');
    const icon = document.getElementById('challenge-result-icon');
    const title = document.getElementById('challenge-result-title');
    const msg = document.getElementById('challenge-result-msg');

    view.classList.add('d-none');
    resultView.classList.remove('d-none');

    if (selected === correct) {
        icon.innerHTML = '<i class="fas fa-crown fa-5x text-warning"></i>';
        title.textContent = "Mükemmel!";
        msg.textContent = "Doğru bildin ve 50 Puan kazandın!";
        title.className = "fw-bold mt-3 text-success";

        currentUser.points += 50;
        saveUser();
        updateUserProfile();
        playSound('success');
    } else {
        icon.innerHTML = '<i class="fas fa-heart-broken fa-5x text-danger"></i>';
        title.textContent = "Maalesef...";
        msg.textContent = "Yanlış cevap. Yarın tekrar dene! (Cevap: Floating Point)";
        title.className = "fw-bold mt-3 text-danger";
        playSound('error');
    }
}
