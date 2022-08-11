package org.generation.app.entity;

import javax.persistence.*;
import lombok.*;

@Entity //springboot
@Data //lombok
@Table(name="customer_data") //nombre de la tabla 
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCustomer; //id_customer: snake case de base de datos
	//@Size (para tamñao del varchar) de la dependencia  javax.validation
	@Column(name="first_name") //pa dar nombre de columna
	private String firstName; //first_name
	@Column(name="last_name")
	private String lastName;
	/**
	 * 
	 */
	public Customer() {
		super();
	}
	/**
	 * @param idCustomer
	 * @param firstName
	 * @param lastName
	 */
	public Customer(Long idCustomer, String firstName, String lastName) {
		super();
		this.idCustomer = idCustomer;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	/**
	 * @return the idCustomer
	 */
	public Long getIdCustomer() {
		return idCustomer;
	}
	/**
	 * @param idCustomer the idCustomer to set
	 */
	public void setIdCustomer(Long idCustomer) {
		this.idCustomer = idCustomer;
	}
	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	@Override
	public String toString() {
		return "Customer [idCustomer=" + idCustomer + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}
	
	
	
	

}
