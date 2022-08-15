package org.generation.app.controller;

import java.util.List;

import org.generation.app.entity.Order;
import org.generation.app.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/api") //localhost:port/api
public class OrderRestController {
	
	@Autowired
	IOrderService orderService;
	
	@GetMapping("/orders") //localhost:puerto/api/orders
	public List<Order> orders(){
		return orderService.findAllOrders();		
	}
	
	@GetMapping("/orders/{id}")
	public Order orderById(@PathVariable Long id) {		
		return orderService.findOrderById(id);
	}
	
	@PostMapping("/orders")
	public Order newOrder(@RequestBody Order order) {
		order.setOrderId(null);
		return orderService.saveOrder(order);
	}
	
	@PutMapping("/orders")
	public Order replaceOrder(@RequestBody Order order) {
		//Filtros para asegurar que esté un ID y exista
		return orderService.saveOrder(order);
	}
	
	@DeleteMapping("orders/{id}")
	public Order byeOrder(@PathVariable Long id) {
		return orderService.deleteOrderById(id);
	}

	

}
