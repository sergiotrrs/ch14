console.log("Teoria de la sesión JS05, operadores");

//Operadores de incrementos y decrementos**************
let x = 1;
//Incremento de la unidad
x = x + 1; //2
//El operador postincremento ++ devuelve el valor, despues incremento de una unidad
//la variable
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++; //3
console.log("Valor de x con ++ " + x); //3

//Decremento de la unidad
x = x - 1; //2
//El operador -- devuelve el valor, despues decremento de una unidad
x--; //1
console.log("Valor de x con -- " + x); //1

//Preincremento ++ ;
//primero revuelve el valor de la variable, 
//después decrementa en una unidad de la variable.
++x; //2
//primero devuelve el valor de x
//luego incrementa en 1 el valor de x
console.log(`Valor de x++ : ${x++} x`); //2
console.log(`Valor de ++x : ${++x} x`); //4

let y=0;
x = 0;
y = ++x;
console.log(`Valor de x : ${x} x`); //1
console.log(`Valor de y : ${y} x`); //1

x = 0;
y = 0;
y = x++;
console.log(`Valor de x : ${x} x`); //1
console.log(`Valor de y : ${y} x`); //0

//Pre-incremento
x=1;
console.log(`pre-incremento`);
console.log(x); //1
console.log(++x); //2
console.log(x); //2
//Post-incremento
console.log(`post-incremento`);
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2

let i;
let j;
for (i=0; i<3; j=i++) console.log(`con i++ `+i); //0 , 1, 2
console.log(`Finalización de j: ` + i); //2

for (i=0; i<3; j=++i) console.log(`con ++i `+i); //0 , 1, 2
console.log(`Finalización de j: ` + i); //3

//Operadores aritmeticos ****************************************

//Operador de suma
x = 1 + 34 + y;
//Operador de resta
x = 23 - 45 - y;
//Operador de división
x = 12/6; //2
//Operador de multiplicación
x = 2 * 4; //8
//Operador de residuo
x = 8 % 2; // residuo 0
//Operador de potencia
x = 2 ** 3; //8

/**
 * Operadores de igualdad (comparación)
 */

//Operador igual que == (compara el valor con el dato)
x = 1;
y = 2;
x == y; // false
//------------
y = 1;
x = 1;
x == y; // true
//------------
x = 1;
y = "1";
x == y; // true, compara el valor; convierte el string a númerico
console.log("x == 'y' " + (x == y) );

//Operador diferente que !=
x = 1;
y = '2';
console.log("x != 'y' " + (x != y) ); //true 1 != '2'
console.log("x++ != 'y' " + (x++ != y) ); //true 1 != '2' -> x = 2
console.log("x != 'y' " + (x != y) ); //true 2 != '2'
console.log("++x != 'y' " + (++x != y) ); // 3 != '2' -> true

//Ctrl + shift + h ; oculta barra de zoom

//Operador extrictamente igual que === (compara el valor con el tipo de dato)
x = 1;
y = '1';
console.log("x === 'y' " + (x === y) ); //false

//Operador extrictamente diferente que !== (compara el valor con el tipo de dato)
// x = 1;
// y = '1';
console.log("x !== 'y' " + (x !== y) ); //true por que x es numero y es string

/**
 * Operadores Lógicos ( and &&, or ||, not !)
 */
// and puede ser mult
// or puede ser suma
true && true // true
true && false // false ; 
//False, null, NaN, 0, empty string o undefine son false

//Si el primer operador es true, el resultado es el valor del segundo operador.
//Si el primer operador es false, el resultado será el primer operador.
//Operadores de corto-circuito
console.log("true && NaN = " + (true && NaN) ); //NaN
console.log("false && NaN = " + (false && NaN) ); //false
console.log("true && 'Hola Estrella' = " + (true && 'Hola Estrella') ); //'Hola estrella'
console.log("null && 'Hola Moi' = " + (null && 'Hola Moi') ); //null
console.log("'a' && 'Hola Moi' = " + ('a' && 'Hola Moi') ); //'Hola Moi'
console.log("'' && 'Hola Maga' = " + ('' && 'Hola Maga') ); //''; string vacio

//Operador lógico or ||
true || true // true
//False, null, NaN, 0, empty string o undefine son false
//Si el primer operador es true, el resultado será el primer operador.
//Si el primer operador es false, el resultado será el segundo operador.
console.log("\n Operador lógico or || ");
console.log("true || NaN = " + (true || NaN) ); //true
console.log("false || NaN = " + (false || NaN) ); //NaN
console.log("true || 'Hola estrella' = " + (true || 'Hola estrella') ); //true
console.log("null || 'Hola Moi' = " + (null || 'Hola Moi') ); //"Hola Moi"
console.log("'a' || 'Hola Moi' = " + ('a' || 'Hola Moi') ); //'a'
console.log("'' || 'Hola Maga' = " + ('' || 'Hola Maga') ); //"Hola Maga"

//Operador lógico not !
let nuevoValor = !true // false
nuevoValor = !false // true
//Exactamente lo opuesto
//False, null, NaN, 0, empty string o undefine son false
console.log("\n Operador lógico not ! ");
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador lógico binario ?? Nullish Coalescing
//retorna el operador de la derecha, si el operador de la izquierda es null o undefined. De lo contrario, retorna el operador de izquierda
//opIzq ?? opDer
let asistencia;
console.log("\n Operador lógico Nullish Coalescing ?? ");
console.log("asistencia = null ?? true : " + (asistencia = null ?? true)); //true
console.log("asistencia = 1 ?? true : " + (asistencia = 1 ?? true)); //1
x = undefined;
console.log("Asignación de asistencia = x : " + (asistencia = x ?? 'Asiste')); //"Asiste"
console.log("Asignación de asistencia = x : " + (asistencia = '' ?? 'Asiste')); //"Asiste"

//PREGUNTAS DE ENTREVISTA
console.log(" typeOf (undefined) " + typeof(undefined)); //undefined
console.log(" typeOf (null) " + typeof(null)); //object ; error de JS debería de dar null no "object"
//los datos en JS se guardan en memoria como 1 y 0.
//los bits que indican el tipo de dato, para:
//object es = 00
//string es = 01 } inventado -> verificar
//number es = 02 } inventado -> verificar
//Para un tipo de dato null, todos sus bits (1 y 0) son 00000..00 por lo tanto lo guarda como object






