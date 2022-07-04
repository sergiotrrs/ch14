console.log("Ejercicio calcular en qué día de la semana cayó tal fecha");

function calcularFecha() {
  let anio = document.getElementById("anio").value
  let mes = document.getElementById("mes").value
  let dia = document.getElementById("dia").value
  let fechaUsuario = (anio + "/" + mes + "/" + dia);
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
      resultado = "Día Laborable"
      break;
    default:
      resultado = "Fin de semana"
      break;
  }
  return document.getElementById("resultado").innerHTML= dias[numeroDia] + " , "+ resultado;
}
//}
// const nombreDelDiaSegunFecha = fecha => {
//     return [
//       'domingo',
//       'lunes',
//       'martes',
//       'miércoles',
//       'jueves',
//       'viernes',
//       'sábado',
//     ][new Date(fecha).getDay()];
//   }

//   console.log (nombreDelDiaSegunFecha)
