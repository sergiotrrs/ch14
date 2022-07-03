console.log("Sesión JS02 Funciones");

// FUNCTION DECLARATION

function multiplication(a,b){
    return a*b;
}
console.log("Multiplicación es ", + multiplication(5,3));

// FUNCTION EXPRESSION

const suma = function (a,b) { return a + b};
const mul = function (a,b) { return a * b};

console.log("El resultado de la suma es" + suma);

// Uso de las funciones ************************

function areaCuadrado (funcion, lado){
    return funcion(lado,lado);
}

console.log("El área del cuadrado es " + areaCuadrado(multiplication, 5));

//Function Hoisting  **** sube la función cuando no se declara antes.

console.log ("La resta es " + resta(10,3));

function resta(a , b){
    return a-b;
}

// *** para funciones expresadas no se usa el hoisting.
/*
console.log("La resta es" + div(10,3));

const div= function(a,b){return a-b};
*/

// SELF-INVOKING FUNCTIONS

(function(){
    console.log("Mensaje de funcion autoinvoking")
})();

// ARGUMENTS ******
// Al llamar la función, dará 16 ya que está tomando el parámetro 5 y el 2 ya preasignado.
// Si no se le dan parámetros, usa los preasignados 2 y 3. 
function perimetroRec(ladoA=2, ladoB=3){
    console.log("PerimetrodelRectangulo es " + (2*(ladoA+ladoB)));
    console.log("Parametros" + arguments.length);
    console.log("Valor de this" + this);
}

perimetroRec(5,2,1);

// ejemplo de que se pueden poner varios parámetros y js toma solo los de la función.

/*
function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>mayor){
            mayor = arguments[index];
        }
        
    }
    return mayor;
}

console.log("El número mayor es" + encuentraMayor(1,2,3,4,5));
Se usó for loop y se cambiaron array por arguments
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

// ARROW FUNCTIONS **********
// Si se usa flecha suele no usarse return
const residuo = (a,b) => a%b ;
console.log ("El residuo es " + residuo(9,2));


// Funciones dentro de objetos *******

const participante = {
    nombre: "Jorge", 
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido
    },
    asiste: true
};

console.log("Nombre de participante : " + participante.nombreCompleto());