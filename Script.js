let search = document.querySelector('.search-box');


document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle("active");
    cart.classList.remove("active");
    user.classList.remove("active");
    navBar.classList.remove("active");
};


let cart = document.querySelector('.cart');


document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle("active");
    search.classList.remove("active");
    user.classList.remove("active");
    navBar.classList.remove("active");
};


let user = document.querySelector('.user');


document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    navBar.classList.remove("active");
};


let navBar = document.querySelector('.nav-bar');


document.querySelector('#menu-icon').onclick = () => {
    navBar.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    user.classList.remove("active");
}


window.onscroll = () => {
    search.classList.remove("active");
    cart.classList.remove("active");
    user.classList.remove("active");
    navBar.classList.remove("active");
};


// Navbar Scroll //
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});




var swiper = new Swiper('.new-arrivals', {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        }
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});
