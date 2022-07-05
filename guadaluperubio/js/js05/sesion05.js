console.log("sesion 05")

// operadores de incremento de decremento***************************************
let x = 1;  // incremento en una unidad

x = x + 1;    /// el operador ++ realiza el incremento en una unidad
// /**la variabe i
// * primero devuelve el valor de x
// *luego incrementa en 1 el valor de x 
// * /
 x++;
console.log("valor de x :" + x);

// el operador -- realiza el decremento en una unidad***********************************
x= x - 1; // 2
x--;
console.log("valor de x :" +x);


// el operador preincremento ++ revuelve el valor de la variable, despues incrementa en una unidad la variable
++ x;  //primero devuelve el valor de x, 
        // luego incrementa en uno el valor de x 
  
console.log("valor de x :" +x);x=1;

  console.log(`Valor de x++  : ${x++}` );  //x = 1 ;  x = x + 1 -> x=2
  console.log(`Valor de ++x  : ${++x}` );  //x=x+1 -> x= 3



//  primero me incrementea la variable en una unidad, luego ya incrementada nos devuelve el valor de la variable, por lo tanto y, vale el aumento que tiene 1
// por eso x vale 1, porque primero se hace el incremento 
let y= 0;      
  x=0;
  y= ++x;
  console.log(`Valor de x  : ${x}` );
  console.log(`Valor de y  : ${y}` );



//   post incremento
// primero nos devuelve el valor de x y ya despues nos da el valor, en y vale cero y en equis 1
  y= 0;
  x=0;
  y= x++;
  console.log(`Valor de x : ${x}` );
  console.log(`Valor de y  : ${y}` );


  let i;
let j;
for (i = 0; i<3 ; j=i++) console.log("con i++" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //2

for (i = 0; i<3 ; j=++i) console.log("con ++i" + i); //0 , 1, 2
console.log("Finalización de j: " + j); //3


/* A partir de la linea 60 hasta la 74, se explica como funciona de la linea 50 a 56 :)******
//pre incremento 
x=1;
y=++x;
//es lo mismo que 
x=1;
x=x+1;
y=x;

//post
x=1;
y=x++;
//es lo mismo que
x=1;
y=x;
x=x+1;
*/

//********** P O S T - D E C R E M E N T O ,   P  R E  - D E C R E M E N T O **********************/

x = 5 ;
y = -- x;
console.log(y, x);

x = 5 ;
y = x--;

// OPERADOR DE SUMA


// OPERADOR RESTA


// OPERADO MULTIPLICACION


// OPERADO DIVISION


// OPERADOR RESIDUO


// OPERADOR DE POTENCIA


// OPERADOR DE ASIGNACIÓN
x = 2;

x += 10; //x = x +10
x -= 5; //x = x -5
x *= 3 // x = x*3
x /= 2;  //x= x/2
x %= 4; // x= x%4
x **=3; // x= x** 3


/** OPERADORES DE EIGUALDAD (COMPARACION) */



