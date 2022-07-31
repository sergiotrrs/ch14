package com.sw.humanos;

public class Jedi {
	private String nombre;
	private String colorSable;
	private String rango;
	private String legion;
	/**
	 * @param colorSable
	 * @param rango
	 * @param legion
	 */
	public Jedi(String nombre, String colorSable, String rango, String legion) {
		this.nombre = nombre;
		this.colorSable = colorSable;
		this.rango = rango;
		this.legion = legion;
	}
	public String getNombre() {
		return nombre;
	}
	public String setNombre(String nombre) {
		return nombre;
	}
	public String getColorSable() {
		return colorSable;
	}
	public void setColorSable(String colorSable) {
		this.colorSable = colorSable;
	}
	public String getRango() {
		return rango;
	}
	public void setRango(String rango) {
		this.rango = rango;
	}
	public String getLegion() {
		return legion;
	}
	public void setLegion(String legion) {
		this.legion = legion;
	}
	
}
