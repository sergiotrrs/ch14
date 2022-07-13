function suma (a,b) {
    return Number(a)+ Number(b);
} //Vamos a probar el siguiente método
//Para exportar la función a evaluar en la carpeta de test es lo siguiente module.exports


multiplica = (a,b)=> a*b;

function verificadoraPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    if( newStr === strReversed)
        return true;
    else{
        return false;
    }
  }

module.exports = {suma, multiplica, verificadoraPalindromo};
