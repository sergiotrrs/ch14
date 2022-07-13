//SEGUNDA OPCIÓN 
let link1= "https://reqres.in/api/users?page=1";
let link2= "https://reqres.in/api/users?page=2";
let link3= "https://reqres.in/api/users?delay=3";

function boton1() {
pagina(link1);
}

function boton2() {
pagina(link2);
}

function boton3() {
pagina(link3);
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
  
  for (let i = 1; i < localStorage.length; i++) {
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
                          <td><img class="rounded-circle" src ="${user.avatar}"> </td></tr>`;

  }
  document.getElementById("info").innerHTML=datos;
}


//mas cositas 

// function tiempoFin() {
//   let tiempoExpira = Date.now() + 1000 * 10;
//   localStorage.setItem("expiration", JSON.stringify({ expiration: tiempoExpira }));
// }


// function borrarStorage() {
//   if (JSON.parse(localStorage.getItem("expiration")).expiration < Date.now()) {
//       localStorage.clear()
//      // console.log("se borró la info");
//      // alert("no existe");
//       tiempoFin();
//       api("https://reqres.in/api/users?delay=3");
//   } else {
//       existentes();
//   }
// }