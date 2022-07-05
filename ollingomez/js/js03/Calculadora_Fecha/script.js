function datos() {
  /**Guardo el valor dia en una variable*/
  let day = document.getElementById("dia").value;
  //Guardo el valor mes en una variable
  let month = document.getElementById("mes").value - 1;//porque enpieza la metodo new Date
  //Guardo el valor del año en una variable
  let year = document.getElementById("anio").value;

  if (month < 0 || month > 12) {
    alert("mes invalido. Ingresa un mes dentro del rango de 1 a 12");
    document.getElementById("mes").valeu = "";
  }

  if (year < 1000 || year > 9999) {
    alert("mes invalido. Ingresa un año dentro del rango de 1000 a 9999");
    document.getElementById("anio").valeu = "";
  }
  console.log(day, month, year);

  const fecha = new Date(year, month, day);
  console.log("\n -------------------");
  console.log(fecha);
  //arroja el dia en numero que le corresponde a mi variable fecha correspondiendo 0 domingo hast 6 sabado  
  let dias = fecha.getDay();
  console.log("\n -------------------");
  console.log(dias);

  let aniBisiesto = year % 4;

  switch (month) {
    case 0:
      if (day < 1 || day > 31) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").valeu = "";
      }
      break;
    case 1:
      if (aniBisiesto == 0) {
        document.getElementById("Bis").innerHTML = "El año es Bisiesto";
        if (day < 1 || day > 29) {
          alert("mes invalido. Ingresa un dia dentro del rango de 1 a 29");
          document.getElementById("dia").valeu = "";
        }
      } else {
        document.getElementById("Bis").innerHTML = "El año no es Bisiesto";
        if (day < 1 || day > 28) {
          alert("mes invalido. Ingresa un dia dentro del rango de 1 a 28");
          document.getElementById("dia").valeu = "";
        }
      }
      break;
    case 2:
      if (day < 1 || day > 31) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
      }
      break;
    case 3:
      if (day < 1 || day > 30) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 30");
        document.getElementById("dia").value = "";
      }
      break;
    case 4:
      if (day < 1 || day > 31) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
      }
      break;
    case 5:
      if (day < 1 || day > 30) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 30");
        document.getElementById("dia").value = "";
      }
      break;
    case 6:
      if (day < 1 || day > 31) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
      }
      break;
    case 7:
      if (day < 1 || day > 31) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
      }
      break;
    case 8:
      if (day < 1 || day > 30) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
      }
      break;
    case 9:
      if (day < 1 || day > 31) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
      }
      break;
    case 10:
      if (day < 1 || day > 30) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 30");
        document.getElementById("dia").value = "";
      }
      break;
    default:
      if (day < 1 || day > 31) {
        alert("mes invalido. Ingresa un dia dentro del rango de 1 a 31");
        document.getElementById("dia").value = "";
      }
      break;
  }

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

  if (aniBisiesto == 0) {
    document.getElementById("Bis").innerHTML = "El año es Bisiesto";
  } else {
    document.getElementById("Bis").innerHTML = "El año no es Bisiesto";
  }

}

function borrar() {
  document.getElementById("dia").value = "";
  document.getElementById("mes").value = "";
  document.getElementById("anio").value = "";
}
