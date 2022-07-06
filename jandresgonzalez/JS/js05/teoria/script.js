/**
 * Sesión de operadores
 */

//console.log("Link");
//Incremento y decremento

//Se lee de izquierda a derecha: primero
//devuelve el valor de x y se realiza el operador
//postincremento y postdecremento
let x = 1;

x= x+1;
x += 1;
x++;

console.log("valor de x sumado:", x);

x = x-1;
x -=1;
x--;

console.log("valor de x decrem:", x);

//Preincremento (++x)
//incrementa el valor y
//devuelve el valor

x=1;

console.log(x);
console.log(`valor x++: ${x++}`);
console.log(x);
console.log(`valor ++x ${++x}`);

let y= 0;
x = 0;
y = x++;

console.log(`valor x: ${x}`);
console.log(`valor y ${y}`);

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


x=10;
y = x++; //y = 10, x = 11

x=30;
y = ++x; //y=31, x=31

/**
 * Aritméticos
 */
//suma;
x= 1+34+y;
//resta
x = 23-45-y;
//división
x = 56/3;
//multipl
x = 3 * 50;
//residuo de división
x= 8%2;
//operador potencia
x= 8**2;

//operador de asignación =
x = 2;

//Aritméticoa y operación
x+= 10;
x -= 5;
x *=3;
x /=2;
x %= 2;
x **=3;

//Operadores de igualdad (comparación)

//igual que
x == 1;
y == 2;

//El operador de IGUAL QUE compara y devuelve un valor boooleano
(x == y) ? console.log("son iguales") : console.log("no son iguales");


(x != y) ? console.log((x != y)) : console.log("Jum");

//Operador ESTRICTAMENTE IGUAL QUE 
x = 1;
y = '1';

console.log("estrictamente igual (x === y)", (x === y));

(x !== y) ? console.log("Esto da ", (x !== y)) : console.log("mmm");

//Operadores lógicos || && !
true && true //true
true && false //false

//False, null, NaN, 0, empty string o undefined son false
/**
 * 
 * if (---) {
 * }
 * 
 * //false
 * */

//Si el primer operador es true, el resultado es el valor del segundo operador
//Si el primer operador es false, el resultado será el primer operador (null, false, etc...)
//(Operadores de corto circuito) AND &&
console.log((true && NaN)); //NaN
console.log((false && NaN)); //false
console.log(true && "Hola estrella"); // "Hola estrella" (TRULY)
console.log(null && true); // el primer operador es false, se regresa ese vavlor: null
console.log("'a' && 'holi, abi':", ('a' && "holi, abi"));  //"holi, abi

//Operador lógico OR ||
true || false //true
//False, null, NaN, 0, empty string o undefined son false
console.log((true || NaN)); //true
console.log((false || NaN)); //false
console.log(true || "Hola estrella"); //"Hola estrella"
console.log(null || true); // true
console.log("'a' || 'holi, abi':", ('a' || "holi, abi"));  //"Holi, abi"

//Operador lógico NOT !
let nuevoValor = !true; //false
nuevoValor = !false; //true

//False, null, NaN, 0, empty string o undefined son false (FALSY)
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true


//Nullish Coalescing Operator
//Acepta dos valores y regresa el que esté definido (i.e. que no sea null o undefined)
//Regresa el primer operador que no sea null o undefined
console.log(null ?? true);
console.log(null ?? null ?? undefined ?? 1);