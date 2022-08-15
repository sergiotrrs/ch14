package com.corsarios.producto.pruebas;

import java.util.ArrayList;

import com.corsarios.producto.ModBolsillo;
import com.corsarios.producto.ModGarrafa;
import com.corsarios.producto.ModRotoplas;
import com.corsarios.producto.Modelo;

public class Prueba {

	public static void main(String[] args) {
		ModBolsillo chiquitin = new ModBolsillo(1256, 5, 0x5381, 4.5);
		ModGarrafa grandecin = new ModGarrafa(2568, 2000, 15.23, 13);
		//Modelo generico = new Modelo(1,1,10.5); No se pude instanciar
		Modelo rotoplas = new ModRotoplas(2570, 2000, 50.90, 13, false);
		
		ArrayList<Modelo> inventario = new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
		
		inventario.forEach(producto -> imprimirID(producto));
		
		
		
		
	}
	/**
	 * Para usar un método dentro de un método estático (como lo es main),
	 * el métod también debe ser estático
	 * @param producto
	 */
	public static void imprimirID(Modelo producto) {
		System.out.println("El costo del producto  " + producto.agregarCarrito() );
	}

}
