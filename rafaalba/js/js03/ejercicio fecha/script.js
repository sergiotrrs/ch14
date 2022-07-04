const datosFecha = () => { // const datosFecha = () =>{
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value - 1; //define el subindice del if del mes en 0 ; JS empieza con 0 y enero es 1 por eso -1 para niciar con 0
    let anio = document.getElementById("anio").value;
    const fecha = new Date(anio, mes, dia);
    // console.log(fecha);

    if(dia<1 || dia>31) {
       alert("Día invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
    }

    if (mes < 0 || mes > 12) {
        alert("Mes invalido. Ingresa un mes dentro del rango de 1 a 12");
        document.getElementById("mes").value = "";
    }

    if (anio < 1970 || anio > 2050) {
        alert("Año invalido. Ingresa un año dentro del rango de 1970 a 2050");
        document.getElementById("anio").value = "";
    }

    let anioBis;
    let diaSemana = fecha.getDay();

    // switch (mes) {
    //     case 0: //Enero
    //         if (dia < 1 || dia > 31) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
    //         break;
    //     case 1: //Febrero
    //         if (anioBis == 0) {
    //             document.getElementById("anioBis").innerHTML = "El año es Bisiesto";
    //             if (dia < 1 || dia > 29) {
    //                 diaError = document.getElementById("dia").value = "";
    //                 alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 29");
    //             }
    //         } else {
    //             document.getElementById("anioBis").innerHTML = "El año no es Bisiesto";
    //             if (dia < 1 || dia > 28) diaError = document.getElementById("dia").value = "";
    //             alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 28");
    //         }
    //         break;
    //     case 2: //Marzo
    //         if (dia < 1 || dia > 31) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
    //         break;
    //     case 3: //Abril
    //         if (dia < 1 || dia > 30) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
    //         break;
    //     case 4: //Mayo
    //         if (dia < 1 || dia > 31) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
    //         break;
    //     case 5: //Junio
    //         if (dia < 1 || dia > 30) {
    //             diaError = document.getElementById("dia").value = "";
    //             alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
    //         }
    //         break;
    //     case 6: //Julio
    //         if (dia < 1 || dia > 31) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
    //         break;
    //     case 7: //Agosto
    //         if (dia < 1 || dia > 31) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
    //         break;
    //     case 8: //Sept
    //         if (dia < 1 || dia > 30) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
    //         break;
    //     case 9: //Oct
    //         if (dia < 1 || dia > 31) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
    //         break;
    //     case 10: //Nov
    //         if (dia < 1 || dia > 30) {
    //             diaError = document.getElementById("dia").value = "";
    //             alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
    //         }
    //         break;
    //     default: //Dic
    //         if (dia < 1 || dia > 31) diaError = document.getElementById("dia").value = "";
    //         alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
    //         break;
    // }

    switch (diaSemana) {
        case 0:
            document.getElementById("diaSemana").innerHTML = "Domingo, Día inhabil";
            break;
        case 1:
            document.getElementById("diaSemana").innerHTML = "Lunes, Día habil";
            break;
        case 2:
            document.getElementById("diaSemana").innerHTML = "Martes, Día habil";
            break;
        case 3:
            document.getElementById("diaSemana").innerHTML = "Miercoles, Día habil";
            break;
        case 4:
            document.getElementById("diaSemana").innerHTML = "Jueves, Día habil";
            break;
        case 5:
            document.getElementById("diaSemana").innerHTML = "Viernes, Día habil";
            break;
        case 6:
            document.getElementById("diaSemana").innerHTML = "Sabado, Día inhabil";
            break;
        default:
            document.getElementById("diaSemana").innerHTML = "No sabria que decirte";
            break;
    }

    //Bis = 0
    //NoBis = decimal
    anioBis = anio % 4;

    switch (anioBis) {
        case 0:
            document.getElementById("anioBis").innerHTML = "Bisiesto"
            break;

        default:
            document.getElementById("anioBis").innerHTML = "No bisiesto"
            break;
    }

}
function borrar() {
    document.getElementById("dia").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("anio").value = "";
    document.getElementById("Respond").value = "";
    document.getElementById("anioBis").value = "";
}