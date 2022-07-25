const operacion = require("../scripts/palindromos");

test ("Debería arrojar true si el texto es palindromo", ()=>{
    const palindrome = operacion.palindrome("Anita lava la tina");
    expect(palindrome).toBe(true);
});
test ("Debería arrojar true si el texto es palindromo", ()=>{
    const palindrome = operacion.palindrome("Ana");
    expect(palindrome).toBe(true);
});
test ("Debería arrojar true si el texto es palindromo", ()=>{
    const palindrome = operacion.palindrome("Amor a Roma");
    expect(palindrome).toBe(true);
});
test ("Debería arrojar true si el texto es palindromo", ()=>{
    const palindrome = operacion.palindrome("Isaac no ronca asi");
    expect(palindrome).toBe(true);
});
test ("Debería arrojar true si el texto es palindromo", ()=>{
    const palindrome = operacion.palindrome("suerte");
    expect(palindrome).toBe(true);
});