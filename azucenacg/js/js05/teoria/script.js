console.log("Teoria de la sesión JS05, operadores");

// Operadores de incremento de decremento**

let x=1;

// Incremento en una unidad
x=x+1;//2

// El operador postincremento ++ 
//devuelve el valor
//despues realiza incremento en una unidad
x++; //x=2 --> x=3

console.log("Valor de x "+ x);//3

// Decremento en una unidad

x=x-1; //2

// El operador -- 
//devuelve el valor
//despues realiza decremento en una unidad

x--;// x=2 ---> x=1
console.log("valor de x con -- "+x);//1

//El operador preincremento 
//primero incrementa la variable en una unidad
//luego devuelve el valor

x=1;

console.log(`Valor de x++ :  ${x++}`); //imprime x=1
//pero entra a la otra instrucción como x=2

console.log(`Valor de ++x :  ${++x}`);//primero le suma 1
//x=3 y eso es lo que se imprime 
//el segundo paso de esto sería entregar el valor 
//que igual es x=3
//la diferencia es en x++

//EN X++ Y EN ++X SIEMPRE HAY 2 PASOS pero cuando
//se manda a imprimir  SE IMPRIME EL PRIMER PASO

y=0;
x=0;
y=x++;

console.log("valor de x: "+ x); //x=1
console.log("valor de y: "+ y); //y=0 
//y=0 porque en x++ primero agarra el valor de x
//y hasta despues le suma 1 unidad


x=1;
console.log("pre-incrmeneto");
console.log(x);//1
console.log(++x);//se suma +1, se imprime y luego se entrega
//se entredga como 2
console.log(x);//2

//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x);//1
console.log(x++); //x=1 
//primero entrega el valor que es x=1, se imprime
//luego entrega +1 o sea x=2

console.log(x); //2

let i;
let j;
for (i=0; i<3; j=i++) console.log("con i ++ "+i);
console.log("finalización de j: "+j);

for (i=0; i<3;++i) console.log("con ++i "+i);
console.log("finalización de j: "+j);

/*
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
x=x+1;*/


//post decremento y pre decremento
x=-10
y=--x;//y=-11 x=-11
console.log(y,x);

x=80
y=x--;//y=80 x=79
console.log(y,x);

//operador de residuo
x=8%2; //residuo es 0 

//operador de potencia 
x=2**3; //2 a la 3 es x=8

//operador de asignacion 
x+=10; // x= x+10 
x-=5; // x=x-5
x*=3 // x=x*3
x/=2 // x=x/2
x%=4 //x=x%4
x**=3 // x= x**3