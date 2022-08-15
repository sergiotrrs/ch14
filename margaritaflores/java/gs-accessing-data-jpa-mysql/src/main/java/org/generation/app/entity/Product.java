package org.generation.app.entity;

import java.io.Serializable;

import javax.persistence.*;


import lombok.Data;

@Entity
@Data
@Table(name = "product")
public class Product implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Long productId;
	private String description;
	private Double price;
}
