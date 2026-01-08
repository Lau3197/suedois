// ========================================
// Svenska Läraren - Main Application
// Data is loaded from vocabulary-data.js and grammar-data.js
// ========================================

// ========================================
// APP STATE
// ========================================
let state = {
    currentSection: 'vocabulary',
    currentLevel: 'niveau2',
    currentChapter: null,
    currentCardIndex: 0,
    showingFront: true,
    svToFr: true,
    learnedWords: JSON.parse(localStorage.getItem('learnedWords') || '{}'),
    quizActive: false,
    quizQuestions: [],
    quizCurrentIndex: 0,
    quizScore: 0,
    quizType: 'multiple',
    currentGrammarTopic: null,
    srsData: JSON.parse(localStorage.getItem('vocabSRS') || '{}'),
    quizCorrectStreak: {}, // Tracks consecutive correct answers per word
    favorites: JSON.parse(localStorage.getItem('vocabFavorites') || '[]'),
    quizDirection: 'sv-fr', // 'sv-fr', 'fr-sv', 'random'
    // Stats & Activity Tracking
    activityLog: JSON.parse(localStorage.getItem('activityLog') || '{"lastActiveDate":"","currentStreak":0,"longestStreak":0,"dailyGoal":10,"todayCount":0}'),
    quizHistory: JSON.parse(localStorage.getItem('quizHistory') || '[]'),
    errorHistory: JSON.parse(localStorage.getItem('errorHistory') || '{}'),
    // Timer
    chronoMode: false,
    chronoTime: 15,
    timerInterval: null,
    // Grammar Notes
    grammarNotes: JSON.parse(localStorage.getItem('grammarNotes') || '{}')
};

// ========================================
// DOM ELEMENTS
// ========================================
const elements = {
    navTabs: document.querySelectorAll('.nav-tab'),
    sections: document.querySelectorAll('.section'),
    levelBtns: document.querySelectorAll('.level-btn'),
    chapterSelect: document.getElementById('chapter-select'),
    flashcard: document.getElementById('flashcard'),
    wordFront: document.getElementById('word-front'),
    wordBack: document.getElementById('word-back'),
    currentCard: document.getElementById('current-card'),
    totalCards: document.getElementById('total-cards'),
    prevBtn: document.getElementById('prev-card'),
    nextBtn: document.getElementById('next-card'),
    modeToggle: document.getElementById('mode-toggle'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    markLearned: document.getElementById('mark-learned'),
    markReview: document.getElementById('mark-review'),
    vocabProgress: document.getElementById('vocab-progress'),
    learnedCount: document.getElementById('learned-count'),
    chapterTotal: document.getElementById('chapter-total'),
    grammarNav: document.getElementById('grammar-nav'),
    grammarSearch: document.getElementById('grammar-search'),
    lessonContent: document.getElementById('lesson-content'),
    quizSetup: document.getElementById('quiz-setup'),
    quizGame: document.getElementById('quiz-game'),
    quizResults: document.getElementById('quiz-results'),
    startQuiz: document.getElementById('start-quiz'),
    quizAnswers: document.getElementById('quiz-answers'),
    quizTyping: document.getElementById('quiz-typing'),
    quizFeedback: document.getElementById('quiz-feedback')
};

// ========================================
// NAVIGATION
// ========================================
function switchSection(sectionId) {
    state.currentSection = sectionId;
    elements.navTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === sectionId);
    });
    elements.sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

// ========================================
// VOCABULARY FUNCTIONS
// ========================================
function getChapters() {
    return Object.keys(vocabularyData[state.currentLevel]);
}

function getCurrentVocab() {
    if (!state.currentChapter) return [];
    return vocabularyData[state.currentLevel][state.currentChapter] || [];
}

function populateChapters() {
    const chapters = getChapters();
    elements.chapterSelect.innerHTML = chapters.map(ch =>
        `<option value="${ch}">${ch}</option>`
    ).join('');
    if (chapters.length > 0) {
        state.currentChapter = chapters[0];
        state.currentCardIndex = 0;
        updateFlashcard();
    }
}

function updateFlashcard() {
    const vocab = getCurrentVocab();
    if (vocab.length === 0) return;
    const card = vocab[state.currentCardIndex];
    const front = state.svToFr ? card.sv : card.fr;
    const back = state.svToFr ? card.fr : card.sv;
    elements.wordFront.textContent = front;
    elements.wordBack.textContent = back;

    // Display example sentence if available
    const exampleEl = document.getElementById('word-example');
    if (exampleEl) {
        exampleEl.textContent = card.ex || '';
    }

    // Update favorite button state
    const favBtn = document.getElementById('mark-favorite');
    if (favBtn) {
        const isFavorite = state.favorites.includes(card.sv);
        favBtn.textContent = isFavorite ? '★ Favori' : '☆ Favori';
        favBtn.classList.toggle('active', isFavorite);
    }

    elements.currentCard.textContent = state.currentCardIndex + 1;
    elements.totalCards.textContent = vocab.length;
    elements.chapterTotal.textContent = vocab.length;
    elements.flashcard.classList.remove('flipped');
    state.showingFront = true;
    updateProgress();
}

function updateProgress() {
    const vocab = getCurrentVocab();
    const chapterKey = `${state.currentLevel}_${state.currentChapter}`;
    const learned = state.learnedWords[chapterKey] || [];
    const learnedCount = learned.length;
    const percentage = vocab.length > 0 ? (learnedCount / vocab.length) * 100 : 0;
    elements.vocabProgress.style.width = `${percentage}%`;
    elements.learnedCount.textContent = learnedCount;
}

function flipCard() {
    elements.flashcard.classList.toggle('flipped');
    state.showingFront = !state.showingFront;
}

function nextCard() {
    const vocab = getCurrentVocab();
    if (state.currentCardIndex < vocab.length - 1) {
        state.currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (state.currentCardIndex > 0) {
        state.currentCardIndex--;
        updateFlashcard();
    }
}

function shuffleVocab() {
    const chapterKey = state.currentChapter;
    const vocab = vocabularyData[state.currentLevel][chapterKey];
    for (let i = vocab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocab[i], vocab[j]] = [vocab[j], vocab[i]];
    }
    state.currentCardIndex = 0;
    updateFlashcard();
}

function toggleMode() {
    state.svToFr = !state.svToFr;
    elements.modeToggle.querySelector('span').textContent =
        state.svToFr ? 'Mode: SV → FR' : 'Mode: FR → SV';
    updateFlashcard();
}

function markAsLearned() {
    const chapterKey = `${state.currentLevel}_${state.currentChapter}`;
    if (!state.learnedWords[chapterKey]) {
        state.learnedWords[chapterKey] = [];
    }
    const vocab = getCurrentVocab();
    const currentWord = vocab[state.currentCardIndex].sv;
    if (!state.learnedWords[chapterKey].includes(currentWord)) {
        state.learnedWords[chapterKey].push(currentWord);
        localStorage.setItem('learnedWords', JSON.stringify(state.learnedWords));
    }
    updateProgress();
    nextCard();
}

function markForReview() {
    const chapterKey = `${state.currentLevel}_${state.currentChapter}`;
    if (state.learnedWords[chapterKey]) {
        const vocab = getCurrentVocab();
        const currentWord = vocab[state.currentCardIndex].sv;
        state.learnedWords[chapterKey] = state.learnedWords[chapterKey].filter(w => w !== currentWord);
        localStorage.setItem('learnedWords', JSON.stringify(state.learnedWords));
    }
    updateProgress();
    nextCard();
}

function toggleFavorite() {
    const vocab = getCurrentVocab();
    if (vocab.length === 0) return;

    const currentWord = vocab[state.currentCardIndex].sv;
    const index = state.favorites.indexOf(currentWord);

    if (index === -1) {
        state.favorites.push(currentWord);
    } else {
        state.favorites.splice(index, 1);
    }

    localStorage.setItem('vocabFavorites', JSON.stringify(state.favorites));
    updateFlashcard(); // Refresh to update button state
}

// ========================================
// GRAMMAR FUNCTIONS - LESSON-BASED UI
// ========================================
function renderGrammarSidebar(filter = '') {
    const filterLower = filter.toLowerCase();

    // Group topics by category
    const topicsByCategory = {};
    grammarCategories.forEach(cat => {
        topicsByCategory[cat.id] = grammarData.filter(topic =>
            topic.category === cat.id &&
            (filter === '' ||
                topic.title.toLowerCase().includes(filterLower) ||
                topic.content.toLowerCase().includes(filterLower))
        );
    });

    // Build sidebar HTML
    let html = '';
    grammarCategories.forEach(cat => {
        const topics = topicsByCategory[cat.id];
        if (topics.length === 0 && filter !== '') return;

        const isOpen = filter !== '' || topics.some(t => t.id === state.currentGrammarTopic);

        html += `
            <div class="grammar-category ${isOpen ? 'open' : ''}" data-category="${cat.id}">
                <div class="category-header" onclick="toggleCategory('${cat.id}')">
                    <span class="category-icon">${cat.icon}</span>
                    <span>${cat.name}</span>
                    <span class="category-arrow">▶</span>
                </div>
                <div class="category-topics">
                    ${topics.map(topic => `
                        <button class="topic-item ${topic.id === state.currentGrammarTopic ? 'active' : ''}" 
                                onclick="showLesson(${topic.id})">
                            ${topic.title}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    });

    elements.grammarNav.innerHTML = html;
}

function toggleCategory(categoryId) {
    const categoryEl = document.querySelector(`.grammar-category[data-category="${categoryId}"]`);
    if (categoryEl) {
        categoryEl.classList.toggle('open');
    }
}

function showLesson(topicId) {
    state.currentGrammarTopic = topicId;
    const topic = grammarData.find(t => t.id === topicId);
    if (!topic) return;

    const category = grammarCategories.find(c => c.id === topic.category);

    // Find prev/next topics
    const allTopics = grammarData.filter(t => t.category === topic.category);
    const currentIndex = allTopics.findIndex(t => t.id === topicId);
    const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
    const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

    elements.lessonContent.innerHTML = `
        <article class="lesson-article">
            <header class="lesson-header">
                <h1 class="lesson-title">${topic.title}</h1>
                <span class="lesson-category-badge">${category ? category.icon + ' ' + category.name : ''}</span>
            </header>
            <div class="lesson-body">
                ${topic.content}
            </div>
            
            <div class="personal-notes">
                <h3>📝 Notes personnelles</h3>
                <textarea id="grammar-note-${topic.id}" placeholder="Ajoutez vos propres notes ici..." rows="4">${state.grammarNotes[topic.id] || ''}</textarea>
                <button class="control-btn" onclick="saveNote(${topic.id})">💾 Sauvegarder la note</button>
            </div>

            <nav class="lesson-nav">
                ${prevTopic ?
            `<button class="lesson-nav-btn" onclick="showLesson(${prevTopic.id})">← ${prevTopic.title}</button>` :
            '<span></span>'}
                ${nextTopic ?
            `<button class="lesson-nav-btn" onclick="showLesson(${nextTopic.id})">${nextTopic.title} →</button>` :
            '<span></span>'}
            </nav>
        </article>
    `;

    // Update sidebar active state
    document.querySelectorAll('.topic-item').forEach(item => {
        item.classList.remove('active');
    });
    const activeItem = document.querySelector(`.topic-item[onclick="showLesson(${topicId})"]`);
    if (activeItem) {
        activeItem.classList.add('active');
        // Open the category
        const categoryEl = activeItem.closest('.grammar-category');
        if (categoryEl) {
            categoryEl.classList.add('open');
        }
    }
}

function showWelcomeScreen() {
    state.currentGrammarTopic = null;
    elements.lessonContent.innerHTML = `
        <div class="lesson-welcome">
            <h2>📚 Svenska Minigrammatik</h2>
            <p>Bienvenue dans la section grammaire ! Sélectionnez un sujet dans le menu à gauche pour commencer.</p>
            <div class="lesson-categories-preview">
                ${grammarCategories.map(cat => `
                    <div class="category-card" onclick="openCategoryFirst('${cat.id}')">
                        <span class="category-icon">${cat.icon}</span>
                        <h3>${cat.name}</h3>
                        <p>${grammarData.filter(t => t.category === cat.id).length} leçons</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function openCategoryFirst(categoryId) {
    const firstTopic = grammarData.find(t => t.category === categoryId);
    if (firstTopic) {
        showLesson(firstTopic.id);
    }
}

function saveNote(topicId) {
    const textarea = document.getElementById(`grammar-note-${topicId}`);
    if (textarea) {
        state.grammarNotes[topicId] = textarea.value;
        localStorage.setItem('grammarNotes', JSON.stringify(state.grammarNotes));

        // Visual feedback
        const btn = textarea.nextElementSibling;
        const originalText = btn.textContent;
        btn.textContent = '✅ Sauvegardé !';
        btn.style.background = 'var(--success)';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }
}

// ========================================
// QUIZ FUNCTIONS
// ========================================
const getSelectionHTML = (level, title) => {
    const chapters = Object.keys(vocabularyData[level] || {});
    return `
        <div class="quiz-level-column">
            <h4>${title}</h4>
            <label style="font-weight:bold; margin-bottom:5px; display:block;">
                <input type="checkbox" onchange="toggleAll('${level}', this.checked)"> Tout sélectionner
            </label>
            ${chapters.map(ch => `
                <label class="quiz-chapter-checkbox">
                    <input type="checkbox" name="quiz-chapter" value="${level}|${ch}"> ${ch}
                </label>
            `).join('')}
        </div>
    `;
};

function renderQuizSelection() {
    const container = document.getElementById('quiz-chapter-selection');
    if (!container) return;

    // Add special Favorites option
    const favoritesHTML = `
        <div class="quiz-level-column" style="grid-column: 1 / -1; margin-bottom: 10px;">
            <label class="quiz-chapter-checkbox" style="font-weight: bold; color: #f59e0b;">
                <input type="checkbox" name="quiz-chapter" value="favorites|all"> ⭐ Mes Favoris (${state.favorites.length} mots)
            </label>
        </div>
    `;

    container.innerHTML =
        favoritesHTML +
        getSelectionHTML('niveau2', 'Niveau 2') +
        getSelectionHTML('niveau3', 'Niveau 3');
}

function toggleAll(level, checked) {
    const checkboxes = document.querySelectorAll(`input[name="quiz-chapter"][value^="${level}"]`);
    checkboxes.forEach(cb => cb.checked = checked);
}

function getAllVocab(level) {
    const vocab = [];
    const chapters = vocabularyData[level];
    for (const chapter in chapters) {
        vocab.push(...chapters[chapter]);
    }
    return vocab;
}

function startQuiz() {
    const typeInput = document.querySelector('input[name="quiz-type"]:checked').value;
    const countInput = parseInt(document.getElementById('quiz-count').value);
    const srsDueOnly = document.getElementById('srs-due-only').checked;

    // Read direction preference
    const directionInput = document.querySelector('input[name="quiz-direction"]:checked');
    state.quizDirection = directionInput ? directionInput.value : 'sv-fr';

    // Read chrono mode
    state.chronoMode = document.getElementById('chrono-mode').checked;
    state.chronoTime = parseInt(document.getElementById('chrono-time').value);

    // Reset correct streak for new quiz
    state.quizCorrectStreak = {};

    let vocab = [];

    // SRS Mode Logic
    if (typeInput === 'flashcards' && srsDueOnly) {
        const allChapters = [...getAllVocab('niveau2'), ...getAllVocab('niveau3')];
        const now = Date.now();
        vocab = allChapters.filter(word => {
            const status = state.srsData[word.sv];
            // Include new cards (no status) or due cards
            return !status || status.dueDate <= now;
        });

        if (vocab.length === 0) {
            alert('Aucune carte à réviser pour le moment ! Revenez plus tard.');
            return;
        }
    } else if (typeInput === 'fill-blanks') {
        const allVocab = [...getAllVocab('niveau2'), ...getAllVocab('niveau3')];
        vocab = allVocab.filter(word => word.ex);

        if (vocab.length === 0) {
            alert('Aucun mot avec phrase d\'exemple trouvé !');
            return;
        }
    } else {
        // Normal Selection Logic
        const selectedCheckboxes = document.querySelectorAll('input[name="quiz-chapter"]:checked');
        if (selectedCheckboxes.length === 0) {
            alert('Veuillez sélectionner au moins un chapitre !');
            return;
        }

        selectedCheckboxes.forEach(cb => {
            const [level, chapter] = cb.value.split('|');

            // Handle Favorites special case
            if (level === 'favorites') {
                const allVocab = [...getAllVocab('niveau2'), ...getAllVocab('niveau3')];
                const favoriteWords = allVocab.filter(word => state.favorites.includes(word.sv));
                vocab.push(...favoriteWords);
            } else if (vocabularyData[level] && vocabularyData[level][chapter]) {
                vocab.push(...vocabularyData[level][chapter]);
            }
        });

        // Filter for fill-blanks if selected via normal means (redundant check but safe)
        if (typeInput === 'fill-blanks') {
            vocab = vocab.filter(word => word.ex);
        }
    }

    if (vocab.length === 0) {
        alert('Aucun vocabulaire trouvé pour la sélection (ou pas de phrases d\'exemple).');
        return;
    }
    for (let i = vocab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocab[i], vocab[j]] = [vocab[j], vocab[i]];
    }
    if (countInput !== 999) {
        vocab = vocab.slice(0, countInput);
    }

    state.quizType = typeInput;
    state.quizQuestions = vocab;
    state.quizCurrentIndex = 0;
    state.quizScore = 0;
    state.quizActive = true;

    elements.quizSetup.style.display = 'none';
    elements.quizGame.style.display = 'block';

    // Reset timer
    stopTimer();

    // Pairs Game Logic
    if (state.quizType === 'pairs') {
        document.getElementById('quiz-pairs-game').style.display = 'grid';
        document.querySelector('.quiz-question-card').style.display = 'none';
        elements.quizAnswers.style.display = 'none';
        elements.quizTyping.style.display = 'none';
        startPairsGame();
    } else {
        document.getElementById('quiz-pairs-game').style.display = 'none';
        document.querySelector('.quiz-question-card').style.display = 'block';
        document.getElementById('quiz-question-total').textContent = state.quizQuestions.length;
        showQuizQuestion();
    }
}

function showQuizQuestion() {
    const question = state.quizQuestions[state.quizCurrentIndex];

    // Determine direction based on user choice
    let isSwedishQuestion;
    if (state.quizDirection === 'sv-fr') {
        isSwedishQuestion = true;
    } else if (state.quizDirection === 'fr-sv') {
        isSwedishQuestion = false;
    } else {
        isSwedishQuestion = Math.random() > 0.5;
    }

    // Fill-in-blanks overrides direction (always Swedish sentence)
    if (state.quizType === 'fill-blanks') {
        isSwedishQuestion = true;
    }

    let questionWord = isSwedishQuestion ? question.sv : question.fr;
    const correctAnswer = isSwedishQuestion ? question.fr : question.sv;

    // Fill-in-blanks Logic
    if (state.quizType === 'fill-blanks') {
        const cleanWord = question.sv.replace(/\(.*\)/, '').trim();
        // Case insensitive replacement
        const regex = new RegExp(cleanWord, 'gi');
        questionWord = question.ex.replace(regex, '_____');
        document.getElementById('quiz-instruction').textContent = 'Complétez la phrase :';
    } else {
        document.getElementById('quiz-instruction').textContent =
            isSwedishQuestion ? 'Traduisez en français :' : 'Traduisez en suédois :';
    }

    document.getElementById('quiz-word').textContent = questionWord;
    document.getElementById('quiz-question-num').textContent = state.quizCurrentIndex + 1;
    const progress = ((state.quizCurrentIndex) / state.quizQuestions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = `${progress}%`;
    elements.quizFeedback.style.display = 'none';

    if (state.quizType === 'multiple' || state.quizType === 'fill-blanks') {
        elements.quizAnswers.style.display = 'grid';
        elements.quizTyping.style.display = 'none';
        const allVocab = [...getAllVocab('niveau2'), ...getAllVocab('niveau3')];

        let wrongAnswers;
        if (state.quizType === 'fill-blanks') {
            // For fill-blanks, options are Swedish words
            wrongAnswers = allVocab
                .filter(v => v.sv !== question.sv)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(v => v.sv); // Show Swedish options
        } else {
            wrongAnswers = allVocab
                .filter(v => (isSwedishQuestion ? v.fr : v.sv) !== correctAnswer)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(v => isSwedishQuestion ? v.fr : v.sv);
        }

        const realAnswer = state.quizType === 'fill-blanks' ? question.sv : correctAnswer;
        const answers = [realAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);

        elements.quizAnswers.innerHTML = answers.map(answer => `
            <button class="quiz-answer" data-answer="${answer}" data-correct="${answer === realAnswer}">
                ${answer}
            </button>
        `).join('');
        elements.quizAnswers.querySelectorAll('.quiz-answer').forEach(btn => {
            btn.addEventListener('click', () => checkAnswer(btn));
        });
    } else if (state.quizType === 'flashcards') {
        elements.quizAnswers.style.display = 'none';
        elements.quizTyping.style.display = 'none';
        document.getElementById('quiz-flashcard-back').style.display = 'none';
        document.getElementById('quiz-srs-controls').style.display = 'block';
        document.getElementById('srs-show-answer').style.display = 'block';
        document.getElementById('srs-rating-btns').style.display = 'none';

        document.getElementById('quiz-answer-text').textContent = correctAnswer;
    } else {
        elements.quizAnswers.style.display = 'none';
        elements.quizTyping.style.display = 'flex';
        const typingInput = document.getElementById('typing-answer');
        typingInput.value = '';
        typingInput.dataset.correct = correctAnswer;
        typingInput.focus();
    }

    // Start timer if chrono mode
    if (state.chronoMode && state.quizType !== 'flashcards') {
        startTimer();
    }
}

function checkAnswer(btn) {
    if (btn.classList.contains('disabled')) return;
    stopTimer(); // Stop timer when answering
    const isCorrect = btn.dataset.correct === 'true';
    const currentWord = state.quizQuestions[state.quizCurrentIndex];

    elements.quizAnswers.querySelectorAll('.quiz-answer').forEach(b => {
        b.classList.add('disabled');
        if (b.dataset.correct === 'true') {
            b.classList.add('correct');
        } else if (b === btn && !isCorrect) {
            b.classList.add('incorrect');
        }
    });

    // --- Re-queue Logic ---
    const wordKey = currentWord.sv;
    if (isCorrect) {
        state.quizCorrectStreak[wordKey] = (state.quizCorrectStreak[wordKey] || 0) + 1;
        // Only count score on first correct answer for this word
        if (state.quizCorrectStreak[wordKey] === 1) {
            state.quizScore++;
        }
    } else {
        // Reset streak and re-add to the end of the queue
        state.quizCorrectStreak[wordKey] = 0;
        state.quizQuestions.push(currentWord);
        document.getElementById('quiz-question-total').textContent = state.quizQuestions.length;
        // Track error for stats
        trackError(wordKey);
    }

    showFeedback(isCorrect);
}

function checkTypingAnswer() {
    stopTimer(); // Stop timer
    const input = document.getElementById('typing-answer');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = input.dataset.correct.toLowerCase();
    const normalizedCorrect = correctAnswer.replace(/\s*\([^)]*\)\s*/g, '').trim();
    const isCorrect = userAnswer === normalizedCorrect || userAnswer === correctAnswer;
    const currentWord = state.quizQuestions[state.quizCurrentIndex];

    // --- Re-queue Logic ---
    const wordKey = currentWord.sv;
    if (isCorrect) {
        state.quizCorrectStreak[wordKey] = (state.quizCorrectStreak[wordKey] || 0) + 1;
        if (state.quizCorrectStreak[wordKey] === 1) {
            state.quizScore++;
        }
    } else {
        state.quizCorrectStreak[wordKey] = 0;
        state.quizQuestions.push(currentWord);
        document.getElementById('quiz-question-total').textContent = state.quizQuestions.length;
        // Track error for stats
        trackError(wordKey);
    }

    showFeedback(isCorrect, input.dataset.correct);
}

function showFeedback(isCorrect, correctAnswer = '') {
    elements.quizFeedback.style.display = 'block';
    const feedbackText = document.getElementById('feedback-text');
    if (isCorrect) {
        feedbackText.textContent = '✓ Correct !';
        feedbackText.className = 'correct';
    } else {
        feedbackText.textContent = correctAnswer
            ? `✗ Incorrect. La réponse était : ${correctAnswer}`
            : '✗ Incorrect';
        feedbackText.className = 'incorrect';
    }
    document.getElementById('quiz-score').textContent = state.quizScore;
    document.getElementById('quiz-total').textContent = state.quizCurrentIndex + 1;
}

// ========================================
// PAIRS GAME FUNCTIONS
// ========================================
function startPairsGame() {
    const container = document.getElementById('quiz-pairs-game');
    container.innerHTML = '';

    // Select up to 8 pairs
    let pairs = state.quizQuestions;
    if (pairs.length > 8) {
        pairs = pairs.sort(() => Math.random() - 0.5).slice(0, 8);
    }

    state.totalPairs = pairs.length;
    state.matchedPairsCount = 0;
    state.selectedPairCard = null;

    // Create cards (SV and FR)
    const cards = [];
    pairs.forEach(pair => {
        cards.push({ id: pair.sv, text: pair.sv, type: 'sv', pairId: pair.sv });
        cards.push({ id: pair.fr, text: pair.fr, type: 'fr', pairId: pair.sv });
    });

    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);

    // Render
    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'pair-card';
        cardEl.textContent = card.text;
        cardEl.dataset.pairId = card.pairId;
        cardEl.addEventListener('click', () => handlePairClick(cardEl));
        container.appendChild(cardEl);
    });
}

function handlePairClick(cardEl) {
    if (cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) return;

    cardEl.classList.add('selected');

    if (!state.selectedPairCard) {
        // First card selected
        state.selectedPairCard = cardEl;
    } else {
        // Second card selected
        const firstCard = state.selectedPairCard;
        const isMatch = firstCard.dataset.pairId === cardEl.dataset.pairId;

        if (isMatch) {
            // Match found
            firstCard.classList.remove('selected');
            cardEl.classList.remove('selected');
            firstCard.classList.add('matched');
            cardEl.classList.add('matched');
            state.selectedPairCard = null;
            state.matchedPairsCount++;

            // Check win
            if (state.matchedPairsCount === state.totalPairs) {
                setTimeout(() => {
                    alert('🎉 Bravo ! Toutes les paires trouvées !');
                    // Add score logic or finish
                    state.quizScore = state.totalPairs; // Or custom scoring
                    showQuizResults();
                }, 500);
            }
        } else {
            // Mismatch
            cardEl.classList.add('mismatched');
            firstCard.classList.add('mismatched');
            setTimeout(() => {
                cardEl.classList.remove('selected', 'mismatched');
                firstCard.classList.remove('selected', 'mismatched');
                state.selectedPairCard = null;
            }, 800);
        }
    }
}

// ========================================
// TIMER FUNCTIONS
// ========================================
function startTimer() {
    stopTimer(); // Clear any existing timer

    let timeLeft = state.chronoTime;
    const timerEl = document.getElementById('quiz-timer');
    const timerValue = document.getElementById('timer-value');

    timerEl.style.display = 'flex';
    timerValue.textContent = timeLeft;
    timerEl.classList.remove('warning');

    state.timerInterval = setInterval(() => {
        timeLeft--;
        timerValue.textContent = timeLeft;

        if (timeLeft <= 5) {
            timerEl.classList.add('warning');
        }

        if (timeLeft <= 0) {
            timeUp();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
    const timerEl = document.getElementById('quiz-timer');
    if (timerEl) {
        timerEl.style.display = 'none';
    }
}

function timeUp() {
    stopTimer();

    // Mark current question as wrong
    const currentWord = state.quizQuestions[state.quizCurrentIndex];
    const wordKey = currentWord.sv;

    state.quizCorrectStreak[wordKey] = 0;
    state.quizQuestions.push(currentWord);
    document.getElementById('quiz-question-total').textContent = state.quizQuestions.length;
    trackError(wordKey);

    // Show feedback
    showFeedback(false, 'Temps écoulé !');

    // Disable answer buttons
    elements.quizAnswers.querySelectorAll('.quiz-answer').forEach(b => {
        b.classList.add('disabled');
        if (b.dataset.correct === 'true') {
            b.classList.add('correct');
        }
    });
}

function nextQuestion() {
    state.quizCurrentIndex++;
    if (state.quizCurrentIndex >= state.quizQuestions.length) {
        showQuizResults();
    } else {
        showQuizQuestion();
    }
}

function showQuizResults() {
    elements.quizGame.style.display = 'none';
    elements.quizResults.style.display = 'block';
    const total = state.quizQuestions.length;
    const score = state.quizScore;
    const percentage = Math.round((score / total) * 100);
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = total;
    document.getElementById('results-percentage').textContent = `${percentage}%`;

    // Save to quiz history
    state.quizHistory.push({
        date: new Date().toISOString(),
        score: score,
        total: total,
        percentage: percentage,
        type: state.quizType
    });
    // Keep only last 50 quizzes
    if (state.quizHistory.length > 50) {
        state.quizHistory = state.quizHistory.slice(-50);
    }
    localStorage.setItem('quizHistory', JSON.stringify(state.quizHistory));

    // Update activity for today
    trackActivity();

    let message = '';
    if (percentage >= 90) {
        message = '🌟 Excellent ! Du är fantastisk!';
    } else if (percentage >= 70) {
        message = '👍 Très bien ! Bra jobbat!';
    } else if (percentage >= 50) {
        message = '📚 Pas mal, continue à pratiquer !';
    } else {
        message = '💪 Continue à apprendre, tu vas y arriver !';
    }
    document.getElementById('results-message').textContent = message;
}

function restartQuiz() {
    elements.quizResults.style.display = 'none';
    elements.quizSetup.style.display = 'block';
    state.quizActive = false;
}

// ========================================
// EVENT LISTENERS
// ========================================
function initEventListeners() {
    elements.navTabs.forEach(tab => {
        tab.addEventListener('click', () => switchSection(tab.dataset.section));
    });
    elements.levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.levelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentLevel = btn.dataset.level;
            populateChapters();
        });
    });
    elements.chapterSelect.addEventListener('change', (e) => {
        state.currentChapter = e.target.value;
        state.currentCardIndex = 0;
        updateFlashcard();
    });
    elements.flashcard.addEventListener('click', flipCard);
    elements.prevBtn.addEventListener('click', prevCard);
    elements.nextBtn.addEventListener('click', nextCard);
    elements.modeToggle.addEventListener('click', toggleMode);
    elements.shuffleBtn.addEventListener('click', shuffleVocab);
    elements.markLearned.addEventListener('click', markAsLearned);
    elements.markReview.addEventListener('click', markForReview);

    // Favorite button
    const favBtn = document.getElementById('mark-favorite');
    if (favBtn) {
        favBtn.addEventListener('click', toggleFavorite);
    }
    document.addEventListener('keydown', (e) => {
        if (state.currentSection === 'vocabulary') {
            if (e.key === 'ArrowRight') nextCard();
            if (e.key === 'ArrowLeft') prevCard();
            if (e.key === ' ') { e.preventDefault(); flipCard(); }
        }
    });

    // Grammar search
    if (elements.grammarSearch) {
        elements.grammarSearch.addEventListener('input', (e) => {
            renderGrammarSidebar(e.target.value);
        });
    }

    // Quiz events
    elements.startQuiz.addEventListener('click', startQuiz);
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
    document.getElementById('check-typing').addEventListener('click', checkTypingAnswer);
    document.getElementById('typing-answer').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkTypingAnswer();
    });

    // SRS Events
    document.querySelectorAll('input[name="quiz-type"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const srsOptions = document.getElementById('srs-options');
            const chapterSelection = document.getElementById('quiz-chapter-selection').closest('.option-group');

            if (e.target.value === 'flashcards') {
                srsOptions.style.display = 'block';
            } else {
                srsOptions.style.display = 'none';
            }
        });
    });

    document.getElementById('srs-show-answer').addEventListener('click', showSRSAnswer);
    document.querySelectorAll('.srs-btn').forEach(btn => {
        btn.addEventListener('click', () => rateCard(parseInt(btn.dataset.rating)));
    });
}

// ========================================
// INITIALIZATION
// ========================================
// ========================================
// SRS FUNCTIONS
// ========================================
function saveSRS() {
    localStorage.setItem('vocabSRS', JSON.stringify(state.srsData));
}

function getSRSStatus(wordSv) {
    if (!state.srsData[wordSv]) {
        // New card
        return {
            dueDate: 0,
            interval: 0,
            ease: 2.5
        };
    }
    return state.srsData[wordSv];
}

function rateCard(rating) {
    const card = state.quizQuestions[state.quizCurrentIndex];
    if (!card) return;

    const status = getSRSStatus(card.sv);
    const now = Date.now();
    let nextInterval = 1; // Minutes

    // Rating: 1=Fail, 2=Hard, 3=Good, 4=Easy
    if (rating === 1) {
        // Again: Reset interval
        status.interval = 0;
        status.dueDate = now + (1 * 60 * 1000); // 1 min
    } else {
        // Success
        if (status.interval === 0) {
            status.interval = 1440; // 1 day in minutes
        } else {
            let multiplier = 2.5;
            if (rating === 2) multiplier = 1.2;
            if (rating === 4) multiplier = 3.5;

            status.ease = Math.max(1.3, status.ease + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02)));
            status.interval = Math.round(status.interval * multiplier);
        }
        status.dueDate = now + (status.interval * 60 * 1000);
    }

    state.srsData[card.sv] = status;
    saveSRS();
    nextQuestion();
}

function showSRSAnswer() {
    document.getElementById('quiz-flashcard-back').style.display = 'block';
    document.getElementById('srs-show-answer').style.display = 'none';
    document.getElementById('srs-rating-btns').style.display = 'flex';
}

// ========================================
// STATS & ACTIVITY TRACKING
// ========================================
function trackError(wordSv) {
    if (!state.errorHistory[wordSv]) {
        state.errorHistory[wordSv] = { errors: 0, lastError: 0 };
    }
    state.errorHistory[wordSv].errors++;
    state.errorHistory[wordSv].lastError = Date.now();
    localStorage.setItem('errorHistory', JSON.stringify(state.errorHistory));
}

function trackActivity() {
    const today = new Date().toISOString().split('T')[0];

    if (state.activityLog.lastActiveDate !== today) {
        // New day
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (state.activityLog.lastActiveDate === yesterday) {
            // Consecutive day - increment streak
            state.activityLog.currentStreak++;
        } else if (state.activityLog.lastActiveDate !== '') {
            // Missed a day - reset streak
            state.activityLog.currentStreak = 1;
        } else {
            // First activity ever
            state.activityLog.currentStreak = 1;
        }

        // Update longest streak
        if (state.activityLog.currentStreak > state.activityLog.longestStreak) {
            state.activityLog.longestStreak = state.activityLog.currentStreak;
        }

        state.activityLog.lastActiveDate = today;
        state.activityLog.todayCount = 0;
    }

    state.activityLog.todayCount++;
    localStorage.setItem('activityLog', JSON.stringify(state.activityLog));
}

function getTotalLearnedWords() {
    let total = 0;
    for (const chapter in state.learnedWords) {
        total += state.learnedWords[chapter].length;
    }
    return total;
}

function getAverageQuizScore() {
    if (state.quizHistory.length === 0) return null;
    const sum = state.quizHistory.reduce((acc, q) => acc + q.percentage, 0);
    return Math.round(sum / state.quizHistory.length);
}

function getSRSMasteredCount() {
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    let mastered = 0;
    for (const word in state.srsData) {
        if (state.srsData[word].interval >= 10080) { // 7 days in minutes
            mastered++;
        }
    }
    return mastered;
}

function renderDashboard() {
    // Update streak
    const streakEl = document.getElementById('streak-count');
    if (streakEl) {
        streakEl.textContent = state.activityLog.currentStreak;
    }

    // Update stat cards
    document.getElementById('stat-words-learned').textContent = getTotalLearnedWords();
    document.getElementById('stat-favorites').textContent = state.favorites.length;

    const avgScore = getAverageQuizScore();
    document.getElementById('stat-avg-score').textContent = avgScore !== null ? `${avgScore}%` : '--%';

    document.getElementById('stat-srs-mastered').textContent = getSRSMasteredCount();

    // Update daily goal
    const goalFill = document.getElementById('goal-fill');
    const goalText = document.getElementById('goal-text');
    const progress = Math.min(100, (state.activityLog.todayCount / state.activityLog.dailyGoal) * 100);
    goalFill.style.width = `${progress}%`;
    goalText.textContent = `${state.activityLog.todayCount} / ${state.activityLog.dailyGoal} actions`;

    // Render error list
    renderErrorList();
}

function renderErrorList() {
    const container = document.getElementById('error-list');
    const quizBtn = document.getElementById('quiz-errors-btn');

    // Sort errors by count
    const sortedErrors = Object.entries(state.errorHistory)
        .sort((a, b) => b[1].errors - a[1].errors)
        .slice(0, 10);

    if (sortedErrors.length === 0) {
        container.innerHTML = '<p class="empty-message">Aucune erreur enregistrée. Continuez à pratiquer !</p>';
        quizBtn.style.display = 'none';
    } else {
        container.innerHTML = sortedErrors.map(([word, data]) => `
            <div class="error-item">
                <span class="word">${word}</span>
                <span class="count">${data.errors} erreur${data.errors > 1 ? 's' : ''}</span>
            </div>
        `).join('');
        quizBtn.style.display = 'block';
    }
}

function startQuizOnErrors() {
    // Get top error words
    const errorWords = Object.entries(state.errorHistory)
        .sort((a, b) => b[1].errors - a[1].errors)
        .slice(0, 20)
        .map(([word]) => word);

    if (errorWords.length === 0) {
        alert('Aucune erreur enregistrée !');
        return;
    }

    // Find full vocab entries for these words
    const allVocab = [...getAllVocab('niveau2'), ...getAllVocab('niveau3')];
    const vocab = allVocab.filter(v => errorWords.includes(v.sv));

    if (vocab.length === 0) {
        alert('Impossible de trouver les mots.');
        return;
    }

    // Switch to quiz section and start
    switchSection('quiz');

    // Shuffle
    for (let i = vocab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocab[i], vocab[j]] = [vocab[j], vocab[i]];
    }

    state.quizQuestions = vocab;
    state.quizCurrentIndex = 0;
    // Start logic based on type
    state.quizType = 'multiple'; // Assuming 'multiple' for error quizzes, or could be a parameter
    state.quizQuestions = vocab;
    state.quizCurrentIndex = 0;
    state.quizScore = 0;
    state.quizActive = true;

    elements.quizSetup.style.display = 'none';
    elements.quizGame.style.display = 'block';

    // Reset timer
    stopTimer();

    // Pairs Game Logic
    if (state.quizType === 'pairs') {
        document.getElementById('quiz-pairs-game').style.display = 'grid';
        document.querySelector('.quiz-question-card').style.display = 'none';
        elements.quizAnswers.style.display = 'none';
        elements.quizTyping.style.display = 'none';
        startPairsGame();
    } else {
        document.getElementById('quiz-pairs-game').style.display = 'none';
        document.querySelector('.quiz-question-card').style.display = 'block';
        document.getElementById('quiz-question-total').textContent = state.quizQuestions.length;
        showQuizQuestion();
    }
}

// ========================================
// INITIALIZATION
// ========================================
function init() {
    initEventListeners();
    populateChapters();
    renderGrammarSidebar();
    renderQuizSelection();
    showWelcomeScreen();

    // Check streak on load
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (state.activityLog.lastActiveDate !== today &&
        state.activityLog.lastActiveDate !== yesterday &&
        state.activityLog.lastActiveDate !== '') {
        // Missed more than a day - reset streak
        state.activityLog.currentStreak = 0;
        localStorage.setItem('activityLog', JSON.stringify(state.activityLog));
    }

    // Quiz errors button
    const quizErrorsBtn = document.getElementById('quiz-errors-btn');
    if (quizErrorsBtn) {
        quizErrorsBtn.addEventListener('click', startQuizOnErrors);
    }

    // Render dashboard when stats tab is clicked
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.dataset.section === 'stats') {
                renderDashboard();
            }
        });
    });

    // Chrono toggle
    const chronoCheckbox = document.getElementById('chrono-mode');
    if (chronoCheckbox) {
        chronoCheckbox.addEventListener('change', (e) => {
            const timeSelect = document.getElementById('chrono-time');
            if (timeSelect) {
                timeSelect.style.display = e.target.checked ? 'inline-block' : 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
