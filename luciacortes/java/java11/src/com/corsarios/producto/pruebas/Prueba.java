package com.corsarios.producto.pruebas;

import java.util.ArrayList;

import com.corsarios.producto.ModBolsillo;
import com.corsarios.producto.ModGarrafa;
import com.corsarios.producto.ModRotoplas;
import com.corsarios.producto.Modelo;

public class Prueba {

	public static void main(String[] args) {
		ModBolsillo chiquitin = new ModBolsillo(1256, 5, 0x23452, 4.5);
		ModGarrafa grandon = new ModGarrafa(2568, 2000, 15.23, 13);
		//Modelo generico = new Modelo(1, 1, 10.5); No se puede instanciar porque es abstracto.
		Modelo rotoplas = new ModRotoplas(2579, 2000, 50.90, 13, false);
		
		ArrayList<Modelo> inventario = new ArrayList <Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandon);
		inventario.add(rotoplas);
		
		inventario.forEach(producto-> imprimirID(producto));
	}

	/**
	 * Para usar un método dentro de un método estático como lo es main
	 * el método tambiéb debe ser estático
	 * @param producto
	 */
	public static void imprimirID(Modelo producto) {
		System.out.println("El costo del producto es "+producto.agregarCarrito());
	}
}
