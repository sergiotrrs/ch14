/**
 * SCRIPT para dar funcionalidad a tabla que adivina
 * la fecha de un día dado en campos de input, por un_ USER,
 * realizado por jatg-eca, abue, el 30/05/22 @GenerationMx
 **/
//console.log("Link");

//Se declaran variables generales para mes, anio y día, obtenidas de input value
let day;
let month;
let year;

function calcDay() {
//Se ponen números en enteros, para evitar que pongan decimales
day = parseInt(day);
month = parseInt(month) - 1;
year = parseInt(year);

//Se utiliza una función que cambia a string el mes del USER
switchMonth(month);

//Se concatenan las tres variables y se pasan a new Date, para obtener la fecha
let userDate = new Date("" + day + month + year);
console.log(userDate);
//Se obtiene el número del día de la semana en la fecha dada
let dayOfWeek = userDate.getDay();

//Se realiza una función que decide la info del day of week, y muestra el resultado en pantalla
switchDay(dayOfWeek);

//Se revisa con un concatenador ternario si es dia laboral o fin de semana, y muestra el resultado en pantalla
(dayOfWeek == 7 || dayOfWeek == 8) ?document.getElementById("weekend").innerHTML = 
"Fin de semana" : document.getElementById("weekend").innerHTML = "Día laboral";
}

//Esta función actualiza valores en variables day, month y year, según ponga USER
function getValue() {
    console.log("Funca botón");
    day = document.getElementById("day").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
}

//Esta función apunta al texto en el HTML de la tabla donde se muestra el resultado del día
//y cambia el texto según lo que se ponga en el parámetro
function displayDayHTML (element) {
    document.getElementById("result").innerHTML = element;
}

//La función es un SWITCH que cambia datos en el HTML según la información del getDay();
function switchDay(day) {
switch(day) {
    case 1:
        displayDayHTML ("Lunes")
        break;
    case 2: 
        displayDayHTML("Martes");
        break;
    case 3:
        displayDayHTML("Miercoles");
        break;
    case 4:
        displayDayHTML("Jueves");
        break;
    case 5:
        displayDayHTML("Viernes");
        break;
    case 6:
        displayDayHTML("Sabado");
        break;
    case 0:
        displayDayHTML("Domingo");
        break;
    default:
        document.getElementById("result").innerHTML = "Creo que falta cambiar algo en las fechas. \
        ¿Podemos volver a llenar con números?";
        break;
}
}

//Esta función cambia el mes de formato numérico a formato string, para pasar el dato a new Date()
function switchMonth (element) {
    switch(element) {
        case 0: {
            month="January";
            break;
        }
        case 1: {
            month=("February");
            break;
        }
        case 2: {
            month=("March");
            break;
        }
        case 3: {
            month=("April");
            break;
        }
        case 4: {
            month=("May");
            break;
        }
        case 5:{
            month=("June");
            break;
        }
        case 6:{
            month=("July");
            break;
        }
        case 7: {
            month=("August");
            break;
        }
        case 8:{
            month=("September");
            break;
        }
        case 9: {
            month=("October");
            break;
        }
        case 10: {
            month=("November");
            break;
        }
        case 11: {
            month=("December");
            break;
        }
        default:
            console.log("No pude leer ese número. ¿podemos poner otro?");
            break;
    }
    }