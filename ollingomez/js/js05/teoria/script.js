console.log("Teoria de la sesión JS05, opredores");

//Operadores de incremento de decremento++++++++++++
let x=1;
//incremento en una unidad
x=x+1;

//El operado ++, devuelve el valor, después incremento en una unidad
//la variable
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++;
console.log("valor de x con ++:" +x );//3

//Decremento en una unidad
x=x-1;
//El operador --, devuelve el valor, después decremento en una unidad

x--;
console.log("valor de x con --: ");//1

//El operador preincremento incrementa la variable en una unidad y devuelve el
//Primero devuelve el valor x
//Luego incremeta en 1 el valor x
x=1;
console.log(`valor de x++ : ${x++}`); //x=1; x=x+1->X=2
console.log(`valor de x++ : ${++x}`);//x=x+1->x=3

let y=0;
x=0;
y=++x;
console.log(`valor de x++ : ${x}`); //1
console.log(`valor de x++ : ${y}`);//1

y=0;
x=0;
y=x++;
console.log(`valor de x++ : ${x}`); //1
console.log(`valor de x++ : ${y}`);//0

x=1;
console.log("pre-incrmeneto");
console.log(x);//1
console.log(++x);//2
console.log(x);//2
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x);//1
console.log(x++);//1
console.log(x);//2

let i;
for(i=0; i<3; i++) console.log("con i++ " + i);//0,1,2
console.log("Finalización de i: "+i);//3
for(i=0; i<3; ++i) console.log("con i++ " + i);//1,2
console.log("Finalización de i: "+i);//3

i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

//pre incremento
x=1;
y=++x;//y=2,x=2
x=1
x=x+1;
y=x;

//pos
x=1;
y=x++; //y=1, x=2
//es lo mismo que
x=1;
y=x;
x=x+1;
//---------------------
y=10;
y=x++;//y=10, x=11

x=30;
y=++x;//y=31, x=31
//*****************************/

//post decremento y pre decremeto
x=5
y=--x; //y=4, x=4

x=5;
y=x--;//y=5, x=4


//post decremento y pre decremeto
x=-10
y=--x; //y=-11, x=-11
console.log(y,x);
x=80;
y=x--;//y=80, x=79
console.log(y,x)