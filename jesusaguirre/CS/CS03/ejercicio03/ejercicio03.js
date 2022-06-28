//aloritmo para adivinar un numero entre 1 y 100
function adivinaNumero() {
    alert("piensa un numero del 1 al 100 para que lo adivine");
    let inicio = 1;
    let final = 100;
    //las variables de inicio y final son el rango de los numeros a adivinar
    let numeroAdivinado; 
    for( ; ; ){
    let mitad = parseInt(( final + inicio )/2);
    let numeroadivinar = confirm(`tu numero es ${mitad}`);
    if( numeroadivinar == true ){
        numeroAdivinado = mitad;
        alert(" adivine :)")
        break;
     }
    else{
    let mayorMenor = confirm(`oprime aceptar si tu numero es mayor a ${ mitad } 
    o \noprime cancelar si tu numero es menor a ${ mitad } `);
        if( mayorMenor == true ){
            inicio = mitad; 
        }
        else{
            final = mitad; 
        }
    }
}
return numeroAdivinado;
}
numero = adivinaNumero();
console.log(`el numero adivinado es ${ numero }`);
