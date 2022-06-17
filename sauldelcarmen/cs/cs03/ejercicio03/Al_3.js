//Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
function iniciar() {
let opcion = confirm("Deseas ejecutar el programa?");
if (opcion == true) {
    if (opcion == true) {
        div();
    } else {
        
     }
    }
}
iniciar();


function div() {
        alert("El siguiente programa adivina un número aleatorio entre el 1 y el 100");
        n1=(prompt("El numero es 50 o es mayor o menor que 50 (**Escribre unicamente** si, mayor o menor) "));
        if (n1 == "si") {
            alert("El numero es: 50");
        }
        else if (n1 == "mayor") {
            div3();
        }
        else if (n1 == "menor") {
            div2();
        }
        else {
            alert("error");
        }

    }

function div2() {
        n2=(prompt("El numero es 25 o es mayor o menor que 25 (**Escribre unicamente** si, mayor o menor)"));
        if (n2 == "si") {
            alert("El numero es: 25");
        }
            else if (n2 == "mayor") {
                quest2(); 
            }
            else if (n2 == "menor") {
                res();   
        }
        else {
            alert("error");
        }
    }

function div3() {
        n3=(prompt("El numero es 75 o es mayor o menor que 75 (**Escribre unicamente** si, mayor o menor)"));
        if (n3 == "si") {
            alert("El numero es: 75");
        }
        else if (n3 == "mayor") {
            quest();
        }
        else if (n3 == "menor") {
            plus2();
        }
        else {
            alert("error");
        }
    }


function quest() {
        n2=(prompt("El numero es 76 (**Escribre unicamente** si, no) "));
        if (n2 == "si") {
            alert("El numero es: 76");
        }
        else {
            plus();
        }
    }

function plus() {
        let i=77;
        for (; i<=100; i++){
            console.log(i);
            n5=(prompt("El numero es "+i+" (**Escribre unicamente** si,no) "));
            if (n5 == "si") {
                alert("El numero es: "+ i);
                return;
            }
            else {  
        }
        
    }
    alert("no encontre tu numero :'v, vuelve a intentarlo :D");
    return iniciar();
}

        
function plus2() {
        let i=74;
        for (; i>50; i--){
            console.log(i);
            n5=(prompt("El numero es "+i+" (**Escribre unicamente** si, no) "));
            if (n5 == "si") {
                alert("El numero es: "+ i);
                return;
            }
            else {  
        }
        
  }
  alert("no encontre tu numero :'v, vuelve a intentarlo :D");
  return iniciar();
 }


function quest2() {
    n2=(prompt("El numero es 26 (**Escribre unicamente** si, no) "));
    if (n2 == "si") {
        alert("El numero es: 26"); 
    }
    else {
        res2();
    }
}

        
function res() {
            let i=24;
            for (; i>0; i--){
                console.log(i);
                n5=(prompt("El numero es "+i+"(**Escribre unicamente** si, no) "));
                if (n5 == "si") {
                    alert("El numero es: "+ i);
                    return;
                }
                else if (n5 == "no") {
                    
                }
                else {
            }
            
      }
      alert("no encontre tu numero :'v, vuelve a intentarlo :D");
      return iniciar();
  }
    
        
function res2() {
            let i=27;
            for (; i<50; i++){
                console.log(i);
                n5=(prompt("El numero es "+i+"(**Escribre unicamente** si, no)"));
                if (n5 == "si") {
                    alert("El numero es: "+ i);
                    return;
                }
                else {  
            }
            
      }
      alert("no encontre tu numero :'v, vuelve a intentarlo :D");
      return iniciar();
  }