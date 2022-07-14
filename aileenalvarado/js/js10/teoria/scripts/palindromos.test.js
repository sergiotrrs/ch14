const operacion = require("../scripts/operaciones"); 

test("Es un palindromo", ()=>{
    const palindromo = operacion.palindromo("Ana")
    expect(palindromo).toBe(true); 
});

test("No es un palindromo", ()=>{
    const palindromo = operacion.palindromo("hola")
    expect(palindromo).toBe(false); 
}); 

test("Es un palindromo", ()=>{
    const palindromo = operacion.palindromo("Anita lava la tina")
    expect(palindromo).toBe(true); 
});

test("Es un palindromo", ()=>{
    const palindromo = operacion.palindromo("Amor a la roma")
    expect(palindromo).toBe(true); 
});

test("Es un palindromo", ()=>{
    const palindromo = operacion.palindromo("Isaac no ronca asi")
    expect(palindromo).toBe(true); 
});