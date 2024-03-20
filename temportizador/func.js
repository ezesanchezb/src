const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

let minutos = 5;
let segundos = 0;

let intervalo;
let iniciado = false; // Variable para controlar si el temporizador está iniciado

const iniciar = () => {
  if (!iniciado) {
    iniciado = true;
    intervalo = setInterval(() => {
      if (segundos === 0) {
        if (minutos === 0) {
          clearInterval(intervalo);
          alert('¡El temporizador ha terminado!');
          iniciado = false; // Restablece el estado de iniciado cuando termina
          return;
        }
        minutos--;
        segundos = 60;
      }
      segundos--;
      actualizarPantalla();
    }, 1000);
  }
};

const detener = () => {
  if (iniciado) {
    clearInterval(intervalo);
    iniciado = false;
  }
};

const reiniciar = () => {
  if (iniciado) {
    detener();
  }
  minutos = 5;
  segundos = 0;
  actualizarPantalla();
};

const actualizarPantalla = () => {
  minutosEl.textContent = minutos.toString().padStart(1, '0');
  segundosEl.textContent = segundos.toString().padStart(2, '0');
};

const botonIniciar = document.getElementById('iniciar');
const botonDetener = document.getElementById('detener');
const botonReiniciar = document.getElementById('reiniciar');

botonIniciar.addEventListener('click', iniciar);
botonDetener.addEventListener('click', detener);
botonReiniciar.addEventListener('click', reiniciar);

// Desactiva los botones Detener y Reiniciar al cargar la página
botonDetener.disabled = true;
botonReiniciar.disabled = true;

// Habilita los botones Detener y Reiniciar cuando se presiona el botón Iniciar
botonIniciar.addEventListener('click', () => {
  botonDetener.disabled = false;
  botonReiniciar.disabled = false;
});
