//Se importan las funciones a evaluar
const operacion= require("../scripts/operaciones")

//Este archivo hara las pruebas unitarias para suma
//La funcion test es donde se configuta la prueba unitaria
//test ("comentario" + fnc callBack);

test ("Debera tener numeros positivos", ()=>{
    //expect(fncProbada).matcher();
    expect(operacion.resta(6,6)).toBe(0);
} )

test ("Debera tener numeros positivos", ()=>{
    expect(operacion.suma(5,6)).toBe(11);
} )

test ("Debera tener numeros positivos", ()=>{
    expect(operacion.div(12,6)).toBe(2);
} )

test ("Debera tener numeros positivos", ()=>{
    expect(operacion.mult(5,6)).toBe(30);
} )
test ("Debera tener numeros positivos", ()=>{
    expect(operacion.pot(5,3)).toBe(125);

} )
test ("Debera tener numeros positivos", ()=>{
    expect(operacion.residuo(8,6)).toBe(2);

} )


