/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

addEventListener("DOMContentLoaded", function () {
  var questionsData = [{
    id: 1,
    color: '#5BB2FF',
    question: "1. В выходной день ты скорее всего:",
    options: [{
      key: 'A',
      text: "Пойду в музей, на выставку, в театр или кино"
    }, {
      key: 'Б',
      text: "Встречусь с друзьями, пойду в шумное место"
    }, {
      key: 'В',
      text: "Посижу дома с книгой, посмотрю фильм"
    }, {
      key: 'Г',
      text: "Поеду на природу, в поход, за город "
    }]
  }, {
    id: 2,
    color: '#F18E6D',
    question: "2. Какой предмет интереснее?",
    options: [{
      key: 'A',
      text: "Литература, МХК, история искусств, рисование"
    }, {
      key: 'Б',
      text: "Обществознание, экономика, право, иностранный язык"
    }, {
      key: 'В',
      text: "Физика, математика, информатика, астрономия"
    }, {
      key: 'Г',
      text: "Биология, химия, география, экология"
    }]
  }, {
    id: 3,
    color: '#9CD75D',
    question: "3. Что для тебя главное в работе?",
    options: [{
      key: 'A',
      text: "Возможность творить, самовыражаться"
    }, {
      key: 'Б',
      text: "Общение с людьми, влияние на них"
    }, {
      key: 'В',
      text: "Решение сложных интеллектуальных задач"
    }, {
      key: 'Г',
      text: "Реальный, ощутимый результат"
    }]
  }, {
    id: 4,
    color: '#9FAAB6',
    question: "4. Какую книгу ты выберешь?",
    options: [{
      key: 'A',
      text: "Красочный альбом по искусству или биографию художника"
    }, {
      key: 'Б',
      text: "Книгу по психологии влияния, переговорам"
    }, {
      key: 'В',
      text: "Научно-популярную книгу про космос"
    }, {
      key: 'Г',
      text: "Атлас, энциклопедию природы, книгу про путешествия"
    }]
  }, {
    id: 5,
    color: '#FFCD55',
    question: " 5. Твой любимый тип задач:",
    options: [{
      key: 'A',
      text: "Придумать что-то новое, создать образ"
    }, {
      key: 'Б',
      text: " Убедить кого-то, договориться, наладить контакт"
    }, {
      key: 'В',
      text: "Проанализировать данные, найти закономерность"
    }, {
      key: 'Г',
      text: "Починить, собрать, сделать что-то своими руками"
    }]
  }, {
    id: 6,
    color: '#80DDBF',
    question: "6. Что тебя раздражает в людях?",
    options: [{
      key: 'A',
      text: "Безвкусица, серость, отсутствие фантазии"
    }, {
      key: 'Б',
      text: "Закрытость, неумение общаться"
    }, {
      key: 'В',
      text: "Глупость, нелогичность, нежелание думать"
    }, {
      key: 'Г',
      text: "Равнодушие к природе, жестокость к животным"
    }]
  }, {
    id: 7,
    color: '#80EAFF',
    question: "7. В компании друзей ты обычно:",
    options: [{
      key: 'A',
      text: "Генератор идей, тот, кто предлагает, куда пойти"
    }, {
      key: 'Б',
      text: "Душа компании, организатор встреч"
    }, {
      key: 'В',
      text: "Тот, кто всех умнее, знает много интересных фактов"
    }, {
      key: 'Г',
      text: "Тот, кто организует активный отдых, походы"
    }]
  }, {
    id: 8,
    color: '#E6BB77',
    question: "8.  Какой фильм ты выберешь?",
    options: [{
      key: 'A',
      text: "Красивую авторскую драму, арт-хаус"
    }, {
      key: 'Б',
      text: "Комедию, социальную драму"
    }, {
      key: 'В',
      text: "Фантастику, детектив-головоломку"
    }, {
      key: 'Г',
      text: "Приключенческий фильм, документалку про природу"
    }]
  }, {
    id: 9,
    color: '#FF768D',
    question: "9. Что тебе легче всего дается?",
    options: [{
      key: 'A',
      text: "Придумывать нестандартные, креативные решения"
    }, {
      key: 'Б',
      text: "Знакомиться с новыми людьми"
    }, {
      key: 'В',
      text: "Разбираться в сложных схемах, инструкциях"
    }, {
      key: 'Г',
      text: "Замечать детали вокруг, наблюдать за природой"
    }]
  }, {
    id: 10,
    color: '#FF8C3F',
    question: "10. Какая фраза тебе ближе всего?",
    options: [{
      key: 'A',
      text: "«Красота спасет мир»"
    }, {
      key: 'Б',
      text: "«Не имей сто рублей, а имей сто друзей»"
    }, {
      key: 'В',
      text: "«Знание — сила»"
    }, {
      key: 'Г',
      text: "«Земля — наш общий дом»"
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
    quizArea.innerHTML = "\n        <div class=\"ax-title-wrap\">\n            <svg class=\"ax-bracket ax-bracket-left\" width=\"19\" height=\"55\" viewBox=\"0 0 19 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M15.5216 52.0293H10.1773C6.1012 52.0293 2.79688 48.725 2.79688 44.6489V39.3046\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                        <path d=\"M15.5216 2.7959H10.1773C6.1012 2.7959 2.79688 6.10022 2.79688 10.1763V15.5206\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                    </svg>\n                    <span class=\"ax-title-text\">\u041A\u0442\u043E \u0442\u044B \u0432 \u043C\u0438\u0440\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439?</span>\n                    <svg class=\"ax-bracket ax-bracket-right\" width=\"19\" height=\"55\" viewBox=\"0 0 19 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M2.79678 2.7959H7.86569C11.9418 2.7959 15.2461 6.10022 15.2461 10.1763V15.5206\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                        <path d=\"M2.79678 52.0303H7.86569C11.9418 52.0303 15.2461 48.726 15.2461 44.6499V39.3056\" stroke=\"#212121\" stroke-width=\"5.59259\" stroke-linecap=\"round\"/>\n                    </svg>\n        </div>\n        \n        <div class=\"ax-question-text\">\n            ".concat(data.id, ". ").concat(data.question, "\n        </div>\n\n        <div class=\"ax-options-list\">\n            ").concat(data.options.map(function (opt) {
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