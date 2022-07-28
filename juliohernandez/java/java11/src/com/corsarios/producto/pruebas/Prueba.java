package com.corsarios.producto.pruebas;

import java.util.ArrayList;

import com.corsarios.producto.*;

public class Prueba {

	public static void main(String[] args) {
		ModBolsillo chiquin = new ModBolsillo(1256,5,4,"Chiquitin",0x5381);
		ModGarrafa grandecin = new ModGarrafa(0, 0, 0, "Grandecín", 0);
		
		//Las clases hijas pueden ser instanciadas desde la clase base;
		//De esta forma, puede convertirse luego en una clase 'primo'
		Modelo rotoplas = new ModRotoplas(2570, 2000, 50, "Rotoplas", 1, false);

		
		var inventario = new ArrayList<Modelo>();
		inventario.add(grandecin);
		inventario.add(chiquin);
		inventario.add(rotoplas);
		
		inventario.forEach(elemento->imprimirID(elemento));
	}
	
	/**
	 * Para usar un método dentro de un método estático (como lo es main),
	 * el método también debe ser estático
	 */
	
	 public static void imprimirID(Modelo producto) {
		 System.out.println("El ID del producto es: "+producto.getId());
	 }

}
