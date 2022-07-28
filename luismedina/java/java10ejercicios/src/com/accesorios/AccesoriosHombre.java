package com.accesorios;

import com.personas.Persona;

public class AccesoriosHombre {
	private String calzado;
	private String pantalon;
	private Persona hombre;

	
	/**
	 * @param calzado
	 * @param pantalon
	 * @param hombre
	 */
	public AccesoriosHombre(String calzado, String pantalon, Persona hombre) {
		this.calzado = calzado;
		this.pantalon = pantalon;
		this.hombre = hombre;
	}

	

	public String getCalzado() {
		return calzado;
	}



	public void setCalzado(String calzado) {
		this.calzado = calzado;
	}



	public String getPantalon() {
		return pantalon;
	}



	public void setPantalon(String pantalon) {
		this.pantalon = pantalon;
	}



	public Persona getHombre() {
		return hombre;
	}



	public void setHombre(Persona hombre) {
		this.hombre = hombre;
	}



	public String datos() {
		return this.hombre.getNombre() + " usa calzado tipo " + this.calzado + " Y pantalon tipo " + this.pantalon;
	}

}
