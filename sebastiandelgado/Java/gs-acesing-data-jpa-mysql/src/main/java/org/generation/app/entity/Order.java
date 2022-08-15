package org.generation.app.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import java.io.Serializable;


@Entity
@Data
@Table(name = "customer_order")
public class Order implements Serializable{
	private static final long serialVersionUID =1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long orderId;
	private String description;
	private String status;
	
	@ManyToOne(fetch=FetchType.LAZY)  // --> Hago la relación
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) //--> instrucción para JSON
	private Customer customer;
	
	
	
	
	
	
	
	
	
}
