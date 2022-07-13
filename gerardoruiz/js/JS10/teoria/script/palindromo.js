function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toUpperCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}





module.exports = {palindrome} ;
