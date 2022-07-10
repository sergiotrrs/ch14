/*
Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
function sum(arr){
    let sumN=0;
    for(let i=0; i<arr.length;i++){
        sumN+=arr[i];
    }
    return sumN;
}

function product(arr){
    let proN=1;
    for(let i=0; i<arr.length;i++){
        proN*=arr[i];
    }
    return proN;
}

array=[1,2,3,4];
let sumR=sum(array);
let productR=product(array);
console.log("La suma de ["+array+"] es "+sumR);
console.log("El producto de ["+array+"] es "+productR);

document.getElementsByTagName("p")[0].innerHTML="["+array+"]";

document.getElementsByTagName("p")[1].innerHTML="La suma es "+sumR;
document.getElementsByTagName("p")[2].innerHTML="La multiplicación es "+productR;