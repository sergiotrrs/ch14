package org.generation.app.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@Table(name="customer_data")
public class Customer implements Serializable{ 
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idCustomer; //id_customer
	@Column(name="first_name")
	private String firstName; //first_name
	private String lastName;
	@ManyToOne(fetch=FetchType.LAZY)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Role role;
	
//	@OneToMany
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	private List<Order> orders;
	
}
