console.log("Teoria de la sesión JS05, operadores");

//Operadores de incremento  y decremento
let x=1;

//Incremento de una unidad
x=x+1; //x=2
x++; // x=3
console.log(x);

//Decremento en una unidad
x=x-1; // 2
x--; //1
console.log(x);
console.log("pre y post incremento");
/*
La diferencia es que PreIncremento devuelve el valor de la 
variable incrementada, en cambio PostIncremento devuelve el 
valor original de variable antes de ser incrementada.
*/
x=1;
console.log("pre-incremento");
console.log(x); //1
console.log(++x); //2
console.log(x); //2
//Post incrmeento
console.log("post-incremento");
x=1;
console.log(x); //1
console.log(x++); //1
console.log(x); //2


/*
No hay diferencia porque no hay asignación del i
al saltar a comprobar  la condición, en ambos caos ya se actualizo
el valor de i. 
Es como tener una linea de
i++;     ++i;
y=i;     y=i;
*/
let i=0;
let k=0;
console.log("post-incremento");
for(i=0;i<3;k=i++){
    console.log("i:"+i);
    console.log("k:"+k);
}
console.log("i final:"+i);
console.log("k final:"+k);

console.log("pre-incremento");
for(i=0;i<3;k=++i){
    console.log("i:"+i);
    console.log("k:"+k);
}
console.log("i final:"+i);
console.log("k final:"+k);

//Post-decremento y pre-decremento
x=5;
y=--x; // y=4, x=4

x=5;
y=x--; //y=5, x=4;

/***************************OPERADORES ARTIMÉTICOS*********************************** */

//Suma
x=1+1;
//Resta
x=1-1;
//División
x=1/2;
//Multiplicación
x=2*3;
//residuo
x=8%2;
//Operador potencia
x=2**3; //8

/**
 * Operadores de asignación
 */
x=2;

x+=10; //x=x+10;
x-=5; //x=x5;
x*=3; //x=x*3;
x/=2; //x=x/2;
x%=4; //x=x%4;
x**=3; //x=x**3;
/**
 * Operador de igualdad (comparación)
 */
console.log("Operador de compración");
//Operador igual que
x=1;
y=2;
console.log(x==y); //false
y="1";
console.log(x==y); //true (compara el valor, el tipo string se comvierte a numérico)

//Operador diferente que !=
x=1;
y="2";
console.log(x!=y); //true
console.log(x++!=y); //true
console.log(x!=y); //false

//Operador extrictamente igual que ===, compara el valor y tipo de dato

x=1;
y='1';
console.log(x===y); //false;
//Operador extrictamente diferente !== (diferente valor o diferente tipo de dato)
console.log(x!==y); //true (si son extrictamente diferntes)


//Operadores de corto circuito
// Operador lógico &&
//false, null NaN, 0, Emptystring o undefined  son considerados con un valor false
//Si el primer operador es true, el  resultado es el valor  del segundo operador
//si el primer operador es false, el resultado será el primer operador
console.log(true && NaN); // NaN
console.log(false && NaN); //false
console.log(true && "Hola"); // "Hola"
console.log(null && "Hola"); // "null"
console.log('a' && "Hola"); //"hola"
console.log("" && "hola");//""

// Operador lógico ||
//False, null, NaN, empty string, undefined son considerados false
//Si el primer operador es true, el resultado es el primer operador.
//Si el primer operador es false, el resultado es el segundo operador.

console.log(true || NaN); // true
console.log(false || NaN); //Nan
console.log(true || "Hola"); // true
console.log(null || "Hola"); // "Hola"
console.log('a' || "Hola"); //"a"
console.log("" || "hola");//"Hola"

//Operadr lógio not 
let newVal=!true;//false;
newVal=!false; //true
//False, null, Nan, 0, emoty, String o undefinded son considerados con valor false
console.log("\n Operador not !")
console.log(" !NaN = " + (!NaN )); //true
console.log(" !true = " + (!true )); //false
console.log(" !'Hola estrella' = " + ( !'Hola estrella' )); //false
console.log(" !false = " + ( !false )); // true
console.log(" !'a' = " + ( !'a' )); //false 
console.log(" !''' = " + ( !'' )); //true

//Operador lógico binario Nullish Coalescing
//Operador lógico que retorna el operador de la derecha, si el
//operador de la izquierdaa es null o undefined. De lo contrario
//retorna el operador de la izquierda.

/*
Utilizado para evitr que de alguna lectura me venga un valor undefined o null, es como un 
filtro ara no poner  un if en caso de que sea null o undefined 
*/
let asistencia = null ?? true; //true
console.log(null??true); //true
console.log(asistencia=1??true);//1
