console.log("Ejercicio calcular en qué día de la semana cayó tal fecha");
/**
 * los número que ponga el usuario los crea en una fecha
 * @param {number} anio del año que ingrese el usuario
 * @param {number} mes del mes que ingrese el usuario
 * @param {number} dia del día que ingrese el usuario
 * @param {date} fechaUsuario de la fecha que ingresó el usuario
 * @param {number} numeroDia fecha con método getDay()
 * @param {array} dias arreglo de los días de la semana
 */
/**
 * @param {number} resultado del día de la semana dependiendo el arreglo
 * @case {lunes a viernes} dia laborable
 * @case {default} fin de semana
 * @returns día de la semana y día laborable o fin de semana.
 */
function calcularFecha() {
  let anio = document.getElementById("anio").value
  let mes = document.getElementById("mes").value
  let dia = document.getElementById("dia").value
  let fechaUsuario = (anio + "/" + mes + "/" + dia);
  console.log(fechaUsuario);
  const numeroDia = new Date(fechaUsuario).getDay();
  console.log("Número de día de la semana: ", numeroDia);
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  let resultado = 0
  switch (dias[numeroDia]) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
      resultado = "Día laborable"
      break;
    default:
      resultado = "Fin de semana"
      break;
  }
  return document.getElementById("resultado").innerHTML= dias[numeroDia] + " , "+ resultado;
}