console.log("teoria de la sesión js03");

// DECLARACIÓN DE BLOQUE************************************************************************************************************************

let nombre = "sebastian";

{// ESTE CÓDIGO ESTA EN UN BLOQUE****************************************************************************************************************
let nombre = "Valeria";  /* aqui defino mi variable nombre*/
var apellido = "Mojica";  /* Con var si se imprime fuera del bloque, no le importa la vida, no le importa nada :( */ 
console.log("nombre " +nombre);  /*aqui mando a imprimir*/
}

 
console.log("nombre fuera del bloque: " + nombre);  /*aqui esta fuera del bloque, por lo que me saldra indefinido en la consola,agreo un let en la linea 5 y asi lo imprime*/
console.log("apellido fuera del bloque: " + apellido); /** se imprime lo de la linea 9 */

// CONDICIONAL IF********************************************************************************************************************************
let edad=15;
console.log("Instrucción antes de if");

//el if solo ejecutara lo que esta dentro del bloque {esto es un bloque}
if(edad > 18) {
    console.log("if se ejecuta si la condición es verdadera");
    console.log("es mayor de edad");
}else {
    console.log("si la condición esfalsa se ejecuta else");
}

console.log("instrucción despues del if")

// CONDICIONAL IF, IF ELSE, ELSE**********************************************************************************************************************
 edad = 3;
if (edad > 18){
    console.log("es mayor de edad, adulto");
} else if( edad > 15) {     /**Se pone otra condicion en el else if */
    console.log("es aborrecente");
}else if (edad >6){
    console.log("Es un menor");
} else {
    console.log("es un bebé");
}

// CONDICIONAL SWITCH******************************************************************************************************************************
let opcionElegida = 0;

switch(opcionElegida){  /*La evaluación es de forma estricta*/
    case 0:{
        console.log("Accedió a ventas");
        let submenu = 2
        switch(submenu){
            case 0:
                console.log("Acá amamos a los dinosaurios");
                break;
            default:
                console.log("Cualquier opción nos quedamos con los dinos");
        }
        break;
        }
        case 1: {
            console.log("Accedió a crédito");
            let submenu = 0;
            switch (submenu) {
              case 0:
                console.log("Págame");
                break;
              default:
                console.log("Elektra te tiene en la mira");
            }
            break;
        }

     case 2:
        console.log("Accedió a cobranza");
            break;
    case 9:   /**En las lineas 56, 57 y 58, como no se tiene nada va a apasar hasta llegar al case 5 y ejecutar la acción */
    case 3:
    case 4:
    case 5:
        console.log("Se transfiere a un asesor");
             break;
    default:
        console.log("opcioón inválida");
        break;
    
}
console.log("instruccion despues del case");

// let Animal = 'Dinosaurio';
// switch (Animal) {
//   case 'Vaca':
//   case 'Jirafa':
//   case 'Perro':
//   case 'Cerdo':
//     console.log('Este animal subirá al Arca de Noé.');
//     break;
//   case 'Dinosaurio':
//   default:
//     console.log('Este animal no lo hará.');
// }

//  OPERADOR TERNARIO
// ES COMO UN IF PERO EN CHIQUITO <3

edad = 17
let esMayor = (edad >= 18 )? "Puede votar" : "No puede votar" ;  /**es boleano */
console.log("¿Puede votar? " +esMayor);

// EJERCICIO DE COMPARACIÓN
let age = "18"    /**Aqui es string  en la linea 110 lo convertimos a numerico*/
age = Number(age);
if (isNaN(age)){   /** NaN pregunta si la variables es numero o no */
    voteable = "input is not a numbre";  /** voteable es variable, asi venia en el ejercicio */
}else {
    voteable = (age < 18)? "too young" : "old enougt";

}
console.log(voteable);