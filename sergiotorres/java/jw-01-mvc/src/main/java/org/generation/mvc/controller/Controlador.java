package org.generation.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlador {

	@GetMapping("/") //localhost:puerto/
	public String inicio() {
		
		return "index"; // que vista deseo usar
	}
	
	@GetMapping("/usuarios") //localhost:puerto/
	public String usuarios() {
		
		return "usuarios"; // que vista deseo usar
	}
	
}
