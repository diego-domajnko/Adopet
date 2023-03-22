import { validarEmail } from "./validarEmail.js";

export function validarFormulario() {
  const email = document.getElementById('email');
  
  if (!validarEmail(email.value)) {
    return !validarEmail(email.value);
  };

  return true;
}