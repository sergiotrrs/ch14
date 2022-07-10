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

let i;
let j;
//for (i =0; i <3; i++)console.log("con i++" + i ) // 0 , 1, 2
//console.log("Finalizacion de i: " + i);
//for (i =0; i <3; ++i)console.log("con ++i" + i ) // 1, 2


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

/* 
Operadores de igualdad (comparacion)
*/ 

//Operador igual que 
x=1;
y =2; 
x == y;  // false 

y = 1; 
x == y; //true 
x = 1;
y = "1"; 
x == y; //true compara del valor, el tipo de string se convierte a numerico
console.log(" x == 'y' " + (x == y)); 

//Operador diferente que != 
x =1; 
y = 2; 
console.log("x != ('y'" + (x != y)); //true 
//console.log(" x++ != ('y' " + ); 

//Operador estrictamente igual === compara el valor y tipo de dato
x = 1; 
y = '1'; 
console.log(" x === 'y' " + (x===y)); //false  

//Operador estrictamente diferenete que != compara el valor y tipo de dato
console.log("x !== 'y' " + (x!==y)); //true; 

//operadores logicos &&, ||, ! 
true && true //true 
true && false // false, si uno de loos valores es false, el resultado sera false
//False, null, NaN, 0, empty string o undefined son considerados con valor false 

//SI el primero peraor es true, el resultado es el valor del segundo operador
//Si el primer operador es false, el resultado sera el primer operador
//Operaores de corto circuito
console.log(" true && NaN = " + (true && NaN)); //NaN 
console.log(" false && NaN = " + (false && NaN)); //false 
console.log(" true  && 'Hola estrella' = " + (true && 'Hola estrella'));//Hola Estrella
console.log(" null  && 'Hola Moy' = " + (null && 'Hola Moi')); //null
console.log(" 'a' && 'Hola Moi' = " + ('a' && 'Hola Moi')); //hola Moi
console.log(" '' && 'Hola Maga' = " + ('' && 'Hola Maga')); //string vacio 

//Operador logico || or 
true || false // true 
//False, null, NaN, 0, empty string o undefined son considerados con valor false 
//Si el primer operador es true, el resultad es el primero operador. 
//Si el primero operador es false, el resultado es el segundo operador 
console.log("\n Operadorf or")
console.log(" true || NaN = " + (true || NaN)); // true
console.log(" false || NaN = " + (false || NaN)); //NaN 
console.log(" true  || 'Hola estrella' = " + (true || 'Hola estrella')); // true
console.log(" null  || 'Hola Moy' = " + (null || 'Hola Moi')); //Hola Moi
console.log(" 'a' ||'Hola Moi' = " + ('a' || 'Hola Moi')); //'a' string con algo adentro es true
console.log(" '' || 'Hola Maga' = " + ('' || 'Hola Maga')); //Hola MAga //Un string vacio es false 

//Operaador logico not ! 
let nuevoValor = !true//false 
 nuevoValor = !false //true 
//False, null, NaN, 0, empty string o undefined son considerados con valor false  
//La respuesta es lo opuesto
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador Logico binario Nullish Coalescing 
//Operador Logico que retorna el operador de la derecha, si el operador de la 
//izquierda es null  o undefined.De lo contrario retorna el operador de izquierda 
//operadorIzquierda ?? opDereccha
////Si la izquierda es null o undefined, se retorna la derecha
//Si la izquierda NO ES null o undefined, se retorna la izquierda

let asistencia;
console.log("\n operador ?? Nullish ") 
console.log("\n asistencia = null ?? true : " + (asistencia = null ?? true)) // true  
console.log("\n asistencia = 1 ?? true : " + (asistencia = 1 ?? true)) //1 
x = undefined;
console.log("Asignacion de asistencia = x: " +(asistencia = x ?? 'Asiste')) // "Asiste"
console.log("Asignacion de asistencia = x: " +(asistencia = '' ?? 'Asiste')) // ''
console.log("typeOf(undefined) " + typeof(undefined)); //undefined
console.log("typeOf(null) " + typeof(null)); //Object
//Los datos se guardan em memoria como 1 y 0 
//Los bits que indican el tipo de dato para objetos es 00 






