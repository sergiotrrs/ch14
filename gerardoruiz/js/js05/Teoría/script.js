console.log("Teoría de la sesión JS05, operadores")


//Operadores de incremente 

let x = 1;

//Incremento en una unidad
x = x + 1;//2

//El operador ++ realiza el incremento en una unidad
x++;
console.log(`Valor de x con ++  ${x}`);//3

//Decremento en una unidad

x = x - 1;

//El operador --realiza el decremento en una unidad
x--;
console.log(`Valor de x con -- ${x}`)//1

//El operador preincremento ++ devuelve el calor de la variable, después decrementa 
//en un unidad la variable.

 //Primero devuelve el calor de x
//Luego incremente en un 1 el valor de x

x=1;
console.log(`Valor de x++ : ${x++}`)//1
console.log(`Valor de ++x : ${++x}`)//3

let y =0;
x = 0;
y= ++x;
console.log(`Valor de x : ${x}`);
console.log(`Valor de y : ${y}`);

y =0;
x=0;
y = x++;
console.log(`Valor de x : ${x}`);
console.log(`Valor de y : ${y}`);

x=1;
console.log("pre-incrmeneto");
console.log(x);//1
console.log(++x);//2
console.log(x);//2
//Post incrmeento
console.log("post-incremeneto");
x=1;
console.log(x);//1
console.log(x++);//1
console.log(x);//2


let i;
let j;
for (i = 0; i<3; j=i++) console.log(`con i++ ${i}`)// 0, 1, 2
console.log("Finzalización de j "+ j)


for (i = 0; i<3; j=++i) console.log(`con ++i ${i}`)
console.log("Finzalización de j "+ j)


/*Operadores aritmeticos

operador de suma */
x = 1 + 34 + y;

//operador de resta
x = 23 - 45 - y;

//operador  de división
x = 23 - 45 - y;

//operador igual que 
x = 1;
y= 2;
x == y; //false
y = 1;
x == y; //true
y = "1";
x == y; //true 

//Operador diferente que !=
x = 1 ;
y = "2";
console.log("x != 'y' "+ (x != y ));//true x= 1 y=2
console.log("x != 'y' "+ (x++ != y ));//true  x= 1 y=2
console.log("x != 'y' "+ (x != y ));//false  x= 2 y=2
console.log("x != 'y' "+ (++x != y )); // true x= 3 y=2

//Operador estricatemente igual que ===
x = 1;
y = "1";
console.log("x === y "+ (x===y));

console.log("x !== y "+ (x!==y));

//Operadores Lógicos &&, || , !
true && true; // true
true && false ; //true
//False, null, NaN, 0 emptry string o undefined son considerador valor false.

console.log(" true && NaN = " + (true && NaN));//NaN
console.log( " false && NaN = ")+(false && NaN);//false

console.log(` "" && "Hola Maga" = ${"" && "Hola Maga"}`); //String vacion
