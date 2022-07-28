setInvisible(true);
/**
 * Establecer como invisble el botón de limpiar
 */
function setInvisible(estado){

    /*
    //lo desaparece (ocupa el espacio)
    const formulario=document.getElementById("formulario");
    let status="visible";
    if(estado) status="hidden";
    formulario.elements["limpiar"].style.visibility=status;
    */
 
    //lo desaparece (no ocupa el espacio)
    let status2= "inline";
    if(estado) status2= "none";
    formulario.elements["limpiar"].style.display =status2;
    formulario.elements["fecha"].style.display =status2;
    
}


const form= document.getElementById("formulario");
//Crear un evento
//Esto se hace para que  se ejecute la función cuando ya tenemos todos
//los datos llenos, con onlcick se ejecuta la función aunque no tenga datso
form.addEventListener("submit", (event)=>{
    //Evito que me limpie el formulario y la consola
    event.preventDefault();
    console.log(event)
    calcularFecha();
    setInvisible(false);
})

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

    //document.getElementById("fecha").value=definirFecha(date.getDay()); //Se manda llamar a la función definirFecha 
    const formulario=document.getElementById("formulario");
    //Accedo a elementos de mi formulario con el ID mes, tambien puedo utilizar el name
    console.log(formulario.elements["mes"].value);
    const date = new Date(formulario.elements["anio"].value,
                        formulario.elements["mes"].value-1,
                        formulario.elements["dia"].value);
    formulario.elements["fecha"].value=definirFecha(date.getDay());;
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