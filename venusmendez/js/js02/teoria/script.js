console.log("Sesión JS02");

//Función declarada
function multiplica(a,b){
    return a*b;
}

console.log("El resultado es: "+multiplica(3,5));

//Function expression
const suma=function(a,b){return a+b}
const mult=function(a,b){return a*b}
console.log("El resultado de la suma es: "+suma(5,4));

//Uso de funciones
function areaCuadrado(funcion, lado){
    return funcion(lado, lado);
}

console.log("El área del cuadrado es: "+areaCuadrado(mult,5));

//Hoisting
console.log("El resultado de la resta es: "+resta(10,3));

function resta(a,b){
    return a-b;
}

//Para funciones expresadas no funciona el hoisting
console.log("El resultado de la división es: "+div(10,3));

const div=function (a,b){return a/b};

//Self-Invoking Functions
(function(){
    console.log("Mensaje desde función auto invocada");
})();


//Método de argumentos
function perimetro(ladoA=2, ladoB=3){
    console.log("Perímetro: "+2*(ladoA+ladoB));
    console.log("Parámetros: "+arguments.length);
    console.log("Valor de this "+ this.arguments);
}

perimetro(5,2);

function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < array.length; index++) {
        if(arguments[index]>mayor){
            mayor= array[index];
        } 
    }
    return mayor;
}

console.log("El número mayor es: "+ encuentraMayor(2,5,7,81,21));


//Arrow functions
const residuo=(a,b) => a%b;
console.log("El residuo es "+ residuo(9,2));

//Funciones dentro de objetos
const participante={
    nombre:"Jorge",
    apellido:"Montalvo",
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    },
    asiste: true
};

console.log("Nombre participante: "+ participante.nombreCompleto());
console.log("¿El participante asiste?: "+ participante.asiste);

// uso de función flecha con arreglos
let arr = [1,2,4,5];

let array=[];
for (let i=0; i < arr.length ; i++ ) {
    array[i] = arr[i] *2;
}
console.log(array);

let array2=[]
arr.forEach( dato => array2.push(dato*2));
console.log(array2);