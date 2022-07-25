//SEGUNDA OPCIÓN 
let link1= "https://reqres.in/api/users?page=1";
let link2= "https://reqres.in/api/users?page=2";

function boton1() {
pagina(link1);
}

function boton2() {
pagina(link2);
}

function pagina(link) {
    fetch(link)
        .then(response => { return response.json() })//formato json
        .then(usuarios => almacen(usuarios));
}

function almacen(usuarios) {// aqui los guardamos en application
  
  for (user of usuarios.data) {
      //console.log(`id: ${user.id} tiene email ${user.email}`)
      let indice = user.id;
      localStorage.setItem(indice, JSON.stringify(user));
      //console.log("este es el indice: "+indice);
  }
  obtener();
  imprime(usuarios);
}

function obtener() { //aqui llamamos los datos que están en local storage
  
  for (let i = 7; i < localStorage.length; i++) {
      //indice=indice+user.id;
      lista = JSON.parse(localStorage.getItem(i));
      //console.log(lista);
      // console.log("este es el length: "+localStorage.length);
      // console.log("esta es i: "+ i);
  }
  
}

function imprime(usuarios) {
  let datos = "";
  for (let user of usuarios.data) {
      datos = datos + `<tr><td>${user.id} </td>
                          <td>${user.first_name} </td>
                          <td>${user.last_name} </td>
                          <td>${user.email} </td>
                          <td><img class="rounded-circle" src ="${user.avatar}"> </td>`;

  }
  document.getElementById("info").innerHTML=datos;
}