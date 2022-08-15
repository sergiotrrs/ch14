package org.generation.app.repository;

import java.util.List;

import org.generation.app.entity.Customer;
import org.springframework.data.repository.CrudRepository;

public interface ICostumerRepository extends CrudRepository<Customer, Long> { //Clases anónimas los que llevan <>

	List<Customer> findByLastName(String lastName);
}
