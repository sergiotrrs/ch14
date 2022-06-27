let array = [1, 2, 3, 4],
    sum = 0
    product = 1
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    product *= array[i];
    }
console.log("Given an array [1, 2, 3, 4] The sum is " +sum+ " . The product is " +product+" ."); 