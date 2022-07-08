//Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let a=parseInt(prompt("Escribe un número (mayor o igual a 100 y menor o igual a 200)"));

if (a>=100 && a<=200){
    function moduloDiv (a) {
        return a%3;
    }
    //console.log("el modulo es "+ moduloDiv(a));

    if (moduloDiv(a)==0){
        alert("El número "+ a + " es múltiplo de 3");
    }
    else {
        alert("El número "+ a + " no es múltiplo de 3");
    }
    
}

else {
    alert("El número no está en el rango permitido");
}