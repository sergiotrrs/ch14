fetch('https://reqres.in/api/users?delay=3')
   //Se coloca {} y return cuando es mas de una intruccion
  .then(responseJSON => {return responseJSON.json()})
  .then(usuarios => {
    //console.log(usuarios.data[0]);
    for (const user of usuarios.data) {
        let table = document.createElement ("tr");
        table.innerHTML = `
        
        <td class="id">${user["id"]}</td>
        <td class="name">${user["first_name"]} ${user["last_name"]}</td>
        <td class="email">${user["email"]}</td>
        <td class="avatar"><img src="${user["avatar"]}" alt="" srcset=""></td>
        `;
        document.getElementById("tablaUsuarios").appendChild(table);
    }
});