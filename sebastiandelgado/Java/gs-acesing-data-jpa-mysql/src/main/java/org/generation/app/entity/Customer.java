package org.generation.app.entity;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Entity
@Data
@Table(name="customer_data")
public class Customer {
	
	//Se configura el primer dato id
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) //indica con IDENTITY que es auntoincrementable
	private Long idCustomer;
	//Si quiero ver cómo se va a guardar
	@Column(name="first_name")  // Se cambia el nombre de la columna
	private String firstName; //firstName
	private String lastName;
	@ManyToOne(fetch=FetchType.LAZY)  // --> Hago la relación
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) //--> instrucción para JSON
	private Role role;
	
	

	
}
