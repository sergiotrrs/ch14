package org.generation.app.initializer;
import org.generation.app.entity.Customer;
import org.generation.app.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class InitDb implements CommandLineRunner {

	//private static final Logger log = LoggerFactory.getLogger(InitDb.class);
	
	@Autowired
	private ICustomerRepository customerRepository;
		
	
	@Override
	public void run(String... args) throws Exception {
		//System.out.println("Se ejecuta en InitDb");
		//log.info("Que chido, esto se ejecuta en InitDb");
		log.info("Este mensaje se hizo gracias a lombok");
		customerRepository.save(new Customer("Benito", "Salinas"));
		customerRepository.save(new Customer("Pablo", "López"));
		customerRepository.save(new Customer("Valeria", "Mojica"));
		customerRepository.save(new Customer("Pablo", "Salinas"));
		
		log.info("Listado a todos los registros");
		log.info("-----------------------------");
		for (Customer customer : customerRepository.findAll()) {
			log.info(customer.toString());
			 
		}
		Customer eliminado =customerRepository.findById(2L).orElse(null);
		if (eliminado != null) {
			log.info("Pronto a eliminar:"+eliminado.getFirstName());
			customerRepository.delete(eliminado);			
		}
		
		log.info("Listado a todos los registros");
		log.info("-----------------------------");
		for (Customer customer : customerRepository.findAll()) {
			log.info(customer.toString());			 
		}
		
		log.info("Listado a todos los registros con el mismo apellido");
		log.info("-----------------------------");
		for (Customer customer : customerRepository.findByLastName("Salinas")) {
			log.info(customer.toString());
			 
		}
		
		
	}

}
