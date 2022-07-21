//Impoorta las funciones
const ejercicio = require("../scripts/ejercicio.js")

test ("Se espera true de Anita lava la tina", () => {
    const result = ejercicio.checkPalind("Anita lava la tina");
    expect(result).toBe(true);
})
test ("Se espera true de Ana", () => {
    const result = ejercicio.checkPalind("Ana");
    expect(result).toBe(true);
})
test ("Se espera true de Amor a Roma", () => {
    const result = ejercicio.checkPalind("Amor a Roma");
    expect(result).toBe(true);
})
test ("Se espera true de Isaac no ronca así", () => {
    const result = ejercicio.checkPalind("Isaac no ronca asi");
    expect(result).toBe(true);
})
test ("Se espera false de No es palindromo", () => {
    const result = ejercicio.checkPalind("No es palindromo");
    expect(result).toBe(false);
})
test ("Se espera true de 1 amor, Roma 1", () => {
    const result = ejercicio.checkPalind("1 amor, Roma 1");
    expect(result).toBe(true);
})
test ("Se espera true de Suerte", () => {
    const result = ejercicio.checkPalind("Suerte");
    expect(result).toBe(false);
})