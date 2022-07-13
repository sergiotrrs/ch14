//Se importa las funciones a probar
const operacion = require("../scripts/operaciones");

//este archivo hara las pruebas unitarias para multiplica
//la funcion test es donde se configura mi prueba unitaria
//test ("comentario", fnc callback);

test ("Debera multiplicar dos numeros positivos",()=>{
  //  expect (fncProbada).matcher();
  expect(operacion.multiplica(5,6)).toBe(30);
});

test ("Debera multiplicar dos numeros negativos",()=>{
    const multiplica = operacion.multiplica(-6,-5);
     expect(multiplica).toBe(30);
   });

  test ("Debera multiplicar un numero positivo y uno negativo",()=>{
    const multiplica = operacion.multiplica(-10,5);
     expect(multiplica).toBe(-50);
   });

  test ("Debera multiplicar string con numero",()=>{
    const multiplica = operacion.multiplica("4",5);
     expect(multiplica).toBe(20);
   });
  
   test ("Debera multiplicar nan",()=>{
   const multiplica = operacion.multiplica("cy",5);
    expect(multiplica).toBe(NaN);
  });

  test("Deberia multiplicar si los dos numeros son de punto flotante",()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
  });