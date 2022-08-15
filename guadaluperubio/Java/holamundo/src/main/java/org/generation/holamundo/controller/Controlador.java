package org.generation.holamundo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controlador {
	
	
	@GetMapping	 ("/dorime") //localhost:port/dorime
		public String dorime () {
			return "Dorime ennla ch14";
		}

}

