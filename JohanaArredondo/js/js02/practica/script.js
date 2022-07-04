//Funcion suma
function suma(n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)){

    document.getElementById("res").value = n1 + n2;
};

//Funcion resta
function resta(n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)){

    document.getElementById("res").value = n1 - n2;
};

//Funcion multiplicacion
function multiplica(n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)){

    document.getElementById("res").value = n1 * n2;
};


//Funcion division con arrow function
const div = (n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)) => document.getElementById("res").
value = n1/n2;

