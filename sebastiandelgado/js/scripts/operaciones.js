//Se crea la función
function suma (a,b){
    return Number(a)+ Number(b);
}

multiplica = (a,b) =>  Number(a) * Number(b);

//Se escribe lo siguiente para exportar la función.

/**
 * 
 function palindromo(a) {
     a= a.toLowerCase();
     a= a.replace(/\s+/g, '');
     const b = a.split("").reverse().join("");
     if(a === b){ 
         return true; 
     }   
 }
 * 
 */

 function verificadoraPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    if( newStr === strReversed)
        return true;
    else{
        return false;
    }
  }

module.exports ={ suma, multiplica, verificadoraPalindromo};