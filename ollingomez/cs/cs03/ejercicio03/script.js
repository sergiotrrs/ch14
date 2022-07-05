/**3.-Realizar un algoritmo para adivinar un número 
entre el 1 y el 100 en el menor número de pasos posibles.**/

function rango(nu){
    /*función que verifica que un valor se encuentre en un rango
    de numeros. nu es numero que va ingresar el Usuario
    para verificar si se encuentra en el rango de valores*/
    while(nu<1 || nu>100){
        titulo=alert("Ingresa nuevo número entre 1 y 100");
        nu=prompt("Escribe de nuevo el número", "Número entero");
        nu=parseInt(nu);
    }
    return nu;
}

//Defino las variable
let valorInferior;
let valorSuperior;
let titulo=alert("Programa que adivina un número pensado por el Usuario entre 1 y 100");
let adivina;
let pregunta;//se ocupara para preguntar 
//let pregunta2;

titulo=alert("Dime dos números enteros que se encuentren entre el número que pensaste.");
//Solicito valores
valorInferior=prompt("Escribe un valor menor al número que pensaste", "limite Inferior");
valorInferior=parseInt(valorInferior);
valorInferior=rango(valorInferior);
valorSuperior=prompt("Escribe un valor mayor al número que pensaste", "limite Superior");
valorSuperior=parseInt(valorSuperior);
valorSuperior=rango(valorSuperior);

//Calculo la mitad
adivina=parseInt((valorInferior+valorSuperior)/2);

//pregunta si es el numero que penso
                   // ("¿"+adivina+" es el numero que pensaste?", "si o no")                                                
    pregunta=prompt(`¿${adivina} es el número que pensaste? `,"si o no");
    if(pregunta.toUpperCase() == 'SI'){
        console.log(`¡Adivine!, el ${adivina} es el número que pensaste`);
        titulo=alert(`¡Adivine!, el ${adivina} es el número que pensaste`);
//en caso de no adivinar pregunta 
    }else if(pregunta.toUpperCase() == "NO"){
         do{
            pregunta=prompt(`¿Tu número es mayor o menor a ${adivina}?`,"mayor o menor");
               if(pregunta.toUpperCase() == "MAYOR"){
                    valorInferior=adivina;               
                    adivina=parseInt((valorInferior+valorSuperior)/2); 
                    pregunta=prompt(`¿${adivina} es el número que pensaste? `,"si o no");
                    if(pregunta.toUpperCase() == "SI"){
                        titulo=alert(`¡Adivine!, el ${adivina} es el número que pensaste`);
                        console.log(`¡Adivine!, el ${adivina} es el número que pensaste`);                    
                }
            }else if(pregunta.toUpperCase() == "MENOR"){
                    valorSuperior=adivina
                    adivina=parseInt((valorInferior+valorSuperior)/2);
                    pregunta=prompt(`¿${adivina} es el número que pensaste? `,"si o no");
                    if(pregunta.toUpperCase() == "SI"){
                        titulo=alert(`¡Adivine!, el ${adivina} es el número que pensaste`);
                        console.log(`¡Adivine!, el ${adivina} es el número que pensaste`);                    
                }
            }
            
        }while(pregunta!=='si');
    }
    

//console.log("valor inferior es: ",valorInferior);
//console.log("valor superior es: ",valorSuperior);
//console.log(adivina);