console.log("Teoria js05, operadores");

//incremento decremento
let x = 1;
//incremento de unidad
x= x+1;
//operador ++ devuelve el valor, despues incrementa en uno
x++;
console.log("Valor de x "+ x);

//decremento en unidad
x=x-1;
x--;
console.log("Valor de x con --: "+x);

//incrementa una unidad y devuelva el valor
x=1;

console.log(`Valor de x++ : ${x++}`);
console.log(`Valor de ++x: ${++x}`);

let y=0;
x=0;
y= ++x;
console.log(`Valor de x : ${x}`);
console.log(`Valor de y : ${y}`);

x=1;
console.log("pre-incremento");
console.log(x);
console.log(++x);
console.log(x);

console.log("post-incremento");
x=1;
console.log(x);
console.log(x++);
console.log(x);

for(i=0; i<3 ; i++) console.log("con i++ "+i);
for(i=0; i<3 ; ++i) console.log("con ++i "+i);



x=-10;
y = --x;
console.log(y,x);
x=80
y=x--;
console.log(y,x);

//residuo
x=8%2;

//operador de potencia
x = 2**3;

//operador de asignacion

x=2;

x+=10;
x-=5;
x*=3;
x**=3;

/**
 * Operadores de igualdad (comparacion)
 */

//operador igual que
x=1;
y-2;
x==y; //false
y=1;
x==y; // true
y="1";
//true, compara el valor, el tipo string se convierte a numerico
console.log("x=='y'"+ (x == y));
//operador diferente que !=

x=1;
y= '2';
console.log("x++ != 'y' "+(x++ != y));
console.log("x++ != 'y' "+(x++ != y));
console.log("x != 'y' "+(x != y));
console.log("++x != 'y' "+(++x != y));


//operador estrictamente igual que === compara valor y tipo de dato

x=1;
y='1';

console.log("x === 'y' "+ (x=== y));
//operador estrictamente diferente que != compara el valor y tipo de dato
console.log("x !== 'y'"+(x!==y));

//operadores logicos &&, || , !
true && true; // true
true && false;//false
//false, null, NaN, 0, empty string, o underfined son considerados como false
console.log("true && NaN = "+(true && NaN));
console.log("false && NaN = "+(false && NaN));
console.log("true && 'Hola ' ="+(null && 'Hola '));


//operador logico or ||

true || false //true
//false, null, NaN, 0, empty string, o underfined son considerados como false
//Si el primer operador es true, el resultado es el primer operador
//Si el primer operador es false, el resultado es el segundo operador
console.log("\n operador or ||")
console.log("true || NaN = "+(true || NaN)); //true
console.log("false || NaN = "+(false || NaN)); //NaN
console.log("true || 'Hola' = "+(true || 'Hola')); //true
console.log("null || 'Hola' = "+(null || 'Hola')); //hola
console.log("'a' || 'Hola' = "+('a' || 'Hola')); //hola
console.log(" '' || 'Hola' = "+('' || 'Hola')); //hola

//operador logico not!

let nuevoValor = !true
nuevoValor = !false

console.log("\n operador not !")
console.log("!NaN  = "+(!NaN)); //true
console.log("!true  = "+(!true)); //false
console.log("!'Hola'= "+(!'Hola')); //false
console.log("!false  = "+(!false)); //true
console.log("!'a' = "+(!'a')); //false
console.log(" !'' = "+(!'')); //true


//operador logico binario ?? Nullish Coalescing

//operador logico que retorna el operador de la derecha
//si el operador de la izquierda es null o undefined, de lo contrario retorna el operador de la izquierda

let asistencia =null?? true //
console.log("\n operador ?? Nullish Coalescing");
console.log("Asistencia = null ?? true : "+(asistencia = null ?? true)) //true
console.log("Asistencia = 1 ?? true : "+(asistencia = 1 ?? true)) //1

x = undefined;

console.log("Asignacion de asistencia = x: "+(asistencia =x ?? 'Asiste'))//asiste

console.log("typeof(undefined) "+typeof(undefined)); //undefined
console.log("typeof(null) "+typeof(null)); //object
