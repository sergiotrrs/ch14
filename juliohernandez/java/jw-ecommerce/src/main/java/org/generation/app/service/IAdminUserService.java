package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;

public interface IAdminUserService {
	public List<AdminUser> Users(); //Entregará la lista de usuarios
	//ArrayList es una subclase de List
	
 	public void save(AdminUser adminUser); //Se guardará el objeto pasado de tipo tipo AdminUser
 	public void delete(AdminUser adminUser); //Se eliminará el objeto pasado de tipo tipo AdminUser
	public AdminUser findAdminUser(AdminUser adminUser); //Se buscará un objeto
	
	
	
	
	
	

}
