package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;

public interface IAdminUserService {
	public List<AdminUser> Users(); //Entregara la lista de usuarios
	public void save(AdminUser adminUser); //Se guirdara el objeto
	public void delete(AdminUser adminUser);//Se eliminará el objeto
	public AdminUser findAdminUser(AdminUser adminUser);//se bsucara el obejti 
	
}
