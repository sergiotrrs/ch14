package org.generation.app.controller;

import java.util.List;

import org.generation.app.entity.Customer;
import org.generation.app.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api") //Dirección:puerto/api
public class CustomerRestController {

	//QUE NO SE OLVIDE la inyección de dependencias
	@Autowired
	ICustomerService customerService;
	
	//QUE NO SE OLVIDE mapear
	@GetMapping("/customers") //Dirección:puerto/api/customers
	public List<Customer> customers(){
		return customerService.findAllCustomers();
	}
	
	@GetMapping("/customers/{id}")
	public Customer customerByID(@PathVariable Long id) {
		return customerService.findCustomerById(id);
	}
	//Para reemplazar la info de un customer
	@PostMapping("/customers")
	public Customer newCustomer(@RequestBody Customer customer) {
		customer.setIdCustomer(null);
		return customerService.saveCustomer(customer);
	}
	@PostMapping("/customers")
	public Customer replaceCustomer(@RequestBody Customer customer) {
		customer.setIdCustomer(null);
		return customerService.saveCustomer(customer);
	}
	
	@DeleteMapping("customers/{id}")
	public Customer byeCustomer(@PathVariable Long id) {
		return customerService.deleteCustomerById(id);
	}
}
