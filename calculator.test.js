const calc = require('./calculator');

test('adds two numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(calc.subtract(5, 2)).toBe(3);
});

test('multiplies two numbers', () => {
    expect(calc.multiply(3, 4)).toBe(12);
});

test('modulus of two numbers', () => {
    expect(calc.modulus(3, 6)).toBe(0);
});

test('divides two numbers', () => {
    expect(calc.divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
});
