const operacion = require("../scripts/operaciones")
// ../ se refiere para moverse una carpeta hacia atrás, después se continúa con la ruta de la carpeta

//Este archivo hará las pruebas unitarias para suma
//la funcion test es donde se configura mi prueba unitaria
//test("comentario", fnc callback);

test("Deberá sumar dos números positivos", ()=>{

    //expect(fncProbada).matcher();
    expect(operacion.suma(5,6)).toBe(11);
    //busca la función suma en el archivo operación, le pasa los parámetros
    //con toBe "(se espera que sea)"" se ingresa el resultado que se espera ()
});

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

test ("Debería sumar si los dos números son de punto flotante", ()=>{
    const suma = operacion.suma(5.6,5.5);
    expect(suma).toBeCloseTo(11.1);
});
