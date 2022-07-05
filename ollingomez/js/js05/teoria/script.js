console.log("Teoria de la sesión JS05, opredores");

//Operadores de incremento de decremento++++++++++++
let x=1;
//incremento en una unidad
x=x+1;

//El operado ++, devuelve el valor, después incremento en una unidad
//la variable
//Primero devuelve el valor de x
//Luego incrementa en 1 el valor de x
x++;
console.log("valor de x con ++:" +x );//3

//Decremento en una unidad
x=x-1;
//El operador --, devuelve el valor, después decremento en una unidad

x--;
console.log("valor de x con --: ");//1

//El operador preincremento incrementa la variable en una unidad y devuelve el
//Primero devuelve el valor x
//Luego incremeta en 1 el valor x
x=1;
console.log(`valor de x++ : ${x++}`); //x=1; x=x+1->X=2
console.log(`valor de x++ : ${++x}`);//x=x+1->x=3

let y=0;
x=0;
y=++x;
console.log(`valor de x++ : ${x}`); //1
console.log(`valor de x++ : ${y}`);//1

y=0;
x=0;
y=x++;
console.log(`valor de x++ : ${x}`); //1
console.log(`valor de x++ : ${y}`);//0

x=1;
console.log("pre-incrmeneto");
console.log(x);//1
console.log(++x);//2
console.log(x);//2
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x);//1
console.log(x++);//1
console.log(x);//2

let i;
for(i=0; i<3; i++) console.log("con i++ " + i);//0,1,2
console.log("Finalización de i: "+i);//3
for(i=0; i<3; ++i) console.log("con i++ " + i);//1,2
console.log("Finalización de i: "+i);//3

i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

//pre incremento
x=1;
y=++x;//y=2,x=2
x=1
x=x+1;
y=x;

//pos
x=1;
y=x++; //y=1, x=2
//es lo mismo que
x=1;
y=x;
x=x+1;
//---------------------
y=10;
y=x++;//y=10, x=11

x=30;
y=++x;//y=31, x=31
//*****************************/

//post decremento y pre decremeto
x=5
y=--x; //y=4, x=4

x=5;
y=x--;//y=5, x=4


//post decremento y pre decremeto
x=-10
y=--x; //y=-11, x=-11
console.log(y,x);
x=80;
y=x--;//y=80, x=79
console.log(y,x)

/**
 * Operador de asisgnacion
 */

x=2;

x+=10; //x=x+10
x-=5; //x=x-5
x*=3;//x=x*3
x/=2;//x=x/2
x%=4;//x=x%4
x**=3;//x=x**3


/**
 * Operadores de igualdad (comparación)
 */

//Operador igual que
x=1;
y=2;
x==y;//folse
y=1;
x==y;//true
x=1;
y="1";
x==y;//true, compara el VALOR el tipo se convierte a numerico
console.log("x=='y'"+(x==y));

//Operador diferente que !=
x=1;
y='2';
console.log("x!='y'"+(x!=y));//true 1 !='2'
console.log("x++!='y'"+(x++!=y));//true 1 !='2' -> x=2
console.log("x!='y'"+(x!=y));//false 2 != '2'
console.log("++x!='y'"+(++x!=y));//true 3!='2'->true

//Operador extrictamente igual que === compara el velor y el tipo de dato

x=1;
y='1';
console.log("x==='y'"+(x===y));//false
//Operador extrictamente diferente !== compara el valor y el tipo de dato
console.log("x!=='y'"+(x!==y));//true

//OPeradores lógicos &&, ||, !
true&&true //true
true && false //false 
//False, null, NaN, 0, empty string o undefined son consideradod con valor false:

//Si el primer operador es true, el resultado es el valor del segundo operador.

//Si el primer operador si es false, el resultado será el primer operador

//Operadores de corto circuito
console.log("\n operador or &&");
console.log("true && NaN= "+(true&&NaN));//NaN
console.log("false && NaN= "+(false&&NaN));//false
console.log("true && 'Hola estrella'= "+(true&&'Hola estrella'));//false
console.log("null && 'Hola Moi'= "+(null&&'Hola Moi'));//null Si el primer operador es true, el resultado es el valor del segundo operador.
console.log("'a' && 'Hola Moi'= "+('a'&&'Hola Moi'));//Hola Moi
console.log("'' && 'Hola Maga'= "+(''&&'Hola Moi'))//'' string vacio

//Operador logico or ||
true || false //true
//False, null, NaN, 0, empty string o undefined son consideradod con valor false:
//Si el primer operador es true, el resultado es el valor del primer operador.
//Si el primer operador si es false, el resultado es le segundo operador
console.log("\n operador or ||");
console.log("true || NaN= "+(true||NaN));//NaN
console.log("false || NaN= "+(false||NaN));//NaN
console.log("true || 'Hola estrella'= "+(true||'Hola estrella'));//true
console.log("null || 'Hola Moi'= "+(null||'Hola Moi'));//Hola Moi
console.log("'a' || 'Hola Moi'= "+('a'||'Hola Moi'));//'a'
console.log("'' || 'Hola Maga'= "+(''||'Hola Moi'))//"Hola Maga"

//Operador logico not !
let nuevo =!true//fase
nuevoValor=!false//true
//False, null, NaN, 0, empty string o undefine son considerados con valor false

console.log("\n operador not !");
console.log(" NaN = "+(!NaN));//true
console.log(" !true= "+(!true));//false
console.log(" !'Hola estrella'= "+(!'Hola estrella'));//false
console.log("!false= "+(!false));//true
console.log("'a'= "+(!'a'));//false
console.log("!'''= "+(!''))//true

//Operador lógico binario ?? Nullish Coalescing
//Operador logico que retorna el operador de la derecha, si el operador
//de la izquierda es null o undefined. De lo contrario, retorna el operador de izquierda
//opIzquierda??opDerecha
let asistencias;
console.log("n operador ?? Nullish Coalesting");
console.log(" asistencia=null??true: "+(asistencia=null??true));//true
console.log(" asistencia = 1 ?? true: "+(asistencia=1 ??true));//1
x=undefined;
console.log("Asignación de asistencia=x: "+(asistencia=x??'Asiste'));//Asiste
console.log("Asignación de asistencia=x: "+(asistencia=''??'Asiste'));//''emmpty string
console.log("typeof(undefined) "+ typeof(undefined));//undefined
console.log("typeof(null)"+typeof(null));//object

//Los dato se guardan en memoria como unos y ceros,
//Los bits que indican el tipo de dato, para objeto
//objects es =00
//strings es =01 /verificar info
//numbers es =02 /verificar info
//Para un tipo de dato null, todos sus bits (1,0) son 000000000000..00 




