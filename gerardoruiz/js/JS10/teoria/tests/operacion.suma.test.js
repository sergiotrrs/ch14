const operacion = require ("../script/operaciones");

/* Este archivo hará las pruebas unitarias para multiplica 
La función test es donde se configura mi prueba unitaria 
test ("comentariao", fnc callback); */

test ("Deberá sumar dos números positivos", ()=>{
    // expect  (fncProbada).matcher();
    expect (operacion.suma(5,6)).toBe(11)
} );

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
    const suma = operacion.suma("ey",5);
    expect(suma).toBe(NaN);
});

test ("Debería multplicar si los dos numeros son de punto flotante", ()=>{
    const multiplica = operacion.suma(5.6,5.5);
    expect(multiplica).toBeCloseTo(11.1);
});