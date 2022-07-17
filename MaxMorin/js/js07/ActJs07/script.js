console.log("Práctica JS07");

const URL_DELAY="https://reqres.in/api/users?delay=3";
const EXP_TIME_SEG=1*60;
const LOCAL_KEY="localUserData";

function isCacheAlive(page){
    if(page!=1)
        return false;
    let localData=localStorage.getItem(LOCAL_KEY);
    if(localData!=null){
        let localUserData=JSON.parse(localData);
        let currentTime=Date.now();
        let limitTime=EXP_TIME_SEG*1000+localUserData.time; 
        if(currentTime<limitTime){
            return true;
        }
        localStorage.removeItem("localUserData");
    }
    return false;
}

function requestCache(){
    let localData=localStorage.getItem(LOCAL_KEY);
    let localUserData=JSON.parse(localData);
    localStorage.setItem(LOCAL_KEY,JSON.stringify({ userArray:localUserData.userArray, time:Date.now()}));
    clearTable();
    showUsers(localUserData.userArray);
}

 //se obtiene los datos a través de un fecth. 
function requestApi(url,page){
    fetch(url)
    .then(responseIsJSON =>{return responseIsJSON.json()})
    .then(dataJSON =>{ 
                        if(page==1){
                            //Almacenamos los datos de manera local
                            localStorage.setItem("localUserData",JSON.stringify({ userArray:dataJSON.data, time:Date.now()}));
                        }
                        clearTable();
                        return showUsers(dataJSON.data);
                    })
    .catch(err => {alert(" No se pudo mostrar contenido deseado");console.log('Solicitud fallida', err);});        
}

// se agrega  una fila por cada objeto contenido en el array de objetos
function showUsers(arrUsers){
        //Obtener el elemento padre donde se agregará el hijo
         const tableBody=document.getElementById("tableBody");

        for(let user of arrUsers){
        //Por cada usuario:

        //Creamos nuevo renglón, con la información
        const tableRow=document.createElement("tr");
        tableRow.innerHTML=`<td class="tdStyle1">${user.id}</td>
                            <td class="tdStyle2">${user.first_name}</td>
                            <td class="tdStyle3">${user.last_name}</td>
                            <td class="tdStyle4">${user.email}</td>
                            <td class="tdStyle5"><image class="photoIm" src="${user.avatar}"/></td>`;
                        //Añadirle elemento hijo
                        tableBody.appendChild(tableRow);
                    }
                    
                }
                //funcion node de eliminacion
                 function clearTable(){
                    const tableBody=document.getElementById("tableBody");
                    if (tableBody.hasChildNodes()){
                        while ( tableBody.childNodes.length >0 ){
                            tableBody.removeChild( tableBody.firstChild );
                         }
                    }
               }
                           
        
//Se traen los datos desde la memoria
function requestData(url,page){

    if(isCacheAlive(page)){
        requestCache();
    }else{
        requestApi(url,page);
    }
}


let page1=document.getElementById("page1B");
let clear=document.getElementById("clearB");

page1.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="pagina 1";requestData(URL_DELAY,1);});
clear.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="";clearTable();});
