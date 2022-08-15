package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Customer;

public interface ICustomerService {
	/*
	 * Enlista todos los clientes de la base de datos
	 * @param customer
	 * @return listado de clientes
	 * */	
	public List<Customer> findAllCustomers();
	/*
	 * Nos guarda el cliente en la base de datos
	 * @param customer Datos del cliente
	 * @return Devuelve el cliente con el Id asignado 
	 * */
	
	public Customer saveCustomer(Customer customer);
	/*
	 * Elimina un cliente de la base de datos
	 * @param Id el identificador del cliente a eliminar 
	 * */
	public void deleteCustomer(Long Id);
	/*
	 * Encontrar un cliente en la base de datos
	 * @param Id, Identificador del cliente a buscar
	 * @return
	 * */
	public Customer findCustomerById(Long Id);

	Customer deleteCustomerById(Long id);
	
	
}


