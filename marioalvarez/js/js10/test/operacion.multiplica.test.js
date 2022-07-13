// INICIO DESDE DONDE ESTOY../ me regreso un  directorio
//Se importa las funciones  probar
const operacion= require("../scripts/operaciones");

//Este archivo serán las pruebas unitarias para multiplica
//La función test es donde se configura mi prueba unitaria

//test(comenario, función callback) en lugar de una callback puedo poner una función flecha
test("Debera multiplicar dos números positivos", ()=>{
    //expect(función probada).matcher();
    expect(operacion.multiplica(5,6)).toBe(30); 
});

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
//Me marcará un error por redondeo con .toBe
//Para arreglos y objetos toEqual
test ("Debería multiplicar si los dos números son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});





