
let primerNum =parseInt(prompt("Ingresa tu primer valor"));
segunNum =parseInt(prompt("Ingresa tu segundo valor"));
tercNum =parseInt(prompt("Ingresa tu tercer valor"));

if(primerNum>100||segunNum>100||tercNum>100 ){
    
    
console.log("EL RANGO DE NUMEROS EXCEDE EL NUMERO 100 ");
}
else{
if(primerNum == (segunNum+tercNum)){
console.log("EL PRIMER VALOR ES IGUAL A LA SUMA DE "+segunNum+" y "+tercNum);


}
else if(segunNum ==(primerNum+tercNum)){

    console.log("EL SEGUNDO VALOR ES IGUAL A LA SUMA DE "+primerNum+" y "+tercNum);


}
else if(tercNum ==(primerNum+segunNum)){

    console.log("EL TERCER VALOR ES IGUAL A LA SUMA DE "+primerNum+" y "+segunNum);


}
else{

    console.log("NINGUN VALOR COINCIDE CON LA SUMA DE LOS OTROS 2 RESTANTES ");
}
}

