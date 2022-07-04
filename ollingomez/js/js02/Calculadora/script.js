// genero la funcion que guarda los valores obtenidos en los cuadros de texto
// y los combierto en numero flotantes
function capturar () {
   let valor1 = document.getElementById("valor1").value;
   let valor2 = document.getElementById("valor2").value;
   // llamo a lafunción suma y la guardo en una nueva variable
   let su = calSuma(parseFloat(valor1),parseFloat(valor2));
   // imprimo en la pagina web
   document.getElementById("cambio").innerHTML=" "+ su;
  }



/**
 * creo la función suma
 * @param {number} a primer sumando 
 * @param {number} b segundo sumando
 * @returns sumatoria a+b
 */
const calSuma =(a,b)=>a+b;

// genero la funcion que guarda los valores obtenidos en los cuadros de texto
// y los combierto en numero flotantes

function capturar1 () {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
   // llamo a lafunción resta y la guardo en una nueva variable
    let re = calResta(parseFloat(valor1),parseFloat(valor2));
    document.getElementById("cambio").innerHTML=" "+ re;
   }

/**
 * 
 * @param {number} a primer diminuendo
 * @param {number} b segundo diminuendo
 * @returns resta a-b
 */
// creo la función resta 
const calResta=(a,b)=>a-b;

// genero la funcion que guarda los valores obtenidos en los cuadros de texto
// y los combierto en numero flotantes
function capturar2 () {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    // llamo a lafunción multiplicación y la guardo en una nueva variable
    let mu = calMultiplica(parseFloat(valor1),parseFloat(valor2));
    // imprimo en la pagina web
    document.getElementById("cambio").innerHTML=" "+ mu;
   }

   /**
    * 
    * @param {number} a factor 
    * @param {number} b factor
    * @returns producto a*b
    */
// creo la función multiplicación
const calMultiplica=(a,b)=>a*b;

// genero la funcion que guarda los valores obtenidos en los cuadros de texto
// y los combierto en numero flotantes
function capturar3 () {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
   // llamo a lafunción división y la guardo en una nueva variable
    let di = calDivision(parseFloat(valor1),parseFloat(valor2));
   // imprimo en la pagina web
    document.getElementById("cambio").innerHTML=" "+ di;
   }

   /**
    * 
    * @param {number} a primer divisor 
    * @param {number} b segundo divisor
    * @returns division a/b
    */
// creo la función división
const calDivision=(a,b)=>a/b;


