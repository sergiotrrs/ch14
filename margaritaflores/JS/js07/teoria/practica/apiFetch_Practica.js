
let url = 'https://reqres.in/api/users';
let urlx = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
     console.log(data.data)
     let body = ""
     for (var i = 0; i < data.data.length; i++) {      
        body+=`<tr><td>${data.data[i].id}</td><td>${data.data[i].first_name}</td> <td>${data.data[i].last_name}</td> <td>${data.data[i].email}</td> <td> <img src='${data.data[i].avatar}' /> </td> </tr>`
     }
     document.getElementById('data').innerHTML = body
    //console.log(body)
}
