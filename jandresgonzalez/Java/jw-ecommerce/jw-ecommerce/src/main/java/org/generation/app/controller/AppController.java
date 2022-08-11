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
		//adminUserService = new AdminUserServiceImp();
		//instanciados ^
		users = adminUserService.users();
		System.out.println("Bueno, lista: " + users);
		return "index";
	}
	
	@GetMapping("/new-admin")
	public String saveAdmin(AdminUser adminuser) {
		//adminUserService = new AdminUserServiceImp ();
		//instanciado ^
		adminUserService.save(adminuser);
		return "editadmin";
	}

}
