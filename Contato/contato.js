// contato.js
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


// Capturar o formulário
const form = document.getElementById('contact-form');

// Adicionar um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
  // Verificar se o formulário é válido
  if (!form.checkValidity()) {
    event.preventDefault(); // Impedir o envio padrão do formulário
    exibirMensagensDeErro();
  }
});

// Função para exibir as mensagens de erro
function exibirMensagensDeErro() {
  exibirMensagemDeErro('nome', 'Por favor, preencha seu nome.');
  exibirMensagemDeErro('email', 'Por favor, preencha um e-mail válido.');
  exibirMensagemDeErro('telefone', 'Por favor, preencha um telefone válido.');
  exibirMensagemDeErro('mensagem', 'Por favor, escreva sua mensagem.');
}

// Função para exibir uma mensagem de erro para um campo específico
function exibirMensagemDeErro(campoId, mensagem) {
  const campo = document.getElementById(campoId);
  const mensagemErro = document.getElementById(campoId + '-erro');

  campo.classList.add('campo-invalido');
  campo.setAttribute('aria-invalid', 'true'); // Adicionar atributo aria-invalid para acessibilidade
  mensagemErro.textContent = mensagem;
}

// Função para remover uma mensagem de erro de um campo específico
function removerMensagemDeErro(campoId) {
  const campo = document.getElementById(campoId);
  const mensagemErro = document.getElementById(campoId + '-erro');

  campo.classList.remove('campo-invalido');
  campo.setAttribute('aria-invalid', 'false'); // Remover atributo aria-invalid
  mensagemErro.textContent = '';
}

// Capturar os campos de entrada
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('telefone');
const mensagemInput = document.getElementById('mensagem');

// Adicionar ouvintes de evento para a validação interativa dos campos
nomeInput.addEventListener('input', validarNome);
emailInput.addEventListener('input', validarEmail);
telefoneInput.addEventListener('input', validarTelefone);
mensagemInput.addEventListener('input', validarMensagem);

// Função para validar o campo de nome
function validarNome() {
  if (nomeInput.validity.valueMissing) {
    exibirMensagemDeErro('nome', 'Por favor, preencha seu nome.');
    marcarCampoInvalido(nomeInput);
  } else {
    removerMensagemDeErro('nome');
    desmarcarCampoInvalido(nomeInput);
  }
}

// Função para validar o campo de e-mail
function validarEmail() {
  if (emailInput.validity.valueMissing) {
    exibirMensagemDeErro('email', 'Por favor, preencha seu e-mail.');
    marcarCampoInvalido(emailInput);
  } else if (emailInput.validity.typeMismatch) {
    exibirMensagemDeErro('email', 'Por favor, preencha um e-mail válido.');
    marcarCampoInvalido(emailInput);
  } else {
    removerMensagemDeErro('email');
    desmarcarCampoInvalido(emailInput);
  }
}

// Função para validar o campo de telefone
function validarTelefone() {
  if (telefoneInput.validity.patternMismatch) {
    exibirMensagemDeErro('telefone', 'Por favor, preencha um telefone válido.');
    marcarCampoInvalido(telefoneInput);
  } else {
    removerMensagemDeErro('telefone');
    desmarcarCampoInvalido(telefoneInput);
  }
}

// Função para validar o campo de mensagem
function validarMensagem() {
  if (mensagemInput.validity.valueMissing) {
    exibirMensagemDeErro('mensagem', 'Por favor, escreva sua mensagem.');
    marcarCampoInvalido(mensagemInput);
  } else {
    removerMensagemDeErro('mensagem');
    desmarcarCampoInvalido(mensagemInput);
  }
}

// Função para marcar um campo como inválido
function marcarCampoInvalido(campo) {
  campo.classList.add('campo-invalido');
}

// Função para desmarcar um campo inválido
function desmarcarCampoInvalido(campo) {
  campo.classList.remove('campo-invalido');
}
