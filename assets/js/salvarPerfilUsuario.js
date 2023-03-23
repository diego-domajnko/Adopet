const form = document.querySelector('.form-msg');
const btnForm = document.querySelector('.btn-form');
const inputFotoPerfil = document.querySelector('#foto-perfil');
const imgPerfil = document.querySelector('.seletor-img');
const camposForm = document.querySelectorAll('[disabled]');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const cidade = document.getElementById('cidade');
const sobre = document.getElementById('sobre');
const usuarios = JSON.parse(localStorage.getItem('user')) || [];
const usuarioLogado = JSON.parse(localStorage.getItem('userAutenticado'));
const dadosUsuarioLogado = usuarios.find(user => user.email == usuarioLogado);

if (!Array.isArray(dadosUsuarioLogado)) {
  lerUser();
}

form.addEventListener('submit', e => {
  e.preventDefault();

  if (btnForm.classList.contains('btn-form')) {
    habilitarEdicao();
  }
  else {
    salvarFormulario();
  }
})

inputFotoPerfil.addEventListener('change', () => {
  lerImgPrevia(inputFotoPerfil);
  console.log(lerImgPrevia(inputFotoPerfil));
});

function lerUser() {
  nome.value = dadosUsuarioLogado.nome;
  telefone.value = dadosUsuarioLogado.telefone;
  cidade.value = dadosUsuarioLogado.cidade;
  sobre.value = dadosUsuarioLogado.sobre;
  imgPerfil.src = localStorage.getItem(`userImg${usuarioLogado}`) || "../assets/img/Usuário.png";
}

function habilitarEdicao() {
  camposForm.forEach(e => e.disabled = false);
  btnForm.textContent = 'Salvar';
  btnForm.classList.remove('btn-form');
}

function lerImgPrevia(input) {
  const arquivo = new FileReader();
  let url = '';
  
  arquivo.readAsDataURL(input.files[0]);

  arquivo.addEventListener('load', () => {
    url = arquivo.result;
    imgPerfil.src = url;
  })
}

function salvarFormulario() {
  const fotoDoPerfil = document.querySelector('.perfil__img');
  const usuarioEditado = {
    email: dadosUsuarioLogado.email,
    nome: dadosUsuarioLogado.nome,
    senha: dadosUsuarioLogado.senha,
    telefone: telefone.value,
    cidade: cidade.value,
    sobre: sobre.value
  }

  usuarios.splice(usuarios.indexOf(dadosUsuarioLogado), 1);
  usuarios.push(usuarioEditado);
  
  localStorage.setItem(`userImg${usuarioLogado}`, imgPerfil.src);
  localStorage.setItem('user', JSON.stringify(usuarios));

  fotoDoPerfil.src = imgPerfil.src;

  btnForm.textContent = 'Editar';
  btnForm.classList.add('btn-form');
  camposForm.forEach(e => e.disabled = true);
}
