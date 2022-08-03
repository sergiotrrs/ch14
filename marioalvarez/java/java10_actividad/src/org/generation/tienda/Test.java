package org.generation.tienda;

public class Test {

	public static void main(String[] args) {
		
		Cliente c1= new Cliente("Canelo",20);
		Cliente c2= new Cliente("Juan",23);
		
		Tienda coppel = new Tienda("coppel");
		
		coppel.addCliente(1, c1);
		coppel.addCliente(2, c2);
		
		coppel.imprimirClientes();

	}

}
