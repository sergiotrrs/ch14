package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Customer;

public interface ICustomerService {
	/**
	 * Enlista clientes para base de datos
	 * @return Lista de clientes
	 */
	public List<Customer> findAllCustomers();
	/**
	 * Guarda un cliente en base de datos
	 * @param customer Datos del cliente
	 * @return devuelve cliente con ID asignado
	 */
	public Customer saveCustomer(Customer customer);
	
	/**
	 * Elimina un cliente de la base de datos
	 * según su id
	 * @param id : número de id del cliente a eliminar
	 * @return 
	 */
	public Customer deleteCustomerById(Long id);
	
	
	/**
	 * Encuentra un cliente de db
	 * según su id
	 * @param id :número de id del cliente a buscar
	 * @return un objeto Customer, que es cliente en la db
	 */
	public Customer findCustomerById(Long id);
	
}
