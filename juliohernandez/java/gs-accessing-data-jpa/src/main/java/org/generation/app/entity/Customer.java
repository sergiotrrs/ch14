package org.generation.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity //Para JPA. Springboot se dará cuenta de que es lo que se utilizará en la base de datos
@Data //Para que Lombok haga los setters y getters
public class Customer { //Si el nombre no se establece, toma el de la clase
	@Id // Es la llave primaria (implícito NN)
	@GeneratedValue(strategy=GenerationType.AUTO) //ó .AUTO  Autoincrementa el id
	private Long id;   //¿cómo se pondría un NN?
	private String firstName;  //Toma por default el nombre para la columna camelCase -> snake
	private String lastName;  //Caracteres x default = 255
	
	//Una tabla ocupa una fk 
	
	//Se agrega el constructor vacío (es requerido)
	public Customer() {
		
	}
	
	public Customer(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

}
