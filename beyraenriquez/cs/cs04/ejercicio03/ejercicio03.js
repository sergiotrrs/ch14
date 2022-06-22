//Exercise #3
let numbers = [1, 2, 3, 4],
    s = 0,
    p = 1,
    i;
for (let i = 0; i < numbers.length; i += 1) 
   {
    s += numbers[i];
    p *= numbers[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 