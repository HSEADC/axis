import '../css/style.css'

import itImg from '../images/it.webp';
import marketingImg from '../images/marketing.webp';
import creativeImg from '../images/creative.webp';
import medicineImg from '../images/medicine.webp';
import financeImg from '../images/finance.webp';
import humanitarianImg from '../images/humanitarian.webp';
import ecoImg from '../images/eco.webp';
import educationImg from '../images/education.webp';
import coloristAudio from '../audio/colorist.mp3';

'use strict';


var DATA = {

    kardiolog: {
        type:       'text',
        color:      '#3ECFEF',           /* голубой */
        image:      medicineImg,
        profession: 'Кардиолог',
        name:       'Алексей Воронов',
        qa: [
            { q: 'Как изменится профессия кардиолога через 10 лет?',
                a: 'ИИ уже сейчас читает ЭКГ точнее среднестатистического врача. Через десятилетие алгоритмы возьмут на себя первичную диагностику, а мы сосредоточимся на принятии сложных клинических решений и работе с пациентом как личностью.' },
            { q: 'Какое качество критически важно для начинающего специалиста?',
                a: 'Эмпатия. Технические знания приходят с опытом, а умение слышать человека в стрессовой ситуации — это то, что либо есть от природы и развивается, либо нет.' },
        ],
    },

    psiholog: {
        type:       'video',
        color:      '#3ECFEF',
        image:      medicineImg,
        profession: 'Психолог',
        name:       'Елена Громова',
        videoSrc:   'https://vkvideo.ru/video_ext.php?oid=-129197836&id=456241291&hd=4',
        qa: [
            { q: 'Можно ли получать психологическую помощь от ИИ?',
                a: 'Для снятия тревоги, структурирования мыслей, базовой поддержки — да, есть ценность. Но глубокая терапия требует живого присутствия и отношений. Парадокс в том, что именно отношения с терапевтом и исцеляют.' },
            { q: 'Как не выгореть в помогающей профессии?',
                a: 'Иметь своего терапевта. Без исключений. Это не слабость — это профессиональная гигиена. Плюс чёткие границы: рабочее время, личное время, и осознанный переход между ними.' },
        ],
    },

    onkolog: {
        type:       'text',
        color:      '#3ECFEF',
        image:      medicineImg,
        profession: 'Онколог',
        name:       'Михаил Орлов',
        qa: [
            { q: 'Насколько близко человечество к победе над раком?',
                a: 'Слово «победа» неточное. Мы уже победили многие виды — выживаемость при ряде диагнозов за 30 лет выросла с 20% до 90%. Онкология становится хроническим заболеванием, с которым живут, а не умирают.' },
            { q: 'Как вы справляетесь эмоционально?',
                a: 'Сосредоточиваешься на тех, кому помог. Это звучит просто, но требует сознательного усилия. И коллеги — команда, которая понимает, что ты чувствуешь, потому что чувствует то же самое.' },
        ],
    },

    prepodavatel: {
        type:       'text',
        color:      '#F29475',
        image:      educationImg,
        profession: 'Преподаватель',
        name:       'Дмитрий Казанцев',
        duration:   210,
        qa: [
            { q: 'Как вы относитесь к тому, что студенты используют ChatGPT?',
                a: 'Спокойно. Я сам его использую. Проблема не в инструменте, а в том, что многие путают «получить ответ» с «понять». Моя задача теперь — учить задавать правильные вопросы и критически оценивать любой источник.' },
            { q: 'Что останется неизменным в образовании всегда?',
                a: 'Живой контакт. Можно автоматизировать передачу информации, но нельзя автоматизировать момент, когда у человека в глазах зажигается интерес.' },
        ],
    },

    ekonomist: {
        type:       'text',
        color:      '#C8A84B',
        image:      financeImg,
        profession: 'Экономист',
        name:       'Светлана Ким',
        duration:   198,
        qa: [
            { q: 'Реальна ли угроза рецессии в ближайшие годы?',
                a: 'Цикличность — закон экономики. Вопрос не «будет ли спад», а «когда и насколько глубокий». Сейчас я вижу признаки охлаждения в ряде секторов, но катастрофы не жду.' },
            { q: 'Какие компетенции нужны экономисту будущего?',
                a: 'Data literacy — умение читать большие массивы данных и видеть за цифрами реальные процессы. Плюс поведенческая экономика: люди принимают решения иррационально, и это надо учитывать в любой модели.' },
        ],
    },

    prokuror: {
        type:       'text',
        color:      '#FF7A3C',
        image:      humanitarianImg,
        profession: 'Прокурор',
        name:       'Андрей Белов',
        duration:   220,
        qa: [
            { q: 'Как цифровизация изменила работу прокуратуры?',
                a: 'Колоссально. Электронные доказательства, цифровые следы, криптовалютные транзакции — это всё новые компетенции, которых не было в учебниках 10 лет назад.' },
            { q: 'Что делает хорошего обвинителя?',
                a: 'Не желание «посадить», а желание установить истину. Прокурор, который давит на суд любыми средствами, разрушает доверие к системе.' },
        ],
    },

    yurist: {
        type:       'text',
        color:      '#FF7A3C',
        image:      humanitarianImg,
        profession: 'Юрист',
        name:       'Павел Третьяков',
        duration:   195,
        qa: [
            { q: 'Может ли ИИ заменить юриста?',
                a: 'Рутину — уже заменяет. Анализ договоров, поиск прецедентов, составление типовых документов. Но интерпретация закона в пограничных ситуациях, стратегия в суде — это останется за людьми надолго.' },
            { q: 'Самый важный навык начинающего юриста?',
                a: 'Умение объяснять сложное простым языком. Клиент не знает юридических терминов, и ваша задача — не запугать его умными словами, а дать понять ситуацию.' },
        ],
    },

    developer: {
        type:       'text',
        color:      '#3ECFEF',
        image:      itImg,
        profession: 'Девелопер',
        name:       'Игорь Семёнов',
        qa: [
            { q: 'Как BIM-технологии изменили девелопмент?',
                a: 'Мы перестали «находить» проблемы на объекте и начали «видеть» их за месяцы до начала работ. Это экономит и деньги, и нервы.' },
            { q: 'Какой тренд в недвижимости вас удивил?',
                a: 'Запрос на человекоориентированную среду. Люди хотят не квадратные метры, а качество жизни рядом с домом. Двор, кофейня, велодорожка — это теперь продукт, а не опция.' },
        ],
    },

    inzhener: {
        type:       'video',
        color:      '#3ECFEF',
        image:      itImg,
        profession: 'Инженер',
        name:       'Николай Быков',
        videoSrc:   '',
        qa: [
            { q: 'Какое направление инженерии самое перспективное?',
                a: 'Биомедицинская инженерия и робототехника. Но честный ответ: та область, где вы готовы разбираться глубже всех. Специализация важнее выбора «горячей темы».' },
            { q: 'Soft skills важны для инженера?',
                a: 'Критически. Я видел блестящих технарей, которые не могли объяснить своё решение команде — и проекты проваливались. Инженерия — это почти всегда командная работа.' },
        ],
    },

    geolog: {
        type:       'text',
        color:      '#4CAF82',
        image:      ecoImg,
        profession: 'Геолог',
        name:       'Антон Крылов',
        qa: [
            { q: 'Геология — умирающая профессия или нет?',
                a: 'Смотря чья. Традиционная разведка нефти — да, сжимается. Но геология критических металлов для аккумуляторов, геотермальная энергетика — это растущие направления.' },
            { q: 'Что нельзя заменить полевой работой?',
                a: 'Понимание масштаба. Когда стоишь перед разрезом, которому 300 миллионов лет, и видишь историю планеты — это меняет восприятие. Никакой экран это не передаст.' },
        ],
    },

    influencer: {
        type:       'text',
        color:      '#FF9249',
        image:      marketingImg,
        profession: 'Инфлюенс-менеджер',
        name:       'Кристина Лавренова',
        duration:   175,
        qa: [
            { q: 'Чем инфлюенс-менеджер отличается от SMM-специалиста?',
                a: 'SMM работает с собственными каналами бренда. Инфлюенс-менеджер — с чужой аудиторией через блогеров. Это другая дипломатия, другие KPI, другая психология.' },
            { q: 'Как выбрать правильного блогера для кампании?',
                a: 'Не смотрите на подписчиков — смотрите на вовлечённость и соответствие аудитории. 50 тысяч живых читателей в нужной нише ценнее миллиона случайных.' },
        ],
    },

    kolorist: {
        type:       'audio',
        color:      '#FF3264',
        image:      creativeImg,
        profession: 'Колорист',
        name:       'Ибрагим Давлетшин',
        audioSrc: coloristAudio,
        duration:   240,
        qa: [
            { q: 'Расскажите о специфике вашей профессии.',
                a: 'Я работаю в компании, которая занимается оцифровкой архивных и современных кинопленок. Главная специфика — работа с физическим носителем, который разрушается со временем. Моя задача: подготовка пленки и творческая цветокоррекция, чтобы изображение выглядело достоверно.' },
            { q: 'Какими качествами должен обладать человек в вашей сфере?',
                a: 'Прежде всего терпение и усидчивость. Работа с пленкой — монотонный долгий процесс. Важна насмотренность и понимание того, как работает свет, как взаимодействуют цвета.' },
        ],
    },

    zhurnalist: {
        type:       'text',
        color:      '#FF3264',
        image:      '../images/card-creative.webp',
        profession: 'Журналист',
        name:       'Вера Смирнова',
        duration:   215,
        qa: [
            { q: 'Выживет ли журналистика в эпоху соцсетей?',
                a: 'Выживет то, чего алгоритмы не могут: расследования, анализ, верификация. Поверхностное переписывание пресс-релизов умрёт — и хорошо. Останется настоящая журналистика.' },
            { q: 'Как проверять информацию в мире дипфейков?',
                a: 'Возвращаться к основам — перекрёстные источники, первичные документы, официальные подтверждения. И слушать своё ощущение: если история выглядит слишком идеально — скорее всего, что-то не так.' },
        ],
    },
};

var activeId    = null;
var timerHandle = null;
var elapsed     = 0;
var isPlaying   = false;
var isMuted     = false;

function axisInit() {
    var cloud = document.getElementById('profCloud');
    var card  = document.getElementById('stageCard');
    if (!cloud || !card) { setTimeout(axisInit, 100); return; }

    cloud.addEventListener('click', function(e) {
        var tag = e.target.closest('[data-pid]');
        if (!tag) return;
        var pid = tag.getAttribute('data-pid');
        if (!pid || !DATA[pid]) return;

        cloud.querySelectorAll('[data-pid]').forEach(function(t) {
            t.setAttribute('aria-pressed', 'false');
        });

        if (activeId === pid) {
            activeId = null;
            collapseCard();
        } else {
            activeId = pid;
            tag.setAttribute('aria-pressed', 'true');
            swapCard(DATA[pid]);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', axisInit);
} else {
    axisInit();
}

function collapseCard() {
    killTimer();
    var card = document.getElementById('stageCard');
    if (!card) return;
    card.classList.add('is-fading');
    setTimeout(function() {
        card.innerHTML = '<div class="stage-card__idle"><p>Нажмите на профессию, чтобы увидеть интервью</p></div>';
        card.style.setProperty('--card-color', '');
        card.classList.remove('is-fading');
    }, 350);
}

function swapCard(data) {
    killTimer();
    var card = document.getElementById('stageCard');
    if (!card) return;

    card.classList.add('is-fading');

    setTimeout(function() {
        /* Устанавливаем цвет через CSS-переменную на карточке */
        card.style.setProperty('--card-color', data.color);
        card.innerHTML = buildCard(data);
        card.classList.remove('is-fading');

        if (data.type === 'audio') bootAudio(data);
        if (data.type === 'video') bootVideo();

        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        var hint = document.getElementById('cloudHint');
        if (hint) hint.classList.add('is-hidden');
    }, 350);
}

function buildCard(data) {
    var html = buildFloater(data);   /* 3D картинка сверху */
    html += buildMeta(data);         /* аватар + профессия + имя */
    if (data.type === 'video') html += buildVideo(data);
    if (data.type === 'audio') html += buildAudio(data);
    if (data.type === 'text')  html += buildTextFlag();
    html += buildBody(data);
    return html;
}

/* Плавающее изображение над карточкой */
function buildFloater(data) {
    if (!data.image) return '';
    return '<div class="card-floater-img">' +
        '<img src="' + data.image + '" alt="' + data.profession + '">' +
        '</div>';
}


function buildMeta(data) {
    return '<div class="card-meta">' +
        '<div class="card-meta__left">' +
        '<div class="card-meta__prof">' + data.profession + '</div>' +
        '</div>' +
        '<div class="card-meta__right">' +
        '<span class="card-meta__name">' + data.name + '</span>' +
        '<div class="card-meta__avatar"></div>' +
        '</div>' +
        '</div>';
}

/* Видео-плеер  */
function buildVideo(data) {
    if (data.videoSrc) {
        return '<div class="card-video card-video--rutube">' +
            '<iframe' +
            ' src="' + data.videoSrc + '"' +
            ' id="axVideoEl"' +
            ' frameborder="0"' +
            ' allow="clipboard-write; autoplay"' +
            ' webkitAllowFullScreen' +
            ' mozallowfullscreen' +
            ' allowfullscreen' +
            '></iframe>' +
            '<span class="vid-corner vid-corner--tl"></span>' +
            '<span class="vid-corner vid-corner--tr"></span>' +
            '<span class="vid-corner vid-corner--bl"></span>' +
            '<span class="vid-corner vid-corner--br"></span>' +
            '</div>';
    }

    return '<div class="card-video" id="axVideoBox" role="button" tabindex="0" aria-label="Воспроизвести видео">' +
        '<div class="card-video__bg"></div>' +
        '<div class="card-video__btn"><div class="video-play-ring" id="axPlayRing"></div></div>' +
        '<span class="vid-corner vid-corner--tl"></span>' +
        '<span class="vid-corner vid-corner--tr"></span>' +
        '<span class="vid-corner vid-corner--bl"></span>' +
        '<span class="vid-corner vid-corner--br"></span>' +
        '</div>';
}

/* Аудио-плеер */
function buildAudio(data) {
    var audioTag = data.audioSrc
        ? '<audio id="axAudioEl" src="' + data.audioSrc + '" preload="metadata"></audio>'
        : '';

    return audioTag +
        '<div class="card-audio">' +
        '<button class="aud-btn" id="axAudMute" aria-label="Отключить звук">' + iconVol(false) + '</button>' +
        '<button class="aud-btn" id="axAudPlay" aria-label="Воспроизвести">' + iconPlay(false) + '</button>' +
        '<div class="aud-wave" id="axAudWave" role="slider" aria-label="Прогресс"' +
        ' aria-valuenow="0" aria-valuemin="0" aria-valuemax="' + (data.duration || 180) + '">' +
        buildSlats() +
        '</div>' +
        '<span class="aud-clock" id="axAudClock">00:00</span>' +
        '</div>';
}

function buildTextFlag() {
    return '<div class="card-text-flag">✍&nbsp; Текстовое интервью</div>';
}

function buildBody(data) {
    var qas = '';
    data.qa.forEach(function(item, i) {
        qas += '<div class="qa-block">' +
            '<div class="qa-q">Вопрос ' + (i + 1) + '</div>' +
            '<p class="qa-a">' + item.a + '</p>' +
            '</div>';
    });
    return '<div class="card-body">' +
        qas +
        '<div class="card-body__foot">' +
        '<a class="cta-pill" href="#">ДРУГИЕ ИНТЕРВЬЮ →</a>' +
        '</div>' +
        '</div>';
}

function iconVol(muted) {
    if (muted) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
}

function iconPlay(playing) {
    if (playing) {
        return '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21 5,3"/></svg>';
}

function buildSlats() {
    var out = '';
    for (var i = 0; i < 64; i++) {
        var h = Math.floor(Math.random() * 22 + 4);
        out += '<div class="wave-slat" style="height:' + h + 'px"></div>';
    }
    return out;
}

function bootAudio(data) {
    var playBtn  = document.getElementById('axAudPlay');
    var muteBtn  = document.getElementById('axAudMute');
    var wave     = document.getElementById('axAudWave');
    var clock    = document.getElementById('axAudClock');
    var audioEl  = document.getElementById('axAudioEl');
    if (!playBtn || !wave || !clock) return;

    var slats = wave.querySelectorAll('.wave-slat');
    var total = data.duration || 180;

    elapsed   = 0;
    isPlaying = false;
    isMuted   = false;

    function render(sec) {
        var t      = sec !== undefined ? sec : elapsed;
        var played = Math.floor((t / total) * slats.length);
        clock.textContent = fmtTime(Math.floor(t));
        wave.setAttribute('aria-valuenow', Math.floor(t));
        slats.forEach(function(s, i) {
            i < played ? s.classList.add('done') : s.classList.remove('done');
        });
    }

    if (audioEl) {
        audioEl.addEventListener('loadedmetadata', function() {
            total = audioEl.duration;
            wave.setAttribute('aria-valuemax', total);
        });

        audioEl.addEventListener('timeupdate', function() {
            render(audioEl.currentTime);
        });

        audioEl.addEventListener('ended', function() {
            isPlaying = false;
            playBtn.innerHTML = iconPlay(false);
            playBtn.classList.remove('is-active');
            render(0);
        });

        playBtn.addEventListener('click', function() {
            if (audioEl.paused) {
                audioEl.play();
                isPlaying = true;
            } else {
                audioEl.pause();
                isPlaying = false;
            }
            playBtn.innerHTML = iconPlay(isPlaying);
            playBtn.classList.toggle('is-active', isPlaying);
        });


        muteBtn.addEventListener('click', function() {
            isMuted = !isMuted;
            audioEl.muted = isMuted;
            muteBtn.innerHTML = iconVol(isMuted);
            muteBtn.style.opacity = isMuted ? '0.4' : '1';
            muteBtn.setAttribute('aria-label', isMuted ? 'Включить звук' : 'Отключить звук');
        });

        /* Seek по клику на волну */
        wave.addEventListener('click', function(e) {
            var r     = wave.getBoundingClientRect();
            var ratio = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
            audioEl.currentTime = ratio * (audioEl.duration || total);
            render(audioEl.currentTime);
        });

        wave.setAttribute('tabindex', '0');
        wave.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') audioEl.currentTime = Math.min(audioEl.currentTime + 5, audioEl.duration || total);
            if (e.key === 'ArrowLeft')  audioEl.currentTime = Math.max(audioEl.currentTime - 5, 0);
            render(audioEl.currentTime);
        });

    } else {
        function tick() {
            if (!isPlaying) return;
            elapsed = Math.min(elapsed + 1, total);
            render();
            if (elapsed >= total) {
                killTimer(); isPlaying = false;
                playBtn.innerHTML = iconPlay(false);
                playBtn.classList.remove('is-active');
            }
        }

        playBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            playBtn.innerHTML = iconPlay(isPlaying);
            playBtn.classList.toggle('is-active', isPlaying);
            isPlaying ? (timerHandle = setInterval(tick, 1000)) : killTimer();
        });

        muteBtn.addEventListener('click', function() {
            isMuted = !isMuted;
            muteBtn.innerHTML = iconVol(isMuted);
            muteBtn.style.opacity = isMuted ? '0.4' : '1';
            muteBtn.setAttribute('aria-label', isMuted ? 'Включить звук' : 'Отключить звук');
        });

        wave.addEventListener('click', function(e) {
            var r = wave.getBoundingClientRect();
            elapsed = Math.round(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * total);
            render();
        });

        wave.setAttribute('tabindex', '0');
        wave.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') { elapsed = Math.min(elapsed + 5, total); render(); }
            if (e.key === 'ArrowLeft')  { elapsed = Math.max(elapsed - 5, 0);     render(); }
        });
    }

    render(0);
}

function bootVideo() {
    var box  = document.getElementById('axVideoBox');
    var el   = document.getElementById('axVideoEl');
    var ring = document.getElementById('axPlayRing');
    if (!box) return;

    function toggle() {
        if (el) { box.classList.add('is-playing'); el.play().catch(function(){}); }
        else if (ring) {
            ring.style.transform = 'scale(0.9)';
            setTimeout(function() { ring.style.transform = ''; }, 180);
        }
    }

    box.addEventListener('click', toggle);
    box.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
}

function killTimer() { clearInterval(timerHandle); timerHandle = null; }

function fmtTime(s) {
    return String(Math.floor(s / 60)).padStart(2,'0') + ':' + String(s % 60).padStart(2,'0');
}