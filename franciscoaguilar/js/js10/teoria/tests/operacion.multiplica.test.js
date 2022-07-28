const operacion = require("../scripts/operaciones")
// ../ se refiere para moverse una carpeta hacia atrás, después se continúa con la ruta de la carpeta

//Este archivo hará las pruebas unitarias para multiplica
//la funcion test es donde se configura mi prueba unitaria
//test("comentario", fnc callback);

test("Deberá multiplica dos números positivos", ()=>{

    //expect(fncProbada).matcher();
    expect(operacion.multiplica(5,6)).toBe(30);
    //busca la función multiplica en el archivo operación, le pasa los parámetros
    //con toBe "(se espera que sea)"" se ingresa el resultado que se espera ()
});

test ("Debería multiplica dos números negativos", ()=>{
    const multiplica = operacion.multiplica(-5,-8);
    expect(multiplica).toBe(40);
});

test ("Debería multiplica un positivo y un negativo", ()=>{
    const multiplica = operacion.multiplica(-10,5);
    expect(multiplica).toBe(-50);
});

test ("Debería multiplica si un datos es númerico y otro tipo string", ()=>{
    const multiplica = operacion.multiplica("4",5);
    expect(multiplica).toBe(20);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplica = operacion.multiplica("ey",5);
    expect(multiplica).toBe(NaN);
});

test ("Debería multiplica si los dos números son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});
