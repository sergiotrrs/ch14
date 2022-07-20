
let link1= "https://reqres.in/api/users?page=1";
let link2= "https://reqres.in/api/users?page=2";
let link3= "https://reqres.in/api/users?delay=3";

function boton1() {
pagina(link1);
}
//requesApi local key
//
function boton2() {
pagina(link2);
}
function boton3() {
pagina(link3);//aqui hace el proceso  el if donde lees el tiempo
}
function isCacheAlive(link3){//pagina 1 , pero con delate
  if(page!=1)
      return false;
  //Obtenemos los datos almacenados localmente (JSON)
  let localData=localStorage.getItem(LOCAL_KEY);
  //Checamos si se solicitó la pagina con delay y si tenemos datos almacenados de esa página.
  if(localData!=null){
      //Obtenemos los datos como un objeto
      let localUserData=JSON.parse(localData);
      //Obtenemos el tiempo actual de la solicitud
      let currentTime=Date.now();
      //Obtenemos cuanto tiempo cuando se almacenarón los datos+ el tiempo de tolerancia
      let limitTime=EXP_TIME_SEG*1000+localUserData.time; 
      //Si estamos dentro del tiempo de tolerancia, mostramos datos almacenados localmente, y fin.
      if(currentTime<limitTime){
          return true;
      }
      //Se acabó el tiempo de tolerancia y por tanto, borramos datos
      localStorage.removeItem("localUserData");
      //Si se llegó a este punto, se realizará una nueva solictud fetch
  }
  return false;
}

function pagina(link) {
    fetch(link)
        .then(response => { return response.json() })//formato json
        .then(usuarios => almacen(usuarios));
}

function almacen(usuarios) {// aqui los guardamos en application
  localStorage.setItem
  for (user of usuarios.data) {
      //console.log(`id: ${user.id} tiene email ${user.email}`)
      let indice = user.id;
      localStorage.setItem(indice, JSON.stringify(user));
      //console.log("este es el indice: "+indice);
  }
  obtener();
  imprime(usuarios);
}

function requestCache(){
  //Obtenemos los datos almacenados localmente (JSON)
  let localData=localStorage.getItem(LOCAL_KEY);
  //Obtenemos los datos como un objeto
  let localUserData=JSON.parse(localData);
  //Actualizamos la información   
  localStorage.setItem(LOCAL_KEY,JSON.stringify({ userArray:localUserData.userArray, time:Date.now()}));
  clearTable();
  showUsers(localUserData.userArray);
  
}

function obtener() { //aqui llamamos los datos que están en local storage
  
  for (let i = 7; i < localStorage.length; i++) {
      //indice=indice+user.id;
      lista = JSON.parse(localStorage.getItem(i));
      //console.log(lista);
      // console.log("este es el length: "+localStorage.length);
      // console.log("esta es i: "+ i);
  }
  
  function requestData(url,page){

    if(isCacheAlive(page)){
        requestCache();
    }else{
        requestApi(url,page);
    }
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