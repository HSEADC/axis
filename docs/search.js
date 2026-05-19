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
  function initSearch() {
    var searchInput = document.querySelector('.search-input');
    var cards = document.querySelectorAll('.card-filter');
    var noResults = document.querySelector('.no-results');
    if (!searchInput || cards.length === 0) return;
    function applySearch(query) {
      var q = query.trim().toLowerCase();
      var visibleCount = 0;
      cards.forEach(function (card) {
        // Ищем по data-name (ключевые слова) и по видимому тексту карточки
        var keywords = (card.getAttribute('data-name') || '').toLowerCase();
        var text = card.textContent.toLowerCase();
        var matches = !q || keywords.includes(q) || text.includes(q);
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      // Показываем «ничего не найдено», если есть такой элемент
      if (noResults) {
        noResults.style.display = visibleCount === 0 ? '' : 'none';
      }
    }

    // Фильтр в реальном времени при вводе
    searchInput.addEventListener('input', function () {
      return applySearch(searchInput.value);
    });

    // Поиск по кнопке / Enter
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') applySearch(searchInput.value);
    });
    var searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', function () {
        return applySearch(searchInput.value);
      });
    }

    // Сброс поиска при очистке поля
    searchInput.addEventListener('search', function () {
      return applySearch('');
    });
  }
  initHorizontalScroll();
  initFilter();
  initSearch();
});
/******/ })()
;