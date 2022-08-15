package org.generation.holamundo.controller;

import java.util.ArrayList;

import org.generation.holamundo.entity.Persona;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //Para indicar el tipo de clase.
public class Controlador {
	@GetMapping("/dorime") //A mapearse cuando se realice una solicitud Get. //localhost:port/dorime
	public String dorime() {
		return "Dorime en la Ch14";
	}
	//Cuando accedemos a la url, java ejecuta dorime
	
	@GetMapping("/dorimePersona")
	public Persona dorimePersona() {
		Persona patricio = new Persona();
		
		patricio.setNombre("Patricio");
		patricio.setApellido("Estrella");
		
		return patricio; //Va a regresar un json
	}
	//¿Qué pasa si se regresa una coleccion??
	
	@GetMapping("/dorimePersona/listado")
	public ArrayList<Persona> dorimePersonaList() {
		
		/* * * * * * * * * SE CREA LA COLEECIÓN QUE SE REGRESARÁ * * * * * * */
		ArrayList<Persona> personas = new ArrayList<Persona>();
		
		/* * * * * * * * * SE CREAN LOS OBJETOS DE LA COLECCIÓN * * * * * * */
		Persona patricio = new Persona();
		patricio.setNombre("Patrick");
		patricio.setApellido("Star");
		//patricio.setEdad(198);
		
		Persona esponjaGar = new Persona();
		esponjaGar.setApellido("Squarepants");
		esponjaGar.setNombre("Boob");
		//esponjaGar.setEdad(197);
		
		Persona calamardo = new Persona();
		calamardo.setNombre("Squidward");
		calamardo.setApellido("Tentacles");
		//calamardo.setEdad(300);
		
		//Se agrega a la colección personas
		personas.add(esponjaGar);
		personas.add(calamardo);
		personas.add(patricio);
		
		return personas;
	}

}
