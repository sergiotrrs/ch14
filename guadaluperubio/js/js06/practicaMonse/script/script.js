/**
 * establecer como invible el boton de limpiar
 * @param {boolean} estado true: vible, false:invisible
 */
setInvisible(true);


function setInvisible(estado){
     const formulario = document.getElementById("formulario");
     // let status = "visible" ;
     // if (estado) status ="hidden"
     // formulario.elements['limpiar'].style.visibility = status;

     let status= "inline" ;
     if (estado) status = "none";
     formulario.elements['limpiar'].style.display = status;
     formulario.elements['fecha'].style.display = status;

}

const form = document.getElementById('formulario');

//declaramos la funcion para año bisiesto, Checar y hazla tu solita :(***********************************************************************
function pasaFiltro(anilo, mes, dia){
     let bisiesto = anio%4;
     if (mes ==2 && bisiesto ==0 && dia <=) return(true)

     if (bisiesto == 0){

     }
}

//generando un evento, form(sobre formulario), 
form.addEventListener('submit', (event) => {
     event.preventDefault();
     console.log(event);
          /**
           * implementar filtro 
               if(pasa filtro()){
               calcularFecha();
               setInvisible(false);
               }
            else {
               //enviar mensaj usurariio
            }
           * */

     calcularFecha();
     setInvisible(false);
} )





//Obtener la fecha determinada
/**
 * @param {int} anio
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () => {
     //Se manda llamar a la función Date() que se almacena en la constante día
     /*   const dia = new Date(
           Number(document.getElementById("anio").value),
           String(document.getElementById("mes").value)-1, 
           Number(document.getElementById("dia").value)); */
     //Se coloca -1 en el mes por enero comienza con cero

     // document.getElementById("fecha").value = definirFecha(dia.getDay()); //Se manda llamar a la función definirFecha 

     const formulario = document.getElementById("formulario");
     console.log(formulario.elements['mes'].value);
     const dia = new Date(
          formulario.elements['anio'].value,
          formulario.elements['mes'].value - 1,
          formulario.elements['dia'].value
     )

     formulario.elements['fecha'].value = definirFecha(dia.getDay());
}

//Función para indicar el día y si es laborable
/**
 * 
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
               return "dia invalido";
     }

}