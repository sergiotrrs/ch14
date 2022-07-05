console.log("Teoria de la sesión JS05, operadores");

//Operadores de incrementos y decrementos**************
let x = 1;
//Incremento de la unidad
x = x + 1; //2
//El operador postincremento ++ devuelve el valor, despues incremento de una unidad
//la variable
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++; //3
console.log("Valor de x con ++ " + x); //3

//Decremento de la unidad
x = x - 1; //2
//El operador -- devuelve el valor, despues decremento de una unidad
x--; //1
console.log("Valor de x con -- " + x); //1

//Preincremento ++ ;
//primero revuelve el valor de la variable, 
//después decrementa en una unidad de la variable.
++x; //2
//primero devuelve el valor de x
//luego incrementa en 1 el valor de x
console.log(`Valor de x++ : ${x++} x`); //2
console.log(`Valor de ++x : ${++x} x`); //4

let y=0;
x = 0;
y = ++x;
console.log(`Valor de x : ${x} x`); //1
console.log(`Valor de y : ${y} x`); //1

x = 0;
y = 0;
y = x++;
console.log(`Valor de x : ${x} x`); //1
console.log(`Valor de y : ${y} x`); //0

//Pre-incremento
x=1;
console.log(`pre-incremento`);
console.log(x); //1
console.log(++x); //2
console.log(x); //2
//Post-incremento
console.log(`post-incremento`);
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2

let i;
let j;
for (i=0; i<3; j=i++) console.log(`con i++ `+i); //0 , 1, 2
console.log(`Finalización de j: ` + i); //2

for (i=0; i<3; j=++i) console.log(`con ++i `+i); //0 , 1, 2
console.log(`Finalización de j: ` + i); //3

//Operadores aritmeticos ****************************************

//Operador de suma
x = 1 + 34 + y;
//Operador de resta
x = 23 - 45 - y;
//Operador de división
x = 12/6; 

