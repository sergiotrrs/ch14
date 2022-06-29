/**
 * 
 * Ejercicios de teoría de JS03.
 * Realizados en 29/06/22
 * atGenerationMexico
 * 
 **/
console.log("TeoríaCS03");

let nombre = "Santis";

//Block declaration
{
    // Código en un bloque
    //Este flujo de trabajo tiene su propio variable scope
    let nombre = "ValeriaMojica"
    //variable scope de var es más grande, sin importan declaración de bloque
    var apellido = "Gayosso";

    console.log(nombre);
}
console.log("Var jala todo el apellido: " + apellido);

//If se realiza cuando el statement en parámetro es verdadera
if (nombre) {
    console.log("Le gusta el color");
}
else {
    console.log("No hay nombre");
}

//If en una línea:
if (true) console.log("Se ejecuta esta línea");

let edad = 3;
if (edad > 18) console.log("veamos edad");
//aquí no se ejecutaría lo del if
//console.log("es mayor de edad");

//if en bloque
if (edad > 18) {
    console.log("Esto se ejecutó en bloque");
}
else {
    console.log("Chales, no es mayor de edad");
}

//If, else if, else

if (edad >= 18) {
    console.log("Mayor de edad");
}
else if (edad >= 15 && edad < 18) {
    console.log("Adolescente");
}
else if (edad < 15 && edad > 6) {
    console.log("Es un niñ__");
}
else {
    console.log("Es un_ baby");
}

/* Se vería así, en realidad
if (edad >= 18) {
    console.log("Mayor de edad");
}
else
    if (edad >= 15 && edad < 18) {
        console.log("Adolescente");
    } else
        if (edad < 15 && edad > 6) {
            console.log("Es un niñ__");
        } else {
    console.log("Es un_ baby");
            }
*/

/**
 * SWITCH
 * Para hacer SWITCH
 * Se realiza un menú de operadora de call center
 * como ejemplo
 */

let opcionElegida = 2;
/*Para switch, la opción se evalúa como === estrictamente igual,
en valor y tipo */
switch (opcionElegida) {
    case 1: console.log("Se eligió uno, para Ventas");
        break;
    //se estructura case 2 por bloques
    case 2: {
        console.log("Se eligió dos, para Asistencia");
        let submenu = 2
        switch (submenu) {
            case 1: console.log("Seleccionó uno en submenu");
                break;
            case 2: console.log("Selección dos en submenu");
                break;
            default: console.log("Inválido en submenú");
                break;
        }
        break;
    }

    case 0: console.log("Se eligió cero, para Operador_");
        break;
    default: console.log("Opción inválida. Repetir menú.");
        break;
}

/*Use switch instead of if when:

You are comparing multiple possible conditions of an expression
and the expression itself is non-trivial.
You have multiple values that may require the same code.
You have some values that will require essentially
all of another value's execution, plus only a few statements.
Use if instead of switch when:

You want to test for the truthiness of an expression.
You only have a single affirmative test.
You need to evaluate different expressions for each branch */

let Animal = 'Jirafa';
switch (Animal) {
    case 'Vaca':
    case 'Jirafa':
    case 'Perro':
    case 'Cerdo':
        console.log('Este animal subirá al Arca de Noé.');
        break;
    //Todo esto se ejecuta si hay estos animales arriba
    //En caso de que sea dinosaurio o cualquier otro, no suben al arca
    case 'Dinosaurio':
    default:
        console.log('Este animal no lo hará.');
}


/**
 *-------- Conditional Ternary Operator -------------
 */

 edad = 5;
 let esMayor = (edad >= 18) ? "Puede votar" : "No puede votar";
 console.log("¿Puede votar? " + esMayor);

 /*let stop = false, age = 23;

age > 18 ? (
    alert("OK, puedes continuar."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Disculpa, eres menor de edad!")
); */

//Otro if

let age = "Montse";
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = console.log("Input is not a number");
} else {
  voteable = (age < 18) ? console.log("Too young") : console.log("Old enough");
}
