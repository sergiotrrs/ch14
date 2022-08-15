package org.generation.app.service;
import java.util.List;
import org.generation.app.model.AdminUser;
import org.springframework.stereotype.Service;

@Service
public class AdminUserServiceimp implements IAmUserService {

	@Override
	public List<AdminUser> Users() {
		System.out.println("Se enlista los usuarios");
		return null;
	}

	@Override
	public void save(AdminUser adminUser) {
		System.out.println("Guarda el objeto en la base de datos");
		
	}

	@Override
	public void delete(AdminUser adminUSer) {
		System.out.println("Elimina el objeto en la base de datos");
		
	}

	@Override
	public AdminUser findAdminUser(AdminUser adminUser) {
		System.out.println("Encuentra el objeto ubicado en la base de datos");
		return null;
	}
	
}
