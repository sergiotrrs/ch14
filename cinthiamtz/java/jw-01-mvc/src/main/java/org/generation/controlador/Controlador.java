package org.generation.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlador {

	@GetMapping("/") //localhost:puerto/
	public String inicio() {
		return "index";
	}
	
}