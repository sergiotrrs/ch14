let people = ['Maria','Dani','Luis', 'Juan', 'Camila'];

people.forEach(person => {
    console.log(person);
});

console.log('------------------------------');
people.splice(1,1);
people.forEach(person => {
    console.log(person);
});
console.log('------------------------------');
people.splice(2,1);
people.forEach(person => {
    console.log(person);
});
console.log('------------------------------');
const name = people.splice(1,1).toString();
people.unshift(name);
people.forEach(person => {
    console.log(person);
});
console.log('------------------------------');
people.push('Juan');
people.forEach(person => {
    console.log(person);
});
console.log('------------------------------');
for (let index = 0; index < people.length; index++) {
    if(people[index] === 'Maria'){
        break;
    }
    console.log(people[index]);
}
console.log('------------------------------');
console.log(people.indexOf('Maria'));