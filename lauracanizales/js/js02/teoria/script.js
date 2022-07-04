console.log("Sesion JS02 Funciones");

//Function declaration

function multiplica(a , b){
    return a * b;
}

console.log("El resultado de multiplica es " + multiplica(3, 5));
//console.log("El resultado de multiplica es " + 15 );
//console.log("El resultado de multiplica es " 15 );

//Function expression
const suma = function(a, b){ return a + b };
const mult = function(a, b){ return a * b };

console.log ("El resultado de la suma es " + suma(5,4));

//Uso de las funciones
function areaCuadrado(funcion, lado){
    return funcion(lado, lado);
}
console.log("El area del cuadrado es : " +areaCuadrado(mult, 5));

//Hoisting
console.log("El resultado de la resta es " + resta(10, 3));
//Para funciones expresadas no se aplica hoisting 
console.log("EL resultado de la division es " +(10, 3)); 

function resta(a, b){
    return a-b;
}

const div = function (a,b){return a/b};

//self-invowking functions 
///Funciones que se autoinvocan
(function (){
    console.log("Mensaje desde funcion autoinvocada");
})();

//metodo de argumentos
function perimetroRec(ladoA=2, ladoB=3){
    console.log("Perimetro Rectangulo " + (2*(ladoA + ladoB)));
    console.log("PArametros " + arguments.length);
   // console.log("Valor de this " + this);
}
perimetroRec(5,2);

function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
            if (arguments[index]>mayor){
                mayor = arguments[index];
            }
        }return mayor;
        
    }
    
console.log("El numero mayor es " + encuentraMayor(2, 5, 7, 81, 21))

//Arrow functions
const residuo = (a,b)=> a%b ;
console.log("El residuo es " + residuo(8,2));

//Funciones dentro de objetos
const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre+" " +this.apellido;
    },
    asiste: true
};
console.log("Nombre participante : " + participante.nombreCompleto());
console.log("El participante asiste? " + participante.asiste);