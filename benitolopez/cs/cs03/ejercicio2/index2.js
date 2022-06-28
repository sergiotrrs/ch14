
let primerNum =parseInt(prompt("Ingresa tu primer valor"));
segunNum =parseInt(prompt("Ingresa tu segundo valor"));
tercNum =parseInt(prompt("Ingresa tu tercer valor"));

if(primerNum>100 || segunNum>100|| tercNum>100){

console.log("INGRESASTE UN NUMERO MAYOR A 100 INTENTE DE NUEVO")

}
else{





if(primerNum<segunNum && primerNum<tercNum){

console.log("el numero MENOR es"+primerNum);

}
else if(segunNum<primerNum && segunNum<tercNum){


    console.log("el numero MENOR es"+segunNum);


}
else{
    console.log("el numero MENOR es"+tercNum);


}

}