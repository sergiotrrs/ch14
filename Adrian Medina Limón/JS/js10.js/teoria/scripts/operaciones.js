
function suma(a, b){
    return Number(a) + Number(b);
}

/*function palindromeChecker(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? "si es" : "no es";
  };
*/

multiplica =(a,b)=> a*b;

module.exports ={suma, multiplica, verificadoraPalindromo};


function verificadoraPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    if( newStr === strReversed)
        return true;
    else{
        return false;
    }
  };


