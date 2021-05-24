const hamburger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function() {
    navbar.classList.toggle("navbar-active");
});