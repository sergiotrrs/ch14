/*declaro las variables a usar*/

let contador = 0;
let meses = ["enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
]

/*cambia de idioma el contenido, dependiendo de valor del boton con id="idioma"
en cas que sea ingles se usara la funcion coversor mas para cambiar la variable meses a ingles*/

if (document.getElementById("idioma").value == "english") {
    document.getElementById("label-dia").innerHTML = "day";
    document.getElementById("label-mes").innerHTML = "month";
    document.getElementById("label-año").innerHTML = "year";
    document.getElementById("legend").innerHTML = "enter your date"
    document.getElementsByClassName("boton")[0].innerHTML = "go"
    document.getElementsByClassName("boton")[1].innerHTML = "go"
    meses = meses.map(i => conversorMes(i))








}

//crea las opciones de los dias del mes

while (contador <= 31) {

    document.getElementById("dias").appendChild(document.createElement("option"));
    document.getElementById("dias").children[contador].setAttribute("value", contador.toString());
    document.getElementById("dias").children[contador].innerHTML = contador.toString();



    contador++
}

//crea las opciones de los meses

for (let i = 0; i < meses.length; i++) {
    document.getElementById("meses").appendChild(document.createElement("option"))
    document.getElementById("meses").children[i].setAttribute("value", meses[i]);
    document.getElementById("meses").children[i].innerHTML = meses[i];
}

//crea las opciones ee los años

for (let i = 1970, j = 0; i < 2023; i++, j++) {
    document.getElementById("años").appendChild(document.createElement("option"));
    document.getElementById("años").children[j].setAttribute("value", i.toString());
    document.getElementById("años").children[j].innerHTML = i.toString();

}







/**
 * desencadena el despliege de la fecha usando inputs
 * 
 */
function fecha() {
    let dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    let año = document.getElementById("año").value;
    if (document.getElementById("idioma").value == "español") {
        mes = conversorMes(document.getElementById("mes").value)
        console.log(mes)


    }



    let fecha = new Date(`${mes} ${dia}, ${año} `);


    let day1 = fecha.getDay();
    let day2 = JSON.parse(JSON.stringify(day1));



    if (document.getElementById("idioma").value == "english") {
        document.getElementById("resultado").innerHTML = `${conversorDias(day2,"english")} ${document.getElementById("mes").value} ${dia} ${año} was ${diaslaborable(fecha.getDay(),"english")}`;

    } else {
        document.getElementById("resultado").innerHTML = `el dia ${conversorDias(day2,"español")} ${dia} ${document.getElementById("mes").value} de ${año} fue ${diaslaborable(fecha.getDay(),"español")}`;
    }
}



/**
 * desencadena el despliege de la fecha usando botones
 */
function fecha2() {
    let dia = document.getElementById("dias").value;
    var mes = document.getElementById("meses").value;
    let año = document.getElementById("años").value;
    if (document.getElementById("idioma").value == "español") {
        mes = conversorMes(document.getElementById("mes").value)
        console.log(mes)


    }



    let fecha = new Date(`${mes} ${dia}, ${año} `);


    let day1 = fecha.getDay();
    let day2 = JSON.parse(JSON.stringify(day1));



    if (document.getElementById("idioma").value == "english") {
        document.getElementById("resultado").innerHTML = `${conversorDias(day2,"english")} ${document.getElementById("meses").value} ${dia} ${año} was ${diaslaborable(fecha.getDay(),"english")}`;

    } else {
        document.getElementById("resultado").innerHTML = `el dia ${conversorDias(day2,"español")} ${dia} ${document.getElementById("meses").value} de ${año} fue ${diaslaborable(fecha.getDay(),"español")}`;
    }

}



/**
 * 
 * @param {number} dia 
 * @param {string} idioma 
 * @returns {string}
 */

function conversorDias(dia, idioma) {
    if (idioma == "español") {
        switch (dia) {

            case (1):
                dia = "lunes"
                break;

            case (2):
                dia = "martes"
                break;

            case (3):
                dia = "miercoles"
                break;

            case (4):
                dia = "jueves"
                break;

            case (5):
                dia = "viernes"
                break;


            case (6):
                dia = "sabado"
                break;

            case (0):
                dia = "domingo"
                break;

            default:
                dia = "desconocido"
                break;

        }
        return dia;
    } else {
        switch (dia) {

            case (1):
                dia = "monday"
                break;

            case (2):
                dia = "tuesday"
                break;

            case (3):
                dia = "wednesday"
                break;

            case (4):
                dia = "thursday"
                break;

            case (5):
                dia = "friday"
                break;


            case (6):
                dia = "saturday"
                break;

            case (0):
                dia = "sunday"
                break;

            default:
                dia = "uknown"
                break;

        }
    }
    return dia;

}

/**convierte un string al ingles
 * 
 * @param {stringy} mes 
 * @returns {string}
 */

function conversorMes(mes) {

    switch (mes) {


        case "enero":
            return "january";

        case "febrero":
            return "february";
        case "marzo":
            return "march";

        case "abril":
            return "april";

        case "mayo":
            return "may";

        case "junio":
            return "june";

        case "julio":
            return "july";

        case "agosto":
            return "august";

        case "septiembre":
            return "september";

        case "octubre":
            return "october";

        case "noviembre":
            return "november";

        case "diciembre":
            return "december";

    }




}
/**
 * indica si el dia es laborable, ya sea en español o ingles
 * @param {number} day 
 * @param {string} idioma 
 * @returns  {string}
 */

function diaslaborable(day, idioma = "español") {

    if (idioma == "español") {
        switch (day) {

            case (1):
            case (2):
            case (3):
            case (4):
            case (5):

                day = "dia laborable"
                break;
            case (6):
            case (0):


                day = "dia no laborable"



                break;

        }
        return day
    } else {
        switch (day) {

            case (1):
            case (2):
            case (3):
            case (4):
            case (5):

                day = "workday"
                break;
            case (6):
            case (0):


                day = "dayoff"



                break;

        }
        return day
    }
}