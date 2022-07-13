const operacion = require('../scripts/operaciones');

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.palindromo('Anita lava la tina')).toBe(true);
});


test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.palindromo('Ana')).toBe(true);
});

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.palindromo('Amor a Roma')).toBe(true);
});

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.palindromo('Isaac no ronca asi')).toBe(true);
});

