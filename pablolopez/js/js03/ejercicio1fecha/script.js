

function calcular(){
    let d = document.getElementById("d").value;
    let m = document.getElementById("m").value;
    let a = document.getElementById("a").value;
    console.log(d+m+a);
    switch(m){
        case "Enero":{
            m = "January";break;
        }
        case "Febrero":{
            m = "February";break;
        }
        case "Marzo":{
            m = "March";break;
        }
        case "Abril":{
            m = "April";break;
        }
        case "Mayo":{
            m = "May";break;
        }
        case "Junio":{
            m = "June";break;
        }
        case "Julio":{
            m = "July";break;
        }
        case "Agosto":{
            m = "August";break;
        }
        case "Septiembre":{
            m = "September";break;
        }
        case "Octubre":{
            m = "October";break;
        }
        case "Noviembre":{
            m = "November";break;
        }
        case "Diciembre":{
            m = "December";break;
        }
    }
    console.log(d+m+a);

    //const fecha = new Date("July 21, 1983");
    const fecha = new Date(m + " "+ d + ", " + a);
    let dia = fecha.getDay();
    console.log(dia);

    let laboral;
    switch(dia){
        case 0:
        case 6:
            laboral = ", día no laboral.";break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            laboral = ", día laboral.";break;        
    }

    const semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

    dia = semana[fecha.getDay(dia)];

    if(a>=0 && a<=4000)document.getElementById("res").innerHTML = dia + laboral;
    else document.getElementById("res").innerHTML = "Introduce de nuevo el año";

    


}


