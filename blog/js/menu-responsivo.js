let show = true
 
const menuSection = document.querySelector(".menu-responsivo-section")
const menuBurguer = menuSection.querySelector(".menu-burguer")

menuBurguer.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show
})
