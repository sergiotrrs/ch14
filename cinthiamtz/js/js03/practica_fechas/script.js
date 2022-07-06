//Console de prueba para verificar que esten vinculados con el html
console.log("Hola");
const form = document.getElementById("formulario");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    calcularFecha();
    setInvisible(false);
});

const calcularFecha = () => {
    const formulario = document.getElementById("formulario");   
    const dia = new Date(
        formulario.elements["anio"].value,
        formulario.elements["mes"].value - 1,
        formulario.elements["dia"].value
    );
   
    formulario.elements["resultado"].value = definirFecha(dia.getDay());      
};



function definirFecha(dia){
const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves",
    "Viernes", "Sabado",]
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
return diaSemana[dia] + " , " + diaTipo;
}   


setInvisible(true);
/**
 *  * @param {bolean} estado true:visible, false:invisible
 */
function setInvisible(estado){
    const formulario = document.getElementById('formulario');
    let status = "inline";
    if(estado) status ="none";
    formulario.elements['limpiar'].style.display =status;
    formulario.elements['resultado'].style.display =status;    
}





//Anterior codigo

// //Console de prueba para verificar que esten vinculados con el html
// console.log("Hola")
// //Declaración de variable de los dias de la semana
// //coloque primero el domingo porque le corresponde al indice 0 en getDay
// const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves",
//     "Viernes", "Sabado"];

// const dia = () => {
//     let d = document.getElementById("valorDia").value; //Dato del dia
//     let m = document.getElementById("mes").selectedIndex-1;//dato del mes pero solo eligo el indice
//     let a = document.getElementById("valorAnio").value ;//Dato del mes
//     let fecha = new Date(a, m, d); //Declaracion de la fecha que introduccen
//     let dia = fecha.getDay();//Con este metodo se determina que dia de la semana cae
//     let diaTipo = 0;
//     switch (diaSemana[dia]) {
//         case "Lunes":
//         case "Martes":
//         case "Miercoles":
//         case "Jueves":
//         case "Viernes":
//             diaTipo = "Dia laborable";
//             break;
//         default:
//             diaTipo = "Fin de semana";
//             break;
//     }
//     return document.getElementById("diaSemana").innerHTML = diaSemana[dia] + " " + diaTipo;
// }
