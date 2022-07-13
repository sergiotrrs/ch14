console.log("Sesión JS02 Funciones");

//Function declaration

function multiplica (a,b){
    return a*b
}

console.log("El resultado de multiplica es " + multiplica(3,5));
// console.log ("El resultado de multiplica es 15");

//Function expression

const suma = function (a,b){ return a +b};
console.log("El resultado de la suma es " + suma(5,4));

// Uso de la funciones 

function areaCuadrado (funcion, lado){
    return funcion(lado, lado)
}

console.log("El área del cuadrado es " + areaCuadrado(multiplica, 5));


// Hoisting

console.log ("El resultado de la resta es " + (10,3));

//Para funciones expresadas, no se aplica el hoisting.
//console.log ("El resultado de la división es " + (10/1));
function resta (a , b){
    return a-b;
}

const div = function (a,b) {return a/b};

// Self-Invoking Functions

//Funciones que se autoinvocan

(function(){
    console.log ("Mensaje desde función autoinvocada")
})();

//Metódo de argumentos
function perimetroRec (ladoA=2, ladoB=3){
    console.log ("Perimetro Rectángulo = "+ (2*(ladoA+ladoB )));
    console.log("Parámetros " + arguments.length);
    //console.log ("Valor de this " + this);

}
perimetroRec (5,2);

function encuentraMayor (){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index]>mayor){
            mayor = arguments[index];
        }
        
    }
    return mayor;
}

console.log ("El número mayor es "+ encuentraMayor(2,5,7,81,21));

const residuo = (a, b )=> a%b;
console.log("El residuo es "+ residuo(8,2));

//Funciones dentro de objetos

const participante ={
    nombre: "Hector",
    apellido: "Ponce",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    asiste: true
};

console.log("Nombre participante: " + participante.nombreCompleto() );
console.log("El participante asiste? "+ participante.asiste);
