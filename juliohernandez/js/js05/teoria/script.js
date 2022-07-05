console.log("Teoría de la sesión JS05, Operadores");

//Operadores de incremento de decremento
let x=1;

//Incremento en una unidad
x = x+1;

//El operador ++ devuelve el valor, después incrementa en una unidad
x++;
console.log(`Valor de x con '++': ${x}`); //3

//Decremento en una unidad
x = x-1;

//El operador -- devuelve el valor, después decrementa en una unidad
x--;
console.log(`Valor de x con '--': ${x}`); //1

//El operador preincremento ++ devuelve el valor de la variable y después incrementa. 
++x; //2

console.log(`Valor de x++: ${x++}`);  //2
console.log(`Valor de ++x: ${++x}`);  //4

//Ejercicio de comprensión
let y=0;
x=0;
y=++x;  //Además de pasarle 1 a y, le suma 1 a x
console.log(`Valor de x: ${x}`); //1 
console.log(`Valor de y: ${y}`);  //1

//Ejercicio de comprensión
y=0;
x=0;
y=x++;  //Además de pasarle 0 a y, le suma 1 a x
console.log(`Valor de x: ${x}`); //1 
console.log(`Valor de y: ${y}`);  //0

for (let i=0;i<3;i++)console.log(`con i++ ${i}`); //0 1 2 (i termina en 3)
for (let i=0;i<3;++i)console.log(`con i++ ${i}`); //0 1 2 (i termina en 3)
//Conclusión: el pre o post no afectan al for debido a que se ejecutan en la final expression

//Operador de asignación
x=2;

x +=10;
x-=5;
x *=3;
x /=2;
x %=4;
x **=3;

//Operadores de igualdad (comparación)
x=1,y=2;

x==y; //False

y=1;
x==y; //true

x=1;
y="1"; 
x==y //true, compara el valor, el tipo string se convierte a numérico.
console.log(`x == 'y' ${x==y}`);

//Operador diferente que !=
x=1, y='2';
console.log(`x != 'y' ${x!=y}`); //true
console.log(`x++ != 'y' ${x++ !=y}`); //true
console.log(`x != 'y' ${x!=y}`); //false: son iguales
console.log(`++x != 'y' ${x!=y}`); //true.

//Operador estrictamente igual que ===
x=1,x='1';
console.log(`x === 'y' ${x===y}`);

//Operador estrictamente diferente que !==
console.log(`x !== 'y' ${x!==y}`);

//Operadores lógicos &&, || , !
true && true //true
true && false //true

//False, null, NaN, 0, empty string o undefinded, son considerados como false
console.log(`true && NaN = ${false && NaN}`); //false
console.log(`null && 'Hola Moi' = ${null&&"Hola Moi"}`)//false

//OPERADORES CORTO-CIRCUITO
//Si el primer operador es true, el resultado es el valor del segundo operador
//Si el primer operador es FALSE, el resultado es el valor del PRIMER operador
console.log(`true && NaN = ${true && NaN}`); //NaN
console.log(`true && 'Hola, estrella' = ${true&&'Hola, estrella'}`); //Hola, estrella
console.log(`a && 'Hola, Luis' = ${"a" &&'Hola, Luis'}`); //Hola, Luis
console.log(`'' && 'Hola, Maga' = ${"" &&'Hola, Maga'}`); //''

//Operador lógico or ||
true||false //false
//Si el primer operador es true, el resultado es el primer operador
//Si el primer operador es FALSE, el resultado es el SEGUNDO operador
console.log("\n Operador or ||");
console.log(`true || NaN = ${true || NaN}`); //true
console.log(`false || NaN = ${true || NaN}`); //NaN
console.log(`true || 'Hola estrella' = ${true || 'Hola estrella'}`); //true
console.log(`null || 'Hola estrella' = ${null || 'Hola estrella'}`); //Hola estrella
console.log(`'a' || 'Hola Moi' = ${'a' || 'Hola Moi'}`); //'a'
console.log(`'' || 'Hola Moi' = ${'' || 'Hola Maga'}`); //'Hola Maga'

//Operador lógico not !
let nuevoValor =!true //false
nuevoValor = !false //true

console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador lógico binario ?? Nullish Coalescing
/*Operador lógico que retorna el operador de la derecha, si el 
operador de la izquierda es null o undefined. De lo contrario, retorna el operador de la izquierda
*/
let asistencia;
console.log("\n operador ?? Nullish Coalescing");
console.log(`asistencia = null ?? true: ${asistencia=null??true}`); //true
console.log(`asistencia = 1 ?? true: ${asistencia=1??true}`); //1
x=undefined;
console.log(`Asignación de asistencia=x: ${asistencia=x??'Asiste'}`); //'Asiste'

//Error de JavaScript
console.log("typeof(undefined) = "+typeof(undefined)); //undefined
console.log("typeof(null) = "+typeof(null)); //object
