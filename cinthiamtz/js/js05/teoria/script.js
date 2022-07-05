console.log("Teoria de la sesion JS05, operadcores");

//incremento en una unidad
let x=1
//incremento en una undiad
x=x+1
//El operador posincremento++, devuelve el valor, despues incrementa en una unidad
//La variable 
//primero devuelve el valor de x
//Luego incrementa n 1 el valor de x
x++//3
console.log("valor de x con el operador de incremento" + x);//Valor imprimido es 3

//Decremento en una unidad
x=x-1
//El operado -- devuelve el valor, despues incrementa en una unidad
x--;
console.log("El valor de x con operador decremento" + x);//1

//El operador preincremento 
//Primero incrementa el valor de una undiad
//luego devieleve  
x=1;
console.log(`Valor de x++ : ${x++} `);//x=1; Primero muestra el valor 1
x=1;
console.log(`Valor de x-- : ${++x} `);//Primero incrementa x+1=2 despues muestra el valor  que es 2

let y=0;
x=0;
y=++x;
console.log(`Valor de x : ${x} `);//1
console.log(`Valor de y : ${y} `);//2

y=0;
x=0;
y=x++;
console.log(`Valor de x : ${x} `);//1
console.log(`Valor de y : ${y} `);//0

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
let i;
let j;
for (i=0; i<3 ; j=i++)console.log("con i++  "+ i);//0,1,2
console.log("Finalización de j" + j);//2
for (i=0; i<3 ; j=++i)console.log("con i--  "+ i);//0,1,2
console.log("Finalización de j" + j);//3


//pre incremento 
x=1;
y=++x; //y=2
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post
x=1;
y=x++;//y=1 , x=2
//es lo mismo que
x=1;
y=x;
x=x+1;
//
y=10;
y=x++;//y=10 

//************************* */
//pos-decremetno , pre decremento
x=-10;
y=--x; //y=-11, x=-11
console.log(y,x);
x=80
y=x--; // Y=80, x=79
console.log(y,x);

