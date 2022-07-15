//Impoorta las funciones
const operacion = require("../scripts/operaciones.js")

//Archivo para pruebas unitarias para suma
//La función test configura la prueba
//test( "comentario", fnc callback );

test("Debe sumar números positivos:", () => {
    
    //expect(fncProbada).matcher()
    expect (operacion.suma(5, 6)).toBe(11);
})

test ("Debería sumar dos números negativos", ()=>{
    const suma = operacion.suma(-5,-8);
    expect(suma).toBe(-13);
});

test ("Debería sumar un positivo y un negativo", ()=>{
    const suma = operacion.suma(-10,5);
    expect(suma).toBe(-15);
});

test ("Debería sumar si un datos es númerico y otro tipo string", ()=>{
    const suma = operacion.suma("4",5);
    expect(suma).toBe(9);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const suma = operacion.suma("ey",5);
    expect(suma).toBe(NaN);
});

test ("Debería sumar si los números son de punto flotante", () => {
    const suma = operacion.suma(5.5,5.6);
    expect(suma).toBeCloseTo(11.1);
})
