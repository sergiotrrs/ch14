package com.corsarios.producto;

public class ModRotoplas extends ModGarrafa {
	
	//Modelo > ModGarrafa > ModRotoplas
	//La clase nieto no tiene obligación de implementar los métodos abstractos porque la padre ya lo hizo
	
	private boolean bpaFree;

	public ModRotoplas(int id, int capacidad, int costo, String nombre, int grosor, boolean bpaFree) {
		super(id, capacidad, costo, nombre, grosor);
		this.bpaFree = bpaFree;
	}

	
}
