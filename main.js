// Hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

// current-year 
const year = document.querySelector(".current-year")
year.innerHTML = new Date().getFullYear();

// Sticky-navbar 
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 100);
});

//  owlcarousal 
$(".carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false
        },
    }
});

// Preloader 
const loader = document.getElementById("loader");
function myLoader() {
    loader.style.display = "none"
};