const operacion = require("../scripts/palindromos")

test("true si 'Anita lava la tina' es palíndromo", ()=>{
    expect(palindromo.palito("Anita lava la tina")).toBe(true);
});

test("true si 'Anita lava la tina' es palíndromo", ()=>{
    const palindromo = operacion.verificadoraPalindromo("Anita lava la tina");
    expect(palindromo).toBe(true);
});

test("true si 'Anita lava la tina' es palíndromo", ()=>{
    expect(palindromo.palindromo("Anita lava la tina")).toBe(true);
});