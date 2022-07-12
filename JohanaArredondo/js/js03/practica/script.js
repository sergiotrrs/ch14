//Funcion suma
function calcular(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);

    let confe= n2 + " / " + n1 + " / " + n3; 
    const fecha = new Date(confe); 
    let menu = fecha.getDay(); 

    
    switch (menu) {
        case 0:
            document.getElementById("res").innerHTML = "Domingo, descansito c:"
            break;
        case 1:
            document.getElementById("res").innerHTML = "Lunes, día laborable :c"
            break;
        case 2:
            document.getElementById("res").innerHTML = "Martes, día laborable :c"
            break;
        case 3:
            document.getElementById("res").innerHTML = "Miercoles, día laborable :c"
            break;
        case 4:
            document.getElementById("res").innerHTML = "Jueves, día laborable :c"
            break;
        case 5:
            document.getElementById("res").innerHTML = "Viernes, día laborable :c"
            break;
        case 6:
            document.getElementById("res").innerHTML = "Sabado, descansito c:"
            break;
    }

}
