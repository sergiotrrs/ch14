console.log("Teoria de la JS05");
//Operadores de incemento de decremento
let x=1;
//incremento en una unidad
x=x+1;//2
//El operador postincremento ++, devuelve el valor, despues incrementa en una unidad
//la variable
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++;//3
console.log("Valor de x con ++: "+x);//3

//Decremento en una unidad
x=x-1;//2
// El operador  --, devuelve el valor, despues de decrementar en una unidad
x--;//1
console.log("valor de x con --: "+x); //1

//El operador preincremento,
//Primero incrementa la variab;e en una unidad
//Luego devuelve el valor
x=1;

console.log(`valor de x++: ${x++}`);//x=1; x=x+1; x=2
console.log(`valor de ++x: ${++x}`);//x=x+1; x=3


let y=0;
x=0;
y=++x;
console.log(`valor de x: ${x}`);//1
console.log(`valor de y: ${y}`);//1

y=0;
x=0;
y=x++;
console.log(`valor de x: ${x}`);//1
console.log(`valor de y: ${y}`);//0

x=1;
console.log("pre-incremento");
console.log(x);//1
console.log(++x);//2
console.log(x);//2
//post-incremento
console.log("post-incremento");
x=1;
console.log(x);//1
console.log(x++);//1
console.log(x);//2

//for(i=0; i<3; i++)console.log("con i++"+i);//0, 1, 2
//console.log("Finalizacion de i: "+i);//3
//for(i=0; i<3; ++i)console.log("con ++i"+i);//1,2
//console.log("Finalizacion de i: "+i);//3
let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3


//pre incremento 
x=1;
y=++x;// y=2, x=2
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post
x=1;
y=x++;//y=1, x=2
//es lo mismo que
x=1;
y=x;
x=x+1;
//----------------
x=10;
y=x++;//y=10, x=11

x=30;
y=++x;//y=31, x=31
//*************************/
//post-decremento, pre-decremento
x=5;
y=--x;//y=4, x=4

x=5;
y=x--;//y=5, x=4
//-----------------------
x=-10;
y=--x;//y=-11, x=-11 (x= x-1 -> -10 -1)
console.log(y,x);
x=80;
y=x--;//y=80, x=79
console.log(y,x);
/**
 *Operadores aritmeticos
 */
//Operador de suma
x=1+30+y;
//operador de resta
x=23-45-y;
//operador de division
x=56/6;
//operador de multiplicacion
x=2*4;
//operador de residuo
x=8%2;
//operador de potencia
x=2**3;//8
/**
 *Operador de asignacion
 */
x=2;
x +=10 ;//x=x+10 -> x=12
x -=5 ;//x=x-5 -> x=7
x *=2 ;//x=x*2 -> x=14
x /=2 ;//x=x/2 -> x=7
x %=2 ;//x=x%2 -> x=1
x **=2 ;//x=x**2 -> x=4

/**
 *Operadores de igualdad (comparacion)
 */
//Operador igual que
x=1;
y=2;
x == y; //false
y=1;
x == y; //true
x=1;
y="1";
//true, compara el valor, el tipo string se convierte en numerico
console.log(" x == 'y'+"+ (x == y));
//Operador diferente que !=
x = 1;
y = '2';
console.log(" x != 'y' "+ (x != y));//true 1 != '2'
console.log(" x++ != 'y' "+ (x++ != y));//true 1 != '2' -> x=x+1 -> x=2
console.log(" x != 'y' "+ (x != y));//false 2 != '2'
console.log(" ++x != 'y' "+ (++x != y));//true 2 != '2' -> x=x+1 -> x=3
//Operador extrictamente igual que === (compara el valor y el tipo)
x = 1;
y = '1';
console.log(" x === 'y' "+ (x === y));//false
//Operador extrictamente diferente que !== (compara el valor y el tipo)
x = 1;
y = '1';
console.log(" x !== 'y' "+ (x !== y));//true
//Operadores logicos &&, ||, !
true && true;//true
true && false;//false 
//False, null, NaN, 0,empty string, undefined son considerados con valor false:
//Si el primer operando es false, el segundo operando no se evalua y se devuelve el primer operando
//Si el primer operador es true, el resultado es el valor del segundo operador
console.log("true && NaN = "+ (true && NaN));//NaN
console.log("true && NaN = "+ (false && NaN));//false
console.log("true && 'Hola estrella' = "+ (true && 'Hola estrella'));//Hola estrella
console.log("null && 'Hola Moi' = "+ (null && 'Hola Moi'));//null
console.log("'a' && 'Hola Moi' = "+ ('a' && 'Hola Moi'));//Hola Moi
console.log("' ' && 'Hola Maga' = "+ ('' && 'Hola Maga'));//'' (empty string)
console.log("' ' && 'Hola Maga' = "+ (' ' && 'Hola Maga'));//Hola Maga

//Operador OR ||
true || false;//true
//False, null, NaN, 0,empty string, undefined son considerados con valor false.
//Si el primer operando es true, el segundo operando no se evalua y se devuelve el primer operando
//Si el primer operador es false, el resultado es el valor del segundo operador
console.log("\n Operador or ||");
console.log("true || NaN = "+ (true || NaN));//true
console.log("true || NaN = "+ (false || NaN));//NaN
console.log("true || 'Hola estrella' = "+ (true || 'Hola estrella'));//true
console.log("null || 'Hola Moi' = "+ (null || 'Hola Moi'));//Hola Moi
console.log("'a' || 'Hola Moi' = "+ ('a' || 'Hola Moi'));//a
console.log("' ' || 'Hola Maga' = "+ ('' || 'Hola Maga'));//Hola Maga
console.log("' ' || 'Hola Maga' = "+ (' ' || 'Hola Maga'));//Hola Maga

//operador NOT !
let nuevoValor = !true;//false
nuevoValor = !false;//true
//False, null, NaN, 0,empty string, undefined son considerados con valor false.
//Si el operando es true, se devuelve false
//Si el operador es false, se devuelve true
console.log("\n Operador or !");
console.log(" !NaN = "+ (!NaN));//true
console.log("!true = "+ (!true));//false
console.log(" !'Hola estrella' = "+ (!'Hola estrella'));//false
console.log(" !false = "+ (!false));//true
console.log(" !'a' = "+ (!'a'));//false
console.log("!'' = "+ (!''));//true
console.log(" !' ' = "+ (!' '));//false

//Operador logico binario ?? nullish coalescing
//Operador logico que retorna el operador de la derecha, si el operador
//de la izquierda es null o undefined. De lo contrario, se devuelve el operador de la izquierda
let asistencia;
console.log("\n Operador ?? nullish coalescing");
console.log("asistencia = null ?? true :" +(asistencia = null ?? true));//true
console.log("asistencia = 1 ?? true :" +(asistencia = 1 ?? true));//1
x = undefined;
console.log("Asistencia de asistencia =x :" +(asistencia = x ?? "Asiste"));//Asiste
console.log("Asistencia de asistencia =x :" +(asistencia = '' ?? "Asiste"));
//Si la izquierda es null o undefined, se retorna la derecha
//Si la izquierda NO ES null o undefined, se retorna la izquierda

