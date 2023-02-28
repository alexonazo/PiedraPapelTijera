let jugador1 = 0;
let jugador2 = 0;

const opciones = document.querySelectorAll("#opciones button");
const mensaje = document.querySelector("#mensaje");
const marcador_j1 = document.querySelector('#j1m');
const marcador_j2 = document.querySelector('#j2m');

opciones.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    let jugador1_opcion = opcion.textContent.toLowerCase();
    let jugador2_opcion = opciones[Math.floor(Math.random() * opciones.length)].textContent.toLowerCase();
    

    if (
      (jugador1_opcion === "piedra" && jugador2_opcion === "tijera") ||
      (jugador1_opcion === "papel" && jugador2_opcion === "piedra") ||
      (jugador1_opcion === "tijera" && jugador2_opcion === "papel")
    ) {
      jugador1++;
      mensaje.textContent = `¡Jugador 1 gana la ronda! La opción de Jugador 2 era: ${jugador2_opcion}`;
      marcador_j1.textContent = jugador1;
      marcador_j1.classList.add('ganador');
    } else if (
      (jugador2_opcion === "piedra" && jugador1_opcion === "tijera") ||
      (jugador2_opcion === "papel" && jugador1_opcion === "piedra") ||
      (jugador2_opcion === "tijera" && jugador1_opcion === "papel")
    ) {
      jugador2++;
      marcador_j2.textContent = jugador2;
      marcador_j2.classList.add('ganador');
      mensaje.textContent = `¡Jugador 2 gana la ronda! La opción de Jugador 2 era: ${jugador2_opcion}`;
    } else {
      mensaje.textContent = `¡Empate! Ambos jugadores eligieron ${jugador1_opcion}`;
    }

    if (jugador1 === 3) {
      mensaje.textContent = "¡Jugador 1 gana el juego!";
      
      opciones.forEach((opcion) => {
        opcion.disabled = true;
      });
    } else if (jugador2 === 3) {
      mensaje.textContent = "¡Jugador 2 gana el juego!";
      
      opciones.forEach((opcion) => {
        opcion.disabled = true;
      });
    }
    });
});
