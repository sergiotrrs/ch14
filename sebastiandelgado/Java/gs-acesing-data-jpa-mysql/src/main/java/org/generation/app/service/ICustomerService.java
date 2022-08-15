package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Customer;

public interface ICustomerService {

	
	/*
	 * Enlista todos los clientes de la base de datos
	 * @param cusromer
	 * @return Listado de clientes
	 * 
	 */
	public List<Customer> findAllCustomers();
	
	/*
	 * nos guarda el cliente en la nase de datos
	 * @Param customer Datos del cliente
	 * @Return devuelve el cliente con el id asignado
	 */
	
	// para guardar los datos
	public Customer saveCustomer(Customer customer);
	
	/*
	 * Elimina un cliente de la base de dato.
	 * @param el identificador del cliente a eliminar
	 */
	
	public Customer deleteCustomerById(Long Id);
	
	/*
	 * Encontrar un cliente en la base de datos
	 * @param el identificador del cliente a buscar
	 * @return
	 */
	
	public Customer findCustomerById(Long Id);
}
