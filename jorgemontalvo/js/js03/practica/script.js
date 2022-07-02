console.log("Aquí inicia el programa");

// Entradas del Usuario año, mes, día. El mes se le agrega "-1" porque el index es Enero
    let year = document.getElementById("anio").value;
    let month = document.getElementById("mes").value - 1;
    let date = document.getElementById("fecha").value;

    // Evaluamos el día .getDay() devuelve un numero entre 0-6
    const dia = new Date(year, month, date).getDay();
    console.log("Número de día de la semana: ", dia);
    
    
//Funcion que contiene el switch y los distintos casos
    function calcular() {  
    switch (dia) {
        case 0:
            document.getElementById("resul").innerHTML = "El día es Domingo y no es laborable ";
            break;
        case 1:
            document.getElementById("resul").innerHTML = "El día es Domingo y es laborable ";
            break;
        case 2:
            document.getElementById("resul").innerHTML = "El día es Domingo y es laborable ";
            break;
        case 3:
            document.getElementById("resul").innerHTML = "El día es Domingo y es laborable ";
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
