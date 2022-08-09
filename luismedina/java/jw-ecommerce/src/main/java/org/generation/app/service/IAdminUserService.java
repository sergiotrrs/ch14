package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;

public interface IAdminUserService {
	
	public List<AdminUser> Users(); //Entregara la lista de usuarios
	public void save(AdminUser adminUser); // se guardara el objeto
	public void delete(AdminUser adminUser);//Se eliminara el objeto
	public AdminUser finAdminUser(AdminUser adminUser);//Se buscara un objeto
	

}
