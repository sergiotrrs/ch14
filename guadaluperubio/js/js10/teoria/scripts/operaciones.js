function suma(a,b) {
    return Number(a) + Number(b);
}

module.exports ={suma}

multiplica = (a, b) => a * b;

// palindromo

function palindromeChecker(str) {
    const newStr = str.replace(/[\W_]/g, "").toUpperCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? true : false;
  }
module.exports = {suma, multiplica, palindromeChecker};

