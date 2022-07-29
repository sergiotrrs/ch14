package com.corsarios.producto;

public class ModGarrafa extends Modelo {
	private int groser;

	public ModGarrafa(int id, int capacidad, double costo, int groser) {
		super(id, capacidad, costo);
		this.groser = groser;
	}

	public int getGroser() {
		return groser;
	}

	public void setGroser(int groser) {
		this.groser = groser;
	}

	@Override
	public double agregarCarrito() {
		System.out.println("La garrafa se ha agregado al carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
	System.out.println("Se ha almacenado la garrafa en caja de 4");
		return true;
	}
	
	
	
	
	
}
