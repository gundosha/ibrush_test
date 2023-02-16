new Swiper('.footer__slider', {
    pagination:{
        el: ".swiper-pagination",
        clickable: true
    },
    spaceBetween: 30,
    breakpoints:{
        320: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
})