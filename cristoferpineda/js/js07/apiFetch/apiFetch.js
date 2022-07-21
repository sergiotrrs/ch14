console.log("Sesion JS07 apiFetch");
let url = 'https://reqres.in/api/users?page=2'
fetch(url)
    .then(Response => Response.json())
    .then(data => mostrarData(data))
//fetch('https://reqres.in/api/users?page=2')
  /*.then(responseJSON => { return responseJSON.json()}) 
  .then(usuarios => {
    console.log(usuarios.data[0])
    for(user of usuarios.data){
        console.log(`id:${user.id} tiene email ${user.email}`)
    }*/
    const mostrarData = (data) => {
    for (let i =0 ; i<data.length ; i++){
      let body = "" 
      body += `<tr><td>${data[i].id}
         <td>${data[i].firstName}</td>
         <td>${data[i].lastName}</td>
         <td>${data[i].email}</td>   
         <td>${data[i].avatar}</td>
      </tr>`
    }
    document.getElementById('data').innerHTML= body;
  }
//});

/* fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json)) */
