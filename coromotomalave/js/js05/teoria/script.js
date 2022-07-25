console.log("Teoria de ña sesion JS05, operadores")

//operadores de incremento y decremento

/*let x = 1;

x = x + 1;
x++;

console.log("Valor de x con ++ : " + x );

x = x - 1;
// el operador ++ devuelve el valor despues incrementa en un
x--;

console.log("Valor de x con ++ : " + x );

// Operador preincremento devuelve ele valor de la variable y despues decrementa en una unidad la variable

++x;
// primero devuelve el valor de x 
//luego incrementa en 1 el valor de x

x=1;

console.log(`Valor de x++  : ${x++}` );  //x = 1 ;  x = x + 1 -> x=2
console.log(`Valor de ++x  : ${++x}` );  //x=x+1 -> x= 3


x=1;
console.log("pre-incremeneto");
console.log(x);//1
console.log(++x);//2
console.log(x);//2
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x);//1
console.log(x++);//1
console.log(x);//2


for( i = 0; i < 3 ; i++) console.log("con i++ " + i);

for( i = 0; i < 3 ; i++) console.log("con ++i " + i);


let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

//operador de suma

x = 1 + 34;
//operador de resta

x = 23 - 45;

// operador de division
x = 12 / 6;

// operador de multiplicacion
x = 2 * 4;

// operador de residuo

x = 8%2;

// operador de potencia

x = 2**3;


//OPERADOR DE ASIGNACION
x = 2;
x+=10;
x-=5;
x*=3;
x/=2;
x%=3;
x**=3;


//Operadores de igualdad(comparacion)

x = 1;
y = 2;

x == y;//false

y = 1;

x == y //true

x= 1;
y = '1';

x == y// true

//operador diferente que != 

x = 1;
y = '2';

console.log("x != 'y'" + (x != y))// true 1 != '2'
console.log("x++ != 'y'" + (x++ != y))
console.log("x != 'y'" + (x != y))
console.log("++x != 'y'" + (++x != y))*/


//Operadores logicos &&

/*true && true//true
true && false// false*/
//false, null, nan,0, empty string o undefined son considerados con valor false

// si el primer operador es true el resultado es el valor del segundo operador
// si el primer operador es false el resultado sera falso
//operadores de corto circuito
/*console.log("true && NaN =" + ( true && NaN))//nan
console.log("false && NaN =" + ( false && NaN))//false
console.log("true && 'Hola Estrella' =" + ( true && 'Hola Estrella' ));// Hola Estrella
console.log("null && 'Hola moi' = " + ( null && true ));//false
console.log("'a' && 'Hola moi' = " + ( 'a' && 'Hola Moi'));//null
console.log("'a' && 'Hola moi' = " + ( 'a' && 'Hola Moi'));//Hola moi\
console.log("'' && 'Hola maga' = " + ( '' && 'Hola Maga'));//string vacio si le colocamos un espacio sale hola maga*/


// Operador logico or 
//false, null, nan,0, empty string o undefined son considerados con valor false

// si el primer operador es true, el resultado es el primer operador.
// si el primer operado es falso el resultado es el segundo operador.

/*true || true
true || false// true

console.log("true || NaN =" + ( true || NaN))//true
console.log("false || NaN =" + ( false || NaN))//NaN
console.log("true || 'Hola Estrella' =" + ( true || 'Hola Estrella' ));//true

console.log("null || 'Hola moi' = " + ( null ||true ));
console.log("'a' || 'Hola moi' = " + ( 'a' || 'Hola Moi'));
console.log("'a' || 'Hola moi' = " + ( 'a' || 'Hola Moi'));
console.log("'' || 'Hola maga' = " + ( '' || 'Hola Maga'));*/




//Operador logico not ! 

/*let nuevoValor = !true //false
nuevoValor = !false // true

//false null. nan 0 empty string o undefined son considerados como valor falso
console.log("n/ Operador not !");//
console.log(" !NaN = " + (!NaN ));//true
console.log(" !true = " + (!true ));//false
console.log(" !'Hola Estrella' = " + (!'Hola Estrella'));//false
console.log(" !false = " + (!false));//true
console.log(" !'a' = " + ( !'a' ));// false
console.log(" !''' = " + ( !'' ));//true*/



//operador logico binario ?? nullish coalescing

//Si la izquierda es null o undefined, se retorna la derecha
//Si la izquierda NO ES null o undefined, se retorna la izquierda

/*let asistencia;
console.log("/n operador ?? Nullish Coalescing");
console.log("asistencia = Null ?? true :" + (asistencia = null ?? true))//true
console.log("asistencia = 1 ?? true :" + (asistencia = 1 ?? true))//1

x = undefined;

console.log("Asignacion de asistencia = x : " + (asistencia = x ?? 'Asiste'))//asiste
console.log("Asignacion de asistencia = x : " + (asistencia = x '' ?? 'Asiste'))//''
console.log( "typeof (undefined) " + typeof(undefined));//undefined
console.log( "typeof (null) " + typeof(null));//object*/ 


//typeof(null) da objeto pero es un error debe imprimir null porque es null.