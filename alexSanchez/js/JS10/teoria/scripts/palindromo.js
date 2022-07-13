function palindrome(str) {
    const nuevo = str.replace(/[\W_]/g, "").toLowerCase(); // converti todo a minuscula
    const reversa = nuevo.split("").reverse().join("");//Split para regresar el string como array, join para eliminar los espacios y reverse para invertir el orden del arreglo
  
    return nuevo === reversa ? true : false;
  }
  module.exports= {palindrome}