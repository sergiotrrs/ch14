console.log("Teoría de la sesión JS05, Operadores");

//Operadores de incremento de decremento
let x=1;

//Incremento en una unidad
x = x+1;

//El operador ++ devuelve el valor, después incrementa en una unidad
x++;
console.log(`Valor de x con '++': ${x}`); //3

//Decremento en una unidad
x = x-1;

//El operador -- devuelve el valor, después decrementa en una unidad
x--;
console.log(`Valor de x con '--': ${x}`); //1

//El operador preincremento ++ devuelve el valor de la variable y después incrementa. 
++x; //2

console.log(`Valor de x++: ${x++}`);  //2
console.log(`Valor de ++x: ${++x}`);  //4

//Ejercicio de comprensión
let y=0;
x=0;
y=++x;  //Además de pasarle 1 a y, le suma 1 a x
console.log(`Valor de x: ${x}`); //1 
console.log(`Valor de y: ${y}`);  //1

//Ejercicio de comprensión
y=0;
x=0;
y=x++;  //Además de pasarle 0 a y, le suma 1 a x
console.log(`Valor de x: ${x}`); //1 
console.log(`Valor de y: ${y}`);  //0

for (let i=0;i<3;i++)console.log(`con i++ ${i}`); //0 1 2 (i termina en 3)
for (let i=0;i<3;++i)console.log(`con i++ ${i}`); //0 1 2 (i termina en 3)
//Conclusión: el pre o post no afectan al for debido a que se ejecutan en la final expression
