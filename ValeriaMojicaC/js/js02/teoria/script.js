console.log("Sesión js02");
//Si una funcion no tiene nombre es una funcion anonima

//Function declaration

function multiplicacion(a ,b) {
    return a * b;
}

console.log(`El resultado de la multiplicacion es: ${multiplicacion(2,3)}`);
//console.log(`El resultado de la multiplicacion es: ${6}`);
//El resultado de la multiplicacion es: 6


//Function expression
//Se asigna como const para evitar que se le cambie el valor o tipo de dato
const suma = function (a,b) {return a +b};
console.log(`El resultado de la suma es: ${suma(3,5)}`);
const multi = function (a,b) {return a * b};


//Uso de las funciones
function areaCuadrado(funcion, lado) {
    return funcion(lado, lado); //multi(5,5)
}
console.log(`El área del cuadrado es: ${areaCuadrado(multi, 5)}`);


//Hoisting
console.log(`El resultado de la resta es: ${resta(15,5)}`);
function resta(a, b){
    return a - b;
}

//Para las funciones expresadas , no aplica el hoisting
//console.log(`El resultado de la division es: ${div(15,5)}`);
const division =  function(a,b){return a/b};
console.log(`El resultado de la division es: ${division(15,5)}`);


//Self-Invoking function
//Funciones que se auto invocan
(function(){
    console.log(`Mensaje desde funcion autoinvocada`);
})();

//Metodo de argumentos
function perimetroRectangulo(ladoA = 2, ladoB = 8) {
    console.log(`El perimetro del rectangulo es: ${2*(ladoA + ladoB)}`);
    //Muestra cuantos parametros de estrada esta recibiendo
    console.log(`Parámetros ${arguments.length}`);
    //Hace alucion a el objeto que se esta invocando
    //console.log(`Valor de this ${this.arguments}`);
}
perimetroRectangulo(5);

function encuentraM(){
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor) {
            mayor = arguments[index];
        }
    }
    return mayor;
}
console.log(`El numero mayor es ${encuentraM(2, 4, 16, 8, 10)}`);

//Arrow functions
//Si tiene mas instrucciones se escribe así {return a%b};
const residuo = (a, b) => a%b;
console.log(`El residuo es: ${residuo(15,2)}`);

//Funciones dentro de objetos
const participante = {
    nombre: "Valeria",
    apellido: "Mojica",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    },
    asiste: true,
};

console.log(`El nombre del participante: ${participante.nombreCompleto()}`);
console.log(`El participante asiste? ${participante.asiste}`);