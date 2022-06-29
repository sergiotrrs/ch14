let num = [1, 2, 4, 5];
function printOutString(a){
  for (let i = 0; i < a.length; i++){
    let b=a[i]*2;
    console.log("pos"+i, " = "+b);
  }
}
printOutString(num);