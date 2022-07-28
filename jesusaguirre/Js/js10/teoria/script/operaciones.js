
/* function suma(a, b) {
  return a + b;
}
module.exports = suma();

function multiplica(a, b) {
  return a * b;
}
module.exports = multiplica(); */
function suma(a, b) {
  return Number(a) + Number(b);
}
multiplica = (a, b) => a * b;
function palindromo(palabra) {
  const minusculaSinEspacio = palabra.toUppercase().replace(/[\W_]/g, '');
  const voltearPalabra = minusculaSinEspacio.split('').reverse().join('');
  return voltearPalabra === minusculaSinEspacio;
}
module.exports = { suma, multiplica, palindromo }
