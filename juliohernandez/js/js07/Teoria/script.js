console.log("Sesión 07 API Fetch");
{
    let x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
}


function guardarDatos() {
    const formulario = document.getElementById("formulario");
    console.log(`Nombre: ${formulario.elements['nombre'].value}`);
    console.log(`Apellido: ${formulario.elements['apellido'].value}`);

    //Se indica clave y valor
    localStorage.setItem("Cohorte", "Ch14");
    localStorage.setItem("nombre", formulario.elements['nombre'].value);
    localStorage.setItem("apellido", formulario.elements['apellido'].value);

    localStorage.setItem("datosUsuario",
        {
            nombre: formulario.elements['nombre'].value,
            apellido: formulario.elements['apellido'].value
        })
}

function recuperarDatos() {
    const datos = localStorage.getItem("datosUsuario")
    const formulario = document.getElementById("formulario");
    formulario.elements['nombre'].value = localStorage.getItem("nombre");
    formulario.elements['apellido'].value = datos.apellido;

}