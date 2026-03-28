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
    const pagesContainer = document.getElementById('pagesContainer');
    const sliderViewport = document.querySelector('.slider-viewport');

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

    if (typeof nextBtn !== 'undefined' && nextBtn) {

        let autoPlayTimer;
        const timeToSwitch = 3000;

        function autoSlide() {
            nextBtn.click();
        }

        function startAutoPlay() {
            stopAutoPlay();
            autoPlayTimer = setInterval(autoSlide, timeToSwitch);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayTimer);
        }

        function resetAutoPlay() {
            startAutoPlay();
        }


        startAutoPlay();

        nextBtn.addEventListener('click', resetAutoPlay);


        if (typeof prevBtn !== 'undefined' && prevBtn) {
            prevBtn.addEventListener('click', resetAutoPlay);
        }

        if (typeof pagesContainer !== 'undefined' && pagesContainer) {
            pagesContainer.addEventListener('click', function (event) {
                if (event.target.classList.contains('page-num')) {
                    resetAutoPlay();
                }
            });
        }

        if (typeof sliderViewport !== 'undefined' && sliderViewport) {
            sliderViewport.addEventListener('mouseenter', stopAutoPlay);
            sliderViewport.addEventListener('mouseleave', startAutoPlay);
        }
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
    const arrowContainer = document.querySelector(".three-big-arrow");
    const arrowImg = arrowContainer ? arrowContainer.querySelector("img") : null;
    const logoLink = logoContainer ? logoContainer.querySelector("a") : null;

    if (!logoContainer || !heroText || !arrowImg || !logoLink || !arrowContainer) return;

    const objects = {
        kepka: document.querySelector(".kepka"),
        hat: document.querySelector(".hat"),
        bag: document.querySelector(".bag"),
    };

    const hasObjects = Object.values(objects).some(el => el !== null);
    if (!hasObjects) return;

    // Сохраняем исходное состояние (только текст и картинку стрелки)
    const defaultState = {
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

    logoContainer.style.position = 'relative';

    const dynamicTitle = document.createElement("div");
    dynamicTitle.classList.add("dynamic-title");
    logoContainer.appendChild(dynamicTitle);

    // Функция обновления контента
    function updateContent(type) {
        if (type && contentMap[type]) {
            const data = contentMap[type];
            logoLink.style.opacity = '0';
            dynamicTitle.innerText = data.title;
            dynamicTitle.style.opacity = '1';
            heroText.innerText = data.text;
            arrowImg.src = data.arrow;
            arrowContainer.style.transform = "translateY(1vw)";

        } else {
            // Возвращаем все как было при уводе мышки
            logoLink.style.opacity = '1';          // Возвращаем логотип
            dynamicTitle.style.opacity = '0';      // Прячем текст "ШКОЛЬНИК"
            heroText.innerText = defaultState.text; // Возвращаем старое описание
            arrowImg.src = defaultState.arrowSrc;   // Возвращаем черную стрелку
        }
    }

    // Навешиваем слушатели событий
    Object.entries(objects).forEach(([key, el]) => {
        if (el) {
            el.addEventListener("mouseenter", () => updateContent(key));
            el.addEventListener("mouseleave", () => updateContent(null));
        }
    });

// 4 слайд
    const button = document.getElementById('random-btn');
    if (!button) return;

    if (button) {

        const pagesList = [
            'pages/category/accountant.html',
            'pages/category/actuary.html',
            'pages/category/Artist.html',
            'pages/category/auditor.html',
            'pages/category/bi-analyst.html',
            'pages/category/brand-manager.html',
            'pages/category/clinical-psychologist.html',
            'pages/category/compliance-specialist.html',
            'pages/category/composer.html',
            'pages/category/content-marketer.html',
            'pages/category/copywriter.html',
            'pages/category/costume-designer.html',
            'pages/category/creative-industries.html',
            'pages/category/creative-producer.html',
            'pages/category/credit-analyst.html',
            'pages/category/cybersecurity-specialists.html',
            'pages/category/data-analyst.html',
            'pages/category/data-scientist.html',
            'pages/category/devOps-engineer.html',
            'pages/category/digital-marketer.html',
            'pages/category/economist.html',
            'pages/category/editor.html',
            'pages/category/email-marketer.html',
            'pages/category/finance.html',
            'pages/category/financial-analyst.html',
            'pages/category/financial-controller.html',
            'pages/category/fintech-specialist.html',
            'pages/category/forensic-expert.html',
            'pages/category/game-developer.html',
            'pages/category/general-practitioner.html',
            'pages/category/graphic-designer.html',

        ];
        if (!pagesList) return;

        button.addEventListener('click', function(event) {
            event.preventDefault();

            const randomIndex = Math.floor(Math.random() * pagesList.length);
            const randomPageUrl = pagesList[randomIndex];

            window.location.href = randomPageUrl;
        });
    }

// фильтрация






});