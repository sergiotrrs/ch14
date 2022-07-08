//Establecer como invisible el boton de limpair
setInvisible(true);

//Establecer como invisible el boton de limpiar
//true visible, false invisible
function setInvisible(estado) {
  document.getElementById("formulario");
  // let status= "visible";
  // if (estado) status="hidden"
  // formulario.elements["limpiar"].style.visibility=status;

  let status = "inline";
  if (estado) status = "none";
  formulario.elements["limpiar"].style.display = status;
  formulario.elements["fecha"].style.display = status;
}

const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
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
const calcularFecha = () => {
  /*     //Se manda llamar a la función Date() que se almacena en la constante día
        const dia = new Date(
            Number(document.getElementById("anio").value),
            String(document.getElementById("mes").value) - 1,
            Number(document.getElementById("dia").value));
        //Se coloca -1 en el mes por enero comienza en 0  */

  // document.getElementById("fecha").value = definirFecha(dia.getDay());
  //Se manda llamar a la función definirFecha

  const formulario = document.getElementById("formulario");
  console.log(formulario.elements[`mes`].value);

  const dia = new Date(
    formulario.elements[`anio`].value,
    formulario.elements[`mes`].value - 1,
    formulario.elements[`dia`].value
  );
  let day = formulario.elements[`dia`].value;
  let month = formulario.elements[`mes`].value - 1;
  let anioBis = anio % 4;
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

      }
      break;
    case 1:

      if (anioBis == 0) {
        if (day < 1 || day > 29) {
          alert("Ingrese un dia dentro del rango 1-29");
          document.getElementById("dia").value = "";
        }
        // alert("El año es bisiesto");
      } else {
        if (day < 1 || day > 28) {
          alert("Ingrese un dia dentro del rango 1-28");
          document.getElementById("dia").value = "";
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
      }
      break;

    default:
      alert("Opcion invalida, verifique que los datos ingresados sean correctos");
      break;
  }

  // let validarFebrero = anio % 4;
  // if (dia >= 29) {
  //   alert("Error");
  //   console.log("prueba");
  // }

  formulario.elements[`fecha`].value = definirFecha(dia.getDay());
};

//Función para indicar el día y si es laborable
/**
 *
 * @param {int}  dia
 * @return "'Día', fin de semana o 'Día', día lavorable"
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
  }
}