package org.generation.app.controller;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.generation.app.service.AdminUserServiceimp;
import org.generation.app.service.IAdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

	
	//private AdminUserService adminUserService; Uso directo de la clase
	@Autowired
	private IAdminUserService adminUserService;
	
	@GetMapping("/")
	public String indexController() {
		List<AdminUser> users;
		users = adminUserService.Users(); // Me entrega el listado de usuarios
		System.out.println("Total de usuarios: "+ users);
		return "index";
	}
	@GetMapping("/save-admin")
	public String saveAdmin(AdminUser adminUser) {
		//adminUserService = new AdminUserServiceimp(); Como ya esta instaciado ya no es necesario
		//la línea porque se va reutilizar el código
		adminUserService.save(adminUser);
		return "edit-admin";
	}
	
	
}
