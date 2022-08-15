console.log("hola jesus /n teoria de la sesion js 05,operadores");

//operadores de incremento y decremento 
let x = 1;
//incremento en una unidad
x = x + 1;
//el operador ++,devuelve el valor, despues realiza el incremento
x++;
console.log("valor de x con ++" + x);
x = x - 1;
//el operador --,devuelve el valor, despues realiza el decremento en una unidad
x--;
console.log("valor de x con --" + x);

//el operador preincremento ++x
//prmero incrementa la variable en una unidad 
//y devuelve el valor
x = 1;
console.log(`valor de x++:${x++}`);
console.log(`valor de ++x:${++x}`);
let y = 0;
x = 0;
y = ++x;
console.log(`valor de x++:${x++}`);//1
console.log(`valor de ++x:${++x}`);//1
y = 0;
x = 0;
y = x++;
console.log(`valor de x++:${x++}`);//1
console.log(`valor de ++x:${++x}`);//0
//sssssssssssssssssssssssssssssssss
x = 1;
console.log("pre-incrmeneto");
console.log(x);//1
console.log(++x);//2
console.log(x);//2
//Post incrmeento
console.log("post-incremeneto");
x = 1;
console.log(x);//1
console.log(x++);//1
console.log(x);//2
//44444444444444444444444444
let i;
let j;
for (i = 0; i < 3; j = i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i < 3; j = ++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3
//postdecremento y predecremento
x = 5;
y = --x; //y= 4, x=4

x = 5;
y = x--; //y= 5, x=4
/**
 * operadores aritmeticos
 */
x += 10; //x=x+10
x -= 10; //x=x-10
x *= 10; //x=x*10
x /= 10; //x=x/10
x %= 10; //x=x%10
x **= 10; //x=x**10
/**
 * operadores de igualdad(comparacion)
 */
//operador igual que
x = 1;
y = 2;
x == y;
y = 1;
x == 1;
x = 1;
y = "1";
//true, compara el valor , el tipo string se convierte a numerico 
console.log('x == y' + (x == y));

//operador diferente que!=
x = 1
y = '2';
x != y;

//operador estrictamente igual que === compara el valor y tipo de dato
x = 1
y = '1';
x === y;

//operador extrictamente diferente!== compara el valor y tipo de dato
x = 1
y = '1';
x !== y;
//opreradores logicos
true && true //true
true && false //false
//false, null, nan , 0, empty string o undefined son onsiderados con valor false

/**
 * si el primer operador es true, el resultado es el valor del segundo operador
 * si el primer operador es false, el resultado sera el primer operador.
 */

///operadores de corto-circuito
console.log('true && nan=' + (true && NaN));//NaN
console.log('false && nan=' + (false && NaN));//false
console.log('true && nan=' + (true && 'hola jesus'));//hola estrella
console.log('null && nan=' + (null && 'hola jesus'));//null
console.log('a && nan=' + ('a' && 'hola jesus'));//hola moi
console.log('"" && nan=' + ('' && 'hola jesus'));//""

//operador logico or ||
true || false //true
/**
 * false, null, nan, 0, empty string o undefined son considerados con valor false
 * si el primer operador es true, el resultado es el primer operador
 */
console.log('true || nan=' + (true || NaN));//true
console.log('false || nan=' + (false || NaN));//NaN
console.log('true || nan=' + (true || 'hola jesus'));//true
console.log('null || nan=' + (null || 'hola jesus'));//"hola jesus"
console.log('a || nan=' + ('a' || 'hola jesus'));//"a"
console.log('"" || nan=' + ('' || 'hola jesus'));//"hola jesus"

//operador logico not !
let nuevoValor = !true; //false
nuevoValor = !false // true
// false, null, NaN, empty string o undefined son cinsiderados con valor false
console.log('operador not');//true
console.log('!NaN' + (!NaN));//false
console.log('true' + (!true));//false
console.log('hola jesus' + (!'hola jesus'));//false
console.log('true' + (!false));//"true"
console.log('false' + (!'a'));//"false"
console.log('true' + (!''));//"true"

//operador logico binario ?? Nullish Coalescing
/**
 * operador logico que retorna el operador de la derecha,si el 
 * operador de la izquierda es null o undefined. De lo contrario
 * retorna el operador de izquierda
 */
let asistencia;
console.log("operador ?? nullish coalescing");
console.log("asistencia = null ?? true:" + (asistencia = null ?? true));//true
console.log("asistencia = 1 ?? true:" + (asistencia = 1 ?? true));//1
x = undefined;
console.log("asignacion de asistencia = x:" + (asistencia = x ?? "asiste"));//asiste
