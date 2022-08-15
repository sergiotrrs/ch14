//Esta es la capa DAO

package org.generation.app.repository;

import java.util.List;

import org.generation.app.entity.Customer;
import org.springframework.data.repository.CrudRepository; //También es una interfaz
										//CReateUpdateDelete

//Este será el repositorio para Customer                   Entidad   , tipo Id
public interface ICustomerRepository extends CrudRepository<Customer, Long> {
//Ya de ciertos métodos
	
	//Buscar por apellidos
	List<Customer> findByApellido(String apellido);
}


//Se hizo la conexión a la base de datos

/*
 * ¿Qué base de datos toma?
 * h2 --> que se colocó en el POM
 * 
 * Se debe configurar la base de datos en application.properties
 * 
 * */
