const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const anio = document.getElementById('anio');
const resultado = document.getElementById('resultado');
const btnResult = document.getElementById('calcular');
btnResult.addEventListener('click', calcularDia);
function calcularDia() {
    if (anio.value !== '' && mes.value !== '' && dia.value !== '') {
        const fechaString = `${anio.value}/${mes.value}/${dia.value}`;
        const fecha = new Date(fechaString);
        let diaLaborable;
        let diaString = '';
        console.log(fecha.getDay());
        switch (fecha.getDay()) {
            case 0:
                console.log("Domingo");
                diaLaborable = false;
                diaString = "Domingo";
                break;
            case 1:
                console.log("Lunes");
                diaLaborable = true;
                diaString = "Lunes";
                break;
            case 2:
                console.log("Martes");
                diaLaborable = true;
                diaString = "Martes";
                break;
            case 3:
                console.log("Miercoles");
                diaLaborable = true;
                diaString = "Miercoles";
                break;
            case 4:
                console.log("Jueves");
                diaLaborable = true;
                diaString = "Jueves";
                break;
            case 5:
                console.log("Viernes");
                diaLaborable = true;
                diaString = "Viernes";
                break;
            case 6:
                console.log("Sabado");
                diaLaborable = false;
                diaString = "Sabado";
                break;
            default:
                console.log("Ninguno");
                break;
        }
        let mensaje = '';
        if (diaLaborable) {
            mensaje = `El dia es: ${diaString} y es laborable`;
        }
        else {
            mensaje = `El dia es: ${diaString} y no es laborable`;
        }
        resultado.value = mensaje;
    }else
    {
        resultado.value = "Ingrese los datos correctos"
    }
}