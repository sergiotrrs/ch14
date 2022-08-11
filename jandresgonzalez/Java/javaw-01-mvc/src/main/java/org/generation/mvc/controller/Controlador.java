package org.generation.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlador {
	
	@GetMapping("/")
	public String inicio() {
		return "index";
	}
	
	@GetMapping("/gomgom")
	public String gomgom() {
		return "gomgom";
	}

}
