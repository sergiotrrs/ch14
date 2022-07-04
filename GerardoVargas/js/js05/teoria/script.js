console.log("Teoria de la sesión JS05, operadores");

//Operadores de incremento de decremento+++++++++++++++++++++++++
let x = 1;
//incremento en una unidad
x = x + 1; //2
// El operador postincremento ++ devuelve el valor, despues incremento en una unidad
// la variable
//Primero devuelve el valor de x
// Luego incrementa en el 1 el valor de x
x++; //3
console.log("Valor de x con ++ " + x); //3

//Decremento en una unidad
x = x - 1; //2
// El operador -- devuelve el valor, despues decrementa en una unidad
x--; //1
console.log("Valor de x con -- " + x); //1

// El operador preincremento 
//Primero incrementa la variable en una unidad
//Luyego devuelve el valor
x=1;
// Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
console.log(`Valor de x++ : ${x++}`);// x = 1 ; x = x + 1 -> x=2
console.log(`Valor de ++x : ${++x}`);// x = x +1 -> x=3

let y=0;
x=0;
y= ++x;
console.log(`Valor de x : ${x}`); //1
console.log(`Valor de y : ${y}`); //1


y=0;
x=0;
y= x++;
console.log(`Valor de x : ${x}`); //1
console.log(`Valor de y : ${y}`); //0

x=1;
console.log("pre-incremento");
console.log(x); //1
console.log(++x); //2
console.log(x); //2
//Post incrmeento
console.log("post-incremento");
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
