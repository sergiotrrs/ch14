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


/**
 * Operadores de igualdad ( comparación )
 */
//operador igual que
x = 1 ;
y = 2;
x == y; //false
y = 1;
x == y; // true
x = 1;
y = "1";
x == y; // true
console.log("********************************");
console.log("x == y  " + (x == y));

// diferente de 
y = "2";
console.log("********************************");
console.log("x != y  " + (x != y)); //true x =1 y=2
console.log("x++ != y  " + (x++ != y)); //true  x= 1 y=2, después x = 2
console.log("x != y  " + (x != y)); // false x = 2 y = 2
console.log("++x != y  " + (++x != y)); //true x = 3 y = 2

//Extrictamente igual que === compara el valor y el tipo de dato 
x = 1;
y = "1";
console.log("********************************");
console.log(" x === 'y'  "+ (x === y)); //falso

//Extrictamente diferente !== compara el valor y el tipo de dato 

console.log("********************************");
console.log(" x !== 'y'  "+ (x !== y)); //true 

// Operadores lógicos &&

true && true // true
true && false // false si uno de los dos es false, el resultado sera false
// false, null, NaN, 0, empty string, undefined son considerados false

//Operadores de corto circuito
//Si el primer operador es false, el resultado será el primer operador
//Si el primer operador es true, el resultado es el valor del segundo valor 
console.log("********************************");
console.log(" true && NaN = " + (true && NaN));//NaN
console.log(" false && NaN = " + (false && NaN));//false
console.log(" true && 'hola' = " + (true && "HOLA"));//HOLA
console.log(" null && 'hola moi' = " + (null && "HOLA moi"));//null
console.log(" 'a' && 'hola moi' = " + ('a' && "HOLA moi"));//hola moi
console.log(" '' && 'hola moi' = " + ('' && "HOLA maga"));// empty: es un string vacío


//operador lógico or ||
true || false //true
false || true //true
true || true // true
// false, null, NaN, 0, empty string, undefined son considerados false
// Si el primer operador es true, el serusltado es el primer operador
//Siel primer operador es false, el resultado es el segundo operador
console.log("********************************");
console.log("\n Operador lógico or");
console.log(" true || NaN = " + (true || NaN));//NaN
console.log(" false || NaN = " + (false || NaN));//false
console.log(" true || 'hola' = " + (true || "HOLA"));//HOLA
console.log(" null || 'hola moi' = " + (null || "HOLA moi"));//null
console.log(" 'a' || 'hola moi' = " + ('a' || "HOLA moi"));//hola moi
console.log(" '' || 'hola moi' = " + ('' || "HOLA maga"));// empty: es un string vacío


//Operador lógico not !
let nuevoValor = !true // false
nuevoValor = !false //true 
// false, null, NaN, 0, empty string, undefined son considerados false


console.log("********************************");
console.log("\n Operador lógico not");
console.log("!NaN = " + (!NaN));//true
console.log(" !true = " + (!true));//false
console.log(" !'hola' = " + (!"HOLA"));//false
console.log(" !false = " + (!false ));//true
console.log(" !'a' = " + (!'a'));//false
console.log(" !''' = " + (!''));// true

// Operador lógico binario ?? nullish coalescing
//Operador lógico que retorna el operador de la derecha, si el operador 
// de la izquierda es null o undefined. De lo contrario, retorna el operador de la izquierda.

let asistencia;
console.log("********************************");
console.log("\n Operador lógico Nullish Coalescing");
console.log(" asistencia  = NULL ?? true: " + (asistencia  = null ?? true));//true
console.log(" asistencia  = 1 ?? true:  " + (asistencia  = 1 ?? true));//1
x = undefined;

console.log("Asignación de asistencia =x :  " + (asistencia  = x ?? "asiste"));//"Asiste"
console.log("Asignación de asistencia =x :  " + (asistencia  = "" ?? "asiste"));//""
console.log("********************************");
console.log("typeof (undefinde) "+ typeof(undefined)); //UNDEFINED
console.log("typeof (null) "+ typeof(null)); //OBJECT // DEBERÍA SER UN TIPO DE DATO NULL NO OBJECT ES UN ERROR DE JS



