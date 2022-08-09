function suma (a,b){
    //return parseFloat(a) + parseFloat(b);
    return Number(a) + Number(b);
    
}

multiplicacion = (a, b) => a * b;


function palindromo (oracion) {
    let oracionS = oracion.replace(/\s+/g, '').toLowerCase();
    let vuelta = [];
    for (let i = oracionS.length; i >= 0; i--) {
        vuelta.push(oracionS[i])
    }
    let vueltaS = vuelta.join("").toLowerCase();
    

    /*if (oracionS == vueltaS){
        return true;
    } else {
        return false;
    }*/
    return oracionS == vueltaS ? true : false;
}


//Exporta la funcion desde .js
module.exports = {suma, multiplicacion, palindromo}