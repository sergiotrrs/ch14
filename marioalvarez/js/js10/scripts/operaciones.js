function suma(a,b){
    
    return Number(a)+Number(b); 
}

//funcion flecha
multiplica=(a,b)=>a*b;

//Función que determina si un texto es palindromo

function esPalindromo(texto){
    
    //Texto a minusculas, Es mejor usar upperCase por que con lowe case puede dar resultados inesperados
    texto=String(texto).toLowerCase();
    //Texto sin espcios
    texto=texto.split(" ").join("");
    //Indices inciales y finales del texto
    let indexI=0;
    let indexF=texto.length-1;
    //Mientras los indices no se crucen
    while(indexI<=indexF){
        //si son difernetes caracteres, no es un palindromo
        if(texto[indexI++]!=texto[indexF--]){
            return false;
        }
    }
    //si llegó aquí, es un palindromo.
    return true;
    
    /*
    Otra forma de hacerlo:
    //Necesito expresiones regulares para replace
     /[\W_]/g
     [] //Comienzo de caracteres
     \w significa no palabra
     -"es el caracter"
     / marcar inicio o final de una expresion 
     g busqueda global
    https://www.w3schools.com/js/js_regexp.asp 
    Replace, la parte /  significa que es una exprecion regultar que busca espacios, y la /g significa que es global, es decir busca todos los espacios en la variable.

    texto=String(texto).toLowerCase().replace(/ /g, "");
    let texto2=texto.split("").reverse().join("");
    if(texto==texto2)
        return true;
    else
        return false;
    */
}


//Exportar para prubas unitarias
module.exports = {suma,multiplica,esPalindromo}
