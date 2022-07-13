  //Función para tomar los registros (usuarios) de la API
  function busquedaUsuarios(url) {
    //console.log(se activo el boton)
    //fetch("https://reqres.in/api/users?page=${page}")
    fetch(url)
      .then(response => response.json())
      .then(users => {
        console.log(users);
        console.log(Array.isArray(users.data));
        console.log(users.data);
        let tbody = document.getElementById("tbody")
        tbody.innerHTML = "";
        for (let data of users.data) {
          //Se agregan los usuarios al storage
          obtenerUsuarios();
          agregarUsuaurios(url, users);
          console.log(users.data);
          //Se acomoda la información en la tabla
          tbody.innerHTML += `    
      <tr>
      <td>${data.id}</td>
        <td>${data.first_name}</td>
        <td>${data.last_name}</td>
        <td>${data.email}</td>
        <td><img src="${data.avatar}" class="rounded-circle" alt="Eniun"></td>
      </tr>`;
        }

      })
      //Mensaje de error
      .catch(error => {
        console.log("La solicitud causo un error", error);
      })
  }

  //URL de la página 3
  /**
   * 
   * @returns URL de la página
   */
  function delay3() {
    return busquedaUsuarios("https://reqres.in/api/users?delay=3");
  }

  //URL de la página 2
  /**
   * 
   * @returns URL de la página
   */
  function pagina2() {
    return busquedaUsuarios("https://reqres.in/api/users?page=2");
  }

  //Función que agrega los usuarios al storage
  function agregarUsuaurios(url) {
    localStorage.setItem("usuarios", JSON.stringify(url));
    console.log("Se han agregado los usuarios");
  }

  //Función para recuperar los usuarios
  function recuperarUsuarios(url) {
    console.log("Se han recuperado los datos");
    return JSON.parse(localStorage.getItem(url));
  }

//Se quita los datos del storage
  function remover(url){
    localStorage.removeItem("usuarios", url);
  }

  //Después de un minuto se quitan los datos del storage
  function expirar() {
    let eliminar = new Date().getTime() + 1000; //Después de 1 minutos se eliminan del storage
    eliminar = localStorage.getItem("eliminar", url); //Se eliminan los datos
    if (new Date().getTime() > eliminar) { 
      remover(); //Si paso ha pasado 1  minuto los datos se quitan del storage
      console.log("Se han quitado los datos");
    }
    else {
      recuperarUsuarios(url); //Si no ha pasado dicho tiempo se siguen recuperando los datos
    }
  }

 //Verifica si exiten usuarios en el storage 
function obtenerUsuarios(url) {
  let usuariosLocal = recuperarUsuarios(url);
  if (usuariosLocal) {
    busquedaUsuarios(usuariosLocal);
    console.log("Existen usuarios en el storage");
  }
  else{
    remover();
  }
}

  let btn1 = document.getElementById("btn1");
  btn1.addEventListener('click', pagina2, true);
  let btn2 = document.getElementById("btn2");
  btn2.addEventListener('click', delay3, true);