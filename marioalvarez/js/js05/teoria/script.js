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

x+=10; //x=x+10;
x-=5; //x=x5;
x*=3; //x=x*3;
x/=2; //x=x/2;
x%=4; //x=x%4;
x**=3; //x=x**3;
