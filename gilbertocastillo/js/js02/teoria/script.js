console.log("sesion JS02 Funciones");

//funcion declaration

function multiplica(a, b) {
    return a * b;
}
console.log("El resultado de multiplicar es " + multiplica(3, 5));
//


//funtion expression
const suma = function (a, b) { return a + b };
const mult = function (a, b) { return a * b };
console.log("El resultado de la suma es " + suma(5, 4));

//uso de las funciones***********************************
function areacuadrado(funcion, lado) {
    return funcion(lado, lado);
}
console.log("El area del cuadrado es " + areacuadrado(mult, 5));


//hoisting*********************

console.log("El resultado de la resta es " + resta(10, 3));
//para funciones expresada no se aplica el hoisting
//console.log("El resultado de la resta es " + div(10,3));
function resta(a, b) {
    return a - b;
}

//const div= function(a,b){return a/b;}

//self-invoking************************
//funciones que se autoinvocan.
(function () {
    console.log("Mensaje desde funcion autoinvocada");
})();

//arguments.lenght
//metodo de argumentos

function perimetroRec(ladoA = 5, ladoB = 3) {
    console.log("Perimetro Rectangulo " + (2 * (ladoA + ladoB)));
    console.log("Parametros" + arguments.length);
    console.log("valor de this " + this);
}

perimetroRec(5);

function encuentraMayor() {
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index] > mayor) {
            mayor = arguments[index];
        }

    }
    return mayor;
}

console.log("El numero mayor es " + encuentraMayor(5, 12, 30, 50, 60, 90, 41, 12));

//arrow funtions

const residuo = (a, b) => a % b;
console.log("El residuo es " + residuo(8, 2));

//funciones dentro de objetos
const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    },
asiste: true
};

console.log("Nombre participante : " + participante.nombreCompleto());