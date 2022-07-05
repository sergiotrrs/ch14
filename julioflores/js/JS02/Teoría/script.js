console.log("Sesión JS02 Funciones");

//Function declaration

function multiplica(a,b){
    return a*b;
}

console.log("El resultado de multiplica es " + + multiplica(3,5));

//Function expresion

const suma = function (a,b){ return a+b};
const mult = function (a,b){ return a*b};
console.log("El resultado de la suma es " + suma (5,4));

//Uso de las funciones
function areaCuadrada (funcion, lado){
    return funcion(lado,lado); //equivalente a decir mult 5*5
}

console.log("El área del cuadrado es " + areaCuadrada(mult, 5));

//Hoisting

console.log("El resultado de la resta es " + resta(10,3));

function resta (a,b){
    return a-b;
}

const div = function (a,b){return a/b};

//self-Invoking functions
//Funciones autoinvocadas

(function(){
    console.log("Mnesaje desde función autoinvocada");
})();

//método de argumentos
function perimetroRec(ladoA=2, ladoB=3){
    console.log("Per+imetro Rectángulo es " + (2*(ladoA+ladoB)));
    console.log("Parámetros " + arguments.length); //argumentos de perimetro, línea 48
    console.log("Varios de this " + this);
}

perimetroRec(5,2);

function encuentraMayor(){
    let mayor =0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor){
            mayor =arguments[index];
        }
    }
    return mayor;
}

console.log("El número mayor es " + encuentraMayor(2,5,7,82,25));

//Arrow functions

const residuo = (a,b) => a%b;
// o const residuo = (a,b) => {return a%b};
console.log("El residuo es " + residuo (9,2));


//Funciones dentro de otras

const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre+ " " + this.apellido;
    },
    asiste: true
};

console.log("Nombre participante : " + participante.nombreCompleto());
console.log("El participante asiste? " + participante.asiste);