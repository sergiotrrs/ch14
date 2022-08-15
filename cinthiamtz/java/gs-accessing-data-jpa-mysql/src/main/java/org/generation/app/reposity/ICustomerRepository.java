package org.generation.app.reposity;

import org.generation.app.entity.Customer;
import org.springframework.data.repository.CrudRepository;

public interface ICustomerRepository extends CrudRepository<Customer, Long>{

}
