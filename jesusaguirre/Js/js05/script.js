console.log("hola jesus /n teoria de la sesion js 05,operadores");

//operadores de incremento y decremento 
let x = 1;
//incremento en una unidad
x= x+1;
//el operador ++,devuelve el valor, despues realiza el incremento
x++;
console.log("valor de x con ++"+ x );
x=x-1;
//el operador --,devuelve el valor, despues realiza el decremento en una unidad
x--;
console.log("valor de x con --"+ x );

//el operador preincremento ++x
//prmero incrementa la variable en una unidad 
//y devuelve el valor
x=1;
console.log(`valor de x++:${x++}`);
console.log(`valor de ++x:${++x}`);
let y=0;
x=0;
y = ++x;
console.log(`valor de x++:${x++}`);//1
console.log(`valor de ++x:${++x}`);//1
y=0;
x=0;
y = x++;
console.log(`valor de x++:${x++}`);//1
console.log(`valor de ++x:${++x}`);//0
//sssssssssssssssssssssssssssssssss
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
//44444444444444444444444444
let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3
//postdecremento y predecremento
x=5;
y = --x; //y= 4, x=4

x=5;
y = x--; //y= 5, x=4
/**
 * operadores aritmeticos
 */


