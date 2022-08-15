package org.generation.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlador {
	@GetMapping("/") //funciona sobre localhost:puerto/
	public String inicio() {
		
		return "index"; //Que vista deseo usar
	}
	
	@GetMapping("/usuarios") //funciona sobre localhost:puerto/usuarios
	public String usuarios() {
		
		return "usuarios"; //Que vista deseo usar
	}
	
}
