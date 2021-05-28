const hamburger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const cross = document.querySelector(".cross");
const burgerBody = document.querySelector("body");

hamburger.addEventListener("click", function() {
    navbar.classList.add("navbar-active");
    cross.style.display = "block";
    cross.style.width = "75px"
    hamburger.style.display = "none"
    burgerBody.classList.add("burgerBody");
});

cross.addEventListener("click", function(){
    navbar.classList = "navbar";
    cross.style.display = "none";
    hamburger.style.display = "block";
    navbar.classList.remove("navbar-active");
    burgerBody.classList.remove("burgerBody");
});