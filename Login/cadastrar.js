//Tela Cadastramento

//---------Input--Nome-------
const formularioCadastrarNome = document.getElementById("inputPopupNome");
const mensagemErroNome = document.getElementById("span-cadastro-nome")

function verificaCadastrarNome() {
  const regexNome = /^[a-zA-Z\s]+$/;
  if (regexNome.test(formularioCadastrarNome.value)) {
    formularioCadastrarNome.classList.remove("errorCadastrar");
    mensagemErroNome.style.display = "none"; // oculta o span de erro

  } else {
    formularioCadastrarNome.classList.add("errorCadastrar");
    mensagemErroNome.style.display = "block";

    
  }
}

//---------Input--Sobrenome-------

const mensagemErroSobreNome = document.getElementById("span-cadastro-sobrenome");

const formularioCadastrarSobrenome = document.getElementById("inputPopupSobrenome");



function verificaCadastrarSobreNome() {
  const regexNome = /^[a-zA-Z\s]+$/;
  if (regexNome.test(formularioCadastrarSobrenome.value)) {
    formularioCadastrarSobrenome.classList.remove("errorCadastrar");
    mensagemErroSobreNome.style.display = "none"; // oculta o span de erro

  } else {
    formularioCadastrarSobrenome.classList.add("errorCadastrar");
    mensagemErroSobreNome.style.display = "block";

    
  }
}


formularioCadastrarNome.addEventListener("blur", verificaCadastrarNome);

formularioCadastrarSobrenome.addEventListener("blur", verificaCadastrarSobreNome);

///////////////////////////////////////////

///--------Input--Telefone-----------
const formularioCadastrarTelefone =
  document.getElementById("inputPopupTelefone");
const mensagemErroTelefoneCadastro = document.getElementById("span-cadastro-telefone")

function verificaCadastrarTelefone() {
  const regexTel = /^[0-9]+$/;

  if (regexTel.test(formularioCadastrarTelefone.value)) {
    if (formularioCadastrarTelefone.value.length >= 9) {
      formularioCadastrarTelefone.classList.remove("errorCadastrar");
      mensagemErroTelefoneCadastro.style.display = "none"; // oculta o span de erro
    }else {
        formularioCadastrarTelefone.classList.add("errorCadastrar");
        mensagemErroTelefoneCadastro.style.display = "block"; /// exibe o span de erro
        }
  } else {
    formularioCadastrarTelefone.classList.add("errorCadastrar");
    mensagemErroTelefoneCadastro.style.display = "block"; /// exibe o span de erro
    }
}

formularioCadastrarTelefone.addEventListener("blur", verificaCadastrarTelefone);
//////////////////////////////////////////////////

//// -------------InputaEmail
const formularioCadastrarEmail = document.getElementById("inputPopupEmail");
const mensagemErroEmailCadastro = document.getElementById("span-cadastro-email")

function verificaCadastrarEmail() {
  const regexEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (regexEmail.test(formularioCadastrarEmail.value)) {
    formularioCadastrarEmail.classList.remove("errorCadastrar");
    mensagemErroEmailCadastro.style.display = "none"; // oculta o span de erro

  } else {
    formularioCadastrarEmail.classList.add("errorCadastrar");
    mensagemErroEmailCadastro.style.display = "block"; /// exibe o span de erro
    
  }
}

formularioCadastrarEmail.addEventListener("blur", verificaCadastrarEmail);
////////////////////////////////////////////////////////////////////////////////////////////

/// ------------------- Input Senha ------------------

const formularioCadastrarSenha = document.getElementById("inputPopupSenha"); // pegar elemnto HTML
//
const mensagemErroSenhaCadastro = document.getElementById(
  "span-cadastro-senha"
); // Pegar o span com o erro que aparecerá quando input estiver errado

function verificaCadastrarSenha() {
  // funcao que verifica o input
  if (
    formularioCadastrarSenha.value === "" ||
    formularioCadastrarSenha.value.length < 8
  ) {
    // verifica se o input esta vazio ou tem qts menor que 8
    formularioCadastrarSenha.classList.add("errorCadastrar"); // adiciona estilo de erro ao input
    mensagemErroSenhaCadastro.style.display = "block"; /// exibe o span de erro
  } else {
    formularioCadastrarSenha.classList.remove("errorCadastrar"); // remove o estilo de errro
    mensagemErroSenhaCadastro.style.display = "none"; // oculta o span de erro
  }
}

formularioCadastrarSenha.addEventListener("blur", verificaCadastrarSenha); // adiciona a funcao de verificacao atrelando a ao elemento de input
/////////////////////////////////////////////////////////////////////////////////////////////////

/// ------------------- Formulario Completo ------------------
const formCadastrar = document.getElementById("formulario-cadastrar");


const cadastrar = (e) => {
  e.preventDefault();

  

  if (
    formularioCadastrarSenha.classList.contains("errorCadastrar") ||
    formularioCadastrarSenha.value == "" ||
    formularioCadastrarEmail.classList.contains("errorCadastrar") ||
    formularioCadastrarEmail.value == "" ||
    formularioCadastrarNome.classList.contains("errorCadastrar")  ||
    formularioCadastrarNome.value == ""  ||
    formularioCadastrarTelefone.classList.contains("errorCadastrar") ||
    formularioCadastrarTelefone.value == ""
  
  ) {
    console.log("errado");
  }else{

    userCadastrado.push({
        nome:formularioCadastrarNome.value,
        telefone: formularioCadastrarTelefone.value,
        email:formularioCadastrarEmail.value,
        senha: formularioCadastrarSenha.value
     });
    botaoFechar();
    alert("Usuário cadastrado com sucesso!")
  }
};

formCadastrar.addEventListener("submit", cadastrar);

//Validação do campo nome

//Validação do campo telefone

//Validação do campo email

//Validação do campo senha

// usuarioNovo = {usuarioEmail = e.target[''].value
// }

// credenciais.append(usuario);

// })
// for (let index = 0; index < credenciais.length; index++) {
//     credenciais[i].usuarioEmail === 'foi digitado'{
//         usuarioAtual =  credenciais[i];
//         alert(usuarioAtual.nome);
//     }

// }

// lougout(){
//     usuarioAtual = {};
// }

// if(usuarioAtual === false || usuarioAtual === {}){
//     carrega tela de login
// }else{
//     telaDEAgendamento
// }
