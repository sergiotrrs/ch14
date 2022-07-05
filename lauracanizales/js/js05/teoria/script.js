console.log("Teoria de la sesion JS05, operadores");

//Operadores de incremento  de decremento
let x= 1;
//incremento en una unidad
x = x + 1; //2
//El operador postincremento ++, devuelve el valor, despues incrementa en una unidad
//la variable
//primero devuelve el valor de x
//luego incrementa en 1 el valor de x
x++; //3
console.log("Valor de x " + x); //3

//Decremento en una unidad
x = x -1; //2
//El operador -- , devuelve el vaalor, despues decremento en una unidad
x--; //1
console.log("Valor de x con -- : " + x ); //1

//El operador preincremento
// Primero incrementa la variable en una unidad. 
//Luego devuelve el valor
x=1;

console.log(`Valor de x++ : ${x++}`); //x=1 ; x=x + 1 -> x=2
console.log(`Valor de ++x : ${++x}`); //x=x+1 => x=3

let y = 0;
x=0;
y=++x;
console.log(`Valor de x : ${x}`);//1
console.log(`Valor de y : ${y}`);//1

y=0;
x=0;
y=x++;
console.log(`Valor de x : ${x}`);//1
console.log(`Valor de y : ${y}`);//0

x=1;
console.log("pre-incremento");
console.log(x); //1
console.log(++x); //2
console.log(x); //2
//Post incremento
console.log("post-incremento");
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2




///linea 81: post-decremento, pre decremento
x=5
y= --x; // y=4, x=4

x=5
y = x--; // y=5, x=4

///otro ejemplo
x=-10
y= --x; // y=-11, x=-11
console.log("y , x")

x=80
y= x--; //y=80, x = 79
console.log("y, x")

///Operadores aritmeticos
//operador suma
 x = 1 + 34 + y;
 //Operador resta
 x = 23 - 45 - y;
 //Operador divisiion
 x = 12/6; //2
 //operador multiplicacion
 x = 2 * 4; //8
 //operador de residuo
 x = 8 % 2; //residuo 0
 //operador de potencia
 x = 2**3; //8

 //Operador de asignacion
 x =2;
  x += 10; //x = x + 10
  x -= 5; //x = x - 5
  x *= 3; //x = x * 3
  x /= 2; //x = x / 2
  x %=4; //x = x % 4
   

































