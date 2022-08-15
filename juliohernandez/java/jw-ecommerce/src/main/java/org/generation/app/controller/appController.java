package org.generation.app.controller;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.generation.app.service.AdminUserServiceImp;
import org.generation.app.service.IAdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller //es el controlador también es un component
public class appController {
	
	//private AdminUserService adminUserService;  //Uso directo de la clase
	@Autowired //Se indica que la clase se inyecta. 
	private IAdminUserService adminUserService; //Indicar a través de la clase padre (polimorfismo)
	
	@GetMapping("/")
	public String indexController() {
		List<AdminUser> users;
		users = adminUserService.Users();
		System.out.println("Total de usuarios: "+users);
		return "index";
	}
	
	
	
}
