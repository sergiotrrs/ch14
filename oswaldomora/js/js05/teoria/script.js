console.log("Teoria de la sesión JS05, operadores");

//Operadores de incremento de decremento****************************************************
let x =1;
//Incremento de una unidad
x = x + 1;
//El operador post incremento ++, devuelve el valor, dsps realiza el incremento en una unidad la variable, luego incrementa en 1 el valor de x
x++;
console.log("Valor de x " + x); //3

//Decremento de una unidad
x = x-1;

//El operador post decremento-- realiza el decremento en una unidad
x--;
console.log ("Valor de x" + x); //1

// El operador preincremento ++ primero incrementa el valor de la variable ty luego lo devuelve
x=1;

console.log(`Valor de x++: + ${x++}`);//x=1; x = x + 1 -> x =2
console.log(`Valor de ++x:  + ${++x}`);//x = x + 1 -> x=3

let y = 0;
x = 0
y = x++;

console.log(`Valor de x: ${x}`); // 1
console.log(`Valor de y: ${y}`); // 0


let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3


//post-decremento, pre-decremento
x=-10;
y=--x;  //y=-11, x=-11;

x=80
y=x--; //y=80, x=79;

/**
 * Operadores aritmeticos
 */
//Suma
x = 1 + 34 + y;

//Resta
x = 23 - 45 - y;

//División
x = 12/6; //2

//Multiplicación
x = 2 * 4; //8

//Ressiduo
x = 8%2; // residuo 0

//Operador de potencia
x= 2**3; //8

/**
 * Operador de asignación
 */
x=2;

x+=10; // x = x+10;
x-= 5; // x = x-5;
x*=3; // x = x * 3;
x /=2; // x = x/2;
x%=4; // x = x%4;
x**=3; // x = x**3;