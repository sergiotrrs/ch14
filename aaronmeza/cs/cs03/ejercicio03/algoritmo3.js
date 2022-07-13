
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
        esBuscado= false;
      } else if(mayorQue(midPoint, min, max)) {
        min = midPoint + 1;
      } else {
        max = midPoint - 1;
      }   
    }
  };
  
  
  obtenerNumero();
  
  function mayorQue(numero, min, max) {
    return confirm(`Es el número mayor que ${numero} ( ${min} - ${max}) ?`);
  }
  
  function esIgual(numero) {
    return confirm(`El número es ${numero}?`);  
  }
  