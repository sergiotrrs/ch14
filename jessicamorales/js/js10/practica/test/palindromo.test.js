//Se importan as funciones a probar
const palin = require("../scripts/palindromo")

//Este archivo hará las pruebas unitarias para multiplica
//La funcion test es donde se configura mi prueba unitaria
//test("Comentario", function callBack);

test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("Anita lava la tina");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("Ana");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("Amor a Roma");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("Isaac no ronca asi");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("Isaac no ronca asi");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("No es palindromo");
    expect(palindromo).toBe(false);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("1 amor, roma 1");
    expect(palindromo).toBe(true);
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromo = palin.palindromo("Suerte");
    expect(palindromo).toBe(false);
});

