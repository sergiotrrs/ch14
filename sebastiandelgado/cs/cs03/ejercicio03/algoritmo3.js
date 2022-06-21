//  Algoritmo para adivinar un número entre 1 y 100 en el menor número de pasos posibles ----------------------------------------------------

//asegurar que ya se tiene número para adivinar
confirm("¿Ya tienes tu número pensado?");

//preguntar si es mayor o menor a 50
let op = confirm("Es mayor o igual a 50?");

//si es mayor o igual a 50, dividir número y descartar posibles opciones
if(op== true){
    op =  confirm("Es mayor o igual a 75?");

    //si es mayor o igual a 75, sumar 12 para descartar posibles opciones
    if(op == true){
            op = confirm("Es mayor o igual a 87?")
            if(op==true){
                //Si es mayor o igual a 87, iniciar mi ciclo de 86 a 100 para adivinar
            for(let res=86; res<=100; res ++){
            op= confirm("Tu número es "+res+"?");
            if(op == true){
                alert("Número adivinado ;)");
                break;
            }
        }
            }
                //si no es menor o igual a 87, iniciar mi ciclo desde 75 a 86 para adivinar
        else{
            for(let res=75; res<86; res ++){
            op= confirm("Tu número es "+res+"?");
            if(op == true){
                alert("Número adivinado ;)");
                break;
        }
            }
        }
    }
}
    //si NO es mayor o igual a 50, dividir número y descartar posibles opciones
else{
    op =  confirm("Es mayor o igual a 25?");
    //si es mayor o igual a 25, sumar 12 para descartar posibles opciones
    if(op == true){
            op = confirm("Es mayor o igual a 37?")
        //Si es mayor o igual a 37, iniciar mi ciclo de 37 a 50 para adivinar
            if(op==true){
            for(let res=37; res<=50; res ++){
            op= confirm("Tu número es "+res+"?");
            if(op == true){
                alert("Número adivinado ;)");
                break;
            }
        }
            }
                //Si NO es mayor o igual a 37, iniciar mi ciclo de 25 al 36 para adivinar
        else{
            for(let res=25; res<=36; res ++){
            op= confirm("Tu número es "+res+"?");
            if(op == true){
                alert("Número adivinado ;)");
                break;
        }
            }
        }
    }
        //si NO es mayor o igual a 25, preguntar mayor o igual a 17 para descartar posibles opciones
    else{
        op = confirm("Es mayor o igual a 17?")
        //Si es mayor o igual a 17, iniciar mi ciclo de 17 a 25 para adivinar
            if(op==true){
            for(let res=17; res<=25; res ++){
            op= confirm("Tu número es "+res+"?");
            if(op == true){
                alert("Número adivinado ;)");
                break;
            }
        }
            }
                //Si NO es mayor o igual a 17, iniciar mi ciclo de 1 al 16 para adivinar
        else{
            for(let res=1; res<=16; res ++){
            op= confirm("Tu número es "+res+"?");
            if(op == true){
                alert("Número adivinado ;)");
                break;
        }
            }
        }
    }
}
alert("Un placer jugar contigo :)");