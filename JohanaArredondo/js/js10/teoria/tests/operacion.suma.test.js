//Se importa las funciones a probar
const operacion = require("../scripts/operaciones");

//este archivo hara las pruebas unitarias para suma
//la funcion test es donde se configura mi prueba unitaria
//test ("comentario", fnc callback);

test ("Debera sumar dos numeros positivos",()=>{
  //  expect (fncProbada).matcher();
  expect(operacion.suma(5,6)).toBe(11);
});

test ("Debera sumar dos numeros positivos",()=>{
    const suma = operacion.suma("cy",5);
     expect(suma).toBe(NaN);
   });

  test ("Debera sumar dos numeros positivos",()=>{
    const suma = operacion.suma(-10,5);
     expect(suma).toBe(-5);
   });

  test ("Debera sumar dos numeros positivos",()=>{
    const suma = operacion.suma("4",5);
     expect(suma).toBe(9);
   });
  
   test ("Debera sumar dos numeros positivos",()=>{
   const suma = operacion.suma("cy",5);
    expect(suma).toBe(NaN);
  });

  test("Deberia sumar si los dos numeros son de punto flotante",()=>{
    const suma = operacion.suma(5.6,5.5);
    expect(suma).toBe(11.1);
  });