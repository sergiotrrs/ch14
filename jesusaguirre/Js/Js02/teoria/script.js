console.log("sesion js02 funciones")
//function declaration 

function multiplica(a, b){
    return a*b;
}
console.log("el resultado de la multiplica es "+ multiplica(3, 5));

//funcion expression ******************************
const suma =function(a,b){return a+b;};
const mult =function(a,b){return a*b;};
console.log("el resultado de la suma es "+ suma(3, 5));

//uso de las funciones********************************************
function areaCuadrado(funcion, lado){
    return funcion(lado, lado);
}
 
console.log("el area del cuadeado es "+ areaCuadrado(mult, 5));

//hoisting
console.log("el resultadio de la resta es "+ resta(10, 3)); 
//para funciones expresadas, no se aplica el hoisting
/* console.log("el resultadio de la resta es "+ div(10, 3)); */ 
 
function resta(a , b){
    return a-b;
}
const div= function(a, b){return a/b};
//self-invoking functions
//funciones que se autoinvocan
(function(){
    console.log("mensaje desde funcion autoinvocada");
})();
//Metodo de argumentos
function perimetroRec(ladoA=2, ladoB=3){
    console.log("perimetro de rec"+ (2*(ladoA+ladoB)));
    console.log("parametros"+arguments.length);
    console.log("valores de this"+ this);
}
perimetroRec(5);
function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index]>mayor){
            mayor = arguments[index];
        }
        
    }
    return mayor;
}
console.log("el numero mayor es "+encuentraMayor(2,5,7,81,21));

//  Arrow function
const residuo = ( a, b)=>a%b;
console.log("el residuo es "+ residuo(8,2));
//funciones dentro de objetos
const participante  = {
    nombre:"Jorge",
    apellido:"montalvo",
    nombreCompleto:function(){
        return this.nombre+" "+this.apellido;
    },
    asiste:true
}
console.log("nombre participante: "+ participante.nombreCompleto());