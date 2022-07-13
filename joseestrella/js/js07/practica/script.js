console.log("Práctica JS07");

const URL_DELAY="https://reqres.in/api/users?delay=3";
const URL_PAGE2="https://reqres.in/api/users?page=2";
const EXP_TIME_SEG=1*60;
const LOCAL_KEY="localUserData";

/**
 * Función que comprueba si la memoria cache  existe, y de ser así  si todavia es válida.
 * @returns  True: memoria chache, válida y existe; False: No valida y no existe.
 */
function isCacheAlive(page){
    //Pagina 1
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
// Funcion que obtiene los datos de la página 1 y los muestra.

function requestCache(){
    let localData=localStorage.getItem(LOCAL_KEY);
    let localUserData=JSON.parse(localData);
    localStorage.setItem(LOCAL_KEY,JSON.stringify({ userArray:localUserData.userArray, time:Date.now()}));
    clearTable();
    showUsers(localUserData.userArray);
}
/**
 * Función que obtiene los datos de la memoria local o a través de un fecth. 
 * @param {String} url de la API 
 * @param {number} page  Número de la página que se solicita 
 * @returns 
 */
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

/**
 * Función que  agrega  una fila por cada objeto contenido en el array de objetos
 * cada columna de la fila contendrá un atributo del objeto usuario
 * @param {Array Object} arrUsers 
 */
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

/**
 * Función que limpia las filas de la tabla (elimina los hijos <tr>)
 */
function clearTable(){
     const tableBody=document.getElementById("tableBody");
     if (tableBody.hasChildNodes()){
         while ( tableBody.childNodes.length >0 ){
             tableBody.removeChild( tableBody.firstChild );
          }
     }
}
/**
 * Función principal donde se decide si se hace una petición fecth o se traen los datos desde la memoria
 * @param {String} url de la API
 * @param {Number} page Página a solicitar
 */
function requestData(url,page){

    if(isCacheAlive(page)){
        requestCache();
    }else{
        requestApi(url,page);
    }
}
let page1=document.getElementById("page1B");
let page2=document.getElementById("page2B");
let clear=document.getElementById("clearB");
page1.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="Página 1";requestData(URL_DELAY,1);});
page2.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="Página 2";requestData(URL_PAGE2,2);});
clear.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="";clearTable();});


