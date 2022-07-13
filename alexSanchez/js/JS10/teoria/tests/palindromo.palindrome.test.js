
const pal= require("../scripts/palindromo")

test ("Debera ser un palindromo", ()=>{
    expect(pal.palindrome("anita lava la tina")).toBe(true)
})
test ("Debera ser un palindromo", ()=>{
    expect(pal.palindrome("ana")).toBe(true)
})
test ("Debera ser un palindromo", ()=>{
    expect(pal.palindrome("anita lava la tinaamor a roma")).toBe(true)
})
test ("Debera ser un palindromo", ()=>{
    expect(pal.palindrome("anita lava la issac noronca asi")).toBe(true)
})
test ("Debera ser un palindromo", ()=>{
    expect(pal.palindrome("no es un palindromo")).toBe(false)
})
test ("Debera ser un palindromo", ()=>{
    expect(pal.palindrome("1amor, roma 1")).toBe(true)
})
test ("Debera ser un palindromo", ()=>{
    expect(pal.palindrome("suerte")).toBe(false)
} )



