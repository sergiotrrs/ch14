console.log("Sesion JS05");

//Operadores de icremento y decremento
let x = 1;
//Incremento en una unidad
x = x + 1;
//Operador ++ devuelve el valor y despues incrementa en unidad
//Primero devuelve el valor de X
//Luego incrementa en 1 el valor de X
x++;
console.log(`Valor de x++ = ${x}`);
//Decremento en una unidad
x = x - 1;
//Operador -- devuelve el valor y despues decrementa en una unidad
x--;
console.log(`Valor de x-- = ${x}`);

//El operador preincremento ++ 
//Incrementa la variable en una unidad
//Luego devuelve el valor de la variable
x = 1;
console.log(`Valor de x++ ${x++}`);
console.log(`Valor de ++x ${++x}`);

let y = 0;
x = 0;
y = ++x;

console.log(`Valor de x ${x}`);
console.log(`Valor de y ${y}`);

y = 0;
x = 0;
y = x++;

console.log(`Valor de x ${x}`);
console.log(`Valor de y ${y}`);

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

let j;
for (i = 0; i < 3; j = i++) console.log(`Con i++ ${i}`);
console.log(`Finalizacion de j; ${j}`);
for (i = 0; i < 3; j = ++i) console.log(`Con i++ ${i}`);
console.log(`Finalizacion de j; ${j}`);

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

x = 5;
y = ++x; // y=6   x=6
console.log(x, y);
x = 5;
y = x++; // y=6   x=5
console.log(x, y);

x = 80;
y = ++x; // y=81   x=81
console.log(x, y);
x = -11;
y = x++; // y=-11   x=-10
console.log(x, y);

x = 5;
y = --x; // y=4   x=4
console.log(x, y);
x = 5;
y = x--; // y=5   x=4
console.log(x, y);

x = 80;
y = --x; // y=79   x=79
console.log(x, y);
x = -11;
y = x--; // y=-11   x=-12
console.log(x, y);

//Operadores Aritmeticos
//Operador Suma
x = 1 + 34 + y;

//Operador Resta
x = 23 - 45 - y;

//Operador Division
x = 12 / 6 

//Operador Multiplicacion 
x = 2 * 4;

//Operador Residuo
x = 8 % 2;

//Operador Potencia 
x = 2 ** 3;

//Operador de asignacion
x = 2;
x += 10; //x = x + 10;
x -= 3;
x *= 3;
x /= 2;
x %= 4;
x **= 3;