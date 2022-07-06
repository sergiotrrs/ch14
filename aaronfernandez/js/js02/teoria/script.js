console.log("Sesión JS02 Funciones");

function multiplica(a, b) {
    return a * b;
}

console.log("El resultado de multiplicación es " + multiplica(3, 5));
// console.log "El resultado de multiplicación es 15"

const suma = function (a, b) { return a + b; }
const mult = function (a, b) { return a * b; }
console.log("El resultado de la suma es " + suma(5, 4));

// Uso de las funciones

function areaCuadrado(funcion, lado) {
    return funcion(lado, lado);
}

console.log("El área del cuadrado es " + areaCuadrado(mult, 5));

// Hoisting
console.log("El resultado de la resta es " + resta(10, 3))
// Para funciones expresadas, no se elevan (hoisting)
console.log("El resultado de la resta es " + div(10, 3))

function resta(a, b) {
    return a - b;
}

const div = function (a, b) { return a / b }

    // Self-Invoking Functions
    // Funciones que se autoinvocan.

    (function () {
        console.log("Mensaje desde función autoinvocada");
    })()

// Método de argumentos
function perimetroRect(ladoA = 2, ladoB = 3) {
    console.log("Perímetro Rec" + (2 * (ladoA + ladoB)));
    console.log("Parámetros " + arguments.length);
    console.log("Valor de this " + this.ladoA)
}

perimetroRect(10, 3);

function encuentraMayor() {
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index] > mayor) {
            mayor = arguments[index]
        }

    }
    return mayor;
}

console.log("El número mayor es " + encuentraMayor(2, 5, 7, 81, 21))

// Arrow Functions

const residuo = (a, b) => a % b
console.log("El residuo es " + residuo(9, 2))

// Funciones dentro de objetos

const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    },
    asiste: true
}

console.log("Nombre participante: " + participante.nombreCompleto())
console.log("¿El participante asiste?: " + participante.asiste)