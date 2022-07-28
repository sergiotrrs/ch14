// INICIO DESDE DONDE ESTOY../ me regreso un  directorio
//Se importa las funciones  probar
const operacion= require("../scripts/operaciones");

//Este archivo serán las pruebas unitarias para esPalindromo
//La función test es donde se configura mi prueba unitaria

//test(comenario, función callback) en lugar de una callback puedo poner una función flecha
test("Debera comprobar si: Anita lava la tina, es palindromo", ()=>{
    //expect(función probada).matcher();
    expect(operacion.esPalindromo("Anita lava la tina")).toBe(true); 
});

test ("Debera comprobar si: Ana, es palindromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Ana");
    expect(esPalindromo).toBe(true);
});

test ("Debera comprobar si:Amor a Roma, es palindromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Amor a Roma");
    expect(esPalindromo).toBe(true);
});


test ("Debera comprobar si:Isaac no ronca asi, es palindromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Isaac no ronca asi");
    expect(esPalindromo).toBe(true);
});

test ("Debera comprobar si:No es palindromo", ()=>{
    const esPalindromo = operacion.esPalindromo("No es palindromo");
    expect(esPalindromo).toBe(false);
});
test ("Debera comprobar si:1 amor, roma 1, es palindromo", ()=>{
    const esPalindromo = operacion.esPalindromo("1 amor, roma 1");
    expect(esPalindromo).toBe(true);
});

test ("Debera comprobar si:suerte, es palindromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Suerte");
    expect(esPalindromo).toBe(false);
});

