//Se importa las funciones a probar
const operacion = require("../scripts/operaciones");

//Este archivo hará las pruebas unitarias para multiplica
//Lfunción test es donde se configura mi prueba unitaria
//test("comentario", function callBack);

test ("Deberá sumar dos números positivos", ()=>{ //Se puede poner cualquier comentario
    //expect(fncProbada).matcher();
    expect (operacion.multiplica(5,6)).toBe(30);
});

//Para hacer las pruebas se pone "jest" en test del package.json

test ("Debería sumar dos números negativos", ()=>{
    const multiplica = operacion.multiplica(-5,-8);
    expect(multiplica).toBe(40);
});

test ("Debería sumar un positivo y un negativo", ()=>{
    const multiplica = operacion.multiplica(-10,5);
    expect(multiplica).toBe(-50);
});

test ("Debería sumar si un datos es númerico y otro tipo string", ()=>{
    const multiplica = operacion.multiplica("4",5);
    expect(multiplica).toBe(20);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplica = operacion.multiplica("ey",5);
    expect(multiplica).toBe(NaN);
});

test ("Debería sumar si los dos número son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});