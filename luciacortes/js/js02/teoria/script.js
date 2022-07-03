console.log("Sesion JS02 Funciones");

//Function declaration ********************************************
function multiplica(a, b) {
    return a * b;
}

console.log("El resultado de multiplca es " + multiplica(3, 5));
//console.log ("El resultado de multiplca es "+ 15);
//console.log ("El resultado de multiplca es  15");


//Function expression *******************************************
//Es más común que en instrucciones de una sola línea se presente así, para que no tenga tantas líneas.
const suma = function (a, b) { return a + b };
const mult = function (a, b) { return a * b };
console.log("El resultado de la suma es " + suma(5, 4));
//console.log("El resultado de la suma es "+ 9 );
//console.log("El resultado de la suma es  9 ");

//Uso de las funciones***************************************
// Solo se puede usar una función dentro de otra declarada como variable o constante.
//Not solo, pero se recomienda para no caer en errores.
function areaCuadrado(funcion, lado){
    return funcion(lado, lado); //mult(5, 5) al declara el 5 de lado en la línea anterior
}

console.log("El área del cuadrado es " + areaCuadrado(mult, 5));

//Function Hoisting ******************************************************
// Podemos llamar a la función antes de hacer la función. "elevación" porque te eleva la función que está abajo.
// Esto con funciones declaradas.
console.log ("El valor de la resta es " + resta(10,3));
//para funciones expresadas, como la de abajo, no se aplica el hoisting.
//console.log ("El valor de la resta es " + div(10,3));
function resta(a,b){ //funcion expresada
    return a-b;
}

const div = function (a, b){return a/b};

//Self-Invoking Function *****************************************
// Funciones que se autoinvocan. Van entre paréntesis y mandan llamar otros paréntesis.

(function (){
    console.log ("Mensaje desde función autoinvocada");
})();

//Método de argumentos ******************************************
//function perimetroRec(ladoA, ladoB){ //sin inicializar un parámetro de entrada porque se pone debajo en la llamada
    function perimetroRec(ladoA =10, ladoB= 4){ //con los parámetros incializados
    console.log("Perímetro de rectángulo es "+ (2*(ladoA+ladoB)));
    console.log("Parámetros "+ arguments.length);
    //console.log("Valor de this "+ this); //this hace referencia a la función que se está ejecutando
}
perimetroRec(5);

function encuentraMayor(){
    let mayor=0
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index]>mayor){
            mayor =arguments [index];
        }
        
    }
    return mayor;
}

console.log ("El número mayor es "+ encuentraMayor(2,5,7,81,21));

//Arrow Functions no tenemos la palabra reservada return. Es una sola instrucción. 
// no necesita llaves si es intrucción única. Si tiene más instrucciones necesita las llaves
//también se llama Lambda
const residuo = (a,b)=> a % b;
console.log("El residuo es "+ residuo(9,2) );

//Funciones dentro de objetos******* Función y método son sinónimos
//ir declarándolos uno por línea para que sea más fácil de leer
const participante = {
    nombre:"Jorge", //nombre es la clave "Jorge" el valor.
    apellido:"Montalvo",
    nombreCompleto: function(){
        return this.nombre+ " "+ this.apellido;
    },//la coma es porque nombreCompleto es la clave y toda la función es el valor.
    asiste: true
};

console.log("Nombre participante: "+ participante.nombreCompleto());
console.log("¿El participante asiste? "+ participante.asiste);