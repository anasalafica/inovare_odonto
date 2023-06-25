// Toggle do menu responsivo
let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("active");
});
