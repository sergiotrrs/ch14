//Semana dificil, no asimile completamente el tema de las API, modifique un poco y estudie el codigo de Mario, tambien lo ordene para que sea mas entendible para mi. Le añadi estilos para hacer responsiva la tabla, imagenes y la pagina en general.


const listUsers="https://reqres.in/api/users?page=2";
const delayedRs="https://reqres.in/api/users?delay=3";
const LOCAL_KEY="localUserData";

function isCacheAlive(page){
    if(page !=1 )
        return false;
    let localData=localStorage.getItem(LOCAL_KEY);
    
    if(localData!=null){
        let localUserData = JSON.parse(localData);
        let time = Date.now();
        let addedTime  =60000 + localUserData.time; 
        if(addedTime > time){
            return true;
        }
    
        localStorage.removeItem("localUserData");
    }
    return false;
}

function showUsers(arrUsers){
         const tableBody=document.getElementById("tableBody");

        for(let user of arrUsers){

        const tableRow=document.createElement("tr");
        tableRow.innerHTML=`<td class="table-responsive">${user.id}</td>
                            <td class="table-responsive">${user.first_name}</td>
                            <td class="table-responsive">${user.last_name}</td>
                            <td class="table-responsive">${user.email}</td>
                            <td class="table-responsive" ><image class="img-fluid" alt="Responsive image" style="border-radius:50%" src="${user.avatar}"/></td>`;
        tableBody.appendChild(tableRow);
    }
}

function clearTable(){
    const tableBody=document.getElementById("tableBody");
    if (tableBody.hasChildNodes()){
         while ( tableBody.childNodes.length >0 ){
            tableBody.removeChild( tableBody.firstChild );
         }
     }
}

function requestCache(){
    let localData=localStorage.getItem(LOCAL_KEY);
    let localUserData=JSON.parse(localData);
    localStorage.setItem(LOCAL_KEY,JSON.stringify({ userArray:localUserData.userArray, time:Date.now()}));
    clearTable();
    showUsers(localUserData.userArray);
    
}

function requestApi(url,page){
    fetch(url)
    .then(responseIsJSON =>{return responseIsJSON.json()})
    .then(dataJSON =>{ 
                        if(page==1){
                            localStorage.setItem("localUserData",JSON.stringify({ userArray:dataJSON.data, time:Date.now()}));
                        }
                        clearTable();
                        return showUsers(dataJSON.data);
                    })
    .catch(err => {alert(" Something went wrong, try again!");console.log('Solicitud fallida', err);});        
}


function requestData(url,page){

    if(isCacheAlive(page)){
        requestCache();
    }else{
        requestApi(url,page);
    }
}

let page1=document.getElementById("pag1");
let page2=document.getElementById("pag2");
let clear=document.getElementById("reset");

page1.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="Page 1";requestData(delayedRs,1);});
page2.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="Page 2";requestData(listUsers,2);});
clear.addEventListener('click',()=>{document.getElementById("tableTitle").innerHTML="";clearTable();});