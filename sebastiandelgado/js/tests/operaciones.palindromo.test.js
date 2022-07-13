


const operacion = require('../scripts/operaciones');

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('Anita lava la tina')).toBe(true);
});

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('Ana')).toBe(true);
});

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('Amora a Roma')).toBe(true);
});

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('Isaac no ronca asi')).toBe(true);
});

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('no es palíndromo')).toBe(false);
});

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('1 amor, roma 1')).toBe(true);
});
test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('Suerte')).toBe(false);
});