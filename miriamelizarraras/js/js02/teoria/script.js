//Function declaration

function multiplica(a , b){
    return a * b;
}

console.log("El resultado de multipica es " + multiplica(3,5));
//console.log("El resultado de la multipica es " +15);
//console.log("El resultado de la multipica es 15);

//Funtion expresion
const suma = function (a,b){ return a+b};
console.log("El resultado de la suma " + suma(5,4));

//Uso de las funciones*****
function areaCuadrado( funcion, lado){
    return funcion(lado, lado);
}

console.log("El área del cuadrado es " + areaCuadrado (multiplica, 5 ));

//Hoisting****

console.log("El resultado de la resta es " + resta(10,3));
///Para funciones expresadas no se aplica el hoisting.
//console.log("El resultado de la resta es" + div(10,3));

function resta(a, b) {
    return a*b;
}

//Self-Invoking Functions****
//Funciones que se autoinvocan
(function(){
    console.log("Mensaje desde función autoinvocada");
})();

//Método de argumentos *****
function perimetroRec(ladoA=2, ladoB=3){
    console.log("Perimetro Rectángulo " + (2*(ladoA+ladoB)));
    console.log("Parámetros " + arguments.length);
///arguments.length me da los parametros que tiene 
    console.log("Valor de this " + this);
}

perimetroRec(5,2);

function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
      if (arguments[index]>mayor){
        mayor = arguments[index];
      }
    }
    return mayor;
}
console.log("El número mayor es " + encuentraMayor(2,5,7,8,87,45));

//Arrow Functions ****

const residuo = (a,b) => {return a%b} ;
console.log("El residuo es " + residuo(9,2));
///La función flecha es muy usada porque nos ahorramos la palabra return

//Funciones dentro de objetos ****

const participante = {
    nombre: "Jorge", 
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    },
    asiste: true
};
console.log("Nombre participante : " + participante.nombreCompleto());

console.log("¿El participante asiste? : " + participante.asiste);

