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
        message="Error, en campo día.";
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
    //El mes inicia de 0-11;
    //Creo un objeto date, con las propiedades de la fecha.
    const date = new Date(uYear,--uMonth,uDay);
     /*En esta comprobación, getate es la importante (las otras ya las filtré), para 30 de ferbrero regresa 2 (se desborda) */
    if (date.getFullYear() != uYear || date.getMonth() != uMonth && date.getDate() != uDay) {
        message="Error, fecha no válida.";
        document.getElementById("msg").value=message;
        return;
    }
    //Obtengo el dia(0-6)
    let day = date.getDay();

    switch(day){
        case 0:
            message="Domingo, fin de semana.";
            break;
        case 1:
            message="Lunes, día laborable.";
            break;
        case 2:
            message="Martes, día laborable.";
            break;
        case 3:
            message="Miercoles, día laborable.";
            break;
        case 4:
            message="Jueves, día laborable.";
            break;
        case 5:
            message="Viernes, día laborable.";
            break;
        default:
            message="Sabado, fin de semana.";
            break;
    }

    document.getElementById("msg").value=message;

}