async function importarPets() {
  const res = await fetch('http://localhost:3000/pets');
  const conv = await res.json();
  return conv;
}

const pets = await importarPets();
const container = document.querySelector('.pets');

pets.forEach(pet => renderizar(pet));


function renderizar(pet) {
  container.innerHTML += `
<div class="pets__card">
  <img src="../assets/img/Animais_-_${pet.nome}.png" alt="${pet.animal} ${pet.nome}" class="card__img">
  <div class="card__infos">
    <h3 class="h4">${pet.nome}</h3>
    <ul class="pequeno card__infos__lista">
      <li>${pet.idade}</li>
      <li>Porte ${pet.porte}</li>
      <li>${pet.caracteristicas}</li>
    </ul>
    <span class="legenda">${pet.cidade} (${pet.estado})</span>
    <div class="contato">
      <a href="../pages/mensagem.html">
        <img src="../assets/img/ícone_mensagem.png" alt="Falar com o responsável">
        <span class="legenda">Falar com responsável</span>
      </a>
    </div>
  </div>
</div>
  `;
}