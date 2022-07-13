console.log("Teoria de la sesion JS05, operadcores");

//incremento en una unidad
let x=1
//incremento en una undiad
x=x+1
//El operador posincremento++, devuelve el valor, despues incrementa en una unidad
//La variable 
//primero devuelve el valor de x
//Luego incrementa n 1 el valor de x
x++//3
console.log("valor de x con el operador de incremento" + x);//Valor imprimido es 3

//Decremento en una unidad
x=x-1
//El operado -- devuelve el valor, despues incrementa en una unidad
x--;
console.log("El valor de x con operador decremento" + x);//1

//El operador preincremento 
//Primero incrementa el valor de una undiad
//luego devieleve  
x=1;
console.log(`Valor de x++ : ${x++} `);//x=1; Primero muestra el valor 1
x=1;
console.log(`Valor de x-- : ${++x} `);//Primero incrementa x+1=2 despues muestra el valor  que es 2

let y=0;
x=0;
y=++x;
console.log(`Valor de x : ${x} `);//1
console.log(`Valor de y : ${y} `);//2

y=0;
x=0;
y=x++;
console.log(`Valor de x : ${x} `);//1
console.log(`Valor de y : ${y} `);//0

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
let i;
let j;
for (i=0; i<3 ; j=i++)console.log("con i++  "+ i);//0,1,2
console.log("Finalización de j" + j);//2
for (i=0; i<3 ; j=++i)console.log("con i--  "+ i);//0,1,2
console.log("Finalización de j" + j);//3


//pre incremento 
x=1;
y=++x; //y=2
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post
x=1;
y=x++;//y=1 , x=2
//es lo mismo que
x=1;
y=x;
x=x+1;
//
y=10;
y=x++;//y=10 

//************************* */
//pos-decremetno , pre decremento
x=-10;
y=--x; //y=-11, x=-11
console.log(y,x);
x=80
y=x--; // Y=80, x=79
console.log(y,x);

x +=10; //x=x+10
x -=5; //x=x-5
x *=3;// x=x*3:
x/=2; //x=x/2;

/**
 * Operadores de igualdad (comparacion)
 */

x=1;
y=2;
x==y; //false
y=1;
x==y; //true
y="1";
x==y; //true, compara el valor, el tipo string se convierte a numerico
console.log("x=='y' " + (x==y));

//Operador diferente que !=
x=1;
y='2';
console.log("x!='y'"+(x!=y)); //true
console.log("x++!='y'"+(x++!=y)); //true
console.log("x!='y'"+(x!=y));//false
console.log("x!='y'"+(++x !=y));

//Operador estrictamente igual === copara el valor y el tipo de dato 
x=1;
x='1';
console.log("x='y" + (x===y));

//operador estrictamente diferente que !== compara el valor y tipo de dato
console.log("x !=='y' " + (x !==y)); //true

//Operador logicos &&, ||, !
true && true //= true
true && false //si unos de los valores es false, el resulatdo sera false
//false, null, NaN, 0, empty string o undefined son consideradas con valor false
//si el primer operador es true, el resultado es el valor del segundo operador
//si el operador es false, el resulatdo sera el primer operador
//operadores de corto circuito
console.log("true && NaN" +(true && NaN)); //NaN
console.log("true && NaN  " +( false && true));// false
console.log("true && 'Hola estrella' =" + (true && 'hola estrella')); //Hola estrella
console.log("nul && 'Hola moi' =" + (null && "hola moi"));//null
console.log("'a' && 'Hola moi' =" + ('a' && "hola moi"));//hola moi ya que a es considerado true
console.log("'' && 'Hola moi' =" + ('' && "hola moi"));//'' ya que el primero es false dando ''

//Operador logico or ||
true || false //true
//false, null, NaN, 0, empty string o underfined son consideradas con valor false
//Si el primer operador es true, el resultado es el primer operador
//si el primer opera dor es false, el resultado es el segundo operador
console.log("\n operador or ||" );
console.log("true || NaN" +(true || NaN)); //true
console.log("true || NaN  " +( false || true)); //NaN
console.log("true || 'Hola estrella' =" + (true || 'hola estrella')); //True
console.log("nul || 'Hola moi' =" + (null || "hola moi"));//Hola moi
console.log("'a' || 'Hola moi' =" + ('a' || "hola moi"));// 'a'
console.log("'' || 'Hola moi' =" + ('' || "hola maga"));//'Hola maga'

//Operador logico not !
let nuevoValor=!true//false
nuevoValor=!false//true
//False, null, NaN, 0, empy string o underfined son consiferando con  valor false 
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true


//Operador logico binario ?? Nullish Coalescing
//Operador logico que retorna el operador de la deracha, si el operador 
//de la izquierda es null o undefined. De lo contrario retorna el operador de la izqueirda
//operIzquierda ?? operDerecha 
let asistencia
console.log("\n operador ?? Nullish coalescing");
console.log(" asistencia ?? = null ?? true "+ (asistencia = null ??true)) //true
console.log(" asistencia ?? = 1 ?? true "+ (asistencia = 1 ?? true)) //1
x= undefined
console.log ("asingnacion de asistencia =x ;" + ( asistencia =x ?? 'Asiste' ))//Asiste
console.log ("asingnacion de asistencia =x ;" + ( asistencia ='' ?? 'Asiste' ))//''
console.log("typeOf(undefined  )" + typeof(undefined)); //undefined
console.log("type (null) " + typeof(null)); //obje//error de javacrip deberia de ser null
// los datos se guardan en memoria de 1 y 0
// los bits que indican el tipo de dato:
//objeto es =00
//Para un tipo de dato null, todos sus bit (1y0) son 00000000

