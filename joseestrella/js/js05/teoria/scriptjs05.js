console.log("Teoria de la sesion JS05");

//Operadores de incremento de decremento

let x = 1;
//incremento en una unidad
x = x + 1;
//El operador ++, devuelve el valor, despues incrementa en una unidad
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++; //3
console.log("Valor de x: " + x); //3
//Decremento en una unidad
x = x - 1;
//El operador --, devuelve el valor, despues decrementa en una unidad
x--;
console.log("Valor de x con -- es: " + x); //1

// El operador preincremento
//Primero incrtementa la vaiable en una unidad 
//Luego devuelve el valor

x=1;

console.log(`Valor de x++  : ${x++}` );  //x = 1 ;  x = x + 1 -> x=2
console.log(`Valor de ++x  : ${++x}` );  //x=x+1 -> x= 3

let y = 0;
x = 0;
y = ++x;
console.log(`Valor de x++  : ${x}` );  //1
console.log(`Valor de ++x  : ${y}` ); //1

y = 0;
x = 0;
y = x++;
console.log(`Valor de x++  : ${x}` ); //1 
console.log(`Valor de ++x  : ${y}` ); //0

//Codigo de Mario Alvarez para diferenciar
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
let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3


.



