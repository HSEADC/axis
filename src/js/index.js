import '../css/style.css'

// Импорты картинок
import itImg from '../images/it.webp';
import marketingImg from '../images/marketing.webp';
import creativeImg from '../images/creative.webp';
import medicineImg from '../images/medicine.webp';
import financeImg from '../images/finance.webp';
import accurateImg from '../images/accurate.webp';
import humanitarianImg from '../images/humanitarian.webp';
import constructionImg from '../images/construction.webp';
import educationImg from '../images/education.webp';
import ecoImg from '../images/eco.webp';
import computerImg from '../images/comp.png';

const images = {
    it: itImg, marketing: marketingImg, creative: creativeImg, medicine: medicineImg,
    finance: financeImg, accurate: accurateImg, humanitarian: humanitarianImg,
    construction: constructionImg, education: educationImg, eco: ecoImg
};

document.addEventListener('DOMContentLoaded', () => {

    // --- ЛОГИКА БАННЕРА (только если есть элементы) ---
    const banner = document.getElementById('banner-bg');
    const bannerImage = document.querySelector('.banner-image');
    const bannerTitle = document.getElementById('banner-title');
    const bannerDesc = document.getElementById('banner-desc');
    const bannerSteps = document.getElementById('banner-steps');
    const categories = document.querySelectorAll('.cat-item');

    if (banner && bannerImage && bannerTitle) {
        const defaultImageSrc = computerImg;
        const defaultTitle = bannerTitle.innerHTML;

        categories.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const imgKey = this.getAttribute('data-img');
                const color = this.getAttribute('data-color');
                const title = this.getAttribute('data-title');
                const desc = this.getAttribute('data-desc');

                this.style.color = color;
                banner.style.background = color;

                if (images[imgKey]) {
                    bannerImage.src = images[imgKey];
                    bannerImage.classList.add('zoom-active');
                }

                if(bannerSteps) bannerSteps.style.display = 'none';
                if(bannerDesc) {
                    bannerDesc.style.display = 'block';
                    bannerDesc.textContent = desc;
                }
                if(bannerTitle) bannerTitle.textContent = title;
            });

            item.addEventListener('mouseleave', function() {
                this.style.color = '';
                banner.style.background = '';
                bannerImage.src = defaultImageSrc;
                bannerImage.classList.remove('zoom-active');

                if(bannerSteps) bannerSteps.style.display = 'block';
                if(bannerDesc) bannerDesc.style.display = 'none';
                if(bannerTitle) bannerTitle.innerHTML = defaultTitle;
            });
        });
    }

    // --- ЛОГИКА СЛАЙДЕРА (только если есть элементы) ---
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNums = document.querySelectorAll('.page-num');

    if (track && prevBtn && nextBtn && pageNums.length > 0) {
        let currentIndex = 0;
        const totalSlides = 4;

        function goToSlide(index) {
            if (index < 0 || index >= totalSlides) return;
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}vw)`;
            pageNums.forEach(num => num.classList.remove('active'));
            pageNums[currentIndex].classList.add('active');
        }

        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

        pageNums.forEach(num => {
            num.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                if (!isNaN(index)) goToSlide(index);
            });
        });
    }

    // --- ЛОГИКА ГОРИЗОНТАЛЬНОЙ ПРОКРУТКИ ---
    const cardsGrid = document.querySelector('.cards-grid');
    if (cardsGrid) {
        cardsGrid.addEventListener('wheel', function(event) {
            if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
            event.preventDefault();
            cardsGrid.scrollLeft += event.deltaY;
        }, { passive: false });
    }
});