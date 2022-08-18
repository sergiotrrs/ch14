package org.generation.app.model;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;


import lombok.Data;

@Entity
@Data
@Table(name="customer_order")
public class Order implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long orderId;
	private String description;
	private String status;
	
	@ManyToOne(fetch=FetchType.LAZY)  //RELACIÓN Y TIPO DE ENLACE
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Customer customer;
	
	@ManyToMany(fetch=FetchType.LAZY)  //RELACIÓN Y TIPO DE ENLACE
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Products> products;
	
	
	
}
