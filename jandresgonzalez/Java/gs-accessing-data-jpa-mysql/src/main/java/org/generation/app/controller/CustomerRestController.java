package org.generation.app.controller;

import java.util.List;

import org.generation.app.entity.Customer;
import org.generation.app.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	@GetMapping("../")
	public String indice() {
		return "Hola, este es el index";
	}

}
