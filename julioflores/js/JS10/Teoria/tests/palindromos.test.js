const operacion = require("../scripts/operaciones");
//Este archivo hará las pruebas unitarias para palindromos
//La funcion test es donde se configura mi prueba unitaria
//test ("comentario", fnc callBack);

test ("Deberá verificar un palindromo como true", () =>{
    //expect(fcnProbada).matcher();
    const palindromo = operacion.palindromo("Anita lava la tina");
    expect(palindromo).toBe(true);
});

test ("Deberá verificar un palindromo como true", () =>{
    //expect(fcnProbada).matcher();
    const palindromo = operacion.palindromo("Ana");
    expect(palindromo).toBe(true);
});

test ("Deberá verificar un palindromo como true", () =>{
    //expect(fcnProbada).matcher();
    const palindromo = operacion.palindromo("Amor a Roma");
    expect(palindromo).toBe(true);
});

test ("Deberá verificar un palindromo como true", () =>{
    //expect(fcnProbada).matcher();
    const palindromo = operacion.palindromo("Isaac no ronca asi");
    expect(palindromo).toBe(true);
});

test ("Deberá verificar un palindromo como true", () =>{
    //expect(fcnProbada).matcher();
    const palindromo = operacion.palindromo("Anita");
    expect(palindromo).toBe(false);
});