package org.trabajadores;



public class Vendedor {

	public String nombre;
	public String fecha;
	public String horario;
	
	
	public Vendedor(String nombre, String fecha, String horario) {
		this.nombre = nombre;
		this.fecha = fecha;
		this.horario = horario;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getHorario() {
		return horario;
	}
	public void setHorario(String horario) {
		this.horario = horario;
	}
	
	public String datosVendedor() {
		return "Nombre vendedor: " + this.nombre + " fecha " + this.fecha + " en horario laboral: " + this.horario;
	}
	
}
