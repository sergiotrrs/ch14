
const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves",
    "Viernes", "Sabado"];

const dia = () => {
    let d = document.getElementById("valorDia").value; 
    let m = document.getElementById("mes").selectedIndex-1;
    let a = document.getElementById("valorAnio").value ;
    let fecha = new Date(a, m, d); 
    let dia = fecha.getDay();
    let diaTipo = 0;
    switch (diaSemana[dia]) {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            diaTipo = "Dia laborable";
            break;
        default:
            diaTipo = "Fin de semana";
            break;
    }
    return document.getElementById("diaSemana").innerHTML = diaSemana[dia] + " " + diaTipo;
}