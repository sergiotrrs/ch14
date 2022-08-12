package org.generation.app.controller;

import java.util.List;

import org.generation.app.entity.Customer;
import org.generation.app.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api") //empieza a mapear desde api en
//localhost:port/api
public class CustomerRestController {
	
	@Autowired
	ICustomerService customerService;
	
	@GetMapping("/customers") //va a regresar un json
	//el json suele venir de localhost:puerto/api/customers,
	//y se agrega en la anotación requestmapping
	public List<Customer> customers() {
		return customerService.findAllCustomers();
	};
	
	@GetMapping("/customers/{id}")
	public Customer customerById(@PathVariable Long id) {
		return customerService.findCustomerById(id);
	};
	
	@PostMapping("/customers")
	public Customer newCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);
	}
	
	@PutMapping("/customers")
	public Customer updCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);	
	}
	
	@DeleteMapping("customers/{id}")
	public Customer byeCustomer(@PathVariable Long id) {
		return customerService.deleteCustomerById(id);
	}

}
