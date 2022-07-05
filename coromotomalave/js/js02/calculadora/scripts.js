
//declare cada funcion de suma,resta,multiplicacion y division.
const suma = function(a,b) {return (a + b);}
const resta = function(a,b) {return (a - b);}
const multiplicacion = function(a,b) {return (a * b);}
const division = function(a,b) {return (a / b);}

//Declare variables let para llamar las clases de los inputs en css y los llame por su nombre.

let inputA = document.getElementsByClassName("a")[0];
let inputB = document.getElementsByClassName("b")[0];
let result = document.getElementsByClassName("result")[0];

//Declare variables let para llamar las clases de los inputs en css y los llame por su nombre para colocar los operadores.
let btnS = document.getElementsByClassName("suma")[0];
let btnR = document.getElementsByClassName("resta")[0];
let btnM = document.getElementsByClassName("multiplicacion")[0];
let btnD = document.getElementsByClassName("division")[0];

//Declare variables let para llamar las clases de los inputs en css y los llame por su nombre para colocar los operadores.

const operation = (operatorFn, a, b) => operatorFn(Number(a), Number(b));
const onClickEvent = (operatorFn) => () => {
    result.value = operation(operatorFn, inputA.value, inputB.value);
};


btnS.addEventListener('click', onClickEvent(suma));
btnR.addEventListener('click', onClickEvent(resta));
btnM.addEventListener('click', onClickEvent(multiplicacion));
btnD.addEventListener('click', onClickEvent(division));


