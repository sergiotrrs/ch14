package org.generation.app.util;

import org.generation.app.entity.Dollar;

public class ConvertirToDolar {

	public Double conversorDolar(Dollar precioDolarActual, Double valorAConvertir) {
		return valorAConvertir/precioDolarActual.getDollarValue();
	
	}
	
}
