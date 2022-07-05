const sumar = function() {
    let prod = document.getElementById("campo1").value;
    let prod2 = document.getElementById("campo2").value;
    let resultado = Number(prod) + Number(prod2)




    document.getElementById("resultadosuma").innerHTML = "el resultado es: " + resultado.toString();

}

const restar = () => {
    let prod = document.getElementById("campo3").value;
    let prod2 = document.getElementById("campo4").value;
    let resultado = Number(prod) - Number(prod2)
    document.getElementById("resultadoresta").innerHTML = "el resultado es: " + resultado.toString();


}

const multiplicar = function() {
    let prod = document.getElementById("campo5").value;
    let prod2 = document.getElementById("campo6").value;
    let resultado = Number(prod) * Number(prod2)




    document.getElementById("resultadomultiplicacion").innerHTML = "el resultado es: " + resultado.toString();

}

const dividir = function() {
    let prod = document.getElementById("campo7").value;
    let prod2 = document.getElementById("campo8").value;
    let resultado = Number(prod) / Number(prod2)
    if (prod2 == 0) {
        document.getElementById("resultadodivision").innerHTML = "no se divide entre cero"

    } else {
        document.getElementById("resultadodivision").innerHTML = "el resultado es: " + resultado.toString();

    }






}