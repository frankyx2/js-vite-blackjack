import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCarta ejemplo : ["C", "D", "H", "S"]
 * @param {array<string>} tiposEspeciales ejemplo : ["A", "J", "Q", "K"]
 * @returns {Array<String>}
 * Regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("Tipos de cartas obligatorios como un arreglo de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
