const { operacion } = require("../scripts/operaciones");

test ("Anita lava la tina, regresa true", ()=>{
    const palindromo = operacion.palindromo("Anita lava la tina");
    expect(palindromo).toBe(true);
});