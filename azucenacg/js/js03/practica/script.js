

// Script de CALENDARIO 

//callData calls the data from the inputs and returns a full date 
const callData= function (){
  
    let month=document.getElementById("mes").value;
    let day=document.getElementById("dia").value;
    let year=document.getElementById("año").value;

    let date= month+ " "+ day + " " + year;

    return date;
};


/**giveDay uses the date from the callData function 
 * to get the day of the week of that specific date
*/
const giveDay= function (){

    const weekday = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

    const d = new Date(callData());
    
    let theDay = weekday[d.getDay()];

    return theDay;
    
};

/**typeOfDay uses the calculated day (theDay) from the function "giveDay"
 * to specify is it is laborable or not and print it on screen 
 */

// This is the function that the button calls 
function typeOfDay (){
 switch (giveDay()) {

    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        let diaLaboral= giveDay() + ", día laborable";
        document.getElementById("resul").value=diaLaboral;
        break;

    case "Sábado":
    case "Domingo":
        let finDe= giveDay() + ", fin de semana";
        document.getElementById("resul").value=finDe;
        break;

    default:
        document.getElementById("resul").value="Opción invalida";   
        break;

}

}