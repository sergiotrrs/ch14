package org.generation.app.model;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@Table(name="customer_data")
public class Customer implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idCustomer;  //Lo guardará como id_customer
	@Size(min=4,max=100)
	@Column(name="first_name")
	private String firstName;
	private String lastName;
	
	//SE CONECTA COMO LLAVE FORANEA
	@ManyToOne(fetch=FetchType.LAZY)  //RELACIÓN Y TIPO DE ENLACE
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) //QUIEN SABE QUÉ ES ESTO
	private Role roles;
	
	//Lo de abajo crea muchos a muchos
	
	///SE CONECTA COMO LLAVE FORANEA
	//@OneToMany(fetch=FetchType.LAZY)  //RELACIÓN Y TIPO DE ENLACE
	//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	//private Order order;
}
