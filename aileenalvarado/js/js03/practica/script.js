
function calcularDiaYLaborable(){
    let diaElemento = document.getElementById("dia");
    let mes = document.getElementById("mes"); 
    let anio = document.getElementById("anio");
    let resultado = document.getElementById("resultado");

    let fecha = convertirADate(diaElemento.value, mes.value, anio.value);
    let dia = calcularDia(fecha);
    let laborable = calcularLaborable(fecha);
    resultado.value = dia + " " + laborable;
} 

function convertirADate(dia, mes, anio){
    return new Date(anio, mes, dia);
}

function calcularDia(fecha){
    const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    return dias[fecha.getDay()];
}

function calcularLaborable(fecha){
    switch (fecha.getDay()) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return "laborable"
          
        case 6:
        case 0:
          return "no laborable";
      }
}
