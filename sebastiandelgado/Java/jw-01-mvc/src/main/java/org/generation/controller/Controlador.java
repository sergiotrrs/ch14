package org.generation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlador {

	
	@GetMapping("/") //LocalHost:Puerto/
	public String inicio(){
		return "usuarios"; //qué vista deseo usar
	}
}
