switch (mes) {
    case 0: //Enero
        if (day < 1 || day > 31) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
        break;
    case 1: //Febrero
        if (aniBisiesto == 0) {
            document.getElementById("anioBis").innerHTML = "El año es Bisiesto";
            if (day < 1 || day > 29) {
                diaError = document.getElementById("dia").value = "";
                alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 29");
            }
        } else {
            document.getElementById("anioBis").innerHTML = "El año no es Bisiesto";
            if (day < 1 || day > 28) diaError = document.getElementById("dia").value = "";
            alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 28");
        }
        break;
    case 2: //Marzo
        if (day < 1 || day > 31) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
        break;
    case 3: //Abril
        if (day < 1 || day > 30) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
        break;
    case 4: //Mayo
        if (day < 1 || day > 31) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
        break;
    case 5: //Junio
        if (day < 1 || day > 30) {
            diaError = document.getElementById("dia").value = "";
            alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
        }
        break;
    case 6: //Julio
        if (day < 1 || day > 31) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
        break;
    case 7: //Agosto
        if (day < 1 || day > 31) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
        break;
    case 8: //Sept
        if (day < 1 || day > 30) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
        break;
    case 9: //Oct
        if (day < 1 || day > 31) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
        break;
    case 10: //Nov
        if (day < 1 || day > 30) {
            diaError = document.getElementById("dia").value = "";
            alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 30");
        }
        break;
    default: //Dic
        if (day < 1 || day > 31) diaError = document.getElementById("dia").value = "";
        alert("Día invalido. Ingresa un dia de acuerdo dentro del rango de 1 a 31");
        break;
}