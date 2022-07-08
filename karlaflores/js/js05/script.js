console.log("Teoría de la sesión JS05, operadores");

// Operadores de incremento de decremento++++++++++++++++++++++++++++++++++++++
let x = 1;
//incremento en una unidad
x = x + 1; //2
// El operador postincremento ++ , devuelve el valor , después incrementa en una unidad
// la variable
// Primero devuelve el valor de X
// Luego incrementa en 1 el valor de x
x++;//3
console.log("Valor de x con ++ : " + x ); //3

//Decremento en una unidad
x = x - 1; // 2
// El operador -- , devuelve el valor , después decremento en una unidad
x--; //1
console.log("Valor de x con -- : " + x);//1

// El operador preincremento, 
//Primero incrementa la variable en una unidad
//Luego devuelve el valor
x=1;

console.log(`Valor de x++  : ${x++}` );  //x = 1 ;  x = x + 1 -> x=2
console.log(`Valor de ++x  : ${++x}` );  //x=x+1 -> x= 3

let y=0;
 x= 0;
 y = ++x; 
 console.log(`Valor de x : ${x}` );   // 1
 console.log(`Valor de y : ${y}`);    // 1

 y= 0;
 x= 0;
 y = x++; 
 console.log(`Valor de x : ${x}` );   //  1
 console.log(`Valor de y : ${y}`);    //  0

 x=1;
console.log("pre-incremento");
console.log(x); //1
console.log(++x); //2
console.log(x); //2
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2
let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

//pre incremento 
x=1; 
y=++x; // y = 2, x = 2
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post
x=1;
y=x++; // y=1 , x= 2
//es lo mismo que
x=1;
y=x;
x=x+1;
//----------------------
x=10;
y = x++; // y= 10, x = 11

x=30;
y = ++x; // y = 31, x = 31
//***************************************************** */
//post-decremento , pre-decremento
x=-10
y = --x; // y= -11 , x= -11  (x = x -1 -> -10 - 1)
console.log(y ,x);
x=80
y = x--; // y= 80 , x = 79
console.log(y ,x);
/**
 * Operadores aritméticos
 */
//operador de suma
x = 1 + 34;
//operador de resta
x = 23 - 45;
//operador de división
x = 12/6; // 2
//operador de multiplicación
x = 2 * 4; // 8
//operador de residuo
x= 8%2; // residuo 0
//operador de potencia
x = 2**3; //8

/**
 * Operador de asignación
 */
x = 2;

x += 10; //x = x + 10
x -= 5;  //x = x -5
x *= 3;  //x = x * 3;
x /= 2;  //x = x/2;
x %= 4;  //x = x%4;
x **= 3  //x = x**3;

/**
 * Operadores de igualdad (comparación)
 */

//operador igual que == compara el valor del dato
x= 1;
y= 2;
x == y; //false
y= 1;
x == y; //true
x = 1;
y = "1";
 //true, compara el VALOR, el tipo string se convierte a numérico
 console.log(" x == 'y' "+ (x == y) );

//Operador diferente que !=
x = 1;
y = '2';
console.log(" x != 'y' " + (x != y) ); //true  1 != '2' 
console.log(" x++ != 'y' " + (x++ != y) ); //true 1 != '2'  -> x=2
console.log(" x != 'y' " + (x != y) ); //false 2 != '2'  
console.log(" ++x != 'y' " + (++x != y) ); // 3 != '2' ->true

//Operador extrictamente igual que === compara el valor y tipo de dato
x = 1;
y = '1';
console.log(" x === 'y' " + (x === y) ); //false
//Operador extrictamente diferente que !== compara el valor y tipo de dato
console.log("x !== 'y' " + (x!==y) ); //true

//Operador lógico and &&
true && true // true
true && false // false
//False, null, NaN,0, empty string o undefined son considerados con valor false.

// Si el primer operador es true, el resultado es el valor del segundo operador.
// Si el primer operador es false, el resultado será el primer operador.
// Operadores de corto-circuito
console.log(" true && NaN = " + (true && NaN )); //NaN
console.log(" false && NaN = " + (false && NaN )); //false
console.log(" true && 'Hola estrella' = " + (true && 'Hola estrella' )); //Hola Estrella
console.log(" null && 'Hola Moi' = " + (null && "Hola Moi" )); //null
console.log(" 'a' && 'Hola Moi' = " + ( 'a' && "Hola Moi" )); //Hola Moi
console.log(" '' && 'Hola Maga' = " + ( '' && "Hola Maga" )); //'' string vacío

//Operador lógico or || 
true || false // true
//False, null, NaN,0, empty string o undefined son considerados con valor false.
// Si el primer operador es true, el resultado es el primer operador.
// Si el primer operador es false, el resultado es el segundo operador.
console.log("\n Operador or ||")
console.log(" true || NaN = " + (true || NaN )); //true
console.log(" false || NaN = " + (false || NaN )); //NaN 
console.log(" true || 'Hola estrella' = " + (true || 'Hola estrella' )); //true
console.log(" null || 'Hola Moi' = " + (null || "Hola Moi" )); // "Hola Moi"
console.log(" 'a' || 'Hola Moi' = " + ( 'a' || "Hola Moi" )); // 'a'
console.log(" '' || 'Hola Maga' = " + ( '' || "Hola Maga" )); // "Hola Maga"

//Operador lógico not !
let nuevoValor = !true // false
nuevoValor = !false // true
//False, null, NaN,0, empty string o undefined son considerados con valor false.
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador lógico binario ?? Nullish Coalescing
// Operador lógico que retorna el operador de la derecha, si el operador
// de la izquierda es null o undefined. De lo contrario, retorna el operador de izquierda
// opIzquierda ?? opDerecha
let asistencia;
console.log ("\n operador ?? Nullish Coalescing");
console.log ( " asistencia = null ?? true :" + ( asistencia = null ?? true)) //true
console.log ( " asistencia = 1 ?? true :" + ( asistencia = 1 ?? true)) //1
x = undefined;
console.log ( "Asignación de asistencia = x :" + (asistencia= x ?? 'Asiste')) //"Asiste"
console.log ( "Asignación de asistencia = x :" + (asistencia= '' ?? 'Asiste')) // ""
console.log ( "typeof (undefined) " + typeof(undefined)); // undefined
console.log ( "typeof (null) " + typeof(null)); // object
//Los datos se guardan en memoria como 1 y 0, 
//Los bits que indican el tipo de dato, para 
//objects es  = 00
//strings es  = 01 //verificar info
//numbers es  = 02 //verificar info
//Para un tipo de dato null, todos sus bits (1 y 0) son 0000000000..00