console.log("Teroria de la seción JS=%, operadores");

// Operadores de incremento de decremento ********

let x = 1;

// incremento de una unidad *********
 x = x +1;

 // El operador ++ realiza el incremento en una unidad 

 x++;
 console.log("Valor de x" + x); // 3

 // Decremento de una unidad 

 x = x - 1;

 // El operador relaiza el decremento en un nidad *****
 x--;
 console.log("Valor de x con --:"+ x ); // 1


 // El operador preincremento ++ devuelve el valor de la variable , despues decrementa 
 //  en una unidad la variable 

 ++x;
 // priero devuelve el valor de x 
 // luego incrementa en 1 el valor de x 
 x=1;

 console.log(`Valor de x++  : ${x++}` );  //x = 1 ;  x = x + 1 -> x=2
 console.log(`Valor de ++x  : ${++x}` );  //x=x+1 -> x= 3

 

 let y = 0; 
 x = 0;
 y = ++x; 

 console.log(`Valor de x : ${x} `);
 console.log(`Valor de y : ${y}`);



 x = 0;
 y = 0;
 y = x+++;

 console.log(`Valor de x : ${x} `);
 console.log(`Valor de y : ${y}`);





 x=1; 
 console.log("pre-incremento");
 console.log(x);
 console.log(++x);
 console.log(++x);


 // post incremento 


 console.log("post-incremento");
 x = 1; 

 console.log(x);
 console.log(x++);
 console.log(x);



 
 let i;
 let j; 
 for (i = 0; i<3 ; j=i++) console.log("con i ++" + 1); 
 console.log("Finalizaciòn de i : "+j); 
 
 for (i = 0; i<3 ; j=++i) console.log("con i ++" + 1); 
 console.log("Finalizaciòn de i : "+j);






 //



 x += 10;
 x -= 