package org.generation.server.serveruno.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ServerunoController {
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/hola")
	public String saludospeludos(
			@RequestParam(				
					name= "name",
					required = false,
					defaultValue= "World"
					)
			String name,
			Model model
			) {
		model.addAttribute("name", name);
		return "holamundo";
	}
}
