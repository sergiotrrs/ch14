console.log("Sesion js02 funciones");

//function declaracion

function myFunction(a,b) {
    return a * b;
}

console.log("El resultado de la multiplicacion "+ myFunction(2,2))



//function expresion se le incluye const para protegerla.

const suma = function(a,b) {return (a + b);}
const mult = function(a,b) {return (a * b);}

console.log("El resultado de la suma "+ suma(2,6));

// Uso de las funciones. En el parametro funcion le estoy pasando mult(funcion anterior en linea 16) para que me lo multiplique *5

function areaCuadrado(funcion, lado){
    return funcion(lado, lado) //aqui estoy llamando a la funcion del parametro y le estoy pasando (lado,lado).
}

console.log("El area del cuadrado es "+ areaCuadrado(mult, 5));

// Hoisting 

console.log("El resultado de la tarea es " +resta(10,3) )
console.log("El resultado de la tarea es " +div(10,3) )// no funciona cuando son funciones expresadas const let


function resta(a , b) {return (a - b);}


const div = function resta(a , b) {return (a / b);}


//Arrow Functions
const residuo =(a,b) => {return a%b}  //si se ocupan las llaves, se debe utilizar return.
console.log(`El residuo es ${residuo(8,2)}`)
//NO SE PUEDE USAR THIS EN ARROW FUNCTION

//Funciones dentro de objetos
const participante={
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    asiste: true
};

console.log(`Nombre participante: ${participante.nombreCompleto()}`)


