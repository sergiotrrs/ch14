//Obtener la fecha determinada
/**
 * @param {int} año
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () =>{ 

    //Se manda llamar a la función Date() que se almacena en la constante día
   /*  const date = new Date(Number(document.getElementById("año").value),
                    String(document.getElementById("mes").value)-1, 
                    Number(document.getElementById("dia").value)); */
    //Se coloca -1 por que enero comienza con cero


    document.getElementById("fecha").value="Hola"; //Se manda llamar a la función definirFecha 
    //document.getElementById("fecha").value=definirFecha(date.getDay()); //Se manda llamar a la función definirFecha 
}

//Función para indicar el día y si es laborable
/**
 * 
 * @param {int}  dia 
 * @return "'Día', fin de semana o 'Día', día lavorable"
 */

function definirFecha(dia){
    switch(dia){
        //Se inicializa 0 porque Date() comprende los día del 0 al 6
        case 0: 
            return "Domingo, fin de semana";   
        case 1:
            return "Lunes,  día laborable";
        case 2:
            return "Martes,  día laborable";
        case 3:
            return "Miércoles,  día laborable";
        case 4:
            return "Jueves,  día laborable";
        case 5:
            return "Viernes, día laborable";
        case 6:
            return "Sábado, fin de semana";
        default:
            return "dia no existente";
    }
}