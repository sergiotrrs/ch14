setInvisible(true);
/**
 * Establecer como hacer invisible el boton de limpiar
 * @param {boolean} estado true:visible, false:invisible
 */
function setInvisible(estado){
    const formulario = document.getElementById("formulario");
    let status ="visible";
    if(estado) status="hidden"; 
    formulario.elements['limpiar'].style.visibility=status;
   
   // let status = "inline";
    //if(estado) status = "none";
    //formulario.elements['limpiar'].style.display = status; 
}


const form = document.getElementById("formulario");
//form es la referencia linea 1 , addEven agrega un avento , submit es por el id , funcion flecha
form.addEventListener('submit', (event) =>{
    event.preventDefault(); //evita que linpie el formulario
    console.log(event);
     /**
      * implementar filto 
      * if(pasaFiltro(){
      *   calcularFecha();
      *    setInvisible(false);
      * }
      */ 
    calcularFecha();
    setInvisible(false);
} )

form.addEventListener('click' ,(event)=>{
    console.log("click: " + event);
})


//Obtener la fecha determinada
/**
 * @param {int} anio
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () =>{ 
    //Se manda llamar a la función Date() que se almacena en la constante día
      /* const dia = new Date(
        Number(document.getElementById("anio").value),
        String(document.getElementById("mes").value)-1,
        Number(document.getElementById("dia").value));
      */
    //Se coloca -1 en el mes por el año bisiesto 
    //document.getElementById("fecha").value = definirFecha(dia.getDay()); //
   const formulario = document.getElementById("formulario");
   console.log(formulario.elements['mes'].value);
   const dia = new Date(
    formulario.elements['anio'].value,
    formulario.elements['mes'].value-1,
    formulario.elements['dia'].value
   )
   formulario.elements['fecha'].value = definirFecha(dia.getDay() );

}

let day = formulario.elements[`dia`].value;
let month = formulario.elements[`mes`].value - 1;
let anioBis = anio % 4;


//Función para indicar el día y si es laborable
/**
 * 
 * @param {number}  dia 
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
            return "Dia no existente";
    }
}

function defirMeses(day , month){
   let status
switch (month) {
   //meses con 31 dias
   case 0:
   case 2:
   case 4:
   case 6:
   case 7:
   case 9:
   case 11:
     if (day < 1 || day > 31) {
       alert("Ingrese un dia dentro del rango 1-31");
       document.getElementById("dia").value = "";
       setInvisible(false);
       
     }
     break;
   case 1:
 
     if (anioBis == 0) {
       if (dia < 1 || dia > 29) {
         alert("Ingrese un dia dentro del rango 1-29");
         document.getElementById("dia").value = "";
         setInvisible(false);
       }
       // alert("El año es bisiesto");
     } else {
       if (dia < 1 || dia > 28) {
         alert("Ingrese un dia dentro del rango 1-28");
         document.getElementById("dia").value = "";
         setInvisible(false);
       }
     }
     break;
   // Meses con 30 dias
   case 3:
   case 5:
   case 8:
   case 10:
     if (day < 1 || day > 30) {
       alert("Ingrese un dia dentro del rango 1-31");
       document.getElementById("dia").value = "";
       setInvisible(false);
     }
     break;
 
   default:
     alert("Opcion invalida, verifique que los datos ingresados sean correctos");
     setInvisible(false);
     break;
 }
}