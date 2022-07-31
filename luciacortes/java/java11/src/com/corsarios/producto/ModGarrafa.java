package com.corsarios.producto;

public class ModGarrafa extends Modelo{
	private int grosor;

	/**
	 * @param id
	 * @param capacidad
	 * @param costo
	 * @param grosor
	 */
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
		System.out.println("La garrafa se ha almacenado al carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		System.out.println("La garrafa se ha almacenado en una caja");
		return true;
	}
	
}
