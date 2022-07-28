// se importa las funciones a probar
const operacion =require("../scripts/operaciones");

// eEste archivo hara las pruebas unitarias para la multiplica
// la funcion test es donde se configura mi prueba unitaria
// test ("comentario de lo que hace mi funcio", fnc callback);

test("multiplicara dos numeros positivos", ( ) =>{

    // expect(fncProbada).matcher();
    expect (operacion.multiplica(5,6)).toBe(11);

})

test ("Debería multiplicar dos números negativos", ()=>{
    const multiplica = operacion.multiplica(-5,-8);
    expect(multiplica).toBe(-13);
});

test ("Debería multiplicar un positivo y un negativo", ()=>{
    const multiplica = operacion.multiplica(-10,5);
    expect(multiplica).toBe(-5);
});

test ("Debería multiplicar si un datos es númerico y otro tipo string", ()=>{
    const multiplica = operacion.multiplica(4,5);
    expect(multiplica).toBe(9);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplica = operacion.multiplica("ey",5);
    expect(multiplica).toBe(NaN);
});

test ("Deberia multiplicar los dos números son de punto flotanre", ()=>{
    const multiplica = operaciones.multiplica(5.6,5.5);
    expect(multiplica).toBe(11.1);
});