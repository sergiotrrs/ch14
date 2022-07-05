//Obtener la fecha determinada
/**
 * @param {int} anio
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () =>{ 
/*     //Se manda llamar a la función Date() que se almacena en la constante día
    const dia = new Date(Number(document.getElementById("anio").value),String(document.getElementById("mes").value)-1, Number(document.getElementById("dia").value));
    console.log(dia);
    //Se coloca -1 en el mes por el año bisiesto 
    document.getElementById("fecha").value = definirFecha(dia.getDay()); //Se manda llamar a la función definirFecha 
 SHIFT ALT A pa comentar*/

const formulario = document.getElementById("form");
let day = formulario.elements['dia'].value;
let month = formulario.elements['mes'].value - 1;
let year = formulario.elements['anio'].value;
const dia = new Date(
    year,
    month,
    day
);

if (formulario.elements['anio'].value == 0 || formulario.elements['dia'].value == 0) {
    window.alert("Por favor, ponga fecha en los campos indicados.");
}
else {
/*
else {
    if (month == 1 || 
        month == 3 ||
        month == 5 ||
        month == 7 || 
        month == 8 ||
        month == 10 ||
        month == 12 &&
        day >=32) {
        window.alert(`El mes ingresado tiene 31 días. Por favor, ingrese otro día`);
        day = 31;
    }
    else if (month == 4 ||
            month==6 ||
            month==9 ||
            month==11 &&
            day >=31) {
        window.alert(`El mes ingresado tiene 30 días. Por favor, ingrese otro día`);
        day = 30;
    }
    else if (month == 2) {
        if (year%4 == 0) {
            window.alert(`El mes ingresado tiene 29 días en bisiesto. Por favor, ingrese otro día`);
            day = 29;
        }
        else {
            window.alert(`El mes ingresado tiene 28 días, si el año no es bisiesto. Por favor, ingrese otro día`);
            day=28;
        }
    } */
    formulario.elements['fecha'].value = definirFecha(dia.getDay());
}
}


//Función para indicar el día y si es laborable
/**
 * 
 * @param {int}  dia 
 * @return "'Día', fin de semana o 'Día', día lavorable"
 */
function definirFecha(dia){
    switch(dia){
        //Se inicializa 0 porque Date() comprende los día del 0 al 6
        case 0: 
            return "Domingo, fin de semana";   
        case 1:
            return "Lunes,  día laborable";
        case 2:
            return "Martes,  día laborable";
        case 3:
            return "Miércoles,  día laborable";
        case 4:
            return "Jueves,  día laborable";
        case 5:
            return "Viernes, día laborable";
        case 6:
            return "Sábado, fin de semana";
        default:
            return "Llenemos de nuevo los datos";
            
    }
}