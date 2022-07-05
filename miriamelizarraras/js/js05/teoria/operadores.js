//Se suma o se resta

//Operadores de incremento de decremento ****
let x = 1;
//Incremento en una unidad
x = x +1; //2 
//El operador postincremento ++ devuelve el valor, después incrementa en una unidad.
//la variable 
//Primero incrementa en 1 el valor de x
x++; //3
console.log("Valor de x " + x); //3


//Decremento en una unidad
x = x - 1;
//El operador -- devuelve el valor, después realiza el decremento en una unidad
x--;
console.log("Valor de x con -- " + x);//1


//El operador preincremento ++ incrementa la variable en una unidad y devuelve el valor.
//Primero increment la variable en una unidad
//Luego devuelve el valor 
x=1;

console.log(`Valor de x++ :  + ${x++}`); //x=1 ; x = x + 1 -> x = 2
console.log(`Valor de x++ :  + ${++x}`); //x=x+1 -> x = 3


//*************EJEMPLOS***************** */
//en este ejemplo se hace primero el incremento y después se entrega la variable.
let y=0;
x=0;
y = ++x;
console.log(`Valor de x++ :  + ${x}`);//1
console.log(`Valor de x++ :  + ${y}`);//1

//en este ejemplo primero se entrega la variable y después se entrega el incremento 
//let y=0;
x=0;
y = x++;
console.log(`Valor de x++ :  + ${y}`);//0
console.log(`Valor de x++ :  + ${x}`); //1


/*
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
*/

 
// 1. va a:i = 0; 
//2: va a: i<3   
//3. va a: console.log("con i++ " + i);
//4: va a: j=i++
let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++ " + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3


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

x=10;
y= x++; //y=10, x = 11
x=30;
//***** */
//post-decremento, pre-decremento
x=5
y = --x; // y = 4, x = 4

x=5
y = x--; // y = 5, x = 4
//******* */
/**
 * Operadores aritméticos
 */
//Operador de suma 
x = 1 + 34 + y;
// Operador de resta
x = 23 -45 -y;
// Operador de división 
x = 12/6; //2
// Operador de multiplicación 
x = 2 * 4; // 8
// Operador de residuo
x = 8%2; // residuo 0
// Operador de potencia Math
x = 2**3; //8 para elevar a la potencia se ponen 2 asteriscos 


/**
 * Operador de asignación 
 */
x = 2;

x += 10; //x = x +10;
x -= 5; //x = x -5;
x *= 3; //x = x *3;
x /= 2; //x = x/2;
x %= 4; //x = x%4;
x **= 3; // x= x**3;


