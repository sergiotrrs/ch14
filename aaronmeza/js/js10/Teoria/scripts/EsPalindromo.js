function verificadoraPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    if( newStr === strReversed)
        return true;
    else{
        return false;
    }
  }



module.exports = {verificadoraPalindromo}

