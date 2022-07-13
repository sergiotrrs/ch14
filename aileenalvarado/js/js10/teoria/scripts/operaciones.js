function suma(a, b){ 
    return Number(a) +Number(b);
} 

multiplica =(a,b)=> a*b;

 

function palindromo(oracion) {
   oracion = oracion.replaceAll(" ", "").toLowerCase() ;
    const stringInverso = oracion.split("").reverse().join("");
  
    return stringInverso === oracion? true : false;
  }
  //console.log(palindromo("Anita lava la tina")); // es palindromo
  //console.log(palindromo("hola")); // no es palindromo
  //console.log(palindromo("Ana")); // es palindromo
  //console.log(palindromo("Amor a la roma")); // es palindromo
  //console.log(palindromo("Isaac no ronca asi")); // es palindromo 
  module.exports ={suma, multiplica, palindromo}