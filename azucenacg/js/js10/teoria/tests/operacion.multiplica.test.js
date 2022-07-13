const operacion=require("../scripts/operaciones");
//Este archivo hará las pruebas unitarias para multiplica
//La función test es donde se configura mi prueba unitaria 
//test ("comentario, fcncallBak")

test ("Deberá sumer dos números positivos",()=>{

    //expect(fncProbada).matcher();
    expect(operacion.multiplica(5,6)).toBe(30);
    //se tiene que indicar cual es la función 
    //de toodo ese archivo que le pusimos
    //a operación
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

test ("Debería multiplicar si los dos numeros son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.7,5.3);
    expect(multiplica).toBe(30.21);
});
// hay que checar esta prueba porque 5.1+5.3 
//da 10.399999 en vez de 10.4