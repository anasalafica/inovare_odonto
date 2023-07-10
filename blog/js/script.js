
var radio = document.querySelector('.manual-btn')
var cont = 1


document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg() {
    cont++

    if(cont > 4) {
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

// COMANDO IMPORTAÇÃO DE HTML 

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Percorra uma coleção de todos os elementos HTML: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*procurar elementos com um determinado atributo:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remova o atributo e chame esta função mais uma vez: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Saia da função: */
        return;
      }
    }
  }


  