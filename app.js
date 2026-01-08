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
    currentGrammarTopic: null
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

// ========================================
// QUIZ FUNCTIONS
// ========================================
function getAllVocab(level) {
    const vocab = [];
    const chapters = vocabularyData[level];
    for (const chapter in chapters) {
        vocab.push(...chapters[chapter]);
    }
    return vocab;
}

function startQuiz() {
    const levelInput = document.querySelector('input[name="quiz-level"]:checked').value;
    const typeInput = document.querySelector('input[name="quiz-type"]:checked').value;
    const countInput = parseInt(document.getElementById('quiz-count').value);
    let vocab = [];
    if (levelInput === 'both') {
        vocab = [...getAllVocab('niveau2'), ...getAllVocab('niveau3')];
    } else {
        vocab = getAllVocab(levelInput);
    }
    for (let i = vocab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocab[i], vocab[j]] = [vocab[j], vocab[i]];
    }
    state.quizQuestions = vocab.slice(0, countInput);
    state.quizCurrentIndex = 0;
    state.quizScore = 0;
    state.quizType = typeInput;
    state.quizActive = true;
    elements.quizSetup.style.display = 'none';
    elements.quizGame.style.display = 'block';
    elements.quizResults.style.display = 'none';
    document.getElementById('quiz-question-total').textContent = state.quizQuestions.length;
    showQuizQuestion();
}

function showQuizQuestion() {
    const question = state.quizQuestions[state.quizCurrentIndex];
    const isSwedishQuestion = Math.random() > 0.5;
    const questionWord = isSwedishQuestion ? question.sv : question.fr;
    const correctAnswer = isSwedishQuestion ? question.fr : question.sv;
    document.getElementById('quiz-word').textContent = questionWord;
    document.getElementById('quiz-instruction').textContent =
        isSwedishQuestion ? 'Traduisez en français :' : 'Traduisez en suédois :';
    document.getElementById('quiz-question-num').textContent = state.quizCurrentIndex + 1;
    const progress = ((state.quizCurrentIndex) / state.quizQuestions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = `${progress}%`;
    elements.quizFeedback.style.display = 'none';
    if (state.quizType === 'multiple') {
        elements.quizAnswers.style.display = 'grid';
        elements.quizTyping.style.display = 'none';
        const allVocab = [...getAllVocab('niveau2'), ...getAllVocab('niveau3')];
        const wrongAnswers = allVocab
            .filter(v => (isSwedishQuestion ? v.fr : v.sv) !== correctAnswer)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(v => isSwedishQuestion ? v.fr : v.sv);
        const answers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
        elements.quizAnswers.innerHTML = answers.map(answer => `
            <button class="quiz-answer" data-answer="${answer}" data-correct="${answer === correctAnswer}">
                ${answer}
            </button>
        `).join('');
        elements.quizAnswers.querySelectorAll('.quiz-answer').forEach(btn => {
            btn.addEventListener('click', () => checkAnswer(btn));
        });
    } else {
        elements.quizAnswers.style.display = 'none';
        elements.quizTyping.style.display = 'flex';
        const typingInput = document.getElementById('typing-answer');
        typingInput.value = '';
        typingInput.dataset.correct = correctAnswer;
        typingInput.focus();
    }
}

function checkAnswer(btn) {
    if (btn.classList.contains('disabled')) return;
    const isCorrect = btn.dataset.correct === 'true';
    elements.quizAnswers.querySelectorAll('.quiz-answer').forEach(b => {
        b.classList.add('disabled');
        if (b.dataset.correct === 'true') {
            b.classList.add('correct');
        } else if (b === btn && !isCorrect) {
            b.classList.add('incorrect');
        }
    });
    if (isCorrect) {
        state.quizScore++;
    }
    showFeedback(isCorrect);
}

function checkTypingAnswer() {
    const input = document.getElementById('typing-answer');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = input.dataset.correct.toLowerCase();
    const normalizedCorrect = correctAnswer.replace(/\s*\([^)]*\)\s*/g, '').trim();
    const isCorrect = userAnswer === normalizedCorrect || userAnswer === correctAnswer;
    if (isCorrect) {
        state.quizScore++;
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
}

// ========================================
// INITIALIZATION
// ========================================
function init() {
    initEventListeners();
    populateChapters();
    renderGrammarSidebar();
    showWelcomeScreen();
}

document.addEventListener('DOMContentLoaded', init);
