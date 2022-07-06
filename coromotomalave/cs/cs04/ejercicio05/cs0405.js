//Ejercicio #05

let people = ['Maria', 'Dani', 'Luis', 'Juan', 'Camila'];
console.log('1. Print all names: ');
console.log(people.join(', '));
people.splice(people.indexOf('Dani'), 1);
console.log('2. Removed Dani From the array: ', people);
people.splice(people.indexOf('Juan'), 1);
console.log('3. Removed Juan From the array: ', people);
people.unshift(people.splice(people.indexOf('Luis'), 1)[0]);
console.log('4. Moved Luis to the from: ', people);
people.push('Cori');
console.log('5. Added my name at the end of array: ', people);
console.log('6. printed Maria and break loop ');
for( let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if(people[i] === 'Maria') {
    break;
  }
}

console.log('7. number of persons',people.length);
console.log(people);