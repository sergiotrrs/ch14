package com.corsarios.producto;

public class ModGarrafa extends Modelo{
	
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
	public double agregarCarrito() {
		System.out.println("La garrafas e a agregado al cartiyo");
		return super.getCosto();
				}

	@Override
	public boolean almacenar() {
		System.out.println("se almaceno la garrafa en caja 4");
		return true;
	}
	

}
