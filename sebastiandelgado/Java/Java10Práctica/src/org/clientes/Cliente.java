package org.clientes;

public class Cliente {

	
	public String nombre;
	public int telefono;
	public String direccion;
	
	
	
	
	public Cliente(String nombre, int telefono, String direccion) {
		this.nombre = nombre;
		this.telefono = telefono;
		this.direccion = direccion;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getTelefono() {
		return telefono;
	}
	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	
	public String datosCliente() {
		return  "Nombre: " + this.nombre + " teléfono: " + this.telefono + " dirección: "+ this.direccion;
	}
}
