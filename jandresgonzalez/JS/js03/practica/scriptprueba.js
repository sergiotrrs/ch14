/**
 * SCRIPT para dar funcionalidad a tabla que adivina
 * la fecha de un día dado en campos de input, por un_ USER,
 * realizado por jatg-eca, abue, el 30/05/22 @GenerationMx
 **/
//console.log("Link");

/*
let fechaPrueba = new Date("2July2022");

console.log(fechaPrueba);

day = date.getDay();
month = date.getMonth();
console.log(`El día es el ${day} de la semana (0-6)`);
console.log(`El mes es el ${month} del anio (0-11)`);
*/

//Estas variables guardan el value que USER ponga en los input del HTML
let userInputDay;
let userInputMonth;
let userInputYear;

//Una función va a obtener los value de los input, y se va a vincular al SUMBIT con propiedad onclick

userInputDay = 30;
userInputMonth = "January";
userInputYear= 2022;

const date = {userInputDay, userInputMonth, userInputYear}
console.log(date)

//Los valores que se obtengan se pondrán en una string para date
console.log("" + userInputDay + userInputMonth + userInputYear);
let jum= new Date ("" + userInputDay + userInputMonth + userInputYear);
console.log(jum);

//Y se regresan day
let day = jum.getDay();

/*
switch(month) {
    case 0:
    case 00:
     {
        month="January";
        break;
    }
    case 1:
    case 01: {
        console.log("February");
        break;
    }
    case 2:
    case 02: {
        console.log("March");
        break;
    }
    case 3:
    case 03: {
        console.log("April");
        break;
    }
    case 4:
    case 04: {
        console.log("May");
        break;
    }
    case 5:
    case 05: {
        console.log("June");
        break;
    }
    case 6:
    case 06: {
        console.log("July");
        break;
    }
    case 7:
    case 07: {
        console.log("August");
        break;
    }
    case 8:
    case 08: {
        console.log("September");
        break;
    }
    case 9:
    case 09: {
        console.log("October");
        break;
    }
    case 10: {
        console.log("November");
        break;
    }
    case 11: {
        console.log("December");
        break;
    }
    default:
        console.log("No pude leer ese número. ¿podemos poner otro?");
        break;
}
*/

switch(day) {
    case 1: {
        console.log("Lunes, día laborable");
        break;
    }
    case 2: {
        console.log("Martes, día laborable");
        break;
    }
    case 3: {
        console.log("Miércoles, día laborable");
        break;
    }
    case 4: {
        console.log("Jueves, día laborable");
        break;
    }
    case 5: {
        console.log("Viernes, día laborable");
        break;
    }
    case 6: {
        console.log("Sábado, fin de semana");
        break;
    }
    case 0: {
        console.log("Domingo, fin de semana");
        break;
    }
    default:
        console.log("Creo que falta cambiar algo en las fechas. \
        ¿Podemos volver a llenar con números?");
        break;
}