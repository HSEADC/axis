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
;// ./src/js/index.js

console.log('hey');











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
  var categories = document.querySelectorAll('.cat-item');
  var banner = document.getElementById('banner-bg');
  var bannerImage = document.querySelector('.banner-image');
  var bannerTitle = document.getElementById('banner-title');
  var bannerDesc = document.getElementById('banner-desc');
  var bannerSteps = document.getElementById('banner-steps');
  var defaultImageSrc = comp_namespaceObject; // Используем импортированную картинку
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
  var track = document.getElementById('sliderTrack');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var pageNums = document.querySelectorAll('.page-num');
  var currentIndex = 0;
  var totalSlides = 4; // Количество слайдов

  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentIndex = index;

    // Сдвигаем трек на 100vw влево за каждый индекс
    track.style.transform = "translateX(-".concat(currentIndex * 100, "vw)");

    // Меняем активные скобки у цифр пагинации
    pageNums.forEach(function (num) {
      return num.classList.remove('active');
    });
    pageNums[currentIndex].classList.add('active');
  }

  // Клик по стрелкам
  prevBtn.addEventListener('click', function () {
    return goToSlide(currentIndex - 1);
  });
  nextBtn.addEventListener('click', function () {
    return goToSlide(currentIndex + 1);
  });

  // Клик по цифрам (1, 2, 3, 4)
  pageNums.forEach(function (num) {
    num.addEventListener('click', function (e) {
      var index = parseInt(e.target.getAttribute('data-index'));
      goToSlide(index);
    });
  });
});
/******/ })()
;