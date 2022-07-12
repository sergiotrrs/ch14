// 3.- Escribe un programa para computadora que sume y multiplique de un arreglo de números, imprime la suma y 
//la multiplicación ----------------------------------------------------------------------------

let ar= [1,2,3,4];

let ar2=ar;
let sum =0;
let mult =1;
for (let i=0; i < ar.length; i++){
    console.log(ar2[i]);
    sum= sum+ ar2[i];
    mult= mult * ar[i];
}
    console.log("la suma es = "+ sum);
    console.log("La multiplicación es =" + mult);
