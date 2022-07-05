function leerDatos(){
    const a=parseInt(document.getElementById("A").value);
    const b=parseInt(document.getElementById("B").value);
    return {a: a, b:b};
}

function suma(){
    dato = leerDatos();
    document.getElementById("C").innerHTML = dato.a +dato.b;
}

function resta(){
    let a=parseInt(document.getElementById("A").value);
    let b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a-b;
}

function multiplica(){
    const a=parseInt(document.getElementById("A").value);
    const b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a*b;
}

/*function divide(){
    const a=parseInt(document.getElementById("A").value);
    const b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a/b;
}*/

const divide = () => {
    const a=parseInt(document.getElementById("A").value);
    const b=parseInt(document.getElementById("B").value);
    document.getElementById("C").innerHTML = a/b;
}
