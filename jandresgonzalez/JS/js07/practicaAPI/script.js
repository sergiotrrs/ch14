/**
 * 
 * Script para mostrar información en Front End
 * utilizando la API Fetch del poderosísimo JavaScript
 * que baja una URL con dalay y otra página 2 sin delay.
 * Realizada por jatg-eca el 8, 9 y 10 de julio. 9 hrs aprox.
 * para prácticas del bootcamp Generation México
 * Fullstack Junior Java Web Developer.
 * 
 */

//Esta variable conecta con la API a la primera página, que tiene delay
const fetchUno = "https://reqres.in/api/users?delay=3";
//Esta variable conecta con la API a la segunda página
const fetchDos = 'https://reqres.in/api/users?page=2';
//Esta variable identifica que existan o no datos de expiración de localStorage
const expir = JSON.parse(localStorage.getItem("expirationInfo"));
let datoExpiracion = Date.now() + 1000*45;
/*Si no existen datos en localStorage descargados,
la página comienza con un botón rojo (#buttonStart) que al dar click
descarga y muestra la información en HTML; de lo contrario,
se realiza lo que en el siguiente if:
el botón desaparece, se crea paginación y se carga la página uno desde
localStorage*/
if (expir) {
    document.getElementById("buttonStart").style.display = "none";
    createPagination();
    paginaUno();
}

/**
 * Esta función obtiene los datos de la URL.
 * Y los almacena localmente en localStorage.
 * 
 */
function fetchInfo(url) {
    fetch(url) 
        .then(responseJSON => {return responseJSON.json()})
        .then(usuarios => {
            for (user of usuarios.data) {
  
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
        node.appendChild(img);
        node.appendChild(card);
        col.appendChild(node);
    
        document.getElementById("data").appendChild(col);
                

            };
        });
}

/**
 * Esta función crea un dato de expiración que se guarda en localStorage
 * Este dato nos servirá para analizar si el tiempo ha pasado, y si es
 * así, borra todo y vuelve a iniciar la solicitud de descarga.
 * 
 * En caso de querer cambiar la expiración, se puede mover en la suma de
 * expiration: (después de Date.now() )
 * */
function setExpiration() {
    localStorage.setItem("expirationInfo", JSON.stringify ({
        expiration: datoExpiracion,
    }));
}

/**
 * Función que inicializa la información en un listado que admite
 * seis elementos. Esta función empieza al dar click al botón en la página
 * para obtener la información.
 * Se llama la función para crear paginación y se esperan unos segundos para cambiar de página,
 * sólo una vez que se haya cargado la info
 */
function displayInfo() {
    document.getElementById("buttonStart").style.display = "none";
    setTimeout(createPagination, 2950);
    fetchInfo(fetchUno);
    setLocalStore(fetchUno);
    }

    /**
     * Esta es una función asíncrona que crea los botones de paginación
     * para separar el listado en seis elementos por página, tres páginas
     * * 
     */    
    async function createPagination() {
        document.getElementById("pagination").innerHTML = `               \
        <nav aria-label="Page navigation" id="pages">
  <ul class="pagination justify-content-center">

    <li class="page-item" onclick="paginaUno()"><a class="page-link" href="#">1</a></li>
    <li class="page-item" onclick="paginaDos()"><a class="page-link" href="#">2</a></li>
    <li class="page-item" onclick="paginaTres()"><a class="page-link" href="#">3</a></li>

    </li>
  </ul>
</nav>
`;
        
        
        /* `               \
    
        <div class="container-fluid m-3 d-flex justify-content-center pt-5" id="pages">\
        <div class="row" class="m-5 p-5 d-flex justify-content-center">\
          <span class="pagination-strip">\
            <span>Anterior ---</span>\
            <!-- Página 1 -->\
            <span 
                class="pagination-item"
                title="Página 1"
                onclick="paginaUno()">
                <button class="btn btn-outline-secondary btn-sm"> 1 </button>\
            </span>\
            <!-- Página 2 -->\
            <span
                class="pagination-item"
                title="Página 2"
                onclick="paginaDos()">
                <button class="btn btn-outline-secondary btn-sm"> 2 </button>\
            </span>\
            <!-- Página 3 -->\
            <span
                class="pagination-item"
                title="Página 3"
                onclick="paginaTres()">
                <button class="btn btn-outline-secondary btn-sm"> 3 </button>\
            </span>\
            <span>--- Siguiente</span>\
          </span>\
        </div>\
      </div>\
    `; */
    }


//Función de espera. Es una promesa que arroja en consola si faltan descargar datos
async function wait() {
    const espera = new Promise((resolve, reject) => {
        if (JSON.parse(localStorage.getItem("Card1"))) resolve ("Ya hay datos de pág.uno");
        else reject ("Falta bajar datos de API...");

        espera
            .then(console.log(resolve))
            .catch(console.log(reject));
    })

}
    //Función que se realiza al dar click a la página uno
    function paginaUno() {
        let cards = JSON.parse(localStorage.getItem("Card1"));
        if (cards) {
            document.getElementById("data").innerHTML = " ";
            console.log("Hay datos");
            getLocalStoreOne();
        }
        else {
            wait();
            console.log("Nanais de localStore");
           
        }
    }
    //Función que se realiza al dar click a la página dos
    function paginaDos() {
        document.getElementById("data").innerHTML = " ";
        let cards = JSON.parse(localStorage.getItem("Card7"));
        if (cards) {
            console.log("Hay datos");
            getLocalStoreTwo();
        }
        else {
            setLocalStore(fetchDos);
            fetchInfo(fetchDos);
            console.log("Nanais de localStore");
        }

    }
    //Función que se realiza al dar click a la página tres
    function paginaTres() {
        document.getElementById("data").innerHTML = " ";
        let cards = JSON.parse(localStorage.getItem("Card1"));
        if (cards) {
            console.log("Hay datos");
            getLocalStoreOne();
        }
        else {
            setLocalStore(fetchUno);
            fetchInfo(fetchUno);
            console.log("No hay local store");
        }
        
    }

/**
 * Esta función limpia el localStorage e inicia todo el proceso de 
 * conexión con la API, limpia el HTML y muestra el botón de inicio
 */
function clearStore() {
    document.getElementById("data").innerHTML = " ";
    document.getElementById("pages").innerHTML = " ";
    document.getElementById("buttonStart").style.display="inline";

    localStorage.clear();
}

/**
 * La función regresa la información para la página uno
 */
function getLocalStoreOne(){
    const cardOne = JSON.parse(localStorage.getItem("Card1"));
    const cardTwo = JSON.parse(localStorage.getItem("Card2"));
    const cardThree = JSON.parse(localStorage.getItem("Card3"));
    const cardFour = JSON.parse(localStorage.getItem("Card4"));
    const cardFive = JSON.parse(localStorage.getItem("Card5"));
    const cardSix = JSON.parse(localStorage.getItem("Card6"));
    


    if (JSON.parse(localStorage.getItem("expirationInfo")).expiration < Date.now()) {
        clearStore();
    }
    else {

        pasteHTML(cardOne);
        pasteHTML(cardTwo);
        pasteHTML(cardThree);
        pasteHTML(cardFour);
        pasteHTML(cardFive);
        pasteHTML(cardSix);


        }
    }

/**
 * La función regresa la información para la página uno
 */
    function getLocalStoreTwo(){
        const cardSeven = JSON.parse(localStorage.getItem("Card7"));
        const cardEight = JSON.parse(localStorage.getItem("Card8"));
        const cardNine = JSON.parse(localStorage.getItem("Card9"));
        const cardTen = JSON.parse(localStorage.getItem("Card10"));
        const cardEleven = JSON.parse(localStorage.getItem("Card11"));
        const cardTwelve = JSON.parse(localStorage.getItem("Card12"));
        
    
    
        if (JSON.parse(localStorage.getItem("expirationInfo")).expiration < Date.now()) {
            clearStore();
        }
        else {
            if (cardSeven) {
    
            pasteHTML(cardSeven);
            pasteHTML(cardEight);
            pasteHTML(cardNine);
            pasteHTML(cardTen);
            pasteHTML(cardEleven);
            pasteHTML(cardTwelve);
            }
    
            }
        }

/**
 * Esta función inyecta en el HTML información de los JSON obtenidos
 * de la API de prueba. Se necesita usar uno para cada carta.
 * La función creará cartas usando Bootstrap 5.2.0
 * @param {variable} name //Aquí va el nombre del JSON de la carta que irá
 * en HTML 
 */
function pasteHTML(name) {
    const col = document.createElement("div");
    const node = document.createElement("div");
    const img = document.createElement("img");
    const card = document.createElement("div");
    const text = document.createElement("p");
    text.classList.add("card-text");
    card.classList.add("card-body");
    img.setAttribute("src", name.avatar);
    img.classList.add("card-img-top");
    node.classList.add("card", "m-2", "card-hover", ":hover");
    col.classList.add("col-sm-4", "d-flex", "justify-content-center");
    node.setAttribute("style", "width: 9rem;")
//    const info = document.createTextNode(`Info: ID --${user.id}-- NAME --${user.first_name} ${user.last_name}-- CONTACT --${user.email}-- ${user.avatar}`);
    text.innerHTML= `<b>Id#:</b> ${name.id} <br> <b>Name:</b> ${name.name} <br> <b>Contact:</b> <a href="mailto:${name.contact}?Subject=Abue%20hackerman%20page%20inquiry">${name.contact}</a>`;
    card.appendChild(text);
    node.appendChild(img);
    node.appendChild(card);
    col.appendChild(node);

    document.getElementById("data").appendChild(col);
}
/**
 * La función guarda en local storage los datos
 * obtenidos de la API, para mostrar en página,
 * más rápido, las cartas de las personas
 * @param {string} url //En string, se coloca la URL de la API
 * 
 */
function setLocalStore(url) {
    fetch(url)
    .then(response => {return response.json()})
    .then(users => {
        let info = users.data

            info.forEach(element => {
                localStorage.setItem("Card" + element.id, JSON.stringify (
                    {
                        id: element.id,
                        name: `${element.first_name} ${element.last_name}`,
                        contact: element.email,
                        avatar: element.avatar,
        
                    },
                    ))

            })
});
}