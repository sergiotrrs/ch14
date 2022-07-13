

const operacion=require("../scripts/operaciones");

test ("Debería decir si es un palíndromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Anita lava la tina");
    expect(esPalindromo).toBe(true);
});

test ("Debería decir si es un palíndromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Ana");
    expect(esPalindromo).toBe(true);
});

test ("Debería decir si es un palíndromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Amor a Roma");
    expect(esPalindromo).toBe(true);
});

test ("Debería decir si es un palíndromo", ()=>{
    const esPalindromo = operacion.esPalindromo("Isaac no ronca asi");
    expect(esPalindromo).toBe(true);
});

test ("Debería decir si es un palíndromo", ()=>{
    const esPalindromo = operacion.esPalindromo("suerte");
    expect(esPalindromo).toBe(false);
});

