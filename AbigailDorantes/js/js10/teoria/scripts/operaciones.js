

function suma(a, b){
    return Number(a) + Number(b);
}

 multiplica = (a, b) => a*b;
/*funcion palindromo*/

function palindrome(str) {
    let palabra = " ";
    let minStr = str.replace( /[\W_]/g, "").toUpperCase();
    let reverseStr = minStr.split("").reverse().join("");
    return reverseStr === minStr ? true : false;
  }
 
module.exports = {suma, multiplica, palindrome};


