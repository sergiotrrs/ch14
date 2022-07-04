let fecha, dia, mes, año, datoCase, diaSemana;

function calculaDia() {
    //Inicializamos dia, mes y año
    dia = parseInt(document.getElementById("dia").value);
    mes = parseInt(document.getElementById("mes").value);
    año = parseInt(document.getElementById("año").value);
    //Establecemos limites en los digitos acordes al calendario gregoriano (Febrero no vale)
    if (dia < 1 || dia > 31 || año < 1) {
        alert("No son días válidos, inténtalo de nuevo")
        document.getElementById("dia").value = "";
        document.getElementById("año").value = "";
    }
    //Implementación de Switch para asignar el mes a cada opción del input de enero a diciembre en inglés
    switch (mes) {
        case 1: datoCase = "January"; break;
        case 2: datoCase = "February"; break;
        case 3: datoCase = "March"; break;
        case 4: datoCase = "April"; break;
        case 5: datoCase = "May"; break;
        case 6: datoCase = "June"; break;
        case 7: datoCase = "July"; break;
        case 8: datoCase = "August"; break;
        case 9: datoCase = "September"; break;
        case 10: datoCase = "October"; break;
        case 11: datoCase = "November"; break;
        case 12: datoCase = "December"; break;
    }
    
    //array para nombre de los 7 dias
    const semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    //Creacion de fecha
    fecha = new Date(mes + " " + dia + " " + año + " 12:00:00");
    //Se asigna en nombre del dia con getDay 
    diaSemana = semana[fecha.getDay()];
    //Se crea la condicion para saber si es laboral o no
    if (diaSemana == "Sábado" || diaSemana == "Domingo") {
        document.getElementById("resul").innerHTML = "El día es: " + diaSemana + ", es día no es laboral, descansaste asalariado contribuyente";
        console.log("Es día no laborable ");
    } else {
        document.getElementById("resul").innerHTML = "El día es: " + diaSemana + ", si es laboral, esclavo del sistema";
        console.log("Es día laborable ");
    }
}
//Paro de emergencia
function btnClean() {
    document.getElementById("dia").value = "";
    document.getElementById("año").value = "";
    document.getElementById("resul").innerHTML = "Resultado";
    document.getElementById("mes").value = "Enero";
}
