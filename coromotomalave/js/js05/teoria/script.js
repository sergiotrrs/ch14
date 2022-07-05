console.log("Teoria de ña sesion JS05, operadores")

//operadores de incremento y decremento

let x = 1;

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

x+=10
x-=10
