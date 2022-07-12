const operacion = require ("../script/operaciones");

/* Este archivo hará las pruebas unitarias para multiplica 
La función test es donde se configura mi prueba unitaria 
test ("comentariao", fnc callback); */

test ("Deberá multplicar dos números positivos", ()=>{
    // expect  (fncProbada).matcher();
    expect (operacion.multiplica(5,6)).toBe(30)
} );

test ("Debería multplicar dos números negativos", ()=>{
    const multiplica = operacion.multiplica(-5,-8);
    expect(multiplica).toBe(40);
});

test ("Debería multplicar un positivo y un negativo", ()=>{
    const multiplica = operacion.multiplica(-10,5);
    expect(multiplica).toBe(-50);
});

test ("Debería multplicar si un datos es númerico y otro tipo string", ()=>{
    const multiplica = operacion.multiplica("4",5);
    expect(multiplica).toBe(20);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplica = operacion.multiplica("ey",5);
    expect(multiplica).toBe(NaN);
});

test ("Debería multplicar si los dos numeros son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});
