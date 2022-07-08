console.log('Sesión JS02 Funciones');

//Funtion declaration

function multiplica(a, b) {
    return a * b;
}

console.log("El resultado es: " + multiplica(3, 5));

//function expression***********************
const suma = function (a, b) { 
    return a + b; 
}
const mult = function (a, b) { 
    return a *b; 
}
console.log("El resultado es: " + suma(5, 4));

//uso de las Funciones**********
function areaCuadrado(funcMult, lado) {
	return funcMult(lado,lado);
}

console.log("El area del cuadrado es: " + areaCuadrado(mult, suma,5));

//Hoisting*************************
console.log("El area del cuadrado es: " + resta(10,3));
//Para funciones expresadas, no se aplica el hoisting.
//console.log("El area del cuadrado es: " + div(10,3));

function resta(a, b) {
	return a - b;
}

const div = function (a,b){
    return a / b;
};
//Self-Invoking Function*************************
//Funciones que se invocan.
(function (){
   console.log("Mensaje desde funcion autoinvocada");
})();

//Metodo de argumentos*************************\
function perimetroRec(ladoA=2 , ladoB=3) {
    console.log("Parametro Rectangulo " + (2*(ladoA + ladoB)));
    console.log("Parametros "+ arguments.length);
  //  console.log("Valor de this "+ this);
}
perimetroRec(5,2);

function encuentraMayor(){
    let mayor = 0;
    for(let index = 0; index < arguments.length; index++){
		if(arguments[index] > mayor){
			mayor=arguments[index];
		}
	}
	return mayor;
}

console.log("El numero mayor es: " + encuentraMayor(2,5,7,8,81,21));

//Arrow Functions*************************
const residuo = (a,b) => a % b;
console.log("El residuo es: " + residuo(9,2));

//Funciones dentro de objetos*************************

const participante = {
	nombre: "Jorge",
	apellido: "Montalvo",
	nombreCompleto: function(){
           return this.nombre + " " + this.apellido;  
	},//coma por que temina el valor 
    asiste:true
 };
console.log ("Nombre participante : " + participante.nombreCompleto());
console.log ("El participante asiste? : " + participante.asiste);
