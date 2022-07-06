let people = ["Maria", "Dani", "Luis", "juan", "Camila"]
let nombre = "leo"


function Ejercico5(array = people, introduceTuMombre = nombre) {
    for (let i = 0; i < array.length; i++) {
        let letra = array[i].toLowerCase();
        array[i] = array[i].charAt(0).toUpperCase() + letra.slice(1)
    }

    alert("las personas son: " + array.join(" "))
    if (array.includes("Dani")) {
        let indice = array.indexOf("Dani")

        array.splice(indice, 1)
    }

    if (array.includes("Juan")) {
        let indice = array.indexOf("Juan")

        array.splice(indice, 1)
    }

    if (array.includes("Luis")) {
        let indice = array.indexOf("Luis")
        let luis = array.splice(indice, 1)
        array.push(luis.join(""))

    }

    array.push(introduceTuMombre)





    alert(array.join(" "))

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Maria") {
            alert("Maria");
            break;
        }

    }

}

Ejercico5();