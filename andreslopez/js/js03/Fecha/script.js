
const checar = () => {
    //Me resulta más "limpio" llamar a cada valor que crear una función fuera de "checar" para tener los valores de los input.
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let año = parseInt(document.getElementById("año").value);

    let completa = mes + " " + dia + " , " + año;
    console.log(completa);
    const fecha = new Date(completa);
    let numeroDia = fecha.getDay();
    console.log(numeroDia);

    switch (numeroDia) {
        case 0:
            document.getElementById("respuesta").innerHTML = "Ese día fue domingo y no fue laboral."
            break;
        case 1:
            document.getElementById("respuesta").innerHTML = "Ese día fue lunes y fue laboral."
            break;
        case 2:
            document.getElementById("respuesta").innerHTML = "Ese día fue martes y fue laboral."
            break;
        case 3:
            document.getElementById("respuesta").innerHTML = "Ese día fue miércoles y fue laboral."
            break;
        case 4:
            document.getElementById("respuesta").innerHTML = "Ese día fue jueves y fue laboral."
            break;
        case 5:
            document.getElementById("respuesta").innerHTML = "Ese día fue viernes y fue laboral."
            break;
        case 6:
            document.getElementById("respuesta").innerHTML = "Ese día fue sábado y no fue laboral."
            break;
    }


}

//El extra que le agrego es una calculadora de fase lunar creada por Jason Sturges. 
//De momento me limito al código mostrado en su post, pero cuenta con una librería que incluso cuenta con emojis para cada fase.
// https://jasonsturges.medium.com/moons-lunar-phase-in-javascript-a5219acbfe6e

const faseLunar = () => {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let año = parseInt(document.getElementById("año").value);

    let completa = mes + " " + dia + " , " + año;  

    const getJulianDate = (date = new Date()) => {
        const time = date.getTime();
        const tzoffset = date.getTimezoneOffset()      

        return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
    }

    getJulianDate(date = new Date(completa));
    //Llamo a mi función y tengo la fecha juliana

    const normalize = value => {
        value = value - Math.floor(value);
        if (value < 0)
            value = value + 1
        return value;
    }
 
    const LUNAR_MONTH = 29.530588853;

    const getLunarAgePercent = (date = new Date()) => {
        return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
    }
  
    
    const getLunarAge = (date = new Date()) => {
        const percent = getLunarAgePercent(date);
        const age = percent * LUNAR_MONTH;
        return age;
    }
    getLunarAge(date = new Date(completa));
    //Llamo a la edad lunar
   
//Solo cambio el texto del return para que se ajuste a mi página.
    const getLunarPhase = (date = new Date()) => {
        const age = getLunarAge(date);
        if (age < 1.84566)
            return "La fase lunar ese día era: Luna nueva. 🌑";
        else if (age < 5.53699)
            return "La fase lunar ese día era: Creciente. 🌒";
        else if (age < 9.22831)
            return "La fase lunar ese día era: Cuarto creciente. 🌓";
        else if (age < 12.91963)
            return "La fase lunar ese día era: Creciente convexa. 🌔";
        else if (age < 16.61096)
            return "La fase lunar ese día era: Luna llena. 🌕";
        else if (age < 20.30228)
            return "La fase lunar ese día era: Menguante convexa. 🌖";
        else if (age < 23.99361)
            return "La fase lunar ese día era: Cuarto menguante. 🌗";
        else if (age < 27.68493)
            return "La fase lunar ese día era: Menguante. 🌘"; return "La fase lunar ese día era: Luna Nueva. 🌑"; //No logré comprender este último return, pero si lo muevo ya no funciona.
    }
    console.log(getLunarPhase(new Date(completa))); //Este console.log fue para poder verficar que en efecto da la fase.
    document.getElementById("luna").innerHTML = getLunarPhase(new Date(completa));

}