//Este archivo hará las pruebas unitarias para multiplica
//La funcion test es donde se configura mi prueba unitaria
//test("Comentario", function callBack);


test ("Debería leer el palíndromo al revés", ()=>{
    const palindromeChecker = operacion.palindromeChecker("Anita lava la tina");
    expect(palindromeChecker).toBeTruthy;
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromeChecker = operacion.palindromeChecker("Ana");
    expect(palindromeChecker).toBeTruthy;
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromeChecker = operacion.palindromeChecker("Amor a Roma");
    expect(palindromeChecker).toBeTruthy;
});
test ("Debería leer el palíndromo al revés", ()=>{
    const palindromeChecker = operacion.palindromeChecker("Isaac no ronca asi");
    expect(palindromeChecker).toBeTruthy;
});



const operacion = require("../scripts/operaciones");