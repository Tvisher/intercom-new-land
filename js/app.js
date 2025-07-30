const isMobile = window.innerWidth <= 680;

const secondSectionSlider = new Swiper('.second-section-slider', {
    slidesPerView: 'auto',
    speed: 1000,
    spaceBetween: 20,
    centeredSlides: isMobile,
    centeredSlidesBounds: isMobile,
    breakpoints: {
        680: {
            spaceBetween: 30
        },
    },
    navigation: {
        nextEl: '.second-section .swiper-button-next',
        prevEl: '.second-section .swiper-button-prev',
    },
});



const skeakersSlider = new Swiper('.six-section-slider', {
    slidesPerView: 'auto',
    speed: 1000,
    centeredSlides: isMobile,
    centeredSlidesBounds: isMobile,
    spaceBetween: 20,
    breakpoints: {
        680: {
            spaceBetween: 30
        },
    },
    navigation: {
        nextEl: '.six-section .swiper-button-next',
        prevEl: '.six-section .swiper-button-prev',
    },
});




const partnersSlider = new Swiper('.ten-section-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    spaceBetween: 20,
    breakpoints: {
        680: {
            spaceBetween: 30
        },
    },
    centeredSlides: isMobile,
    centeredSlidesBounds: isMobile,
    autoplay: {
        delay: 5000,
    },
});




const videoElParent = document.querySelector('.seven-section__video-wrapper');
const videoEl = videoElParent.querySelector('video');

videoEl.addEventListener('play', () => {
    videoElParent.classList.add('video-playing');
});

videoEl.addEventListener('pause', () => {
    videoElParent.classList.remove('video-playing');
});




$(".faq__head").on("click", function () {
    const toggleBody = $(this).parent('.faq__item').find('.faq__body');
    $(this).toggleClass('open')
    toggleBody.slideToggle("slow", function () {

    });
});


const timerSpan = document.querySelector('.header__plate span');
const dateAttr = timerSpan.getAttribute('data-date'); // "30.08.2025"

// Преобразуем дату в формат ISO: "2025-08-30T00:00:00"
const [day, month, year] = dateAttr.split('.');
const targetDate = new Date(`${year}-${month}-${day}T00:00:00`);

function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        timerSpan.textContent = '00:00:00';
        clearInterval(intervalId);
        return;
    }

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerSpan.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

updateTimer(); // запускаем сразу
const intervalId = setInterval(updateTimer, 1000);
