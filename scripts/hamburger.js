const hamburger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const cross = document.querySelector(".cross");
const body = document.querySelector("body");

hamburger.addEventListener("click", function() {
    navbar.classList.add("navbar-active");
    cross.style.display = "block";
    hamburger.style.display = "none"
    
});

cross.addEventListener("click", function(){
    navbar.classList = "navbar";
    cross.style.display = "none";
    hamburger.style.display = "block";
    navbar.classList.remove("navbar-active");
});