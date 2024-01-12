/**
 *
 * @param {string} carta El String de la carta para ser buscada e insertarse
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("La carta tiene que enviarse como parametro");
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
