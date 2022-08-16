package org.generation.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {

		@Id //Con este le indicamos cual va a hacer la columna que será la llave primaria
		@GeneratedValue(strategy=GenerationType.AUTO) //Para indicar que es la  llave primaria es autoincrementarle
		private Long id;
		private String firstName; //columna: first_name
		private String lastName;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
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
		protected Customer() {
			
		}
		public Customer(String firstName, String lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}
		
}
