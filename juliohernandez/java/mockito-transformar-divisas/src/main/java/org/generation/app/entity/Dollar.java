package org.generation.app.entity;

import java.util.Date;

import lombok.Data;

@Data
public class Dollar {
	
	private Double dollarValue;
	private Date date;

	public Dollar() {
		
	}
	
	public Dollar(Double dollarValue, Date date) {
		super();
		this.dollarValue = dollarValue;
		this.date = date;
	}


}


