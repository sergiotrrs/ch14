//guardar_localStorage();

function apiUrl() {    
let url = document.getElementById('api').value;
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

const mostrarData = (data) => {
  console.log(data)
let body = ''
for (let i = 0; i < data.length; i++) {
  body += `<tr><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].id}</td><td><img src=\'${data[i].avatar}\'</td></tr>`
  localStorage.setItem('data1', JSON.stringify(data));
}
document.getElementById('data').innerHTML = body
}
}

/*function guardar_localStorage() {
  let url = document.getElementById('api').value;
   fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));
  localStorage.setItem('url', JSON.stringify(mostrarData));
  console.log(data)
}
*/

function apiUrl2() {
let url = document.getElementById('api').value;
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));
const mostrarData = (data) => {
  console.log(data)
let body = ''
for (let i = 0; i < data.length; i++) {
let dato1 = document.getElementById('dato1').value;
//const datos = ["data[i]"];
//const nuevodato = datos.push(dato1);
//let a = datos.join('.');
// console.log(a)
 let b="https://marketplace.canva.com/EAEkB8aSmJU/1/0/1600w/canva-rosa-y-amarillo-gato-moderno-dibujado-a-mano-abstracto-imagen-de-perfil-de-twitch-R-0ekToDIBE.jpg"
 body += `<tr><td>${data[i].dato1}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].id}</td><td><img src=\'${b}\'</td></tr>`
 localStorage.setItem('data1', JSON.stringify(data));
  //body += `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td><img src=\'${e}\'</td></tr>`
}
document.getElementById('data').innerHTML = body
}
}

function apiAnt(){
     apianterior = localStorage.getItem('data1');
	 console.log(apianterior)
}

function apiSig() {
    apisiguiente = localStorage.getItem('data2');
    	console.log(apisiguiente)
}

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
}

function borrarData(){
     localStorage.removeItem("data1");
     localStorage.removeItem("data2");
}
