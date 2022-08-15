package org.generation.app.initializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

import org.generation.app.entity.Customer;
import org.generation.app.repository.ICustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component // Para que SpringBoot la escanee
@Slf4j  //Lombok lo hace en log
public class InitDb implements CommandLineRunner { // Se ejecuta después del main

	// Se imprime en consola pero como parte del Log clase utilizada
	//private static final Logger log = LoggerFactory.getLogger(InitDb.class);
	
	@Autowired //Spring lo instancia
	private ICustomerRepository customerRepository;
	
	//Se debe sobreescribir el método
	@Override
	public void run(String... args) throws Exception {
		//System.out.println("Se ejecuta en InitDb");
		log.info("Qué chido, esto se ejecuta en InitDb");
		customerRepository.save(new Customer("Julio", "César"));
		customerRepository.save(new Customer("Aarón", "Meza"));
		customerRepository.save(new Customer("Benito", "Salinas"));
		customerRepository.save(new Customer("Ramón", "Salinas"));
		customerRepository.save(new Customer("Valeria", "Mojica"));
		customerRepository.save(new Customer("Abue", "Andrés"));
		customerRepository.save(new Customer("Adrian", "Limón"));
		
		log.info("Listado a todos los registros");
		log.info("------------------------------");
		for (Customer customer : customerRepository.findAll()) {
			log.info(customer.toString());
		}
		
		Customer eliminado = customerRepository.findById(2L).orElse(null); //El dato es del tipo Long
		//Regresa una entidad
		
		if (eliminado != null) {
			log.info("Pronto a eliminar:"+eliminado.getFirstName());
			customerRepository.delete(eliminado);
		}
		
		log.info("Nuevo listado a todos los registros");
		log.info("------------------------------");
		for (Customer customer : customerRepository.findAll()) {
			log.info(customer.toString());
		}
		
		log.info("Nuevo listado a todos los registros con el mismo apellido");
		log.info("------------------------------");
		for (Customer customer : customerRepository.findByApellido("Salinas")) {
			log.info(customer.toString());
		}
	}
}

//Se detiene porque no se agregó la dependencia Spring Starter Web (no espera solicitudes HTTP)
