document.querySelector('.navbar__toggle').addEventListener('click',function() {
    this.classList.toggle('open')

    document.querySelector('.navbar__menu').classList.toggle('open')
})












// let show = true
 
// const menuSection = document.querySelector(".menu-responsivo-section")
// const menuBurguer = menuSection.querySelector(".menu-burguer")

// menuBurguer.addEventListener("click", () => {
//     menuSection.classList.toggle("on", show)
//     show = !show
// })


// const menuDiv = document.getElementById('menu-mobile')
// const btnAnimar = document.getElementById('btn-menu-burguer')

// menuDiv.addEventListener('click', animar2)

// function animar2(){
//     menuDiv.classList.toggle('funcionando')
    

//     console.log('animar')
// }