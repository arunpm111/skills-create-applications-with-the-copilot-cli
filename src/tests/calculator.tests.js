/**
 * Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (x / *)
 *  - Division (÷ / /)
 * Including edge cases such as division by zero, negatives, and decimals.
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
