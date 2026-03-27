/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function initHorizontalScroll() {
    var cardsGrid = document.querySelector('.cards-grid');
    if (!cardsGrid) return;
    cardsGrid.addEventListener('wheel', function (event) {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      event.preventDefault();
      cardsGrid.scrollLeft += event.deltaY;
    }, {
      passive: false
    });
  }
  function initFilter() {
    var filterButtons = document.querySelectorAll('.btn-filter');
    var cards = document.querySelectorAll('.card-filter');
    if (filterButtons.length === 0 || cards.length === 0) return;
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        var filterValue = button.getAttribute('data-filter');
        if (!filterValue) return;
        filterButtons.forEach(function (btn) {
          return btn.classList.remove('active');
        });
        button.classList.add('active');
        cards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  initHorizontalScroll();
  initFilter();
});
/******/ })()
;