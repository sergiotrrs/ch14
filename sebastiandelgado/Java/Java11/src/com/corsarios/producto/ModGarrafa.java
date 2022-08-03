package com.corsarios.producto;

public class ModGarrafa extends Modelo{

	private int grosor;
	

	public ModGarrafa (int id, int capacidad, double costo,int grosor) {
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
	public double agregarCarrito() {
		// TODO Auto-generated method stub
		System.out.println("La garrafa se ha agregado al carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		// TODO Auto-generated method stub
		System.out.println("Se ha almacenado la garrafa ");
		return false;
	}

	
}
