function workingDay(){

    let uDay=Number(document.getElementById("uday").value);
    let uMonth=Number(document.getElementById("umonth").value);
    let uYear=Number(document.getElementById("uyear").value);
    let message="";
    
    //Compruebo que sean valores válidos
     if(uDay==0 && uMonth==0 && uYear==0){
        message="No se ingresó fecha.";
        document.getElementById("msg").value=message;
        return;
     }
    if(isNaN(uDay) || uDay<1 || uDay>31){
        message="Error, en campo dia.";
        document.getElementById("msg").value=message;
        return;
    }
    if(isNaN(uMonth) || uMonth<1 || uMonth>12){
        message="Error, en campo mes.";
        document.getElementById("msg").value=message;
        return;
    }
    //cuatro digitos
    if(isNaN(uYear) || uYear<1970){
        message="Error, en campo año.";
        document.getElementById("msg").value=message;
        return;
     }   
    //Creo un objeto date, con las propiedades de la fecha.
    const date = new Date(String(uYear+"-"+uMonth+"-"+uDay));
    //Obtengo el dia(0-6)
    let day = date.getDay();

    switch(day){
        case 0:
            message="Domingo, dia no laborable.";
            break;
        case 1:
            message="Lunes, dia laborable.";
            break;
        case 2:
            message="Martes, dia laborable.";
            break;
        case 3:
            message="Miercoles, dia laborable.";
            break;
        case 4:
            message="Jueves, dia laborable.";
            break;
        case 5:
            message="Viernes, dia laborable.";
            break;
        default:
            message="Sabado, dia no laborable.";
            break;
    }

    document.getElementById("msg").value=message;

}