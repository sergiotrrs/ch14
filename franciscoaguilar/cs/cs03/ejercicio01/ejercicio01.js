let n1 = parseInt(prompt("Ingresa el primer número "));
let n2 = parseInt(prompt("Ingresa el segundo número "));
let n3 = parseInt(prompt("Ingresa el tercer número "));

if (n1> n2){
    if(n1 > n3){
        alert("El número mayor es: "+ n1);
    }else if (n3>n1)
    {
        alert("El número mayor es: "+ n3);
    }
}else if(n2>n1){
    if(n2> n3){
        alert("El número mayor es: "+ n2);
    }else {
    alert("El número mayor es: "+ n3);
}}
