package com.corsarios.producto;

public class ModRotoplas extends ModGarrafa {
	private boolean bpaFree;

	/**
	 * @param id
	 * @param capacidad
	 * @param costo
	 * @param grosor
	 * @param bpaFree
	 */
	public ModRotoplas(int id, int capacidad, double costo, int grosor, boolean bpaFree) {
		super(id, capacidad, costo, grosor);
		this.bpaFree = bpaFree;
	}

	/**
	 * @return the bpaFree
	 */
	public boolean isBpaFree() {
		return bpaFree;
	}

	/**
	 * @param bpaFree the bpaFree to set
	 */
	public void setBpaFree(boolean bpaFree) {
		this.bpaFree = bpaFree;
	}
	
	
	
	

}
