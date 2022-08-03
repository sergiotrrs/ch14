package com.corsarios.producto;

public class ModRotoplas extends ModGarrafa{

	private boolean bpaFree;

	public ModRotoplas(int id, int capacidad, double costo, int grosor, boolean bpaFree) {
		super(id, capacidad, costo, grosor);
		this.bpaFree = bpaFree;
	}

	public boolean isBpaFree() {
		return bpaFree;
	}

	public void setBpaFree(boolean bpaFree) {
		this.bpaFree = bpaFree;
	}
	
	
	
}
