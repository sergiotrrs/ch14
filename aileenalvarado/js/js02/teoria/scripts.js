console.log("Sesion JS02 Funciones");

//Function declaration 

function multiplica(a, b) {
    return a * b;
}
console.log("El resultado de multiplica es " + multiplica(3, 5));


//Function expression
const suma = function (a, b) {
    return a + b
};
const mult = function (a, b) {
    return a * b
};

console.log("El resultado de la suma es " + suma(5, 4));

//Uso de las funciones 
function areaCuadrado(funcion, lado) {
    return funcion(lado, lado); //mult(5,5)
}

console.log("El area del cuadrado es: " + areaCuadrado(mult, 5));

//Hoisting  

console.log("El resultado de la resta es: " + resta(10, 3));

//Para funciones expresadas no se aplica el hoisting
//console.log("El resultado de la resta es: " + div(10,3));
function resta(a, b) {
    return a - b;
}

const div = function (a, b) {
    return a / b
};

//Selft-Invoking Functions
//Funciones que se autoinvocan. 
(function () {
    let nombreIP;
    console.log("Mensaje desde funcion autoinvocada");
})();

//Metodo de argumentos 
function perimetroRectangulo(ladoA = 2, ladoB = 3) {
    console.log("Perimetro Rectangulo " + (2 * (ladoA + ladoB)));
    console.log("Parametros " + arguments.length);
    console.log("Valor de this " + this);
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

console.log("El numero mayor es: " + encuentraMayor(2, 5, 7, 81, 21));

//Arrow Functions 
const residuo = (a,b)=> a % b; 
console.log("El residuo es: " + residuo(9,2));

//Funciones dentro de objetos 
const participante = {
    nombre : "Jorge", 
    apellido: "Montalvo", 
    nombreCmpleto: function(){
        return this.nombre + " " + this.apellido; 
    },
    asiste: true
}; 
console.log("Nombre participante : " + participante.nombreCmpleto());
console.log("El participantes asiste? : " + participante.asiste); 



