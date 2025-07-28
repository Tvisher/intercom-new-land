const secondSectionSlider = new Swiper('.second-section-slider', {
    slidesPerView: 'auto',
    speed: 1000,
    spaceBetween: 30,
    navigation: {
        nextEl: '.second-section .swiper-button-next',
        prevEl: '.second-section .swiper-button-prev',
    },
});


const skeakersSlider = new Swiper('.six-section-slider', {
    slidesPerView: 'auto',
    speed: 1000,
    spaceBetween: 33,
    navigation: {
        nextEl: '.six-section .swiper-button-next',
        prevEl: '.six-section .swiper-button-prev',
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