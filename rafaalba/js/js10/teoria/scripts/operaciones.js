
function suma( a, b ){
    return Number (a) + Number (b);
}

multiplica=(a,b)=>a*b;

  function palindromo(texto) {
    const nuevoTexto = texto.replace(/[\W_,.]/g, "").toLowerCase();
    const textoReves = nuevoTexto.split("").reverse().join("");
  
    return nuevoTexto === textoReves ? true : false;
  }

module.exports = {suma, multiplica, palindromo}
