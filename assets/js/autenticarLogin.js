const usuarios = JSON.parse(localStorage.getItem('user')) || [];

console.log(usuarios);

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const msgErro = document.getElementById('mensagem-erro-login');
  const usuario = usuarios.find(usuario => usuario.email == email.value);

  if (usuario) {
    if (usuario.senha == senha.value) {
      msgErro.classList.add('hidden');
      localStorage.setItem('userAutenticado', JSON.stringify(email.value));
      location.href = "../pages/home.html";
    } else {
      msgErro.classList.remove('hidden');
    }
  } else {
    msgErro.classList.remove('hidden');
  }


  email.value = "";
  senha.value = "";
})