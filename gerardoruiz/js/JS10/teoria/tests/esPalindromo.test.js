const palindromo = require ("../script/palindromo");

test ("Deberá checar si un string es palindromo o no", ()=>{

    const palindrome = palindromo.palindrome("anita lava la tina");
    expect (palindrome).toBe(true)
    
} );


test ("Deberá checar si un string es palindromo o no", ()=>{

    const palindrome = palindromo.palindrome("amor a roma");
    expect (palindrome).toBe(true)
    
} );



test ("Deberá checar si un string es palindromo o no", ()=>{

    const palindrome = palindromo.palindrome("anita lava la tine");
    expect (palindrome).toBe(false)
    
} );




