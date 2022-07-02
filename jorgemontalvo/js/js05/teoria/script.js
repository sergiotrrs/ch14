console.log("Teoría de Sesión JS05, OPERADORES");

//Operadores de inceremento y decremento+++++++++++++++++++
let x=1;
//incremento en una unidad
x=x+1;
//el operador postincremento ++, devuelve el valor, después incrementa en una unidad
//la variable 
x++;
console.log("Valor de x " + x); //3
//Decremento en una unidad
x= x-1;
//El operador -- realiza el decremento en una unidad 
x--;
console.log("Valor de x con -- : " + x);//1
 //El operador preincremento ++ devuelve el valor de la variable, despues incrementa
 // en una unidad variable.
 ++x; //2
 
console.log(`Valor de x++ : ${x++}`);
console.log(`Valor de x++ : ${++x}`);

let y=0;
x=0
y=++x;
console.log(`Valor de x++ : ${x}`);
console.log(`Valor de x++ : ${y}`);

x=0
y=0
y=x++;
console.log(`Valor de x++ : ${x}`);
console.log(`Valor de x++ : ${y}`);

//Pre incremento
x=1;
console.log("pre-incrmeneto");
console.log(x);
console.log(++x);
console.log(x);
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2

let i;
let j;
for (i = 0; i<3;j=i++) console.log("con i++ " + i) //0,1,2
console.log("Finalizacion de j: " + j) //2
for (i = 0; i<3;j=++i) console.log("con i++ " + i) //0,1,2
console.log("Finalizacion de j: " + j)//3


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

//************************************************ */
//posst-decremento , pre-decremento
x=5
y = --x; // y=4 , x=4

x=5
y=x--; // y = 5 , x=4

/**
 * Operadores aritmeticos
 */
//operador suma
x=1+34 + y;
//operador de resta 
x = 23 -45 -y;
//operador de divisiom
x=12/6; //2
//operador de multiplicacion
x = 2* 4; //8
//operador de residuo
x = 8%2; // residuo=0
//operador de potencias
x = 2**3; //8

/**
 * Operador de asignacion
 */
x += 10; // x = x + 10
x -= 5; // x = x - 5
x *= 3 // x = x * 3
x /= 2;// x = x/2
x %= 4; // x = x%4
x **= 3; // x = x**3