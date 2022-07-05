console.log("secion JSO funciones");

//Funtion declaracion 


function multiplica(a,b) {
    return a*b;
}

console.log("El resultado de multiplicar es" + multiplica(3,5));
 // console.log("El resultdo de multiplicar es "+ 15);
 // coonsole.log("El resultado de multiplicar es 15");
 //***************************** */


 // funtion expresada 
 const suma = function(a,b){ return a + b; };
 console.log("El resultado de la suma es "+ suma(5,4));

 // Uso de la funciones 
 
 function areaCuadrada(funcion, lado) {
    return funcion(lado , lado);
 }

 console.log("El área cuadrda es " + areaCuadrada(mult, 5));


// Hoisting

console.log("El resultado dela resta es " + resta(10,3));
// Para funciones expresadas no se aplica el histing.
console.log("El resultado de la resta es"+ dispatchEvent(18,3));
function resta(a,b) {
    return a-b;
}

const div = function(a,b) {return a/b};

// Self-Invoking funtion******
// funcion que se autoinvoca


(function(){
    console.log("Mensaje desde funcion autoinvocada");
})();


// Metodo de argumentos ****************

function perimetroRec(ladoA,ladoB) {
    console.log("Perimetro Rec"+ (2*(ladoA+ladoB)));
    console.log("perimetros"+ arguments.length);
    console.log("Valor de this"+ this.ladoA );
}

perimetroRec(5,2);

function encuentraMayor() {
    let mayor = 0;
    for (let index = 0; index < arguments.length; index++) {
        mayor = arguments[index];
        
    }
    return mayor;
}

console.log("El número mayor es" + encuentraMayor(2,5,7,81,21));


const residuo = (a-b) => a % b;
console.log("El residuo es "+ residuo(9,2));




// funcionn dentro de objetos 

const participantes = {
    nombre "Jorege",
    nombre: "Moltalvo",
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    },
    asiste: true 

};

console.log(" Nombre participante: " + participantes.nombreCompleto( ));
console.log("El participante asiste"+ participante.asiste);