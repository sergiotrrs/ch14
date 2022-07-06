let dia, mes, year, fecha;

const weekday = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

function unir(){
    dia=document.getElementById("dia").value; //Recoger valor de día de la pagina
    mes=document.getElementById("mes").value; //Recoger valor de mes de la pagina
    year=document.getElementById("year").value; //Recoger valor de año de la pagina
   
   let fecha = mes + "/" + dia + "/" + year + "/"; //De esta forma es el resultado de la fecha
   d = new Date (fecha); //lo agrego a New Date
    let tuDia = weekday[d.getDay()]; //Me devuelve la fecha ya con el día de la semana
    
   switch (tuDia) {
    case weekday[0]:{
        console.log("Fin de semana");
        document.getElementById("result").innerHTML = tuDia + " = Fin de semana";
        break;
        }
    case weekday[1]:{
        console.log("Día laboral");
        document.getElementById("result").innerHTML = tuDia + " = Día laboral, hay que generar";
        break;
    }
    case weekday[2]:{
        console.log("Día laboral");
        document.getElementById("result").innerHTML = tuDia + " = Día laboral, hay que generar";
        break;
    }
    case weekday[3]:{
        console.log("Día laboral");
        document.getElementById("result").innerHTML = tuDia + " = Día laboral, hay que generar";
        break;
    }
    case weekday[4]:{
        console.log("Día laboral");
        document.getElementById("result").innerHTML = tuDia + " = Día laboral, hay que generar";
        break;
    }
    case weekday[5]:{
        console.log("Día laboral");
        document.getElementById("result").innerHTML = tuDia + " = Día laboral, hay que generar";
        break;
    }
    case weekday[6]:{
        console.log("Fin de semana");
        document.getElementById("result").innerHTML = tuDia + " = Fin de semana";
        break;
    }
    default:{
        console.log("Invalido");
        document.getElementById("result").innerHTML = "Ingresa una fecha valida";
        break;
    }
}
}


/*const laboralDay = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
const weekend = ["Sabado", "Domingo"];

const d = new Date();
let week = weekend[d.getDate()];
let laboral = laboralDay[d.getDay()];
console.log("Los días laborales son: " + laboral);
console.log("Los días de fin de semana son: " + week);
*/

//document.getElementById("demo").innerHTML = day;


//const weekday = ["Domingo", "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

//const d = new Date("July 2, 2022");
//let day = d.getDay()
//document.getElementById("demo").innerHTML = day;



/*
function resultado(){
    fecha = unir();
    day = fecha.dia + fecha.mes + fecha.year;
    
    document.getElementById("resultado").innerHTML = tuDia;
}
*/

/*function unir(){
    let dia=document.getElementById("dia").value;
    let mes=document.getElementById("mes").value;
    let year=document.getElementById("año").value;
   // let unir=agrupar(parseFloat(dia), parseFloat(mes), parseFloat(mes))
}

/*let fecha = dia()+mes();
    console.log (fecha);*/

//Function agrupar

//const agrupar = (dia,mes,year) => " " + dia + mes + year;
//console.log(agrupar);