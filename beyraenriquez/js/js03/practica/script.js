console.log("Práctica JS03");

//Declaración de los días de la semana 
const resultado = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

//Se asignan valor al día, mes y año.
const dia = () => {
let d = document.getElementById("dd").value;
let m = document.getElementById("mm").value-1;
let a = document.getElementById("aaaa").value;

//Se determina la fecha introducida y el día de la semana.
let fecha = new Date(a, m, d);
let dia = fecha.getDay();
let diaLaborable = 0;

//Se utiliza Switch para consultar si es día laborable o fin de semana.
switch (resultado[dia]) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        diaLaborable = ", día laborable.";
        break;
    default:
        diaLaborable = ", fin de semana.";
        break;
    }

    //Se refleja el resultado que se consultó.
    return document.getElementById("resultado").innerHTML =
        resultado[dia] + "" + diaLaborable;
}