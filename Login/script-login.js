/* DOM INPUTS */
let  userCadastrado = [{
  nome:"Usuario",
  telefone: "2198729264" ,
  email:"igor.admin@gmail.com",
  senha: "123456789"
}];

const checkboxLembrarSenha = document.getElementById("lembrar");

const form = document.getElementById("form");


const userEmail = document.getElementById("email-usuario");

const senhaUsuario = document.getElementById("senha-usuario");



form.addEventListener('submit', (evento) => {
  evento.preventDefault(); logar(userEmail.value, senhaUsuario.value);})

const logar = (userEmail,pass) =>{
  console.log(userEmail,pass)

  let existe = false;
  let userAtual ={}

  for (let i = 0; i <userCadastrado.length; i++) {
    if(userCadastrado[i].email == userEmail && userCadastrado[i].senha == pass){
      existe = true;
      userAtual = userCadastrado[i];
    }   
  }

  if(existe){
    openModalUsuario()
      alert(`Bem vindo! ${userAtual.nome }`);
  }
  else{
    alert("Usuario não encontrado ou senha incorreta!")
  }
  

};



function checkInputEmailUsuario() {
  const userEmailValue = userEmail.value;

  if (userEmailValue === "") {
    errorInput(userEmail, "o email é obrigatório.");
  } else {
    const formItem = userEmail.parentElement;
    formItem.className = "form-content-email";
  }
}




userEmail.addEventListener("blur", () => {
  checkInputEmailUsuario();
});

function checkInputsenhaUsuario() {
  const userSenhaValue = senhaUsuario.value;

  if (userSenhaValue === "") {
    errorInput(senhaUsuario, "A senha é obrigatória.");
  } else if (userSenhaValue.length < 8) {
    errorInput(senhaUsuario, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    const formItem = senhaUsuario.parentElement;
    formItem.className = "form-content-senha";
  }
}

senhaUsuario.addEventListener("blur", () => {
  checkInputsenhaUsuario();
});

function checkForm() {
  checkInputEmailUsuario();
  checkInputsenhaUsuario();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}

//# Variaveis das MODAIS //

const modalEsquecerSenha = document.querySelector("#esqueceu-a-senha-modal");

const modalVerificacao = document.querySelector("#verificacao-modal");

const modalNovaSenha = document.querySelector("#nova-senha-modal");

const modalCadastro = document.querySelector("#cadastrar-login-modal");

const modalTelaUsuario = document.querySelector("#Usuario-logado-modal");

const modalHorariosAgendados = document.querySelector(
  "#horarios-agendados-modal"
);

const modalConsultaSelecionada = document.querySelector(
  "#horario-agendado-selecionado"
);

//variaveis  botoes //

const botaoFecharModal = document.querySelectorAll(".btn-fechar");

const botaoEsqueciSenha = document.querySelector("#esqueceuSenha");

const botaoLogin = document.querySelector("#inputLogin");

const botaoCadastro = document.querySelector("#cadastroButton");

const botaoProseguir = document.querySelector("#proseguir");

const botaoVerificar = document.querySelector("#verificar");

const botaoSalvarSenha = document.querySelector("#salvar-senha");

const BotaoCadastreSeAqui = document.querySelector("#cadastre-se-aqui");

const botaoAgendarHorario = document.querySelector("#agendarbutton");

const BotaoMeusHorariosAgendados = document.querySelector(
  "#agendamentosbutton"
);

const BotaoConsultaSelecionada = document.querySelector("#linkAgendamento1");

const BotaoConsultaConfirmar = document.querySelector(
  "#agendarbuttonConfirmar"
);

const BotaoConsultaCancelar = document.querySelector("#agendamentosbutton3");

const clickLogoutAgendamento = document.querySelector(
  "#click-logoutAgendamento"
);

const clickLogoutAgendamentosMarcados = document.querySelector(
  "#click-logout-agendamentos-marcados"
);

const clickLogoutAgendamentoSelecionado = document.querySelector(
  "#click-logout-agendamento-selecionado"
);


//Funcao fechar pagina

function botaoFechar() {
  const todosOsModais = document.querySelectorAll(".modal-hidden");

  for (let index = 0; index < todosOsModais.length; index++) {
    const element = todosOsModais[index];

    element.classList.remove("show-modal");
  }
}

for (let i = 0; i < botaoFecharModal.length; i++) {
  botaoFecharModal[i].addEventListener("click", botaoFechar);
}

//Funções Modal esqueci a senha
function openModalEsqueciSenha() {
  modalEsquecerSenha.classList.add("show-modal");
}

// function closeModal() {
//     modal.classList.add("redefinirSenhahidden");
// }

//Funções Modal Verificacao
function openModalVerificacao() {
  modalVerificacao.classList.add("show-modal");
}

// function closeModal2() {
//     modal2.classList.add("cadastrarLoginHidden");
// }

//Funçoes Modal Nova Senha
function openModalNovaSenha() {
  modalNovaSenha.classList.add("show-modal");
}

// function closeModal5() {
//     modal5.classList.add("novaSenhaHidden");
//     modal4.classList.add("verificaoHidden");
//     modal.classList.add("redefinirSenhahidden");
// }

//Função Modal Cadastrar
function openModalCadastrar() {
  modalCadastro.classList.add("show-modal");
}

//Funções Modal UsuarioLogado
function openModalUsuario() {
  modalTelaUsuario.classList.add("show-modal");
}

//funcoes Modal Horarios Agendados
function openModalHorariosAgendados() {
  modalHorariosAgendados.classList.add("show-modal");
}

// function closeModal7() {
//     modal7.classList.add("horariosAgendadosHidden1");
//     modal5.classList.add("verificaoHidden");
//     modal.classList.add("redefinirSenhahidden");
// }

//Funçoes Modal Horario Selecionado
function openModalConsultaSelecionada() {
  modalConsultaSelecionada.classList.add("show-modal");
}

// function abrirAgendamento() {
  
// }

// //Função Clickar no Logout
// //function clickLogout() {

// }

// function closeModal6() {
//     modal6.classList.add("horariosAgendadosHidden");
//     modal5.classList.add("verificaoHidden");
//     modal.classList.add("redefinirSenhahidden");
// }

// function closeModal3() {
//     modal3.classList.add("UsuarioLogadoHidden");
// }

// Função Botão login

botaoEsqueciSenha.addEventListener("click", openModalEsqueciSenha);

botaoProseguir.addEventListener("click", openModalVerificacao);

botaoVerificar.addEventListener("click", openModalNovaSenha);

BotaoCadastreSeAqui.addEventListener("click", openModalCadastrar);

botaoSalvarSenha.addEventListener("click", botaoFechar);

BotaoMeusHorariosAgendados.addEventListener(
  "click",
  openModalConsultaSelecionada
);

BotaoConsultaSelecionada.addEventListener(
  "click",
  openModalConsultaSelecionada
);

BotaoConsultaConfirmar.addEventListener("click", botaoFechar);

BotaoConsultaCancelar.addEventListener("click", botaoFechar);

clickLogoutAgendamento.addEventListener("click", botaoFechar);

clickLogoutAgendamentosMarcados.addEventListener("click", botaoFechar);

clickLogoutAgendamentoSelecionado.addEventListener("click", botaoFechar);

botaoAgendarHorario.addEventListener('click', )





