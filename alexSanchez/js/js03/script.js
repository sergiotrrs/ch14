function diaSemana(){
    const A = document.getElementById("a").value;
    const B = document.getElementById("b").value;
    const C = document.getElementById("c").value;
    let day= new Date(C, B, A); // Utilize este orden porque es el formato que puede reconocer la funcion aaaa, mm, dd
    let days= day.getDay(); //obteniendo numero del 0 al 6 no es necesario usar arreglo para definir el dia
    switch(days){
        case 0:
            document.getElementById("dayz").innerHTML = "Domingo, dia no laborable."
            break;
        case 1:
            document.getElementById("dayz").innerHTML = "Lunes, dia laborable"
            break;
        case 2:
            document.getElementById("dayz").innerHTML = "Martes, dia laborable"
            break;
        case 3:
            document.getElementById("dayz").innerHTML = "Miercoles, dia laborable"
            break;
        case 4:
            document.getElementById("dayz").innerHTML = "Jueves, dia laborable"
            break;
        case 5:
            document.getElementById("dayz").innerHTML = "Viernes, dia laborable"
            break;
        case 6:
            document.getElementById("dayz").innerHTML = "Sabado, dia no laborable"
            break;      
    }
}



/*const day = new Date(a,b,c).getDay()
alert()



const nombreDelDiaSegunFecha = fecha => [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ][new Date(fecha).getDay()];


  
  switch (dia){
    case domingo
  }*/
  