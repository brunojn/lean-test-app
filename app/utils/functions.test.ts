// src/utils/utilities.test.ts
import { somaNumerosPares } from './functions';

describe('somaNumerosPares', () => {
  it('should return 0 for an empty array', () => {
    const result = somaNumerosPares([]);
    expect(result).toBe(0);
  });

  it('should return the sum of even numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = somaNumerosPares(numbers);
    expect(result).toBe(20); // 2 + 4 + 6 + 8 = 20
  });

  it('should return 0 when there are no even numbers', () => {
    const numbers = [1, 3, 5, 7];
    const result = somaNumerosPares(numbers);
    expect(result).toBe(0);
  });
});
