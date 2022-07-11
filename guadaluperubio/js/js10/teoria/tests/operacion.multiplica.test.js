// se importa las funciones a probar
const operacion =require("../scripts/operaciones");

// eEste archivo hara las pruebas unitarias para la multplica
// la funcion test es donde se configura mi prueba unitaria
// test ("comentario de lo que hace mi funcio", fnc callback);

test("Sumara dos numeros positivos", ( ) =>{

    // expect(fncProbada).matcher();
    expect (operacion.multiplica(5,6)).toBe(30);

})

test ("Debería multiplicar  números negativos", ()=>{
    const multiplica = operacion.multiplica(-5,-8);
    expect(multiplica).toBe(40);
});

test ("Debería multiplicar positivo y un negativo", ()=>{
    const multiplica = operacion.multiplica(-10,5);
    expect(multiplica).toBe(-50);
});

test ("Debería multiplicar un datos es númerico y otro tipo string", ()=>{
    const multiplica = operacion.multiplica("4",5);
    expect(multiplica).toBe(20);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplica = operacion.multiplica("Ey",5);
    expect(multiplica).toBe(NaN);
});


test ("Debería multiplicar  numero punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});