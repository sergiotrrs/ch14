// se importa la función

const operacion = require("../scripts/operaciones");

//Este archivo hará las pruebas unitarias para multiplica
//La función de test es donde se configura mi prueba unitaria
//test ("comentario" , funcion callBack);


test("deberá multiplicar dos númetos positivos", () =>{
    //expect(funcionProbada).matcher();
    expect (operacion.multiplica(5,6)).toBe(30);
}  
 );

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
    const suma = operacion.suma("ey",5);
    expect(suma).toBe(NaN);
});

test ("Debería dar NaN si dos números son flotantes", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});

