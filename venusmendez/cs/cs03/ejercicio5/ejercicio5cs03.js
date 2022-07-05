console.log("Código");
//Se pide al usuario 3 números
nume1=window.prompt("Dame un primer número");
nume2=window.prompt("Dame un segundo número");
nume3=window.prompt("Dame un tercer número");

//Como se reciben en string, se cambian a número
num1=parseInt(nume1);
num2=parseInt(nume2);
num3=parseInt(nume3);

//Se determina si alguno es suma de los otros 2
if(num1==num2+num3 || num2==num1+num3 || num3==num1+num2){
    console.log("Es cierto que uno de los números es la suma de los otros 2")
    } else{
    console.log("Es falso que uno de los números es la suma de los otros 2")    
}