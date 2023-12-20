var swiperBlog = new Swiper(".slider--main", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperBlog = new Swiper(".slider--blog", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },

        900: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        },

    }
});


var swiperCustomer = new Swiper(".slider--customer", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".comments-button-next",
        prevEl: ".comments-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 2
        }
    }

});

var swiperBlog = new Swiper(".slider--team", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        }
    }
});

Fancybox.bind("[data-fancybox]", {
    // Your custom option


    Carousel: {
        infinite: true,
    },
    /*
      Fullscreen: {
          autoStart: true,
      },
    */

});

const container = document.getElementById("myPanzoom");

const instance = new Panzoom(container, {
    panMode: 'mousemove',
    mouseMoveFactor: 1.25,
    click: false,
    wheel: false,

});

container.addEventListener("mouseenter", (event) => {
    if (!event.buttons) {
        instance.zoomTo(2);
    }
});

container.addEventListener("mouseleave", () => {
    instance.zoomToFit();
});