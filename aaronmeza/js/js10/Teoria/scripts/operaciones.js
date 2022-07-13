function suma(a,b){
    return Number(a) + Number(b);
}


multiplica=(a,b) => a*b;


function esPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    if( newStr === strReversed)
        return true;
    else{
        return false;
    }
  }



module.exports = {esPalindromo, suma, multiplica}





