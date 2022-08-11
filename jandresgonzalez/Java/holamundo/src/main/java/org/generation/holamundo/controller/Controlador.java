package org.generation.holamundo.controller;

import org.generation.holamundo.entity.Persona;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class Controlador {
	
	@GetMapping("/dorime") //localhost:port/dorime
	//a partir de la raíz se ejecuta una función
	public String dorime() {
		return "DorimeCH14";
	}
	
	@GetMapping("/dorimePatrick")
	public Persona dorimePersonaPat() {
		Persona patricio = new Persona();
		return patricio;
	}
	
	@GetMapping("/dorimepersona")
	public ArrayList<Persona> dorimePersona() {
		ArrayList<Persona> personas = new ArrayList<Persona>();
		Persona patricio = new Persona();
		patricio.setNombre("Patrick");
		patricio.setApellido("Star");
		patricio.setEdad(198);
		Persona esponjaGar = new Persona();
		esponjaGar.setApellido("Squarepants");
		esponjaGar.setNombre("Boob");
		esponjaGar.setEdad(197);
		Persona calamardo = new Persona();
		calamardo.setNombre("Squidward");
		calamardo.setApellido("Tentacles");
		calamardo.setEdad(300);
		personas.add(esponjaGar);
		personas.add(calamardo);
		personas.add(patricio);
		
		return personas;
	}

}
