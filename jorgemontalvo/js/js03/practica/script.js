console.log("Aquí inicia el programa");
let year;
let month;
let date;

function calcular() {  
// Entradas del Usuario año, mes, día. El mes se le agrega "-1" porque el index es Enero
    year = Number(document.getElementById("anio").value);
    month = Number(document.getElementById("mes").value)-1;
    date = Number(document.getElementById("fecha").value);

    if (date <= 0 || date >31 || month <= 0 || month >12 || year <= 0){
        alert("Porfavor introduce un valor válido");
        document.getElementById("resul").innerHTML = "¿Se trabajará ese día?";
    }
else{

    // Evaluamos el día .getDay() devuelve un numero entre 0-6
    let dia = new Date(year, month, date,) ;
    let fecha = dia.getDay();
    console.log("Número de día de la semana: ", dia);
    console.log(Date(year, month, date))
    console.log(fecha)
    
//Funcion que contiene el switch y los distintos casos
    switch (fecha) {
        case 0:
            document.getElementById("resul").innerHTML = "El día es Domingo y se descansa ";
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
            document.getElementById("resul").innerHTML = "El día es Sábado y se descansa ";
            break;
    }
}
}
