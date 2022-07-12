
//3. Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles

const obtenerNumero = () => {   
  let min = 0;   
  let max = 100;   
  let esBuscado= true;  
   
  while(esBuscado) {     
    console.count('round');     
    let midPoint = Math.floor((min + max) / 2);     
    console.log(`min: ${min}, max: ${max}, midPoint: ${midPoint}`); 
      
  if(esIgual(midPoint)) {       
        alert(`The number is ${midPoint}`); 
        esBuscado= false;     }
  else if(mayorQue(midPoint, min, max)) {      
        min = midPoint + 1;    
         } 
  else { 
       max = midPoint - 1;     
        }      
      } }; 

    obtenerNumero();  
    function mayorQue(numero, min, max) { 
            return confirm(`El numero es mayor que ${numero} ( ${min} - ${max}) ?`); 
          }  
    function esIgual(numero) {  
            return confirm(`El número es ${numero}?`);   
          }


/*const obtenerNumero = (rango) => {

  let min = 0;
  let max = rango || 100;
  let count = 20;
  const mayorQue = (numero) => confirm(`Es el número mayor que ${numero} ( ${min} - ${max}) ?`);
  const esIgual = (numero) => confirm(`El número es ${numero}?`);
  while(count > 0) {
    console.count('round');
    let midPoint = Math.floor((min + max) / 2);
    console.log(`min: ${min}, max: ${max}, midPoint: ${midPoint}`);
    if(esIgual(midPoint)) {
      alert(`The number is ${midPoint}`);
      count = 0;
    } else if(mayorQue(midPoint)) {
      min = midPoint + 1;
    } else {
      max = midPoint - 1;
    }
    count = count - 1;
  }
};

obtenerNumero(20)*/

