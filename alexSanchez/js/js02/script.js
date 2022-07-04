/* Los comentarios de la priemra funcion se pueden trasladar a las otras funciones */
function suma(){
    let A = parseInt(document.getElementById("a").value); //obtego valor de a y b, me aseguro que solo tome valores numericos
    let B = parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML= A+B; //lo imprimo en el boton resultado usando la id "c"

}

function resta(){
    let A = parseInt(document.getElementById("a").value);
    let B = parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML= A-B;
    
}

function mult(){
    let A = parseInt(document.getElementById("a").value);
    let B = parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML= A*B;
    
}

function division(){
    let A = parseInt(document.getElementById("a").value);
    let B = parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML= A/B;
    
}

/* Intente hacer una funcion flecha recogiendo los valores en las id a y b sin resultado */