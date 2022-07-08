function datos(){
    //Guardo el valor dia en una variable/
  let  day=document.getElementById("dia").value;
    //Guardo el valor mes en una variable
  let  month=document.getElementById("mes").value-1;
    //Guardo el valor del año en una variable
  let  year=document.getElementById("anio").value;

    if(day<1 || day>32) document.getElementById("errorD").innerHTML="Ingresa otro dia";

    if(month<1 || month>32) document.getElementById("errorM").innerHTML="Ingresa otro Mes";

    if(year<1 || year>9999) document.getElementById("errorA").innerHTML="Ingresa otro Año";
    console.log(day,month,year);

  const fecha = new Date(year, month, day);
  console.log(fecha);
//arroja el dia en numero que le corresponde a mi variable fecha correspondiendo 0 domingo hast 6 sabado  
  let dias=fecha.getDay();

  switch(dias){
    case 0:
      document.getElementById("resultado").innerHTML="Domingo, no laborable";
      break;
    case 1:
      document.getElementById("resultado").innerHTML="Lunes, laborable";
      break;
    case 2:
      document.getElementById("resultado").innerHTML="Martes, laborable";
      break;
    case 3:
      document.getElementById("resultado").innerHTML="Miercoles, laborable";
      break;
    case 4:
      document.getElementById("resultado").innerHTML="Jueves, laborable";
      break;
    case 5:
      document.getElementById("resultado").innerHTML="viernes, laborable";
      break;
    default:
      document.getElementById("resultado").innerHTML="Sabado, no laborable";
      break;
  }  
}
switch (diaSemana) {
    case 0:
        document.getElementById(("diaSemana")).innerHTML = "Domingo, NO laborable";
        break;
    case 1:
        document.getElementById(("diaSemana")).innerHTML = "Lunes, laborable";
        break;
    case 2:
        document.getElementById("diaSemana").innerHTML = "Martes, laborable";
        break;
    case 3:
        document.getElementById("diaSemana").innerHTML = "Miercoles, laborable";
        break;
    case 4:
        document.getElementById("diaSemana").innerHTML = "Jueves, laborable";
        break;
    case 5:
        document.getElementById("diaSemana").innerHTML = "Viernes, laborable";
        break;
    case 6:
        document.getElementById("diaSemana").innerHTML = "Sabado, NO laborable";
        break;
    default:
        document.getElementById("diaSemana").innerHTML = "No sabria que decirte";
        break;
}



/*
function workingDay(){

    let uDay=0;
    let uMonth=0;
    let uYear=0;
    let message;

    //Compruebo que sean valores válidos
    if(isNaN(uDay) || uDay<1 || uDay>31){
        message="Error, en campo dia.";
        return;
    }
    if(isNaN(uMonth) || uMonth<1 || uMonth>12){
        message="Error, en campo mes.";
        return;
    }
    //cuatro digitos
    if(isNaN(uYear) || uYear<1000){
        message="Error";
        return;
     }   
    //Creo un objeto date, con las propiedades de la fecha.
    const date = new Date(uYear,uMonth,uDay);
    //Obtengo el dia(0-6)
    let day = date.getDay();

    switch(day){
        case 0:
            message="Domingo, dia no laborable.";
            break;
        case 1:
            message="Lunes, dia laborable.";
            break;
        case 2:
            message="Martes, dia laborable.";
            break;
        case 3:
            message="Miercoles, dia laborable.";
            break;
        case 4:
            message="Jueves, dia laborable.";
            break;
        case 5:
            message="Viernes, dia laborable.";
            break;
        default:
            message="Sabado, dia no laborable.";
            break;
    }

}
*/