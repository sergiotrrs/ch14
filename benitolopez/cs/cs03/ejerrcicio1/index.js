
let primerNum =parseInt(prompt("Ingresa tu primer valor"));
segunNum =parseInt(prompt("Ingresa tu segundo valor"));
tercNum =parseInt(prompt("Ingresa tu tercer valor"));

if(primerNum>100 || segunNum>100|| tercNum>100){

console.log("INGRESASTE UN NUMERO MAYOR A 100 INTENTE DE NUEVO")

}
else{





if(primerNum>segunNum && primerNum>tercNum){

console.log("el numero mayor es "+primerNum);

}
else if(segunNum>primerNum && segunNum>tercNum){


    console.log("el numero mayor es "+segunNum);


}
else if(segunNum==primerNum && primerNum==tercNum  && segunNum==tercNum){


    console.log("todos los numeros son iguales");


}
else{
    console.log("el numero mayor es "+tercNum);


}
}