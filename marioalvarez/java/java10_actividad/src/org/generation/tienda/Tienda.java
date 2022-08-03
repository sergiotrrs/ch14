package org.generation.tienda;

import java.util.HashMap;

public class Tienda {

	private HashMap<Integer, Cliente> tienda;
	private String nombreTienda;
	
	public Tienda(String nombreTienda) {
		this.tienda = new HashMap<Integer, Cliente>();
		this.nombreTienda = nombreTienda;
	}

	public String getNombreTienda() {
		return nombreTienda;
	}

	public void setNombreTienda(String nombreTienda) {
		this.nombreTienda = nombreTienda;
	}
	
	public void addCliente(int ID, Cliente persona) {
		tienda.put(ID,persona);
	}

	public void imprimirClientes() {
		System.out.println("Clientes de tienda "+nombreTienda+":");
		for(Cliente persona: tienda.values()) {
			System.out.println("* "+persona.getNombre());
		}
	}
}
