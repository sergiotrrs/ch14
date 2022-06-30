
/*Obtenemos los valores de los inputs día, mes y año y hace un filtro para evaluar
que el número del día y mes entren dentro de los rangos válidos */
function calcular() {
const dia =Number(document.getElementById("dia").value);
console.log(dia);
if(dia<0||dia>32) {
    prompt("Ingrese un día válido");

}
const mes = Number(document.getElementById("mes").value);
if(dia<0||dia>12) {
    prompt("Ingrese un mes válido");
    
}
console.log(mes);
const year = Number(document.getElementById("year").value);
console.log(year);


    const d = new Date(year, mes, dia);
    console.log(d);
    let day = d.getDay();
}

 