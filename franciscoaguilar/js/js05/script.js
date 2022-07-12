console.log("Sesión JS05");
console.log("*********************************");
// Operadores de incremento o decremento 
let x = 1;

// Incremento en una unidad
x = x + 1;

//El operador ++ , devuelve el valor después incrementa en una unidad la variable
//primero devuelve el valor de x, luego incrementa en 1 el valor de x
console.log("post incremento: ");
x++;//3
console.log("Valor de x: " + x);// 3

//Decremento en una unidad
x = x - 1; //2

//El operador --  devuelve el valor después decrementa en una unidad
console.log("post decremento: ");
x--; // 1

console.log("Valor de x con  -- " + x); //1

// El operador preincremento
// incrementa la variable en una unidad 
// luego devuelve el valor

x = 1;

console.log(`Valor x++ :  ${x++}`); // x=1 después x = x + 1; -> x = 2

console.log(`Valor ++x :  ${++x}`); // x = x + 1 --> x = 3;


console.log("*********************************");
console.log("pre incremento: ");
let y=0;
x=0;
y = ++x;// primero incrementa ++x y después devuelve el valor por lo tanto: y = 1
console.log(`Valor x :  ${x}`); // 1
console.log(`Valor y :  ${y}`); // 1
console.log("*********************************");
console.log("post incremento: ");
y=0;
x=0;
y = x++; // primero devuelve el valor de x (x=0;) por lo que y = , después x incrementa x = 1
console.log(`Valor x :  ${x}`); // 1
console.log(`Valor y :  ${y}`); // 0

//Otro ejercicio de incrementos y decrementos
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


//Otro ejercicio de incrementos y decrementos con For
console.log("*********************************");

for(i = 0; i < 3; j=i++) console.log("con i++ : " + i);// 0,1,2
console.log("Finalización de j: " + j); //2 porque i primero entrega el valor a j y después aumenta, y en el caso del ciclo se evalúa i en lugar de j, por lo que para que j sea = 3 sería en un 4to ciclo es como si j tuviera un delay del valor de i
for(i = 0; i < 3; j=++i) console.log("con ++i : " + i);// 0,1,2
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


//POST DECREMENTO Y PRE DECREMENTO 
console.log("********************************");
// pre-decremento
x=5;
y=--x; // y = 4, x = 4
console.log("PRE-DECREMENTO");
console.log(y);
console.log(x);

// post-decremento
x=5;
y=x--; // y = 5, x = 4
console.log("POST-DECREMENTO");
console.log(y);
console.log(x);

/************************** *************************/
// Operadores aritméticos

//SUMA

x = 1 + 34 + y;

//RESTA

x = 23 - 45 - y;

//DIVISIÓN

x = 12/6; // 2

//MULTIPLICACIÓN

x = 2*4; // 8

//RESIDUO

x = 8%2; // 0

//POTENCIA

x = 2**3;//2 a la potencia 3 --> 8



/************************************************** */
//OPERADORES DE ASIGNACIÓN 

x = 2;

x += 10 //x = x +10

x -= 5 //x = x - 5

x *= 3 //x = x * 3

x /= 2 //x = x / 2

x %= 4 //x = x % 4

x **= 3 //x = x ** 3 
