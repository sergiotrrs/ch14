function leerDatos(){
    const a=document.getElementById("valor1").value;
    const b=document.getElementById("valor2").value;
    return {a: a, b:b};
}

function sumar(){
    dato = leerDatos();  
    document.getElementById("result").innerHTML = parseFloat(dato.a) + parseFloat(dato.b);
}

function restar(){
    dato = leerDatos();
    document.getElementById("result").innerHTML = dato.a - dato.b;
}
function multiplicar(){
    dato = leerDatos();
    document.getElementById("result").innerHTML = dato.a * dato.b;
}
const dividir = () => {
    dato = leerDatos();
    document.getElementById("result").innerHTML = dato.a / dato.b;
}