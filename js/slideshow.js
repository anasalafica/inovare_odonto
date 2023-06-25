var swiper;

function initSwiper() {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: getSlidesPerView(),
    spaceBetween: 0,
    loop: true,
    freeMode: true,
    freeModeSticky: true,
    autoplay: {
        delay: 12000,
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
}

function getSlidesPerView() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    return 1;
  } else if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
    return 2;
  } else {
    return 3;
  }
}

window.addEventListener("resize", function() {
  swiper.destroy();
  initSwiper();
});

initSwiper();









