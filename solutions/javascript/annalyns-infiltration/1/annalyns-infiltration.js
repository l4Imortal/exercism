// @ts-check

/**
 * O ataque rápido só pode acontecer se o cavaleiro estiver dormindo.
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * Podemos espionar se qualquer um estiver acordado.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * Só podemos sinalizar para o prisioneiro se ele estiver acordado e o arqueiro estiver dormindo.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/**
 * Podemos libertar o prisioneiro se:
 * - o cachorro está presente **e** o arqueiro está dormindo, ou
 * - o prisioneiro está acordado **e** todos os guardas estão dormindo.
 */
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  return (petDogIsPresent && !archerIsAwake) ||
         (prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}
