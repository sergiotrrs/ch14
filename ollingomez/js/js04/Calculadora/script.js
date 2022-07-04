function datos() {
  /**Guardo el valor dia en una variable*/
  let day = document.getElementById("dia").value;
  //Guardo el valor mes en una variable
  let month = document.getElementById("mes").value - 1;//porque enpieza la metodo new Date
  //Guardo el valor del año en una variable
  let year = document.getElementById("anio").value;

  if (day < 1 || day > 32) diaError = document.getElementById("errorD").innerHTML = "Ingresa otro día";

  if (month < 0 || month > 12) mesError = document.getElementById("errorM").innerHTML = "Ingresa otro Mes";

  if (year < 1 || year > 9999) anioError = document.getElementById("errorA").innerHTML = "Ingresa otro Año";
  console.log(day, month, year);

  const fecha = new Date(year, month, day);

  //arroja el dia en numero que le corresponde a mi variable fecha correspondiendo 0 domingo hast 6 sabado  
  let dias = fecha.getDay();

  switch (dias) {
    case 0:
      document.getElementById("resultado").innerHTML = "Domingo, no laborable";
      break;
    case 1:
      document.getElementById("resultado").innerHTML = "Lunes, laborable";
      break;
    case 2:
      document.getElementById("resultado").innerHTML = "Martes, laborable";
      break;
    case 3:
      document.getElementById("resultado").innerHTML = "Miercoles, laborable";
      break;
    case 4:
      document.getElementById("resultado").innerHTML = "Jueves, laborable";
      break;
    case 5:
      document.getElementById("resultado").innerHTML = "viernes, laborable";
      break;
    default:
      document.getElementById("resultado").innerHTML = "Sabado, no laborable";
      break;
  }

  let aniBisiesto = year % 4;

  if (aniBisiesto == 0) {
    document.getElementById("Bis").innerHTML = "El año es Bisiesto";
  } else {
    document.getElementById("Bis").innerHTML = "El año no es Bisiesto";
  }

  clc = borrar(diaError)
}

function borrar() {
  document.getElementById("dia").value = "DD";
  document.getElementById("mes").value = "MM";
  document.getElementById("anio").value = "YYYY";
  diaError = document.getElementById("errorD").value = "Día";
}
