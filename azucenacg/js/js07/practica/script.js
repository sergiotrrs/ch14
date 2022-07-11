console.log("SESION JS07 apiFetch");

//el mètodo por default que hace fetch es get

fetch('https://reqres.in/api/users?page=2')
  //.then(response => response.json())
  .then(responseJSON => {return responseJSON.json()})
  .then(usuarios=>{
    //console.log(usuarios.data);
    //este es un for of
    
    for (user of usuarios.data) {
        info=`
        <tr>
        <th scope="row">${user.id} </th>
        <td>${user.first_name} </td>
        <td>${user.last_name} </td>
        <td>${user.email} </td>
        <td><img class="avatar" src ="${user.avatar}"> </td>
        </tr>`;

        
    }
  });

  function encontrarPorSelector() {
    //las clases van con . o sea .saludo por ejemplo
    const elements= document.querySelectorAll("p.saludo");
    

    //p es para llamar solo a la clase "saludo" en los <p>
    console.log("datos en elements: "+ elements.length);

    let unirStr="";
    elements.forEach(dato=> unirStr+=dato.innerHTML+" ");
    document.getElementById("junta").innerHTML=unirStr;
}


// for (user of usuarios.data) {
//   info=`
//   <tr>
//   <th scope="row">${user.id} </th>
//   <td>${user.first_name} </td>
//   <td>${user.last_name} </td>
//   <td>${user.email} </td>
//   <td><img class="avatar" src ="${user.avatar}"> </td>
//   </tr>`;

  //document.getElementById("info").innerHTML=info;
/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */

  //user hace referencia a cada index, es una variable
  //que nosotros pusimos 

  //.then(data => console.log(data));

  //el segundo then agarra el valor del json
  //porque es lo inmediato


  // SEGUNDA OPCIÓN 

  function pag_1() {
    //El método por default que reslizs fetch es Get
    fetch('https://reqres.in/api/users?page=1')
        .then(response => { return response.json() })//Conviete a formato JSON
        .then(usuarios => almacen(usuarios));
}

function almacen(usuarios) {// aqui los guardamos en application
  //console.log(usuarios.data[0])
  for (user of usuarios.data) {
      //console.log(`id: ${user.id} tiene email ${user.email}`)
      let indice = user.id;
      localStorage.setItem(indice, JSON.stringify(user));
  }
  obtener();
  imprime(usuarios);
}

function obtener() { //aqui llamamos los datos que están en local storage
  //indice=0;
  for (let i = 1; i < localStorage.length; i++) {
      //indice=indice+user.id;
      lista = JSON.parse(localStorage.getItem(i));
      //console.log(lista);
  }
}

function imprime(usuarios) {
  let datos = "";
  for (let user of usuarios.data) {
      datos = datos + `<tr><td>${user.id} </td>
                          <td>${user.first_name} </td>
                          <td>${user.last_name} </td>
                          <td>${user.email} </td>
                          <td><img class="avatar" src ="${user.avatar}"> </td>`;

  }
  document.getElementById("data").innerHTML=datos;
}

//   function imprime(usuarios) {
//     let datos = "";
//     for (let user of usuarios.data) {
//         datos = datos + `<tr><td>${user.id} </td>
//                             <td>${user.first_name} </td>
//                             <td>${user.last_name} </td>
//                             <td>${user.email} </td>
//                             <td><img class="avatar" src ="${user.avatar}"> </td>`;

//     }
//     document.getElementById("data").innerHTML=datos;
// }