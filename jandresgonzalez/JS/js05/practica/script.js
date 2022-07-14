console.log("Link");
let palin = "Anita lava la tina";
console.log(palin);
let array = [];
palin = palin.toLowerCase();
console.log(palin);
for (letra of palin) {
    if (letra == " ") {
        console.log("espacio");
    }
    else {
        array.push(letra);
    }
}

const array2 = [];
console.log(array);
for (let i =0; i < ((array.length/2) - 1); i++) {
    console.log("1"+array[i]);
    array2.push(array[i]);
}

const array3 = [];
console.log("ystuvo");
for (let i =array.length-1; i > ((array.length/2) + 1) - 1; i--) {
    console.log("2" + array[i]);
    array3.push(array[i]);
}

array2.join("");
array3.join("");

let counter = 0;
for (let i=0; i<array2.length; i++) {
    if (array2[i] == array3[i])  {
        console.log(`${array2[i]} y ${array3[i]} dan true`);
        counter++;
    }
    else console.log("chale");}
    if (counter == array2.length && counter == array3.length) console.log(true);