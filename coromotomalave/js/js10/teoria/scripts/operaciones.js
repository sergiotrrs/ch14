

/*function suma (a , b) {
    return Number (a) + Number (b);
}

function multiplica(a,b) {
    a*b
}*/


function palindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toUpperCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? true : false;
  }


module.exports = {palindromo}//exporto la function suma debo agregar el module