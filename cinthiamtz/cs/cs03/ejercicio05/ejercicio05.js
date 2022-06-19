//Algoritmo 5: Leer 3 números y determinar sí uno es la suma de los otros dos

alert('Programa que lee 3 numeros y determina si uno es la suma de los otros dos')

//Declaración de variables
let numUno = parseInt( prompt("Ingrese primer número") );
let numDos = parseInt( prompt("Ingrese segundo número") );
let numTres = parseInt( prompt( "Ingrese tercer número"));

if (numUno == numDos +numTres){
    console.log ("El primer valor", numUno , "es la suma de los otros dos valores", numDos , "y" , numTres);  
    alert('El primer valor '+ numUno + ' es la suma de los otros dos valores '+ numDos + ' y '+ numTres );  
}
else if( numDos == numUno + numTres){
    console.log ("El segundo valor", numDos , "es la suma de los otros dos valores", numUno , "y" , numTres); 
    alert('El segundo valor '+ numDos + ' es la suma de los otros dos valores '+ numUno + ' y '+ numTres );       
}
else if ( numTres == numUno + numDos){
    console.log ("El tercer valor", numTres , "es la suma de los otros dos valores", numUno , "y" , numDos);
    alert('El tercer valor '+ numTres + ' es la suma de los otros dos valores '+ numUno + ' y '+ numTres );
}    
else{
    console.log ("Ningun número es el resultado de la suma de los otros dos."); 
    alert('Ningun número es el resultado de la suma de los otros dos');   
}