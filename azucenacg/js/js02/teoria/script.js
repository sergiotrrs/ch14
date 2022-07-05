console.log("Sesión JS02 Funciones");

// Function declaration **********************************

function multiplicacion(a,b){
    return a*b;
}

console.log("El resultado de multiplicacion es "+ multiplicacion(3,5));

// Function EXPRESSION *************************************
const suma= function (a,b) {return a+b};
console.log ("El resultado de la suma es "+ suma(5,4));


const mul= function (a,b) {return a*b};

//con const se proteje la suma y así no se mete cualquier número

// Uso de las funciones *******************************

function areaCuadrado(funcion,lado){
    return funcion(lado,lado);
}

console.log("El área del cuadrado es "+ areaCuadrado(mul, 5));


// Hoisting **********************
console.log("El resultado de la resta es: "+ resta (10,3));

// El hoisting se dice que es cuando a pesar de que la resta está 
// arriba se puede agarrar la función de abajo 
function resta (a,b){
    return a-b;
}

// Para funcioes expresadas como la de const no se elevan 

const div = function(a,b) {return a/b} ;

// Self - invoking functions *******************

(function () {
console.log ("Mensaje de una función autoinvocada");
}) ();


// Método de argumentos de la función ***************

function perimetroRec (ladoA=2, ladoB=3){
console.log("Parámetros "+ arguments.length);
console.log("Valor de this "+ this); //aqui hay duda con esto
console.log("PerímetroRec es igual a: "+ (2*ladoA+2*ladoB));
}

// Si le ponemos valores en la función directa se dice que se inicializa
// Pero no cuenta como un parámetro hasta que yo le de valores
// Si solo le doy un parámetro, lo va a agarrar a
perimetroRec(8,6,5,7);

function encuentraMayor(){

    let mayor=0;

    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor){
            mayor=arguments[index];
        }
        
    }
    return mayor;
}

console.log("el número mayor es: "+ encuentraMayor(8,15,0.2,3));

// Arrow Function **************
const residuo= (a,b) => a%b;
console.log("El residuo es: " + residuo(9,2));

// Funciones dentro de objetos*********************
const participante = { 
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCom: function(){
        return this.nombre + " "+ this.apellido;
    },
    asiste:true
};

console.log(" Nombre participante : "+ participante.nombreCom());
console.log("el participante asiste? "+ participante.asiste);


