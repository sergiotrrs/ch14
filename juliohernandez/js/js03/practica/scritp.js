let a, m, d;
let respuesta;

let weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

document.getElementById("calcula").onclick = function () {
    a = Number(document.getElementById("año").value);
    m = Number(document.getElementById("mes").value);
    d = Number(document.getElementById("dia").value);

    if (a <= 0 || (m <= 0 || m>12)|| (d <= 0 || d>31)) {
        alert("Ingresa una fecha válida");
        document.getElementById("año").value="";
        document.getElementById("mes").value="";
        document.getElementById("dia").value="";
    } else {
        let fecha = new Date(a, m - 1, d);
        let dia = weekday[fecha.getDay()];

        switch (fecha.getDay()) {
            case 0: case 6:
                respuesta = `${dia}, día no laboral`;
                break;
            default:
                respuesta = `${dia}, día laboral. Sorry.`;
        }

        document.getElementById("resultado").value = respuesta;
    }
}
/**
 * Validación @blur
 * Mostrar días posibles según el mes y el año
 * Mostrar qué fecha se está evaluando
 * Año 0?
 */
