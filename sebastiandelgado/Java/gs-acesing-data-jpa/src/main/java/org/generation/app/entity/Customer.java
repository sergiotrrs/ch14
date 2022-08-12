package org.generation.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;


//Para hacer conexión con base de datos

@Entity  //Esto se va a relacionar a una tabla, esta clase va a ser una tabla
@Data
public class Customer {

	@Id  //PK
	@GeneratedValue(strategy=GenerationType.AUTO) //Para que nos autoincremente el valor del id
	private Long id_customer;  
	private String firstName; //columna: firstname
	private String lastName;
	
	
	public Customer() {
		
	}
	
	public Customer(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	
	
}
