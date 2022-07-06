//leer 3 numeros y determinar si uno es la suma de los otros 2
function unoSumaDeDos(numero1, numero2, numero3) {
    let suma
    if(( numero1-numero2) == numero3 ){
         suma = console.log(`la suma de ${numero2} y ${numero3} es ${numero1}`);
        
    }
    else if(( numero2-numero3 ) == numero1 ){
         suma = console.log(`la suma de ${numero1} y ${numero3} es ${numero2}`);
         
    }
    else if( ( numero3-numero1 ) == numero2 ){
         suma = console.log(`la suma de ${numero1} y ${numero2} es ${numero3}`);
        
    }
    else{ console.log("no hay 2 numeros que sumados den el tercero");
    }
    return suma;
}
alert("programa para leer 3 numeros y determinar si uno es la suma de los otros 2");
let numero1 = parseInt( prompt("ingersa un numero "));
let numero2 = parseInt( prompt("ingersa un segundo numero "));
let numero3 = parseInt( prompt("ingersa un tercer numero"));
console.log(`numero 1 es= ${numero1}`);
console.log(`numero 2 es= ${numero2}`);
console.log(`numero 3 es= ${numero3}`);
unoSumaDeDos(numero1,numero2 ,numero3 ); 