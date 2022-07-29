package com.corsarios.producto;

public class ModGarrafa extends Modelo {

	private int grosor;
	

	public ModGarrafa(int id, int capacidad, double costo, int grosor) {
		super(id, capacidad, costo);
		this.grosor = grosor;
	}

	
	public int getGrosor() {
		return grosor;
	}


	public void setGrosor(int grosor) {
		this.grosor = grosor;
	}


	@Override
	public final double agregarCarrito() {
		// TODO Auto-generated method stub
		System.out.println("La garrafa se ha agregado al carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		// TODO Auto-generated method stub
		System.out.println("La garrafa se ha almacenado en caja de 4");
		return false;
	}

}
