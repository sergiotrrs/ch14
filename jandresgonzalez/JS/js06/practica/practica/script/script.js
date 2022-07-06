const form = document.getElementById("form");
setInvisible(true);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    calcularFecha();
    setInvisible(false);
});



//Obtener la fecha determinada
/**
 * @param {number} anio
 * @param {number} mes
 * @param {number} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () =>{ 
const formulario = document.getElementById("form");
let day = formulario.elements['dia'].value;
let month = formulario.elements['mes'].value - 1;
let year = formulario.elements['anio'].value;
const dia = new Date(
    year,
    month,
    day
);


    formulario.elements['fecha'].value = definirFecha(dia.getDay());
}

/**
 * 
 * @param {boolean} con true se oculta, con false es visible 
 */
 function setInvisible(estado) {
    const formulario = document.getElementById("form");
    let status= "visible";
    if (estado) status= "hidden"
    formulario.elements["limpiar"].style.visibility=status;
    formulario.elements["fecha"].style.visibility=status;
    
    
    //let boole = "inline";
    //if (estado) boole = "none";
    //formulario.elements["limpiar"].style.display = boole;
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
            return "Llenemos de nuevo los datos";
            
    }
}

//Shift alt a para comentar