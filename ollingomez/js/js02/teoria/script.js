console.log("Sesión JS02 Function");

//Function declaracion
function multiplica(a,b){
    return a*b;
}

console.log("El resultado de la multiplocacion es: " + multiplica(3,5));

//Function expretion
const suma = function(a,b){return a+b};
const mult = function(a,b){return a*b};
console.log("El resultado de la suma es: " + suma(3,5));

//Uso de las funciones*************************
function areaCuadrado(funcion,lado){
    return funcion(lado,lado) //mult(5,5) es como si llamara a esa funcion
}

console.log("El area del cuadrado es: "+ areaCuadrado(mult,5));

//Function Hoisting**************************
console.log("El resultado de la resta es: "+ resta(5,4));
//para las funciones expresadas no exite el hoisting
//console.log("El resultado de la division es: "+ div(5,4));

function resta(a,b){
    return a-b;
}

// esta es una funcion expresadas
const div = function(a,b){return a/b};//no hay hoisting 

// self-Invoking Function  funciones auto invocadas****
(function(){
    console.log("Mensaje desde función auto invocada");
})();

//Método de argumentos++++++
function perimetroRec(ladoA=2,ladoB=3){
    console.log("Perimetro Rectangulo "+(2*(ladoA+ladoB)));
    console.log("Parámetros " + arguments.length);
    //console.log("Valor de this " + this.ladoA );//mandamos utilizar el lado A hace alución al objeto que lo esta invocado
}

perimetroRec(5,2,4,6,8);

function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
         if (arguments[index]>mayor) {
            mayor=arguments[index];            
         }
        
    }
    return mayor;
}

console.log("El numero mayor es: "+ encuentraMayor(2,5,7,81,21));

//Arrow Function********************************

const residuo = (a,b)=> a%b;
console.log("el residuo es " + residuo(9,2));

const residuo2 = (a,b)=> {return a%b};// Este caso se usa cuando va a retornas mas de dos valores
console.log("el residuo es " + residuo2(9,2));


//Funcion dentro de objetos********************
const participante = {
    nombre:"Jorge",
    apellido: "Montalvo",
    nombreCompleto:function(){
        return this.nombre + " " + this.apellido;
        asiste: true
    }
};

console.log("Nombre particiánte: " + participante.nombreCompleto());