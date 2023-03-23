const usuarioLogado = JSON.parse(localStorage.getItem('userAutenticado'));
const fotoDoPerfil = document.querySelector('.perfil__img');
const urlFotoDoPerfil = localStorage.getItem(`userImg${usuarioLogado}`) || "../assets/img/Usuário.png";

fotoDoPerfil.src = urlFotoDoPerfil;