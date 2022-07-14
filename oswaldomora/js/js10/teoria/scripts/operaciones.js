function suma (a, b ){
    return Number (a)+ Number (b)}



multiplica = (a,b) => a*b;


function palindromos(word){ 
    let espacios = /[\W_]/g;
    word.toLowerCase().replace(espacios,"").split("").reverse(). join("") === word;}
module.exports={suma, multiplica, palindromos};    