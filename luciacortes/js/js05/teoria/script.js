console.log("Teoría de la sesión JS05, Operadores");

//Operadores de incremeto de decremento********
let x = 1;
//incremento en una unidad
x=x +1;//aumenta uno vale 2
//El operador postincremento ++, devuelve el valor, después incrementa en una unidad
//la variable
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++;//aumenta otro vale 3
console.log("Valor de x con ++ : " + x); //imprime el 3
// Decremento en una unidad
x= x -1;// resta uno vale 2
//El operador -- realiza el decremento en una unidad
x--;// resta otro vale 1
console.log("Valor de x con -- : "+x);//imprime 1

//El operador preincremento ++ Primero incrementa el valor de la variable en una unidad
//luego devuelve el valor
++x; //vale 2

console.log("Valor de x con -- : "+x);//imprime 2

console.log(`Valor de x++ con -- : ${x++}`); //x =; x= x + 1 -> x = 2
console.log(`Valor de ++x con -- : ${++x}`); //x= x + 1 -> x = 3
//Preincremento
let y = 0;
x = 0;
y = ++x;
console.log(`Valor de x con -- : ${x}`);
console.log(`Valor de y con -- : ${y}`);
//Postincremento
y = 0;
x = 0;
y = x++;
console.log(`Valor de x con -- : ${x}`);
console.log(`Valor de y con -- : ${y}`);

x=1;
console.log("pre-incrmeneto x = 1");
console.log("x " +x);
console.log(`++x ${++x}`);
console.log("x "+ x);
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log("post-incrmeneto x = 1");
console.log("x " +x);
console.log(`x++ ${x++}`);
console.log("x "+ x);

//pre incremento 
x=1;
y=++x;
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post incremento
x=1;
y=x++;// aquí devuelve el valor de x antes del incremento
//es lo mismo que
x=1;
y=x;
x=x+1;


let i;

for (i = 0; i<3 ; i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de i: " + i); //2

for (i = 0; i<3 ; ++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de i: " + i); //3

i;
let j;
for (i= 0; i<3 ;j= i++) console.log("con i++ " +i); // 0, 1, 2
console.log("Finalizacion de j: "+j);
for (i= 0; i<3 ;j= ++i) console.log("con ++i " +i); // 0, 1, 2
console.log("Finalizacion de j: "+j);

//*************************** */
//post-decremento , pre decremento

x=-10
y= --x; //y = 4, x = 4
console.log(y, x);
x=80
y= x--;// y = 5, x = 4
console.log(y, x);
/**
 * Operadores aritméticos
 */
//operador de suma
x= 1 + 34 + y;
//operador de resta
x= 23 - 45 - y;
//operador de división
x=12 / 6;
//operador de multiplicación
x=2 * 4;
//operador de residuo
x=8 % 2; //residuo 0
//operador de potencia
x=2**3 //resultado 8 número y el de despues de astericos el número al que o quiero elevar.
/**
 * Operadores de asignación
 */
x= 2;
// x = x + 10; esto es lo mismo que
x += 10//se puede con cualquier operador
x -= 5; //x = x -5
x *= 3;// x = x * 3
x /= 2; //x = x / 2
x %= 4;// x = x % 4
x **= 3;// x = x ** 3

