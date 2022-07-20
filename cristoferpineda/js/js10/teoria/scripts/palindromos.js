
function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
module.exports = {palindrome}
palindrome("Anita lava la tina");
palindrome("Ana");
palindrome("Amor a Roma");
palindrome("Isaac no ronca asi");