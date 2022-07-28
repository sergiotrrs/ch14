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
    const suma = operacion.suma(4,5);
    expect(suma).toBe(9);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const suma = operacion.suma("ey",5);
    expect(suma).toBe(NaN);
});

test ("Deberia sumar los dos números son de punto flotanre", ()=>{
    const suma = operaciones.suma(5.6,5.5);
    expect(suma).toBe(11.1);
});