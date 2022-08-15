package org.generation.app.controller;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.generation.app.service.AdminUserServiceimp;
import org.generation.app.service.IAmUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

	// private AdminUserService adminUserService; Uso directo a la clase
	@Autowired  //se usa para que Spring haga una instancia y ya no escriba más
	private IAmUserService adminUserService;
	
	@GetMapping("/")
	public String indexController() {
		List<AdminUser> users;
		//adminUserService = new AdminUserServiceimp();
		users = adminUserService.Users(); // me entrega el listado de usuarios
		System.out.println("Total de usuarios: " +users);
		return "index";
	}
	
	@GetMapping("/save-admin")
	public String mewAdmin(AdminUser adminuser) {
		//adminUserService = new AdminUserServiceimp();
		adminUserService.save(adminuser);
		return "edit-admin";
	}
	
}
