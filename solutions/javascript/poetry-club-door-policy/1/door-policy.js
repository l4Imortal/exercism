// @ts-check

/**
 * Retorna o primeiro caractere da linha (porta da frente).
 *
 * @param {string} line - Linha do poema
 * @returns {string} - Primeiro caractere
 */
export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Formata a senha da porta da frente:
 * primeira letra maiúscula e o restante minúsculo.
 *
 * @param {string} word - Palavra formada pelas letras da porta da frente
 * @returns {string} - Senha formatada
 */
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Retorna o último caractere da linha (porta dos fundos),
 * ignorando espaços no final.
 *
 * @param {string} line - Linha do poema
 * @returns {string} - Último caractere
 */
export function backDoorResponse(line) {
  return line.trim().slice(-1);
}

/**
 * Formata a senha da porta dos fundos:
 * mesma lógica da porta da frente, mas com “, please” no final.
 *
 * @param {string} word - Palavra formada pelas letras da porta dos fundos
 * @returns {string} - Senha formatada com pedido
 */
export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
}