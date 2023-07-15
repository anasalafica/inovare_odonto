document
  .querySelector(".navbar__toggle")
  .addEventListener("click", function () {
    this.classList.toggle("open");

    document.querySelector(".navbar__menu").classList.toggle("open");
  });

document.querySelector(".navbar__menu").addEventListener("click", function () {
    if(this.className.includes("open")){
        this.classList.remove("open");
        document
  .querySelector(".navbar__toggle").classList.remove("open");
        console.log("aki essa porra")
    }else {
        console.log(this.className)
    }

    // console.log("By teacher Marcos Domingues")
 
});
