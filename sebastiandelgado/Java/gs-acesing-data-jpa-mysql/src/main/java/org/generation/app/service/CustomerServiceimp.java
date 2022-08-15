package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Customer;
import org.generation.app.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceimp implements ICustomerService{

	
	@Autowired
	CustomerRepository customerRepository;
	
	@Override
	public List<Customer> findAllCustomers() {
		System.out.println("Se encuentran los datos: ");
		return (List<Customer>) customerRepository.findAll() ;
	}

	@Override
	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public Customer deleteCustomerById(Long id) {
		Customer customer= findCustomerById(id);
		customerRepository.deleteById(id);
		return customer;
	}

	@Override
	public Customer findCustomerById(Long id) {
		return customerRepository.findById(id).orElse(null);
	}

}
