const operacion = require("../script/operaciones");

//este archivo sera para las pruebas unitarias para multiplica
//la funcion test es donde se configura mi prueba unitaria
//test ();
test("La frase anita lava la tina debe serdebe ser true", () => {
  expect(operacion.palindromo("anita lava la tina")).toBe(true);
})
test("La palabra ana debe serdebe ser true", () => {
  expect(operacion.palindromo("ana")).toBe(true);
})
test("La frase Amor a Roma debe serdebe ser true", () => {
  expect(operacion.palindromo("Amor a Roma")).toBe(true);
})
test("La frase Isaac no ronca asi debe serdebe ser true", () => {
  expect(operacion.palindromo("Isaac no ronca asi")).toBe(true);
})
test("La frase no es un palindromo debe ser debe ser false", () => {
  expect(operacion.palindromo("no es un palindromo")).toBe(false);
})
test("La frase debe ser 1 amor, roma 1 ser true", () => {
  expect(operacion.palindromo("1 amor, roma 1")).toBe(true);
})
test("la palabra Suerte debe ser false ", () => {
  expect(operacion.palindromo("Suerte")).toBe(false);
})




