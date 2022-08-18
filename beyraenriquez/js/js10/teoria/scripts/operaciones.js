
function suma (a,b) {
    return Number(a) + Number(b);
}

multiplica = (a,b)=> a*b;

function polindrome(str){
    const newStr = str.replace(/[\W_]/g,"").toUpperCase();
    const strReversed = newStr.split("").reverse().join("");

    return newStr === strReversed ? true : false;
    
}

module.exports = {suma, multiplica, polindrome}