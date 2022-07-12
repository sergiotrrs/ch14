function palindromo(text) {
    const newStr =(text).replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? true : false;
  }
module.exports = {palindromo}
