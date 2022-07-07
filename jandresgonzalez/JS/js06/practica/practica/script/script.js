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

/**
 * Código para que USER no ingrese días mayores a 29, 29, 30 o 31
 * en los meses que corresponden.
 * 
 * Inspirado en código de Reyna Tamez de la poderosisima CH14
 * 
 * ------------¡¡¡¡  GRACIAS  REYNA  !!!!--------------
 * 
 */
let bisiesto = year%4 == 0;
    if (bisiesto && month == 1 && day > 29) {
        console.log("bisiesto");
        window.alert("Inserte un día menor para febrero en año bisiesto (menor o igual a 29)")
        formulario.elements['fecha'].value = "Inserte un día menor";
        formulario.elements['dia'].value = "29";
        formulario.elements['dia'].max = "29"
    }
    else if (!bisiesto && month == 1 & day > 28) {
        console.log("no bisiesto");
        window.alert("Inserte un día menor para febrero en año no bisiesto (menor o igual a 28)")
        formulario.elements['fecha'].value = "Inserte un día menor";
        formulario.elements['dia'].value = "28";
    }
    else if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)
        && day > 31) {
        console.log("mes 31");
        window.alert("Inserte un día menor para este mes de 31 días (menor o igual a 31)")
        formulario.elements['fecha'].value = "Inserte un día menor";
        formulario.elements['dia'].value = "31";
    }
    else if ((month == 3 || month == 5 || month == 8 || month == 10)
        && day > 30) {
        console.log("mes 30");
        window.alert("Inserte un día menor para este mes de 30 días (menor o igual a 30)")
        formulario.elements['fecha'].value = "Inserte un día menor";
        formulario.elements['dia'].value = "30";
    }
    else if (day < 0) {
        console.log("negativo");
        window.alert("Inserte un día positivo (mayor a cero)")
        formulario.elements['fecha'].value = "Inserte un día mayor";
        formulario.elements['dia'].value = "1";
    }
    else {
        formulario.elements['fecha'].value = definirFecha(dia.getDay());
    }
}

/**
 * 
 * @param {boolean} con true se oculta, con false es visible 
 */
 function setInvisible(estado) {
    const formulario = document.getElementById("form");
    /*let status= "visible";
    if (estado) status= "hidden"
    formulario.elements["limpiar"].style.visibility=status;
    formulario.elements["fecha"].style.visibility=status; */
    
    
    let boole = "inline";
    if (estado) boole = "none";
    formulario.elements["limpiar"].style.display = boole;
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