package org.generation.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Customer {
	
	private String firstName; //columna: first_name
	@Id //pk
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id_customer;	
	private String lastName;
	
	public Customer() {
		
	}
	
	public Customer(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
}
