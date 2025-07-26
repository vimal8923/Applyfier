new Swiper('.testimonial-slider',{
    spaceBetween:30,
    slidesPerView:1,
    navigation:{
        nextEl:'.testimonial-slide-next',
        prevEl:'.testimonial-slide-prev',

    },
    loop:true,
    autoplay:{
        delay:5000
    },
    breakpoints:{
        768:{
            slidesPerView:2
        },
        991:{
            slidesPerView:2.5
        }
    }
})