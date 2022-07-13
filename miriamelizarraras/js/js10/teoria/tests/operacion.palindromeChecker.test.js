const operacion = require("../scripts/operaciones")

test ("Debería decir la misma frase al revés", ()=>{
    const palindromo = operacion.palindromo("Anita lava la tina");
    expect(palindromo).toBe(true);
});

test ("Debería decir la misma frase al revés", ()=>{
    const palindromo = operacion.palindromo("Ana");
    expect(palindromo).toBe(true);
});

test ("Debería decir la misma frase al revés", ()=>{
    const palindromo = operacion.palindromo("Amor a Roma");
    expect(palindromo).toBe(true);
});

test ("Debería decir la misma frase al revés", ()=>{
    const palindromo = operacion.palindromo("Isaac no ronca asi");
    expect(palindromo).toBe(true);
});

test ("Debería decir la misma frase al revés", ()=>{
    const palindromo = operacion.palindromo("No es palindromo");
    expect(palindromo).toBe(false);
});

test ("Debería decir la misma frase al revés", ()=>{
    const palindromo = operacion.palindromo("1 amor, roma 1");
    expect(palindromo).toBe(true);
});

test ("Debería decir la misma frase al revés", ()=>{
    const palindromo = operacion.palindromo("Suerte");
    expect(palindromo).toBe(false);
});