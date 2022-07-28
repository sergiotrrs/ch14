package com.corsarios.producto;

public class ModBolsillo extends Modelo {
	private int color;
	
	

	/**
	 * @param id
	 * @param capacidad
	 * @param color
	 */
	public ModBolsillo(int id, int capacidad, int color, double costo) {
		super(id, capacidad, costo);
		this.color = color;
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



	@Override
	public double agregarCarrito() {
		// TODO Auto-generated method stub
		System.out.println("El modelo bolsillo se agrega al carrito");
		return super.getCosto();
	}

	@Override
	public boolean almacenar() {
		// TODO Auto-generated method stub
		System.out.println("Modelo bolsillo ha sido almcenado");
		return true;
	}
	

}
