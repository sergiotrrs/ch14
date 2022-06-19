//Poderosísimo código para adivinar un número
//Algoritmo chuleadísimo por ser de letras y sacarlo

let numero = window.prompt("Inserte un número entero entre 1 y 100");

parseInt(numero);
//Aquí nos aseguramos que el número esté entre 1 y 100
while (true) {
    if (numero >= 1 && numero <= 100) {
        break;
    }
    else {
        numero = window.prompt("El número no está entre 1 y 100. Inserte otro número");
    }
}


//Se llama a una variable adivinando, que cambiará para adivinar según mayor o menor al número ingresado
let indAdivinando = 50;

window.confirm(`¿Tu número era ${indAdivinando}?`);
//Revisa tres posibilidades. El número es igual a lo pensado, el número es menor o el número es mayor. Se suma o se resta uno hasta encontrar
if (indAdivinando == numero) {
    window.alert("¡Genial!");    
}
else { //En esta parte del código, se suma uno hasta encontrar el número
    if (indAdivinando < numero){
        while (true) {
            if (indAdivinando == numero) {
                window.alert("¡Encontrado!");
                break;
            }
            else {
            indAdivinando++;
            }
        }
    }
    else { //En esta parte del código se resta uno hasta encontrar el número
        while (true) {
            if (indAdivinando == numero) {
                window.alert("¡Encontrado!");
                break;
            }
            else {
            indAdivinando--;
            }
        }        
    }
}

console.log("listo");
window.alert(`El número ingresado ${numero} es ${indAdivinando}`); 