/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

addEventListener("DOMContentLoaded", function () {
  var questionsData = [{
    id: 1,
    color: '#5BB2FF',
    question: "На школьном празднике ты:",
    options: [{
      key: 'A',
      text: "Организатор (сценарий, логистика)"
    }, {
      key: 'Б',
      text: "Креативщик (концепция, оформление)"
    }, {
      key: 'В',
      text: "Коммуникатор (оптимизация общения)"
    }, {
      key: 'Г',
      text: "Технарь (оборудование)"
    }]
  }, {
    id: 2,
    color: '#F18E6D',
    question: "Какой процесс для вас осмысленнее?",
    options: [{
      key: 'A',
      text: "Анализировать данные и прогнозировать"
    }, {
      key: 'Б',
      text: "Наблюдать за природой/организмами"
    }, {
      key: 'В',
      text: "Писать алгоритм/инструкцию"
    }, {
      key: 'Г',
      text: "Создавать образ/историю"
    }]
  }, {
    id: 3,
    color: '#9CD75D',
    question: "Что беспокоит больше всего?",
    options: [{
      key: 'A',
      text: "Низкое качество услуг/продуктов"
    }, {
      key: 'Б',
      text: "Грязь, вырубка лесов, вымирание видов"
    }, {
      key: 'В',
      text: "Цифровые угрозы и сырой софт"
    }, {
      key: 'Г',
      text: "Люди не слышат друг друга"
    }]
  }, {
    id: 4,
    color: '#9FAAB6',
    question: "Как учите новое?:",
    options: [{
      key: 'A',
      text: "Статьи, исследования, систематизация"
    }, {
      key: 'Б',
      text: "Видео, интерактив, пробы"
    }, {
      key: 'В',
      text: "Наставник, живые примеры"
    }, {
      key: 'Г',
      text: "Нормативка, ГОСТы, стандарты"
    }]
  }, {
    id: 5,
    color: '#FFCD55',
    question: " Идеальный результат труда — это:",
    options: [{
      key: 'A',
      text: "Конкретная польза, измеримый итог"
    }, {
      key: 'Б',
      text: "Нечто уникальное, меняющее взгляд"
    }, {
      key: 'В',
      text: "Новое знание, фундамент"
    }, {
      key: 'Г',
      text: "Помощь людям/природе"
    }]
  }, {
    id: 6,
    color: '#80DDBF',
    question: "Какому формату доверяете?",
    options: [{
      key: 'A',
      text: "ТЗ, гайдлайн, чёткий план"
    }, {
      key: 'Б',
      text: "Брейншторм, импровизация"
    }, {
      key: 'В',
      text: "Методика, протокол"
    }, {
      key: 'Г',
      text: "Живые отзывы, личный опыт"
    }]
  }, {
    id: 7,
    color: '#80EAFF',
    question: "Что важнее в команде?",
    options: [{
      key: 'A',
      text: "Экспертность"
    }, {
      key: 'Б',
      text: "Взаимопонимание"
    }, {
      key: 'В',
      text: "Роли и ответственность"
    }, {
      key: 'Г',
      text: "Общие ценности"
    }]
  }, {
    id: 8,
    color: '#E6BB77',
    question: "Заметили проблему. Первый шаг?",
    options: [{
      key: 'A',
      text: "Изучить причины"
    }, {
      key: 'Б',
      text: "Сразу предложить решение"
    }, {
      key: 'В',
      text: "Оценить влияние на людей/природу"
    }, {
      key: 'Г',
      text: "Визуализировать, донести"
    }]
  }, {
    id: 9,
    color: '#FF768D',
    question: "Что цените в информации?",
    options: [{
      key: 'A',
      text: "Точность, цифры"
    }, {
      key: 'Б',
      text: "Новизну"
    }, {
      key: 'В',
      text: "Применимость"
    }, {
      key: 'Г',
      text: "Системность, картину в целом"
    }]
  }, {
    id: 10,
    color: '#FF8C3F',
    // Темно-синий
    question: "Ваша рабочая метафора:",
    options: [{
      key: 'A',
      text: "Архитектор (строю)"
    }, {
      key: 'Б',
      text: "Исследователь (изучаю)"
    }, {
      key: 'В',
      text: "Садовник (ращу)"
    }, {
      key: 'Г',
      text: "Проводник (веду)"
    }, {
      key: 'Д',
      text: "Художник (создаю образ)"
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
    quizArea.innerHTML = "\n        <div class=\"ax-title-wrap\">\n            <svg class=\"ax-bracket ax-bracket-left\" width=\"19\" height=\"55\" viewBox=\"0 0 19 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M15.5216 52.0293H10.1773C6.1012 52.0293 2.79688 48.725 2.79688 44.6489V39.3046\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                        <path d=\"M15.5216 2.7959H10.1773C6.1012 2.7959 2.79688 6.10022 2.79688 10.1763V15.5206\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                    </svg>\n                    <span class=\"ax-title-text\">\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442</span>\n                    <svg class=\"ax-bracket ax-bracket-right\" width=\"19\" height=\"55\" viewBox=\"0 0 19 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M2.79678 2.7959H7.86569C11.9418 2.7959 15.2461 6.10022 15.2461 10.1763V15.5206\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                        <path d=\"M2.79678 52.0303H7.86569C11.9418 52.0303 15.2461 48.726 15.2461 44.6499V39.3056\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                    </svg>\n        </div>\n        \n        <div class=\"ax-question-text\">\n            ".concat(data.id, ". ").concat(data.question, "\n        </div>\n\n        <div class=\"ax-options-list\">\n            ").concat(data.options.map(function (opt) {
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