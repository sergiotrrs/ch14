console.log("Sesión JS02 Funciones");

//Function Declaration*********************************
function multiplica(a,b){
    return a*b;
}

console.log("El resultado de multiplica es " + multiplica(3,5));
//console.log("El resultado de multiplica es" + 15);
//console.log("El resultado de multiplica es 15");

//Function expression *********************************
const suma = function(a,b){ return a+b;}
const mult = function(a,b){ return a*b;}
console.log("El resultado de la suma es " + suma(5,4));

//Uso de las Functiones *********************************
function areaCuadrado(funcion, lado){
    return funcion(lado,lado); //mult(5,5)
}
console.log("El area del cuadrado es " + areaCuadrado(multiplica,5));

//Hoisting *(izar o elevar)******************************
console.log("El resultado de resta es " + resta(10,3));
//Para funciones expresadas, no se aplica el hoisting.
//console.log("El resultado de div es " + div(10,3));
function resta(a,b){
    return a-b;
}

//en linea 32 es una función expresada por tener "const"
const div = function (a,b){return a/b;}

//Self-Invoking Function *(se auto invocan)**********************
/*(function(){
    console.log("Mensaje desde función autoinvocada");
})();*/

//Método de argumentos ********************************
function perimetroRec(ladoA=2,ladoB=3){
    console.log("Perimetro Rec " + (2*(ladoA+ladoB)));
    console.log("Parametros " + arguments.length);
    //console.log("Valor de this " + this.arguments);
    //this hace
}
perimetroRec(5,2);

function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor){
            mayor = arguments[index];
        }
        
    }
    return mayor;
}

console.log("El número mayor es " + encuentraMayor(2,4,7,81,21));

//Arrow Functions ***************************************

const residuo = (a, b) => a % b;
console.log("El residuo es " + residuo(9,2));

//funciones dentro de objetos****************************

const participantes = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre+ " " + this.apellido;
    },
    asistente: true
};

console.log("Nombre participante : " + participantes.nombreCompleto());

