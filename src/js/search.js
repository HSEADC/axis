import '../css/styleguide.css'
addEventListener("DOMContentLoaded", function (){
const cardsGrid = document.querySelector('.cards-grid');
if (cardsGrid) {
    cardsGrid.addEventListener('wheel', function(event) {
        if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
        event.preventDefault();
        cardsGrid.scrollLeft += event.deltaY;
    }, { passive: false });
}

})