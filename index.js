var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup : 2,
    loop: true,
    grabCursor : true,
       autoplay:{delay: 4500},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints : {
        0:{
            slidesPerView: 1, 
            slidesPerGroup : 1,
        },
    
        1024:{
            slidesPerView: 2, 
            // autoplay:{delay: 4500},
        },
    
       
    }
  });