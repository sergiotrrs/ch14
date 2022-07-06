console.log ("Sesión js02 funciones");

// Function declaration (declarando la variable)

function multiplica(a,b){ 
    return a*b;
}
//  imprime el resultado
console.log("el resultado de la multiplicación es: " + multiplica ( 3 , 5 ) );


// ***********************************************************************

// Function expresion*****************************************************
const suma= function(a,b){return a + b };
const mult= function(a,b){return a * b };  
console.log("el resultado de la suma es " + suma(5,4));

// diferencia entra la funcion suma y la funcion multiplicacion

// uso de las funciones****************************************************

function areaCuadrado(  funcion, lado){
    return funcion( lado, lado);
}
// la funcion que ocupamos es la de la linea 16, no se puede usar aqui la funcion declarada, se retira 
// lo dicho anteriormene, si jala con la primera funcion declarada xD
console.log("El área del cuadrado es " +areaCuadrado(mult, 5) );


// function Hoisting ** Eleva o suube la funcion para que se pueda utilizar, esto es porque 
// el console.log esta antes de la funcion, y sin el hoistign me marcaria error

// console.log("El resultado de la resta es: " + resta(10,3) )
// En la linea 36 queremos que realice la funcion de la linea 43, pero el hoistih no funciona para las funciones expresadas

function resta(a,b){
    return a - b;
    }

    // funcion expresada
    const div = function ( a, b ){return a / b };

    // self-Invoking Functions***************************************************************************
    // funciones que se autoinvocan 
    (function (){
        console.log("Mensaje desde función autoinvocada");
    })()

    //Método de argumentos********************************************************************************
    function perimetroRec (ladoA = 2, ladoB = 3){
        console.log("Perímetro Rectangulo " + (2*(ladoA+ladoB)));
       
        // arguments ya es palabtra reservada (Nos dice cuantos argumentos de entrada recibimos )
        console.log("parámetros " + arguments.length);
        // console.log("Valor de this " + this );

    }
    perimetroRec(5,2);

    // En esta funcion ya no se le declara ningun valor al inicio de la funcion o algo asi
    function encuentraMayor(){
        let mayor = 0;
        // for
        for (let index = 0; index < arguments.length; index++) {
            if (arguments[index]>mayor){
                mayor = arguments[index];
            }
            
        }
        return mayor;
    }
    console.log("el número mayor es " + encuentraMayor(5,6,7,81))

    // Arrow function *******************************************
    const residuo = (a, b)=> a % b;
    console.log("El residuo es " + residuo(8, 2) );

    // Funciones dentro de objetos
    const participante ={
        nombre: "Jorge",
        apellido: "Montalvo", 
        nombreCompleto: function(){
            return this.nombre+ " " +this.apellido;
        },
        asiste: true
    };
    console.log("Nombre participante: " + participante.nombreCompleto() );