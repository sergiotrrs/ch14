setInvisible(true);
// definirMeses();
/**
 * Establecer como invisible el boton de limpiar
 * @param {boolean} estado true: visible, false: invisible
 */

function setInvisible(estado){
    const formulario = document.getElementById("formulario");
    // let status = "visible";
    // if(estado) status="hidden";
    // formulario.elements['limpiar'].style.visibility = status;
    
    let status = "inline";
    if(estado)status = "none";
    formulario.elements['limpiar'].style.display = status;
    formulario.elements['fecha'].style.display = status;

}

const form = document.getElementById('formulario');

// function pasaFiltro(anio, mes, dia) {
//     let bisiesto = anio%4;
//     if(mes ===)
// }


form.addEventListener('submit', (event) =>{
    event.preventDefault(); //no me limpia/borra los campos de entrada
    console.log(event);
    calcularFecha();
    setInvisible(false);
});

//Obtener la fecha determinada
/**
 * @param {int} anio
 * @param {int} mes
 * @param {int} dia
 * @return fecha dd/mm/aaaa (fecha solicitada)
 */
const calcularFecha = () =>{ 
    const formulario = document.getElementById("formulario");
    console.log( formulario.elements['mes'].value );
    const dia = new Date(
        formulario.elements['anio'].value,
        formulario.elements['mes'].value-1,
        formulario.elements['dia'].value
        );
        
        let day = formulario.elements[`dia`].value;
        let month = formulario.elements[`mes`].value - 1;
        let year = formulario.elements[`anio`].value;
        // console.log("prueba" +day, month);

    definirFecha(day, month);
    // console.log("prueba" +day, month);
    formulario.elements['fecha'].value = definirFecha(dia.getDay());
    // console.log("prueba1");

//     let anioBis = anio % 4;
//     switch (month) {
//         case 0: //Enero
//         case 2: //Marzo
//         case 4: //Mayo
//         case 6: //Julio
//         case 7: //Agosto
//         case 9: //
//         case 11: //
//             if (day<1 || day>31){
//                 alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 31");
//                 document.getElementById("dia").value="";
//             } 
//             break;
//         case 1: //Febrero
//             if (anioBis==0){
//                 if (day<1 || day>29){
//                      alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 29");
//                     document.getElementById("dia").value="";
//                 } 
//                 // alert("El a??o es bisiesto");
//             } else {
//                 if (day<1 || day>28){
//                      alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 28");
//                     document.getElementById("dia").value="";
//                 }
//             }
//             break;
//         case 3: //Abril
//         case 5: 
//         case 8:
//         case 10:
//             if (day<1 || day>30){
//                  alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 30");
//                 document.getElementById("dia").value="";
//             }  
//             break;
//         default:
//              alert("Dato invalido. Verifica que los datos sean correctos");
//             break;
//     }
// };

/**
 * Funci??n para indicar el d??a y si es laborable
 * @param {number}  dia 
 * @return "'D??a', fin de semana o 'D??a', d??a lavorable"
 */
function definirFecha(dia){
    switch(dia){
        //Se inicializa 0 porque Date() comprende los d??a del 0 al 6
        case 0: 
            return "Domingo, fin de semana";
            break;   
        case 1:
            return "Lunes,  d??a laborable";
            break;
        case 2:
            return "Martes,  d??a laborable";
            break;
        case 3:
            return "Mi??rcoles,  d??a laborable";
            break;
        case 4:
            return "Jueves,  d??a laborable";
            break;
        case 5:
            return "Viernes, d??a laborable";
            break;
        case 6:
            return "S??bado, fin de semana";
            break;
        default:
            return "D??a no existente";
            break;
    }
}


function definirMeses(year, month, day){
    let anioBis = year % 4;
    // console.log(year, month, day);
    switch (month) {
        case 0: //Enero
        case 2: //Marzo
        case 4: //Mayo
        case 6: //Julio
        case 7: //Agosto
        case 9: //
        case 11: //
            if (day<1 || day>31){
                alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 31");
                document.getElementById("dia").value="";
                return null;
            } 
            break;
        case 1: //Febrero
            if (anioBis==0 && (day<1 || day>29)){
                     alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 29");
                    document.getElementById("dia").value="";
                    return null;
                } 
                // alert("El a??o es bisiesto");
            }
            if (day<1 || day>28){
                alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 28");
                document.getElementById("dia").value="";
                return null;
            }
            break;
        case 3: //Abril
        case 5: //Junio
        case 8: //
        case 10: //
            if (day<1 || day>30){
                 alert("D??a invalido. Ingresa un d??a dentro del rango 1 - 30");
                document.getElementById("dia").value="";
                return null;
            }  
            break;
        default:
             alert("Dato invalido. Verifica que los datos sean correctos");
             return null;
            break;
        }
    }
}
}