console.log("Teoría de la sesión JS05, operadores");

//Operadores de incremento de decremento
let x = 1;
//incremento en una unidad
x = x+1
//El operador ++ realiza el incremento en una unidad
x++;
console.log("Valor de x " +x); //3
//Decremento en una unidad
x = x - 1 //2
//El operador -- realiza el decremento en una unidad
x--;
console.log("Valor de x " + x); //1

//El operador preincremento ++ incrementa lavariable en una unidad y devuelve el valor
x=1;

console.log(`Valor de x++  : ${x++}` );  //x = 1 ;  x = x + 1 -> x=2
console.log(`Valor de ++x  : ${++x}` );  //x=x+1 -> x= 3

/*let y =0;
x=0;
y= ++x;
console.log(`Valor de x  : ${x}` ); //1
console.log(`Valor de y  : ${y}` ); //1
*/
let y=0;
x=0;
y= x++;
console.log(`Valor de x  : ${x}` ); //1
console.log(`Valor de y  : ${y}` ); //0

x=1;
console.log("pre-incremento");
console.log(x);
console.log(++x);
console.log(x);

x=1;
console.log("post-incremento");
console.log(x);
console.log(x++);
console.log(x);

for (let i = 0; i < 3; i++) console.log("con i++" + i); // 0 1 2 
for (let i = 0; i < 3; i++) console.log("con ++i" + i); // 0 1 2 
//Primero devuelve el valor de x
//luego incrementa en 1 el valor de x


//post-decremento, pre decremento

x=5
y=--x; //y=4, x=4

x=5
y=x--; //y =5, x=4

//Operadores aritméticos
//Operador de suma
x=1+34+y;
//Operador de resta
x = 23 - 45 - y;
//Operador de división
x = 12/6; //2
//Operador de multiplicación
x = 2*4; //8
//Operador de residuo
x= 8%2; //0
//Operador de potencia
x = 2**3;//8

//Operador de asignación

x=2; 

x += 10; //x=x+10
x -=5; //x=x-5
x*=3; //x=x*3
x/= 2; //x=x/2
x %= 4; //x=x%4;
x **= 3; //x=x**3

