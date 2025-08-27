const isMobile = window.innerWidth <= 680;

const secondSectionSlider = new Swiper('.second-section-slider', {
    slidesPerView: 'auto',
    speed: 1000,
    spaceBetween: 20,
    centeredSlides: isMobile,
    centeredSlidesBounds: isMobile,
    pagination: {
        el: '.second-section-slider .swiper-pagination',
        type: 'bullets',
        clickable: 1,
    },
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
    pagination: {
        el: '.six-section-slider .swiper-pagination',
        type: 'bullets',
        clickable: 1,
    },
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
    pagination: {
        el: '.ten-section-slider .swiper-pagination',
        type: 'bullets',
        clickable: 1,
    },
    // autoplay: {
    //     delay: 5000,
    // },
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
        timerSpan.textContent = '00д 00ч 00м';
        clearInterval(intervalId);
        return;
    }

    const totalMinutes = Math.floor(diff / 1000 / 60);
    const days = Math.floor(totalMinutes / 60 / 24);
    const hours = Math.floor((totalMinutes / 60) % 24);
    const minutes = totalMinutes % 60;

    timerSpan.textContent = `${pad(days)}д : ${pad(hours)}ч : ${pad(minutes)}м`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

updateTimer(); // запускаем сразу
const intervalId = setInterval(updateTimer, 1000);



const mobMenu = document.querySelector('.mob-menu');
document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.mob-menu-btn')) {
        mobMenu.classList.add('open');
    }

    if (target.closest('.mob-menu-btn-close')) {
        mobMenu.classList.remove('open');
    }

    if (target.closest('.mob-menu a')) {
        mobMenu.classList.remove('open');
    }
})




AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});