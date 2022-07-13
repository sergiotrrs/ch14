const operacion = require("../script/operaciones");

//este archivo sera para las pruebas unitarias para multiplica
//la funcion test es donde se configura mi prueba unitaria
//test ();
test("deber multiplica 2 numeros positivos", () => {
  //expect(fncPribada).matcher();
  expect(operacion.multiplica(5, 6)).toBe(30);
})
test("Deberí multiplica dos números negativos", () => {
  const multiplica = operacion.multiplica(-5, -8);
  expect(multiplica).toBe(40);
});

test("Deberí multiplica un positivo y un negativo", () => {
  const multiplica = operacion.multiplica(-10, 5);
  expect(multiplica).toBe(-50);
});

test("Deberí multiplica si un datos es númerico y otro tipo string", () => {
  const multiplica = operacion.multiplica("4", 5);
  expect(multiplica).toBe(20);
});

test("Debería dar NaN si un número no es numérico", () => {
  const multiplica = operacion.multiplica("ey", 5);
  expect(multiplica).toBe(NaN);
});
test("Deberí multiplica si los 2 números son punto flotante", () => {
  const multiplica = operacion.multiplica(5.6, 5.5);
  expect(multiplica).toBeCloseTo(30.8);
});

