//funcion solicitar un entero (entre el 100 y el 200) y determinar si es multiplo de 3
function multipleDe3() {
    alert("programa para determinar si un numero es multiplo de 3");
    let numero = parseInt( prompt("ingersa un numero entre 100 y 200"));
    if( numero%3==0 && numero>=100 && numero<=200 ){
        alert(`${numero} es multiplo de 3`);
    }
    else if( numero>=100 && numero<=200 ){
        alert(`${numero} no es multiplo de 3`);
    }
    else{
        alert(`el numero no esta dentro del rango `);
    }
}
multipleDe3();