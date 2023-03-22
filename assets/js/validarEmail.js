var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function validarEmail(email) {
  try {
    if (emailRegex.test(email)) {
      return emailRegex.test(email);
    }
  }
  catch {
    throw Error('Email incorreto');
  }
}