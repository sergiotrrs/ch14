package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.springframework.stereotype.Service;

@Service
public class AdminUserServiceImp implements IAdminUserService{

	@Override
	public List<AdminUser> Users() {
		
		//Se hace uso de los métodos de la capa DAO
		System.out.println("Se enlistan los usuarios");
		return null;
	}

	@Override
	public void save(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Guarda el objeto en la db");
		
	}

	@Override
	public void delete(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Elimina el obj de la db");
		
	}

	@Override
	public AdminUser findAdminUser(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Encuentra el objeto indicado en la db");
		return null;
	}

}
