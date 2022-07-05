function calcularDay(){
let day = document.getElementById("day").value;
let month = document.getElementById("month").value;
let year = document.getElementById("year").value;
let dayW;
const weekDay = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const d = new Date(year,month,day).getDay();

switch (weekDay[d]) {
        case "Domingo":
        case "Sabado":
            dayW = "No Laborable : ) ";
            break;
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            dayW = "Laborable : ( ";
            break;
}
    document.getElementById("result").innerHTML = `${weekDay[d]}, Dia ${dayW}`;
}
    