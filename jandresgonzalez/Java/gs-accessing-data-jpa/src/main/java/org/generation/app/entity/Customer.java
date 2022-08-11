package org.generation.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {
	
	@Id //primary key y not null
	@GeneratedValue(strategy=GenerationType.AUTO) //Auto increment
	private Long id;
	private String firstName;
	private String lastName;
	
	protected Customer( ) {}

	

		  /**
	 * @param firstName
	 * @param lastName
	 */
	public Customer(String firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}



		@Override
		  public String toString() {
		    return String.format(
		        "Customer[id=%d, firstName='%s', lastName='%s']",
		        id, firstName, lastName);
		  }

		  public Long getId() {
		    return id;
		  }

		  public String getFirstName() {
		    return firstName;
		  }

		  public String getLastName() {
		    return lastName;
		  }
		  
		  
}
