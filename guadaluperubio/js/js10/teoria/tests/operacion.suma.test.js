// se importa las funciones a probar
const operacion =require("../scripts/operaciones");

// eEste archivo hara las pruebas unitarias para la suma
// la funcion test es donde se configura mi prueba unitaria
// test ("comentario de lo que hace mi funcio", fnc callback);

test("Sumara dos numeros positivos", ( ) =>{

    // expect(fncProbada).matcher();
    expect (operacion.suma(5,6)).toBe(11);

})

test ("Debería sumar dos números negativos", ()=>{
    const suma = operacion.suma(-5,-8);
    expect(suma).toBe(-13);
});

test ("Debería sumar un positivo y un negativo", ()=>{
    const suma = operacion.suma(-10,5);
    expect(suma).toBe(-5);
});

test ("Debería sumar si un datos es númerico y otro tipo string", ()=>{
    const suma = operacion.suma("4",5);
    expect(suma).toBe(9);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const suma = operacion.suma("Ey",5);
    expect(suma).toBe(NaN);
});


// test ("Debería sumar dos numero punto flotante", ()=>{
//     const suma = operacion.suma(5.6,5.5);
//     expect(suma).toBe(11.1);
// });

// **************************************palindromo*****************************************

//Se importan as funciones a probar


