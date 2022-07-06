//PROGRAMA QUE ADIVINA UN NÚMERO DEL 1 AL 100 EN EL MENOR NÚMERO DE INTENTOS POSIBLES//

let x;
let y;
alert("Piensa en un número y contesta las siguientes preguntas.")
x = confirm("Tu número es par?");
y = confirm("Tu número es mayor a 49?")

//PAR Y MAYOR A 50////////////////
if (x == true && y == true){
    y = confirm("Tu número es mayor 75?")
    if (y == true){
        for (let i = 76 ; i <= 100; i = i+2){
            y = confirm("Tu número es "+i+"?");
            if(y==true){
                alert("Número fue adivinado. FIN");
                break;
            }
        }
    }
    else{
        for (let i = 74 ; i >= 50; i=i-2){
            y = confirm("Tu número es " +i+"?");
            if(y==true){
                alert("Número fue adivinado. FIN");
                break;
            }
        }
    }    
}
    ////PAR Y MENOR A 50//////
else if(x == true && y == false){
    y = confirm("Tu número es mayor 25?")
    if (y == true){
        for (let i = 26 ; i <= 48; i = i+2){
            y = confirm("Tu número es "+i+"?");
            if(y==true){
                alert("Número fue adivinado. FIN");
                break;
            }
        }
    }
    else{
        for (let i = 24 ; i >= 2; i=i-2){
            y = confirm("Tu número es " +i+"?");
            if(y==true){
                alert("Tu número fue adivinado. FIN");
                break;
            }
        }
    }    
}
/////IMPAR Y MAYOR A 50
else if(x == false && y == true){
    y = confirm("Tu número es mayor 74?")
    if (y == true){
        for (let i = 75 ; i <= 99; i = i+2){
            y = confirm("Tu número es "+i+"?");
            if(y==true){
                alert("Tu número fue adivinado.FIN");
                break;
            }
        }
    }
    else{
        for (let i = 73 ; i >= 51; i=i-2){
            y = confirm("Tu número es " +i+"?");
            if(y==true){
                alert("Tu número fue adivinado. FIN");
                break;
            }
        }
    }    
}
/////IMPAR Y MENOR A 50///
else if(x == false && y == false){
    y = confirm("Tu número es mayor 24?")
    if (y == true){
        for (let i = 25 ; i <= 49; i = i+2){
            y = confirm("Tu número es "+i+"?");
            if(y==true){
                alert("Tu número fue adivinado. FIN");
                break;
            }
        }
    }
    else{
        for (let i = 23 ; i >= 1; i=i-2){
            y = confirm("Tu número es " +i+"?");
            if(y==true){
                alert("Tu número fue adivinado. FIN");
                break;
            }
        }
    }    
}
