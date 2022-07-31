package com.corsarios.producto.pruebas;

import java.util.ArrayList;

import com.corsarios.producto.ModBolsillo;
import com.corsarios.producto.ModGarrafa;
import com.corsarios.producto.ModRotoplas;
import com.corsarios.producto.Modelo;

public class Prueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ModBolsillo chiquitin = new ModBolsillo(1256, 50, 0x5381, 4.5);
		ModGarrafa grandecin = new ModGarrafa(2568,200,15.23,0);
		//Modelo generico = new Modelo(1,1,10.5); No se puede instanciar
		Modelo rotoplas = new ModRotoplas(2570, 2000, 50.90, 13, false);
		
		ArrayList<Modelo>inventario = new ArrayList <Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
		inventario.forEach(producto-> imprimirID(producto));
		
	}
	/**
	 * Para usar un metodo dentro de un metodo estatico (como lo es main ).
	 * el metodo tambien debe de ser estatico, se agrega static
	 * @param producto
	 */
//	public static void  imprimirID (Modelo=que tipo  producto)
	public static void  imprimirID (Modelo producto) {
//		System.out.println("El ID del producto es "+ producto.getId());
		System.out.println("El ID del producto es "+ producto.agregarCarrito());
	}

}
