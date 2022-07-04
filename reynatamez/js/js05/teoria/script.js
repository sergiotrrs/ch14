//Se suma o se resta

//Operadores de incremento de decremento ****
let x = 1;
//Incremento en una unidad
x = x +1; //2 
//El operador postincremento ++ devuelve el valor, después incrementa en una unidad.
//la variable 
//Primero incrementa en 1 el valor de x
x++; //3
console.log("Valor de x " + x); //3


//Decremento en una unidad
x = x - 1;
//El operador -- devuelve el valor, después realiza el decremento en una unidad
x--;
console.log("Valor de x con -- " + x);//1


//El operador preincremento ++ incrementa la variable en una unidad y devuelve el valor.
//Primero increment la variable en una unidad
//Luego devuelve el valor 
x=1;

console.log(`Valor de x++ :  + ${x++}`); //x=1 ; x = x + 1 -> x = 2
console.log(`Valor de x++ :  + ${++x}`); //x=x+1 -> x = 3


//*************EJEMPLOS***************** */
//en este ejemplo se hace primero el incremento y después se entrega la variable.
let y=0;
x=0;
y = ++x;
console.log(`Valor de x++ :  + ${x}`);//1
console.log(`Valor de x++ :  + ${y}`);//1

//en este ejemplo primero se entrega la variable y después se entrega el incremento 
//let y=0;
x=0;
y = x++;
console.log(`Valor de x++ :  + ${y}`);//0
console.log(`Valor de x++ :  + ${x}`); //1


/*
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
*/

 
// 1. va a:i = 0; 
//2: va a: i<3   
//3. va a: console.log("con i++ " + i);
//4: va a: j=i++
let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++ " + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3


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

x=10;
y= x++; //y=10, x = 11
x=30;
//***** */
//post-decremento, pre-decremento
x=5
y = --x; // y = 4, x = 4

x=5
y = x--; // y = 5, x = 4
//******* */
/**
 * Operadores aritméticos
 */
//Operador de suma 
x = 1 + 34 + y;
// Operador de resta
x = 23 -45 -y;
// Operador de división 
x = 12/6; //2
// Operador de multiplicación 
x = 2 * 4; // 8
// Operador de residuo
x = 8%2; // residuo 0
// Operador de potencia Math
x = 2**3; //8 para elevar a la potencia se ponen 2 asteriscos 


/**
 * Operador de asignación 
 */
x = 2;

x += 10; //x = x +10;
x -= 5; //x = x -5;
x *= 3; //x = x *3;
x /= 2; //x = x/2;
x %= 4; //x = x%4;
x **= 3; // x= x**3;


/** Operador igual que */
x = 1;
y = 2;
x == y; //false
y = 1;
x == 1;
y = "1"
//true, compara el VALOR, el tipo string se convierte a númerico.
console.log(" x == 'y' "+ (x == y));


//Operador diferente que !=
x = 1;
y = '2';
console.log(" x != 'y' " + (x != y));//true
console.log(" x++ != 'y' " + (x != y));//true
console.log(" x++ != 'y' " + (x != y));//true
console.log(" ++x ! 'y'" + (++x != y));//true 

//Operdor extrictamente igual que === compara el valor y tipo de dato
x = 1;
y = '1';
console.log(" x === 'y' " + (x === y)); //false

//Operador extrictamente diferente !== compara el valor y tipo de dato
console.log("x !=0 'y' " + (x!==y)); //true

//Operadores lógicos &&, || , !
true && true // true
true && false // false
// false, null, NaN, 0, empty string o undefined son considerados con valor false.
// Si el primer operador es false, el resultado será el valor del primer operador.
// Si el primer operador es true, el resultado es el valor del segundo operador.
// Operadores de corto-circuito
console.log("true && NaN =" + (true && NaN)); //NaN
console.log(" false && NaN = " + (false && NaN)); // false
console.log(" true && 'Hola estrella' = " + (true && 'Hola estrella'));//Hola estrella
console.log(" null &&  'Hola Moi' = " + (null && true)); //null
console.log(" 'a' && 'Hola Moi' = " + ('a' && "Hola Moi")); // Hola Moi
console.log(" '' && 'Hola Maga' = " + ('' && "Hola Maga")); // String vacio, como es empty, se considera false, el resultado es nada un string vacio. 

//Operador lógico or || 
true || false // true
//False, null, NaN, 0, empty string o undefined son considerados con valor false. 
// Si el primer operador es true, el resultado  es el primer operador.
// Si el primer operador es false, el resultado es el segundo operador.
console.log("\n Operador or ||")
console.log("true && NaN =" + (true || NaN)); //true
console.log(" false || NaN = " + (false || NaN)); //NaN
console.log(" true || 'Hola estrella' = " + (true || 'Hola estrella'));//true
console.log(" null ||  'Hola Moi' = " + (null || "Hola Moi")); //Hola Moi
console.log(" 'a' || 'Hola Moi' = " + ('a' || "Hola Moi")); // 'a'
console.log(" '' || 'Hola Maga' = " + ('' || "Hola Maga")); //Hola Maga ('' string vacio, empty)

//Operador lógico not !
let nuevoValor = !true //false
nuevoValor = !false //true
//False, null, NaN, 0, empty string o undefined son considerados con valor false. 
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador lógico binario Nullish Coalescing
//Operador lógico que retorna el operador de la derecha, si el operador 
//de la izquierda es null o undefined. De lo contrario retorna el operador (valor)
//de la izquierda.
//opIzquierda ?? opDerecha
let asistencia;
console.log("\n operador ?? Nullish Coalescing");
console.log(" asistencia = null ?? true: " + (asistencia = null ?? true ));//true
console.log("asistencia = 1 ?? true : " + (asistencia = 1 ?? true)); //1
x = undefined;
console.log ("Asignación de asistencia = x :" + (asistencia= x ?? 'Asiste'));//"Asiste")
console.log("Asignación de asistencia = x:" + (asistencia= '' ?? 'Asiste')); //"" (empty string (campo vacío)
console.log("typeof (undefined) " + typeof(undefined));//undefined
console.log("typeof (null) " + typeof(null));//object
//Los datos se guardan en memoria como 1 y 0;
//objects es = 00
//strings es = 01 //verificar info, se inventó en clase.
//numbers es = 02 // verificar info, se inventó en clase.
//Para un tipo de dato null, todos sus bits (1 y 0) son 0000000000..00
//siempre que se haga un typeoff de null será un objeto por que es un error de JS.





