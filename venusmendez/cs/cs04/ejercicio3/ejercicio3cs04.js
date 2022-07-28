console.log("Código");
//Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
function sumProd(inputArr){
    let suma=0;
    let prod=1;
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        suma+=inputArr[i];
        prod*=inputArr[i];
    }
    console.log("La suma es: "+suma+" y el producto es: "+prod)
}


sumProd([1,2,3,5,7]);