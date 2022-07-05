/**
 * funcion que mediante la fecha ingresa calcula el dia de la semana 
 * y si fue laborable o no
 */
function diaLaborable() {
    let day = document.getElementById("day").value;//se obtiene el valor del dia por medio del Id
    let month = document.getElementById("month").value;//se obtiene el valor del mes por medio del Id
    let year = document.getElementById("year").value;//se obtiene el valor del anio por medio del Id
    let workingDay;//variable donde se almacenara si fue dia loborable o no
    //indices            0          1        2          3           4         5         6 
    const weekDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
   
    //se almacenara el valor del dia de la semana el cual sera un numero del 0 al 6 
    //donde el 0 es domingo y 6 sabado
    const weekDay = new Date(year,month,day).getDay();
   
    //con el switch dependiendo de que dia es se le guardara el valor de no laborable o laborable
    switch (weekDays[weekDay]) {
        case "Domingo":
        case "Sabado":
            workingDay = "no laborable";
            break;
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            workingDay = "laborable";
            break;
    }
    //se muestra el dia de la semana y si es laborable 
    document.getElementById("result").innerHTML = `${weekDays[weekDay]}, dia ${workingDay}`;
}
