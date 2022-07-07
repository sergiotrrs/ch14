/**
 * Sesión de operadores
 */

//console.log("Link");
//Incremento y decremento

//Se lee de izquierda a derecha: primero
//devuelve el valor de x y se realiza el operador
//postincremento y postdecremento
let x = 1;

x= x+1;
x += 1;
x++;

console.log("valor de x sumado:", x);

x = x-1;
x -=1;
x--;

console.log("valor de x decrem:", x);

//Preincremento (++x)
//incrementa el valor y
//devuelve el valor

x=1;

console.log(x);
console.log(`valor x++: ${x++}`);
console.log(x);
console.log(`valor ++x ${++x}`);

let y= 0;
x = 0;
y = x++;

console.log(`valor x: ${x}`);
console.log(`valor y ${y}`);

let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
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
y = x++; //y = 10, x = 11

x=30;
y = ++x; //y=31, x=31

/**
 * Aritméticos
 */
//suma;
x= 1+34+y;
//resta
x = 23-45-y;
//división
x = 56/3;
//multipl
x = 3 * 50;
//residuo de división
x= 8%2;
//operador potencia
x= 8**2;

//operador de asignación =
x = 2;
x+= 10;
x -= 5;
x *=3;
x /=2;
x %= 2;
x **=3;