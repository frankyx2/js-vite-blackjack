import { crearCartaHTML } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 *
 * @param {number} puntosMinimos Puntos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento html para mostrar
 * @param {HTMLElement} divCartasComputadora Div donde se muestran las cartas de la computadora
 * @param {Array} deck array de string
 */

export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son nesesarios");
  if (!deck) throw new Error("El deck es nesesario");
  if (!puntosHTML) throw new Error("Los PuntosHTML son nesesarios");
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
