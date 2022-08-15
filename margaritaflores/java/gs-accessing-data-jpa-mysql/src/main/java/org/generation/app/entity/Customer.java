package org.generation.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="customer_data")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)//Se coloca el identity  para que sea autoincrementarle
	private long idCustomer;
	//@Size(min=4, max=100), para poder utilizarlo es instalar una depedencia
	@Column(name="first_name")
	private String firstName;
	private String lastName;
	@ManyToOne(fetch=FetchType.LAZY)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Role role;
	private Order customer_order;
	
	public long getId() {
		return idCustomer;
	}
	public void setId(long id) {
		this.idCustomer = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public void setIdCustomer(Object object) {
		// TODO Auto-generated method stub
	}
	
	public Order getCustomer_order() {
		return customer_order;
	}
	public void setCustomer_order(Order customer_order) {
		this.customer_order = customer_order;
	}
	
	
	
}
