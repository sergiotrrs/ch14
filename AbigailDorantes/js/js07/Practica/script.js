//Abigail Elizabeth Dorantes Juarez

console.log("Practica Js07");

const urlPage2 = "https://reqres.in/api/users?page=2";
const urlDelay = "https://reqres.in/api/users?delay=3";
const timeExp = 1 * 60;
const local = "localUserData";

function isCacheAlive(page) {
  if (page != 1) return false;
  let localData = localStorage.getItem(local);
  if (localData != null) {
    let localUserData = JSON.parse(localData);
    let currentTime = Date.now();
    let limitTime = timeExp * 1000 + localUserData.time;
    if (currentTime < limitTime) {
      return true;
    }
    localStorage.removeItem("localUserData");
  }
  return false;
}

function solicitudCache() {
  //Obtenemos los datos almacenados localmente (JSON)
  let localData = localStorage.getItem(local);
  //Obtenemos los datos como un objeto
  let localUserData = JSON.parse(localData);
  //Actualizamos la información
  localStorage.setItem(
    local,
    JSON.stringify({ userArray: localUserData.userArray, time: Date.now() })
  );

  limpiarTabla();
  mostrarUsuarios(localUserData.userArray);
}

function solApi(url, page) {
  fetch(url)
    .then((responseIsJSON) => {
      return responseIsJSON.json();
    })
    .then((dataJSON) => {
      if (page == 1) {
        //Almacenamos los datos de manera local
        localStorage.setItem( "localUserData",
          JSON.stringify({ userArray: dataJSON.data, time: Date.now() })
        );
      }
      limpiarTabla();
      return mostrarUsuarios(dataJSON.data);
    })
    .catch((err) => {
      alert("Error, solicitud denegada");
      console.log("Solicitud denegada", err);
    });
}

function mostrarUsuarios(arrUsers) {
  const datosIn = document.getElementById("datosIn");

  for (let user of arrUsers) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = 
     `<td class="tdStyle1">${user.id}</td>
      <td class="tdStyle2">${user.first_name}</td>
      <td class="tdStyle3">${user.last_name}</td>
      <td class="tdStyle4">${user.email}</td>
      <td class="tdStyle5"><image class="image" src="${user.avatar}"/></td>`;
    //Añadirle elemento hijo
    datosIn.appendChild(tableRow);
  }
}

function limpiarTabla() {
  //llamar tabla a limpiar
  const datosIn = document.getElementById("datosIn");
  if (datosIn.hasChildNodes()) {
    while (datosIn.childNodes.length > 0) {
      datosIn.removeChild(datosIn.firstChild);
    }
  }
}

function respuestaDatos(url, page) {
  if (isCacheAlive(page)) {
    solicitudCache();
  } else {
    solApi(url, page);
  }
}

let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let clear = document.getElementById("limpiar");

page1.addEventListener("click", () => {
  document.getElementById("tableTitle").innerHTML = "Página 1";
  respuestaDatos(urlDelay, 1);
});
page2.addEventListener("click", () => {
  document.getElementById("tableTitle").innerHTML = "Página 2";
  respuestaDatos(urlPage2, 2);
});
clear.addEventListener("click", () => {
  document.getElementById("tableTitle").innerHTML = "Tabla limpia";
  limpiarTabla();
});
