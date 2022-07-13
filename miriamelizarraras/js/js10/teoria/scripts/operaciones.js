function suma (a,b) {
    return Number(a) + Number(b);

}

multiplica =(a,b)=> a*b;


function palindromo(texto) {
    const nuevoTexto = texto.replace(/[\W_]/g, "").toLowerCase();
    const textoReversed = nuevoTexto.split("").reverse().join("");
  
    return nuevoTexto === textoReversed ? true : false;
  }

  module.exports = {suma, multiplica, palindromo}