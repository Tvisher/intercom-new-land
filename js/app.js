const secondSectionSlider = new Swiper('.second-section-slider', {
    slidesPerView: 'auto',
    speed: 1000,
    spaceBetween: 30,
    navigation: {
        nextEl: '.second-section .swiper-button-next',
        prevEl: '.second-section .swiper-button-prev',
    },
});