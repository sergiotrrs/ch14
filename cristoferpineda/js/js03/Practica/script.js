let dia;
let mes;
let año;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



function datos(){
    /*Asignar el valor ingresado en los id en variables d,m,a */
   d=document.getElementById("dia").value;
   m=document.getElementById("mes").value-1;//Se resta 1 porque en el arreglo que estan los datos se maneja por arreglo el 0 seria enero
   a=document.getElementById("año").value;
    const fecha = new Date(a, m, d);// esta funcion entrega la fecha ano/mes/dia
    console.log(fecha);

   if(d<1 || d>31){
   alert("Ingresa un dia dentro del rango de 1 a 31");
   document.getElementsById("dia").value="";
   }
   if(m<0 || m>12){
   alert("Ingresa un mes dentro del rango de 1 a 12");
   document.getElementsById("mes").value="";
   }
   if(a<1970 || a>9999){
   alert("Ingresa un año dentro del rango de 1970 a 9999");
   document.getElementsById("año").value="";
   }

 let dias=fecha.getDay();

  switch(dias){
    case 0:
      document.getElementById("resultado").innerHTML="Domingo, no laborable , eres libre";
      break;
    case 1:
      document.getElementById("resultado").innerHTML="Lunes, laborable (animo campeon)";
      break;
    case 2:
      document.getElementById("resultado").innerHTML="Martes, laborable (animo campeon)";
      break;
    case 3:
      document.getElementById("resultado").innerHTML="Miercoles, laborable (animo campeon)";
      break;
    case 4:
      document.getElementById("resultado").innerHTML="Jueves, laborable (animo campeon)";
      break;
    case 5:
      document.getElementById("resultado").innerHTML="viernes, laborable (animo campeon)";
      break;
    default:
      document.getElementById("resultado").innerHTML="Sabado, no laborable , eres libre";
      break;
  }  
  let bisiesto = a%4;
  if(bisiesto==0){//cuando el residuo sea igual a 0 imprime
  document.getElementById("bisiesto").innerHTML="El año " + a + " es bisiesto";
  }else{
  document.getElementById("bisiesto").innerHTML="El año " + a + " no es bisiesto";
  }
  
}
/* Botton clear
function borrar() {
    document.getElementById("d").value = "";
    document.getElementById("m").value = "";
    document.getElementById("a").value = "";
}
*/

   

   

