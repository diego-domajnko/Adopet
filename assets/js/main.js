import { validarFormulario } from "./validarForm.js";

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (validarFormulario()) {
    console.log('envio ok');
  } else {
    console.log('não enviou formulario')
  }

})
