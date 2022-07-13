function datos() {
    let dia = document.getElementById("dia").value; 
    let mes = document.getElementById("mes").value-1;
    let anio = document.getElementById("anio").value;   
    
    const date = new Date(dia, mes, anio);
    console.log(date);
    
    //Puse un solo "if" porque solo quiero poner un "alert" y así hacer menos líneas.
    if ((dia < 1 || dia > 31) || (mes < 0 || mes > 13) || (anio < 0001 || anio >= 3000)) {
        alert("Los datos que ingresaste puede que sean incorrectos o lejanos a la fecha actual. Por favor ingresa otros datos.");
    }


    const fecha = new Date(anio, mes, dia);
    console.log(fecha);
  
    let diasSemana = fecha.getDay();

    switch (diasSemana) {
        case 0:
            document.getElementById("tuDia").innerHTML = "Domingo, no laborable";
            break;
        case 1:
            document.getElementById("tuDia").innerHTML = "Lunes, laborable";
            break;
        case 2:
             document.getElementById("tuDia").innerHTML = "Martes, laborable";
            break;
        case 3:
            document.getElementById("tuDia").innerHTML = "Miércoles, laborable";
            break;
        case 4:
            document.getElementById("tuDia").innerHTML = "Jueves, laborable";
            break;
        case 5:
            document.getElementById("tuDia").innerHTML = "Viernes, laborable";
            break;
        default:
            document.getElementById("tuDia").innerHTML = "Sábado, no laborable";


    }
    let aniBisiesto=anio%4;

    if(aniBisiesto==0){
        document.getElementById("anioBisiesto").innerHTML = "Año bisiesto"; 
    }
    else{
        document.getElementById("anioBisiesto").innerHTML = "Año no bisiesto"; 
    }
}
function borrar(){
    document.getElementById("dia").value= "";
    document.getElementById("mes").value= "";
    document.getElementById("anio").value= "";
    document.getElementById("anioBisiesto").innerHTML = "Tipo de año";
    document.getElementById("tuDia").innerHTML = "Día de la semana";
}