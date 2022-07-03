console.log("Prueba de conexión, sesión JS05");


//Operadores de incremento y decremento +++++++++++++++++++++++++++++++++++++++++++++++

let x=1;
//incremento en una unidad
x = x + 1; //2
//El operador psot-incremento devuelve el valor y realiza el incremento de una unidad a la variable

x ++; //3
console.log("El valor de x es = "+ x);

// Decremento de una unidad
x = x - 1; //2
//El operador, devuelve el valor y realiza el decremento de una unidad a la variable
x--; //1
console.log("Valor de x con -- es = " + x); //1


//El operador pre-incremento 
//Primero incrementa la variable de una unidad
//Luego devuelve el valor
++x; //2
//primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
console.log(`Valor de x++ : ${x++}` ); //Imprime 2 y luego aumenta 1
console.log(`Valor de ++x : ${++x}` ); // Imprime 4

let y=0;
x=0
y = ++x;
console.log(`valor de x : ${x}` );
console.log(`valor de y : ${y}`);

y=0;
x=0;
y= x++;
console.log(`valor de x : ${x}`);
console.log(`valor de y : ${y}`);

for(i = 0; i< 3 ; i++) console.log("Con  i ++: " +i); //0, 1, 2
for(i = 0; i< 3 ; ++i) console.log("Con ++i: " + i); 


