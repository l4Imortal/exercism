// @// @ts-check

/**
 * Determina quanto tempo leva para preparar um determinado suco.
 *
 * @param {string} nome - Nome do suco
 * @returns {number} - Tempo em minutos
 */
export function timeToMixJuice(nome) {
  switch (nome) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5; // para sucos não listados
  }
}

/**
 * Calcula quantos limões precisam ser cortados para atingir o número de gomos necessários.
 *
 * @param {number} gomosNecessarios - Quantidade de gomos necessários
 * @param {string[]} limoes - Array com tamanhos dos limões ('small', 'medium', 'large')
 * @returns {number} - Quantidade de limões cortados
 */
export function limesToCut(gomosNecessarios, limoes) {
  let gomosContados = 0;
  let limoesCortados = 0;

  const gomosPorLimao = {
    small: 6,
    medium: 8,
    large: 10,
  };

  while (gomosContados < gomosNecessarios && limoesCortados < limoes.length) {
    gomosContados += gomosPorLimao[limoes[limoesCortados]];
    limoesCortados++;
  }

  return limoesCortados;
}

/**
 * Determina quais pedidos ainda precisam ser preparados após o fim do turno.
 *
 * @param {number} tempoRestante - Tempo restante em minutos
 * @param {string[]} pedidos - Lista de pedidos de sucos
 * @returns {string[]} - Pedidos restantes após o tempo acabar
 */
export function remainingOrders(tempoRestante, pedidos) {
  let tempo = tempoRestante;
  let indice = 0;

  while (tempo > 0 && indice < pedidos.length) {
    tempo -= timeToMixJuice(pedidos[indice]);
    indice++;
  }

  return pedidos.slice(indice);
}