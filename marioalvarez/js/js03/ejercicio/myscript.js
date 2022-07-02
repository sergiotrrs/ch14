function workingDay(){

    let uDay=0;
    let uMonth=0;
    let uYear=0;
    let message;

    //Compruebo que sean valores válidos
    if(isNaN(uDay) || uDay<1 || uDay>31){
        message="Error, en campo dia.";
        return;
    }
    if(isNaN(uMonth) || uMonth<1 || uMonth>12){
        message="Error, en campo mes.";
        return;
    }
    //cuatro digitos
    if(isNaN(uYear) || uYear<1000){
        message="Error";
        return;
     }   
    //Creo un objeto date, con las propiedades de la fecha.
    const date = new Date(uYear,uMonth,uDay);
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

}