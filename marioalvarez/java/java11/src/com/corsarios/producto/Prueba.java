package com.corsarios.producto;

import java.util.ArrayList;

public class Prueba {

	public static void main(String[] args) {

		ModBolsillo chiquitin = new ModBolsillo(1256, 5, 0xFFFFF, 4.5);
		ModGarrafa grandecin = new ModGarrafa(1256, 5, 15.23, 13);
		
		Modelo rotoplas = new ModRotoplas(2570, 2000, 50.90, 12, false);
		
		ArrayList<Modelo> inventario = new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
		
		inventario.forEach(producto->imprimirID(producto));
	}
	
	/**
	 * Para usar un método dentro de un método estático como lo es main, el método 
	 * también debe ser estático
	 * @param producto
	 */
	public static void imprimirID(Modelo producto) {
		System.out.println("El ID del producto es "+ producto.getId());
	}

}
