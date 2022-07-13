
function displayInfo() {
    document.getElementById("ButtonPage1");
    fetch("https://reqres.in/api/users?delay=3")
        .then(Response => Response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data.data)
        let body = ""
        for (var i = 0; i < data.data.length; i++) {
            body += `<tr><td>${data.data[i].id}</td>
                    <td>${data.data[i].first_name}</td> 
                    <td>${data.data[i].last_name}</td>
                    <td>${data.data[i].email}</td> 
                    <td> <img class="rounded-circle" src='${data.data[i].avatar}' /> </td> </tr>`
        }
        document.getElementById('data').innerHTML = body
    }
    borrarStore();
}

function displayInfod() {
    document.getElementById("ButtonPage2");
    fetch("https://reqres.in/api/users?page=2")
        .then(Response => Response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data.data)
        let body = ""
        for (var i = 0; i < data.data.length; i++) {
            body += `<tr><td>${data.data[i].id}</td>
                        <td>${data.data[i].first_name}</td> 
                        <td>${data.data[i].last_name}</td>
                        <td>${data.data[i].email}</td> 
                        <td> <img class="rounded-circle" src='${data.data[i].avatar}' /> </td> </tr>`
        }
        document.getElementById('data').innerHTML = body
    }
    borrarStore();
}
aplicarExpiracion();
function aplicarExpiracion() {
    localStorage.setItem("expirationInfo", JSON.stringify({
        expiration: Date.now() + (1000 * 60),
    }));
} function borrarStore() {
    document.getElementById("data").innerHTML = " ";

if (JSON.parse(localStorage.getItem("expirationInfo")).expiration < Date.now()) {
    localStorage.clear();}
}