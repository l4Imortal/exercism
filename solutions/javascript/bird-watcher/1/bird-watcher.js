// @// @ts-check

/**
 * Calcula o total de pássaros contados.
 *
 * @param {number[]} passarosPorDia - Array com número de pássaros vistos por dia
 * @returns {number} - Total de pássaros
 */
export function totalBirdCount(passarosPorDia) {
  let total = 0;
  for (let i = 0; i < passarosPorDia.length; i++) {
    total += passarosPorDia[i];
  }
  return total;
}

/**
 * Calcula o total de pássaros vistos em uma semana específica.
 *
 * @param {number[]} passarosPorDia - Array com número de pássaros vistos por dia
 * @param {number} semana - Número da semana (1 = primeira semana)
 * @returns {number} - Total de pássaros nessa semana
 */
export function birdsInWeek(passarosPorDia, semana) {
  const inicio = (semana - 1) * 7;
  const fim = inicio + 7;
  let total = 0;
  for (let i = inicio; i < fim; i++) {
    total += passarosPorDia[i];
  }
  return total;
}

/**
 * Corrige o registro, aumentando em 1 a contagem de pássaros a cada dois dias.
 *
 * @param {number[]} passarosPorDia - Array com número de pássaros vistos por dia
 * @returns {void} - Não retorna nada (altera o array original)
 */
export function fixBirdCountLog(passarosPorDia) {
  for (let i = 0; i < passarosPorDia.length; i += 2) {
    passarosPorDia[i] += 1;
  }
}