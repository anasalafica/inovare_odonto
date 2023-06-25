// Toggle do menu responsivo
var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("active");
});
