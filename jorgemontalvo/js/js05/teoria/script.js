console.log("Teoría de Sesión JS05, OPERADORES");

//Operadores de inceremento y decremento+++++++++++++++++++
let x=1;
//incremento en una unidad
x=x+1;
//el operador postincremento ++, devuelve el valor, después incrementa en una unidad
//la variable 
x++;
console.log("Valor de x " + x); //3
//Decremento en una unidad
x= x-1;
//El operador -- realiza el decremento en una unidad 
x--;
console.log("Valor de x con -- : " + x);//1
 //El operador preincremento ++ devuelve el valor de la variable, despues incrementa
 // en una unidad variable.
 ++x; //2
 
console.log(`Valor de x++ : ${x++}`);
console.log(`Valor de x++ : ${++x}`);

let y=0;
x=0
y=++x;
console.log(`Valor de x++ : ${x}`);
console.log(`Valor de x++ : ${y}`);

x=0
y=0
y=x++;
console.log(`Valor de x++ : ${x}`);
console.log(`Valor de x++ : ${y}`);

//Pre incremento
x=1;
console.log("pre-incrmeneto");
console.log(x);
console.log(++x);
console.log(x);
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2

let i;
let j;
for (i = 0; i<3;j=i++) console.log("con i++ " + i) //0,1,2
console.log("Finalizacion de j: " + j) //2
for (i = 0; i<3;j=++i) console.log("con i++ " + i) //0,1,2
console.log("Finalizacion de j: " + j)//3


//pre incremento 
x=1;
y=++x;
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post
x=1;
y=x++;
//es lo mismo que
x=1;
y=x;
x=x+1;

//************************************************ */
//posst-decremento , pre-decremento
x=5
y = --x; // y=4 , x=4

x=5
y=x--; // y = 5 , x=4

/**
 * Operadores aritmeticos
 */
//operador suma
x=1+34 + y;
//operador de resta 
x = 23 -45 -y;
//operador de divisiom
x=12/6; //2
//operador de multiplicacion
x = 2* 4; //8
//operador de residuo
x = 8%2; // residuo=0
//operador de potencias
x = 2**3; //8

/**
 * Operador de asignacion
 */
x += 10; // x = x + 10
x -= 5; // x = x - 5
x *= 3 // x = x * 3
x /= 2;// x = x/2
x %= 4; // x = x%4
x **= 3; // x = x**3

/**
 * Operadores de Igualdad (comapración)
 */
// operador igual que
x=1
y=2
x==y// false
y=1;
x==y; //true

y = "1";
x==y; // true, compara el VALOR, el tipo string se convierte a numerico
console.log("x == 'y' " + (x==y));

//Operador diferente que !=
x=1;
y='2';
console.log("x!= 'y' " + (x!=y)); //true
console.log("x = 'y' " + (x++!=y));//true
console.log("x = 'y' " + (x!=y));//false
console.log("X = 'y' " + (++x!=y));//false

//Operador extrictamente igual que === compara el valor y tipo de dato
x=1;
y='1';
console.log("x === 'y'" + (x===y)); // false 
//Operador extrictamente diferete que != compara el valor y tipo de dato
console.log("x != 'y'")//true

//Operadores logicos and  &&
true && true; //true
false && false // si uno de los valore ses false, el resultado será false:

//false, null, NaN, 0, empty string o undefined son considerados como valor falso

//SI EL PRIMER OPERADOR ES TRUE, EL RESULTADO ES EL VALOR DEL SEGUNDO OPERADOR
//Si el primer operador es false, el resultado será false
//Operadores de corto-circuito
console.log("true && NaN = " + (true && NaN));//NaN
console.log("false && NaN = " + (false && NaN));//false
console.log("true && 'Hola Estrella' = " + (true && 'Hola Estrella')); //Hola Estrella
console.log("null && 'Hola Moi' = " + (null && 'Hola Moi')); //null
console.log("'a' && 'Hola Moi' = " + ('a' && 'Hola Moi')); //Hola Moi
console.log("'' && 'Hola Maga' = " + ('' && 'Hola Maga')); //'' string vacío

//Operador lógico or ||
true || false //true
//false, null, NaN, 0, empty string o undefined son considerados como valor falso
//Si el primer operador es true, el resultado es el primer operador
//Si el primer operadr, es false el resultado es el segundo operador
console.log("n\Operador or ||" );
console.log("true || NaN = " + (true || NaN));//Nan
console.log("false && NaN = " + (false && NaN));//false
console.log("true || 'Hola Estrella' = " + (true || 'Hola Estrella')); //true
console.log("null || 'Hola Moi' = " + (null || 'Hola Moi')); //Hola Moi
console.log("'a' || 'Hola Moi' = " + ('a' || 'Hola Moi')); //a
console.log("'' || 'Hola Maga' = " + ('' || 'Hola Maga')); //Hola Maga

//Operador logico not !
let nuevoValor = !true; //false
nuevoValor = !false //true
//false, null, NaN, 0, empty string o undefined son considerados como valor falso
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador lógico binario ?? Nulish Coalescing
//Operador lógico que retorna el operador de la derecha, si el operador de la 
//de la izquierda es null o undefenied. De lo contrario, retorna el operador de la izquierda
//opIzquierda ?? opDerecha
let asistencia = null ?? true//true
console.log("\n operador ?? Nulish Coalescing");
console.log(" asistencia = null ?? true :" + (asistencia = null ?? true));//true
console.log(" asistencia = 1 ?? true :" + (asistencia = 1 ?? true));//1
x=undefined;
console.log("Asignacion de asistencia = x :" + (asistencia= x ?? 'Asiste'));//"Asiste"
console.log("Asignacion de asistencia = '' :" + (asistencia= '' ?? 'Asiste'));//"Asiste"
console.log( "typeOf (undefenied)" + typeof(undefined)); //undefined
console.log( "tyoeOf (null) " + typeof(null)); //object

//Los datos se guardan en memoria como 1 y 0
//los bits que indican el tipo de dato, para 
//objetos es = 00
//strings es = 



