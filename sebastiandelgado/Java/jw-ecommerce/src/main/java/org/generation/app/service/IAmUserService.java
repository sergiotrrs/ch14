package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;

public interface IAmUserService {

	public List<AdminUser> Users(); //Entregará la lista de usuarios
	public void save(AdminUser adminUser);  //Se guardará el objeto
	public void delete(AdminUser adminUSer); //Se eliminará el objeto
	public AdminUser findAdminUser(AdminUser adminUser); //Se buscará un objeto
}
