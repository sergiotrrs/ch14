package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.springframework.stereotype.Service;

@Service
public class AdminUserServiceImp implements IAdminUserService {

	@Override
	public List<AdminUser> users() {
		//Aquí se usaría el link con el DAO
		System.out.println("Enlista usuarios");
		return null;
	}

	@Override
	public void save(AdminUser adminUser) {
		System.out.println("Guarda objeto en base de datos");
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(AdminUser adminUser) {
		System.out.println("Elimina objeto");
		// TODO Auto-generated method stub
		
	}

	@Override
	public AdminUser findAdminUser(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Encuentra objeto en base de datos");
		return null;
	}

}
