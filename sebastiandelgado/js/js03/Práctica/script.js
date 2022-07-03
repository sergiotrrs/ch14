console.log("Prueba de inicio");
//Función que hará calcular el día en específico y saber el día de la semana
function calculaDia() {
    //Declaración de variables
    let fecha, dia, mes, año;
    let datoCase;
    let diaSemana;
    //fecha = new Date(document.getElementById("año"), document.getElementById("mes"), document.getElementById("dia"));
    //fecha = document.getElementById("dia") ,"/", document.getElementById("mes") , "/", document.getElementById("año");
    //console.log("La fecha de prueba es: " + fecha);

    //Asignación de datos a variables día, mes y año
    dia = parseInt(document.getElementById("dia").value);
    mes = parseInt(document.getElementById("mes").value);
    año = parseInt(document.getElementById("año").value);
    //Condicional para no poner días no existentes o años menores a 1
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
    //Prueba de asignación correcta de fecha
    console.log("La fecha que se capturó es: " + dia + "/" + datoCase + "/" + año);

    //Creación de un arreglo para los días de la semana
    const semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    //Asignación al atributo Date con la fecha estimada 
    //---------------DUDA: Se puede sin hora????
    fecha = new Date(mes + " " + dia + " " + año + " 12:00:00");
    //Con el método getDay() se obtiene el día de la semana de la fecha en específico y se asigna a la variable
    diaSemana = semana[fecha.getDay()];
    //Prueba de asígnación del día de la semana:
    console.log(`El día de la semana de la fecha introducida es: ${diaSemana}`);

    //Condicional: si es sábado o domingo, se improme que es dia NO laborable, de lo contrario SÍ lo es:
    if (diaSemana == "Sábado" || diaSemana == "Domingo") {
        document.getElementById("resul").innerHTML = "El día es: " + diaSemana + ", es día NO laborable";
        console.log("Es día no laborable ");
    } else {
        document.getElementById("resul").innerHTML = "El día es: " + diaSemana + ", es día laborable";
        console.log("Es día laborable ");
    }
}
//Botón de limpiar información
function btnClean() {
    document.getElementById("dia").value = "";
    document.getElementById("año").value = "";
    document.getElementById("resul").innerHTML = "Resultado";
    document.getElementById("mes").value = "Enero";
}
