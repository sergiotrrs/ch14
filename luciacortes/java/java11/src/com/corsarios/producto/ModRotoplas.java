package com.corsarios.producto;

public class ModRotoplas extends ModGarrafa{
	private boolean bpaFree;

	/**
	 * @param id
	 * @param capacidad
	 * @param costo
	 * @param grosor
	 * @param bpafree
	 */
	public ModRotoplas(int id, int capacidad, double costo, int grosor, boolean bpaFree) {
		super(id, capacidad, costo, grosor);
		this.setBpaFree(bpaFree);
	}

	public boolean isBpaFree() {
		return bpaFree;
	}

	public void setBpaFree(boolean bpaFree) {
		this.bpaFree = bpaFree;
	}
//	//No se puede sobreescribi por que es final
//	@Override
//	public double agregarCarrito() {
//		System.out.println("La garrafa se ha almacenado al carrito");
//		return super.getCosto();
//	
	
}
