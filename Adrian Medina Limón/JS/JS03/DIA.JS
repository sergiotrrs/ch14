



//const weekday = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];

let a1 = parseInt(document.getElementById("valor1").value);
let a2 = parseInt(document.getElementById("valor2").value);
let a3 = parseInt(document.getElementById("valor3").value);


const d = new Date("a1 +'a2'+","+ a3");
let day = d.getDay()


switch (d.getDay()) {
    case 0:
        console.log("domingo");
        document.getElementById("resultado").innerHTML = "domingo, dia laborable"
        break; 
    case 1:
        document.getElementById("resultado").innerHTML = "lunes, dia laborable"
        break; 
    case 2:
        console.log("martes");
        document.getElementById("resultado").innerHTML = "martes, dia laborable"
        break; 
    case 3:
        console.log("miercoles");
        document.getElementById("resultado").innerHTML = "miercoles, dia laborable"
        break; 
    case 4:
        console.log("jueves");
        document.getElementById("resultado").innerHTML = "jueves, dia laborable"
        break; 
    case 5:
        console.log("viernes");
        document.getElementById("resultado").innerHTML = "viernes, dia no laborable"
        break; 
    case 6:
        console.log("sabado");
        document.getElementById("resultado").innerHTML = "sabado, dia no laborable"
        break; 


}

//https://boisterous-empanada-ae1c17.netlify.app/
