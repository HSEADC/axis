import '../css/style.css'

addEventListener("DOMContentLoaded", function() {
    const questionsData = [
        {
            id: 1,
            color: '#5BB2FF',
            question: "В выходной день ты скорее всего:",
            options: [
                { key: 'A', text: "Пойду в музей, на выставку, в театр или кино" },
                { key: 'Б', text: "Встречусь с друзьями, пойду в шумное место" },
                { key: 'В', text: "Посижу дома с книгой, посмотрю фильм" },
                { key: 'Г', text: "Поеду на природу, в поход, за город " }
            ]
        },
        {
            id: 2,
            color: '#F18E6D',
            question: "Какой предмет интереснее?",
            options: [
                { key: 'A', text: "Литература, МХК, история искусств, рисование" },
                { key: 'Б', text: "Обществознание, экономика, право, иностранный язык" },
                { key: 'В', text: "Физика, математика, информатика, астрономия" },
                { key: 'Г', text: "Биология, химия, география, экология" }
            ]
        },
        {
            id: 3,
            color: '#9CD75D',
            question: "Что для тебя главное в работе?",
            options: [
                { key: 'A', text: "Возможность творить, самовыражаться" },
                { key: 'Б', text: "Общение с людьми, влияние на них" },
                { key: 'В', text: "Решение сложных интеллектуальных задач" },
                { key: 'Г', text: "Реальный, ощутимый результат" }
            ]
        },
        {
            id: 4,
            color: '#9FAAB6',
            question: "Какую книгу ты выберешь?",
            options: [
                { key: 'A', text: "Красочный альбом по искусству или биографию художника" },
                { key: 'Б', text: "Книгу по психологии влияния, переговорам" },
                { key: 'В', text: "Научно-популярную книгу про космос" },
                { key: 'Г', text: "Атлас, энциклопедию природы, книгу про путешествия" }
            ]
        },
        {
            id: 5,
            color: '#FFCD55',
            question: "Твой любимый тип задач:",
            options: [
                { key: 'A', text: "Придумать что-то новое, создать образ" },
                { key: 'Б', text: " Убедить кого-то, договориться, наладить контакт" },
                { key: 'В', text: "Проанализировать данные, найти закономерность" },
                { key: 'Г', text: "Починить, собрать, сделать что-то своими руками" }
            ]
        },
        {
            id: 6,
            color: '#80DDBF',
            question: "Что тебя раздражает в людях?",
            options: [
                { key: 'A', text: "Безвкусица, серость, отсутствие фантазии" },
                { key: 'Б', text: "Закрытость, неумение общаться" },
                { key: 'В', text: "Глупость, нелогичность, нежелание думать" },
                { key: 'Г', text: "Равнодушие к природе, жестокость к животным" }
            ]
        },
        {
            id: 7,
            color: '#80EAFF',
            question: "В компании друзей ты обычно:",
            options: [
                { key: 'A', text: "Генератор идей, тот, кто предлагает, куда пойти" },
                { key: 'Б', text: "Душа компании, организатор встреч" },
                { key: 'В', text: "Тот, кто всех умнее, знает много интересных фактов" },
                { key: 'Г', text: "Тот, кто организует активный отдых, походы" }
            ]
        },
        {
            id: 8,
            color: '#E6BB77',
            question: "Какой фильм ты выберешь?",
            options: [
                { key: 'A', text: "Красивую авторскую драму, арт-хаус" },
                { key: 'Б', text: "Комедию, социальную драму" },
                { key: 'В', text: "Фантастику, детектив-головоломку" },
                { key: 'Г', text: "Приключенческий фильм, документалку про природу" }
            ]
        },
        {
            id: 9,
            color: '#FF768D',
            question: "Что тебе легче всего дается?",
            options: [
                { key: 'A', text: "Придумывать нестандартные, креативные решения" },
                { key: 'Б', text: "Знакомиться с новыми людьми" },
                { key: 'В', text: "Разбираться в сложных схемах, инструкциях" },
                { key: 'Г', text: "Замечать детали вокруг, наблюдать за природой" }
            ]
        },
        {
            id: 10,
            color: '#FF8C3F',
            question: "Какая фраза тебе ближе всего?",
            options: [
                { key: 'A', text: "«Красота спасет мир»" },
                { key: 'Б', text: "«Не имей сто рублей, а имей сто друзей»" },
                { key: 'В', text: "«Знание — сила»" },
                { key: 'Г', text: "«Земля — наш общий дом»" },
            ]
        }
    ];


    let currentQuestionIndex = 0;
    const userAnswers = {};


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
                    <span class="ax-title-text">Кто ты в мире профессий?</span>
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