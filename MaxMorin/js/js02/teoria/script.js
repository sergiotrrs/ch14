console.log("funciones");

//funcion declaration ************************************************************************************************************************************

function multiplica(a,b){
    return a*b;
}

console.log("El resultado de multiplica es " + multiplica(3,5));


//function expression ***********************************************************************************************************************************
const suma = function (a,b){ return a+b;/*este punto y coma es de la funtuin*/  };//este punto y como es de la sentencia completa
const mult = function (a,b){return a * b};
console.log("El resultado de la suma es " + suma(5,4));
//el ; puede ir tanto afuera como alado de return******************************************************************************************************

//uso de las funciones ************************************************************************************************************************************
function areaCuadrado( funcion, lado){
    return funcion(lado, lado);
}

console.log("El area del cuadrado es " + areaCuadrado(mult, 5));
//hoisting *************************************************************************************************************************************************
console.log("El resultado de la resta es " + resta(10, 3)) ;
//Para las funciones expresadas, no se aplica el hoisting.
//console.log("El resultado de la div es " + div(10, 3) );
function resta(a,b){
    return a-b;
}

const div = function (a,b){return a/b};

//selft-invoking functions*************************
//functions que se autoinvocan,
(function(){
    console.log("Mensaje desde una funcion autoinvocada");

})();

//Metodo de argumentos *********************************************************************************************
function perimetroRec(ladoA=2, ladoB=3){
    console.log("Perimetro Rec " + (2*(ladoA+ladoB)));
    console.log("Parametros " + arguments.length);
    //console.log("Valor de this " + this );
}
// si a parametro no le pones digitos tienes que ir a ladoA= ladoB=3 para poner un numero;
perimetroRec(5,2);

function encuentraMayor(){
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor){
            mayor = arguments[index];
        }
        
    }
    return mayor;
}

console.log("El numero mayor ess " + encuentraMayor(2,5,7,9,51,22,77,20,31));

//arrow functions **********************************************************

const residuo = (a,b) => a%b;
console.log("El residuo es " + residuo(9,2))

//funciones dentro de bojetos ***************************
const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    asiste: true
};

console.log("Nombre del participante " + participante.nombreCompleto() );
console.log("El participante asiste? " + participante.asiste );