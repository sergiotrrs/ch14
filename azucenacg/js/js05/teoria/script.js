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


// Operador igual que == compara el valor del dato
x=1;
y=2;
x==y; //false
y=1;
x==y; //true
x=1;
y="1";

//true compara el VALOR, el tipo string se convierte a
//numérico
console.log("x == y " + (x==y));

//operador diferente que !=
x=1;
y='2';
console.log("x != y "+ (x !=y));//true
console.log("x++ != y "+ (x++ !=y));//true
console.log("x != y "+ (x !=y));//false
console.log("++x != y "+ (++x !=y));//true

//Operador estrctamente igual === que comara el valor 
//y tipo de dato
x=1;
y='1';
console.log("x === y " + (x===y)); //false

//operador estrictamente diferente que !===
//compara el valor y tipo de dato
console.log("x !== y " + (x !==y)); //true

//Operadores lógicos &&, || , !
true&&true //true
true&&false //false
//false, null, NaN, 0, empty string o undefined son 
//considerados con valor false 

//si el primer operador es true, el rsultado 
//es el valor del segundo operador

//si el primer operador es false, el resultado será false

//operadores corto circuito

console.log(" false && NaN = " + (false && NaN)); //false
console.log(" true && 'hola estrella' = " + (true && 'hola estrella')); //hola estrella
console.log(" true && NaN = " + (true && NaN)); //NaN
console.log(" null && 'hola moi' = " + (null && 'hola moi')); //null
console.log(" 'a' && 'hola moi' = " + ('a' && 'hola moi')); //hola moi
console.log(" '' && 'hola maga' = " + ('' && 'hola maga')); //aparece un empty space
console.log(" ' ' && 'hola maga' = " + (' ' && 'hola maga')); //el espacio si es un valor, por eso es true
// el espacio es diferente al empty space

//Operador lógico or ||
true || false //true

//false, null, NaN, 0, empty string o undefined son considerados con valor false
//si el primer operador es true, el resultado es el primer operador
//si el primer operador es false, el resulado es el segundo operador

console.log("\n operador or ||")
console.log(" true || NaN = " + (true || NaN)); //true
console.log(" false || NaN = " + (false || NaN)); //NaN
console.log(" true || 'hola estrella' = " + (true || 'hola estrella')); //true
console.log(" null || 'hola moi' = " + (null || 'hola moi')); //hola moi
console.log(" 'a' || 'hola moi' = " + ('a' || 'hola moi')); //'a'
console.log(" '' || 'hola maga' = " + ('' || 'hola maga')); //"hola maga"
console.log(" ' ' || 'hola maga' = " + (' ' || 'hola maga')); //el espacio si es un valor, por eso el resultado es un espacio

//Operador lógico not !
let nuevoValor = !true //false
nuevoValor = !false //true

//false, null, NaN, 0, empty string o undefined son considerados con valor false
//aqui no hay corto circuito

console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true


//operador lógico binario ?? Nullish Coalecing
//Si la izquierda es null o undefined, se retorna la derecha
//Si la izquierda NO ES null o undefined, se retorna la izquierda

let asistencia=null??true //true
console.log("\n operador ?? nullish coalecing");
console.log(" asistencia = null ?? true: " + (asistencia= null ?? true)); //true
console.log(" asistencia = 1 ?? true: " + (asistencia= 1 ?? true)); //1

x=undefined;
console.log("asignacion de asitencia = x : "+ (asistencia= x ?? 'asistencia'));//asistencia
console.log("asignacion de asitencia = x : "+ (asistencia= '' ?? 'asistencia'));//asistencia
console.log("typeof(undefined) "+ typeof(undefined));//undefined
console.log("typeof(null) "+ typeof(null));//object 
//typeof null es un error de javascript, 













