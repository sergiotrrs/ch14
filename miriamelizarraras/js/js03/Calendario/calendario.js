function buscar() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;

    const date = new Date(dia, mes, anio);
    console.log(date);

    //Puse un solo "if" porque solo quiero poner un "alert" y así hacer menos líneas.
    if ((dia < 1 || dia > 32) || (mes < 1 || mes > 13) || (anio < 1900 || anio >= 3000)) {
        alert("Los datos que ingresaste puede que sean incorrectos o lejanos a la fecha actual. Por favor ingresa otros datos.");
    }

    const fecha = new Date(anio, mes, dia);
    console.log(fecha);
  
    let diasSemana = fecha.getDay();

    switch (diasSemana) {
        case 0:
            document.getElementById("tudia").innerHTML = "Domingo, fin de semana";
            break;
        case 1:
            document.getElementById("tudia").innerHTML = "Lunes, laborable";
            break;
        case 2:
             document.getElementById("tudia").innerHTML = "Martes, laborable";
            break;
        case 3:
            document.getElementById("tudia").innerHTML = "Miércoles, laborable";
            break;
        case 4:
            document.getElementById("tudia").innerHTML = "Jueves, laborable";
            break;
        case 5:
            document.getElementById("tudia").innerHTML = "Viernes, laborable";
            break;
        default:
            document.getElementById("tudia").innerHTML = "Sábado, fin de semana";
    }
 
    let bisiesto = anio % 4;

    if (bisiesto == 0) {
        document.getElementById("bisiesto").innerHTML = "Bisiesto"
    }else{
        document.getElementById("bisiesto").innerHTML = "No bisiesto"
    }




}
