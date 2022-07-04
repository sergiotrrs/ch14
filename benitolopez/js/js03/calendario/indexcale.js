console.log("hola");
/*se declaran variables a usar*/
let day, month, year, myDate, mensaje;





/* 
se crea la funcion que toma los valores de mis input */
function dardia() {
  day = parseInt(document.getElementById("day").value);
  month = parseInt(document.getElementById("meses").value);
  year = parseInt(document.getElementById("year").value);
/*SE HACE USO DEL OBJETO DATE() PARA ACCEDER A LA FECHA  
Y TAMBIEN DEL PARAMETRO DAY PARA DAR EL DIA EXACTO*/
  mydate = new Date(year, month, day);
  day = mydate.getDay();

/* 
se toma una desicion con base al numero dado en el DAY , para saber en caso dado de los 4 posibles que hay 
*/
  if (day == 0 || day == 6 || day == 7) {


    mensaje = ("el dia FUE FIN DE SEMANA DE TOMAR TONAYAN");

    document.getElementById("cambio").innerHTML = mensaje;
  }
  else {

    mensaje = ("el dia fue laborable :(");

    document.getElementById("cambio").innerHTML = mensaje;

  }














}/* 
 AIUDA NO PUEDO ENTENDER EL CICLO WHILE!!! SERCH :( */