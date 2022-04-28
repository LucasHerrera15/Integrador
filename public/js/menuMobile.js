const navToggle = document.querySelector(".menu__icon");
const navMenu = document.querySelector(".navigation");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("navigation_visible");
});
