console.log("Teoria de la sesion js05, operadores"); 

//Operadores de incremento 
let x = 1; 
//incremento de una unidad 
x = x + 1; 
console.log("Valor de x " + x); //3

//Decremento en una unidad 

//el operador ++devuleve el valor despues incrementa en una unidad
x++; //2
console.log("Valor de x con ++ : " + x ); //3
//Decremento en una unidad 
x = x - 1; //2 
//El operador -- devuleve el valor despues   decremento de una un9odad 
x--; 
console.log("valor de x con -- : " + x ); //1 
//El operador preincremento incrementa la variable en una unidad y devuleve el valor el valor de la varible despues incrementa 
//en una unidad la variable. 
++x; 
console.log(`Valor de x++ :  + ${x++}`); 
console.log(`valor de ++x :  + ${++x}`); 

let y = 0; 
x = 0; 
y = ++x; 
console.log(`Valor de x :  + ${x}`); //1
console.log(`Valor de y :  + ${x}`); //1 

y = 0; 
x = 0; 
y = x++; 

console.log(`Valor de x :  + ${x}`); //1
console.log(`Valor de y :  + ${y}`); //0 

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


for (i =0; i <3; i++)console.log("con i++" + i ) // 0 , 1, 2
console.log("Finalizacion de i: " + i);
for (i =0; i <3; ++i)console.log("con ++i" + i ) // 1, 2

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

x = 10; 
y =x++; //y = 10; x = 11

x = 30
y = ++x; // y = 31, x = 31 

//post-decremento , pre-decremento
x =5; 
y = --x; //y=4 x=4

x=5 //y=5 x=4
y = x--; 

x =-10; 
y = --x; //y= -11 y=-11 
console.log(y, x); 
y = x--;  //y= 80 x=79
console.log(y, x);

/**
 * operadores aritmeticos
 * operador de suma 
 */ 
//operador de suma 
x = 1 + 34 + y; 
//operador de resta 
x = 23 -45 -y; 
//perador de division
x = 12/6; //2
//opersador de multiplicacion 
x = 2 * 4; //8
//operador ed residuo 
x = 8%2; //residuo 0
//operador de potencia 
x = 2**3; //8
 
//Operador de asignacion
x = 2; 
//x = x + 10 
x += 10; //x = x + 10
x -= 5; //x = x -5
x *= 3; //x = x * 3; 
x /= 2; // x = x/2; 
x %=4; //x = x%4; 
x **= 3 // x = x**3;
