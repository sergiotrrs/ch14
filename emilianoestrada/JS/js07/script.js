console.log("ahi la llevamos");

function guardarDatos(){
    const formulario = document.getElementById('formulario');
    console.log(formulario.elements['nombre'].value);
    console.log(formulario.elements['apellido'].value);
    localStorage.setItem("cohorte","ch14");
    localStorage.setItem("nombre",formulario.elements['nombre'].value);
    localStorage.setItem("apellido",formulario.elements['apellido'].value);
}


function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    formulario.elements['nombre'].value= localStorage.getItem('nombre');
    formulario.elements['apellido'].value=  localStorage.getItem('apellido');
}
