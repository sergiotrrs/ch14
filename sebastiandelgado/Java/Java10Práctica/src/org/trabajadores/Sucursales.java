package org.trabajadores;



public class Sucursales {

	public String Ciudad;
	public String Sucursal;
	public int telefono;
	private Vendedor vendedor;
	
	
	public Sucursales(String ciudad, String sucursal, int telefono, Vendedor vendedor) {
		this.Ciudad = ciudad;
		this.Sucursal = sucursal;
		this.telefono = telefono;
		this.vendedor = vendedor;
	}



	public String getCiudad() {
		return Ciudad;
	}



	public void setCiudad(String ciudad) {
		Ciudad = ciudad;
	}



	public String getSucursal() {
		return Sucursal;
	}



	public void setSucursal(String sucursal) {
		Sucursal = sucursal;
	}



	public int getTelefono() {
		return telefono;
	}



	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}
	
	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}
	
	
	public String datosSucursal() {
		return "Sucursal: " + this.Sucursal +" Ciudad: " + this.Ciudad + " teléfono: " + this.telefono +
				" vendedor: " + this.vendedor.nombre;
	}
	
	
}
