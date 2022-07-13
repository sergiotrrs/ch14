function suma (a, b) {
	return a + b;
}

/*
function palindromo (cadena) {
 const a=cadena.replace(/[W_]/g, '').toLowerCase();
 const b=a.split('').reverse().join('');
 if (a === b) {
   	return true;
   }
   else {
   	return false;
   }
}*/
/**/
function palindromo(cadena) {
    const newStr = cadena.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
    //return newStr === strReversed? true : false;
    if (newStr === strReversed) {
		return true;
	}
    	else {
	    		return false;
	}
  }
/**/

module.exports = {suma, palindromo};
