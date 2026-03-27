/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


addEventListener("DOMContentLoaded", function () {
  var questionsData = [{
    id: 1,
    color: '#5BB2FF',
    question: "1. Как ты предпочитаешь работать?",
    options: [{
      key: 'A',
      text: "По четкому плану и графику"
    }, {
      key: 'Б',
      text: "По вдохновению — когда есть настроение"
    }, {
      key: 'В',
      text: "В команде, чтобы обсуждать каждый шаг с коллегами"
    }, {
      key: 'Г',
      text: "В одиночестве, чтобы никто не отвлекал от процесса"
    }]
  }, {
    id: 2,
    color: '#F18E6D',
    question: "2. Что для тебя важнее в результате работы?",
    options: [{
      key: 'A',
      text: "Чтобы все было сделано правильно, без ошибок"
    }, {
      key: 'Б',
      text: "Чтобы было красиво, необычно, с душой"
    }, {
      key: 'В',
      text: "Чтобы результат понравился другим людям"
    }, {
      key: 'Г',
      text: "Чтобы я сам был доволен результатом"
    }]
  }, {
    id: 3,
    color: '#9CD75D',
    question: "3. Как ты принимаешь решения?",
    options: [{
      key: 'A',
      text: "Логически взвешиваю все «за» и «против»"
    }, {
      key: 'Б',
      text: "Доверяю интуиции и первому впечатлению"
    }, {
      key: 'В',
      text: "Советуюсь с теми, кому доверяю"
    }, {
      key: 'Г',
      text: "Принимаю сам и несу ответственность"
    }]
  }, {
    id: 4,
    color: '#9FAAB6',
    question: "4. Что тебя мотивирует работать лучше?",
    options: [{
      key: 'A',
      text: "Четкая постановка задачи и сроки"
    }, {
      key: 'Б',
      text: "Интересная, творческая задача"
    }, {
      key: 'В',
      text: "Признание коллег и начальства"
    }, {
      key: 'Г',
      text: "Внутреннее желание сделать круто"
    }]
  }, {
    id: 5,
    color: '#FFCD55',
    question: " 5. Как ты реагируешь на критику?",
    options: [{
      key: 'A',
      text: "Анализирую, ищу рациональное зерно"
    }, {
      key: 'Б',
      text: " Обижаюсь, особенно если критика неконструктивная"
    }, {
      key: 'В',
      text: "Мне важно, кто критикует — мнение авторитетных людей учитываю"
    }, {
      key: 'Г',
      text: "Прислушиваюсь, но последнее слово оставляю за собой"
    }]
  }, {
    id: 6,
    color: '#80DDBF',
    question: "6. В каком помещении тебе комфортнее работать?",
    options: [{
      key: 'A',
      text: "В тихом, изолированном кабинете"
    }, {
      key: 'Б',
      text: "В красивом, эстетичном пространстве"
    }, {
      key: 'В',
      text: "В опенспейсе, среди коллег"
    }, {
      key: 'Г',
      text: "Дома или в уединенном месте"
    }]
  }, {
    id: 7,
    color: '#80EAFF',
    question: "7. Что для тебя самое страшное в работе?",
    options: [{
      key: 'A',
      text: "Допустить ошибку в расчетах или документах"
    }, {
      key: 'Б',
      text: "Сделать скучно и шаблонно"
    }, {
      key: 'В',
      text: "Подвести команду или коллег"
    }, {
      key: 'Г',
      text: "Потерять интерес к тому, что делаешь"
    }]
  }, {
    id: 8,
    color: '#E6BB77',
    question: "8. Как ты справляешься с работой?",
    options: [{
      key: 'A',
      text: "Составляю список задач и выполняю их по порядку"
    }, {
      key: 'Б',
      text: " Ищу творческий подход, чтобы автоматизировать рутину"
    }, {
      key: 'В',
      text: "Прошу помощи у коллег, делегирую"
    }, {
      key: 'Г',
      text: "Погружаюсь с головой и работаю, пока не сделаю"
    }]
  }, {
    id: 9,
    color: '#FF768D',
    question: "9. Что для тебя важнее в карьере?",
    options: [{
      key: 'A',
      text: "Стабильность и предсказуемость"
    }, {
      key: 'Б',
      text: "Возможность самовыражаться"
    }, {
      key: 'В',
      text: "Хорошие отношения в коллективе"
    }, {
      key: 'Г',
      text: "Профессиональная независимость"
    }]
  }, {
    id: 10,
    color: '#FF8C3F',
    question: "10. Как ты отдыхаешь после работы?",
    options: [{
      key: 'A',
      text: "Привожу дела в порядок, планирую следующий день"
    }, {
      key: 'Б',
      text: "Занимаюсь творчеством или хобби"
    }, {
      key: 'В',
      text: "Встречаюсь с друзьями, иду в люди"
    }, {
      key: 'Г',
      text: "Остаюсь наедине с собой, восстанавливаю силы"
    }]
  }];
  var currentQuestionIndex = 0;
  var userAnswers = {}; // Хранение ответов { 0: 'A', 1: 'B' ... }

  var quizArea = document.getElementById('quiz-area');
  var rubricatorArea = document.getElementById('rubricator');
  var root = document.documentElement; // Для смены CSS переменных
  var viewQuiz = document.getElementById('view-quiz');
  var viewResult = document.getElementById('view-result');
  var sidebarQuiz = document.getElementById('sidebar-quiz');
  var sidebarResult = document.getElementById('sidebar-result');
  function init() {
    renderRubricator();
    loadQuestion(0);
  }

  // --- Рендер Рубрикатора (1-10) ---
  function renderRubricator() {
    rubricatorArea.innerHTML = '';
    questionsData.forEach(function (q, index) {
      var item = document.createElement('div');
      item.classList.add('rubric-item');
      item.innerHTML = "\n            ".concat(index + 1, "\n            <span class=\"corner tl\"></span><span class=\"corner tr\"></span>\n            <span class=\"corner bl\"></span><span class=\"corner br\"></span>\n        ");
      item.addEventListener('click', function () {
        loadQuestion(index);
      });
      rubricatorArea.appendChild(item);
    });
    updateRubricatorActiveState();
  }
  function updateRubricatorActiveState() {
    var items = rubricatorArea.querySelectorAll('.rubric-item');
    items.forEach(function (item, index) {
      if (index === currentQuestionIndex) {
        item.classList.add('current');
      } else {
        item.classList.remove('current');
      }
    });
  }
  function loadQuestion(index) {
    currentQuestionIndex = index;
    var data = questionsData[index];
    root.style.setProperty('--theme-color', data.color);
    updateRubricatorActiveState();
    var savedAnswer = userAnswers[index];
    quizArea.innerHTML = "\n        <div class=\"ax-title-wrap\">\n            <svg class=\"ax-bracket ax-bracket-left\" width=\"19\" height=\"55\" viewBox=\"0 0 19 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M15.5216 52.0293H10.1773C6.1012 52.0293 2.79688 48.725 2.79688 44.6489V39.3046\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                        <path d=\"M15.5216 2.7959H10.1773C6.1012 2.7959 2.79688 6.10022 2.79688 10.1763V15.5206\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                    </svg>\n                    <span class=\"ax-title-text\">\u0422\u0432\u043E\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u0438\u043B\u044C?</span>\n                    <svg class=\"ax-bracket ax-bracket-right\" width=\"19\" height=\"55\" viewBox=\"0 0 19 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M2.79678 2.7959H7.86569C11.9418 2.7959 15.2461 6.10022 15.2461 10.1763V15.5206\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                        <path d=\"M2.79678 52.0303H7.86569C11.9418 52.0303 15.2461 48.726 15.2461 44.6499V39.3056\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                    </svg>\n        </div>\n        \n        <div class=\"ax-question-text\">\n            ".concat(data.id, ". ").concat(data.question, "\n        </div>\n\n        <div class=\"ax-options-list\">\n            ").concat(data.options.map(function (opt) {
      return "\n                <label class=\"ax-option\">\n                    <input type=\"radio\" name=\"question_".concat(data.id, "\" value=\"").concat(opt.key, "\" \n                        ").concat(savedAnswer === opt.key ? 'checked' : '', " onchange=\"saveAnswer(").concat(index, ", '").concat(opt.key, "')\">\n                    <div class=\"ax-letter-box\">\n                        ").concat(opt.key, "\n                        <span class=\"corner tl\"></span><span class=\"corner tr\"></span>\n                        <span class=\"corner bl\"></span><span class=\"corner br\"></span>\n                    </div>\n                    <span class=\"ax-option-text\">").concat(opt.text, "</span>\n                </label>\n            ");
    }).join(''), "\n        </div>\n\n        <div class=\"ax-nav-btns\">\n            <button class=\"ax-btn ax-btn-prev\" onclick=\"prevQuestion()\" ").concat(index === 0 ? 'disabled' : '', ">\u2190 \u041D\u0430\u0437\u0430\u0434</button>\n            <button class=\"ax-btn ax-btn-next\" onclick=\"nextQuestion()\">\u0414\u0430\u043B\u0435\u0435 \u2192</button>\n        </div>\n    ");
  }
  window.saveAnswer = function (qIndex, value) {
    userAnswers[qIndex] = value;
  };
  window.prevQuestion = function () {
    if (currentQuestionIndex > 0) {
      loadQuestion(currentQuestionIndex - 1);
    }
  };
  init();
  window.nextQuestion = function () {
    if (currentQuestionIndex < questionsData.length - 1) {
      loadQuestion(currentQuestionIndex + 1);
    } else {
      finishTest();
    }
  };
  function finishTest() {
    document.documentElement.style.setProperty('--theme-color', '#1a1a1a');
    viewQuiz.classList.add('hidden');
    sidebarQuiz.classList.add('hidden');
    viewResult.classList.remove('hidden');
    sidebarResult.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
});
/******/ })()
;