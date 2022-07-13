const operacion = require("../scripts/operaciones");

test ("Es un palindromo", ()=> {  
    const palindrome = operacion.palindrome("Anita lava la tina")
    expect(palindrome).toBe(true);
});

test ("Es un palindromo", ()=> {  
    const palindrome = operacion.palindrome("Ana")
    expect(palindrome).toBe(true);
});

test ("Es un palindromo", ()=> {  
    const palindrome = operacion.palindrome("Amor a Roma")
    expect(palindrome).toBe(true);
});

test ("Es un palindromo", ()=> {  
    const palindrome = operacion.palindrome("Isaac no ronca asi")
    expect(palindrome).toBe(true);
});

test ("Es un palindromo", ()=> {  
    const palindrome = operacion.palindrome("No es palindromo")
    expect(palindrome).toBe(false);
});

test ("Es un palindromo", ()=> {  
    const palindrome = operacion.palindrome("1 amor, roma 1")
    expect(palindrome).toBe(true);
});

test ("Es un palindromo", ()=> {  
    const palindrome = operacion.palindrome("Suerte")
    expect(palindrome).toBe(false);
});