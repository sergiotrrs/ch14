package org.generation.app.initializer;

import java.util.List;

import org.generation.app.entity.Customer;
import org.generation.app.repository.ICustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitDb implements CommandLineRunner {
	

	private static final Logger log = LoggerFactory.getLogger(Customer.class);
	
	@Autowired
	private ICustomerRepository customerRepository;
	
	Customer abue = new Customer("Joge", "Glez");

	
	@Override
	public void run(String... args) throws Exception {
		//System.out.println("1.Se ejecuta INIT");
		log.info("PONTE NUEVO PONTE LEÓN");
		customerRepository.save(new Customer("Abue", "Glez"));
		customerRepository.save(new Customer("Benito","Salinas"));
		customerRepository.save(new Customer("Pablo","López"));
//		customerRepository.save(new Customer("Valeria","Mojica"));
		customerRepository.save(new Customer("Hernan", "Glez"));

		log.info("SE PONEN TODOS LOS REGISTROS");
		
		
		log.info("SE VAN A VER LOS QUE HAY EN EL REPOSITORY");
		for (Customer customer : customerRepository.findAll()) {
			log.info(customer.toString());
		}
		
		Customer eliminado=customerRepository.findById(2L).orElse(null);
		log.info("Se va a eliminar" + eliminado.getFirstName() + " . HASTA LA VISTA BABY");
		customerRepository.delete(eliminado);
		
		for (Customer customer : customerRepository.findAll()) {
			log.info(customer.toString());
		}
		
		List<Customer> encontrados = customerRepository.findByLastName("Glez");
		log.info("Encontramos una lista " + encontrados);
		for (Customer customer : encontrados) {
			log.info("De nombres: " + customer.getFirstName());
		}
		
	}
}
