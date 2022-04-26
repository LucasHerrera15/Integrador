const navToggle = document.querySelector(".menu__icon");
const navMenu = document.querySelector(".navigation");
const navPerfil = document.getElementById("sinPadding");
const navPerfilEscritorio = document.querySelector(".perfil-escritorio");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("navigation_visible")
});

navPerfil.addEventListener("click", ()=>{
    navPerfilEscritorio.classList.toggle("perfil-visible")
});