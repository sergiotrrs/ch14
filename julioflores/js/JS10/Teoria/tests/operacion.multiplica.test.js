//Se importan las funciones a probar

const operacion = require("../scripts/operaciones");

//Este archivo hará las pruebas unitarias para multiplica
//La funcion test es donde se configura mi prueba unitaria
//test ("comentario", fnc callBack);

test ("Deberá multiplica dos números positivos", () =>{

    //expect(fcnProbada).matcher();
    expect (operacion.multiplica(5,6)).toBe(30);
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

/*test ("Debería multiplicar si los dos numeros son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeClose(30.8);
});
*/