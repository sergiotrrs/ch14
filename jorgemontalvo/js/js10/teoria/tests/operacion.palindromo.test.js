//Se importa las funciones a probar
const operacion = require("../scripts/operaciones")

//Este archivo hara las pruebas unitarias para suma
// La función test es donde se configura mi prueba unitaria
// test("comentario", fnc callback);

test ("Deberá ser correcto: Anita lava la tina", ()=>{

    // expect (fncProbada).matcher();
    expect(operacion.palindromo("Anita lava la tina")).toBe(true);
} );

test ("Deberá ser correcto: Ana", ()=>{

    // expect (fncProbada).matcher();
    expect(operacion.palindromo("Ana")).toBe(true);
} );

test ("Deberá ser correcto: Amor a Roma", ()=>{

    // expect (fncProbada).matcher();
    expect(operacion.palindromo("Amor a Roma")).toBe(true);
} );

test ("Deberá ser correcto: Isaac no ronca asi", ()=>{

    // expect (fncProbada).matcher();
    expect(operacion.palindromo("Isaac no ronca asi")).toBe(true);
} );

test ("Deberá ser falso: No es palindromo", ()=>{

    // expect (fncProbada).matcher();
    expect(operacion.palindromo("No es palindromo")).toBe(false);
} );

test ("Deberá ser correcto: 1 amor, roma 1", ()=>{

    // expect (fncProbada).matcher();
    expect(operacion.palindromo("1 amor, roma 1")).toBe(true);
} );

test ("Deberá ser correcto: Suerte", ()=>{

    // expect (fncProbada).matcher();
    expect(operacion.palindromo("Suerte")).toBe(false);
} );