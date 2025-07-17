


/* Initializing Swiper */
const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // Pagination bullets
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
     // Autoplay settings
     autoplay: {
      delay: 1600, // 3 seconds delay between slides
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
  
    /* Responsive breakpoints */
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });