//Se importa las funciones a probar
const operacion = require("../scripts/operaciones");

//Este archivo hara las pruebas unitarias para suma 
//La funcion test es donde configura mi prueba unitaria
//test("Comentario" , fnc callBack);

test("Debera sumar dos numeros positivos", ()=>{
    //expect(fncProbada).matcher();
    expect (operacion.suma(5,6)).toBe(11);//suma(valores para a , b).toBe(El resultado que debe tener)
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

test ("Debería sumar si los dos numeros son de punto flotante", ()=>{
    const suma = operacion.suma(5.6,5.5);
    expect(suma).toBe(11.1);
});
