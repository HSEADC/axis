/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css"
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/images/accurate.webp"
/*!**********************************!*\
  !*** ./src/images/accurate.webp ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/567d146190b668fe7796.webp";

/***/ },

/***/ "./src/images/comp.png"
/*!*****************************!*\
  !*** ./src/images/comp.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/b6e55ec5098a96dbf76a.png";

/***/ },

/***/ "./src/images/construction.webp"
/*!**************************************!*\
  !*** ./src/images/construction.webp ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/899290fc4440aa49b11d.webp";

/***/ },

/***/ "./src/images/creative.webp"
/*!**********************************!*\
  !*** ./src/images/creative.webp ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7e699f162b9288c62dfc.webp";

/***/ },

/***/ "./src/images/eco.webp"
/*!*****************************!*\
  !*** ./src/images/eco.webp ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/66e26fbddafd88e206a3.webp";

/***/ },

/***/ "./src/images/education.webp"
/*!***********************************!*\
  !*** ./src/images/education.webp ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/0801c91f2867e3c6397c.webp";

/***/ },

/***/ "./src/images/finance.webp"
/*!*********************************!*\
  !*** ./src/images/finance.webp ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/c025164ec89f2b660a11.webp";

/***/ },

/***/ "./src/images/humanitarian.webp"
/*!**************************************!*\
  !*** ./src/images/humanitarian.webp ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/55bba355fd0b6e1e4543.webp";

/***/ },

/***/ "./src/images/it.webp"
/*!****************************!*\
  !*** ./src/images/it.webp ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/0f89d13af1a5ea411444.webp";

/***/ },

/***/ "./src/images/marketing.webp"
/*!***********************************!*\
  !*** ./src/images/marketing.webp ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/ee3061cc7b467fdee93a.webp";

/***/ },

/***/ "./src/images/medicine.webp"
/*!**********************************!*\
  !*** ./src/images/medicine.webp ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/91b34843427e98bac45b.webp";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _images_it_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/it.webp */ "./src/images/it.webp");
/* harmony import */ var _images_marketing_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/marketing.webp */ "./src/images/marketing.webp");
/* harmony import */ var _images_creative_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/creative.webp */ "./src/images/creative.webp");
/* harmony import */ var _images_medicine_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/medicine.webp */ "./src/images/medicine.webp");
/* harmony import */ var _images_finance_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/finance.webp */ "./src/images/finance.webp");
/* harmony import */ var _images_accurate_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/accurate.webp */ "./src/images/accurate.webp");
/* harmony import */ var _images_humanitarian_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/humanitarian.webp */ "./src/images/humanitarian.webp");
/* harmony import */ var _images_construction_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/construction.webp */ "./src/images/construction.webp");
/* harmony import */ var _images_education_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/education.webp */ "./src/images/education.webp");
/* harmony import */ var _images_eco_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/eco.webp */ "./src/images/eco.webp");
/* harmony import */ var _images_comp_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/comp.png */ "./src/images/comp.png");

<<<<<<< HEAD
console.log("hey");
=======
console.log('hey');
>>>>>>> main











var images = {
  it: _images_it_webp__WEBPACK_IMPORTED_MODULE_1__,
  marketing: _images_marketing_webp__WEBPACK_IMPORTED_MODULE_2__,
  creative: _images_creative_webp__WEBPACK_IMPORTED_MODULE_3__,
  medicine: _images_medicine_webp__WEBPACK_IMPORTED_MODULE_4__,
  finance: _images_finance_webp__WEBPACK_IMPORTED_MODULE_5__,
  accurate: _images_accurate_webp__WEBPACK_IMPORTED_MODULE_6__,
  humanitarian: _images_humanitarian_webp__WEBPACK_IMPORTED_MODULE_7__,
  construction: _images_construction_webp__WEBPACK_IMPORTED_MODULE_8__,
  education: _images_education_webp__WEBPACK_IMPORTED_MODULE_9__,
  eco: _images_eco_webp__WEBPACK_IMPORTED_MODULE_10__
};
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  var categories = document.querySelectorAll(".cat-item");
  var banner = document.getElementById("banner-bg");
  var bannerImage = document.querySelector(".banner-image");
  var bannerTitle = document.getElementById("banner-title");
  var bannerDesc = document.getElementById("banner-desc");
  var bannerSteps = document.getElementById("banner-steps");
  var defaultImageSrc = _images_comp_png__WEBPACK_IMPORTED_MODULE_11__; // Используем импортированную картинку
  var defaultTitle = bannerTitle.innerHTML;
  categories.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var imgKey = this.getAttribute("data-img");
      var color = this.getAttribute("data-color");
      var title = this.getAttribute("data-title");
      var desc = this.getAttribute("data-desc");
=======
document.addEventListener('DOMContentLoaded', function () {
  var categories = document.querySelectorAll('.cat-item');
  var banner = document.getElementById('banner-bg');
  var bannerImage = document.querySelector('.banner-image');
  var bannerTitle = document.getElementById('banner-title');
  var bannerDesc = document.getElementById('banner-desc');
  var bannerSteps = document.getElementById('banner-steps');
  var defaultImageSrc = _images_comp_png__WEBPACK_IMPORTED_MODULE_11__; // Используем импортированную картинку
  var defaultTitle = bannerTitle.innerHTML;
  categories.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      var imgKey = this.getAttribute('data-img');
      var color = this.getAttribute('data-color');
      var title = this.getAttribute('data-title');
      var desc = this.getAttribute('data-desc');
>>>>>>> main
      this.style.color = color;
      banner.style.background = color;
      if (images[imgKey]) {
        bannerImage.src = images[imgKey];
<<<<<<< HEAD
        bannerImage.classList.add("zoom-active");
      }
      if (bannerSteps) bannerSteps.style.display = "none";
      if (bannerDesc) {
        bannerDesc.style.display = "block";
=======
        bannerImage.classList.add('zoom-active');
      }
      if (bannerSteps) bannerSteps.style.display = 'none';
      if (bannerDesc) {
        bannerDesc.style.display = 'block';
>>>>>>> main
        bannerDesc.textContent = desc;
      }
      if (bannerTitle) bannerTitle.textContent = title;
    });
<<<<<<< HEAD
    item.addEventListener("mouseleave", function () {
      this.style.color = "";
      banner.style.background = "";
      bannerImage.src = defaultImageSrc;
      bannerImage.classList.remove("zoom-active");
      if (bannerSteps) bannerSteps.style.display = "block";
      if (bannerDesc) bannerDesc.style.display = "none";
=======
    item.addEventListener('mouseleave', function () {
      this.style.color = '';
      banner.style.background = '';
      bannerImage.src = defaultImageSrc;
      bannerImage.classList.remove('zoom-active');
      if (bannerSteps) bannerSteps.style.display = 'block';
      if (bannerDesc) bannerDesc.style.display = 'none';
>>>>>>> main
      if (bannerTitle) bannerTitle.innerHTML = defaultTitle;
    });
  });
});
})();

/******/ })()
;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxFQUFFO1FBQ2xCVixXQUFXLENBQUNpQixHQUFHLEdBQUdsQyxNQUFNLENBQUMyQixNQUFNLENBQUM7UUFDaENWLFdBQVcsQ0FBQ2tCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUMxQztNQUVBLElBQUlmLFdBQVcsRUFBRUEsV0FBVyxDQUFDVyxLQUFLLENBQUNLLE9BQU8sR0FBRyxNQUFNO01BRW5ELElBQUlqQixVQUFVLEVBQUU7UUFDZEEsVUFBVSxDQUFDWSxLQUFLLENBQUNLLE9BQU8sR0FBRyxPQUFPO1FBQ2xDakIsVUFBVSxDQUFDa0IsV0FBVyxHQUFHUCxJQUFJO01BQy9CO01BRUEsSUFBSVosV0FBVyxFQUFFQSxXQUFXLENBQUNtQixXQUFXLEdBQUdSLEtBQUs7SUFDbEQsQ0FBQyxDQUFDO0lBRUZKLElBQUksQ0FBQ2QsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVk7TUFDOUMsSUFBSSxDQUFDb0IsS0FBSyxDQUFDSCxLQUFLLEdBQUcsRUFBRTtNQUNyQmQsTUFBTSxDQUFDaUIsS0FBSyxDQUFDQyxVQUFVLEdBQUcsRUFBRTtNQUM1QmhCLFdBQVcsQ0FBQ2lCLEdBQUcsR0FBR1osZUFBZTtNQUVqQ0wsV0FBVyxDQUFDa0IsU0FBUyxDQUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzNDLElBQUlsQixXQUFXLEVBQUVBLFdBQVcsQ0FBQ1csS0FBSyxDQUFDSyxPQUFPLEdBQUcsT0FBTztNQUNwRCxJQUFJakIsVUFBVSxFQUFFQSxVQUFVLENBQUNZLEtBQUssQ0FBQ0ssT0FBTyxHQUFHLE1BQU07TUFDakQsSUFBSWxCLFdBQVcsRUFBRUEsV0FBVyxDQUFDSyxTQUFTLEdBQUdELFlBQVk7SUFDdkQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2Rpa2kvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jb2Rpa2kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kaWtpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kaWtpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kaWtpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGlraS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcblxuY29uc29sZS5sb2coXCJoZXlcIik7XG5cbmltcG9ydCBpdEltZyBmcm9tIFwiLi4vaW1hZ2VzL2l0LndlYnBcIjtcbmltcG9ydCBtYXJrZXRpbmdJbWcgZnJvbSBcIi4uL2ltYWdlcy9tYXJrZXRpbmcud2VicFwiO1xuaW1wb3J0IGNyZWF0aXZlSW1nIGZyb20gXCIuLi9pbWFnZXMvY3JlYXRpdmUud2VicFwiO1xuaW1wb3J0IG1lZGljaW5lSW1nIGZyb20gXCIuLi9pbWFnZXMvbWVkaWNpbmUud2VicFwiO1xuaW1wb3J0IGZpbmFuY2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9maW5hbmNlLndlYnBcIjtcbmltcG9ydCBhY2N1cmF0ZUltZyBmcm9tIFwiLi4vaW1hZ2VzL2FjY3VyYXRlLndlYnBcIjtcbmltcG9ydCBodW1hbml0YXJpYW5JbWcgZnJvbSBcIi4uL2ltYWdlcy9odW1hbml0YXJpYW4ud2VicFwiO1xuaW1wb3J0IGNvbnN0cnVjdGlvbkltZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbnN0cnVjdGlvbi53ZWJwXCI7XG5pbXBvcnQgZWR1Y2F0aW9uSW1nIGZyb20gXCIuLi9pbWFnZXMvZWR1Y2F0aW9uLndlYnBcIjtcbmltcG9ydCBlY29JbWcgZnJvbSBcIi4uL2ltYWdlcy9lY28ud2VicFwiO1xuaW1wb3J0IGNvbXB1dGVySW1nIGZyb20gXCIuLi9pbWFnZXMvY29tcC5wbmdcIjtcblxuY29uc3QgaW1hZ2VzID0ge1xuICBpdDogaXRJbWcsXG4gIG1hcmtldGluZzogbWFya2V0aW5nSW1nLFxuICBjcmVhdGl2ZTogY3JlYXRpdmVJbWcsXG4gIG1lZGljaW5lOiBtZWRpY2luZUltZyxcbiAgZmluYW5jZTogZmluYW5jZUltZyxcbiAgYWNjdXJhdGU6IGFjY3VyYXRlSW1nLFxuICBodW1hbml0YXJpYW46IGh1bWFuaXRhcmlhbkltZyxcbiAgY29uc3RydWN0aW9uOiBjb25zdHJ1Y3Rpb25JbWcsXG4gIGVkdWNhdGlvbjogZWR1Y2F0aW9uSW1nLFxuICBlY286IGVjb0ltZyxcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0LWl0ZW1cIik7XG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyLWJnXCIpO1xuICBjb25zdCBiYW5uZXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyLWltYWdlXCIpO1xuXG4gIGNvbnN0IGJhbm5lclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXItdGl0bGVcIik7XG4gIGNvbnN0IGJhbm5lckRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lci1kZXNjXCIpO1xuICBjb25zdCBiYW5uZXJTdGVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyLXN0ZXBzXCIpO1xuXG4gIGNvbnN0IGRlZmF1bHRJbWFnZVNyYyA9IGNvbXB1dGVySW1nOyAvLyDQmNGB0L/QvtC70YzQt9GD0LXQvCDQuNC80L/QvtGA0YLQuNGA0L7QstCw0L3QvdGD0Y4g0LrQsNGA0YLQuNC90LrRg1xuICBjb25zdCBkZWZhdWx0VGl0bGUgPSBiYW5uZXJUaXRsZS5pbm5lckhUTUw7XG5cbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpbWdLZXkgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtaW1nXCIpO1xuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiKTtcbiAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtZGVzY1wiKTtcblxuICAgICAgdGhpcy5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXG4gICAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuXG4gICAgICBpZiAoaW1hZ2VzW2ltZ0tleV0pIHtcbiAgICAgICAgYmFubmVySW1hZ2Uuc3JjID0gaW1hZ2VzW2ltZ0tleV07XG4gICAgICAgIGJhbm5lckltYWdlLmNsYXNzTGlzdC5hZGQoXCJ6b29tLWFjdGl2ZVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJhbm5lclN0ZXBzKSBiYW5uZXJTdGVwcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgIGlmIChiYW5uZXJEZXNjKSB7XG4gICAgICAgIGJhbm5lckRlc2Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgYmFubmVyRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChiYW5uZXJUaXRsZSkgYmFubmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XG4gICAgICBiYW5uZXJJbWFnZS5zcmMgPSBkZWZhdWx0SW1hZ2VTcmM7XG5cbiAgICAgIGJhbm5lckltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJ6b29tLWFjdGl2ZVwiKTtcbiAgICAgIGlmIChiYW5uZXJTdGVwcykgYmFubmVyU3RlcHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGlmIChiYW5uZXJEZXNjKSBiYW5uZXJEZXNjLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGlmIChiYW5uZXJUaXRsZSkgYmFubmVyVGl0bGUuaW5uZXJIVE1MID0gZGVmYXVsdFRpdGxlO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJpdEltZyIsIm1hcmtldGluZ0ltZyIsImNyZWF0aXZlSW1nIiwibWVkaWNpbmVJbWciLCJmaW5hbmNlSW1nIiwiYWNjdXJhdGVJbWciLCJodW1hbml0YXJpYW5JbWciLCJjb25zdHJ1Y3Rpb25JbWciLCJlZHVjYXRpb25JbWciLCJlY29JbWciLCJjb21wdXRlckltZyIsImltYWdlcyIsIml0IiwibWFya2V0aW5nIiwiY3JlYXRpdmUiLCJtZWRpY2luZSIsImZpbmFuY2UiLCJhY2N1cmF0ZSIsImh1bWFuaXRhcmlhbiIsImNvbnN0cnVjdGlvbiIsImVkdWNhdGlvbiIsImVjbyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhdGVnb3JpZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmFubmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJiYW5uZXJJbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJiYW5uZXJUaXRsZSIsImJhbm5lckRlc2MiLCJiYW5uZXJTdGVwcyIsImRlZmF1bHRJbWFnZVNyYyIsImRlZmF1bHRUaXRsZSIsImlubmVySFRNTCIsImZvckVhY2giLCJpdGVtIiwiaW1nS2V5IiwiZ2V0QXR0cmlidXRlIiwiY29sb3IiLCJ0aXRsZSIsImRlc2MiLCJzdHlsZSIsImJhY2tncm91bmQiLCJzcmMiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxFQUFFO1FBQ2hCVixXQUFXLENBQUNpQixHQUFHLEdBQUdsQyxNQUFNLENBQUMyQixNQUFNLENBQUM7UUFDaENWLFdBQVcsQ0FBQ2tCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUM1QztNQUlBLElBQUdmLFdBQVcsRUFBRUEsV0FBVyxDQUFDVyxLQUFLLENBQUNLLE9BQU8sR0FBRyxNQUFNO01BRWxELElBQUdqQixVQUFVLEVBQUU7UUFDWEEsVUFBVSxDQUFDWSxLQUFLLENBQUNLLE9BQU8sR0FBRyxPQUFPO1FBQ2xDakIsVUFBVSxDQUFDa0IsV0FBVyxHQUFHUCxJQUFJO01BQ2pDO01BRUEsSUFBR1osV0FBVyxFQUFFQSxXQUFXLENBQUNtQixXQUFXLEdBQUdSLEtBQUs7SUFDbkQsQ0FBQyxDQUFDO0lBR0ZKLElBQUksQ0FBQ2QsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVc7TUFDM0MsSUFBSSxDQUFDb0IsS0FBSyxDQUFDSCxLQUFLLEdBQUcsRUFBRTtNQUNyQmQsTUFBTSxDQUFDaUIsS0FBSyxDQUFDQyxVQUFVLEdBQUcsRUFBRTtNQUM1QmhCLFdBQVcsQ0FBQ2lCLEdBQUcsR0FBR1osZUFBZTtNQUVqQ0wsV0FBVyxDQUFDa0IsU0FBUyxDQUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzNDLElBQUdsQixXQUFXLEVBQUVBLFdBQVcsQ0FBQ1csS0FBSyxDQUFDSyxPQUFPLEdBQUcsT0FBTztNQUNuRCxJQUFHakIsVUFBVSxFQUFFQSxVQUFVLENBQUNZLEtBQUssQ0FBQ0ssT0FBTyxHQUFHLE1BQU07TUFDaEQsSUFBR2xCLFdBQVcsRUFBRUEsV0FBVyxDQUFDSyxTQUFTLEdBQUdELFlBQVk7SUFDeEQsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2Rpa2kvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jb2Rpa2kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kaWtpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kaWtpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kaWtpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGlraS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcydcblxuY29uc29sZS5sb2coJ2hleScpXG5cblxuaW1wb3J0IGl0SW1nIGZyb20gJy4uL2ltYWdlcy9pdC53ZWJwJztcbmltcG9ydCBtYXJrZXRpbmdJbWcgZnJvbSAnLi4vaW1hZ2VzL21hcmtldGluZy53ZWJwJztcbmltcG9ydCBjcmVhdGl2ZUltZyBmcm9tICcuLi9pbWFnZXMvY3JlYXRpdmUud2VicCc7XG5pbXBvcnQgbWVkaWNpbmVJbWcgZnJvbSAnLi4vaW1hZ2VzL21lZGljaW5lLndlYnAnO1xuaW1wb3J0IGZpbmFuY2VJbWcgZnJvbSAnLi4vaW1hZ2VzL2ZpbmFuY2Uud2VicCc7XG5pbXBvcnQgYWNjdXJhdGVJbWcgZnJvbSAnLi4vaW1hZ2VzL2FjY3VyYXRlLndlYnAnO1xuaW1wb3J0IGh1bWFuaXRhcmlhbkltZyBmcm9tICcuLi9pbWFnZXMvaHVtYW5pdGFyaWFuLndlYnAnO1xuaW1wb3J0IGNvbnN0cnVjdGlvbkltZyBmcm9tICcuLi9pbWFnZXMvY29uc3RydWN0aW9uLndlYnAnO1xuaW1wb3J0IGVkdWNhdGlvbkltZyBmcm9tICcuLi9pbWFnZXMvZWR1Y2F0aW9uLndlYnAnO1xuaW1wb3J0IGVjb0ltZyBmcm9tICcuLi9pbWFnZXMvZWNvLndlYnAnO1xuaW1wb3J0IGNvbXB1dGVySW1nIGZyb20gJy4uL2ltYWdlcy9jb21wLnBuZyc7XG5cblxuY29uc3QgaW1hZ2VzID0ge1xuICAgIGl0OiBpdEltZyxcbiAgICBtYXJrZXRpbmc6IG1hcmtldGluZ0ltZyxcbiAgICBjcmVhdGl2ZTogY3JlYXRpdmVJbWcsXG4gICAgbWVkaWNpbmU6IG1lZGljaW5lSW1nLFxuICAgIGZpbmFuY2U6IGZpbmFuY2VJbWcsXG4gICAgYWNjdXJhdGU6IGFjY3VyYXRlSW1nLFxuICAgIGh1bWFuaXRhcmlhbjogaHVtYW5pdGFyaWFuSW1nLFxuICAgIGNvbnN0cnVjdGlvbjogY29uc3RydWN0aW9uSW1nLFxuICAgIGVkdWNhdGlvbjogZWR1Y2F0aW9uSW1nLFxuICAgIGVjbzogZWNvSW1nXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0LWl0ZW0nKTtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyLWJnJyk7XG4gICAgY29uc3QgYmFubmVySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyLWltYWdlJyk7XG5cblxuICAgIGNvbnN0IGJhbm5lclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lci10aXRsZScpO1xuICAgIGNvbnN0IGJhbm5lckRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyLWRlc2MnKTtcbiAgICBjb25zdCBiYW5uZXJTdGVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXItc3RlcHMnKTtcblxuXG4gICAgY29uc3QgZGVmYXVsdEltYWdlU3JjID0gY29tcHV0ZXJJbWc7IC8vINCY0YHQv9C+0LvRjNC30YPQtdC8INC40LzQv9C+0YDRgtC40YDQvtCy0LDQvdC90YPRjiDQutCw0YDRgtC40L3QutGDXG4gICAgY29uc3QgZGVmYXVsdFRpdGxlID0gYmFubmVyVGl0bGUuaW5uZXJIVE1MO1xuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBpbWdLZXkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZXNjJyk7XG5cblxuICAgICAgICAgICAgdGhpcy5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXG5cbiAgICAgICAgICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG5cblxuICAgICAgICAgICAgaWYgKGltYWdlc1tpbWdLZXldKSB7XG4gICAgICAgICAgICAgICAgYmFubmVySW1hZ2Uuc3JjID0gaW1hZ2VzW2ltZ0tleV07XG4gICAgICAgICAgICAgICAgYmFubmVySW1hZ2UuY2xhc3NMaXN0LmFkZCgnem9vbS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIGlmKGJhbm5lclN0ZXBzKSBiYW5uZXJTdGVwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBpZihiYW5uZXJEZXNjKSB7XG4gICAgICAgICAgICAgICAgYmFubmVyRGVzYy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBiYW5uZXJEZXNjLnRleHRDb250ZW50ID0gZGVzYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYmFubmVyVGl0bGUpIGJhbm5lclRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgICAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICAgICAgYmFubmVySW1hZ2Uuc3JjID0gZGVmYXVsdEltYWdlU3JjO1xuXG4gICAgICAgICAgICBiYW5uZXJJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCd6b29tLWFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoYmFubmVyU3RlcHMpIGJhbm5lclN0ZXBzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgaWYoYmFubmVyRGVzYykgYmFubmVyRGVzYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYoYmFubmVyVGl0bGUpIGJhbm5lclRpdGxlLmlubmVySFRNTCA9IGRlZmF1bHRUaXRsZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIml0SW1nIiwibWFya2V0aW5nSW1nIiwiY3JlYXRpdmVJbWciLCJtZWRpY2luZUltZyIsImZpbmFuY2VJbWciLCJhY2N1cmF0ZUltZyIsImh1bWFuaXRhcmlhbkltZyIsImNvbnN0cnVjdGlvbkltZyIsImVkdWNhdGlvbkltZyIsImVjb0ltZyIsImNvbXB1dGVySW1nIiwiaW1hZ2VzIiwiaXQiLCJtYXJrZXRpbmciLCJjcmVhdGl2ZSIsIm1lZGljaW5lIiwiZmluYW5jZSIsImFjY3VyYXRlIiwiaHVtYW5pdGFyaWFuIiwiY29uc3RydWN0aW9uIiwiZWR1Y2F0aW9uIiwiZWNvIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2F0ZWdvcmllcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiYW5uZXIiLCJnZXRFbGVtZW50QnlJZCIsImJhbm5lckltYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbm5lclRpdGxlIiwiYmFubmVyRGVzYyIsImJhbm5lclN0ZXBzIiwiZGVmYXVsdEltYWdlU3JjIiwiZGVmYXVsdFRpdGxlIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsIml0ZW0iLCJpbWdLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsInRpdGxlIiwiZGVzYyIsInN0eWxlIiwiYmFja2dyb3VuZCIsInNyYyIsImNsYXNzTGlzdCIsImFkZCIsImRpc3BsYXkiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> main
