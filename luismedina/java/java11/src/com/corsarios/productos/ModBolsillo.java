package com.corsarios.productos;

public class ModBolsillo extends Modelo {
	private int color;

	/**
	 * @param id
	 * @param capacidad
	 * @param color
	 * @param costo
	 */
	public ModBolsillo(int id, int capacidad, int color, double costo) {
		super(id, capacidad, costo);
		this.setColor(color);
	}

	@Override
	public double agregarCarrito() {
		System.out.println("El modelo bolsillo se agrega al carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		System.out.println("Modelo bolsillo ha sido almacenado");
		return false;
	}

	/**
	 * @return the color
	 */
	public int getColor() {
		return color;
	}

	/**
	 * @param color the color to set
	 */
	public void setColor(int color) {
		this.color = color;
	}

}
