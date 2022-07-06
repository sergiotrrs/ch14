//funcion que define el menor de tres numeros
function numeroMenor() {
    alert("programa que define el menor de 3 numeros");
    let numero1 = parseInt( prompt("ingersa un numero del 1 al 100"));
    let numero2 = parseInt(prompt("ingersa un segundo numero del 1 al 100")) ;
    let numero3 = parseInt(prompt("ingersa un tercer numero del 1 al 100")) ;
     let menor;
    if( numero1<numero2 && numero1<numero3 ){
        menor = numero1;
    }
    else if( numero2<numero1 && numero2<numero3 ){
        menor = numero2
    }
    else{
        menor = numero3;
    }
    alert(`el numero 1=${ numero1 }\nel numero 2=${numero2}\nel numero 3=${numero3}
     El numero menor es ${ menor }`);
    return menor;
}
console.log(`el numero menor es ${numeroMenor()}`);