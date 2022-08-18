package org.generation.app.controller;

import java.util.List;

import org.generation.app.model.Customer;
import org.generation.app.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api") //localhost:port/api
public class CustomerRestController {
	
	@Autowired
	ICustomerService customerService;
	
	@GetMapping("/customers") //localhost:puerto/api/customers
	public List<Customer> customers(){
		return customerService.findAllCustomers();
	}
	
	@GetMapping("/customers/{id}")  //path variable
	public Customer customerById(@PathVariable Long id) {  //se indica que es un path variable
		return customerService.findCustomerById(id);
	}
	
	@PostMapping("/customers/")
	public Customer newCustomer(@RequestBody Customer customer) { //El objeto lo agrega desde el Body
		customer.setIdCustomer(null);
		return customerService.saveCustomer(customer);
	}
	
	@PutMapping("/customers/")
	public Customer replaceCustomer(@RequestBody Customer customer) { //El objeto lo agrega desde el Body
	
		return customerService.saveCustomer(customer);
	}
	
	@DeleteMapping("customers/{id}")
	public Customer byeCustomer(@PathVariable Long id) {
		return customerService.deleteCustomerById(id);
	}

	
	
}
