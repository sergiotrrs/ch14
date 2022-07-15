//Impoorta las funciones
const operacion = require("../scripts/operaciones.js")

//Archivo para pruebas unitarias para multiplica
//La función test configura la prueba
//test( "comentario", fnc callback );

test("Debe multiplicar números positivos:", () => {
    
    //expect(fncProbada).matcher()
    expect (operacion.multiplica(5, 6)).toBe(30);
})

test ("Debería multiplicar dos números negativos", ()=>{
    const multiplica = operacion.multiplica(-5,-8);
    expect(multiplica).toBe(40);
});

test ("Debería multiplicar un positivo y un negativo", ()=>{
    const multiplica = operacion.multiplica(-10,5);
    expect(multiplica).toBe(-50);
});

test ("Debería multiplicar si un datos es númerico y otro tipo string", ()=>{
    const multiplica = operacion.multiplica("4",5);
    expect(multiplica).toBe(20);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplica = operacion.multiplica("ey",5);
    expect(multiplica).toBe(NaN);
});

test ("Debería multiplicar si los números son de punto flotante", () => {
    const multiplica = operacion.multiplica(5.5,5.6);
    expect(multiplica).toBeCloseTo(30.8);
})
