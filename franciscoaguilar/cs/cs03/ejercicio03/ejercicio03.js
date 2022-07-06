let number = parseInt(prompt("Ingrese un número para que el programa lo adivine"));
let numero = 50;
let mayor = 100;
let menor = 1;
for (let i=0;i<100;i++){
    if (numero ==number){
        alert('El número es: '+ numero);
        break;
    }else if (numero>number){
        mayor = numero;
        numero =parseInt((mayor)/2);
    }else if (numero<number){
        menor = numero;
        numero =parseInt(((mayor-menor)/2)+menor);
    }
    
    console.log("Intento #: "+i+" numero evaluado: "+numero);
}