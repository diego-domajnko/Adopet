const usuarios = JSON.parse(localStorage.getItem('user')) || [];
const form = document.querySelector('.form');
const email = document.getElementById('email');
const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');

form.addEventListener('submit', e => {
  e.preventDefault();

  const usuario = conferirExistenciaUsuario(email.value);
  console.log(usuario);
  
  if (usuario) {
    console.log('user existente')
  } else {
    if (senha.value === confirmarSenha.value) {
      cadastrarUsuario();
    }
  }

  // location.href = "../pages/login.html";
})

function cadastrarUsuario() {
  const novoUsuario = {
    email: email.value,
    nome: nome.value,
    senha: senha.value,
    telefone: "",
    cidade: "",
    sobre: ""
  }

  usuarios.push(novoUsuario);
  localStorage.setItem('user', JSON.stringify(usuarios));
}

function conferirExistenciaUsuario(email) {
  return usuarios.find(usuario => usuario.email == email)
}