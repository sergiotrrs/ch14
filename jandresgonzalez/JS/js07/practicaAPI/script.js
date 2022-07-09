console.log("Link");

/* for (i = 0; i <7 ; i++) 
{const node = document.createElement("div")
node.classList.add("col-6");

// // Create a text node:
const textnode = document.createTextNode("Water");

// // Append the text node to the "li" node:
node.appendChild(textnode);

// // Append the "li" node to the list:
document.getElementById("data").appendChild(node);} */

//https://reqres.in/api/users?delay=3

function fetchInfo(url) {
    const users = [];
    fetch(url) 
        .then(responseJSON => {return responseJSON.json()})
        .then(usuarios => {
            
            //console.log(usuarios.data[0]);
            for (let i=0; i<usuarios.data.length; i++) {
                users.push(usuarios.data[i]);
            }

            users.forEach(user => {

    
        const col = document.createElement("div");
        const node = document.createElement("div");
        const img = document.createElement("img");
        const card = document.createElement("div");
        const text = document.createElement("p");
        text.classList.add("card-text");
        card.classList.add("card-body");
        img.setAttribute("src", user.avatar);
        img.classList.add("card-img-top");
        node.classList.add("card", "m-2", "card-hover", ":hover");
        col.classList.add("col-sm-4", "d-flex", "justify-content-center");
        node.setAttribute("style", "width: 9rem;")
    //    const info = document.createTextNode(`Info: ID --${user.id}-- NAME --${user.first_name} ${user.last_name}-- CONTACT --${user.email}-- ${user.avatar}`);
        text.innerHTML= `<b>Id#:</b> ${user.id} <br> <b>Name:</b> ${user.first_name} ${user.last_name} <br> <b>Contact:</b> <a href="mailto:${user.email}?Subject=Abue%20hackerman%20page%20inquiry">${user.email}</a>`;
        card.appendChild(text);
        //img.appendChild(card);
        node.appendChild(img);
        node.appendChild(card);
        col.appendChild(node);
    
        document.getElementById("data").appendChild(col);
                
    /*             // Se crea un div
                const node = document.createElement("div")
                node.classList.add("row", "col-12", "card");
                const info = document.createTextNode(`Info: ID --${user.id}-- NAME --${user.first_name} ${user.last_name}-- CONTACT --${user.email}-- ${user.avatar}`)
                node.appendChild(info);
                const img = document.createElement("img")
                img.setAttribute("src", user.avatar)
                img.classList.add("card-img-top", "w-25")
                node.appendChild(img);
                document.getElementById("data").appendChild(node);
                 */
            });
    
    
    
    /* 
            for (object of objects) {
                console.log(object.id);
            }
            for (object of objects) {
                console.log(object.email);
            }
            for (object of objects) {
                console.log(object.first_name);
            }
            for (object of objects) {
                console.log(object.last_name);
            }
            for (object of objects) {
                console.log(object.avatar);
            } */        
    });
}


'https://reqres.in/api/users?page=2'
function displayInfo() {
    document.getElementById("buttonStart").style.display = "none";
    fetchInfo("https://reqres.in/api/users?delay=3");
    setTimeout(createPagination, 350);
    }
    
    async function createPagination() {
        document.getElementById("pagination").innerHTML = `               \
    
        <div class="container-fluid m-3 d-flex justify-content-center">\
        <div class="row" class="m-5 p-5 d-flex justify-content-center">\
          <span class="pagination-strip">\
            <span>Anterior ---</span>\
            <!-- Página 1 -->\
            <span 
                class="pagination-item"
                aria-label="Página 1"
                onclick="paginaUno()">
                <button class="btn btn-outline-secondary btn-sm"> 1 </button>\
            </span>\
            <!-- Página 2 -->\
            <span
                class="pagination-item"
                aria-label="Página 2"
                onclick="paginaDos()">
                <button class="btn btn-outline-secondary btn-sm"> 2 </button>\
            </span>\
            <!-- Página 3 -->\
            <span
                class="pagination-item"
                aria-label="Página 3"
                onclick="paginaTres()">
                <button class="btn btn-outline-secondary btn-sm"> 3 </button>\
            </span>\
            <span>--- Siguiente</span>\
          </span>\
        </div>\
      </div>\
    `;
    }

    function paginaUno() {
        console.log("clickUno");
    }
    function paginaDos() {
        const last = document.getElementById("data").lastChild;
        document.getElementById("data").removeChild(last);
        console.log("clickDos");
        fetchInfo('https://reqres.in/api/users?page=2');
    }
    function paginaTres() {
        console.log("clickTres");
    }