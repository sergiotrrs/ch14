console.log("MI PRIMER MENSAJE ");

let siu, no,mensaje;
alert("Piensa en un número mano.")
siu = confirm("Tu número es par?");
no = confirm("Tu número es mayor a 49?")

//PAR Y MAYOR A 50//
if (siu == true && no == true){
    no = confirm("Tu número es mayor 75?")
    if (no == true){
        for ( i = 76 ; i <= 100; i = i+2){
            no = confirm("Tu número es "+i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");
                break;
            }
        }
    }
    else{
        for (i = 74 ; i >= 50; i=i-2){
            no = confirm("Tu número es " +i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");
                break;
            }
        }
    }    
}
    //PAR Y MENOR A 50//
else if(siu == true && no == false){
    no = confirm("Tu número es mayor 25?")
    if (no == true){
        for ( i = 26 ; i <= 48; i = i+2){
            no = confirm("Tu número es "+i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");
                break;
            }
        }
    }
    else{
        for ( i = 24 ; i >= 2; i=i-2){
            no = confirm("Tu número es " +i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");
                break;
            }
        }
    }    
}
/////IMPAR Y MAYOR A 50
else if(siu == false && no == true){
    y = confirm("Tu número es mayor 74?")
    if (no == true){
        for ( i = 75 ; i <= 99; i = i+2){
            no = confirm("Tu número es "+i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");
                break;
            }
        }
    }
    else{
        for ( i = 73 ; i >= 51; i=i-2){
            no = confirm("Tu número es " +i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");;
                break;
            }
        }
    }    
}
//IMPAR Y MENOR A 50//
else if(siu == false && no == false){
    no = confirm("Tu número es mayor 24?")
    if (no== true){
        for ( i = 25 ; i <= 49; i = i+2){
            no = confirm("Tu número es "+i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");
                break;
            }
        }
    }
    else{
        for ( i = 23 ; i >= 1; i=i-2){
            no = confirm("Tu número es " +i+"?");
            if(no==true){
              console.log("Tu número  ya fue adivinado saquese de aqui.");
                break;
            }
        }
    }    
}