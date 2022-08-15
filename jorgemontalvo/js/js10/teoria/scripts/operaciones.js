function suma (a,b) {
    return Number(a) + Number(b);
}

multiplica = (a,b) => a*b;

// function palindromo(str){

    
//     let re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     let len = str.length;
//     for (let i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }

//    function palindromo (string){
//     let array = string.replace(/[\W_]/g, "").toLowerCase();
//      array = string.split("");
//     let reverse = array.reverse();

//     return string == reverse.join("") ? true : false


// ;   }

function palindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? true : false;
  }
  


module.exports = {suma, multiplica, palindromo}


