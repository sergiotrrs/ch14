package org.generation.app.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.*;

@Entity //springboot
@Data //lombok
@Table(name="customer_data") //nombre de la tabla 
public class Customer implements Serializable{
	private static final long serialVersionUID =1L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCustomer; //id_customer: snake case de base de datos
	//@Size (para tamñao del varchar) de la dependencia  javax.validation
	@Column(name="first_name") //pa dar nombre de columna
	private String firstName; //first_name
	@Column(name="last_name")
	private String lastName;
	@ManyToOne(fetch=FetchType.LAZY)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Role role;
	
	
//	@OneToMany
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	private List<Order> orders;
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
	 * @param role
	 */
	public Customer(Long idCustomer, String firstName, String lastName, Role role) {
		super();
		this.idCustomer = idCustomer;
		this.firstName = firstName;
		this.lastName = lastName;
		this.role = role;
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


	/**
	 * @return the role
	 */
	public Role getRole() {
		return role;
	}


	/**
	 * @param role the role to set
	 */
	public void setRole(Role role) {
		this.role = role;
	}
	
	
	
	

}
