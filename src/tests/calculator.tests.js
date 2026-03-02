/**
 * Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (x / *)
 *  - Division (÷ / /)
 *  - Modulo (%)
 *  - Exponentiation (**)
 *  - Square Root (sqrt)
 * Including edge cases such as division by zero, negatives, and decimals.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
describe('add', () => {
  test('2 + 3 = 5 (from image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// --- Subtraction ---
describe('subtract', () => {
  test('10 - 4 = 6 (from image example)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('result is negative when b > a', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// --- Multiplication ---
describe('multiply', () => {
  test('45 * 2 = 90 (from image example)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one returns the same number', () => {
    expect(multiply(13, 1)).toBe(13);
  });

  test('multiplies two negative numbers returns positive', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// --- Division ---
describe('divide', () => {
  test('20 / 5 = 4 (from image example)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(100, 4)).toBe(25);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333);
  });

  test('divides a negative number', () => {
    expect(divide(-20, 4)).toBe(-5);
  });

  test('divides two negative numbers returns positive', () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test('divides by one returns the same number', () => {
    expect(divide(42, 1)).toBe(42);
  });

  test('throws an error on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('throws an error on division of zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// --- Modulo ---
describe('modulo', () => {
  test('5 % 2 = 1 (from image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('modulo with a negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with a negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo where a < b returns a', () => {
    expect(modulo(3, 10)).toBe(3);
  });

  test('throws an error on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });
});

// --- Power ---
describe('power', () => {
  test('2 ^ 3 = 8 (from image example)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of zero returns 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('raises a number to the power of one returns itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a negative base to an even exponent returns positive', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent returns negative', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('fractional exponent (square root via power)', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// --- Square Root ---
describe('squareRoot', () => {
  test('√16 = 4 (from image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 is 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test('square root of 144 is 12', () => {
    expect(squareRoot(144)).toBe(12);
  });

  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });

  test('throws an error for large negative numbers', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });
});
