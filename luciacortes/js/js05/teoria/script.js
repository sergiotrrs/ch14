console.log("Teoría de la sesión JS05, Operadores");

//Operadores de incremeto de decremento********
let x = 1;
//incremento en una unidad
x=x +1;//aumenta uno vale 2
//El operador postincremento ++, devuelve el valor, después incrementa en una unidad
//la variable
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++;//aumenta otro vale 3
console.log("Valor de x con ++ : " + x); //imprime el 3
// Decremento en una unidad
x= x -1;// resta uno vale 2
//El operador -- realiza el decremento en una unidad
x--;// resta otro vale 1
console.log("Valor de x con -- : "+x);//imprime 1

//El operador preincremento ++ Primero incrementa el valor de la variable en una unidad
//luego devuelve el valor
++x; //vale 2

console.log("Valor de x con -- : "+x);//imprime 2

console.log(`Valor de x++ con -- : ${x++}`); //x =; x= x + 1 -> x = 2
console.log(`Valor de ++x con -- : ${++x}`); //x= x + 1 -> x = 3
//Preincremento
let y = 0;
x = 0;
y = ++x;
console.log(`Valor de x con -- : ${x}`);
console.log(`Valor de y con -- : ${y}`);
//Postincremento
y = 0;
x = 0;
y = x++;
console.log(`Valor de x con -- : ${x}`);
console.log(`Valor de y con -- : ${y}`);

x=1;
console.log("pre-incrmeneto x = 1");
console.log("x " +x);
console.log(`++x ${++x}`);
console.log("x "+ x);
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log("post-incrmeneto x = 1");
console.log("x " +x);
console.log(`x++ ${x++}`);
console.log("x "+ x);

//pre incremento 
x=1;
y=++x;
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post incremento
x=1;
y=x++;// aquí devuelve el valor de x antes del incremento
//es lo mismo que
x=1;
y=x;
x=x+1;


let i;

for (i = 0; i<3 ; i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de i: " + i); //2

for (i = 0; i<3 ; ++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de i: " + i); //3

i;
let j;
for (i= 0; i<3 ;j= i++) console.log("con i++ " +i); // 0, 1, 2
console.log("Finalizacion de j: "+j);
for (i= 0; i<3 ;j= ++i) console.log("con ++i " +i); // 0, 1, 2
console.log("Finalizacion de j: "+j);

//*************************** */
//post-decremento , pre decremento

x=-10
y= --x; //y = 4, x = 4
console.log(y, x);
x=80
y= x--;// y = 5, x = 4
console.log(y, x);
/**
 * Operadores aritméticos
 */
//operador de suma
x= 1 + 34 + y;
//operador de resta
x= 23 - 45 - y;
//operador de división
x=12 / 6;
//operador de multiplicación
x=2 * 4;
//operador de residuo
x=8 % 2; //residuo 0
//operador de potencia
x=2**3 //resultado 8 número y el de despues de astericos el número al que o quiero elevar.
/**
 * Operadores de asignación, se contraen
 * pero hacen la operación de la derecha
 */
x= 2;
// x = x + 10; esto es lo mismo que
x += 10//se puede con cualquier operador
x -= 5; //x = x -5
x *= 3;// x = x * 3
x /= 2; //x = x / 2
x %= 4;// x = x % 4
x **= 3;// x = x ** 3
 //operadores de comparación en string, compara de acuerdo a con la tabla UTF-8
//Operadores de igualdad(comparación)**********************
//Operador igual que ==
x= 1;
y= 2;
x== y; // false
y= 1;
x== y; //true
x= 1;
y= "1";
x== y;//true, compara el VALOR, el tipo string se convierte a numérico
console.log("x == y "+ (x==y));

//Operador diferente que !=
x= 1;
y= '2';
x!= y
console.log("x != 'y' "+ (x != y)); //true 1 != '2'
console.log("x != 'y' "+ (x++ != y)); //true 1 != '2' -> x=2
console.log("x != 'y' "+ (x != y));//false 2 != '2'
console.log("x != 'y' "+ (++x != y)); //true 3 !='2'

//Operador estrictamente igual que ===
//compara el valor y eltipo de dato
x= 1;
y= '1';
console.log("x === 'y' " + (x===y)); //false porque uno es number y el otro string
// operador estrictamente diferente que !== compara el valor y tipo de dato
console.log("x !== 'y' "+ (x!==y)); // true 

//Operadores lógicos &&, ||, !
//et et, or or, not
//Devuelve valores booleanos
true && true //true
true && false // false.
//False, null, NaN, 0, empty string o undefined son considerados con valor false

//Si el primer operador es true, el resultado es el valor del segundo operador.
//Si el primer operador es false, el resultado será el primer operador.
//Operadores de corto circuito
console.log ("true && NaN = "+(true && NaN)); // NaN
console.log ("false && NaN = "+(false && NaN)); // false
console.log ("true && 'Hola Estrella' = "+(true && "Hola estrella")); // "Hola Estrella"
console.log(" null && 'Hola Moi' ="+(null && "Hola Moi")); //null
console.log(" 'a' && 'Hola Moi' ="+("a" && "Hola Moi")); //Hola Moi
console.log(" '' && 'Hola Maga' ="+("" && "Hola Maga")); //"" string vacío
console.log(" ' ' && 'Hola Maga' ="+(" " && "Hola Maga")); //"Hola Maga " porque el strig con un espacio ya se considera con valor entnces vale true 

//Operador lógico or ||
true || false // true
//False, null, NaN, 0, empty string o undefined son considerados false.

//Si el primer operador es true, el resultado es el primer operador.
//Si el primer operador es false, el resultado es el segundo operador.
console.log("\n Operador or ||")
console.log ("true || NaN = "+(true || NaN)); // true
console.log ("false || NaN = "+(false || NaN)); // NaN
console.log ("true || 'Hola Estrella' = "+(true || "Hola estrella")); // true
console.log(" null || 'Hola Moi' ="+(null || "Hola Moi")); //"Hola Moi"
console.log(" 'a' || 'Hola Moi' ="+("a" || "Hola Moi")); //"a"
console.log(" '' || 'Hola Maga' ="+("" || "Hola Maga")); //"Hola Maga"
console.log(" ' ' || 'Hola Maga' ="+(" " || "Hola Maga")); //" " porque el strig con un espacio ya se considera con valor entnces vale true 

//Operado lógico not !
let nuevoValor = !true// false
nuevoValor= !false// true
//False, null, NaN, 0, empty string o undefined son considerados false.

console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador lógico binario ?? Nullish Coalescing
//Operador lógico que retorna el operador de la derecha (el segundo), si el operador 
// de la izquerda es null o undefined. De lo contrario, retorna el de la izquierda( el primero).

//Si la izquierda es null o undefined, se retorna la derecha
//Si la izquierda NO ES null o undefined, se retorna la izquierda

let asistencia = null ?? true //
console.log("\n operador ?? Null Coalescing");
console.log("asistencia = null ?? true: "+ (asitencia=null ?? true)); //true
console.log("asistencia = 1 ?? true: "+ (asitencia=1 ?? true)); //true
x= undefined;
console.log("Asignación de asistencia =x :" +(asistencia= x ?? "Asiste") ); //Asiste
console.log("Asignación de asistencia ='' :" +(asistencia= '' ?? "Asiste") ); //'' string vacío
console.log("typeof (undefined) " + typeof(undefined)); //undefined
console.log("typeof (null) " + typeof(null)); //object error de JavaScript sucede porque 
//Los datos se guardan en memoria como 1 y 0 en 32 bits
//hay bits que indican el tipo de dato, para:
// objetos es  = 00
// string es = 01 //verificas info
// numbers es = 02 // verificar
// null = 00000000000000.000 (los 32 bits), entonces cae al final del día en el primero de 00 que es objeto