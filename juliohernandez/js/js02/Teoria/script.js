alert("sesión JS02 Funciones")

// Function declaration
function multiplica(a, b){return a*b}

confirm(`El resultado de multiplica es ${multiplica(3, 5)}`);

// Function expression

const suma=function (a,b){return a+b};
const mult=function (a,b){return a*b};

confirm(`El resultado de la suma es ${suma(3,4)}`);

//Diferencia entre ambas formas===> No hay
function areaCuadrado(funcion, lado){return funcion(lado, lado)}

confirm(`El área del cuadrado es ${areaCuadrado(mult,5)}`);
confirm(`El área del cuadrado 2 es ${areaCuadrado(multiplica,5)}`);

//Hoisting es poder usar funciones antes de definirlas: el lenguaje las eleva para funciones no expresadas: sólo declaradas

//Self-invoking-autoinvocadas-
(function(){console.log("Mensaje desde función autoinvocada")})();

//Arguments
function perimetroRectangulo(ladoA=3, ladoB=5){
    console.log(`Perímetro Rectángulo ${2*(ladoA+ladoB)}`)
    console.log(`Parámetros: ${arguments.length}`)
   // console.log(`Valor de this: ${ladoA.this}`) ???
    
}

perimetroRectangulo(4);

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