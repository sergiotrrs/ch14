package com.sw.droides;

public class Droide {
	private String nombre;
	private String afiliacion;
	private int size;
	private String ocupacion;
	/**
	 * @param nombre
	 * @param afiliacion
	 * @param size
	 * @param ocupacion
	 */
	public Droide(String nombre, String afiliacion, int size, String ocupacion) {
		this.nombre = nombre;
		this.afiliacion = afiliacion;
		this.size = size;
		this.ocupacion = ocupacion;
		}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getAfiliacion() {
		return afiliacion;
	}
	public void setAfiliacion(String afiliacion) {
		this.afiliacion = afiliacion;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getOcupacion() {
		return ocupacion;
	}
	public void setOcupacion(String ocupacion) {
		this.ocupacion = ocupacion;
	}
	
	

}
