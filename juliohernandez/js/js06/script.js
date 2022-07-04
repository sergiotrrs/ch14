console.log("Teoría de la sesión JS06");
encontrarPorId();

function encontrarPorId(){
    //obtenemos el objeto mediante ID
    const element = document.getElementById("intro");
    console.log(`Datos de elemento: ${element.innerHTML}`);

    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = 
        "El <b>texto</b> en el párrafo intro es:" + element.innerHTML;
}