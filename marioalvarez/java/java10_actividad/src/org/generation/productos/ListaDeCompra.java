package org.generation.productos;

import java.util.ArrayList;

import org.generation.tienda.Cliente;

public class ListaDeCompra {

	ArrayList<Producto> lista;
	private String nombre;
	
	public ListaDeCompra(Cliente persona){
		lista= new ArrayList<Producto>();
		this.nombre=persona.getNombre();
	}
	
	public void addProducto(Producto producto) {
		lista.add(producto);
		System.out.println("Se añadio "+ producto.getNombre()+" a lista de "+nombre);
	}
	
	public void removeProducto(Producto producto) {
		if(lista.contains(producto)) {
			lista.remove(producto);
			System.out.println("Se removio "+ producto.getNombre()+" de la lista de "+nombre);
		}
		else {
			System.out.println("Lista de "+nombre+" no contiene "+producto);
		}
	}
	
	public void ImprimirLista() {
		System.out.println("La lista de "+ nombre);
		for(Producto producto:lista) {
			System.out.println("* "+producto.getNombre());
		}
	}
	
	
	
}
