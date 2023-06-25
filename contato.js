// script.js
function abrirPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    abrirPopup();
  });
  