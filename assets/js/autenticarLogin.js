async function buscarUsuarios() {
  const res = await fetch('http://localhost:3000/usuarios');
  const conv = await res.json();
  return conv;
}

const usuarios = await buscarUsuarios();

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = document.getElementById('email');
  const usuario = usuarios.find(usuario => usuario.email == email.value);

  if (usuario) {
    const senha = document.getElementById('senha');
    if (usuario.senha == senha.value) {
      location.href = "../pages/home.html";
    }
  } else {
    form.innerHTML += `<span class="paragrafo" style="color:red">Usuário ou senha incorretos</span>`;
  }
})