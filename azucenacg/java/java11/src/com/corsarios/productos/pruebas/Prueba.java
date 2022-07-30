package com.corsarios.productos.pruebas;

import java.util.ArrayList;

import com.corsarios.productos.ModBolsillo;
import com.corsarios.productos.ModGarrafa;
import com.corsarios.productos.ModRotoplas;
import com.corsarios.productos.Modelo;

public class Prueba {

	public static void main(String[] args) {
		ModBolsillo chiquitin=new ModBolsillo(1256,5,0x5381,4.5);
		ModGarrafa grandecin = new ModGarrafa(2568,2000,15.23,13);
		//Modelo generico =new Modelo(1,1,10.5);
		//modelo generico no se puede instanciar porArrayList<E>/la clase es abstracta 
		
		Modelo rotoplas=new ModRotoplas(2570,2000,50.90,13,false);
		
		ArrayList<Modelo> inventario=new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
		
		inventario.forEach(producto->imprimirID(producto));
	
		/**
		 * en la variable producto se está aplicando polimorfismo
		 * porque el producto esta tomando la forma del 
		 * producto que corresponda, ya sea modelo garrafa o 
		 * modelo bolsillo 
		 * 
		 * Polimorfismo: los metodos tienen diferente forma 
		 * de acuerdo a los objetos que están dentro 
		 */
		
	}
	/**
	 * Si el método es static es de la clase y 
	 * quiere decir que está vivo desde que se inicia el 
	 * programa 
	 * 
	 * El médoto imprimirID no es statico, eso quiere decir que 
	 * debe ser instanciado en un objeto
	 * 
	 * public void imprimirID(Modelo producto) {
		System.out.println("El ID del producto es: "+producto.getId());
		}
	 */
	
	/**
	 * producto es un objeto de la clase Modelo
	 * es como si pusieramos String producto 
	 */
	public static void imprimirID(Modelo producto) {
		System.out.println("El ID del producto es: "+producto.getId());
	}
	
	
}
