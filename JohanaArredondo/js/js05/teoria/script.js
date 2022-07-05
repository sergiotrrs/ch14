console.log("Teoria js05, operadores");

//incremento decremento
let x = 1;
//incremento de unidad
x= x+1;
//operador ++ devuelve el valor, despues incrementa en uno
x++;
console.log("Valor de x "+ x);

//decremento en unidad
x=x-1;
x--;
console.log("Valor de x con --: "+x);

//incrementa una unidad y devuelva el valor
x=1;

console.log(`Valor de x++ : ${x++}`);
console.log(`Valor de ++x: ${++x}`);

let y=0;
x=0;
y= ++x;
console.log(`Valor de x : ${x}`);
console.log(`Valor de y : ${y}`);

x=1;
console.log("pre-incremento");
console.log(x);
console.log(++x);
console.log(x);

console.log("post-incremento");
x=1;
console.log(x);
console.log(x++);
console.log(x);

for(i=0; i<3 ; i++) console.log("con i++ "+i);
for(i=0; i<3 ; ++i) console.log("con ++i "+i);



x=-10;
y = --x;
console.log(y,x);
x=80
y=x--;
console.log(y,x);

//residuo
x=8%2;




