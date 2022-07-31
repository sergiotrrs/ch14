package com.corsarios.prueba;

import com.corsarios.producto.ModBolsillo;
import com.corsarios.producto.ModGarrafa;
import com.corsarios.producto.ModRotoplas;
import com.corsarios.producto.Modelo;

import java.util.*;

public class Prueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ModBolsillo chiquitin = new ModBolsillo(1, 150, 0x465654, 10.50);
		ModGarrafa grandcin = new ModGarrafa(2, 250, 20.25, 125);
//		Constructor not visible: abstract
//		Modelo generico = new Modelo() {
//			
//			@Override
//			public boolean almacenar() {
//				// TODO Auto-generated method stub
//				return false;
//			}
//			
//			@Override
//			public double agregarCarrito() {
//				// TODO Auto-generated method stub
//				return 0;
//			}
//		};
		
		Modelo rotoplas = new ModRotoplas(5646, 2000, 50.25, 20, true);
		
		
		ArrayList<Modelo> inventario = new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandcin);
		inventario.add(rotoplas);
		
		inventario.forEach(producto -> imprimirID(producto));
		
		}
	/*
	 * Para usar un método dentro de un
	 * método estático (public static void main)
	 * el método tiene que ser static también*/
	public static void imprimirID(Modelo producto) {
		System.out.println("El id del producto es " + producto.getId() );
		

	}

}
