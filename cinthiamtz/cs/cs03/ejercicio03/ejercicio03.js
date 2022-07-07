//Algoritmo: Realizar un algoritmo para adivinar un número entre el 1 y el 100  

alert("Piensa un numero que se encuentre entre el rango de 1 y 100");
console.log("Piensa un numero que se encuentre entre el rango de 1 y 100");

// Definición de variable
let inf = 1;
let sup = 100;
let mitad = parseInt((inf + sup) / 2);

for (let i = 0; i < 50; i++) {
    let respuesta = prompt(" EL número que piensas es " + mitad + " SI/NO");
    //Primera opción es que halla acertado el numero
    if (respuesta.toUpperCase() == "SI") {
        alert("He adivinado el numero es "+ mitad);
        console.log("He adivinado el numero es " + mitad);
        break
    }
    // si todavia no adivina el numero    
    else {
        //Le pregunta si es mayor
        let respuesta = prompt(" Tu numero es MAYOR a " + mitad + " SI/NO");
        if (respuesta.toUpperCase() == "SI") {
            inf = mitad;
            mitad = parseInt((inf + sup) / 2);
        }
        else {
            sup = mitad;
            mitad = parseInt((inf + sup) / 2);
        }
    }
}
