
const operacion = require('../scripts/operaciones');

test('Debe retornar true si el string es palindromo', () => {
    expect(operacion.verificadoraPalindromo('Anita lava la tina')).toBe(true);
});

test ("debera dar true si es palindromo o si no false ", ()=>{
    //expect (fncProbada).matcher();
    expect (operacion.verificadoraPalindromo('ana')).toBe(true);
} );
test ("debera dar true si es palindromo o si no false ", ()=>{
    //expect (fncProbada).matcher();
    expect (operacion.verificadoraPalindromo('amor a roma')).toBe(true);
} );
test ("debera dar true si es palindromo o si no false ", ()=>{
    //expect (fncProbada).matcher();
    expect (operacion.verificadoraPalindromo('isaac no ronca asi')).toBe(true);
} );
test ("debera dar true si es palindromo o si no false ", ()=>{
    //expect (fncProbada).matcher();
    expect (operacion.verificadoraPalindromo('suerte')).toBe(false);
} );


