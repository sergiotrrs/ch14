console.log("Sesión js02 Funciones")
/*Las funciones son objetos en javaScript */
//Function declaration

function multiplica(a,b){
    return a*b;
}

console.log("El resultado de multiplica es: "+multiplica(3,5));

/***************************************************************/

//Function expression
//Utiliza una función anonima, se llama así porque no tiene nombre
//Declararlo con const para prteger el tipo de dato.
const suma = function(a,b){return a+b;}; // Termina con ; porque es parte del statement 
const mul = function(a,b){return a*b;}; // Termina con ; porque es parte del statement 
console.log("El resultado de la suma es: ",suma(5,4));

/*********************************Uso de las funciones**********************************/

function areaCuadrado(funcion, lado){
    return funcion(lado,lado);
}

console.log("El área del cuadrado es: ", areaCuadrado(mul,5));
console.log("El área del cuadrado es: ", areaCuadrado(multiplica,6));

/*********************************Hoisting**********************************/
/*Echa un vistazo a este código y adivina qué sucede cuando se ejecuta:

console.log(foo);
var foo = 'foo';
Puede que te sorprenda saber que este código genera undefined y que no falla o genera un error – a pesar de que foo se asigna después de la línea console.log
Esto se debe a que el intérprete de JavaScript divide la declaración y asignación de funciones y variables: JavaScript "hoists" o "alza" tus declaraciones a la parte superior de su scope (ámbito) antes de la ejecución.
A esto se le llama hoisting, y nos permite usar foo antes de su declaración en el ejemplo anterior.
*/

/* Con  let y const ,JavaScript solamente eleva declaraciones, no inicializaciones.
    let x; //declaración
    x=3; //inicialización;
*/

/*En otros lenguajes la función debe estar definido antes*/
console.log("El resultado de la resta es", resta(10,3));

function resta(a,b){
    return a-b;
}
/*Para funciones expresadas no se eleva 
console.log(div(a,b));
const div=function(a,b){return a/b;};
*/
/**********************self-invoking functions**********************************/

(function(){
        console.log("Mensaje desde función auto-invocada");
    })();


/**********************arguments.length**********************************/

function test(ladoA,ladoB){
    console.log("Número de parámetros:",arguments.length);
    console.log("Valor de this",this);
    //console.log("Valor de ladoA",this.ladoA);
}

test(30,3);

//Incializar parámetros de entrada
function test2(ladoA=2,ladoB=2){
    console.log(ladoA+" , "+ladoB);
}
test2();
test2(3);
test2(30,3);

/*******************************Argumentos variables******************************/
function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index]>mayor){
            mayor=arguments[index];
        }
    }
    return mayor;
}
console.log("El mayor es:",encuentraMayor(1,2,3,4,5,6,7,8,9));

/************************ARROW FUNCTION********************************************* */

//A partir de la versión 6 de JS, más facil la lectura cuando ya las entiendes

const residuo=(a,b)=>{ return a%b};
const x= (x,y)=>x*y; //Cuando es una sola intruccion, ya está implicito que regresará el resultado
console.log("El residuo es :", residuo(3,2));

/*************************Funciones dentro de objetos************************/

const participante={
    nombre:"Mario", // Propiedad (clave:valor)
    apellido:"Alvarez", //Propiedad
    nombreCompleto:function(){ //Método
          return this.nombre+" "+this.apellido;
        },
    asiste:true // Propiedad
};

console.log("Nombre participante:"+participante.nombreCompleto());
console.log("Participante asiste?:"+participante.asiste);

