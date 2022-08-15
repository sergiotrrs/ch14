package org.generation.app.entity;

import java.util.List;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="customer_data")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idCustomer; //id_customer
	@Column(name="first_name")
	private String firstName; //first_name
	private String lastName;
	
	

	@OneToMany@
	GeneratedValue(strategy=GenerationType.IDENTITY)
	private List<Order> orders;
	
}
