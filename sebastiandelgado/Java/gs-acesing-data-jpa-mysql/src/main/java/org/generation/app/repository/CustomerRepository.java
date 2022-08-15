package org.generation.app.repository;

import org.generation.app.entity.Customer;
import org.springframework.data.repository.CrudRepository;

//Con esto ya tengo mi conexión a base de datos
public interface CustomerRepository extends CrudRepository<Customer, Long>  {

	
}
