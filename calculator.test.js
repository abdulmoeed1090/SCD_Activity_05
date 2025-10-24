const calc = require('./calculator');

test('adds two numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(calc.subtract(5, 2)).toBe(3);
});

test('multiplies two numbers', () => {
    expect(calc.multiply(2, 3)).toBe(6);
});

test('modulus of two numbers', () => {
    expect(calc.modulus(3, 6)).toBe(3);  // <-- corrected expected value
});

test('divides two numbers', () => {
    expect(calc.divide(6, 2)).toBe(3);
});

test('throws error when dividing by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
});
