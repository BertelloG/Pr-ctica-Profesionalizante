// Selecciona el botón de volver al principio
const backToTopButton = document.getElementById('back-to-top');

// Muestra u oculta el botón dependiendo del desplazamiento
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Cambia 300 por el valor deseado
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Funcionalidad de retorno al principio al hacer clic en el botón
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault(); // Previene el comportamiento por defecto del enlace
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Hace que el scroll sea suave
  });
});

//_________Sahumerios____________________________________________________________________________________________________________________________________________
import { sahumerios } from './Productos.js';
console.log(sahumerios);

function displaySahumerios() {
    const s_container =document.getElementById('sahumerios-container');

    sahumerios.forEach(product => {
        const s_card = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class"card-text">${product.description}</p>
            </div>
        </div>
        `;
        s_container.innerHTML += s_card;

    });
}

function scrollCards_S(direction) {
    const s_container = document.getElementById('sahumerios-container');
    const cardWidth = s_container.children[0].offsetWidth +10;

    if (direction === 'next') {
        s_container.scrollBy({left: cardWidth, behavior: 'smooth'});
    } else {
        s_container.scrollBy({left : -cardWidth, behavior: 'smooth'});
    }
}
document.getElementById('nextButton').addEventListener('click', () => scrollCards_S('next'));
document.getElementById('prevButton').addEventListener('click', () => scrollCards_S('prev'));

displaySahumerios();
//____________Velas_________________________________________________________________________________________________________________________________________

import { velas } from './Productos.js';
console.log(velas);

function displayVelas() {
  const v_container = document.getElementById('velas-container');

  velas.forEach(product => {
      const v_card = `
          <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
              </div>
          </div>
      `;
      v_container.innerHTML += v_card;
  });
}

/*function scrollCards_V(direction) {
  const v_container = document.getElementById('velas-container');
  const cardWidth = v_container.children[0].offsetWidth + 10; 

  if (direction === 'next') {
      v_container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  } else {
      v_container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }
}

document.getElementById('nextButton').addEventListener('click', () => scrollCards_V('next'));
document.getElementById('prevButton').addEventListener('click', () => scrollCards_V('prev'));
*/
displayVelas();
//______________Piedras_______________________________________________________________________________________________________________________________________


//_____________________________________________________________________________________________________________________________________________________