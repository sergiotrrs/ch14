//Se imporata las funciones a probar
const operacion = require("../scripts/operaciones");

//Este archivo hara las pruebas unitarias para suma
/**
 * La funcion test es donde se confirgura mi prueba unitaria
 * test ("comentario", funcion CallBack) ;
*/

test("Deberá multiplicar dos números positivos", ()=> {
    //expect(fncProbada).matcher();
    expect (operacion.multiplicacion(5,6)).toBe(30);
});

test ("Debería multiplicar dos números negativos", ()=>{
    const multiplicacion = operacion.multiplicacion(-5,-8);
    expect(multiplicacion).toBe(40);
});

test ("Debería multiplicar un positivo y un negativo", ()=>{
    const multiplicacion = operacion.multiplicacion(-10,5);
    expect(multiplicacion).toBe(-50);
});

test ("Debería multiplicar si un datos es númerico y otro tipo string", ()=>{
    const multiplicacion = operacion.multiplicacion("4",5);
    expect(multiplicacion).toBe(20);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplicacion = operacion.multiplicacion("ey",5);
    expect(multiplicacion).toBe(NaN);
});

test ("Debería multiplicar si los dos números son de punto flotante", ()=>{
    const multiplicacion = operacion.multiplicacion(5.6,5.5);
    expect(multiplicacion).toBeCloseTo(30.8);
});
