package org.generation.app.repository;

import org.generation.app.entity.Customer;
import org.springframework.data.repository.CrudRepository;
//Se crea una interfaz en el paquete de repository con el nombre ICustomerRepository
//}se crea extends CrudRepository Se crean argumentos <nombre, tipo de dato>
public interface ICustomerRepository extends CrudRepository<Customer, Long>{

}
