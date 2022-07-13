//Obtener la fecha determinada
/**
 * @param {int} anio
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () =>{ 
    //Se manda llamar a la función Date() que se almacena en la constante día
    const dia = new Date(Number(document.getElementById("anio").value),
    String(document.getElementById("mes").value)-1,
     Number(document.getElementById("dia").value));
    //Se coloca -1 en el mes por que enero es 0
    definirFecha(dia.getDay()); //Se manda llamar a la función definirFecha 
}

//Función para indicar el día y si es laborable
/**
 * 
 * @param {int}  dia 
 * @return "'Día', fin de semana o 'Día', día lavorable"
 */

//const formulario = document.getElementById("formulario")



function definirFecha(dia){
    switch(dia){
        //Se inicializa 0 porque Date() comprende los día del 0 al 6
        case 0: 
            document.getElementById("fecha").value = "Domingo, fin de semana";
            break;   
        case 1:
            document.getElementById("fecha").value = "Lunes,  día laborable";
            break;
        case 2:
            document.getElementById("fecha").value = "Martes,  día laborable";
            break;
        case 3:
            document.getElementById("fecha").value = "Miércoles,  día laborable";
            break;
        case 4:
            document.getElementById("fecha").value = "Jueves,  día laborable";
            break;
        case 5:
            document.getElementById("fecha").value = "Viernes, día laborable";
            break;
        case 6:
            document.getElementById("fecha").value = "Sábado, fin de semana";
            break;
    }
}