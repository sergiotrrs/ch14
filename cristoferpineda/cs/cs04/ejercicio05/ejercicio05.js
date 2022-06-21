//Exercise #5
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
let people2= people.slice();
function name(a) {
  console.log("",a);
}
people.forEach(name);
people.shift("Maria");
const borrar1=people.splice(2,1);
const borrar2=people.splice(4,1);
people.push("Cristofer");
console.log(people);
people.splice(0, 1, 'Luis');
people.splice(1, 1, 'Dani');
console.log(people);

for (let i =0; i < people2.length; i++){
  console.log("",people2[i]);
  if(people2[i]=="Maria"){
    break;
  }
}

for (let j = 0; people2[j]; j++){
  if(people2[1]=="Maria"){
    console.log("Index",j)
    break;
  }
}