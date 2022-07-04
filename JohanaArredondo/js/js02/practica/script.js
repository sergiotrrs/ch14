function suma(n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)){

    document.getElementById("res").value = n1 + n2;
};

function resta(n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)){

    document.getElementById("res").value = n1 - n2;
};

function multiplica(n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)){

    document.getElementById("res").value = n1 * n2;
};

const div = (n1 = parseFloat(document.getElementById("n1").value), n2 = parseFloat(document.getElementById("n2").value)) => document.getElementById("res").
value = n1/n2;

