//Abigail Elizabeth Dorantes Juarez

//se declara funcion para determinar si es un dia laboral o no 

function calcularFecha(){
    let dia = parseInt(document.getElementById("dia").value); //se traen datos introducidos en la variable dia y se convierte en entero 
    let mes = parseInt(document.getElementById("mes").value); //se traen datos introducidos en la variable mes y se convierte en entero 
    let anio = parseInt(document.getElementById("anio").value); //se traen datos introducidos en la variable anio y se convierte en entero 

    if (dia <= 0 || dia > 31 || mes <= 0 || mes > 12 || anio <= 1970) {
        alert("Porfavor introduce un valor válido");
        //si la fecha introducida no esta dentro de los parametros establecidos mandara un mensaje de alerta para introducir valores validos 
    }

    let formato = mes + " / " + dia + " / " + anio; // se ordena en este formato para que la fecha pueda ser leida de manera correcta iniciando por el mes, dia y año
    const fecha = new Date(formato); //Para crear una nueva instancia del objeto Date, (fecha de referencia), que es el 1 de enero de 1970.  
    let num = fecha.getDay(); //este método devuelve el día de la semana para la fecha especificada según la hora local, donde 0 representa el domingo.


    //con switch segun el numero de dia que tome empezando por el 0-domingo, es el mensaje que se imprimira en el id result 
    switch (num) {
        case 0:
            document.getElementById("result").innerHTML = "Domingo, día no laboral"
            break;
        case 1:
            document.getElementById("result").innerHTML = "Lunes, día laboral"
            break;
        case 2:
            document.getElementById("result").innerHTML = "Martes, día laboral"
            break;
        case 3:
            document.getElementById("result").innerHTML = "Miercoles, día laboral"
            break;
        case 4:
            document.getElementById("result").innerHTML = "Jueves, día laboral"
            break;
        case 5:
            document.getElementById("result").innerHTML = "Viernes, día laboral"
            break;
        case 6:
            document.getElementById("result").innerHTML = "Sabado, día no laboral"
            break;
    }
}
