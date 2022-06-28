let nArray = [1, 2, 4, 5]

function doblarNumeros(array = nArray) {
    let array1 = []

    array.forEach(i => array1.push(i * 2))
    console.log(array1)

}

doblarNumeros();