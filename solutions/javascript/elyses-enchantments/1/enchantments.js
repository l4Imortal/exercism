// @// @ts-check

/**
 * Recupera a carta na posição informada (base 0)
 *
 * @param {number[]} cards - Pilha de cartas
 * @param {number} position - Posição (0-index)
 * @returns {number} - Carta na posição
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Troca a carta na posição por uma carta nova
 *
 * @param {number[]} cards - Pilha de cartas
 * @param {number} position - Posição (0-index)
 * @param {number} replacementCard - Nova carta
 * @returns {number[]} - Pilha com a carta trocada
 */
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

/**
 * Insere nova carta no topo (final) da pilha
 *
 * @param {number[]} cards - Pilha de cartas
 * @param {number} newCard - Nova carta
 * @returns {number[]} - Pilha com a carta adicionada
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

/**
 * Remove a carta na posição informada
 *
 * @param {number[]} cards - Pilha de cartas
 * @param {number} position - Posição (0-index)
 * @returns {number[]} - Pilha sem a carta removida
 */
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

/**
 * Remove a carta do topo (final) da pilha
 *
 * @param {number[]} cards - Pilha de cartas
 * @returns {number[]} - Pilha sem a última carta
 */
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

/**
 * Insere nova carta na base (início) da pilha
 *
 * @param {number[]} cards - Pilha de cartas
 * @param {number} newCard - Nova carta
 * @returns {number[]} - Pilha com a carta adicionada no início
 */
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

/**
 * Remove a carta da base (início) da pilha
 *
 * @param {number[]} cards - Pilha de cartas
 * @returns {number[]} - Pilha sem a primeira carta
 */
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

/**
 * Verifica se o número de cartas é igual ao tamanho informado
 *
 * @param {number[]} cards - Pilha de cartas
 * @param {number} stackSize - Tamanho esperado
 * @returns {boolean} - true se igual, false caso contrário
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}