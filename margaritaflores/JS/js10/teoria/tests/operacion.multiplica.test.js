const operacion = require("../scripts/operaciones") //Se pone .. porque estamos llegando una carpeta para atrás

//Este archivo hará las pruebas unitarias para suma
//La función test es donde se configura la prueba unitaria 
// test("comentario",fnc callBack(Se puede usar función flecha));
//y colocamos a expect(fncProbada).matcher(): 
//Existe varios .matcher el que usaremos es el .toBe-----> Te indica lo que te debe de dar la función

test("Deberá multiplicar dos números positivos",()=>{
    expect (operacion.multiplica(5,6)).toBe(30);
});

//Para probar es ir al Git Bash

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

test ("Debería multiplicar si los dos números son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});