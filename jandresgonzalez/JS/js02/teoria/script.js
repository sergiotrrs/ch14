

function multiplica(a,b) {
    return a*b;
}

console.log("JS02. Funciones");
console.log("Vamo a multiplicar y sumar")

let a= window.prompt("Número a");
let b= window.prompt("Número b");

console.log("La multiplicación es", multiplica(a, b));
// = document.getElementsByClassName("multip").innerHTML + multiplica(a, b);

//------------------Aquí va un nuevo: function expression (dentro de variable)
//Primero paso a números el string enviado en el prompt
a=Number(a);
b=Number(b);
//Declaro una function expression, dentro de variable
const suma = function(a, b) {return (a+b)};
const mult = function(a, b) {return (a*b)};

console.log("La suma es", suma(a, b));

//Uso de funciones
/*Podemos usar una function expression como parámetro de una function declaration*/
function areaCuadrado (funcion, lado) {
    return funcion(lado, lado);
}

console.log("El área del cuadrado de lado 5 es " + areaCuadrado(multiplica, 5))

//Hoisting sube las funciones declared, sin problema, pero no para las expressions
console.log("La resta es " + resta(a, b))

function resta (a, b) {
    return a-b;
}

const div=function(a, b) {return (a / b)};

//Self-invoking functions: se autoinvocan las funciones
//Se utiliza una única función y se limpia espacio de memoria
(function (){
    console.log("Hay una función autoinvocada que manda este mensaje \
    a la consola");

})();

//Método de argumentos
function perimetro(ladoA, ladoB) {
    console.log("Parametros " + arguments.length);
    console.log("Valor de this es " + this + "Y lo \
    podemos ver como objeto", this);
    let result= (2*(ladoA + ladoB));
    console.log("El perimetro es " + result);
}

console.log(perimetro(10, 3));

/*------------------------
De igual manera se pueden dar parámetros con los que se inicializaría la función
function perimetro(ladoA = 3, ladoB = 5) {
    console.log("Parametros " + arguments.length);
    console.log("Valor de this es " + this + "Y lo \
    podemos ver como objeto", this);
    console.log((2*ladoA + (2*ladoB)));
}

console.log(perimetro());
----------------------------
//O pasar el primer parámetro y trabajar con el seguno
function perimetro(ladoA = 3, ladoB = 5) {
    console.log("Parametros " + arguments.length);
    console.log("Valor de this es " + this + "Y lo \
    podemos ver como objeto", this);
    console.log((2*ladoA + (2*ladoB)));
}

console.log(perimetro(6));
-------------------------

//O ambos par
function perimetro(ladoA = 3, ladoB = 5) {
    console.log("Parametros " + arguments.length);
    console.log("Valor de this es " + this + "Y lo \
    podemos ver como objeto", this);
    console.log((2*ladoA + (2*ladoB)));
}

console.log(perimetro(6, 3));
*/

function encuentraMayor () {
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index] > mayor) {
            mayor = arguments[index];
        }      
    } return mayor;    
}

console.log("El número mayor es " + encuentraMayor(54, 3, 23, 44, 34, 99, 10));


/* 
----------------
PODEROSAS ARROW FUNCTIONS
-----------------
*/

const residuo = (a, b) => a % b;
// o también:
//const residuo = (a, b) => {return a % b};

console.log("El residuo de 8 entre 2 es " + residuo(9,2));


/* Funciones dentro de objetos */
const participante = {
    nombre:"Tanix",
    apellido:"Gayosso",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    },
    asiste:true,
};

console.log("Nombre participante " + participante.nombreCompleto())
console.log("¿El participante asiste? " + participante.asiste);

document.getElementById("change").innerHTML = `Entonces: <br>
area cuadrado: ${areaCuadrado(multiplica, 5)} <br>
suma: ${suma(a, b)} <br>
multiplicacion: ${mult(a, b)} <br>
resta: ${resta(a, b)} <br>
division ${div(a, b)} <br>
Instructora de la CH14 es ${participante.nombreCompleto()}` ;