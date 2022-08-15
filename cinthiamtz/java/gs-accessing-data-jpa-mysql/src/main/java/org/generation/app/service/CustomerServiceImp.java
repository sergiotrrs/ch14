package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Customer;
import org.generation.app.reposity.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImp implements ICustomerService{

	@Autowired
	ICustomerRepository customerRepository;

	@Override
	public List<Customer> findAllCustomers() {
		
		return (List<Customer>) customerRepository.findAll();
	}

	@Override
	public Customer save(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer);
	}

	@Override
	public void deleteCustomerById(Long Id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Customer findCustomerById(Long Id) {
		// TODO Auto-generated method stub
		return customerRepository.findById(Id).orElse(null);
	}

}