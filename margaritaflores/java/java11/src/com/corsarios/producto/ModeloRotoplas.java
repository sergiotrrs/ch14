package com.corsarios.producto;

public class ModeloRotoplas extends ModGarrafa{
	private boolean bpaFree;

	public ModeloRotoplas(int id, int capacidad, double costo, int groser, boolean bpaFree) {
		super(id, capacidad, costo, groser);
		this.bpaFree = bpaFree;
	}
//No se puede sobreescribir porque la clase es final
//	@Override
//	public final double agregarCarrito() {
//		System.out.println("La garrafa se ha agregado al carrito");
//		return super.getCosto();
//	}
//
//	
	
	
	
	
}




