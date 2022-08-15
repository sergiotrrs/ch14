package org.generation.holaMundo.controller;

import java.util.ArrayList;

import org.generation.holaMundo.entity.Persona;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controlador {
	
	@GetMapping("/dorime") //localhost:port/dorime
	public String dorime() {
		return "Dorime en la CH14";
	}
	@GetMapping("/dorimepersona") //localhost:port/dorime
	public Persona dorimepersona() {
		Persona patricio = new Persona();
		patricio.setNombre("Patricio");
		patricio.setApellido("Estrella Dorime");
		return patricio;
	}
	
	@GetMapping("/dorimepersona/listado")
	public ArrayList<Persona> dorimePersonaList() {
		ArrayList<Persona> personas = new ArrayList<Persona>();
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
		personas.add(esponjaGar);
		personas.add(calamardo);
		personas.add(patricio);
		
		return personas;
	}

	

}
