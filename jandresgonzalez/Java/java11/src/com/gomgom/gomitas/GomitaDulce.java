package com.gomgom.gomitas;

public class GomitaDulce extends GomitaBase{
	private int nivelAzucar;
	private boolean chispas;
	private boolean frutitasEnTrocitos;
	/**
	 * @param nombre
	 * @param color
	 * @param sabor
	 * @param precio
	 * @param nivelAzucar
	 * @param chispas
	 * @param frutitasEnTrocitos
	 */
	public GomitaDulce(String nombre, int color, String sabor, double precio, int nivelAzucar, boolean chispas,
			boolean frutitasEnTrocitos) {
		super(nombre, color, sabor, precio);
		this.nivelAzucar = nivelAzucar;
		this.chispas = chispas;
		this.frutitasEnTrocitos = frutitasEnTrocitos;
	}
	public int getNivelAzucar() {
		return nivelAzucar;
	}
	public void setNivelAzucar(int nivelAzucar) {
		this.nivelAzucar = nivelAzucar;
	}
	public boolean isChispas() {
		return chispas;
	}
	public void setChispas(boolean chispas) {
		this.chispas = chispas;
	}
	public boolean isFrutitasEnTrocitos() {
		return frutitasEnTrocitos;
	}
	public void setFrutitasEnTrocitos(boolean frutitasEnTrocitos) {
		this.frutitasEnTrocitos = frutitasEnTrocitos;
	}
	
	public String dulzor() {
		String dulceFinal = null;
		switch(this.nivelAzucar) {
		case 1, 2, 3:
			dulceFinal = "...apto pa diabetes";
			break;
		case 4, 5, 6:
			dulceFinal = "...ta dulcito";
			break;
		case 7, 8, 9:
			dulceFinal = "...mega dulce!";
			break;
		case 10:
			dulceFinal = "...visite a su doctor!!!";
			break;
		}
		return "La gomita " + super.getNombre() + " es dulce: "  + dulceFinal  ; 
	}
	
	@Override
	public String eslogan() {
		return "La gomita " + super.getNombre() + ", dulce como tus sueños. " + this.dulzor(); 
	}
	
	
	

}
