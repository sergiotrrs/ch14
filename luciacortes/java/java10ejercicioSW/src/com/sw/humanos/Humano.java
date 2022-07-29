package com.sw.humanos;

public class Humano {
	private String nombre;
	private String afiliacion;
	private String raza;
	private String sexo;
	/**
	 * @param nombre
	 * @param afiliacion
	 * @param raza
	 * @param sexo
	 */
	public Humano(String nombre, String afiliacion, String raza, String sexo) {
		this.nombre = nombre;
		this.afiliacion = afiliacion;
		this.raza = raza;
		this.sexo = sexo;
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
	public String getRaza() {
		return raza;
	}
	public void setRaza(String raza) {
		this.raza = raza;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	
	public String datos() {
		return this.nombre+ this.afiliacion+ this.raza +this.sexo;
	}
	
}
