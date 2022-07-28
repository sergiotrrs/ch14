
function palito(frase){
    frase = frase.toLowerCase();
    frase = frase.replace(/\s+/g,"");
    const otrafrase = frase.split("").reverse().join("");

    if (frase==toString(otrafrase)){
        return true;
    } else {
        return false
    };
}

function verificadoraPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    if( newStr === strReversed)
        return true;
    else{
        return false;
    }
  }


  let cadena = 'hola';
  function palindromo (cadena) {
  return cadena.split('').reverse().join('');
     if (cadena == cadena.split('').reverse().join('')) {
         return true;
     }
     else {
         return false;
     }
  }
  


module.exports = {palito,verificadoraPalindromo,palindromo}