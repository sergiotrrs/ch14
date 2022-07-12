const operacion = require('./../scripts/operaciones');

//Este archivo es un test de prueba de la funcion suma
//La funcion test es donde se configura mi prueba unitaria
//test("comentario de prueba", fuc callback);
test('suma de dos numeros', () => {
    //expect(fncProbada).marcher();
    expect(operacion.suma(1, 2)).toBe(3);
});
/*
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
    expect(suma).toBe("45");
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const suma = operacion.suma("ey",5);
    expect(suma).toBe(NaN);
});
*/
