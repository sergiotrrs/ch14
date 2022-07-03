console.log("Sesión js02 funciones");

// function declaration 
function multiplica(a,b){
    return a*b;
    }

    console.log("El resultado de multiplica es: "+ multiplica(3,5) );

    //**************************************************** */

    //function expresion


   const suma = function (a,b){return a+b;};
 
   console.log("El resultado de la suma es: "+suma(5,4));

   // usage ********************************************** 
   const mult = function (a,b){return a*b;};
   function areaCuadrado(funcion,lado){
    return funcion(lado, lado) ;
   }
console.log("El area del cuadrado es: " + areaCuadrado(mult, 5));






/* HOISTING *********************************************************+ */
console.log("El resultado de la resta: "+ resta(10,3));
//Para funciones expresadas, no se aplica el hoisting.
// console.log("El resultado de la resta: "+ div(10,3));

function resta(a,b){
    return   a-b;
}

// cont div = function (a,b){return a/b;};


/*Self-Invoking function************* */
//funciones que se autoinvocan
(function(){
    console.log("Funcion que se autoinvoca");
})();

//Argumentos
function perimetro(ladoA=2,ladoB=2){
    console.log("Perímetro "+ (2*(ladoA+ladoB))); 
    console.log("parámetros "+ arguments.length);
    //console.log("Valor de this "+this);   
}
perimetro(5);

function encuentraMayor(){
    let mayor=0;

    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor) {
            mayor = arguments[index];
            
        }
        
    }
    return mayor;
}
console.log("El número mayor es: " + encuentraMayor(2,5,7,81,21));

// Arrow functions 

// Es como las funciones expresadas pero más simplificadas
// variable = parámetros => instruccion, no tiene return porque cuando es una sola instrucción
// ya está implícito que te va a retornar el resultado

const residuo = (a,b) => {return a % b};
console.log("El residuo es: " + residuo(8,3));

// Funciones dentro de objetos

const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre+" "+ this.apellido;
    },
    asiste: true
};

console.log("Nombre participante: " + participante.nombreCompleto());
console.log("Asiste el participante? " + participante.asiste);





























