const operacion = require("../scripts/operaciones")
// ../ se refiere para moverse una carpeta hacia atrás, después se continúa con la ruta de la carpeta

//Este archivo hará las pruebas unitarias para multiplica
//la funcion test es donde se configura mi prueba unitaria
//test("comentario", fnc callback);



test ("Determinar si un texto es palindromo", ()=>{
    const palindromo = operacion.palindromo("Anita lava la tina");
    expect(palindromo).toBe(true);
});
test ("Determinar si un texto es palindromo", ()=>{
    const palindromo = operacion.palindromo("Ana");
    expect(palindromo).toBe(true);
});
test ("Determinar si un texto es palindromo", ()=>{
    const palindromo = operacion.palindromo("Amor a Roma");
    expect(palindromo).toBe(true);
});
test ("Determinar si un texto es palindromo", ()=>{
    const palindromo = operacion.palindromo("Isaac no ronca asi");
    expect(palindromo).toBe(true);
});
test ("Determinar si un texto es palindromo", ()=>{
    const palindromo = operacion.palindromo("No es palindromo");
    expect(palindromo).toBe(false);
});
test ("Determinar si un texto es palindromo", ()=>{
    const palindromo = operacion.palindromo("1 amor, roma 1");
    expect(palindromo).toBe(true);
});
test ("Determinar si un texto es palindromo", ()=>{
    const palindromo = operacion.palindromo("Suerte");
    expect(palindromo).toBe(false);
});

