const suma = () =>{
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const resul = parseFloat(num1) + parseFloat (num2);
    document.getElementById("resul").value = resul;
}

const resta = () =>{
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const resul = parseFloat(num1) - parseFloat (num2);
    document.getElementById("resul").value = resul;
}

const multiplicacion = () =>{
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const resul = parseFloat(num1) * parseFloat (num2);
    document.getElementById("resul").value = resul;
}

const division = () =>{
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const resul = parseFloat(num1) / parseFloat (num2);
    document.getElementById("resul").value = resul;
}

const limpiar=() => {
    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";
    document.getElementById("resul").value ="";
}