/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/it.webp
const it_namespaceObject = __webpack_require__.p + "images/0f89d13af1a5ea411444.webp";
;// ./src/images/marketing.webp
const marketing_namespaceObject = __webpack_require__.p + "images/ee3061cc7b467fdee93a.webp";
;// ./src/images/creative.webp
const creative_namespaceObject = __webpack_require__.p + "images/7e699f162b9288c62dfc.webp";
;// ./src/images/medicine.webp
const medicine_namespaceObject = __webpack_require__.p + "images/91b34843427e98bac45b.webp";
;// ./src/images/finance.webp
const finance_namespaceObject = __webpack_require__.p + "images/c025164ec89f2b660a11.webp";
;// ./src/images/accurate.webp
const accurate_namespaceObject = __webpack_require__.p + "images/567d146190b668fe7796.webp";
;// ./src/images/humanitarian.webp
const humanitarian_namespaceObject = __webpack_require__.p + "images/55bba355fd0b6e1e4543.webp";
;// ./src/images/construction.webp
const construction_namespaceObject = __webpack_require__.p + "images/899290fc4440aa49b11d.webp";
;// ./src/images/education.webp
const education_namespaceObject = __webpack_require__.p + "images/0801c91f2867e3c6397c.webp";
;// ./src/images/eco.webp
const eco_namespaceObject = __webpack_require__.p + "images/66e26fbddafd88e206a3.webp";
;// ./src/images/comp.png
const comp_namespaceObject = __webpack_require__.p + "images/b6e55ec5098a96dbf76a.png";
;// ./src/images/arrow-blue.svg
const arrow_blue_namespaceObject = __webpack_require__.p + "images/97cb76d69e74024f74de.svg";
;// ./src/images/arrow-orange.svg
const arrow_orange_namespaceObject = __webpack_require__.p + "images/012c701883b23af2ce44.svg";
;// ./src/images/arrow-pink.svg
const arrow_pink_namespaceObject = __webpack_require__.p + "images/18de2cf47266e23716f0.svg";
;// ./src/js/index.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


// Импорты картинок














var js_images = {
  it: it_namespaceObject,
  marketing: marketing_namespaceObject,
  creative: creative_namespaceObject,
  medicine: medicine_namespaceObject,
  finance: finance_namespaceObject,
  accurate: accurate_namespaceObject,
  humanitarian: humanitarian_namespaceObject,
  construction: construction_namespaceObject,
  education: education_namespaceObject,
  eco: eco_namespaceObject
};
document.addEventListener('DOMContentLoaded', function () {
  var banner = document.getElementById('banner-bg');
  var bannerImage = document.querySelector('.banner-image');
  var bannerTitle = document.getElementById('banner-title');
  var bannerDesc = document.getElementById('banner-desc');
  var bannerSteps = document.getElementById('banner-steps');
  var categories = document.querySelectorAll('.cat-item');
  if (banner && bannerImage && bannerTitle) {
    var defaultImageSrc = comp_namespaceObject;
    var defaultTitle = bannerTitle.innerHTML;
    categories.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        var imgKey = this.getAttribute('data-img');
        var color = this.getAttribute('data-color');
        var title = this.getAttribute('data-title');
        var desc = this.getAttribute('data-desc');
        this.style.color = color;
        banner.style.background = color;
        if (js_images[imgKey]) {
          bannerImage.src = js_images[imgKey];
          bannerImage.classList.add('zoom-active');
        }
        if (bannerSteps) bannerSteps.style.display = 'none';
        if (bannerDesc) {
          bannerDesc.style.display = 'block';
          bannerDesc.textContent = desc;
        }
        if (bannerTitle) bannerTitle.textContent = title;
      });
      item.addEventListener('mouseleave', function () {
        this.style.color = '';
        banner.style.background = '';
        bannerImage.src = defaultImageSrc;
        bannerImage.classList.remove('zoom-active');
        if (bannerSteps) bannerSteps.style.display = 'block';
        if (bannerDesc) bannerDesc.style.display = 'none';
        if (bannerTitle) bannerTitle.innerHTML = defaultTitle;
      });
    });
  }

  // --- ЛОГИКА СЛАЙДЕРА
  var track = document.getElementById('sliderTrack');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var pageNums = document.querySelectorAll('.page-num');
  if (track && prevBtn && nextBtn && pageNums.length > 0) {
    var goToSlide = function goToSlide(index) {
      if (index < 0 || index >= totalSlides) return;
      currentIndex = index;
      track.style.transform = "translateX(-".concat(currentIndex * 100, "vw)");
      pageNums.forEach(function (num) {
        return num.classList.remove('active');
      });
      pageNums[currentIndex].classList.add('active');
    };
    var currentIndex = 0;
    var totalSlides = 4;
    prevBtn.addEventListener('click', function () {
      return goToSlide(currentIndex - 1);
    });
    nextBtn.addEventListener('click', function () {
      return goToSlide(currentIndex + 1);
    });
    pageNums.forEach(function (num) {
      num.addEventListener('click', function (e) {
        var index = parseInt(e.target.getAttribute('data-index'));
        if (!isNaN(index)) goToSlide(index);
      });
    });
  }

  // --- ЛОГИКА ГОРИЗОНТАЛЬНОЙ ПРОКРУТКИ ---
  var cardsGrid = document.querySelector('.cards-grid');
  if (cardsGrid) {
    cardsGrid.addEventListener('wheel', function (event) {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      event.preventDefault();
      cardsGrid.scrollLeft += event.deltaY;
    }, {
      passive: false
    });
  }
  // 2 слайд
  var imageMap = {
    "[ Маркетинг и PR ]": marketing_namespaceObject,
    "[ Медицина ]": medicine_namespaceObject,
    "[ Креативные индустрии ]": creative_namespaceObject,
    "[ Финансы ]": finance_namespaceObject,
    "[ Образование ]": education_namespaceObject,
    "[ Естественные науки ]": humanitarian_namespaceObject,
    "[ IT ]": it_namespaceObject,
    "[ Точные науки ]": accurate_namespaceObject,
    "[ Экология ]": eco_namespaceObject
  };
  var tags = document.querySelectorAll('.tag');
  var activeImg = null;
  tags.forEach(function (tag) {
    // 1. ПРИ НАВЕДЕНИИ
    tag.addEventListener('mouseenter', function () {
      var slide = this.closest('.two-slide');
      var logo = slide.querySelector('.hero-logo');
      var text = slide.querySelector('.hero-text');
      var tagText = this.innerText.trim();

      // Скрываем лого и текст (добавляем класс)
      if (logo) logo.classList.add('is-hidden');
      if (text) text.classList.add('is-hidden');

      // Удаляем старую картинку, если она была (для безопасности)
      if (activeImg) activeImg.remove();

      // Создаем новую картинку
      var img = document.createElement('img');
      img.src = imageMap[tagText] || "";
      img.className = 'dynamic-parallax-img';
      slide.appendChild(img);
      activeImg = img;
    });
    tag.addEventListener('mouseleave', function () {
      var slide = this.closest('.two-slide');
      var logo = slide.querySelector('.hero-logo');
      var text = slide.querySelector('.hero-text');
      if (logo) logo.classList.remove('is-hidden');
      if (text) text.classList.remove('is-hidden');
      if (activeImg) {
        activeImg.remove();
        activeImg = null;
      }
    });
  });

  // 3. ПАРАЛЛАКС

  window.addEventListener('mousemove', function (e) {
    if (!activeImg) return;
    var centerX = window.innerWidth / 4; // Центрируем по левой части
    var centerY = window.innerHeight / 2;
    var moveX = (e.clientX - centerX) / 20;
    var moveY = (e.clientY - centerY) / 20;
    activeImg.style.transform = "rotateY(".concat(moveX, "deg) rotateX(").concat(-moveY, "deg)");
  });

  // 3 слайд

  var logoContainer = document.querySelector(".three-hero-logo");
  var heroText = document.querySelector(".three-hero-loz");
  var arrowImg = document.querySelector(".three-big-arrow img");
  if (!logoContainer || !heroText || !arrowImg) return;
  var objects = {
    kepka: document.querySelector(".kepka"),
    hat: document.querySelector(".hat"),
    bag: document.querySelector(".bag")
  };
  var hasObjects = Object.values(objects).some(function (el) {
    return el !== null;
  });
  if (!hasObjects) return;
  var defaultState = {
    logoHTML: logoContainer.innerHTML,
    text: heroText.innerText,
    arrowSrc: arrowImg.getAttribute("src")
  };
  var contentMap = {
    kepka: {
      title: "ШКОЛЬНИК",
      text: "Узнай, какие сферы существуют, где тебе может быть интересно",
      arrow: arrow_blue_namespaceObject
    },
    hat: {
      title: "АБИТУРИЕНТ",
      text: "Определи, какие профессии и форматы работы тебе подходят",
      arrow: arrow_orange_namespaceObject
    },
    bag: {
      title: "КАРЬЕРА-СВИТЧЕР",
      text: "Пойми, в каком рабочем формате ты раскрываешься лучше всего",
      arrow: arrow_pink_namespaceObject
    }
  };
  var style = document.createElement("style");
  style.innerHTML = "\n        .glass-obj { transition: transform 0.3s ease, filter 0.3s ease; cursor: pointer; }\n        .glass-obj:hover { transform: scale(1.05); filter: drop-shadow(0 0 15px rgba(150, 255, 150, 0.6)); }\n        .dynamic-title { \n            font-family: 'Akzidenzgroteskpro', sans-serif;\n            font-size: 2vw; \n            font-weight: 800; \n            text-transform: uppercase; \n            margin-left: 10vw;\n            margin: 0;\n            line-height: 0.9;\n            display: block;\n            min-width: 20vw; \n        }\n    ";
  document.head.appendChild(style);

  // 5. Функция смены контента
  function updateContent(type) {
    if (type && contentMap[type]) {
      var data = contentMap[type];
      logoContainer.innerHTML = "<span class=\"dynamic-title\">".concat(data.title, "</span>");
      heroText.innerText = data.text;
      arrowImg.src = data.arrow;
      arrowImg.style.filter = "none";
    } else {
      logoContainer.innerHTML = defaultState.logoHTML;
      heroText.innerText = defaultState.text;
      arrowImg.src = defaultState.arrowSrc;
    }
  }
  Object.entries(objects).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      el = _ref2[1];
    if (el) {
      el.addEventListener("mouseenter", function () {
        return updateContent(key);
      });
      el.addEventListener("mouseleave", function () {
        return updateContent(null);
      });
    }
  });

  // 4 слайд

  // фильтрация
});
/******/ })()
;