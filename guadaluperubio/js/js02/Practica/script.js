console.log("Calculadora");

 /**
  * FUNCION FLECHA PARA LA SUMA  
  * @param {number} a primer sumando
  * @param {number} b segundo sumando
  * @return sumatoria a+b
  */  
const suma = () => {
    let a = document.getElementById("valor1").value;
    let b = document.getElementById("valor2").value;
     return document.getElementById("resultado").innerHTML = (Number(a)*10 + Number(b)*10)/10;
// console.log("la suma es "+suma)
};

 /**
  * FUNCION FLECHA PARA LA RESTA  
  * @param {number} a primer número a restar
  * @param {number} b segundo número a restar
  * @return resta a - b
  */  
const resta= () =>  {
    let a = document.getElementById("valor1").value  
    let b = document.getElementById("valor2").value
     return document.getElementById("resultado").innerHTML = ((a)*10 - (b)*10)/10;
    };

 /**
  * FUNCION FLECHA PARA LA MULTIPLICACIÓN 
  * @param {number} a primer numero a multiplicar
  * @param {number} b segundo multiplicador
  * @return producto de a * b
  */  
const multiplicacion= () =>  {
    let a = document.getElementById("valor1").value  
    let b = document.getElementById("valor2").value
     return document.getElementById("resultado").innerHTML = a*b;
    };



 /**
  * FUNCION FLECHA PARA LA división
  * @param {number} a primer cociente
  * @param {number} b segundo cociente
  * @return divisió de a / b
  */   

    const division= () =>  {
    let a = document.getElementById("valor1").value  
    let b = document.getElementById("valor2").value
     return document.getElementById("resultado").innerHTML = a/b;
    };

    