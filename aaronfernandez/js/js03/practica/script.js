function fechaLaborable() {
  let anio = Number(document.getElementById("anio").value);
  let mes = Number(document.getElementById("mes").value);
  let dia = Number(document.getElementById("dia").value);

  let conseguirDia = new Date(anio, mes -1, dia,);
  let diaSemana = conseguirDia.getDay();

  switch (diaSemana) {
    case 0:
      document.getElementById("result").innerHTML = "Domingo: laborable ";
      break;
    case 1:
      document.getElementById("result").innerHTML = "Lunes: laborable ";
      break;
    case 2:
      document.getElementById("result").innerHTML = "Martes: laborable";
      break;
    case 3:
      document.getElementById("result").innerHTML = "Miércoles: laborable";
      break;
    case 4:
      document.getElementById("result").innerHTML = "Jueves: laborable";
      break;
    case 5:
      document.getElementById("result").innerHTML = "Viernes: laborable ";
      break;
    case 6:
      document.getElementById("result").innerHTML = "Sábado: laborable";
      break;
  }
}
