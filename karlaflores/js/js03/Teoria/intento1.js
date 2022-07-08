
/*
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const sem = new Date();
let day = weekday[d.getDay()];
document.getElementById("semana").innerHTML = day;

const dia = new Date();
let d = d.getDate();
document.getElementById("dia").innerHTML = day;

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const mes = new Date();
let name = month[d.getMonth()];
document.getElementById("mes").innerHTML = name;
*/

/**
 * Función que toma el mes en número, según lo define el usuario
 * @returns el nombre del mes
 
 function obtenerMes(){
    const mm=parseInt(document.getElementById("mes").value);
    switch (mm) {
        case 1: return "January";
        break;
        case 2: return "February";
        break;
        case 3: return "March";
        break;
        case 4: return "April";
        break;
        case 5: return "May";
        break;
        case 6: return "June";
        break;
        case 7: return "July";
        break;
        case 8: return "August";
        break;
        case 9: return "September";
        break;
        case 10: return "October";
        break;
        case 11: return "November";
        break;
        case 12: return "December";
        break;
        default: window.alert("Mes entre 1 y 12");;
        break;
    }
}

/**
 * Función que toma un número
 * @returns el nombre del día
 */
function obtenerDia(num){
    switch (num) {
        case 0: return "Domingo";
        break;
        case 1: return "Lunes";
        break;
        case 2: return "Martes";
        break;
        case 3: return "Miércoles";
        break;
        case 4: return "Jueves";
        break;
        case 5: return "Viernes";
        break;
        case 6: return "Sábado";
        break;
        default: window.alert("Día entre 0 y 6 (Domingo a Sábado)");;
        break;
    }
}

/**
 * Función que toma un número de día
 * @returns el tipo de día laborable o fin de semana
 */
function clasificaDia(num){
    switch (num) {
        case 0: 
        case 6: return "Fin de semana";
        break;
        case 1: 
        case 2: 
        case 3: 
        case 4: 
        case 5: return "Día laborable";
        break;
    }
}

/**
 * Función que toma el día, el mes y el año definidos por el usuario
 * @returns el tipo de día que fue (laborable o fin de semana)
 
function tipoDia(){
    const dd=parseInt(document.getElementById("dia").value); //obtiene el número de día
    const mm=obtenerMes(parseInt(document.getElementById("mes").value)); //obtiene el nombre del mes
    const aaaa=parseInt(document.getElementById("año").value); //Obtiene el año
    const d=new Date(mm+" "+dd+", "+aaaa); //Calcula la fecha asociada a los datos numéricos
    document.getElementById("tipoFecha").innerHTML = clasificaDia(d.getDay()); //Asocia el tipo de día al segundo cuadro de respuesta
    document.getElementById("diaFecha").innerHTML = obtenerDia(d.getDay())+","; //Asocia el día al primer cuadro de respuesta

}
*/