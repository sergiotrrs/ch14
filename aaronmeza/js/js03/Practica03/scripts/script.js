let day;
let month;
let year;

function datos() {
    /**Guardo el valor de día en una variable */
    let day = document.getElementById("dia").value; //value significa valor
    /**Guardo el valor de mes en una variable */
    let month = document.getElementById("mes").value - 1; //
    /**Guardo el valor de ayo en una variable */
    let year = document.getElementById("anio").value;

    if (day < 1 || day > 31) {
        alert("Ingresar día valido");
        document.getElementById("dia").value = "";
    }
    if (month < 0 || month > 12) {
        alert("Ingresar mes valido");
        document.getElementById("mes").value = "";
    }
    if (year < 1970 || year > 2050) {
        alert("Ingresar año valido");
        document.getElementById("anio").value = "";
    }
    const fecha = new Date(year, month, day);
    console.log(fecha);
    //arroja el indice al dia que corresponde a fecha de 0 domingo - 6 sabado
    let dias = fecha.getDay();
    switch (dias) {
        case 0:
            document.getElementById("Respond").innerHTML = "Domingo, no laborable";
            break;
        case 1:
            document.getElementById("Respond").innerHTML = "Lunes, laborable";
            break;
        case 2:
            document.getElementById("Respond").innerHTML = "Martes, laborable";
            break;
        case 3:
            document.getElementById("Respond").innerHTML = "Miercoles, laborable";
            break;
        case 4:
            document.getElementById("Respond").innerHTML = "Jueves, laborable";
            break;
        case 5:
            document.getElementById("Respond").innerHTML = "Viernes, laborable";
            break;
        default:
            document.getElementById("Respond").innerHTML = "Sabado, no laborable";
            break;

    }
    let anioBis;
    anioBis = anio % 4;
    switch (anioBis) {
        case 0:
            document.getElementById("anioBis").innerHTML = "Bisiesto"
            break;

        default:
            document.getElementById("anioBis").innerHTML = "No Bisiesto"
            break;
    }
}
function borrar() {
    document.getElementById("dia").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("anio").value = "";
}

