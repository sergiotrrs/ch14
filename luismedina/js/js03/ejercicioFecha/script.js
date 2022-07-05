const valores = () => {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    const fecha = new Date(anio, mes, dia)
    let validarFebrero = anio % 4;




    let diaSemana = fecha.getDay();

    switch (diaSemana) {
        case 0:
            document.getElementById("diaSemana").innerHTML = "  Domingo, NO laborable";
            break;
        case 1:
            document.getElementById("diaSemana").innerHTML = "  Lunes, laborable";
            break;
        case 2:
            document.getElementById("diaSemana").innerHTML = "  Martes, laborable";
            break;
        case 3:
            document.getElementById("diaSemana").innerHTML = "  Miercoles, laborable";
            break;
        case 4:
            document.getElementById("diaSemana").innerHTML = "  Jueves, laborable";
            break;
        case 5:
            document.getElementById("diaSemana").innerHTML = "  Viernes, laborable";
            break;
        case 6:
            document.getElementById("diaSemana").innerHTML = "  Sabado, NO laborable";
            break;
        default:
            document.getElementById("diaSemana").innerHTML = "  No sabria que decirte";
            break;
    }

    let anioBis;
    anioBis = anio % 4;

    switch (anioBis) {
        case 0:
            document.getElementById("anioBis").innerHTML = "  Bisiesto"
            break;

        default:
            document.getElementById("anioBis").innerHTML = "  No bisiesto"
            break;
    }

    if (validarFebrero == 0 && dia > 29 && mes == 1) {
        alert("Ingrese un dia menor o igual a 29 para el mes de Febrero");
        document.getElementById("dia").value = "";
        document.getElementById("anioBis").innerHTML = "";
        document.getElementById("diaSemana").innerHTML = "";
    }

    if (validarFebrero !== 0 && dia > 28 && mes == 1) {
        alert("Ingrese un dia menor o igual a 28 para el mes de Febrero");
        document.getElementById("dia").value = "";
        document.getElementById("anioBis").innerHTML = "";
        document.getElementById("diaSemana").innerHTML = "";
    }

    if ((mes == 3 || mes == 5 || mes == 8 || mes == 10) && dia >= 31) {
        alert("Ingrese un dia menor o igual a 30 ya que el mes seleccionado solo tiene 30 dias");
        document.getElementById("dia").value = "";
        document.getElementById("anioBis").innerHTML = "";
        document.getElementById("diaSemana").innerHTML = "";
    }

    if (dia == false || mes == "" || anio == false) {
        alert("Verifique que los 3 campos tengan datos");
        document.getElementById("anioBis").innerHTML = "";
        document.getElementById("diaSemana").innerHTML = "";
    }

}

const limpiar = () => {
    document.getElementById("dia").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("anio").value = "";
    document.getElementById("anioBis").innerHTML = "";
    document.getElementById("diaSemana").innerHTML = "";
}