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
import blueArrowIMG from '../images/arrow-blue.svg';
import OrangearrowImg from '../images/arrow-orange.svg';
import pinkarrowImg from '../images/arrow-pink.svg';

const images = {
    it: itImg, marketing: marketingImg, creative: creativeImg, medicine: medicineImg,
    finance: financeImg, accurate: accurateImg, humanitarian: humanitarianImg,
    construction: constructionImg, education: educationImg, eco: ecoImg
};

document.addEventListener('DOMContentLoaded', () => {

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

    // --- ЛОГИКА СЛАЙДЕРА
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
    // 2 слайд
    const imageMap = {
        "[ Маркетинг и PR ]": marketingImg,
        "[ Медицина ]": medicineImg,
        "[ Креативные индустрии ]": creativeImg,
        "[ Финансы ]": financeImg,
        "[ Образование ]": educationImg,
        "[ Естественные науки ]": humanitarianImg,
        "[ IT ]": itImg,
        "[ Точные науки ]": accurateImg,
        "[ Экология ]": ecoImg
    };

    const tags = document.querySelectorAll('.tag');
    let activeImg = null;

    tags.forEach(tag => {
        // 1. ПРИ НАВЕДЕНИИ
        tag.addEventListener('mouseenter', function() {
            const slide = this.closest('.two-slide');
            const logo = slide.querySelector('.hero-logo');
            const text = slide.querySelector('.hero-text');
            const tagText = this.innerText.trim();

            // Скрываем лого и текст (добавляем класс)
            if (logo) logo.classList.add('is-hidden');
            if (text) text.classList.add('is-hidden');

            // Удаляем старую картинку, если она была (для безопасности)
            if (activeImg) activeImg.remove();

            // Создаем новую картинку
            const img = document.createElement('img');
            img.src = imageMap[tagText] || "";
            img.className = 'dynamic-parallax-img';
            slide.appendChild(img);
            activeImg = img;
        });

        tag.addEventListener('mouseleave', function() {
            const slide = this.closest('.two-slide');
            const logo = slide.querySelector('.hero-logo');
            const text = slide.querySelector('.hero-text');


            if (logo) logo.classList.remove('is-hidden');
            if (text) text.classList.remove('is-hidden');


            if (activeImg) {
                activeImg.remove();
                activeImg = null;
            }
        });
    });

    // 3. ПАРАЛЛАКС

    window.addEventListener('mousemove', (e) => {
        if (!activeImg) return;

        const centerX = window.innerWidth / 4; // Центрируем по левой части
        const centerY = window.innerHeight / 2;

        const moveX = (e.clientX - centerX) / 20;
        const moveY = (e.clientY - centerY) / 20;

        activeImg.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    });

    // 3 слайд

    const logoContainer = document.querySelector(".three-hero-logo");
    const heroText = document.querySelector(".three-hero-loz");
    const arrowImg = document.querySelector(".three-big-arrow img");


    if (!logoContainer || !heroText || !arrowImg) return;


    const objects = {
        kepka: document.querySelector(".kepka"),
        hat: document.querySelector(".hat"),
        bag: document.querySelector(".bag"),
    };


    const hasObjects = Object.values(objects).some(el => el !== null);
    if (!hasObjects) return;


    const defaultState = {
        logoHTML: logoContainer.innerHTML,
        text: heroText.innerText,
        arrowSrc: arrowImg.getAttribute("src"),
    };


    const contentMap = {
        kepka: {
            title: "ШКОЛЬНИК",
            text: "Узнай, какие сферы существуют, где тебе может быть интересно",
            arrow: blueArrowIMG,
        },
        hat: {
            title: "АБИТУРИЕНТ",
            text: "Определи, какие профессии и форматы работы тебе подходят",
            arrow: OrangearrowImg,
        },
        bag: {
            title: "КАРЬЕРА-СВИТЧЕР",
            text: "Пойми, в каком рабочем формате ты раскрываешься лучше всего",
            arrow: pinkarrowImg,
        },
    };

    const style = document.createElement("style");
    style.innerHTML = `
        .glass-obj { transition: transform 0.3s ease, filter 0.3s ease; cursor: pointer; }
        .glass-obj:hover { transform: scale(1.05); filter: drop-shadow(0 0 15px rgba(150, 255, 150, 0.6)); }
        .dynamic-title { 
            font-family: 'Akzidenzgroteskpro', sans-serif;
            font-size: 2vw; 
            font-weight: 800; 
            text-transform: uppercase; 
            margin-left: 10vw;
            margin: 0;
            line-height: 0.9;
            display: block;
            min-width: 20vw; 
        }
    `;
    document.head.appendChild(style);

    // 5. Функция смены контента
    function updateContent(type) {
        if (type && contentMap[type]) {
            const data = contentMap[type];

            logoContainer.innerHTML = `<span class="dynamic-title">${data.title}</span>`;
            heroText.innerText = data.text;

            arrowImg.src = data.arrow;

            arrowImg.style.filter = "none";
        } else {

            logoContainer.innerHTML = defaultState.logoHTML;
            heroText.innerText = defaultState.text;
            arrowImg.src = defaultState.arrowSrc;
        }
    }


    Object.entries(objects).forEach(([key, el]) => {
        if (el) {
            el.addEventListener("mouseenter", () => updateContent(key));
            el.addEventListener("mouseleave", () => updateContent(null));
        }
    });

// 4 слайд


// фильтрация






});