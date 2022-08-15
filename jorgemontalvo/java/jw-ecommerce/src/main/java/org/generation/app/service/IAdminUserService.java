package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;

public interface IAdminUserService {
	
	public List<AdminUser> Users(); //Entregará la lista de Usuarios
	public void save(AdminUser adminUser); // se guardara el objeto
	public void delete(AdminUser adminUser); // se eliminara el objeto
	public AdminUser findAdminUser(AdminUser adminUser); // se buscará un objeto


}
