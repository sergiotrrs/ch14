package org.generation.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlador {
	@GetMapping("/") //localhost:puerto/
	public String inicio() {
		return "index"; // que vista deseo ver
		//return "usuario"; // que vista deseo ver
	}
	
	@GetMapping("/usuarios") //localhost:puerto/
	public String usarios() {
		//return "index"; // que vista deseo ver
		return "usuario"; // que vista deseo ver
	}
	
}
