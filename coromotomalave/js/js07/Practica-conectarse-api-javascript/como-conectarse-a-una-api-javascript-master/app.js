
//link de la pagina con la api utilizada
//https://developers.themoviedb.org/3/getting-started/images

let pagina = 1;//declaro variable let pagina para sumar o restar un elemento cuando le de a un boton
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

//Agrego evento click al boton siguiente
btnSiguiente.addEventListener('click', () => {

// le coloco condicion que sea menor a 1000 porque esa es la cantidad que me da la api de peliculas
	if(pagina > 1) {
	pagina -= 1// estoy sumandole a pagina un elemento para cuando le de siguiente al boton lo cambie
	cargarPeliculas()// llamo la funcion asincrona para que se ejecute la api
}
});


//Agrego evento click al boton anterior
btnAnterior.addEventListener('click', () => {

	// le coloco condicion que sea menor a 1000 porque esa es la cantidad que me da la api de peliculas
		if(pagina < 1000) {
		pagina += 1// estoy sumandole a pagina un elemento para cuando le de siguiente al boton lo cambie
		cargarPeliculas()// llamo la funcion asincrona para que se ejecute la api
	}
	});

const cargarPeliculas = async() => {

//Cuando usamos fetch nos devuelve una promesa en la cual debemos esperar que acabe de hacer algo
//realizamos una peticion y debemos esperar que la procece por parte del servidor
// Colocamos await(espera) para decirle que procece respuesta cuando cuando este lista pero la funcion,
//debe ser asincrona(colocando async antes de los parametros()) porque no sale error.
//tambien cuando trabajamos con funciones asincronas debemos tarbajar con try catch 
//con el try se le solicita que ejecute un codigo en este caso es el link de la api
//Pero en caso de que alla un error debemos intentar atraparlo con cath(error) y puedo acceder a el con console.log(error)
//si hay un error puede responder con errores como 401(llave con error) y 404(no encontro la pelicula)
//Sale en consola un objeto con el estado de la peticion y dice ok true y status 200 y otra informacion.
//Al final de el link de la api para colocarle el idioma en espanol escribo es-Mx, esta info se busca en la info de la pagina
//https://developers.themoviedb.org/3/movies/get-movie-details
try {

	//const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=079c2fb4db5db62250e277d52980825c&language=es-MX')Esta api solo me trae una pelicula
	
	
	
	
	
	
	const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=079c2fb4db5db62250e277d52980825c&language=es-MX&page=${pagina}`)// quito 550 y agrego popular para que me salga todas las pelis populares.
	console.log(respuesta);

		if(respuesta.status === 200){//Si respuesta es igual a 200 osea correcta, quiero ejecutar const datos
			const datos = await respuesta.json();// Es para acceder a la informacion del link de la api,metodo tambien asincrono
			//console.log(datos.title)//Con la propiedad .title acceso solo al titulo

			//Ahora hago un forEach que me recorra el array(arreglo) y me devuelva el titulo de cada pelicula
			//datos.results.forEach(casa => {// el elemento pelicula se le puede cambiar a cualquier nombre con el punto y la propiedad ya
			//llamo elemento que quiero.
				//console.log(casa.title);// me imprime el titulo de las 20 peliculas
				let peliculas = '';
				datos.results.forEach(pelicula => {
					peliculas += `
						<div class="pelicula">
							<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
							<h3 class="titulo">${pelicula.title}</h3>
						</div>
					`;})
					document.getElementById('contenedor').innerHTML = peliculas;
				
		} else if( respuesta.status === 401 ) {
			console.log("La llave tiene un error")
		} else if(respuesta.status === 404) {
			console.log("La pelicula que buscas no existe")
		}else {
			console.log("Error desconocido")
		}

}catch(error){
	console.log(error)
}	
} 

cargarPeliculas()


/*let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();*/