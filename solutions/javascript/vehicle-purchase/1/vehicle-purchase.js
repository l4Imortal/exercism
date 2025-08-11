// @// @ts-check

/**
 * Verifica se é necessário ter habilitação para operar um veículo.
 * Considera que carros e motos exigem habilitação.
 *
 * @param {string} kind - Tipo de veículo
 * @returns {boolean} - true se precisa de habilitação, false caso contrário
 */
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

/**
 * Escolhe entre duas opções recomendando a que vem primeiro em ordem alfabética.
 *
 * @param {string} option1 - Primeira opção
 * @param {string} option2 - Segunda opção
 * @returns {string} - Frase de recomendação
 */
export function chooseVehicle(option1, option2) {
  const melhor = option1 < option2 ? option1 : option2;
  return `${melhor} is clearly the better choice.`;
}

/**
 * Calcula o preço estimado de revenda com base no valor original e na idade do veículo.
 * - Menos de 3 anos: 80% do valor original
 * - Entre 3 e 10 anos: 70% do valor original
 * - Mais de 10 anos: 50% do valor original
 *
 * @param {number} originalPrice - Preço original
 * @param {number} age - Idade do veículo em anos
 * @returns {number} - Preço estimado de revenda
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}