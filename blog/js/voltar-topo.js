// COMANDO JS DE ROLAGEM BOTÃO

const btn = document.getElementById("btn-top")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll' ,ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()