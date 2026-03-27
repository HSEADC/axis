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

    initHorizontalScroll();
    initFilter();
});