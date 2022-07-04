console.log("Sesión JS02 Funciones");

//Function Declaration ***************************************************************
function multiplica(a,b){
    return a*b;
}

console.log("El resultado de multiplicar es = " + multiplica(3,5));

//console.log("El resultado de mupltiplica es " + 15);
//

//Function expression **************************************************************

const suma= function (a,b){ return a + b };
const mult= function (a,b){ return a * b };
console.log("El resultado de la suma es = " + suma(5,4));

//Uso de las funciones **************************************************************
function areaCuadrado(funcion , lado){
    return funcion(lado, lado); //mult(5 , 5)
}

///Función expresada
console.log("El área del cuadrado es = " +areaCuadrado(mult, 5));  //No hay hoisting

const div = function(a,b) {return a/b};

//Self Invoking Functions
//Funciones que se autoinvocan


(function(){
    console.log("Mensaje de función autionvicada");
})()


//Método de argumentos
function perimetroRec(ladoA=2, ladoB=3){
    console.log("Perímetro Rectángulo "+ (2*(ladoA+ladoB)));
    console.log("Parámetros "+ arguments.length);
    console.log("Valor de this =  "+ this.ladoA);
}

perimetroRec(5,2);

function encuentraMayor(){
    let mayor = 0;
    for(let index =0; index < arguments.length; index++){
        if(arguments[index]> mayor){
            mayor= arguments[index];
        }
    }
    return mayor;
}
console.log("El número mayor es = "+ encuentraMayor(2,5,7,8,82,64,79,98));

//Arrow Functions *******************************************************

//const residuo = (a,b ) =>  {return a % b}; //Si es una sola instrucción, podemos quitar las llaves y el return.
const residuo = (a, b) =>  a % b ;
console.log("El residuo es = " + residuo(9,2));


//Funciones dentro de objetos ******************************************************

const participante = {
    nombre: "Sebastian",
    apellido: "Alejandro",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    asiste : true
};

console.log("Nombre participante : "+ participante.nombreCompleto() );