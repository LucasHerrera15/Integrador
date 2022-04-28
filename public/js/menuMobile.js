const navToggle = document.querySelector(".menu__icon");
const navMenu = document.querySelector(".navigation");
const icon = document.getElementById("icon")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("navigation_visible");
});
