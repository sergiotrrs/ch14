package com.corsarios.producto.pruebas;

import java.util.ArrayList;

import com.corsarios.producto.ModBolsillo;
import com.corsarios.producto.ModGarrafa;
import com.corsarios.producto.ModRotoplas;
import com.corsarios.producto.Modelo;

public class Prueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ModBolsillo chiquitin = new ModBolsillo(1256, 5, 0x0381, 4.5);
		ModGarrafa grandecin = new ModGarrafa(2658, 2000, 0x0000, 13);
		//mdoelo generico = new Modelo (111', 05); no se puede instanciar
		Modelo rotoplas = new ModRotoplas(2570,200, 50.90, 13,true);
		
		ArrayList<Modelo> inventario = new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
		
		inventario.forEach(producto -> imprimirID(producto));
		
		
	}
	
	/*
	 * Para usar un método dentro de un método estátito (Como lo es main)
	 * El método también debe ser estático
	 */
	public static void imprimirID(Modelo producto) {
		System.out.println("El costo del producto es: " + producto.agregarCarrito());
	}

}
