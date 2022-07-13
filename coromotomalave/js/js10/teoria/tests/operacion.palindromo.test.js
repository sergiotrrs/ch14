
//Se importan as funciones a probar
const operacion = require("../scripts/operaciones");

//Este archivo hará las pruebas unitarias para multiplica
//La funcion test es donde se configura mi prueba unitaria
//test("Comentario", function callBack);

test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = operacion.palindromo("Anita lava la tina");
    expect(palindromo).toBeTruthy();
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = operacion.palindromo("Ana");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = operacion.palindromo("Amor a Roma");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = operacion.palindromo("Isaac no ronca asi");
    expect(palindromo).toBe(true);
});
