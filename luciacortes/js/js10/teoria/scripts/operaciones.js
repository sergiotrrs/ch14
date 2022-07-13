
function suma( a, b ){
    return Number(a) + Number(b);
}

multiplica =  ( a,b )=> a * b;



function palindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const leerAlreves = newStr.split("").reverse().join("");
  
    return newStr === leerAlreves ? true : false;
  }
module.exports = {suma, multiplica, palindromo}