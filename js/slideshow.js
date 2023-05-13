var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    loop: true,
    freeMode: true,
    freeModeSticky: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
