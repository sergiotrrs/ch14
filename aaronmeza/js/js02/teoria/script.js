console.log("Sesión JS02 Funciones");

function multiplica(a,b){
    return a*b;
}

console.log("El resultado de multiplica es  " + multiplica(3,5));

/* ************************************* */

const suma = function(a,b){ return a+b};
const mult = function(a,b){ return a*b};

console.log("El resultado de la suma es " + suma(5,4));

/* Uso de las funciones */ 

function areaCuadrado(funcion, lado){
    return funcion(lado, lado);
}

console.log("El árae del cuadrado es " + areaCuadrado(multiplica, 5));

console.log("El resultado de la resta es " + resta(10,3));

function resta(a,b){
    return a-b;
}


//Funciones que se autoinvocan //
(function(){
    console.log("Mensaje desde función autoinvocada");
})();


//********* */
function perimetroRec(ladoA = 2,ladoB = 3){
    console.log("Perimetro Rec " + (2*ladoA + 2*ladoB))
    console.log("Parámetros " +  arguments.length);// Te dice cuantos parametros se come la función 
    console.log("Valor de this " + this);
}



perimetroRec(5);



function encuentraMayor(){
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index] > mayor){
            mayor = arguments[index];
        }
        
    }
    return mayor;
}

console.log("El número mayor es " + encuentraMayor(2,5,7,81,21));

//Funciones Flecha

const residuo = ( a,b) => a % b;
console.log("El residuo es " + residuo(8,2));



const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function (){
        return this.nombre + " " +  this.apellido;
    },
    asiste: true
};

console.log("Nombre participante : "  + participante.nombreCompleto());
console.log("El participante asiste?  "  + participante.asiste);



