const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1000
    },
    speed: 2000,
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1: {
            slidesPerView: 1
        },
        280: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 3
        }
    },
    grab: true,
});