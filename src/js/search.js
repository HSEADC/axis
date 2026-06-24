import '../css/style.css';

document.addEventListener("DOMContentLoaded", function () {

    function initHorizontalScroll() {
        const cardsGrid = document.querySelector('.cards-grid');

        if (!cardsGrid) return;

        cardsGrid.addEventListener('wheel', function(event) {
            if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

            event.preventDefault();
            cardsGrid.scrollLeft += event.deltaY;
        }, { passive: false });
    }


    function initFilter() {
        const filterButtons = document.querySelectorAll('.btn-filter');
        const cards = document.querySelectorAll('.card-filter');

        if (filterButtons.length === 0 || cards.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const filterValue = button.getAttribute('data-filter');
                if (!filterValue) return;

                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                cards.forEach(card => {
                    const category = card.getAttribute('data-category');
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
        const searchInput = document.querySelector('.search-input');
        const cards = document.querySelectorAll('.card-filter');
        const noResults = document.querySelector('.no-results');

        if (!searchInput || cards.length === 0) return;

        function applySearch(query) {
            const q = query.trim().toLowerCase();
            let visibleCount = 0;

            cards.forEach(card => {
                // Ищем по data-name (ключевые слова) и по видимому тексту карточки
                const keywords = (card.getAttribute('data-name') || '').toLowerCase();
                const text = card.textContent.toLowerCase();
                const matches = !q || keywords.includes(q) || text.includes(q);

                card.style.display = matches ? '' : 'none';
                if (matches) visibleCount++;
            });


            if (noResults) {
                noResults.style.display = visibleCount === 0 ? '' : 'none';
            }
        }


        searchInput.addEventListener('input', () => applySearch(searchInput.value));


        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') applySearch(searchInput.value);
        });

        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => applySearch(searchInput.value));
        }


        searchInput.addEventListener('search', () => applySearch(''));
    }

    initHorizontalScroll();
    initFilter();
    initSearch();
});