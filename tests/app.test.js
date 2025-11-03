const { processData } = require('../src/app');
const { add, multiply, subtract, divide, greet } = require('../src/utils');

describe('Utility Functions', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('greet', () => {
    test('should return greeting message', () => {
      expect(greet('World')).toBe('Hello, World!');
    });
  });
});

describe('Application Functions', () => {
  describe('processData', () => {
    test('should sum an array of numbers', () => {
      expect(processData([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should handle empty array', () => {
      expect(processData([])).toBe(0);
    });
  });
});
