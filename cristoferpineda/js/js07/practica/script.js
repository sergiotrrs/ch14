console.log("Hola")
let btn=document.getElementById("pag"); //hacer el boton dinamico
btn.addEventListener('click',contando,true);//equivalente a onclick 
let cuenta=0;
function contando(){
  if(cuenta==0){
    cuenta=1;
    pag_1();
    console.log(cuenta);
  }else{
    cuenta=cuenta+1; //cuenta++ cuenta=+
    console.log(cuenta);
  }
}
function pag_1(){
//El método por default que reslizs fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(response =>{ return response.json()})//Conviete a formato JSON
  .then(usuarios => almacen(usuarios));//para que retorne el valor de usuarios
}

function almacen(usuarios){
       //console.log(usuarios.data[0])
       for (user of usuarios.data){
        //console.log(`id: ${user.id} tiene email ${user.email}`)
        let indice = user.id;
        localStorage.setItem(indice,JSON.stringify(user))
    }
    encontrar();//mandar a llamar la funcion 
    imprimir(usuarios);
}

function encontrar(){
    //indice=0;
    for(let i=1; i<localStorage.length; i++){
    //indice = indice+user.id;
    lista=JSON.parse(localStorage.getItem(i)); //parse se usa para que lo lea nuevamenente como string
    console.log(lista);
    }
}

function imprimir(usuarios){
    let datos=""
    for(let user of usuarios.data){
        datos = datos + `<tr><td>${user.id} </td>
                            <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td><img class="avatar" src ="${user.avatar}"> </td>`;
    }
  document.getElementById("data").innerHTML=datos;
}