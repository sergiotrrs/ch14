
/*
const operaciones = require("./operaciones");

// Este archivo hará las pruebas unitarias para suma 
//La suma test es donde se configura mi prueba unitaria 
// test ("Comentario , fnc callback");

test ("Deberas sumar dos números positivos", ()=>{
    //expect (fncPrueba).metcher();
    expect (operacion.suma(5,6)).toBe(11);
});
*/
function suma( a, b ){
    return Number (a) + Number (b);
}

multiplica=(a,b)=>a*b;





  function palindromo(texto) {
    const nuevoTexto = texto.replace(/[\W_]/g, "").toLowerCase();
    const textoReves = nuevoTexto.split("").reverse().join("");
  
    return nuevoTexto === textoReves ? true : false;
  }



module.exports = {suma, multiplica, palindromo}
