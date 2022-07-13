//Se importan las funciones a evaluar
const operacion= require("../scripts/operaciones")

//Este archivo hara las pruebas unitarias para suma
//La funcion test es donde se configuta la prueba unitaria
//test ("comentario" + fnc callBack);

test ("Debera tener numeros positivos", ()=>{
    const mult= operacion.mult(5,6)
    expect(mult).toBe(30);
})
