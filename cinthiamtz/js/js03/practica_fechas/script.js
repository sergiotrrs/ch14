//Console de prueba para verificar que esten vinculados con el html
console.log("Hola")
//Declaración de variable de los dias de la semana 
//coloque primero el domingo porque le corresponde al indice 0 en getDay
const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves",
    "Viernes", "Sabado"];

const dia = () => {
    let d = document.getElementById("valorDia").value; //Dato del dia 
    let m = document.getElementById("mes").selectedIndex-1;//dato del mes pero solo eligo el indice
    let a = document.getElementById("valorAnio").value ;//Dato del mes
    let fecha = new Date(a, m, d); //Declaracion de la fecha que introduccen
    let dia = fecha.getDay();//Con este metodo se determina que dia de la semana cae
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
