/* const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(respostas);
})
 */

const fotoDoPerfil = document.querySelector('.perfil__img');
const urlFotoDoPerfil = localStorage.getItem('userImg') || "../assets/img/Usuário.png";

fotoDoPerfil.src = urlFotoDoPerfil;