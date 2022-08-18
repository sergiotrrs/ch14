//Se importa las funciones a probar
const operacion = require("../scripts/operaciones" );

//Este archivo hará las pruebas unitarias para multiplica
//La funcion test es donde se configura mi prueba unitaria
//test ( "comentario", fnc callBack );

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("Anita lava la tina");
    //expect(fncProbada).matcher();
    expect (polindrome).toBe(true);
} );

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("Ana");
    expect (polindrome).toBe(true);
} );  

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("Amor a Roma");
    expect (polindrome).toBe(true);
} );  

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("Isaac no ronca asi");
    expect (polindrome).toBe(true);
} );  

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("Ana");
    expect (polindrome).toBe(true);
} );  

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("No es polindromo");
    expect (polindrome).toBe(false);
} );  

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("1 amor, roma 1");
    expect (polindrome).toBe(true);
} );  

test ("La palabra es polindroma", ()=>{    
    const polindrome = operacion.polindrome("Suerte");
    expect (polindrome).toBe(false);
} );  