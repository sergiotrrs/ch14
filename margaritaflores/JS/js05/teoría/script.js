console.log("Teoría de la sesión JS02, operadores");

//OPERADORES DE INCREMENTO DE DECREMENTO*********+
let x =1
//Incremento en una unidad
x = x +1; //2
//El operador post-incremento++, devuelve el valor, despúes incrementa en una unidad la variable (Ojo solo de una unidad no porque tiene doble plus significa que aumenta en dos unidades)
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++; //3
console.log("Valor de x con ++ " + x ); //3

//Decremento en una unidad
x = x - 1; //2
//El operador -- realiza el decremento en una unidad (Ojo sucede con lo mismo )
x --; // 1
console.log("Valor de x con -- " + x ); //1 

// El operador pre-incremento,
//Primero incrementa la variable en una unidad
//Luego devuelve el valor
x = 1; 
//Se hace dos operaciones
//Primero devuelve el valor de x
//Luego incremnta en 1 el valor de x 
console.log(`Valor de x++  : ${x ++}` ); // x = 1; x = x + 1 -> x =2
console.log(`Valor de ++x  : ${++x}`); // x = 1 -> x=3

let y = 0;
x = 0;
y = ++x; //Primero incrementa y después lo devuelve
console.log(`Valor de x++  : ${x}` ); //1 //Se imprime uno porque x que queda con el valor devuelto
console.log(`Valor de ++x  : ${y}`);  //1

y = 0;
x = 0;
y = x++;//Primero devuelve el valor, después incrementa
console.log(`Valor de x++  : ${x}` );  // 1
console.log(`Valor de ++x  : ${y}`);   //0

x=1;
console.log("pre-incremento");
console.log(x);  //1
console.log(++x); //2
console.log(x); //2
//Post incremento
console.log("post-incremento");
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2

let i;
let j;
for (i = 0; i<3; i++) console.log ("con i++ " +i); //0, 1, 2
//Da el mismo valor porque se encuentra en el for
console.log("Finalización de i:  " + i) //3
for (i = 0; i<3; j=++i) console.log ("con ++i " +i); //0, 1, 2
console.log("Finalización de i:  " + i) //3

//pre incremento 
x=1;
y=++x; // y = 2, x =2
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post
x=1;
y=x++; // y=1, x=2
//es lo mismo que
x=1;
y=x;
x=x+1;
//-------------
y =10;
y = x++; // y= 10, x=11 //Primero devuelve el valor , despues incrementa
y = 30;
y = ++x; // y= 31, x = 31  //Primero incremento y después devuelve el valor

//************************ */
//Post-decremento, pre-decrement
x=5
y = --x; //y = 4, x=4  pre-decre

x=5
y = x--; // y= 5, x =4  post-decre

x=-10 // y = -11, x = -11 
y = --x; 
console.log(y,x);
x=80
y = x--; // y= 80, x = 79
console.log (y, x);
/* 
* Operadores aritméticos
*/
//Operador de suma
x= 1 + 34 + y;
//Operador de resta
x= 23 - 45 + y;
//Operador de división
x= 12/6; // 2
//Operador de multiplicación
x= 2 * 4; /// 8
//Operador de residuo
x= 8%2; /// 0
//Operador de potencia
x= 2**3 /// 8

/**
 * Operador de asignación
 */
x = 2;
x += 10; //x = x + 10
x -= 5; // x = x -5
x *= 3; // x = x * 3
x /= 2; // x = x / 2;
x %= 4; // x = x % 4;
x **= 3 // x = x ** 3;