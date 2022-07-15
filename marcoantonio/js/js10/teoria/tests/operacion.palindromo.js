//Se importan as funciones a probar
const operacion = require("../scripts/operaciones");

//Este archivo hará las pruebas unitarias para multiplica
//La funcion test es donde se configura mi prueba unitaria
//test("Comentario", function callBack);

const operacion = require("../scripts/operaciones");


//Este archivo hará las pruebas unitarias para multiplica
//La función test es donde se configura mi prueba unitaria
//test ("comentario", function callBack con función flecha) 

// test("Deberá multiplicar 2 números positivos", () => {

//     //expect(fncProbada).matcher();
//     expect(operacion.multiplica(5, 6)).toBe(30);//Aquí se escribe el resultado que se espera de la función

// });


test("Deberia de decir si un texto es palindromo", () => {
    const palindromo = operacion.palindromo("Anita lava la tina");
    expect(palindromo).toBe(true);
});

test("Deberia de decir si un texto es palindromo", () => {
    const palindromo = operacion.palindromo("Ana");
    expect(palindromo).toBe(true);
});

test("Deberia de decir si un texto es palindromo", () => {
    const palindromo = operacion.palindromo("Amor a Roma");
    expect(palindromo).toBe(true);
});

test("Deberia de decir si un texto es palindromo", () => {
    const palindromo = operacion.palindromo("Isaac no ronca asi");
    expect(palindromo).toBe(true);
});

test("Deberia de decir si un texto es palindromo", () => {
    const palindromo = operacion.palindromo("No es palindromo");
    expect(palindromo).toBe(false);
});

test("Deberia de decir si un texto es palindromo", () => {
    const palindromo = operacion.palindromo("1 amor, Roma 1");
    expect(palindromo).toBe(true);
});

test("Deberia de decir si un texto es palindromo", () => {
    const palindromo = operacion.palindromo("suerte");
    expect(palindromo).toBe(false);
});

