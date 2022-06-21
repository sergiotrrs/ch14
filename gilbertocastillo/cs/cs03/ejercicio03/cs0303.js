// Adivinar un numero entre el 1 y el 100
let ns= prompt("Escribe un numero entre 1 y 100");
let adiv= prompt("Adivina un numero entre 1 y 100");

if (ns>adiv){
    for (;adiv<=ns;adiv++){
        if(adiv==ns){
            alert("El numero secreto es " + adiv);
        }
    }
}
else if (ns<adiv){
    for (;adiv>=ns;adiv--){
        if(adiv==ns){
            alert("El numero secreto es " + adiv);
        }
    }   
}