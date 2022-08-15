package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Order;

public interface IOrderService {
	/**
	 * Enlista todos las ordenes de la base de datos
	 * @param Order 
	 * @return Listado de ordenes
	 */
	public List<Order> findAllOrders();
	/**
	 * Nos guarda la orden en la base de datos
	 * @param Order Datos de la orden
	 * @return Devuelve la orden con el Id asignado
	 */ 
	public Order saveOrder(Order Order); 
	
	/**
	 * Elimina una orden de la base de datos
	 * @param Id identificador de la orden a eliminar
	 */
	public Order deleteOrderById(Long id);
	
	/**
	 * Encontrar una orden en la base de datos
	 * @param Id identificador de la orden a buscar
	 * @return
	 */
	public Order findOrderById(Long id);
	
	
}
