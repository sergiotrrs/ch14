console.log("Sesión JS02 Funciones");

//Primera forma de declarar la funcion: Function declaration*****
function multiplica(a,b){
    return a* b ;
}

console.log("El resultado de multiplicacion "+ multiplica(3,5));

//Segunda forma de declarar una funcion: Function expresion
//se asigna a una variable
const suma = function (a,b){ return a+b }
const mult = function (a,b){ return a*b }

console.log("El resultado de la suma es " + suma(5 , 4 ));

//Uso de las funciones 
function areaCuadrado (funcion,lado){
    return funcion(lado , lado);
}
console.log("El area del cuadrado es " + areaCuadrado(mult,5));


//Hoisting
console.log("El resultado de la resta es " + resta( 10 , 3));
function resta (a , b){
    return a-b;
}
//Para funciones expresadas, no se aplicae el hoisting
//console.log("El resultado de division es " + div( 10 , 3));
//const div = function (a,b) {return a/b;}

//Self-Invoking Functions
//Autoinvocadad es decir anonimas
(function(){
    console.log("Mensaje desde autoinvocado");
})();

//Metodo de argumentos
function perimetroRec(ladoA=2 , ladoB=3){
    console.log("Perimetro REc "+ (2*(ladoA+ladoB)));
    console.log("Parametros" + arguments.length);
    console.log("Valor de this" + this );
}

perimetroRec(5);


function encuntraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor){
            mayor=arguments[index];
        }     
        
    }
    return mayor;
}
console.log("El numero mayor es " +encuntraMayor(2,5,7,81,21));

//Arrow Function 
const residuo = (a,b) =>{return a % b};
console.log("El residio es "+ residuo (8 ,2));

//Funciones dentro del objeto 
const participante = {
    nombre: "Jorge",
    apellido: "Moltavo",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    asiste: true 
}
console.log("Nombre participante: " + participante.nombreCompleto() );
console.log("El participante asiste: " + participante.asiste );