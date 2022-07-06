let n1, n2, n3, t, menor;
n1 = prompt("Número 1:");
n2 = prompt("Número 2:");
n3 = prompt("Número 3:");

if (n1 < n2) {
    t = n1;
}
else {
    t = n2;
}

if (t < n3) {
    menor = t;
}
else {
    menor = n3;
}
console.log("El número menor es " + menor);