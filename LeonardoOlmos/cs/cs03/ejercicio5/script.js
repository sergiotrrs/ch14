alert("escoje tres numeros")
let a = parseInt(prompt("escoje el primer numero "));
let b = parseInt(prompt("escoje el segundo"));
let c = parseInt(prompt("escoje el tercero"));

if (a + b == c) {
    alert("c es suma de a y b")
} else if (a + c == b) {
    alert("b es suma de a y c")
} else if (b + c == a) {
    alert("a es suma de b y c")
} else {
    alert("la suma de dos variables no es iugal a la tercera variable")
}