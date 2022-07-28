package com.corsarios.producto;

public class ModBolsillo extends Modelo{
	//Atributos
	private int color; 
	
	

	
	public ModBolsillo(int id, int capacidad, int costo, String nombre, int color) {
		super(id, capacidad, costo, nombre);
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
		System.out.println("El modelo bolsillo se agrega al carrito");
		return super.getCosto();
	}
	
	@Override
	public boolean almacenar() {
		System.out.println("El modelo bolsillo ha sido implementado");
		return true;
	}

}
