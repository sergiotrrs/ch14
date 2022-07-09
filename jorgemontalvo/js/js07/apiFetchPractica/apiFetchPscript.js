console.log("Se ejecuta el programa con exito");
function boton() {
//El metodo por default que realiza fetch es Get
fetch('https://reqres.in/api/users?delay=3')
  .then(response => (response.json()))
  .then(usuarios =>  {
    //console.log(usuarios.data[0])
    let imprimir = ''
    console.log(usuarios.length);
   for (user of usuarios.data){
       console.log(`id tiene: ${user.id} 
       tiene email: ${user.email} 
       nombre tiene: ${user.first_name}`)
    imprimir += `<tr>
    <td> ${user.id} </td>
    <td>${user.first_name}</td>
    <td>${user.last_name}</td>
    <td>${user.email}</td>
    <td><img class="rounded-circle" src ='${user.avatar}'</td>
    </tr>`
    
    document.getElementById('data').innerHTML = imprimir
    }
    
    

})
.catch(error => console.log(error));

}
    
    
    


