operacion = require("../scripts/operaciones")
// Este archivo hará las pruebas unitarias para palindromos
//La function test, es donde se configura mi prueba unitaria
//test("comentario", function callback);

test ("Deberá de ser un palindromo", ()=> {
    //expect(fncProbada).matcher();
    expect (operacion.palindromos("Anita lava la tina")).toBe(true); 
})

test ("Debería palindromosr dos números negativos", ()=>{
    const palindromos = operacion.palindromos("Ana");
    expect(palindromos).toBe(true);
});

test ("Debería palindromosr un positivo y un negativo", ()=>{
    const palindromos = operacion.palindromos("Amor a Roma");
    expect(palindromos).toBe(true);
});

test ("Debería palindromos si un datos es númerico y otro tipo string", ()=>{
    const palindromos = operacion.palindromos("Isaac no ronca asi");
    expect(palindromos).toBe(true);
});
