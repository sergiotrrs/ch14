let URL = "https://reqres.in/api/users?delay=3";
let CONTENIDO = document.querySelector('#contenido');



function cache(ventana){
    if(ventana!=1)
        return false;
    let localData=localStorage.getItem(LOCALUSER);
    if(localData!=null){
        let localUserData=JSON.parse(localData);
        let tiempoActual=Date.now();
        let tiempoLimite=EXPIRACION*1000+localUserData.time; 
        if(tiempoActual<tiempoLimite){
            return true;
        }
        localStorage.removeItem("localUserData");
        }
    return false;
}

 function requestCache(){
    let localData=localStorage.getItem(ventana);
    let localUserData=JSON.parse(localData);
    localStorage.setItem(ventana,JSON.stringify({ userArray:localUserData.userArray, time:Date.now()}));
    clearTable();
    showUsers(localUserData.userArray);
    
}


function traer(){
fetch(URL)
.then(res=>res.json())
.then((data) => {
   // console.log(data.data[0])
   for (user of data.data){
    console.log(data.data);
        //console.log(`${user.id}  ${user.email} ${user.first_name} ${user.last_name}`)
      //  contenido.innerHTML = ''
      CONTENIDO.innerHTML +=
             `<tr>
                <td>${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><img class="round" src="${user.avatar}"></td>
                
              </tr>`
   };
   

})};

function limpiar(){
    const tBody=document.getElementById("tBody");
}

let clearData=document.getElementById("clear");
clearData.addEventListener('click',()=>{document.getElementById("contenido").innerHTML="";clear();});