package com.corsarios.productos;

public class ModGarrafa extends Modelo{
	
	private int grosor;
	
	public ModGarrafa(int id, int capacidad, double costo, int grosor) {
		super(id, capacidad, costo);
		this.grosor=grosor;
	}

	@Override
	public double agregarCarrito() {
		System.out.println("Garrafa en carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		System.out.println("Garaffa se almacena");
		return true;
	}

	
}
