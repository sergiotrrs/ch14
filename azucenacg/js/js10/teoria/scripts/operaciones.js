// function suma(a,b) {
//     return Number(a)+Number(b);
// }

// //Se tiene que exportar esta función para las pruebas

// module.exports = {suma}


function suma(a, b){ 
    return Number(a) +Number(b);
} 

multiplica =(a,b)=> a*b;



function esPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? true : false;
  }



// module.exports ={suma, multiplica}
module.exports ={suma, multiplica, esPalindromo}
