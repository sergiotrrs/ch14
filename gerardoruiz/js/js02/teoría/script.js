
console.log("Sesion 2 funciones");


//Function declaration

function multi(a,b){
    return a * b;
}

console.log(`El resultado de la multiplicación es ${multi(3,5)}`);

//Function expression
const suma  = function (a,b){
    return a + b;
}
console.log("El resultado de la suma es: " + suma(5,4)); 

//Use of fuctions
function areaCuadrado(funcion, lado){
    return funcion(lado, lado);
}

console.log(`El área del cuadrado es ${areaCuadrado(multi, 5)}`);


/* Hoisting
Hoisting allows functions to be safely used in code before they are declared. 
Para funciones declaradas no aplica el hoisting*/

console.log("El resulado de la resta es " + resta(10,3));
function resta(a,b){
    return a-b;
}

//Self-Invoking functions

(function (){
    let x = console.log("Message from a self-invoking function !!"); 
})();


//Metodo de argumentos

function perimetroRec(ladoA=15, ladoB=12){
    console.log("Perímetro del rectangulo " + (2*(ladoA+ladoB)));
    console.log("Parámetros " + arguments.length);
   /*  console.log("valor de this " + this); */
}

perimetroRec(5,2);

function encuentraMayor(){
    let mayor = 0
    for (let index = 0; index < arguments.length; index++) {
       if (arguments[index]>mayor){
        mayor = arguments[index];
       }
        
    }
    return mayor;
}

console.log("el número mayor es " + encuentraMayor(2,5,6,11,2,19));

//Arrow Function 
const residuo = (a, b) => a % b;
console.log(`El resultado de la multiplicación es ${residuo(28,5)}`);

// funciones dentro de objetos

const participante = {
    nombre: "Gerardo",
    apellido: "Ruiz",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    asiste: true
};

console.log(`Nombre participante: ${participante.nombreCompleto()}`);
console.log(`¿El participante asiste? ${participante.asiste}`);
