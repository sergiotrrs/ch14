console.log("teoria de la sesion js05, operadores")

//Operadores de incremento de decremento******************************
let x=1;
//incrementi de una unidad
x= x+1;
//El operadorr ++ realiza el incremento en 1
x++
console.log("Valor de x" +x)//3
//Decremento de una unidad
x= x-1;
//El operador -- realiza el dcrementi en una unidad
x--;
console.log("Valor de x con --: " +x)//1

//El operador preincremento ++ revuelve el valor de la variable, despues decrementta
// en una unidad variable
++x ; //2
x=1
//luego incrementa el valor de x
console.log("Valor de x")

console.log(`valor de x++ : ${x++}`); //x=1; x= x+1 -> x=1
console.log(`valor de ++x : ${++x}`); //  x=x+1 -> x=3

x=1
console.log(x);//1
console.log(++x)//2
console.log(x) //2
//post incremento
console.log("post-incremento")
x=1;
console.log(x)//1
console.log(x++)//1
console.log(x)//2
let i;
let j;

for (i = 0; i<3 ; j=i++) console.log("con i++" +i) // 0,1,2
console.log("Finalizacion de j: "+ j ); //2
for (i = 0; i<3 ; j=++i) console.log("con i++" +i) // 0,1,2
console.log("Finalizacion de j: " +j)// 3

//pre incremento
x=1;
y=++x // y= 2, x=2
//es lo mismo que
x=1
x=x+1;
y=x;

//post
x=1;
y=x++; // y=1 , x=2
// es lo mismo que
x=1;
y=x;
x=x+1;
//************************** 
x=10
y= x++; //  y=10, x= 11

x=30
y = ++x; // y = 31, x = 31
//************************************************************
//post-decremento, decremento
x=5
y= --x; // y =4, x=4

x=5
y= x--; // y =5, x=4

/* 
Operadores aritmeticos

Operador de suma*/
x=1 + 34 + y;
//operador de resta
x= 23 - 45 - y;
//operador de division
x= 12/6
//operador de multiplicacion
x= 2 * 4
//operador de residuo
x= 8%2
//operador de potencia
x=2**3

/* Operador de asignacion
 */
x=2;

x += 10; ///  x= x+ 10
x -= 5; ///  x= x-5
x /= 2; ///  x= x/ 2
x *= 10; ///  x= x* 10
x %= 10; ///  x= x % 10
x**=3; ////    x= x**3

/**
 * Operadores de igualad (comparacion)
 */
//operador igual que

x=1
y=2
x == y // false
y=1 //
x == y // true
x=1
y= "1"
x == y // true, compara el valor, el tipo de string se combierte a numerico
console.log("x == 'y' " + (x == y ))

//operado diferente que !=
x=1
y= '2'
console.log (" x != 'y' + (x != y)") // true
console.log (" x++ != 'y' + (x++ != y)") // true
console.log (" x != 'y' + (x != y)") // false
console.log (" ++x != 'y' + (++x != y)") /////3 true

//operadores logicos $$, || , !

true && true// true
//false, null, Nan, 0, string o undefined son considerados con valro false

// Si el primer operador es true, el resultado es el valor del segundo operador.
// Operadores de corto-circuito
console.log("true && NaN =" + (true && Nan));// NaN
console.log("false && NaN =" + (false && Nan));// false
console.log("true && 'Hola estrella' =" + (true && 'Hola estrella'));// Hola estrella
console.log("null && 'Hola Moi' =" + (null && 'Hola Moi'));// Null
console.log("'a' && 'Hola Moi' =" + ('a' && 'Hola Moi'));// Hola Moi
console.log("'' && 'Hola Maga' =" + ('' && 'Hola Maga'));// string vacio

// Operador logico or ||
true || false // true
//False, null, NaN, 0, empty string o undefined son considerador con valor false
//Si el primer operador es true, el resultado es el primer operador
// Si el primer operador es false, el resultado es el segundo operador
console.log("\n OPerador or ||")
console.log("true || NaN =" + (true || NaN));// true
console.log("false || NaN =" + (false || NaN));// NaN
console.log("true || 'Hola estrella' =" + (true || 'Hola estrella'));// true
console.log("null || 'Hola Moi' =" + (null || 'Hola Moi'));// 'Hola Moi'
console.log("'a' || 'Hola Moi' =" + ('a' || 'Hola Moi'));// 'a'
console.log("'' || 'Hola Maga' =" + ('' || 'Hola Maga'));// 'Hola Maga'

// Operador logico not !
let nuevoValor = !true// false
nuevoValor = !false // true
//False, null, NaN, empty string o undefined son considrados con valor false
console.log("\n OPerador and !")
console.log("!NaN =" + (!Nan));// true
console.log("!true =" + (!true);// false
console.log("!'Hola estrella' =" + (!'Hola estrella'));// false
console.log("!false =" + (!false);// true
console.log("!'a' =" + (!'a' ));// false
console.log("!''' =" + (!''));// true

//operador logico binario ?? Nullish
coalescing
//Operador logico que retoma el operador de la derecha, si el operador
//de la izquierda es null o undefined. De lo dontrario, retorna el valor de la izquierda
let asistencia
console.log("\n operador ?? nullish coalescing");
console.log( " asistencia = null ?? true :" + (asistencia = null ?? true)) // true
console.log("asistencia =1 ?? true:" + ( asistencia = 1 ?? true)) //1
x=undefined;
console.log("Asignacion de asistencia = x" + (asistencia = x ?? 'Asiste'))//"Asiste"
console.log("Asignacion de asistencia = x" + (asistencia ='' ?? 'Asiste'))// ""
console.log("typeof (undefined)" +typeof(udefinred)) // undefined
console.log ("typeof (null " + typeof(null))// object
//Los datos se guardan en la memoia como 1 y 0
// los bits se indican el tipo de dato, para
/// obajects es = 00
// strings es = 001 /verificar info
//numbers es = 02 // verificar info
//Para un tipo de dato null, todos sus bits (1 y 0) son 00000000.00




