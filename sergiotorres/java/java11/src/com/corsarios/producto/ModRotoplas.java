package com.corsarios.producto;

public class ModRotoplas extends ModGarrafa {
	private boolean bpaFree;

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
	
	//No se puede sobreescribir, por que el método de la case base
	// es final.
//	@Override
//	public double agregarCarrito() {
//		System.out.println("El rotoplas se ha agregado al carrito");
//		return super.getCosto();
//	}

	
	

}
