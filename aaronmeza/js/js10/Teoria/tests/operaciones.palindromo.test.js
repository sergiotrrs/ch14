//Se importa las funciones a probar 
const verificacion = require("../scripts/operaciones");

test("Debería regresar un true", ()=>{
    const esPalindromo = verificacion.esPalindromo("Anita lava la tina");
    expect(esPalindromo).toBe(true)
    
   
});


test("Debería regresar un true", ()=>{
    const esPalindromo = verificacion.esPalindromo("Ana");
    expect(esPalindromo).toBe(true)
    
    
});

test("Debería regresar un true", ()=>{
    
    const esPalindromo = verificacion.esPalindromo("Amor a Roma");
    expect(esPalindromo).toBe(true)
});

test("Debería regresar un true", ()=>{
    
    
    const esPalindromo = verificacion.esPalindromo("Isaac no ronca asi");
    expect(esPalindromo).toBe(true)
});


test("Debería regresar un true", ()=>{
    
    const esPalindromo = verificacion.esPalindromo("No es palindromo");
    expect(esPalindromo).toBe(false)
});

test("Debería regresar un true", ()=>{
    
    const esPalindromo = verificacion.esPalindromo("1 amor, roma 1");
    expect(esPalindromo).toBe(true)
});


test("Debería regresar un true", ()=>{
    
    const esPalindromo = verificacion.esPalindromo("suerte");
    expect(esPalindromo).toBe(false)
});
