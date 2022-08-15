package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.springframework.stereotype.Service;

@Service
public class AdminUserServiceImp implements IAdminUserService{

	@Override
	public List<AdminUser> Users() {
		// TODO Auto-generated method stub
		System.out.println("Encuentra el objeto indicado en la base de datos");
		return null;
	}

	@Override
	public void save(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Guarda el objeto en la base de datos");
		
	}

	@Override
	public void delete(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Elimina el objeto en la base de datos");
		
	}

	@Override
	public AdminUser findAdminUser(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Encuentra el objeto indicado en la base de datos");
		return null;
	}




}