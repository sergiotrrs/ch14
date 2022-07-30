package com.corsarios.productos;

public class ModRotoplas extends ModGarrafa{
	//SE ESTA HEREDANDO DE LA clase base Mod
	private boolean bpaFree;

	public ModRotoplas(int id, int capacidad, double costo, int grosor, boolean bpaFree) {
		super(id, capacidad, costo, grosor);
		this.bpaFree = bpaFree;
	}
	
	
	
}
