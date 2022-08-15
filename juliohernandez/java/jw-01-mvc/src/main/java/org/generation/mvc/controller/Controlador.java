package org.generation.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller //Controlador de tipo MVC
public class Controlador {

	@GetMapping("/") //Lo mapea cuando la solicitud es GET //= localhost:puerto/
	public String inicio() {
		return "index"; //Qué vista se desea usar.
	}
	
	@GetMapping("/users") //Lo mapea cuando la solicitud es GET //= localhost:puerto/
	public String usuarios() {
		return "usuarios"; //Qué vista se desea usar.
	}
	
	
	
	
	
	
	
}
