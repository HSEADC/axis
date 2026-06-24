import '../css/style.css'

import itImg from '../images/it.webp';
import marketingImg from '../images/marketing.webp';
import creativeImg from '../images/creative.webp';
import medicineImg from '../images/medicine.webp';
import financeImg from '../images/finance.webp';
import accurateImg from '../images/accurate.webp';
import humanitarianImg from '../images/humanitarian.webp';
import constructionImg from '../images/construction.webp';
import educationImg from '../images/education.webp';
import ecoImg from '../images/eco.webp';


const images = {
    it: itImg, marketing: marketingImg, creative: creativeImg, medicine: medicineImg,
    finance: financeImg, accurate: accurateImg, humanitarian: humanitarianImg,
    construction: constructionImg, education: educationImg, eco: ecoImg
};

document.addEventListener('DOMContentLoaded', () => {

    const tabData = {
        doctor: {
            name: 'Врач',
            desc: 'ИИ уже превосходит дерматологов в диагностике меланомы и радиологов в анализе снимков. Но сострадание, этические решения и сложные клинические случаи остаются за человеком.',
            metrics: [
                { label: 'Риск автоматизации рутины', val: '72%' },
                { label: 'Рост спроса на специалистов', val: '+34%' },
                { label: 'Уровень изменения профессии', val: 'Высокий' }
            ],
            progress: [72, 34, 85], // widths for progress bars
            pills: ['ИИ-диагностика', 'Биоинформатика', 'Телемедицина'],
            bgClass: '#35d3ef',
            cardTitle: 'Врач 2035',
            cardDesc: 'Куратор лечения + интерпретатор ИИ-анализа + специалист по эмпатии и медицинской этике.',
            image: medicineImg,
        },
        designer: {
            name: 'Дизайнер',
            desc: 'Нейросети мгновенно генерируют макеты, интерфейсы и полноценные иллюстрации. Роль дизайнера смещается от ручной отрисовки пикселей к концептуальному арт-дирекшну, кураторству ИИ-систем и созданию уникального пользовательского опыта.',
            metrics: [
                { label: 'Риск автоматизации рутины', val: '85%' },
                { label: 'Рост спроса на специалистов', val: '+28%' },
                { label: 'Уровень изменения профессии', val: 'Очень высокий' }
            ],
            progress: [85, 28, 95],
            pills: ['Промпт-дизайн', 'Генеративный UX/UI', '3D-моделирование', 'Арт-Дирекшн'],
            bgClass: '#ff768d',
            cardTitle: 'Дизайнер 2035',
            cardDesc: 'Виртуальный архитектор пространств + генеративный дизайнер + куратор ИИ-систем.',
            image: creativeImg,
        },
        marketer: {
            name: 'Маркетолог',
            desc: 'Аналитика данных, составление медиапланов и генерация рекламных креативов переходят под контроль ИИ. Маркетолог будущего будет отвечать за глубокую психологию клиентов, позиционирование брендов и обучение алгоритмов лояльности.',
            metrics: [
                { label: 'Риск автоматизации рутины', val: '65%' },
                { label: 'Рост спроса на специалистов', val: '+41%' },
                { label: 'Уровень изменения профессии', val: 'Высокий' }
            ],
            progress: [65, 41, 80],
            pills: ['ИИ-персонализация', 'Дата-аналитика', 'Психографика бренд-опыта'],
            bgClass: '#ff8c3f',
            cardTitle: 'Маркетолог 2035',
            cardDesc: 'Стратег человеческих смыслов + архитектор ИИ-персонализации + аналитик поведенческих аномалий.',
                image: marketingImg,
        },
        teacher: {
            name: 'Учитель',
            desc: 'ИИ даёт каждому человеку персонального тьютора 24/7. Преподаватель будущего переходит от лекционного формата к фасилитации, навигации по знаниям и менторству, помогая развивать мягкие навыки и экологичное мышление.',
            metrics: [
                { label: 'Риск автоматизации рутины', val: '45%' },
                { label: 'Рост спроса на специалистов', val: '+50%' },
                { label: 'Уровень изменения профессии', val: 'Средний' }
            ],
            progress: [45, 50, 60],
            pills: ['ИИ-тьюторство', 'Развитие soft-skills', 'Игропрактика', 'Экология мышления'],
            bgClass: '#e6bb77',
            cardTitle: 'Учитель 2035',
            cardDesc: 'Навигатор индивидуальных образовательных траекторий + ментор критического выбора.',
            image: humanitarianImg,
        },
        lawyer: {
            name: 'Юрист',
            desc: 'Типовые договоры, проверка документов и анализ судебных прецедентов автоматизируются алгоритмами за секунды. Юристы будущего сфокусируются на сложнейших этических дилеммах, регуляции систем ИИ и космическом/биотехнологическом праве.',
            metrics: [
                { label: 'Риск автоматизации рутины', val: '60%' },
                { label: 'Рост спроса на специалистов', val: '+15%' },
                { label: 'Уровень изменения профессии', val: 'Средний' }
            ],
            progress: [60, 15, 65],
            pills: ['Цифровое & Космическое право', 'Этический консалтинг', 'ИИ-регуляция'],
            bgClass: '#f18e6d',
            cardTitle: 'Юрист 2035',
            cardDesc: 'Архитектор смарт-контрактов + аудитор систем регулирования ИИ + техно-медиатор.',
            image: educationImg,
        }
    };

    const tabButtons = document.querySelectorAll('.tab-btn');
    const activeTabPanel = document.getElementById('active-tab-panel');

    function renderTabContent(key) {
        const data = tabData[key];
        if (!data) return;


        activeTabPanel.style.opacity = '0';

        setTimeout(() => {

            activeTabPanel.innerHTML = `
        <div class="prof-info-col">
          <div class="prof-headline-block">
            <h3 class="prof-name" id="tab-prof-name">${data.name}</h3>
            <p class="prof-desc" id="tab-prof-desc">${data.desc}</p>
          </div>
          
          <div class="prof-metrics-block">
            <div class="prof-metric-item">
              <div class="prof-metric-label">
                <span>${data.metrics[0].label}</span>
                <span class="prof-metric-val">${data.metrics[0].val}</span>
              </div>
              <div class="prof-bar-bg">
                <div class="prof-bar-fill accent-blue" style="width: ${data.progress[0]}%"></div>
              </div>
            </div>
            
            <div class="prof-metric-item">
              <div class="prof-metric-label">
                <span>${data.metrics[1].label}</span>
                <span class="prof-metric-val">${data.metrics[1].val}</span>
              </div>
              <div class="prof-bar-bg">
                <div class="prof-bar-fill accent-orange" style="width: ${data.progress[1]}%"></div>
              </div>
            </div>
            
            <div class="prof-metric-item">
              <div class="prof-metric-label">
                <span>${data.metrics[2].label}</span>
                <span class="prof-metric-val">${data.metrics[2].val}</span>
              </div>
              <div class="prof-bar-bg">
                <div class="prof-bar-fill accent-pink" style="width: ${data.progress[2]}%"></div>
              </div>
            </div>
          </div>
          
          <div class="prof-tags">
            ${data.pills.map(tag => `<span class="prof-pill-tag">${tag}</span>`).join('')}
          </div>
        </div>
        
        <div class="prof-card-col" style="background-color: ${data.bgClass};">
          <div class="prof-card-top">
            <h4 class="prof-card-text">${data.cardTitle}</h4>
            <p style="font-size: 1.5rem; line-height: 1.5; font-weight: 500; margin-top: 1.0rem;">${data.cardDesc}</p>
          </div>
          <div class="prof-card-art-container">
          <img src="${data.image}" alt="${data.name}">
          </div>
        </div>
      `;

            activeTabPanel.style.opacity = '1';
        }, 200);
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const key = btn.getAttribute('data-tab');
            renderTabContent(key);
        });
    });



    const quizQuestions = [
        {
            id: 1,
            title: 'Когда в твоей работе появляется новый инструмент на основе искусственного интеллекта или инновация, ты...',
            options: [
                { text: 'Сразу бросаюсь изучать его функции, чтобы применить первым.', skill: 'adaptability' },
                { text: 'Тщательно анализирую его полезность, слабые места и риски.', skill: 'critical' },
                { text: 'Жду, когда коллеги разберутся и напишут понятную инструкцию.', skill: 'digital' },
                { text: 'Думаю, как соединить его со своим творческим стилем для создания чего-то нового.', skill: 'creative' }
            ]
        },
        {
            id: 2,
            title: 'Перед тобой стоит сложнейшая рабочая задача будущего, для которой ещё нет готовых алгоритмов действий...',
            options: [
                { text: 'Экспериментирую и комбинирую нестандартные подходы.', skill: 'creative' },
                { text: 'Разбиваю проблему на составные части, проверяю факты и строю строгую логику.', skill: 'critical' },
                { text: 'Ищу подходящие ИИ-сервисы, плагины или утилиты, способные сделать это за меня.', skill: 'digital' },
                { text: 'Начинаю тестировать разные варианты прямо на практике, адаптируясь под отзывы.', skill: 'adaptability' }
            ]
        },
        {
            id: 3,
            title: 'Представь себе сценарий, что твоя текущая специализация полностью автоматизируется за три года...',
            options: [
                { text: 'Я готов с оптимизмом освоить совершенно другую сферу и перестроиться под тренды.', skill: 'adaptability' },
                { text: 'Начну глубоко изучать ИИ-инструменты для своей ниши, чтобы стать незаменимым оператором.', skill: 'digital' },
                { text: 'Буду выстраивать детальную карьерную стратегию на стыке смежных рынков.', skill: 'critical' },
                { text: 'Запущу авторский творческий проект, передающий дух и эмоции, которые ИИ не воссоздаст.', skill: 'creative' }
            ]
        },
        {
            id: 4,
            title: 'Столкнувшись с противоречивой или громкой новостью о технологическом прорыве в вашей индустрии, ты...',
            options: [
                { text: 'Нахожу первоисточники информации, сверяю данные и ищу научно-практическую базу.', skill: 'critical' },
                { text: 'Начинаю фантазировать о том, как данный прорыв продвинет мои творческие идеи.', skill: 'creative' },
                { text: 'Пробую немедленно интегрировать технологию в свой рабочий процесс ради скорости.', skill: 'adaptability' },
                { text: 'Изучаю, на каком сервере и каком стеке технологий это работает.', skill: 'digital' }
            ]
        },
        {
            id: 5,
            title: 'Какой фактор ты считаешь ключевым преимуществом человека в эру тотального доминирования нейронных сетей?',
            options: [
                { text: 'Гибкость, умение жить в условиях неопределенности и быстро менять приоритеты.', skill: 'adaptability' },
                { text: 'Высокая цифровая грамотность — знание архитектуры кода, баз данных и промпт-инжиниринга.', skill: 'digital' },
                { text: 'Глубокая чувственность, генерация уникального контента на стыке интуиции и искусства.', skill: 'creative' },
                { text: 'Рациональное критическое суждение, фильтрация информационного мусора и принятие решений.', skill: 'critical' }
            ]
        }
    ];


    const outcomes = {
        adaptability: {
            badgeTitle: 'Адаптивность',
            heroTitle: 'Ты — технологичный человек',
            desc: 'Ты с невероятной скоростью осваиваешь цифровые инструменты и видишь, как инновации пересобирают привычный мир. Твоя ключевая сила — умение гибко перестраиваться под непредсказуемый рынок труда. Усиль это системным критическим мышлением, и твой профессиональный вес будет безраздельно доминировать.',
            pillars: [
                { label: 'Сильная сторона', val: 'Tech-навигация', text: 'Умеешь с лёту выбирать правильные программные решения для любых практических форс-мажоров.' },
                { label: 'Направление роста', val: 'Стратегическое новаторство', text: 'Учись задаваться вопросом не только «как запустить технологию», но и «зачем её внедрять» с коммерческой точки зрения.' },
                { label: 'Профессии для тебя', val: 'AI Product Manager', text: 'XR Designer · Tech Lead · Growth Architect' }
            ],
            sbTitle: 'Курсы для технологичных людей',
            sbDesc: 'ИИ-инструменты, продуктовое развитие, цифровое управление и генеративный UX/UI — векторы, которые взвинтят твою востребованность до предела.',

        },
        critical: {
            badgeTitle: 'Критическое мышление',
            heroTitle: 'Ты — системный аналитик',
            desc: 'Тебя невозможно запутать популистским хайпом. Твой острый аналитический склад ума безукоризненно отделяет полезные факты от иллюзорного шума. Любое сложное решение ты взвешиваешь на основе сухих фактов и логики. Для будущего ИИ-мира ты станешь незаменимым фильтром ошибок искусственного разума.',
            pillars: [
                { label: 'Сильная сторона', val: 'Объективный аудит', text: 'Умеешь верифицировать точность данных и предупреждать системные сбои на самых ранних стадиях.' },
                { label: 'Направление роста', val: 'Скорость принятия решений', text: 'Нарабатывай навык действий и быстрых гипотез в условиях острого дефицита времени и исходной информации.' },
                { label: 'Профессии для тебя', val: 'Диджитэл-этик', text: 'Риск-менеджер · AI Auditor · Бизнес-аналитик данных' }
            ],
            sbTitle: 'Курсы для системных аналитиков',
            sbDesc: 'Углубленная аналитика больших данных, этическая инженерия, ИИ-аудит и продуктовая логистическая аналитика — навыки, делающие тебя суверенной фигурой на рынке.',

        },
        digital: {
            badgeTitle: 'Цифровая грамотность',
            heroTitle: 'Ты — технологический драйвер',
            desc: 'В твоих руках алгоритмы и информационные инструменты превращаются в послушное оружие эффективности. Ты отлично чувствуешь логику работы машин, знаешь как строить цепочки промптов и автоматизировать монотонный человеческий труд. Твой практицизм и цифровая смекалка гарантируют быстрое масштабирование процессов.',
            pillars: [
                { label: 'Сильная сторона', val: 'Автоматизация рутины', text: 'Мастерски находишь и внедряешь ИИ-решения, убирающие скучную бумажную и механическую работу.' },
                { label: 'Направление роста', val: 'Глубинная архитектура', text: 'Не ограничивайся ролью пользователя готовых ИИ — погружайся в фундаментальную инженерию моделей.' },
                { label: 'Профессии для тебя', val: 'ИИ-тренер / Промпт-инженер', text: 'No-code Developer · Директор по ИИ-трансформации' }
            ],
            sbTitle: 'Курсы по автоматизации и ПО',
            sbDesc: 'Разработка ПО, управление базами данных, системная робототехника, создание нейросетевых адаптеров и Python — твои абсолютные точки кратного роста.',
        },
        creative: {
            badgeTitle: 'Креативность',
            heroTitle: 'Ты — архитектор смыслов',
            desc: 'Именно твое нестандартное мышление будет определять облик цивилизации, когда машины автоматизируют всю механику! Твои оригинальные идеи зарождаются на стыке междисциплинарной интуиции, дерзких гипотез и тонкого понимания человеческого сердца. Нейросети станут твоим кистью, но холст всегда будет твоим.',
            pillars: [
                { label: 'Сильная сторона', val: 'Гибридное мышление', text: 'Способность объединять чуждые концепции и создавать революционно новые авторские решения.' },
                { label: 'Направление роста', val: 'Четкое структурирование', text: 'Учись оформлять ураганы идей в прозрачные презентации, системы и понятные ТЗ для исполнителей.' },
                { label: 'Профессии для тебя', val: 'Концепт-дизайнер / Игропрактик', text: 'Генеративный Арт-Директор · Проектировщик миров' }
            ],
            sbTitle: 'Курсы для креаторов будущего',
            sbDesc: 'Игровой дизайн, 3D-графика, режиссура, концептуальное рисование и мультимедийная режиссура ИИ — среды для грандиозного расцвета твоего творческого капитала.',

        }
    };

    let currentQuestionIndex = 0;
    let userAnswers = [];


    const quizProgress = document.getElementById('quiz-progress');
    const quizQNum = document.getElementById('quiz-qnum');
    const quizTitle = document.getElementById('quiz-qtitle');
    const quizOptionsGrid = document.getElementById('quiz-options-grid');
    const btnNext = document.getElementById('btn-next-skill');
    const quizBoxCard = document.getElementById('quiz-box-card-skill');

    let selectedOptionIndex = null;

    function loadQuestion(collab) {
        if (collab >= quizQuestions.length) {
            showResults();
            return;
        }

        selectedOptionIndex = null;
        btnNext.disabled = true;

        const q = quizQuestions[collab];
        // Update question progression visual
        const progressPercent = ((collab + 1) / quizQuestions.length) * 100;
        quizProgress.style.width = `${progressPercent}%`;
        quizQNum.textContent = `Вопрос ${collab + 1} из ${quizQuestions.length}`;
        quizTitle.textContent = q.title;


        quizOptionsGrid.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option-btn';
            optionBtn.innerHTML = `
        <span class="mono-text" style="color: var(--color-brand); font-weight:700; font-size: 1.4rem;">0${idx + 1}.</span>
        <span>${opt.text}</span>
      `;
            optionBtn.addEventListener('click', () => {

                const allButtons = quizOptionsGrid.querySelectorAll('.quiz-option-btn');
                allButtons.forEach(b => b.classList.remove('selected'));

                optionBtn.classList.add('selected');

                selectedOptionIndex = idx;
                btnNext.disabled = false;
            });
            quizOptionsGrid.appendChild(optionBtn);
        });
    }

    function showResults() {

        const skillCounts = { adaptability: 0, critical: 0, digital: 0, creative: 0 };
        userAnswers.forEach(skill => {
            if (skillCounts[skill] !== undefined) {
                skillCounts[skill]++;
            }
        });


        let winningSkill = 'adaptability';
        let maxCount = -1;
        for (const [skill, count] of Object.entries(skillCounts)) {
            if (count > maxCount) {
                maxCount = count;
                winningSkill = skill;
            }
        }

        const detailName = winningSkill;
        const clientData = outcomes[detailName];

        quizBoxCard.innerHTML = `
      <div class="result-view-wrapper">
        <div class="result-top-badge-banner">
          <div class="result-top-badge-title">Рекомендованный навык: ${clientData.badgeTitle}</div>
        </div>
        
        <h3 class="result-main-title">${clientData.heroTitle}</h3>
        <p class="result-main-description">${clientData.desc}</p>
        
        <div class="result-pillars-grid">
          <div class="result-pillar-card">
            <span class="result-pillar-label">${clientData.pillars[0].label}</span>
            <h4 class="result-pillar-value">${clientData.pillars[0].val}</h4>
            <p class="result-pillar-desc">${clientData.pillars[0].text}</p>
          </div>
          <div class="result-pillar-card">
            <span class="result-pillar-label">${clientData.pillars[1].label}</span>
            <h4 class="result-pillar-value">${clientData.pillars[1].val}</h4>
            <p class="result-pillar-desc">${clientData.pillars[1].text}</p>
          </div>
          <div class="result-pillar-card">
            <span class="result-pillar-label">${clientData.pillars[2].label}</span>
            <h4 class="result-pillar-value">${clientData.pillars[2].val}</h4>
            <p class="result-pillar-desc">${clientData.pillars[2].text}</p>
          </div>
        </div>
        
        <div class="sb-recommend-banner">
          <div class="sb-recommend-left">
            <span class="sb-badge">Skillbox рекомендует</span>
            <h4 class="sb-title">${clientData.sbTitle}</h4>
            <p class="sb-text">${clientData.sbDesc}</p>
          </div>
          <div class="sb-recommend-right">
            <a href="https://skillbox.ru" target="_blank" class="sb-btn" id="sb-cta-btn">Смотреть курсы →</a>
          </div>
        </div>
        
        <div style="margin-top: 4.8rem; display: flex; justify-content: center; gap: 2.0rem;">
          <button id="btn-quiz-restart" class="btn-skill btn-secondary-skill" style="padding: 1.4rem 2.8rem; font-size:1.4rem; font-family: "Drukewidecyr", sans-serif">
             Пройти тест ещё раз
          </button>
        </div>
      </div>
    `;


        document.getElementById('btn-quiz-restart').addEventListener('click', () => {
            restartQuiz();
        });
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        userAnswers = [];
        quizBoxCard.innerHTML = `
     
      <div class="quiz-progress-bar-bg">
        <div id="quiz-progress" class="quiz-progress-bar-fill"></div>
      </div>
      
      <div class="quiz-meta-info">
        <span id="quiz-qnum">Вопрос 1 из 5</span>
        <span class="mono-text">Выберите вариант, наиболее подходящий вам</span>
      </div>
      
      <h3 id="quiz-qtitle" class="quiz-question-title">
        Когда в твоей работе появляется новый инструмент...
      </h3>
      
     
      <div id="quiz-options-grid" class="quiz-options-grid"></div>
      
      <div class="quiz-footer-actions">
        <button id="btn-next-skill" class="btn-next-skill">Далее &rarr;</button>
      </div>
    `;

        const newProgress = document.getElementById('quiz-progress');
        const newQnum = document.getElementById('quiz-qnum');
        const newQtitle = document.getElementById('quiz-qtitle');
        const newGrid = document.getElementById('quiz-options-grid');
        const newNext = document.getElementById('btn-next-skill');


        newNext.addEventListener('click', () => {
            const activeQ = quizQuestions[currentQuestionIndex];
            const answerSkill = activeQ.options[selectedOptionIndex].skill;
            userAnswers.push(answerSkill);

            currentQuestionIndex++;
            loadAlternativeRefs(newProgress, newQnum, newQtitle, newGrid, newNext);
        });

        loadAlternative(0, newProgress, newQnum, newQtitle, newGrid, newNext);
    }

    function loadAlternative(index, progressEl, qnumEl, titleEl, gridEl, nextEl) {
        selectedOptionIndex = null;
        nextEl.disabled = true;

        const q = quizQuestions[index];
        const progressPercent = ((index + 1) / quizQuestions.length) * 100;
        progressEl.style.width = `${progressPercent}%`;
        qnumEl.textContent = `Вопрос ${index + 1} из ${quizQuestions.length}`;
        titleEl.textContent = q.title;

        gridEl.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option-btn';
            optionBtn.innerHTML = `
        <span class="mono-text" style="color: var(--color-brand); font-weight:700; font-size: 1.4rem;">0${idx + 1}.</span>
        <span>${opt.text}</span>
      `;
            optionBtn.addEventListener('click', () => {
                const allButtons = gridEl.querySelectorAll('.quiz-option-btn');
                allButtons.forEach(b => b.classList.remove('selected'));
                optionBtn.classList.add('selected');
                selectedOptionIndex = idx;
                nextEl.disabled = false;
            });
            gridEl.appendChild(optionBtn);
        });
    }

    function loadAlternativeRefs(progressEl, qnumEl, titleEl, gridEl, nextEl) {
        if (currentQuestionIndex >= quizQuestions.length) {
            showResults();
        } else {
            loadAlternative(currentQuestionIndex, progressEl, qnumEl, titleEl, gridEl, nextEl);
        }
    }


    btnNext.addEventListener('click', () => {
        const q = quizQuestions[currentQuestionIndex];
        const answerSkill = q.options[selectedOptionIndex].skill;
        userAnswers.push(answerSkill);

        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    });


    loadQuestion(0);


    const downArrowCta = document.getElementById('btn-explore-test-skill');
    if (downArrowCta) {
        downArrowCta.addEventListener('click', (e) => {
            e.preventDefault();
            const testSection = document.getElementById('quiz-section');
            if (testSection) {
                testSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const exploreAllCta = document.getElementById('btn-explore-grid-skill');
    if (exploreAllCta) {
        exploreAllCta.addEventListener('click', (e) => {
            e.preventDefault();
            const marketSection = document.getElementById('market-section');
            if (marketSection) {
                marketSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


    const navAnchorLinks = document.querySelectorAll('.nav-link-skill');
    navAnchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });


    const startCtaBtn = document.getElementById('btn-footer-test-skill');
    if (startCtaBtn) {
        startCtaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const testSection = document.getElementById('quiz-section');
            if (testSection) {
                testSection.scrollIntoView({ behavior: 'smooth' });
                restartQuiz();
            }
        });
    }

});
