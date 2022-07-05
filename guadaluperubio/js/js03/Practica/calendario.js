console.log("Calendario, practica js03")

// Aqui defino mi arreglo llamado semanaDia
const semanaDia = ["Domingo", "Lunes", "Martes", "Miercoles", "jueves", "Viernes", "Sabado"];

const dia = () => {
// dia /d) , mes y año (a)
let d = document.getElementById("diaIngresado").value;
let  mes = document.getElementById("meses").selectedIndex-1
let a = document.getElementById("yearIngresado").value;

// aqui se va a introducir la fecha
let fecha = new Date (d, mes, a);

// getday nos ayuda para determinar que dia de la semana cae
let dia = fecha.getDay();

let valor = 0;

    switch (semanaDia [dia]){
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves" :
        case "Viernes" :
          valor = "es laboral";
            break;
        default:
            valor = " no laboral";
            break;

    }
    return document.getElementById("semanaDia").innerHTML = semanaDia[dia] + " " +valor;
}

// //fecha actual
// hoy=new Date(); //objeto fecha actual
// diasemhoy=hoy.getDay(); //dia semana actual
// diahoy=hoy.getDate(); //dia mes actual
// meshoy=hoy.getMonth(); //mes actual
// annohoy=hoy.getFullYear(); //año actual

