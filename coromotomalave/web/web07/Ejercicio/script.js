

function cambiarNombre() {
    let name = prompt("Cual es tu nombre?");
    if(name) {
        document.getElementById('name').innerHTML = `Hola ${ name }` ;
    }
    
};

