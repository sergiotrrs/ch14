console.log("Se inicia el programa");

//Operadores de incremento y decremento
let x = 1;
//Incremento en una unidad
x = x + 1;//2
//El operador ++, devuelve el valor despues incremento en una unidad
x++;//3
console.log("Valor de x con ++: " + x); //3
//Decremento en una unidad
x = x - 1;//2
// El operador -- realiza el decremento en una unidad
//Primero devuelv el valor de x y luego incrementa en uno el valor de x
x--;//1
console.log("Valor de x con -- : " + x);//1

//El operador preincremento incrementa la variable en una unidad luego devuelve el valor
++x;//2
x = 1;
console.log(`Valor de x++ : ${x++}`);//2
console.log(`Valor de x++ : ${++x}`);//3

let y = 0;
x = 0;
y = ++x
console.log(`Valor de x : ${x}`);//
console.log(`Valor de y : ${y}`);//

y = 0;
x = 0;
y = x++;
console.log(`Valor de x : ${x}`);//
console.log(`Valor de y : ${y}`);//

//Pre incremento
x = 1;
console.log("pre-incrmeneto");
console.log(x);
console.log(++x);
console.log(x);
//Post incrmeento
console.log("post-incremeneto");
x = 1;
console.log(x);
console.log(x++);
console.log(x);

console.log("for");
let i;
let j;
for (i = 0; i < 3; j = i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i < 3; j = ++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

// post-decrementoe y pre-decremento
x = 5;
y = --x;//4 4
console.log(y, x);
x = 5;
y = x--;//5 4
console.log(y, x);

//Operadores aritmeticos
//suma
x = 1 + 34 + y;
//resta
x = 23 - 45 - y
//division
x = 12 / 6;//2
//multiplicacion
x = 2 * 4;//8
//operador de residuo
x = 8 % 2; //residuo 0
//operador de potencia Math
x = 2 ** 3;//8

//operadores de asignacion
x = 2;
x += 10; // x = x + 10
x -= 5; // x = x - 5
x *= 3; // x = x * 3
x /= 2; // x = x/2
x %= 4; // x = x % 4
x **= 3; // x = x**3