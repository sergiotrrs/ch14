package org.generation.app.controller;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.generation.app.service.AdminUserServiceImp;
import org.generation.app.service.IAdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

	//private AdminUserService adminUserService;
	@Autowired
	private IAdminUserService adminUserService;
	
	@GetMapping("/")
	public String indexController() {
		List<AdminUser> users;
		users = adminUserService.Users(); // me entrega el listado de usuarios
		System.out.println("Total de Usuarios: " + users);
		return "index";
	}
	
	@GetMapping("/save-admin")
	public String saveAdmin(AdminUser adminUser) {
		
		adminUserService.save(adminUser);
		return "edit-admin";
	}
	
}
