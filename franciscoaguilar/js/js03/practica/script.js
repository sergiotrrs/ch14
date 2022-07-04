
/*Obtenemos los valores de los inputs día, mes y año y hace un filtro para evaluar
que el número del día y mes entren dentro de los rangos válidos */
function calcular() {
const dia =Number(document.getElementById("dia").value);
console.log(dia);
if(dia<0||dia>32) {
    prompt("Ingrese un día válido");

}

let select = document.getElementById('mes');
let mes =Number( select.options[select.selectedIndex].value)-1;
console.log(mes);



const year = Number(document.getElementById("year").value);
console.log(year);

//Se obtiene la fecha con los valores proporcionados por el usuario y obtenemos el día de la semana
    const d = new Date(year, mes, dia);
    console.log(d);
    let day = d.getDay();; 

    //Con el valor obtenido del día de la semana imprimimos un mensaje para cada día
switch(day){
    case 0:
        document.getElementById("calculo").value = "Domingo, fin de semana, descanso";
        console.log("Domingo, fin de semana");
        break;
    case 1:
        document.getElementById("calculo").value = "Lunes, dia laborable";
        console.log("Lunes, dia laborable");
        break;
    case 2:
        document.getElementById("calculo").value = "Martes, dia laborable";
        console.log("Martes, dia laborable");
        break;
    case 3:
        document.getElementById("calculo").value = "Miércoles, dia laborable";
        console.log("Miércoles, dia laborable");
        break;
    case 4:
        document.getElementById("calculo").value = "Jueves, dia laborable";
        console.log("Jueves, dia laborable");
        break;
    case 5:
        document.getElementById("calculo").value = "Viernes, dia laborable";
        console.log("Viernes, dia laborable");
        break;
    case 6:
        document.getElementById("calculo").value = "Sábado, fin de semana, descanso";
        console.log("Sábado, fin de semana");
        break;
    default:
        console.log("Día inválido");
        break;
}
//Se cambia la imagen dependiendo si es fin de semana o no
if(day == 0 || day == 6){
let imagen = document.getElementById("imagen");
imagen.src = "https://www.nacionflix.com/__export/1645305018597/sites/debate/img/2021/09/16/los-simpson-homero.jpg_976912859.jpg"
}else{
let imagen = document.getElementById("imagen");
imagen.src = "https://miro.medium.com/max/1024/1*Q0T6a00NozXqg38eWOx2sg.jpeg"
}

}

 
