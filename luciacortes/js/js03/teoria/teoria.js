console.log("Teoría de la sesión JS03");
//Declaración del bloque**************
let nombre = "Sebastián"
{
    //Este código está en un bloque
    let nombre = "Valeria";
    var apellido = "Mojica";//no usar var
    console.log("Nombre: " + nombre);
}//aquí termina el bloque
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);// Si imprime el apellido por el uso de var

//Condicional if
let edad = 15
console.log("instrucción antes de if");
if (edad > 18) console.log("if se ejecuta si la condición es verdadera");
//el if ejecuta solo una instrucción, aun sin llaves está dentro de la codición.
console.log("es mayor de edad");

//el bloque con llaves para más de una instrucción
if (edad > 18) {
    console.log("es mayor de edad");
    console.log("if se ejecuta si la condicón es verdadera");
} else {
    console.log("si la condición es falsa, se ejecuta else");
}
console.log("Instrucción después de if");

//Condicional if, else if, else *****
edad = -100;
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
} else
    if (edad > 15) {
        console.log("Es adolescente");
    } else
        if (edad > 6) {
            console.log("Es infante");
        } else {
            console.log("Es bebé");
        }
console.log("instrucción después de if");
//Identado para entender cómo lo está leyende, una dentro de otra. No se recomienda acomodar así

//Switch*************************************
//Usado para uno o más bloques de código. switch(expresion a evaluar){caso x: ... break caso y:... break deafault: ...}
let opcionElegida = 2;

switch (opcionElegida) { //La evaluación es de forma estricta
    case 0:
        console.log("Se accedió a ventas");
        let submenu = 2;//un switch anidado
        switch (submenu) {
            case 0:
                console.log("Acá amamos los dinosaurios");
                break;
            default:
                console.log("Cualquier opción, nos quedamos con los dinos");
                break;
        }
        break;
    case 1:
        console.log("Se accedió a crédito");
        break;
    case 2: {//un switch anidado con las llaves de bloque para que no guarde la variable y no tenga errores en otros submenus
        let submenu = 2;
        switch (submenu) {
            case 0:
                console.log("Pagame");
                break;
            default:
                console.log("Embargo");
                break;
        }
        console.log("Se accedió a cobranza"); //si no tiene el break continúa con todas las opciones hasta que encuentre un break.
        break;
    }
    case 9:// este caso está evaluando la opción pero esta vacío entonces pasa al siguiente hasta que encuentra un break 
    case 3://no se pueden usar operadores lógicos
    case 4:
    case 5:
        console.log("Se transfiere con un operador");
        break;
    default:
        console.log("Opción inválida");
        break;//no importa la posición de default. Generalmente se pone al final
}
console.log("Instrucción despues del case");
//******************************** */
let Animal = 'Dinosaurio';
switch (Animal) {
    case 'Vaca':
    case 'Jirafa':
    case 'Perro':
    case 'Cerdo':
        console.log('Este animal subirá al Arca de Noé.');
        break;
    case 'Dinosaurio':
    default:
        console.log('Este animal no lo hará.');
}
//Condicional ternario****************************************
//Es como un if chiquito <3
//Se pueden agregar mas cosas con un bloque, pero se recomienda con solo if else.
//Siempre es necesario un else
edad = 19;
let esMayor =(edad>=18) ? "puede votar": "No puede votar";
console.log("¿Puede votar? "+ esMayor);

// ejercicio de comparación**************

let age="18"
let voteable;
age = Number(age);
if(isNaN(age)) {// evalúa si es un número o no, si no es ejecuta esta parte del código.
    voteable ="Input is not a number";// es un filtro para convertir el string en número
}else{
    voteable = (age < 18) ? "Too young":"Old enough";
}
console.log(voteable)
