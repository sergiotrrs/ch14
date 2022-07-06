console.log("Se inicia el programa");

//Operadores de incremento y decremento
let x = 1;
//Incremento en una unidad
x = x + 1;//2
//El operador ++, devuelve el valor despues incremento en una unidad
x++;//3
console.log("Valor de x con ++: " + x); //3
//Decremento en una unidad
x = x - 1;//2
// El operador -- realiza el decremento en una unidad
//Primero devuelv el valor de x y luego incrementa en uno el valor de x
x--;//1
console.log("Valor de x con -- : " + x);//1

//El operador preincremento incrementa la variable en una unidad luego devuelve el valor
++x;//2
x = 1;
console.log(`Valor de x++ : ${x++}`);//2
console.log(`Valor de x++ : ${++x}`);//3

let y = 0;
x = 0;
y = ++x
console.log(`Valor de x : ${x}`);//
console.log(`Valor de y : ${y}`);//

y = 0;
x = 0;
y = x++;
console.log(`Valor de x : ${x}`);//
console.log(`Valor de y : ${y}`);//

//Pre incremento
x = 1;
console.log("pre-incrmeneto");
console.log(x);
console.log(++x);
console.log(x);
//Post incrmeento
console.log("post-incremeneto");
x = 1;
console.log(x);
console.log(x++);
console.log(x);

console.log("for");
let i;
let j;
for (i = 0; i < 3; j = i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i < 3; j = ++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

// post-decrementoe y pre-decremento
x = 5;
y = --x;//4 4
console.log(y, x);
x = 5;
y = x--;//5 4
console.log(y, x);

//Operadores aritmeticos
//suma
x = 1 + 34 + y;
//resta
x = 23 - 45 - y
//division
x = 12 / 6;//2
//multiplicacion
x = 2 * 4;//8
//operador de residuo
x = 8 % 2; //residuo 0
//operador de potencia Math
x = 2 ** 3;//8

//operadores de asignacion
x = 2;
x += 10; // x = x + 10
x -= 5; // x = x - 5
x *= 3; // x = x * 3
x /= 2; // x = x/2
x %= 4; // x = x % 4
x **= 3; // x = x**3

//true, compara el valor, el tipo string se convierte en numerico
console.log("x ==`y`" + (x == y));
//operador difrente que !=

x = 1;
y = `2`;
console.log("x != `y`" + (x != y)); // true 1 != `2`
console.log("x++ != `y`" + (x++ != y)); // true 1 != `2` => x=2
console.log("x != `y`" + (x != y)); // false 2 != `2`
console.log("++x != `y`" + (++x != y)); // 3 != `2` => true

//operador estrictamente igual
x = 1;
y = `1`;
console.log(" x === `y` " + (x === y));//false
//operador estrictamente diferente que !== compara el valor y tipo de dato
console.log("x !== `y`" + (x !== y));//true

//operadores logicos &&, ||, !
true && true // true
true && flase // si uno de los valores es false el resultado sera falso
//Si el primer operador es true, el resultado es el valor del segundo operador.
//operadores de corto circuito
console.log("true && NaN" + (true && NaN));//NaN
console.log("true && NaN" + (false && NaN));//false
console.log("true && `Hola`" + (true && NaN));//Hola
console.log("null && `Hola`" + (true && NaN));//Null
console.log("`a` && `Hola`" + (false && NaN));//Hola
console.log("`` && `Hola`" + (true && NaN));//`` String vacio

//operador logico or ||
true || false // true
//false, null, NaN, 0, empty string o undefined son considerados von valor false.
//Si el primer operador es true ek resultado es el primer operador
//Si el primer operador es false, el resultado es el segundo operador.
console.log("\n Operador ||");
console.log("true || NaN" + (true || NaN));//true
console.log("false || NaN" + (false || NaN));//Nan
console.log("true || `Hola`" + (true || "hola"));//true
console.log("null || `Hola`" + (null || "Hola"));//Null
console.log("`a` || `Hola`" + (`a` || `Hola`));//a
console.log("`` || `Hola`" + (`` || `Hola`));//`` hola

//Operador logico not !
let nuevoValor = !true //false
nuevoValor = !false // true
//false, null, NaN, 0, empty string o undefined son considerados von valor false.



//Operdaor logico binario ?? nullish Coalescing
//operdaor logido que retorna el valor de la derecha si el operador de la izquierda en null o undefined de lo contrario restorna el operador de la izquierda




// Los datos se guardan en memoria como 1 y 0