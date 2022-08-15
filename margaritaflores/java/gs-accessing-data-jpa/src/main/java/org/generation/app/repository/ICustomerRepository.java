package org.generation.app.repository;

import java.util.List;

import org.generation.app.entity.Customer;
import org.springframework.data.repository.CrudRepository;


//<Customer(mnombre del repositorio [id]), Long(tipo de dato)>
public interface ICustomerRepository extends CrudRepository <Customer, Long> {
	
	List<Customer> findByLastName(String lastName);
}
