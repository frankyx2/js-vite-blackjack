/**
 * Esta funcion pide una carta del deck
 * @param {array<string>} deck es el deck
 * @returns {<String>}
 * Regresa un nuevo deck de cartas
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
