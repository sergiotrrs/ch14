console.log("teoria de la sesion js05, operadores ");
console.log("------------------------------");
//operadores de incremento de decremento ***********
let x = 1;
//incremento de una unidad
x=x+1; //2
//el operador ++ devuleve el valor despues incremeneta en una unidad
x++; //3
console.log("El valor de x ++ " + x);

//decremento de una unidad
x=x-1; //2
//el operador -- realiza el decremento de una unidad
x--; //1
console.log("Valor de x con -- " + x);
console.log("------------------------------");
//el operador preincremento ++ incrementa el valor de la variable, en una unidad 
x=1; //1
//primero devuelve el valor de x
//luego incrementa en 1 el valor de x
console.log("Valor de x --x " + (x++));//1
console.log("Valor de x --x " + (++x));//3
console.log("------------------------------");
let y=0;
x=0;
y = ++x;

console.log("El valor de x: " + x);
console.log("El valor de y: " + y);

console.log("------------------------------");
x=1;
console.log("pre-incrmeneto");
console.log(x);
console.log(++x);
console.log(x);
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x);
console.log(x++);
console.log(x);

console.log("------------------------------");

for (i=0; i<3; i++) console.log("con i++ " + i);
console.log("FINALIZACION DE I: "+i);
for (i=0; i<3; ++i) console.log("con ++i " + i);
console.log("FINALIZACION DE I: "+i);

console.log("------------------------------");

//post-deremento, pre decremento
x=-10;
y=--x;
console.log(y,x);
x=80;
y=x--;
console.log(y,x);

//OPERADORES ARITMETICOS
//OPERADOR SUMA
x = 1 + 34 + y;

//OPERADOR RESTA
x = 23 - 45 - y;

//OPERADOR DIVISION
x=12/6;

//OPERADOR MULTIPLICACION
x= 4*y;

//OPERADOR RESIDUO
x=4%y;

//OPERADOR POTENCIA
x = 2**3;

//OPERADOR DE ASIGNACION

x += 10; // es lo mismo que x = x+10
x -= 5; // es lo mismo que x = x-5
x *= 5; // es lo mismo que x = x*5
x /= 5; // es lo mismo que x = x/5
x %= 5; // es lo mismo que x = x%5
x **= 5; // es lo mismo que x = x**5

//clase 04/07/22

/**
 * OPERADORES DE IGUALDAD (COMPARACION)
 */

//operador igual que
x=1;
y=2;
 x==y; // false
 y=1;
 x==y;//true
y = "1";
x==y;
//true , compara el valor, el tipo string se convierte a numerico
console.log(" x == 'y' " + (x == y));

//operador diferente que !=

x=1;
y='2';
console.log("x != 'y'" + (x!=y)) //true
console.log("x++ != 'y'" + (x++ !=y)) //true
console.log("x != 'y'" + (x !=y)) //false
console.log("++x != 'y'" + (++x !=y))//true

//operador extrictamente igual que === compara el valor y el tipo de dato
x=1;
y="y";
console.log("x==='y'"+(x===y));

//operador extricamente diferente que !=== compara el valor y el tipo de dato
console.log("x !== 'y'" + (x!==y));

//OPERADORES LOGICOS &&, ||, !
//true && true; // true
//true && false; // false, si uno de los valores es false el resultado sera false

//False, null, NaN, 0, empty string, son considerados como false

//si el primer operador es true, el resultador es el valor del segundo 
//si el primer operador es false, el resultado sera false
//operadores de corto-circuito

//operador logico and &&

console.log("true && NaN = " + (true && NaN));//NaN
console.log("false && NaN = " + (false && NaN)); //false
console.log("true && 'hola abi' = " + (true && "Hola Abi")); //'Hola abi'
console.log("null && 'hola abi' = " + (null && "Hola Abi")); //null
console.log("'a' && 'hola abi' = " + ('a' && "Hola Abi")); //'Hola abi'
console.log(" ' ' && 'hola abi' = " + ('' && "Hola Abi")); //'' string vacio

//operador logico or ||

true || false //true

//
//False, null, NaN, 0, empty string o undefined son considerados con valor false
//si el primer operador es true, el resultador es el valor del primero 
//si el primer operador es false, el resultado sera el segundo operador

console.log("true && NaN = " + (true || NaN));//NaN
console.log("false && NaN = " + (false || NaN)); //false
console.log("true && 'hola abi' = " + (true || "Hola Abi")); //'Hola abi'
console.log("null && 'hola abi' = " + (null || "Hola Abi")); //null
console.log("'a' && 'hola abi' = " + ('a' || "Hola Abi")); //'Hola abi'
console.log(" ' ' && 'hola abi' = " + ('' || "Hola Abi")); //'' string vacio

//operador logico not !

let nuevoValor = !true;
nuevoValor = !false;
//False, null, NaN, 0, empty string o undefined son considerados con valor false
console.log("\n Operador not !");
console.log("!NaN" + (!NaN));//true
console.log("!true" + (!true)); //false
console.log("!'Hola Abi'" + (!"Hola Abi")); //false
console.log("!false" + (!false)); //true
console.log("!'a' " + (!'a')); //false
console.log(" !''" + (!'' )); //true

//operador logico binario ?? Nullish coalescing
//operador logico que retorna el operador de la derecha si el operador de la izquierda es null o undefined. De lo contrario, retorna el operador de izquierda 

let asistencia;
console.log("\n operador ?? nullish coalescing" );
console.log(" asistencia = null ?? true :" + (asistencia = null ?? true) ); // true
console.log(" asistencia = 1 ?? true: " + (asistencia = 1 ?? true) ); //1
console.log(" asignacion de asistencia = x: " + (asistencia = x ?? 'asiste'));//"asiste"

console.log(" asignacion de asistencia = x: " + (asistencia = '' ?? 'asiste')); // ''
console.log(" typeof (undefined) " +  typeof (undefined)); // undefined
console.log(" typeof (null) " +  typeof (null)); // object

// typeof null es object por error de Js


