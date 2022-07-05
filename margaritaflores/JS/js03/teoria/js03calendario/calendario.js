/**
 * Definir variables
 * 
 */
function calcularDia (){
    let day = document.getElementById("d").value;
    let month = document.getElementById("m").value;
    let year = document.getElementById("a").value;
    let dateComplete = `${month}/${day}/${year}`;

    //${Para llamar a más de una variable}
    const date = new Date (dateComplete);


    if (day <0 || day >31){
        alert ("Ingrese un día valido");
    } else if (month <0 || month >12){
        alert ("Ingresa un mes valido");
    } else if ( year.toString().length !=4){
        alert ("Ingrese un año valido");
    }
    switch(date.getDay()){
        case 0:
            alert("Domingo Día no laborable");
            break;
        case 1:
            alert("Lunes Día laborable");
            break;
        case 2: 
        alert("Martes Día laborable");
            break;
        case 3:
            alert("Miercoles Día laborable");
            break;
        case 4:
            alert("Jueves Día laborable");
            break;
        case 5 :
            alert("Viernes Día laborable");
            break;
        case 6:
            alert("Sabado Día no laborable");
            break;
        default:
            console.log( "Día inválido");
            break;
    }
    
}




