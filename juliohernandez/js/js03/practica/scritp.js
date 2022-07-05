let a, m, d;
let respuesta, fecha = new Date();
document.getElementById("año").placeholder = fecha.getFullYear();
document.getElementById("mes").placeholder = fecha.getMonth() + 1;
document.getElementById("dia").placeholder = fecha.getDate();

let weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//Botón
document.getElementById("calcula").onclick = function () {
    //No campos vacios
    if (isNaN(a) || isNaN(m) || isNaN(d)) {
        alert("Ingrese datos primero");
    } else {
        
        /* //El año 1582
        if (a==1582)if(m==10)if(d>4&&d<15)d=15; 
        El 4/10/1582 del calendario juliano, el calendario gregoriano entró en vigor; por lo
        que los días del 5 al 15 de octubre no "existieron" para los que estuvieron presentes; pero
        sí para el calendario juliano*/

        //Declaración de fecha
        fecha.setFullYear(a,m-1,d);

        //Mostrar la fecha que se está  evaluando
        document.getElementById("año").value = fecha.getFullYear();
        document.getElementById("mes").value = fecha.getMonth() + 1;
        document.getElementById("dia").value = fecha.getDate();

        let dia = weekday[fecha.getDay()];

        switch (fecha.getDay()) {
            case 0: case 6:
                respuesta = `${dia}, día no laboral :)`;
                break;
            default:
                respuesta = `${dia}, día laboral. Sorry.`;
        }
        document.getElementById("resultado").value = respuesta;
    }
}

//Validación de datos
//Año
document.getElementById("año").onchange = () => {
    a = Number(document.getElementById("año").value);

    if (!a % 1 == 0) {
        document.getElementById("año").value = parseInt(a);
        a = parseInt(a);
    }
    
    
}

//Mes
document.getElementById("mes").onchange = () => {
    m = Number(document.getElementById("mes").value);
    if (m>12)document.getElementById("mes").value=12;
    if (m<=0)document.getElementById("mes").value=1;
    
    m = Number(document.getElementById("mes").value);
    
    if (!m % 1 == 0) {
        document.getElementById("mes").value = parseInt(m);
        m = parseInt(m);
    }
    
    
}

//Día
document.getElementById("dia").onchange = () => {
    d = Number(document.getElementById("dia").value);

    if (d>31)document.getElementById("dia").value=31;
    if (d<=0)document.getElementById("dia").value=1;
    
    d = Number(document.getElementById("dia").value);

    if (!d % 1 == 0) {
        document.getElementById("dia").value = parseInt(d);
        d = parseInt(d);
    }
    
}


/**
 * Validación @blur}
 *  NO decimales
 *  NO negativos
 *  NO campos vacíos
 * 1582
 * Mostrar qué fecha se está evaluando
 * Año 0?
 */
