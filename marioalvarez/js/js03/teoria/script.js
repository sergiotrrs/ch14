console.log("Teroria de la sesión js03");

//Declaración de bloques
//Este código esta en un bloque
{
    let nombre = "Mario";
    console.log("Nombre:" + nombre);
}
//Esta fuera del scoop de la variable nombre, marcará undifined
//console.log("Numbre fuera de bloque", nombre)}  

/*var no tiene scope de la variable, asi que funciona el código
    {
        var nombre="Mario";
        console.log("Nombre:"+nombre);
    }
    console.log("Numbre fuera de bloque", nombre);
*/

/*************************CONDICIONAL IF********************* */
let key = true;
console.log("Antes");
if (key) {
    console.log("Se ejecuta si la condición es true");
} else {
    console.log("Se ejecuta si la condicion es false");
}
console.log("Después");

/*************************CONDICIONAL IF ELSE IF********************* */

let edad = 10;
if (edad > 18)
    console.log("Es adulto");
else if (edad > 15)
    console.log("Es  adolescente");
else if (edad > 6)
    console.log("Es un niño");
else
    console.log("Es un bebe");

/*************************SWITCH********************* */

let eleccion = 3;
switch (eleccion) { // la evaluación es de forma estricta(===)
    case 1:
        console.log("Se accedió a ventas");
        break;
    case 2:
        console.log("Se accedió a crédito");
        break;
    /*A pesar de que el default está aqui, evaluará primero todos los cases
    por lo tanto la salidad sera la del case 3, cuando eleccion es 3*/
    default:
        console.log("Opción invalida");
        break;
    case 3:
        console.log("Se accedió a cobranza");
        break;
    /*Con 6 y 9 entra a la misma opcioón*/
    case 6:
    case 9:
        console.log("Se transfiere a recursos humanos");
        break;
}

/****************************CONDICIONAL TERNARIO *******************************/ 
//se utiliza con una sola intruccion pero si quisiera poner más, puedo poner un bloque
//let esMayor=(edad>=18)?{bloque1}:{bloque2};
//variable=(condicion)? value1, si es verdadera: value2, si es falsa;
edad=19;
let esMayor=(edad>=18)? true:false;
console.log("¿Puede votar? "+esMayor);

/************************* EJERCICIO DE COMPARACIÓN*************************************************/
let age = "19m"
let voteable;
age = Number(age);
/*isNaN para filtrar información */
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}


