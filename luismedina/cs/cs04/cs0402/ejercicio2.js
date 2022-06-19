const array = [5,15,25,35,45,55];
console.log(`La matriz inicial es`, array);
const nuevoArray = array.map(function(x){
    return x * 2;
});
console.log(`La nueva matriz es `, nuevoArray);
