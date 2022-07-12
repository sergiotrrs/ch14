console.log("Sesion js02 funciones");

//function declaration*****************************************************

function multiplica(a, b){
    return a*b;
}
console.log("El resultado de multiplicacion es :" + multiplica(3,5));


//function expression******************************************************
const suma= function(a,b){return a+b;};
const mult= function(a,b){return a*b;};

console.log("El resultado de la suma es: " + suma(5,4))

//Uso de las funciones*****************************************************

function areaCuadrado(funcion, lado){
    return funcion(lado, lado);
}
console.log("El area del cuadrado es : "+ areaCuadrado(mult,5));

//hoisting******************************************************************

console.log("El resultado de la resta es: " + resta(10,4));
//Para funciones expresadas, nno se aplicael hoisting***********************
//console.log("El resultado de la divicion es: " + div(10,4));

function resta(a,b){
    return a-b;
}
const div = function (a,b){return a/b};

//Self-Invoking functions**************************************************
//Funciones que se autoinvocan.
(function(){
    console.log("Mensaje desde funcion autoinvocada");
})();

//Metodo de argumentos******************************************************
function perimetroRec(ladoA=2, ladoB=3){
    console.log("Perimetro Rec "+(2*(ladoA+ladoB)))
    console.log("Parametros "+ arguments.length);
    //console.log("Valor de this: "+ this.arguments );

}
perimetroRec(5,2);

function encuentraMayor(){
    let mayor =0;
    for (let index = 0; index < arguments.length; index++) {
       if (arguments[index]>mayor){
        mayor=arguments[index];
       }
    }
    return mayor;    
    }

    console.log("El numero mayor es: " +encuentraMayor(2,5,7,81,21));

//Arrow Functions ***********************************************************

const residuo= (a,b) => a%b ;
console.log("El residuo es " + residuo(9,2))

//Funciones dentro de objetos************************************************

const participante ={
    nombre:"Jorge",
    apellido:"Montalvo",
    nombreCompleto: function(){
        return this.nombre + " "+ this.apellido;
    },
    asiste: true
};

console.log("Nombre participante: " +participante.nombreCompleto());
console.log("El partipante asiste? " +participante.asiste);