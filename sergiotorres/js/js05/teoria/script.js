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