console.log("Código");
//Se pide al usuario 3 números
nume1=window.prompt("Dame un primer número");
nume2=window.prompt("Dame un segundo número");
nume3=window.prompt("Dame un tercer número");

//Como se reciben en string, se cambian a número
num1=parseInt(nume1);
num2=parseInt(nume2);
num3=parseInt(nume3);

//Se comparan entre ellos para determinar el mayor
if(num1>=num2){
    if(num1>=num3){
        console.log("El número mayor es: "+num1);
    } else{
        console.log("El número mayor es: "+num3);
    }
}else{
     if(num2>=num3){
        console.log("El número mayor es: "+num2);
    } else{
        console.log("El número mayor es: "+num3);
    }
}