console.log("Teoria de la sesion JS05");

//Operadores de incremento **********************************************************/
let x=1;//x=1 
//incremento en una unidad
x=x+1;//x=2 
//El operador ++, devuelve el valor , despues incrementa en una unidad
x++;// x=3
console.log("Valor de x " + x);//valor de x=3
//Decremento en una unidad
x = x-1;//x=2
//El operador -- , devuelve el valor ,decremento en una unidad
x--;//x=1
console.log("Valor de x con -- es " + x); //resultado "1"

//El operador preincremento devuelve el valor de la variable , despues incrementa
//en una unidad la variable.
++x;//x=2
//Primero incrementa la variable en una unidad 
//luego devuelve el valor 
console.log(`Valor de ++x : ${x++}`);//x=2
console.log(`Valor de ++x : ${++x}` ); //x=4

let= y=0;
x=0;
y = ++x;
console.log(`Valor de x : ${x}`); //x=1 primero incrementa "++"
console.log(`Valor de y : ${y}` ); //y=1 devuelve con incremento por eso es igual a 1

y=0;
x=0;
y = x++;
console.log(`Valor de x : ${x}`); //x=1  aqui despues de devolver el valor de y 
console.log(`Valor de y : ${y}` ); //y=0 devuelve la variable de "x" antes del incremento "++"

x=1;
console.log("pre-incremento");
console.log(x); //1
console.log(++x); //2
console.log(x); //2
//post incremento
console.log("post-incremento");
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2

let i;
//en el for no importa porque ambos son el 4 paso del for "incremento"
for(i =0; i<3; i++)console.log("con i++ " + i);//0,1,2
console.log("Finalizacion de i: " + i );//3
for(i =0; i<3; ++i)console.log("con ++i " + i);//0,1,2
console.log("Finalizacion de i: " + i );//3

/*
let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3

*/

//*********************************************************************************** */
//post-decremento , pre-decremento
x=5;
y= --x; //y=4 , x=4
console.log(y,x);
x=5; 
y= x--; //y=5 , x=4
console.log(y,x);

//********************************************************* *********************************/
//Operadores asimetricos*******************/
//Operador de suma
x= 1 + 34 + y;
//Operador de resta
x = 23 -45 -y;
//Operador de division
x = 12/6;//resultado 2
//Operador de multiplicacion
x= 2 * 4;//resultado 8
//Operador de residuo
x =8%2;//El residuo es 0 
//Operador de potencia
x = 2**3; //resultado es 8 , es por 2^3

/*************************************************************************************************** */
//Operadores de asignacion 
x =2;

x += 10;//x=x+10; esta seria su igualdad
x-= 5; //x= x -5;
x *=3; //x= x*3;
x /=2; // x=x/2;
x %=4; // x=x%4
x **=3; // x= x**3; => tambien es igual a x^3

//Operador igual que***************************************************************************************************/
x=1;
y=2;
x == y; //false
x=1;
y="1";
//true , compara el valor , el tipo string se convierte a numerico
console.log(" x == 'y' " + (x == y));

//Operador diferente que !=  *******************************************************************************************************/
x=1;
y='2';
console.log(" x != 'y' " + (x!=y)); //resultado es true porque son diferentes
console.log(" x++ != 'y' " + (x++ != y));//true  1!= '2' -> x=2
console.log(" x != 'y' " + (x != y));//false 2 != '2' 
console.log(" x != 'y' " + (++x != y));// 3 != '2' -> true

//Operador etrictamente igual que === compara el valor y tipo de dato 
x=1;
y='1';
console.log("x==='y'" + (x===y)); //false uno es numerico y otro string
//Operador extrictamente diferente que !== compara el valor y tipo de dato
console.log("x !== 'y' " + (x!==y)); //true 

//Operadores logicos && , || , ! ********************************************************************************************************************/
//Operador logico and &&
true && true //true
true && false //false 

//Operadores de corto circuito 
//false , null , NaN , 0 , empty string o undefinided son considerados con valor false
//Si el primer operador es true , el resultao es el valor del segundo operador
//Si el primer operador es false , el resultao es el valor del primer operador
console.log("true && NaN = " + (true && NaN)); //NaN
console.log("false && NaN = " + (false && NaN)); //false
console.log("true && 'Hola estrella' = " + (true && 'Hola estrella')); //Hola Estrella
console.log("null && 'Hola moi' = " + (null && 'Hola moi')); //null
console.log("'a' && 'Hola moi' = " + ('a' && 'Hola moi')); //Hola moi aplica la regla expuesta en la fila 130
console.log(" '' && 'Hola Maga' = " + ( '' && 'Hola Maga')); //'' string vacio porque un empy string es igual a false y aplica regla de la linea 131
console.log(" ' ' && 'Hola Maga' = " + ( ' ' && 'Hola Maga')); //Hola Maga porque hay un espacio string es igual a true y aplica regla de la linea 130

//Operador logico or ||
true || false //true
//false , null , NaN , 0 , empty string o undefinided son considerados con valor false
//Si el primer operador es true , el resultado es el priemr perador 
//Si el primer operador es false , el resultado es el segundo operador
console.log("\n Operador or ||")
console.log("true || NaN = " + (true || NaN)); //true regla de la linea 145
console.log("false || NaN = " + (false || NaN)); // NaN regla 146
console.log("true || 'Hola estrella' = " + (true || 'Hola estrella')); //true
console.log("null || 'Hola moi' = " + ( null || 'Hola moi')); //Hola moi 
console.log(" 'a' || 'Hola moi' = " + ( 'a' || 'Hola moi')); //'a'
console.log(" '' || 'Hola Maga' = " + ( '' || 'Hola Maga')); //Hola Maga 

//Operador logico not !
//false , null , NaN , 0 , empty string o undefinided son considerados con valor false
let nuevoValor = !true //false
nuevoValor = !false //true
console.log("\n Operador not !")
console.log("!NaN = " + (!NaN)); //true
console.log("!true = " + (!true)); //false
console.log("!'Hola etrella' = " + (!'Hola estrella')); //false
console.log(" !false = " + (!false)); //true 
console.log(" !'a' = " + ( !'a' )); //false
console.log(" !''' = " + ( !'')); //true

//Operador logico binaro ?? Nullish Coalescing
//Operador logico que retorna el operador de la derechar y si el operador de la isquierda es null o undifined 
//, de lo contrario retorna el operador de la isquierda
//opIzquierda ?? opDerecha
let asistencia = null ?? true //
console.log("\n operador ?? Nullish Coalescing");
console.log(" asistencia = null ?? true :" + (asistencia = null ?? true));//true
console.log(" asistencia = 1 ?? true :" + (asistencia = 1 ?? true));//1 
x = undefined;
console.log("Asignacion de asistencia =x:" + (asistencia=x ?? 'Asiste'))//Asiste
console.log("Asignacion de asistencia =x:" + (asistencia='' ?? 'Asiste'))//''
console.log("typeof (undefinided) " + typeof(undefined)); //undefined
console.log("typeof (null) " + typeof(null)); //object
//typeof de null da como resultado object por un error que se viene arrastrando desde la version 1 de js



