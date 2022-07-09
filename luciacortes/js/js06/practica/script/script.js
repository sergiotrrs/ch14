setInvisible(true);
/**
 * 
 * Establecer como invisibles el botón de limpiar
 *
 * @param {boolean} estado true: visible o false: invisible
 */
function setInvisible(estado){
    const formulario= document.getElementById("formulario");
    /*let status="visible";
    if(estado) status="hidden"
    formulario.elements['limpiar'].style.visibility= status;
    formulario.elements['fecha'].style.visibility= status;*/
    
    
    let status= "inline";
    if(estado) status= "none";
    formulario.elements['limpiar'].style.display= status;
    formulario.elements['fecha'].style.display= status;
}


const form= document.getElementById('formulario');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event);
    /**
     * Implemenar filtro con un 
     * if (pasaFiltro(){
     *  calcularFEcja()
     *  setInvisible(false);
     * }
     * else{
     * //Enviar mensaje a usuario
     * }
     * 
     *      */
    calcularFecha();    
    setInvisible(false);
} );

//Obtener la fecha determinada
/**
 * @param {int} anio
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () =>{ 
    //Se manda llamar a la función Date() que se almacena en la constante día
    /* 
    const dia = new Date(Number(document.getElementById("anio").value),
    String(document.getElementById("mes").value)-1, 
    Number(document.getElementById("dia").value));
    
    //Se coloca -1 en el mes porque enero incia en el 0 
    document.getElementById("fecha").value= definirFecha(dia.getDay()); 
    */
//accedemos dentro del formulario
    const formulario = document.getElementById("formulario");
    console.log(formulario.elements['mes'].value);
    const dia = new Date(
        formulario.elements['anio'].value,
        formulario.elements['mes'].value-1,
        formulario.elements['dia'].value,
        )
        
        formulario.elements['fecha'].value = definirFecha (dia.getDay() );
    }
/**
 //Función para indicar el día y si es laborable
 *  @param {number}  dia 
 * @return "'Día', fin de semana o 'Día', día laborable"
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
            return "Día no existente";          
    }
}
function definirDias(year,month,day){
    let anioBis = year % 4;
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
          return null;
        }
        break;
      case 1:
        console.log("Dentro del casen deberia dar el año" + year);
        console.log("año bis" + anioBis);
        // el año es bisiesto
        if (anioBis == 0 && (day < 1 || day > 29)) {
          alert("Ingrese un dia dentro del rango 1-29");
          document.getElementById("dia").value = "";
          return null;
        }
        // alert("El año no es bisiesto");
        if (anioBis !== 0 && (day < 1 || day > 28)) {
          alert("Ingrese un dia dentro del rango 1-28");
          document.getElementById("dia").value = ""; 
          return null;
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
          return null;
        }
        break;
  
      default:
        alert("Opcion invalida, verifique que los datos ingresados sean correctos");
        return null;
    }
  }