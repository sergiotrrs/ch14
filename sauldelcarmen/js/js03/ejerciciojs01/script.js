function calcular(){
let a = document.getElementById("day").value;
let c = document.getElementById("year").value;
      let b = document.getElementById("month").value;
    switch (b) {
    case "01":{
	console.log("Enero");
	    let e = "Enero";	
	    let d = "January";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    console.log(a);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
           }
 	    break;
    case "02":{
	console.log("Febrero");
	    let e = "Febrero";	
	    let d = "February";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
    	    }
           }
	break;
    case "03":{
	console.log("Marzo");
	    let e = "Marzo";
	    let d = "March";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
           }
	break;
    case "04":{
	console.log("Abril");
	    let e = "Abril";
	    let d = "April";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	}
	}
	break;
    case "05":{
	console.log("Mayo");
	    let e = "Mayo";
	    let d = "May";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
	    }
	break;
    case "06":{
	console.log("Junio");
	    let e = "Junio";
	    let d = "June";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	}
	}
	break;
    case "07":{
	console.log("Julio");
	    let e = "Julio";
	    let d = "July";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
	    }
	break;
    case "08":{
	console.log("Agosto");
	    let e = "Agosto";
	    let d = "August";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
	    }
	break;
    case "09":{
	console.log("Septiembre");
	    let e = "Septiembre";
	    let d = "September";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
	    }
	break;
    case "10":{
	console.log("Octubre");
	    let e = "Octubre";
	    let d = "October";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
	    }
	break;
    case "11":{
	console.log("Noviembre");
	    let e = "Noviembre";
	    let d = "November";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	    }
	    }
	break;
    case "12":{
	console.log("Diciembre");
	    let e = "Diciembre";
	    let d = "December";
            const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            let fecha = new Date(`${d} ${a},${c} 00:00:00`).getDay();
	    console.log(fecha);
            let nombreDia = dias[fecha];
            console.log("Número de día de la semana: ", nombreDia);
	    if(fecha == 0 || fecha == 6){
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
            document.getElementById("labora").innerHTML = "No es";
	    }else{
            document.getElementById("Fecha").innerHTML = "El dia "+a+" de "+e+" del "+c+" es "+nombreDia;
	}
	    }
	break;
	default:
	console.log("Error");
	break;
}
}
