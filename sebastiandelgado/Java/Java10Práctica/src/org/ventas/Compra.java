package org.ventas;

import org.trabajadores.Vendedor;

public class Compra {

	public int num;
	public String producto;
	public double precio;
	private Vendedor vendedor;
	
	
	public Compra(int num, String producto, double precio, Vendedor vendedor) {
		this.num = num;
		this.producto = producto;
		this.precio = precio;
		this.vendedor = vendedor;
	
	}


	public int getNum() {
		return num;
	}


	public void setNum(int num) {
		this.num = num;
	}


	public String getProducto() {
		return producto;
	}


	public void setProducto(String producto) {
		this.producto = producto;
	}


	public double getPrecio() {
		return precio;
	}


	public void setPrecio(double precio) {
		this.precio = precio;
	}
	
	public Vendedor getVendedor() {
		return this.vendedor;
	}
	
	public String datosCompra() {
		return  "Número: " + this.num + " producto: " + this.producto + " precio: "+ this.precio + 
				" Vendedor: " + this.vendedor.nombre + "fecha: " + this.vendedor.fecha + " horario: " + this.vendedor.horario;
	}
	
	
}
