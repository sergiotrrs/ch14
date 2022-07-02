console.log("Aquí inicia el programa");
let year;
let month;
let day;

function calcular() {  
// Entradas del Usuario año, mes, día. El mes se le agrega "-1" porque el index es Enero
    year = Number(document.getElementById("anio").value);
    month = Number(document.getElementById("mes").value)-1;
    date = Number(document.getElementById("fecha").value);

    // Evaluamos el día .getDay() devuelve un numero entre 0-6
    let dia = new Date(year, month, date,) ;
    let fecha = dia.getDay();
    console.log("Número de día de la semana: ", dia);
    console.log(Date(year, month, date))
    console.log(fecha)
    
//Funcion que contiene el switch y los distintos casos
    switch (fecha) {
        case 0:
            document.getElementById("resul").innerHTML = "El día es Domingo y no es laborable ";
            break;
        case 1:
            document.getElementById("resul").innerHTML = "El día es Lunes y es laborable ";
            break;
        case 2:
            document.getElementById("resul").innerHTML = "El día es Martes y es laborable ";
            break;
        case 3:
            document.getElementById("resul").innerHTML = "El día es Miércoles y es laborable ";
            break;
        case 4:
            document.getElementById("resul").innerHTML = "El día es Jueves y es laborable ";
            break;
        case 5:
            document.getElementById("resul").innerHTML = "El día es Viernes y es laborable ";
            break;
        default:
            document.getElementById("resul").innerHTML = "El día es Sábado y no es laborable ";
            break;
    }
}
