// MODO OSCURO
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark')
    ? '☀️ Modo claro'
    : '🌙 Modo oscuro';
});

// INTERACCIÓN 2: Mensaje al hacer clic
const destinoBtn = document.querySelector('.btn[href="Proxim.html"]');
if (destinoBtn) {
  destinoBtn.addEventListener('click', () => {
    alert('¡Explora tu próximo destino con Travelogo! 🌎');
  });
}

// INTERACCIÓN 3: Mensaje al hacer clic
const reservaBtn = document.querySelector('.btn[href="Reserva.html"]');
if (reservaBtn) {
  reservaBtn.addEventListener('click', () => {
    alert('¡Confirma tu reserva!');
  });
}

// INTERACCIÓN 4: FORMULARIO

const formReserva = document.querySelector('.form-reserva');
if (formReserva) {
  formReserva.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Se envió el formulario de forma correcta, nos contactaremos contigo.');
    formReserva.reset(); 
  });
}