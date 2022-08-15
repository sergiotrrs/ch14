package org.generation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class controlador {
	@GetMapping("/greeting") //LocalHost:Puerto/
	public String inicio(){
		return "index"; //qué vista deseo usar
	}
	@GetMapping("/greeting?name=User")
	public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
		model.addAttribute("name", name);
		return "index2";
	}
}
