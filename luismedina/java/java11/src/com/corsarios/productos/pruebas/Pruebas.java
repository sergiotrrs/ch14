package com.corsarios.productos.pruebas;

import java.util.ArrayList;

import com.corsarios.productos.ModBolsillo;
import com.corsarios.productos.ModGarrafa;
import com.corsarios.productos.ModRotoplas;
import com.corsarios.productos.Modelo;

public class Pruebas {

	public static void main(String[] args){
		ModBolsillo chiquitin = new ModBolsillo(1256, 5, 0x5381, 4.5);
		ModGarrafa grandecin = new ModGarrafa(2658, 2000, 15.23, 13);
//		Modelo generico = new Modelo(1,1,10.5); No se puede instanciar
		Modelo rotoplas = new ModRotoplas(2570, 3000, 50.90, 13, false);

		ArrayList<Modelo> inventario = new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
		
		inventario.forEach(producto -> imprimirID(producto));

	}
	/**
	 * Para usar un metodo dentro de un metodo estatico como lo es main el metodo tambien debe ser estatico
	 * @param producto
	 */
	public static void imprimirID(Modelo producto) {
		System.out.println("El precio del producto es "+producto.agregarCarrito());
	}
}
