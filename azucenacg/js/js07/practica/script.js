//SEGUNDA OPCIÓN 
//let link1= "https://reqres.in/api/users?page=1";
//let link2= "https://reqres.in/api/users?page=2";
let link3= "https://reqres.in/api/users?delay=3";

const nombreLS="datoJSON";
const tExpira=1*60;

// function boton1() {
// llamaApi(link1);
// }

// function boton2() {
// llamaApi(link2);
// }

function boton3() {
  checaLocal(link3);
}


function checaLocal(link){

  if(hayInfo()){ //si hay info es true se pide esa info
      dameInfo();
  }else{ //si en hayInfo resulta false, se llama a la API
      llamaApi(link);
  }
}

function llamaApi(link){
  fetch(link)
  .then(responseIsJSON =>{return responseIsJSON.json()})
  .then(infoDeJSON =>{ 
                      //Guarda datos en el LS
                      localStorage.setItem("datoJSON",JSON.stringify({ arreglo:infoDeJSON.data, tiempo:Date.now()}));
                      vaciaTabla();
                      console.log(infoDeJSON.data)
                      return muestraInf(infoDeJSON.data);
                  })
  .catch(console.log("error"));        
}

function hayInfo(){

  //Accedemos al LS
  let infoEnLocal=localStorage.getItem(nombreLS);

  //Pregunta si hay info en LS
  if(infoEnLocal!=null){
      //Traducimos el JSON que está el LS
      let infoEnLocalP=JSON.parse(infoEnLocal);

      //Momento en el que se presiona el botón otra vez
      let segundoTiempo=Date.now();

      //Se le suma el tiempo de expiracion a la ultima vez que se apretó el botón 
      //para comparar cuantos son los milisegundos que tiene de límite 
      //el usuario para acceder al LS

      let milisLim=tExpira*1000+infoEnLocalP.tiempo; 

      //Si el boton se aprieta antes de los milisegundos límite se da acceso al LS
      if(segundoTiempo<milisLim){
          return true;
      }
      else {
        //Si ya se pasaron esos milis limite, se borra la info 
       localStorage.removeItem("localUserData");
      }
  }

  else {
    return false;
  }
}

function dameInfo(){
  //Accedemos al LS
  let infoEnLocal=localStorage.getItem(nombreLS);
  //Traducimos el JSON que está el LS
  let infoEnLocalP=JSON.parse(infoEnLocal);
  //Mandamos de nuevo el JSON al LS junto con el tiempo actual   
  localStorage.setItem(nombreLS,JSON.stringify({ arreglo:infoEnLocalP.arreglo, tiempoAct:Date.now()}));
  vaciaTabla();
  console.log(infoEnLocalP.arreglo);
  muestraInf(infoEnLocalP.arreglo);
  
}

function vaciaTabla(){
  document.getElementById("info").innerHTML="";
}

function muestraInf(arreglo){

  let datos = "";
  for (let user of arreglo) {
      datos = datos + `<tr><td>${user.id} </td>
                          <td>${user.first_name} </td>
                          <td>${user.last_name} </td>
                          <td>${user.email} </td>
                          <td><img class="rounded-circle" src ="${user.avatar}"> </td></tr>`;

  }
  document.getElementById("info").innerHTML=datos;

}



//datos de las otras páginas 
// function pagina(link) {
//     fetch(link)
//         .then(response => { return response.json() })//formato json
//         .then(usuarios => almacen(usuarios));
// }

// function almacen(usuarios) {// aqui los guardamos en application
  
//   for (user of usuarios.data) {
//       //console.log(`id: ${user.id} tiene email ${user.email}`)
//       let indice = user.id;
//       localStorage.setItem(indice, JSON.stringify(user));
//       //console.log("este es el indice: "+indice);
//   }
//   obtener();
//   imprime(usuarios);
// }

// function obtener() { //aqui llamamos los datos que están en local storage
  
//   for (let i = 1; i < localStorage.length; i++) {
//       //indice=indice+user.id;
//       lista = JSON.parse(localStorage.getItem(i));
//       //console.log(lista);
//       // console.log("este es el length: "+localStorage.length);
//       // console.log("esta es i: "+ i);
//   }
  
// }

// function imprime(usuarios) {
//   let datos = "";
//   for (let user of usuarios.data) {
//       datos = datos + `<tr><td>${user.id} </td>
//                           <td>${user.first_name} </td>
//                           <td>${user.last_name} </td>
//                           <td>${user.email} </td>
//                           <td><img class="rounded-circle" src ="${user.avatar}"> </td></tr>`;

//   }
//   document.getElementById("info").innerHTML=datos;
// }


// //mas cositas 

// // function tiempoFin() {
// //   let tiempoExpira = Date.now() + 1000 * 10;
// //   localStorage.setItem("expiration", JSON.stringify({ expiration: tiempoExpira }));
// // }


// // function borrarStorage() {
// //   if (JSON.parse(localStorage.getItem("expiration")).expiration < Date.now()) {
// //       localStorage.clear()
// //      // console.log("se borró la info");
// //      // alert("no existe");
// //       tiempoFin();
// //       api("https://reqres.in/api/users?delay=3");
// //   } else {
// //       existentes();
// //   }
// // }