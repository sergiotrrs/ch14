package com.corsarios.producto;

public class ModBolsillo extends Modelo {
	private int color;
	


	/**
	 * @param id
	 * @param capacidad
	 * @param color
	 */
	public ModBolsillo(int id, int capacidad, int color,double costo) {
		super(id, capacidad, costo);
		this.color = color;
	}

	public int getColor() {
		return color;
	}

	public void setColor(int color) {
		this.color = color;
	}

	@Override
	public double agregarCarrito() {
		System.out.println("El modelo de bolsillo se agraga al carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		System.out.println("El modelo bolsillo ha sido almacenado"); 
		return false;
	}
	
}
