console.log("Sesión JS02 Funciones");

//Function declaration 

function multilpica(a, b){
    return a*b;
}
console.log("El resultado de multilpicar es: " + multilpica(3,5));

//FUNCTION EXPRESSION

const suma = function(a,b){return a+b};
const mult = function(a,b){return a*b};
console.log("El resultado de la suma es: " +suma(5,4));

//Uso de las funciones//
function areaCuadrado( funcion, lado){
    return funcion(lado,lado);
}
console.log("El área del cuadrado es: " + areaCuadrado(mult,5));

//HOISTING *************************//

console.log("El resultado de la resta es " + resta(10,3));
//Para funciones expresadas, no se aplica el hoisting
//console.log("El resultado de la resta es " + div(10,3));
function resta(a,b){
    return a-b;
}

const div = function (a,b){return a/b};

//Self-Invoking Functions************************
//Funciones que se autoinvocan
(function(){
    console.log("Mnesaje desde la función autoinvocada")
})();

//Método de argumentos ****************************//
function perimetroRec(ladoA=2,ladoB=3){
    console.log("Parámetros " + arguments.length);
   // console.log("Valor de this " + this);
    console.log("Perímetro Rec: "+ (2*(ladoA+ladoB)));
}

perimetroRec();

function encuentraMayor (){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor){
            mayor = arguments[index];
        }
        
    }
    return mayor;
}

console.log("El número mayor es: " + encuentraMayor(2,5,78,5,65,51))

//Arrow Functions ***********************************

const residuo = ( x,y) => x%y;
console.log("El residuo es: " + residuo(13,2));

//Funciones dentro de objetos ************+

const participante = {
    nombre: "Jorge", 
    apellido: "Montalvo",
    nombreCompleto: function (){
        return this.nombre + " " + this.apellido;
    },
    asiste: true
}

console.log("Nombre de participante : " + participante.nombreCompleto());

//valor nombre