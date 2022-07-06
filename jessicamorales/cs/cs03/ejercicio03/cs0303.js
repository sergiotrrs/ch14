let n1;
let n2;
let i;
let cont;
let a = prompt("Dame un numero (1-100)");

a = parseInt(a);

if(a > 50){
    n1 = 50;
    n2 = 100;
    console.log("El número es mayor que 50");
    i = (n1+n2)/2;
    if(i == a){
        console.log("Su número es 75");
    }else{
        for(cont = n1; cont <= n2; cont++){
            if(cont == a){
                console.log("Su numero es: ", cont);
            }
        }
    }
}else if(a < 50){
        n1 = 1;
        n2 = 50;
        console.log("El número es menor que 50");
        i = (n2/2);
        if(i == a){
            console.log("Su número es 25");
        }else{
            for(cont = n1; cont < n2; cont++){
                if(cont == a){
                    console.log("Su número es: ", cont);
                }
            }
        }
}else{
    console.log("Su número es 50");
}