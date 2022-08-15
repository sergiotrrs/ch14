package org.ventas;

import java.util.HashMap;

import org.clientes.Cliente;
import org.trabajadores.Sucursales;
import org.trabajadores.Vendedor;

/*
 * Actividad: 
 * Crear un proyecto que tenga como mínimo dos paquetes
 * por lo menos 2 clases en 1 paquete.
 * Relacionar las clases entre si.
 * Realizar una clase de prueba.
 * Hacer una colección de la clase que relaciona al resto
 * de clases
 * 
 * Nota: las clases deben estar en capsuladas
 */


public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Vendedor martin = new Vendedor("Juan Huerta", "21/07/2022", "Mat");
		
		Compra compra1 = new Compra(1, "Sombrero", 99.50,martin);
		Cliente Sebas = new Cliente("Sebastian",  1956409, "Av. Saltillo #1320");
		Sucursales Saltillo = new Sucursales("Saltillo", "Centro", 4109955, 
				martin);
		
//		System.out.println(compra1.datosCompra());
//		System.out.println(Sebas.datosCliente());
//		System.out.println(Saltillo.datosSucursal());
		
		
		
	
		HashMap<Integer, Compra> compraLunes = new HashMap <Integer, Compra>();
		
		compraLunes.put(1, compra1);
		compraLunes.put(2,  
				new Compra(2, "Botas", 2000, 
						new Vendedor("Pablo Juárez", "25/07/2022", "Mat")));
		compraLunes.put(3, 
				new Compra(3, "Camisa", 300, 
						new Vendedor("Samuel Pérez", "25/07/2022", "Ves")));
		
		for(Compra compra: compraLunes.values()) {
			if (compra.getVendedor().getHorario().equals("Mat")) {
			System.out.println("Compra: " + compra.datosCompra());
			}
		}
	
		
	}

}
