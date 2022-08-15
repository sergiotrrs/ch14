package org.generation.app.repository;

import java.util.List;

import org.generation.app.entity.Customer;
import org.springframework.data.repository.CrudRepository;

//Conexión con la base de datos. DAO

public interface ICustomerRepository extends CrudRepository<Customer, Long> {
	List<Customer> findByLastName(String lastName);
}
