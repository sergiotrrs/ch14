function cambiaNombre(){
    let nombre1=prompt("Escribe tu nombre");
    document.getElementById("saludo").innerHTML = "Hola " + nombre1;
}

function suma(){
    a=parseInt(document.getElementById("A").value);
    b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a+b;
}

function resta(){
    a=parseInt(document.getElementById("A").value);
    b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a-b;
}

function multiplica(){
    a=parseInt(document.getElementById("A").value);
    b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a*b;
}

/*function divide(){
    a=parseInt(document.getElementById("A").value);
    b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a/b;
}*/

const divide = () => {
    a=parseInt(document.getElementById("A").value);
    b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a/b;
}
