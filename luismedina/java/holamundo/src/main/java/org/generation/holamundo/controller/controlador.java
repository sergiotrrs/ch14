package org.generation.holamundo.controller;

import org.generation.holamundo.entity.persona;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.generation.holamundo.entity.Persona;

@RestController
public class controlador {
	
	@GetMapping("/dorime") //localhost:port/dorime
	public String dorime() {
		return "Dorime en la CH14";
	}
	
	@GetMapping("/dorimepersona") //localhost:port/dorime
	public Persona dorimePersona() {
		Persona patricio = new Persona();
		patricio.setNombre("Patricio");
		patricio.setApellido("Estrella Dorime");
		return patricio;
	}
}
