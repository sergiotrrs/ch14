const operacion = require("../script/operaciones");

//este archivo sera para las pruebas unitarias para suma
//la funcion test es donde se configura mi prueba unitaria
//test ();
test("debera sumar 2 numeros positivos", () => {
  //expect(fncPribada).matcher();
  expect(operacion.suma(5, 6)).toBe(11);
})
test("Debería sumar dos números negativos", () => {
  const suma = operacion.suma(-5, -8);
  expect(suma).toBe(-13);
});

test("Debería sumar un positivo y un negativo", () => {
  const suma = operacion.suma(-10, 5);
  expect(suma).toBe(-5);
});

test("Debería sumar si un datos es númerico y otro tipo string", () => {
  const suma = operacion.suma("4", 5);
  expect(suma).toBe(9);
});

test("Debería dar NaN si un número no es numérico", () => {
  const suma = operacion.suma("ey", 5);
  expect(suma).toBe(NaN);
});
test("Debería sumar si los 2 números son punto flotante", () => {
  const suma = operacion.suma(5.6, 5.5);
  expect(suma).toBe(11.1);
});
