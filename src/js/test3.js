import '../css/style.css'

import '../css/style.css'

addEventListener("DOMContentLoaded", function() {
    const questionsData = [
        {
            id: 1,
            color: '#5BB2FF',
            question: "1. Как ты предпочитаешь работать?",
            options: [
                { key: 'A', text: "По четкому плану и графику" },
                { key: 'Б', text: "По вдохновению — когда есть настроение" },
                { key: 'В', text: "В команде, чтобы обсуждать каждый шаг с коллегами" },
                { key: 'Г', text: "В одиночестве, чтобы никто не отвлекал от процесса" }
            ]
        },
        {
            id: 2,
            color: '#F18E6D',
            question: "2. Что для тебя важнее в результате работы?",
            options: [
                { key: 'A', text: "Чтобы все было сделано правильно, без ошибок" },
                { key: 'Б', text: "Чтобы было красиво, необычно, с душой" },
                { key: 'В', text: "Чтобы результат понравился другим людям" },
                { key: 'Г', text: "Чтобы я сам был доволен результатом" }
            ]
        },
        {
            id: 3,
            color: '#9CD75D',
            question: "3. Как ты принимаешь решения?",
            options: [
                { key: 'A', text: "Логически взвешиваю все «за» и «против»" },
                { key: 'Б', text: "Доверяю интуиции и первому впечатлению" },
                { key: 'В', text: "Советуюсь с теми, кому доверяю" },
                { key: 'Г', text: "Принимаю сам и несу ответственность" }
            ]
        },
        {
            id: 4,
            color: '#9FAAB6',
            question: "4. Что тебя мотивирует работать лучше?",
            options: [
                { key: 'A', text: "Четкая постановка задачи и сроки" },
                { key: 'Б', text: "Интересная, творческая задача" },
                { key: 'В', text: "Признание коллег и начальства" },
                { key: 'Г', text: "Внутреннее желание сделать круто" }
            ]
        },
        {
            id: 5,
            color: '#FFCD55',
            question: " 5. Как ты реагируешь на критику?",
            options: [
                { key: 'A', text: "Анализирую, ищу рациональное зерно" },
                { key: 'Б', text: " Обижаюсь, особенно если критика неконструктивная" },
                { key: 'В', text: "Мне важно, кто критикует — мнение авторитетных людей учитываю" },
                { key: 'Г', text: "Прислушиваюсь, но последнее слово оставляю за собой" }
            ]
        },
        {
            id: 6,
            color: '#80DDBF',
            question: "6. В каком помещении тебе комфортнее работать?",
            options: [
                { key: 'A', text: "В тихом, изолированном кабинете" },
                { key: 'Б', text: "В красивом, эстетичном пространстве" },
                { key: 'В', text: "В опенспейсе, среди коллег" },
                { key: 'Г', text: "Дома или в уединенном месте" }
            ]
        },
        {
            id: 7,
            color: '#80EAFF',
            question: "7. Что для тебя самое страшное в работе?",
            options: [
                { key: 'A', text: "Допустить ошибку в расчетах или документах" },
                { key: 'Б', text: "Сделать скучно и шаблонно" },
                { key: 'В', text: "Подвести команду или коллег" },
                { key: 'Г', text: "Потерять интерес к тому, что делаешь" }
            ]
        },
        {
            id: 8,
            color: '#E6BB77',
            question: "8. Как ты справляешься с работой?",
            options: [
                { key: 'A', text: "Составляю список задач и выполняю их по порядку" },
                { key: 'Б', text: " Ищу творческий подход, чтобы автоматизировать рутину" },
                { key: 'В', text: "Прошу помощи у коллег, делегирую" },
                { key: 'Г', text: "Погружаюсь с головой и работаю, пока не сделаю" }
            ]
        },
        {
            id: 9,
            color: '#FF768D',
            question: "9. Что для тебя важнее в карьере?",
            options: [
                { key: 'A', text: "Стабильность и предсказуемость" },
                { key: 'Б', text: "Возможность самовыражаться" },
                { key: 'В', text: "Хорошие отношения в коллективе" },
                { key: 'Г', text: "Профессиональная независимость" }
            ]
        },
        {
            id: 10,
            color: '#FF8C3F',
            question: "10. Как ты отдыхаешь после работы?",
            options: [
                { key: 'A', text: "Привожу дела в порядок, планирую следующий день" },
                { key: 'Б', text: "Занимаюсь творчеством или хобби" },
                { key: 'В', text: "Встречаюсь с друзьями, иду в люди" },
                { key: 'Г', text: "Остаюсь наедине с собой, восстанавливаю силы" },
            ]
        }
    ];


    let currentQuestionIndex = 0;
    const userAnswers = {}; // Хранение ответов { 0: 'A', 1: 'B' ... }


    const quizArea = document.getElementById('quiz-area');
    const rubricatorArea = document.getElementById('rubricator');
    const root = document.documentElement; // Для смены CSS переменных
    const viewQuiz = document.getElementById('view-quiz');
    const viewResult = document.getElementById('view-result');
    const sidebarQuiz = document.getElementById('sidebar-quiz');
    const sidebarResult = document.getElementById('sidebar-result');


    function init() {
        renderRubricator();
        loadQuestion(0);
    }

// --- Рендер Рубрикатора (1-10) ---
    function renderRubricator() {
        rubricatorArea.innerHTML = '';
        questionsData.forEach((q, index) => {
            const item = document.createElement('div');
            item.classList.add('rubric-item');
            item.innerHTML = `
            ${index + 1}
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>
        `;

            item.addEventListener('click', () => {
                loadQuestion(index);
            });

            rubricatorArea.appendChild(item);
        });
        updateRubricatorActiveState();
    }

    function updateRubricatorActiveState() {
        const items = rubricatorArea.querySelectorAll('.rubric-item');
        items.forEach((item, index) => {
            if (index === currentQuestionIndex) {
                item.classList.add('current');
            } else {
                item.classList.remove('current');
            }
        });
    }


    function loadQuestion(index) {
        currentQuestionIndex = index;
        const data = questionsData[index];


        root.style.setProperty('--theme-color', data.color);


        updateRubricatorActiveState();


        const savedAnswer = userAnswers[index];

        quizArea.innerHTML = `
        <div class="ax-title-wrap">
            <svg class="ax-bracket ax-bracket-left" width="19" height="55" viewBox="0 0 19 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5216 52.0293H10.1773C6.1012 52.0293 2.79688 48.725 2.79688 44.6489V39.3046" stroke="#212121" stroke-width="5.59259" stroke-linecap="round"/>
                        <path d="M15.5216 2.7959H10.1773C6.1012 2.7959 2.79688 6.10022 2.79688 10.1763V15.5206" stroke="#212121" stroke-width="5.59259" stroke-linecap="round"/>
                    </svg>
                    <span class="ax-title-text">Твой рабочий стиль?</span>
                    <svg class="ax-bracket ax-bracket-right" width="19" height="55" viewBox="0 0 19 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.79678 2.7959H7.86569C11.9418 2.7959 15.2461 6.10022 15.2461 10.1763V15.5206" stroke="#212121" stroke-width="5.59259" stroke-linecap="round"/>
                        <path d="M2.79678 52.0303H7.86569C11.9418 52.0303 15.2461 48.726 15.2461 44.6499V39.3056" stroke="#212121" stroke-width="5.59259" stroke-linecap="round"/>
                    </svg>
        </div>
        
        <div class="ax-question-text">
            ${data.id}. ${data.question}
        </div>

        <div class="ax-options-list">
            ${data.options.map(opt => `
                <label class="ax-option">
                    <input type="radio" name="question_${data.id}" value="${opt.key}" 
                        ${savedAnswer === opt.key ? 'checked' : ''} onchange="saveAnswer(${index}, '${opt.key}')">
                    <div class="ax-letter-box">
                        ${opt.key}
                        <span class="corner tl"></span><span class="corner tr"></span>
                        <span class="corner bl"></span><span class="corner br"></span>
                    </div>
                    <span class="ax-option-text">${opt.text}</span>
                </label>
            `).join('')}
        </div>

        <div class="ax-nav-btns">
            <button class="ax-btn ax-btn-prev" onclick="prevQuestion()" ${index === 0 ? 'disabled' : ''}>← Назад</button>
            <button class="ax-btn ax-btn-next" onclick="nextQuestion()">Далее →</button>
        </div>
    `;
    }


    window.saveAnswer = function(qIndex, value) {
        userAnswers[qIndex] = value;
    }

    window.prevQuestion = function() {
        if (currentQuestionIndex > 0) {
            loadQuestion(currentQuestionIndex - 1);
        }
    }

    init();

    window.nextQuestion = function() {
        if (currentQuestionIndex < questionsData.length - 1) {
            loadQuestion(currentQuestionIndex + 1);
        } else {
            finishTest();
        }
    }


    function finishTest() {

        document.documentElement.style.setProperty('--theme-color', '#1a1a1a');


        viewQuiz.classList.add('hidden');
        sidebarQuiz.classList.add('hidden');


        viewResult.classList.remove('hidden');
        sidebarResult.classList.remove('hidden');

        window.scrollTo(0, 0);
    }

})