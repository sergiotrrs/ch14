setInvisible(true);
/**
 * Establecer como invisble el botón de limpiar
 * @param {boolean} estado true: visible, false:invisible
 */
function setInvisible(estado) {
    const formulario = document.getElementById("formulario");
    // let status = "visible";
    // if(estado) status="hidden";
    // formulario.elements['limpiar'].style.visibility = status;    

    let status = "inline";
    if (estado) status = "none";
    formulario.elements['limpiar'].style.display = status;
    formulario.elements['fecha'].style.display = status;
}


const form = document.getElementById('formulario');

let contador = 0;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    /**
     *Implementar filtro 
        if( pasaFiltro() {
            calcularFecha();
            setInvisible(false);
            contador =0;
        }
        else{
            ++contador;
            if (contador>10){
                //Me doy por vencido, has lo que quieras
            }
            //Enviar mensaje a usuario
        }
     */
    calcularFecha();
    setInvisible(false);
});

form.addEventListener('click', (event) => {
    console.log("click: " + event);

});





//Obtener la fecha determinada
/**
 * @param {int} anio
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () => {
    //Se manda llamar a la función Date() que se almacena en la constante día
    /*     const dia = new Date(
            Number(document.getElementById("anio").value),
            String(document.getElementById("mes").value)-1, 
            Number(document.getElementById("dia").value));
        
            //Se coloca -1 en el mes por que enero comienza con 0
        document.getElementById("fecha").value = definirFecha(dia.getDay()); 
     */
        maximoDia();


    const formulario = document.getElementById("formulario");
    console.log(formulario.elements['mes'].value);
    const dia = new Date(
        formulario.elements['anio'].value,
        formulario.elements['mes'].value - 1,
        formulario.elements['dia'].value
    )
    formulario.elements['fecha'].value = definirFecha(dia.getDay());

} 



/**
 * Función para indicar el día y si es laborable
 * @param {number}  dia 
 * @return "'Día', fin de semana o 'Día', día laborable"
 */
function definirFecha(dia) {
    switch (dia) {
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
            return "Día no existente";

    }


}

function maximoDia() {
    let dia = document.getElementById("dia");
    let mes = document.getElementById("mes")
    let anio = document.getElementById("anio");
    //Guarda el dia maximo del mes
    let diaMaximoDelMes = diasEnUnMes(mes.value, anio.value); 
    if(dia.value > diaMaximoDelMes){
        dia.value = diasDelMes;
    }
    
}

///Funcion para calcular el dia maximo del mes
function diasEnUnMes(mes, anio) {
    return new Date(anio, mes , 0).getDate();
} 

