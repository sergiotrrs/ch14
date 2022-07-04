let day;
let month;
let year;

const valores = () => {
    dia = document.getElementById("dia").value;
    mes = document.getElementById("mes").value;
    anio = document.getElementById("anio").value;
    const fecha = new Date(anio, mes, dia)
    console.log(fecha);

    if (dia < 1 || dia > 31) {
        alert("El dia es invalido")
        document.getElementById("dia").value = "";
        // document.getElementById("resultado").innerHTML = "Dia incorrecto";
    }

    if (mes < 1 || mes > 12) {
        alert("El mes es invalido")
        document.getElementById("mes").value = "";
        // document.getElementById("resultado").innerHTML = "Dia incorrecto";
    }

    if (anio < 1970 || anio > 9999) {
        alert("El año es invalido")
        document.getElementById("anio").value = "";
        // document.getElementById("resultado").innerHTML = "Dia incorrecto";
    }
    console.log(dia, mes, anio);
    console.log("\n-------------------");
}
const llamar = () => {
    day = dia;
    month = mes;
    year = anio;
    console.log(day, month, year);
}