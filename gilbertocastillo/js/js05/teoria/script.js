console.log("teroria de la sesion js05, operadores")
//operadores de incremento de decremento+++++++++++++
let x=1;
//incremento en una unidad
x = x + 1;
//el operador postincremento ++ devuelve el valor de x y despues incremnta en una unidad------
x++;
console.log("valor de x con ++");//3
//decremento en una unidad
x =  x - 1;
//el operador -- realiza el drecremento en una unidad
x--;
console.log("valor de x con --: " + x);


//el operador preincremento ++x incrementa la variable en una unidad y luego devuelve el valor
++x;

x=1
console.log(`valor de x++ : ${x++}`);
console.log(`valor de ++x : ${++x}`);


let y = 0;
x = 0;
y= ++x;
console.log(`valor de x : ${x}`);
console.log(`valor de y : ${y}`);

y = 0;
x = 0;
y= x++;
console.log(`valor de x : ${x}`);
console.log(`valor de y : ${y}`);

x=1;
console.log("pre-incremento");
console.log(x);
console.log(++x);
console.log(x);
//Post incremento
console.log("post-incremento");
x=1;
console.log(x);
console.log(x++);
console.log(x);


// let i;
// let j;
// for (i= 0 ; i<3 ; j=i++)console.log("con i++" + i);
// console.log("finalizacion de i: " + j);

// for (i = 0; i<3; j= ++i)console.log("con ++i" + i);
// console.log("finalizacion de i: " + j);
// //al usar el pre o post incrmento en un for no hay problema


let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

/**
 * POST DECREMENTO Y PRE-DECREMENTO
 */
x=5
y= --x;// y=4 , x=4
console.log(y,x);
x = 5;
y = x--;// y=5, x=4
console.log(y,x)

/***
 * operadores aritmericos
 * operador de suma
 */
x = 1 +34 + y;
//operador de resta
x = 23 - 45 - y;
//operador de division
x = 56/6; //2
//operador de multiplicacion
x= 2 * 4; //8
//operador de residuo
x = 8 % 2; //residuo 0
//operador de potencia math
x = 2**3; //8


/**
 * operadores de asigancion
 * 
 */
x = 2;
//x = x + 10
x +=10; //x = x+10
x-=5; //x=x-5
x +=3;//x= x*3
x /=2;//x= z/2
x %=4; // x= x %4
x**=3; //x= x **3



/**
 * Operadores de igualdad (Comparacion)
 */

//operador igual que
x = 1;
y = 2 ;
x == y;//false
y= 1;
x == y; //true
x= 1;
y = "1";
x == y //true == compara solo valor 
console.log( " x == 'y" + (x == y));
console.log("x++" != 'y' + (x++ !=y)); //true;

//operador extrictamente igual que === compara el valor y el tipo
x = 1;
y = '1';
console.log ("x === 'y'" + (x===y)); //false
//operador extrictamente diferente
console.log("x !== 'y'" + (x !== y)); //true


//operadores logicos &&, || , !
true && true //true
true && false //false si un de los valores es false , nos da false
//si el primer operador es true, el resultado es el valor del segundo operador.
//si el primer operador es false, el resultado sera false
//false, null , NaN, 0 ,empty string o undefined son considerados con valor false.
//operadores de corto circuito
// console.log("true && NaN" = + (true && NaN)); //
// console.log("true && NaN"= + (false && NaN)); //FALSE
// console.log("true && 'Hola estrella' =" + (true && 'Hola estrella')); //Hola estrella
// console.log("null && 'Hola Moi'=" + ('a' && "Hola Moi"));
// console.log(" '' && 'Hola Maga' = " + ('' && "Hola Maga"));//empty string

//operador logico or ||
true || false //true
//false, null, NaN, 0, empty string o undefined son considerados con valor false.
//si el primer operador es true, el resultado es el primer operador.
//si el primer operador es false, el resultado es el segundo operador
console.log("\n operador or ||"); //


console.log("true || NaN=" + (false || NaN)); //FALSE
console.log("true || 'Hola estrella' =" + (true || 'Hola estrella')); //Hola estrella
console.log("null || 'Hola Moi'=" + ('a' || "Hola Moi"));
console.log(" '' || 'Hola Maga' = " + ('' || "Hola Maga"));//empty string

//opdrador logico not !
let nuevoValor = !true //false
nuevoValor = !false //true
//false. null, NaN,0, empty string o undefined son considerados valor false
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador logico binario ?? Nullish coalescing
//operador logico que retorna el operador de la derecha , si el operador de la izquierda es null o undefined
//de lo contrario retorna el operador de la izquierda
let asistencia = null ?? true //true
console.log("\n operador ?? Nullish Coalencing");
console.log("asistencia = null ?? true:" + (aasistencia = null ?? true))
console.log("asistencia = 1 ?? true:" + (asistencia = 1 ?? true))
x = undefined;
console.log("Asignacion de asistencia =x :" + (asistencia = x ?? 'asiste'))
console.log("type of (undefined)" + typeof(undefined));//undefined
console.log("typeof (null)" + typeof(null));//object
//los datos se guardan en memoria como 1 y 0,
//los bits que indican el tipo de dato, para
//object es = 00
//String es= 01
//numbers es = 02
// dato null todos sus bits son ceros 0000000000000 fue un error de javascript







