package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;

public interface IAdminUserService {
	//Lista objetos
	public List<AdminUser> users();
	//Guarda adminuser
	public void save(AdminUser adminUser);
	//Borra adminuser
	public void delete(AdminUser adminUser);
	//Encuentra un_ user
	public AdminUser findAdminUser(AdminUser adminUser);

}
