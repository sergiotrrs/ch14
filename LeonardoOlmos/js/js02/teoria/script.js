console.log("funciones")

function myFuncion(a, b) {
    return a * b;

}

const suma = function(a, b) {
    return a + b;
}

//-------------------------------------------
console.log("el resultado es: " + myFuncion(3, 5))
console.log("el resultado es: " + suma(3, 5))

//-----------------------------------------------
function resta(a, b, c) {
    return a(c, c) + b(c, c)
}


console.log("la resta es " + resta(suma, myFuncion, 3))

//---------------------------------------------------------const persona

const persona = {
    apellido: "olmos",
    suma: 1,
    sumar: function(a, b) {
        this.suma = a + b
    }
}

console.log(persona.suma)
persona.sumar(1, 2)
console.log(persona.suma)