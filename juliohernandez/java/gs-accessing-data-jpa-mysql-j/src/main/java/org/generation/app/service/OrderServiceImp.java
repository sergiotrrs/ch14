package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Order;
import org.generation.app.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImp implements IOrderService {

	@Autowired
	IOrderRepository orderRepository;
	
	@Override
	public List<Order> findAllOrders() {		
		return (List<Order>) orderRepository.findAll();
	}

	@Override
	public Order saveOrder(Order order) {		
		return orderRepository.save(order);
	}

	@Override
	public Order deleteOrderById(Long id) {
		Order Order= findOrderById(id);
		orderRepository.deleteById(id);
		return Order;
	}

	@Override
	public Order findOrderById(Long id) {
		return orderRepository.findById(id).orElse(null);
	}

}
