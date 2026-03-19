/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

addEventListener("DOMContentLoaded", function () {
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
});
/******/ })()
;