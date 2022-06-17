setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
    //console.log("Me parece una falta de respecto");
    let frase = document.getElementsByTagName("h3")[0].innerHTML;
    if (document.getElementsByTagName("h3")[0].innerHTML == "Ganando como siempre") {
        //frase = "¡Impongo moda para las niñas!";
        document.getElementsByTagName("h3")[0].innerHTML = "Impongo moda para las niñas!";
    } else {
        //frase = "Ganando como siempre";
        document.getElementsByTagName("h3")[0].innerHTML = "Ganando como siempre";
    }
    console.log("frase :" + frase);
}
