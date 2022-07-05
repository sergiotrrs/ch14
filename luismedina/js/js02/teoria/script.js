console.log('Sesion JS02 Funciones');

// Function declaration
function multiplica(a, b) {
    return a * b;
}

console.log("El resultado de la multiplicacion es " + multiplica(3, 5));

//Function expression, preferiblemnte declararlas con const
const suma = function (a, b) { return a + b };
const mult = function (a, b) { return a * b };
console.log("El resultado de la suma es " + suma(5, 4));



//Uso de las funciones
function areaCuadrado(funcion, lado) {
    return funcion(lado, lado);
}

console.log("El area del cuadrado es " + areaCuadrado(mult, 5));

// Hoisting aqui se uso primero la funcion y luego se declaro la funcion despues de usarla la cual se hace como elevacion flotante

console.log("El resultado de la resta es " + resta(10, 3));
// Para funciones expresadas no se aplica el hoisting
// console.log("El resultado de la resta es " + div(10, 3));

function resta(a, b) {
    return a - b;
}

const div = function (a, b) { return a / b };

//Self-Invoking functions
//Funciones que se autoinvocan.
(function () {
    console.log("Mensaje desde funcion autoinvocada");
})();


//Método de argumentos
function perimetroRectangulo(ladoA = 2, ladoB = 3) {
    console.log("Perimetro de Rectangulo " + (2 * (ladoA + ladoB)));
    console.log("Parametros " + arguments.length);
    // console.log("Valor de this " + this.ladoB);
}

perimetroRectangulo(5, 2);

function encuentraMayor() {
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index] > mayor) {
            mayor = arguments[index];
        }
    }
    return mayor;
}
console.log("El numero mayor es " + encuentraMayor(2, 5, 7, 8, 9, 58, 21, 58, 87));


//Arrow Functions
//Si se van a dar 2 instruciones o mas se le ponen las llaves {} {return a % b}
const residuo = (a, b) => a % b;
console.log("El residuo es " + residuo(8, 2));


//Funciones dentro de objetos
//Todos los valores se separan por coma

const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    },
    asiste: true
};

console.log("Nombre participante " + participante.nombreCompleto());
console.log("Nombre participante " + participante.asiste);