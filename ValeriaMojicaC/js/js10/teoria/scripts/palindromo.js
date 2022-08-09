function palindromo (oracion) {
    //let oracion = "Anita lava la tina"
    let oracionS = oracion.replace(/\s+/g, '').toLowerCase();
    let vuelta = [];
    for (let i = oracionS.length; i >= 0; i--) {
        vuelta.push(oracionS[i])
    }
    let vueltaS = vuelta.join("")
    console.log(vueltaS);
    console.log(oracionS);

    if (oracionS == vueltaS){
        return true;
    } else {
        return false;
    }
}

module.exports = {palindromo}

