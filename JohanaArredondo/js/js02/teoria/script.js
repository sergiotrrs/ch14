console.log("Sesion js02 Funciones");

function multiplica(a,b){
    return a*b;
}

console.log("El resultado de multiplica es "+multiplica(3,5) );

//funcion expression
const suma = function(a,b){return a+b};
const mult = function(a,b){return a*b};
console.log("el resultado de la suma es: "+suma(5,4));

// uso de las funciones/
function areaCuadrado(funcion, lado){
    return funcion(lado, lado);
}

console.log("El area del cuadrado es "+ areaCuadrado(mult, 5) );

//Hoisting

console.log("El resultado de la resta es: "+ resta(10,3));
//funciones expresadas no aplica el hosting
//console.log("el resta es "+ div(10,3) );

function resta(a,b){
    return a - b;
}

const div = function (a,b){return a/b};


// funciones autoinvocadas (selfinvoking)

(function(){
    console.log("Mensaje desde funcion autoinvocada");
})();

//argumento

function perimetroRec(ladoA, ladoB){
    console.log("Perimetro Rec: "+(2*(ladoA+ladoB)));
    console.log("parametros "+arguments.length);
    console.log("Valor de this "+this );

}

perimetroRec(10,3);

function encuentraMayor(){
    let mayor=0;
    for(let index = 0; index < arguments.length; index++){
    if(arguments[index]>mayor){
        mayor =arguments[index];
    }
}
return mayor;

}

console.log("mayor:"+ encuentraMayor(2,5,7,81,21));

//arrow function

const residuo = (a,b) => a%b;
console.log("El residuo es "+ residuo(9,2) );

//funciones dentro de objetos

const participante = {
    nombre: "Jorge",
    apellido:"Montalvo",
    nombreCompleto: function(){
        return this.nombre+ " " + this.apellido;
    },
    asiste: true
};

console.log("Nombre participante : "+ participante.nombreCompleto() );
