package com.corsarios.producto;

public class ModRotoplas extends ModGarrafa {
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
	
	
	//No se puede sobre escribir porque la clase es final
//	@Override
//	public double agregarCarrito() {
//		// TODO Auto-generated method stub
//		System.out.println("La garrafa se ha agregado al carrito");
//		return super.getCosto();
////	}
//	

}
