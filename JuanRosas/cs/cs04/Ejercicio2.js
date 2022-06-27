let numbers = [1,2,3,4];
console.log(numbers);
for(let index = 0 ; index < numbers.length ; index++){
    numbers[index] = numbers[index]*2;
    console.log("Cuando index vale: " + index + " --> " +numbers);
}
console.log(numbers);