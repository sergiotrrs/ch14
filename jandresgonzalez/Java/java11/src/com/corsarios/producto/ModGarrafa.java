package com.corsarios.producto;

public class ModGarrafa extends Modelo {
	
	public int grosor;

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
	
	

	/**
	 * @return the grosor
	 */
	public int getGrosor() {
		return grosor;
	}



	/**
	 * @param grosor the grosor to set
	 */
	public void setGrosor(int grosor) {
		this.grosor = grosor;
	}



	@Override
	public double agregarCarrito() {
		// TODO Auto-generated method stub
		System.out.println("Garrafa en el carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		// TODO Auto-generated method stub
		System.out.println("Almacenadísima la garrafia en caja");
		return true;
	}
	
	
	
}
