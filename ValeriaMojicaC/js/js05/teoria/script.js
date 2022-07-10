console.log("Sesion JS05");

//Operadores de icremento y decremento
let x = 1;
//Incremento en una unidad
x = x + 1;
//Operador ++ devuelve el valor y despues incrementa en unidad
//Primero devuelve el valor de X
//Luego incrementa en 1 el valor de X
x++;
console.log(`Valor de x++ = ${x}`);
//Decremento en una unidad
x = x - 1;
//Operador -- devuelve el valor y despues decrementa en una unidad
x--;
console.log(`Valor de x-- = ${x}`);

//El operador preincremento ++ 
//Incrementa la variable en una unidad
//Luego devuelve el valor de la variable
x = 1;
console.log(`Valor de x++ ${x++}`);
console.log(`Valor de ++x ${++x}`);

let y = 0;
x = 0;
y = ++x;

console.log(`Valor de x ${x}`);
console.log(`Valor de y ${y}`);

y = 0;
x = 0;
y = x++;

console.log(`Valor de x ${x}`);
console.log(`Valor de y ${y}`);

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

let j;
for (i = 0; i < 3; j = i++) console.log(`Con i++ ${i}`);
console.log(`Finalizacion de j; ${j}`);
for (i = 0; i < 3; j = ++i) console.log(`Con i++ ${i}`);
console.log(`Finalizacion de j; ${j}`);

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

x = 5;
y = ++x; // y=6   x=6
console.log(x, y);
x = 5;
y = x++; // y=6   x=5
console.log(x, y);

x = 80;
y = ++x; // y=81   x=81
console.log(x, y);
x = -11;
y = x++; // y=-11   x=-10
console.log(x, y);

x = 5;
y = --x; // y=4   x=4
console.log(x, y);
x = 5;
y = x--; // y=5   x=4
console.log(x, y);

x = 80;
y = --x; // y=79   x=79
console.log(x, y);
x = -11;
y = x--; // y=-11   x=-12
console.log(x, y);

//Operadores Aritmeticos
//Operador Suma
x = 1 + 34 + y;

//Operador Resta
x = 23 - 45 - y;

//Operador Division
x = 12 / 6 

//Operador Multiplicacion 
x = 2 * 4;

//Operador Residuo
x = 8 % 2;

//Operador Potencia 
x = 2 ** 3;

//Operador de asignacion
x = 2;
x += 10; //x = x + 10;
x -= 3; //x = x -5
x *= 3; //x = x * 3
x /= 2; //x = x / 2
x %= 4; //x = x % 4
x **= 3;//x = x ** 3

//Operadores de igualdad (comparacion)
//operador igual que (solo compara el valor, no el tipo)
x = 1;
y = 2;
console.log(`x == y: ${x == y}`); //false
y = 1;
console.log(`x == y: ${x == y}`); //true
y = "1";
console.log(`x == "y": ${x == y}`); //true

//Operador diferente que !=
x = 1;
y = "2";
console.log(`x != "y": ${x != y}`); //true
console.log(`x++ != "y": ${x++ != y}`); //true
console.log(`x != "y": ${x != y}`); //false
console.log(`++x != "y": ${++x != y}`); //true

//Operador extrictamente igual que ===
//Compara el valor y tipo de dato
x = 1;
y = "1";
console.log(`x === "y": ${x === y}`); //false

//Operador extrictamente diferente !==
//Compara el valor y tipo de dato
console.log(`x !== "y": ${x !== y}`); //true

//Operadores lógicos &&  ||  !
//Operador &&
//False, null, NaN, empty string o Undefine son considerados false
true && true  //true  
true && false //false 

//Operadores de corto-circuito
//Si el primer operador es true, el resultado es el valor del segundo
console.log(`true && NaN ${true && NaN}`); //NaN
//si el primer operador es false, el resultado sera el primer operador
console.log(`false && NaN ${false && NaN}`); //False
console.log(`true && "Hols Estrella" ${true && 'Hola Estrella'}`);//Hola estrella
console.log(`null && "Hola Moi" ${null  && "Hola Moi"}`); //null
console.log(`"a" && "Hola Moi" ${"a"  && "Hola Moi"}`); //Hola Moi
console.log(`"" && "Hola Moi" ${""  && "Hola Maga"}`); //string vacio
console.log(`" " && "Hola Moi" ${" "  && "Hola Maga"}`); //Hola Maga

//Operador lógico or ||
//False, null, NaN, empty string o Undefine son considerados false
console.log(true || false); //true
//Si el primer operador es true, el resultado es el primer operador
//Si el primer operador es false, el resultado es el segundo operador
console.log(`true || NaN ${true || NaN}`); //true
console.log(`false || NaN ${false || NaN}`); //NaN
console.log(`true || "Hols Estrella" ${true || 'Hola Estrella'}`);//true
console.log(`null || "Hola Moi" ${null  || "Hola Moi"}`); //Hola Moi
console.log(`"a" || "Hola Moi" ${"a"  || "Hola Moi"}`); //a
console.log(`"" || "Hola Moi" ${""  || "Hola Maga"}`); //Hola Maga
console.log(`" " || "Hola Moi" ${" "  || "Hola Maga"}`); //

//Operador lógico not !
let nuevoValor = !true;
nuevoValor = !false
//False, null, NaN, empty string o Undefine son considerados false
console.log(`!NaN ${!NaN}`); //true
console.log(`!true ${!true}`); //false
console.log(`!"Hols Estrella" ${!'Hola Estrella'}`);//false
console.log(`!false" ${!false}`); //true
console.log(`!"a" ${!"a"}`); //false
console.log(`!"" ${!""}`); //true
console.log(`!" " ${!" "}`); //false

//Operador lógico binario ?? Nullish Coalescing
//Operador lógico que retorna el operador de la derecha
//si el operador de la izquierda es null o undefined. De lo contrario retorna 
//el valor de la izquierda
let asistencia;
console.log(`operador ?? Nulllish Coalescing`);
console.log(`asiatencia = nul ?? true: ${asistencia = null ?? true}`); //true
console.log(`asiatencia = nul ?? true: ${asistencia = 1 ?? true}`); //1
x = undefined;
console.log(`Asignacion de asiatencia = x: ${asistencia = x ?? "Asiste"}`);
console.log(`Asignacion de asiatencia = x: ${asistencia = "" ?? "Asiste"}`);
console.log(`typeOf (undefined): ${typeof(undefined)}`); //undefined
console.log(`typeOf (null): ${typeof(null)}`); //object (erro de javascript)
//Los datos se guardan en memoria como 1 y 0,
//Los bits que indican el tipo de dato, para objetos es = 00
//Para string es = 
//Para numericos =
//Para null, todos sus bits (1 y 0) son 000000... 000 (coincice con el de objetos)
