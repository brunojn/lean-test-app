export function somaNumerosPares(numeros: number[]): number {
    return numeros.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}